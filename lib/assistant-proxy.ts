/** Strict same-origin proxy to the public assistant service (ZI-CHAT-ADR-006 ADR-02, ADR-06, ADR-07; backend/assistant/API.md).
 *
 * The browser talks only to this host app. This file is deliberately framework-free and has no imports so the identical source can be
 * vendored into the marketing website. What crosses the proxy is an allowlist, never a pass-through:
 *   request  : 11 known routes, 3 methods, a 64 KB JSON body, five headers and the ONE cookie `zid_pa_session`;
 *              never Authorization, never any other cookie, never a query string.
 *   response : status, a JSON/text body, `retry-after`, `location` (302 from /out only) and a rebuilt host-only `zid_pa_session`
 *              cookie; every other upstream header is dropped. Always `cache-control: no-store`.
 *   failure  : an unreachable, slow or broken upstream is a 503 `UNAVAILABLE`. The proxy never answers on the assistant's behalf and
 *              never turns a failure into a success.
 */

export const SESSION_COOKIE = "zid_pa_session";
export const COOKIE_PATH = "/api/public/chat/v1";
const MAX_BODY_BYTES = 64 * 1024;
const MAX_RESPONSE_BYTES = 512 * 1024;
const BOOTSTRAP_TIMEOUT_MS = 3_000;
const DEFAULT_TIMEOUT_MS = 15_000;
const FORWARD_HEADERS = ["content-type", "accept", "accept-language", "idempotency-key", "origin"] as const;
const LINK_ID = /^[A-Za-z0-9_-]{1,64}$/;

type Method = "GET" | "POST" | "DELETE";
const ROUTES: Record<string, Method[]> = {
  bootstrap: ["GET"],
  sessions: ["POST", "DELETE"],
  messages: ["POST"],
  feedback: ["POST"],
  handoffs: ["POST"],
  "intake/config": ["GET"],
  "intake/sales": ["POST"],
  "intake/support": ["POST"],
  "preferences/marketing": ["POST"],
};

export interface AssistantProxyOptions {
  /** Base URL of the assistant service, for example `http://localhost:8210`. */
  upstream: string;
  /** Test seam; production uses the global fetch. */
  fetchImpl?: typeof fetch;
  /** True when the public origin is https (adds `Secure` to the relayed cookie). Defaults to the request URL's scheme. */
  secureCookies?: boolean;
}

/** The address the trusted edge appended (the LAST hop; the first can be spoofed by the visitor). The assistant uses it only as a
 * hashed, non-persistent rate-limit key; without it every visitor would share this server's address. */
function lastForwardedAddress(header: string | null): string | null {
  if (!header) return null;
  const last = header.split(",").pop()?.trim() ?? "";
  return /^[0-9a-fA-F:.]{3,45}$/.test(last) ? last : null;
}

function errorJson(status: number, code: string, message: string, extra: Record<string, string> = {}): Response {
  return new Response(JSON.stringify({ error: { code, message, correlation_id: null, retry_after_s: null } }), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store", ...extra },
  });
}

const unavailable = () => errorJson(503, "UNAVAILABLE", "The assistant is unavailable.");

/** `["intake","sales"]` -> `"intake/sales"`; `["out","OVERVIEW"]` -> `{out: "OVERVIEW"}`; anything else is refused. */
function resolve(segments: string[]): { route: string; linkId?: string } | null {
  if (segments.some((s) => !/^[A-Za-z0-9_-]+$/.test(s))) return null; // no dots, slashes or encoded traversal ever reach the upstream
  if (segments[0] === "out" && segments.length === 2) {
    const id = segments[1]!;
    return LINK_ID.test(id) ? { route: "out", linkId: id } : null;
  }
  const route = segments.join("/");
  return route in ROUTES ? { route } : null;
}

function sessionCookieFrom(header: string | null): string | null {
  if (!header) return null;
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    if (part.slice(0, i).trim() === SESSION_COOKIE) {
      const v = part.slice(i + 1).trim();
      return /^[A-Za-z0-9._~-]{8,512}$/.test(v) || v === "" ? v : null; // opaque handle only
    }
  }
  return null;
}

/** Rebuilds the cookie from its name and value so nothing else the upstream set (Domain, SameSite=None, other cookies) survives. */
function relayCookies(res: Response, secure: boolean): string[] {
  const out: string[] = [];
  const setCookies = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [];
  for (const raw of setCookies) {
    const parts = raw.split(";").map((p) => p.trim());
    const [pair, ...attrs] = parts;
    const eq = pair?.indexOf("=") ?? -1;
    if (!pair || eq < 1 || pair.slice(0, eq) !== SESSION_COOKIE) continue;
    const value = pair.slice(eq + 1);
    if (value !== "" && !/^[A-Za-z0-9._~-]{8,512}$/.test(value)) continue;
    let cookie = `${SESSION_COOKIE}=${value}; Path=${COOKIE_PATH}; HttpOnly; SameSite=Lax`;
    for (const a of attrs) {
      const m = /^max-age=(-?\d{1,9})$/i.exec(a);
      if (m) cookie += `; Max-Age=${m[1]}`;
    }
    if (value === "" && !/max-age=/i.test(cookie)) cookie += "; Max-Age=0";
    if (secure) cookie += "; Secure";
    out.push(cookie);
  }
  return out;
}

