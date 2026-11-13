import type {
  AnswerPacket,
  Bootstrap,
  FeedbackRating,
  HandoffPurpose,
  IntakeBody,
  IntakeConfig,
  IntakeKind,
  IntakePurposeConfig,
  IntakeReceipt,
  MarketingBody,
  SendMessageBody,
  SessionInfo,
} from "./types";

export const DEFAULT_API_BASE = "/api/public/chat/v1";

/** Every failure the widget can meet. `UNAVAILABLE` also covers a network failure, a timeout and any non-JSON upstream error: the
 * widget must then show its fallback and must never invent an answer or a success. */
export class AssistantApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly retryAfterS: number | null;
  readonly correlationId: string | null;

  constructor(status: number, code: string, message: string, retryAfterS: number | null = null, correlationId: string | null = null) {
    super(message);
    this.name = "AssistantApiError";
    this.status = status;
    this.code = code;
    this.retryAfterS = retryAfterS;
    this.correlationId = correlationId;
  }
}

export interface ClientOptions {
  apiBase?: string;
  fetchImpl?: typeof fetch;
}

interface RequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export function createAssistantClient(options: ClientOptions = {}) {
  const base = (options.apiBase ?? DEFAULT_API_BASE).replace(/\/$/, "");
  const doFetch = (...args: Parameters<typeof fetch>) => (options.fetchImpl ?? fetch)(...args);

  async function request(method: string, path: string, opts: RequestOptions = {}): Promise<Response> {
    const headers: Record<string, string> = { accept: "application/json", ...opts.headers };
    let body: string | undefined;
    if (opts.body !== undefined) {
      headers["content-type"] = "application/json";
      body = JSON.stringify(opts.body);
    }
    let res: Response;
    try {
      // same-origin proxy only: the browser never talks to the assistant service directly, and no uploads exist.
      res = await doFetch(`${base}${path}`, { method, headers, body, credentials: "same-origin", cache: "no-store", signal: opts.signal });
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") throw new AssistantApiError(0, "CANCELLED", "Cancelled.");
      throw new AssistantApiError(503, "UNAVAILABLE", "The assistant is unavailable.");
    }
    if (res.ok) return res;
    let code = res.status >= 500 ? "UNAVAILABLE" : "INVALID_REQUEST";
    let message = "The request could not be completed.";
    let retry: number | null = null;
    let correlation: string | null = null;
    try {
      const j = (await res.json()) as { error?: { code?: string; message?: string; retry_after_s?: number | null; correlation_id?: string } };
      if (j.error?.code) code = j.error.code;
      if (j.error?.message) message = j.error.message;
      retry = j.error?.retry_after_s ?? null;
      correlation = j.error?.correlation_id ?? null;
    } catch {
      /* not JSON (a gateway page, say): keep the generic code */
    }
    if (retry === null) {
      const h = Number(res.headers.get("retry-after"));
      if (Number.isFinite(h) && h > 0) retry = h;
    }
    throw new AssistantApiError(res.status, code, message, retry, correlation);
  }

  async function json<T>(method: string, path: string, opts: RequestOptions = {}): Promise<T> {
    const res = await request(method, path, opts);
    try {
      return (await res.json()) as T;
    } catch {
      throw new AssistantApiError(503, "UNAVAILABLE", "The assistant is unavailable.");
    }
  }

  return {
    base,
    /** The only way a link is opened: by the server-issued id, never by a URL. */
    linkUrl: (linkId: string) => `${base}/out/${encodeURIComponent(linkId)}`,
    bootstrap: () => json<Bootstrap>("GET", "/bootstrap"),
    createSession: (locale?: string) => json<SessionInfo>("POST", "/sessions", { body: locale ? { locale } : {} }),
    deleteSession: async () => {
      await request("DELETE", "/sessions");
    },
    sendMessage: (body: SendMessageBody, signal?: AbortSignal) => json<AnswerPacket>("POST", "/messages", { body, signal }),
    sendFeedback: async (responseId: string, rating: FeedbackRating) => {
      await request("POST", "/feedback", { body: { response_id: responseId, rating } });
    },
    intakeConfig: () => json<IntakeConfig>("GET", "/intake/config"),
    startHandoff: (purpose: HandoffPurpose) => json<IntakePurposeConfig>("POST", "/handoffs", { body: { purpose } }),
    submitIntake: (kind: IntakeKind, body: IntakeBody, idempotencyKey: string) =>
      json<IntakeReceipt>("POST", `/intake/${kind}`, { body, headers: { "idempotency-key": idempotencyKey } }),
    setMarketing: async (body: MarketingBody) => {
      await request("POST", "/preferences/marketing", { body });
    },
  };
}

export type AssistantClient = ReturnType<typeof createAssistantClient>;
