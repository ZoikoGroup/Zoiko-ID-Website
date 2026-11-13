import { createAssistantProxy, upstreamFromEnv } from "@/lib/assistant-proxy";
import { handleLocalAssistant } from "@/lib/assistant-local";

/** Same-origin relay to the public assistant service. Public and unauthenticated by design: it carries no Zoiko iD session, token or
 * cookie. The allowlist (routes, methods, headers, the one session cookie) lives in `lib/assistant-proxy.ts`. Runs at request time.
 * When ZID_ASSISTANT_API_URL is not set, the built-in assistant in `lib/assistant-local.ts` answers instead (local development). */
async function relay(req: Request, ctx: { params: Promise<{ path: string[] }> }): Promise<Response> {
  const { path } = await ctx.params;
  if (!process.env.ZID_ASSISTANT_API_URL?.trim()) return handleLocalAssistant(req, path);
  const proxy = createAssistantProxy({
    upstream: upstreamFromEnv(process.env.ZID_ASSISTANT_API_URL),
    secureCookies: process.env.NODE_ENV === "production" ? true : undefined,
  });
  return proxy(req, path);
}

export const GET = relay;
export const POST = relay;
export const DELETE = relay;