async function readBody(req: Request): Promise<{ ok: true; text: string | undefined } | { ok: false; res: Response }> {
  const declared = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) return { ok: false, res: errorJson(413, "PAYLOAD_TOO_LARGE", "The request is too large.") };
  const buf = new Uint8Array(await req.arrayBuffer());
  if (buf.byteLength > MAX_BODY_BYTES) return { ok: false, res: errorJson(413, "PAYLOAD_TOO_LARGE", "The request is too large.") };
  if (buf.byteLength === 0) return { ok: true, text: undefined };
  const type = (req.headers.get("content-type") ?? "").split(";")[0]!.trim().toLowerCase();
  if (type !== "application/json") return { ok: false, res: errorJson(415, "UNSUPPORTED_MEDIA_TYPE", "JSON only.") }; // no multipart, no uploads
  return { ok: true, text: new TextDecoder().decode(buf) };
}

export function createAssistantProxy(options: AssistantProxyOptions) {
  const base = options.upstream.replace(/\/$/, "");
  const doFetch = options.fetchImpl ?? fetch;

  return async function handle(req: Request, segments: string[]): Promise<Response> {
    const method = req.method.toUpperCase() as Method;
    const target = resolve(segments);
    if (!target) return errorJson(404, "NOT_FOUND", "Not found.");
    const allowed = target.route === "out" ? ["GET"] : (ROUTES[target.route] ?? []);
    if (!(allowed as string[]).includes(method)) return errorJson(405, "METHOD_NOT_ALLOWED", "Method not allowed.", { allow: allowed.join(", ") });

    const headers = new Headers();
    for (const name of FORWARD_HEADERS) {
      const v = req.headers.get(name);
      if (v) headers.set(name, v);
    }
    const peer = lastForwardedAddress(req.headers.get("x-forwarded-for"));
    if (peer) headers.set("x-forwarded-for", peer);
    const cookie = sessionCookieFrom(req.headers.get("cookie"));
    if (cookie) headers.set("cookie", `${SESSION_COOKIE}=${cookie}`); // the only cookie that ever leaves

    let body: string | undefined;
    if (method !== "GET") {
      const read = await readBody(req);
      if (!read.ok) return read.res;
      body = read.text;
    }

    const path = target.route === "out" ? `/out/${target.linkId}` : `/${target.route}`;
    const timeout = target.route === "bootstrap" ? BOOTSTRAP_TIMEOUT_MS : DEFAULT_TIMEOUT_MS;
    let upstream: Response;
    try {
      upstream = await doFetch(`${base}/api/public/chat/v1${path}`, {
        method,
        headers,
        body,
        redirect: "manual", // /out answers 302: relay it, never follow it server-side
        cache: "no-store",
        signal: AbortSignal.timeout(timeout),
      });
    } catch {
      return unavailable(); // refused, DNS failure, timeout: a failure, never a made-up answer
    }

    const status = upstream.status;
    const secure = options.secureCookies ?? new URL(req.url).protocol === "https:";
    const out = new Headers({ "cache-control": "no-store" });

    if (status >= 300 && status < 400) {
      const loc = upstream.headers.get("location") ?? "";
      let ok = false;
      try {
        const u = new URL(loc);
        const localDev = u.protocol === "http:" && (u.hostname === "localhost" || u.hostname === "127.0.0.1");
        ok = target.route === "out" && (u.protocol === "https:" || localDev); // verified HTTPS destinations only (plain http just for local development)
      } catch {
        ok = false;
      }
      if (!ok) return unavailable();
      out.set("location", loc);
      return new Response(null, { status: status === 301 || status === 308 ? 302 : status, headers: out });
    }
    if (status >= 500 || status < 200) return unavailable(); // never relay an upstream failure body or pretend it worked

    for (const c of relayCookies(upstream, secure)) out.append("set-cookie", c);
    const ra = upstream.headers.get("retry-after");
    if (ra && /^\d{1,6}$/.test(ra)) out.set("retry-after", ra);

    if (status === 204 || status === 205) return new Response(null, { status, headers: out });
    const type = (upstream.headers.get("content-type") ?? "").split(";")[0]!.trim().toLowerCase();
    if (type !== "application/json") return unavailable();
    const buf = new Uint8Array(await upstream.arrayBuffer());
    if (buf.byteLength > MAX_RESPONSE_BYTES) return unavailable();
    out.set("content-type", "application/json");
    return new Response(buf, { status, headers: out });
  };
}

/** The upstream base URL from an env value, or the local default. Anything that is not http(s) falls back to the default. */
export function upstreamFromEnv(value: string | undefined, fallback = "http://localhost:8210"): string {
  try {
    const u = new URL(value && value.trim() ? value.trim() : fallback);
    return u.protocol === "http:" || u.protocol === "https:" ? u.origin : fallback;
  } catch {
    return fallback;
  }
}
