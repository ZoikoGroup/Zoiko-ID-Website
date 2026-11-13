/* Vendored from the Zoiko iD platform repo (@zoiko/assistant-widget). Keep identical to the source; rules below are disabled to match the platform's lint config. */
/* eslint-disable react-hooks/refs, react-hooks/exhaustive-deps */
"use client";

import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";

import { AnswerCard } from "./AnswerCard";
import { AssistantApiError, createAssistantClient, DEFAULT_API_BASE } from "./client";
import { COPY as BASE_COPY, DEFAULT_AUDIENCES, type Audience } from "./copy";
import { trapTab, uuid } from "./focus";
import { ChatIcon, ChevronRightIcon, ClockIcon, CloseIcon, ExpandIcon, LockIcon, MinusIcon, MoonIcon, NamedIcon, PlusIcon, SendIcon, ShieldCheckIcon, ShrinkIcon, SunIcon, TrashIcon, UserIcon, toneFor } from "./icons";
import { HelpLinks, Intake } from "./Intake";
import type { AnswerPacket, Bootstrap, HandoffPurpose, IntakeConfig, IntakePurposeConfig } from "./types";
import "./styles.css";

/** The copy table is `as const`; an override is any string, not that exact literal. */
type WidenStrings<T> = { [K in keyof T]: T[K] extends string ? string : T[K] };

export interface FallbackLink {
  label: string;
  href: string;
}

export interface AssistantWidgetProps {
  /** Same-origin proxy of the assistant API (default `/api/public/chat/v1`). */
  apiBase?: string;
  locale?: string;
  /** Static public pages the host knows, shown when the assistant cannot even answer `bootstrap`. */
  fallbackLinks?: FallbackLink[];
  defaultOpen?: boolean;
  /** Test seam; production uses the global fetch. */
  fetchImpl?: typeof fetch;
  /** Overrides for the strings the widget writes itself (for example a host that reuses the UI for a different helper). Keep it a stable reference. */
  copy?: Partial<WidenStrings<typeof BASE_COPY>>;
  /** The host's official logo (an element, usually an SVG). The widget never draws a brand mark of its own; without one it shows a neutral chat glyph. */
  logo?: ReactNode;
  /** Audience shortcuts under the topic tiles. Each only sends a visible question. Pass `[]` for none. Keep it a stable reference. */
  audiences?: readonly Audience[];
  /** Shows a larger/smaller toggle in the header (desktop only). Off by default. */
  resizable?: boolean;
}

type Msg =
  | { id: string; at: number; kind: "user"; text: string }
  | { id: string; at: number; kind: "blocked" }
  | { id: string; at: number; kind: "assistant"; packet: AnswerPacket }
  | { id: string; at: number; kind: "notice"; tone: "info" | "error"; text: string; help: boolean };

type Load = { state: "idle" } | { state: "loading" } | { state: "ready"; data: Bootstrap } | { state: "failed" };
type View = { name: "chat" } | { name: "history"; index: number | null } | { name: "intake"; purpose: HandoffPurpose; config: IntakePurposeConfig; marketing: IntakeConfig["marketing"] | null };

const clock = (t: number): string => new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

/** The public assistant widget (WF-01..WF-04, ZI-CHAT-UX-001). Information only: it never signs anyone in, never holds an account
 * context, keeps the transcript in memory only (nothing in localStorage/sessionStorage/cookies of its own) and shows a fallback,
 * never a made-up answer, whenever the service cannot be reached.
 *
 * Deliberately absent from the design: a file-attach control. Public chat has no upload path (ADR-08, INV-03): identity documents and
 * other files must never be sent to this assistant, so there is nothing to attach. */
export function AssistantWidget({ apiBase = DEFAULT_API_BASE, locale = "en-US", fallbackLinks = [], defaultOpen = false, fetchImpl, copy, logo, audiences = DEFAULT_AUDIENCES, resizable = false }: AssistantWidgetProps) {
  const COPY = useMemo(() => ({ ...BASE_COPY, ...copy }), [copy]);
  const client = useMemo(() => createAssistantClient({ apiBase, fetchImpl }), [apiBase, fetchImpl]);
  const [open, setOpen] = useState(defaultOpen);
  const [large, setLarge] = useState(false);
  const [dark, setDark] = useState(false); // in memory only, like the transcript: nothing is stored in the browser
  const [load, setLoad] = useState<Load>(defaultOpen ? { state: "loading" } : { state: "idle" });
  const [view, setView] = useState<View>({ name: "chat" });
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  // Earlier chats of this window only: React state, never storage, never sent anywhere (ADR-07). Close or reload clears them.
  const [past, setPast] = useState<Msg[][]>([]);
  const hasSession = useRef(false);
  const abortRef = useRef<AbortController | null>(null); // the in-flight question, so it can be cancelled
  const shown = useRef<Set<string>>(new Set()); // answers already flowed in, so reopening the panel does not replay them
  const panelRef = useRef<HTMLElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const logRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  const data = load.state === "ready" ? load.data : null;
  const mark = logo ?? <ChatIcon />;

  // `bootstrap` is fetched lazily, the first time the panel opens (a visitor who never opens it costs the server nothing). The load is
  // started by an event handler (or the initial state when `defaultOpen`), and this effect only performs the request.
  useEffect(() => {
    if (!open || load.state !== "loading") return undefined;
    let live = true;
    client
      .bootstrap()
      .then((d) => live && setLoad({ state: "ready", data: d }))
      .catch(() => live && setLoad({ state: "failed" }));
    return () => {
      live = false;
    };
  }, [open, load.state, client]);

  // small screens: the panel is full-height, so the page behind it must not scroll
  useEffect(() => {
    if (!open || typeof window === "undefined" || !window.matchMedia("(max-width: 480px)").matches) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // focus: into the panel on open, back to the launcher on close
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open && !wasOpen.current) {
      const t = setTimeout(() => (inputRef.current ?? panelRef.current?.querySelector<HTMLElement>("button, a[href]"))?.focus(), 0);
      wasOpen.current = true;
      return () => clearTimeout(t);
    }
    if (!open && wasOpen.current) {
      wasOpen.current = false;
      launcherRef.current?.focus();
    }
    return undefined;
  }, [open, load.state]);

  // once the panel content is ready (or the user returns from a form) the question box takes focus, unless focus is already on content
  useEffect(() => {
    if (!open || load.state !== "ready" || !load.data.enabled || view.name !== "chat") return;
    const active = document.activeElement;
    const inPanel = !!panelRef.current && panelRef.current.contains(active);
    const onChrome = active instanceof HTMLElement && [COPY.close, COPY.minimize, COPY.maximize, COPY.restore].includes(active.getAttribute("aria-label") ?? "");
    if (!inPanel || onChrome || active === document.body) inputRef.current?.focus();
  }, [open, load, view.name]);

  useEffect(() => {
    const el = logRef.current;
    if (el && typeof el.scrollTo === "function") el.scrollTo({ top: el.scrollHeight });
  }, [msgs, pending]);

  const staticHelp = data?.static_help ?? [];
  const chatOn = data?.enabled === true;
  const maxChars = data?.limits.message_max_chars ?? 1000;

  async function ensureSession() {
    if (hasSession.current) return;
    await client.createSession(locale);
    hasSession.current = true;
  }

  async function send(raw: string) {
    const text = raw.trim();
    if (!text || pending || !chatOn) return;
    if (text.length > maxChars) {
      setMsgs((m) => [...m, { id: uuid(), at: Date.now(), kind: "notice", tone: "error", text: COPY.tooLong(maxChars), help: false }]);
      return;
    }
    const userId = uuid();
    const messageId = uuid();
    setMsgs((m) => [...m, { id: userId, at: Date.now(), kind: "user", text }]);
    setDraft("");
    setPending(true);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      await ensureSession();
      let packet: AnswerPacket;
      try {
        packet = await client.sendMessage({ client_message_id: messageId, text, locale }, ctrl.signal);
      } catch (err) {
        if (err instanceof AssistantApiError && err.code === "INVALID_GUEST_SESSION") {
          hasSession.current = false;
          await ensureSession(); // one recreate, same message id: the server replays instead of duplicating
          packet = await client.sendMessage({ client_message_id: messageId, text, locale }, ctrl.signal);
        } else {
          throw err;
        }
      }
      setMsgs((m) => [...m, { id: uuid(), at: Date.now(), kind: "assistant", packet }]);
    } catch (err) {
      const e = err instanceof AssistantApiError ? err : null;
      if (e?.code === "CANCELLED") {
        setMsgs((m) => [...m, { id: uuid(), at: Date.now(), kind: "notice", tone: "info", text: COPY.cancelled, help: false }]);
      } else if (e?.code === "SENSITIVE_CONTENT_BLOCKED") {
        // the text is dropped from memory too: it is never shown again or kept
        setMsgs((m) => [
          ...m.map((x) => (x.id === userId ? ({ id: userId, at: x.at, kind: "blocked" } as Msg) : x)),
          { id: uuid(), at: Date.now(), kind: "notice", tone: "info", text: COPY.sensitive, help: false },
        ]);
      } else {
        const text2 =
          e?.code === "RESOURCE_LIMIT" ? COPY.limited(e.retryAfterS)
          : e?.code === "INVALID_GUEST_SESSION" ? COPY.sessionExpired
          : e?.code === "PAYLOAD_TOO_LARGE" ? COPY.tooLong(maxChars)
          : e?.code === "INVALID_REQUEST" ? COPY.invalid
          : `${COPY.unavailableTitle}. ${COPY.unavailableBody}`;
        const unavailable = !e || !["RESOURCE_LIMIT", "INVALID_GUEST_SESSION", "PAYLOAD_TOO_LARGE", "INVALID_REQUEST"].includes(e.code);
        setMsgs((m) => [...m, { id: uuid(), at: Date.now(), kind: "notice", tone: "error", text: text2, help: unavailable }]);
      }
    } finally {
      if (abortRef.current === ctrl) abortRef.current = null;
      setPending(false);
    }
  }

  function cancelPending() {
    abortRef.current?.abort();
  }

  /** New chat: the current conversation moves to this window's history, the server session is deleted and the next question starts fresh. */
  async function newChat() {
    if (pending) return;
    if (msgs.some((m) => m.kind === "user")) setPast((p) => [msgs, ...p].slice(0, 10));
    if (hasSession.current) {
      try {
        await client.deleteSession();
      } catch {
        /* the server session also expires on its own */
      }
    }
    hasSession.current = false;
    setMsgs([]);
    setDraft("");
    setView({ name: "chat" });
  }

  /** Close (X) ends the chat: the server session and everything shown here are cleared (ADR-07). Minimize only hides the panel. */
  async function endChat() {
    abortRef.current?.abort();
    setOpen(false);
    if (hasSession.current) {
      try {
        await client.deleteSession();
      } catch {
        /* the server session also expires on its own */
      }
    }
    hasSession.current = false;
    setMsgs([]);
    setPast([]);
    setDraft("");
    setView({ name: "chat" });
  }

  async function startHandoff(purpose: HandoffPurpose) {
    try {
      await ensureSession();
      const [config, all] = await Promise.all([client.startHandoff(purpose), client.intakeConfig().catch(() => null)]);
      setView({ name: "intake", purpose, config, marketing: all?.marketing ?? null });
    } catch {
      setView({ name: "intake", purpose, config: { available: false }, marketing: null });
    }
  }

  function onPanelKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.stopPropagation();
      setOpen(false); // minimize: the conversation stays
      return;
    }
    trapTab(e, panelRef.current);
  }

  const renderMsgs = (list: Msg[], animate = true) =>
    list.map((m) =>
                    m.kind === "user" ? (
                      <div key={m.id} className="zpa-row zpa-row-user">
                        <span className="zpa-avatar zpa-avatar-user" aria-hidden="true"><UserIcon /></span>
                        <div className="zpa-stack">
                          <p className="zpa-bubble zpa-bubble-user"><span className="zpa-sr">You said: </span>{m.text}</p>
                          <time className="zpa-time" dateTime={new Date(m.at).toISOString()}>{clock(m.at)}</time>
                        </div>
                      </div>
                    ) : m.kind === "blocked" ? (
                      <p key={m.id} className="zpa-msg zpa-user zpa-blocked">{COPY.blocked}</p>
                    ) : m.kind === "assistant" ? (
                      <AnswerCard key={m.id} packet={m.packet} client={client} flags={flags} onHandoff={(p) => void startHandoff(p)} logo={mark} time={clock(m.at)} animate={animate && !shown.current.has(m.id)} onRevealed={() => shown.current.add(m.id)} />
                    ) : (
                      <div key={m.id} className={`zpa-notice-msg zpa-${m.tone}`}>
                        <p>{m.text}</p>
                        {m.help ? <HelpLinks client={client} links={links} /> : null}
                      </div>
                    ),
                  );

  const titleId = `${id}-title`;
  const name = data?.display_name ?? "Zoiko iD Assistant";
  const flags = data?.flags ?? { ai_answers: false, intake_sales: false, intake_support: false, marketing: false };
  const links = staticHelp.length > 0 ? staticHelp : [];
  const footerLinks = (data?.footer_links && data.footer_links.length > 0 ? data.footer_links : links).slice(0, 2);

  // The status shown in the header is the real state: connecting, online, switched off, or unreachable (never a hard-coded "Online").
  const status =
    load.state === "failed" ? { tone: "off", text: COPY.statusUnavailable }
    : load.state !== "ready" ? { tone: "wait", text: COPY.statusLoading }
    : chatOn ? { tone: "on", text: COPY.statusOnline }
    : { tone: "off", text: COPY.statusOffline };

  const starters = data?.starters ?? [];
  const tiles = starters.filter((s) => s.icon || s.description).slice(0, 4);
  const chips = starters.filter((s) => !tiles.includes(s)).slice(0, Math.max(0, 4 - tiles.length)); // WF-01: four goal paths in total

  return (
    <div className={dark ? "zpa-root zpa-dark" : "zpa-root"}>
      {open ? (
        <section ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={large ? "zpa-panel zpa-panel-max" : "zpa-panel"} onKeyDown={onPanelKey} id={`${id}-panel`}>
          <header className="zpa-header">
            <span className="zpa-logo" aria-hidden="true">{mark}</span>
            <div className="zpa-head-text">
              <h2 id={titleId}>{name}</h2>
              <p className="zpa-status">
                <span className={`zpa-dot zpa-dot-${status.tone}`} aria-hidden="true" />
                <span>{status.text}</span>
              </p>
              <p className="zpa-subtitle">{COPY.subtitle}</p>
            </div>
            <div className="zpa-header-actions">
              <button type="button" className="zpa-icon-btn zpa-theme-btn" onClick={() => setDark((v) => !v)} aria-label={dark ? COPY.lightMode : COPY.darkMode} aria-pressed={dark} title={dark ? COPY.lightMode : COPY.darkMode}>
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
              {chatOn ? (
                <>
                  <button type="button" className="zpa-icon-btn" onClick={() => setView({ name: "history", index: null })} aria-label={COPY.history} title={COPY.history}>
                    <ClockIcon />
                  </button>
                  <button type="button" className="zpa-icon-btn" onClick={() => void newChat()} disabled={pending} aria-label={COPY.newChat} title={COPY.newChat}>
                    <PlusIcon />
                  </button>
                </>
              ) : null}
              {resizable ? (
                <button type="button" className="zpa-icon-btn zpa-size-btn" onClick={() => setLarge((v) => !v)} aria-label={large ? COPY.restore : COPY.maximize} aria-pressed={large} title={large ? COPY.restore : COPY.maximize}>
                  {large ? <ShrinkIcon /> : <ExpandIcon />}
                </button>
              ) : null}
              <button type="button" className="zpa-icon-btn" onClick={() => setOpen(false)} aria-label={COPY.minimize}>
                <MinusIcon />
              </button>
              <button type="button" className="zpa-icon-btn" onClick={() => void endChat()} aria-label={COPY.close}>
                <CloseIcon />
              </button>
            </div>
          </header>
          {data?.sample_content ? <p className="zpa-banner">{COPY.sample}</p> : null}

          <div className="zpa-body">
            {load.state === "idle" || load.state === "loading" ? (
              <p role="status" className="zpa-note zpa-pad">{COPY.loading}</p>
            ) : load.state === "failed" ? (
              <div className="zpa-view">
                <h3 className="zpa-view-title">{COPY.unavailableTitle}</h3>
                <p className="zpa-note" role="status">{COPY.unavailableBody}</p>
                {fallbackLinks.length > 0 ? (
                  <ul className="zpa-links">
                    {fallbackLinks.map((l) => (
                      <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                    ))}
                  </ul>
                ) : null}
                <button type="button" className="zpa-btn zpa-btn-secondary" onClick={() => setLoad({ state: "loading" })}>{COPY.retry}</button>
              </div>
            ) : !chatOn ? (
              <div className="zpa-view">
                <h3 className="zpa-view-title">{COPY.disabledTitle}</h3>
                <p className="zpa-note" role="status">{COPY.disabledBody}</p>
                <HelpLinks client={client} links={links} />
              </div>
            ) : view.name === "history" ? (
              <div className="zpa-view">
                <button type="button" className="zpa-btn zpa-btn-secondary zpa-back" onClick={() => setView(view.index === null ? { name: "chat" } : { name: "history", index: null })}>
                  {view.index === null ? COPY.historyBack : COPY.historyAll}
                </button>
                {view.index === null ? (
                  <>
                    <h3 className="zpa-view-title">{COPY.historyTitle}</h3>
                    {past.length === 0 ? (
                      <p className="zpa-note" role="status">{COPY.historyEmpty}</p>
                    ) : (
                      <ul className="zpa-history" aria-label={COPY.historyTitle}>
                        {past.map((c, i) => {
                          const first = c.find((m): m is Extract<Msg, { kind: "user" }> => m.kind === "user");
                          return (
                            <li key={c[0]?.id ?? i} className="zpa-history-row">
                              <button type="button" className="zpa-history-item" onClick={() => setView({ name: "history", index: i })}>
                                <strong>{first?.text ?? COPY.historyUntitled}</strong>
                                <span>{clock(first?.at ?? 0)}</span>
                              </button>
                              <button type="button" className="zpa-history-del" onClick={() => setPast((p) => p.filter((_, j) => j !== i))} aria-label={`${COPY.historyDelete}: ${first?.text ?? COPY.historyUntitled}`} title={COPY.historyDelete}>
                                <TrashIcon />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <p className="zpa-muted">{COPY.historyNote}</p>
                  </>
                ) : (
                  <div className="zpa-log zpa-readonly" role="log" aria-label="Earlier conversation">
                    {renderMsgs(past[view.index] ?? [], false)}
                  </div>
                )}
              </div>
            ) : view.name === "intake" ? (
              <Intake
                purpose={view.purpose}
                config={view.config}
                marketing={view.marketing}
                marketingFlag={flags.marketing}
                client={client}
                locale={locale}
                staticHelp={links}
                onBack={() => setView({ name: "chat" })}
              />
            ) : (
              <>
                <div ref={logRef} className="zpa-log" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation">
                  {msgs.length === 0 ? (
                    <div className="zpa-welcome">
                      <div className="zpa-welcome-card">
                        <span className="zpa-logo zpa-logo-card" aria-hidden="true">{mark}</span>
                        <div>
                          <h3 className="zpa-view-title">{COPY.welcomeTitle}</h3>
                          <p className="zpa-welcome-body">{COPY.welcomeBody}</p>
                        </div>
                      </div>
                      {tiles.length > 0 ? (
                        <div className="zpa-tiles" role="group" aria-label={COPY.starterHeading}>
                          {tiles.map((s) => (
                            <button key={s.label} type="button" className="zpa-tile" onClick={() => void send(s.text)}>
                              <span className={`zpa-tile-icon zpa-tone-${toneFor(s.icon)}`} aria-hidden="true"><NamedIcon name={s.icon} /></span>
                              <span className="zpa-tile-text">
                                <strong>{s.label}</strong>
                                {s.description ? <span>{s.description}</span> : null}
                              </span>
                              <span className="zpa-tile-chev" aria-hidden="true"><ChevronRightIcon /></span>
                            </button>
                          ))}
                        </div>
                      ) : null}
                      {chips.length > 0 ? (
                        <div className="zpa-starters" role="group" aria-label={COPY.moreHeading}>
                          {chips.map((s) => (
                            <button key={s.label} type="button" className="zpa-chip" onClick={() => void send(s.text)}>{s.label}</button>
                          ))}
                        </div>
                      ) : null}
                      {audiences.length > 0 ? (
                        <div className="zpa-starters" role="group" aria-label={COPY.audienceHeading}>
                          {audiences.map((a) => (
                            <button key={a.label} type="button" className="zpa-chip zpa-chip-icon" onClick={() => void send(a.text)}>
                              <NamedIcon name={a.icon} />
                              {a.label}
                            </button>
                          ))}
                        </div>
                      ) : null}
                      {flags.intake_sales || flags.intake_support ? (
                        <div className="zpa-actions">
                          {flags.intake_sales ? <button type="button" className="zpa-btn zpa-btn-secondary" onClick={() => void startHandoff("SALES")}>{COPY.talkSales}</button> : null}
                          {flags.intake_support ? <button type="button" className="zpa-btn zpa-btn-secondary" onClick={() => void startHandoff("SUPPORT")}>{COPY.getSupport}</button> : null}
                        </div>
                      ) : null}
                      {flags.intake_sales || flags.intake_support ? <p className="zpa-muted">{COPY.handoffNote}</p> : null}
                      <p className="zpa-muted zpa-scope">{COPY.welcomeScope}</p>
                    </div>
                  ) : null}
                  {renderMsgs(msgs)}
                  {pending ? (
                    <div className="zpa-row zpa-row-bot">
                      <span className="zpa-avatar zpa-avatar-bot" aria-hidden="true">{mark}</span>
                      <p role="status" className="zpa-bubble zpa-bubble-bot zpa-typing">
                        <span className="zpa-dots" aria-hidden="true"><i /><i /><i /></span>
                        <span className="zpa-sr">{COPY.thinking}</span>
                      </p>
                      <button type="button" className="zpa-btn zpa-btn-secondary zpa-cancel" onClick={cancelPending}>{COPY.cancel}</button>
                    </div>
                  ) : null}
                </div>
                <form
                  className="zpa-composer"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void send(draft);
                  }}
                >
                  <label htmlFor={`${id}-in`} className="zpa-sr">{COPY.inputLabel}</label>
                  <div className="zpa-inputbox">
                    <textarea
                      id={`${id}-in`}
                      ref={inputRef}
                      rows={1}
                      value={draft}
                      maxLength={maxChars}
                      disabled={pending}
                      placeholder={COPY.placeholder}
                      aria-describedby={`${id}-hint`}
                      autoComplete="off"
                      spellCheck
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                          e.preventDefault();
                          void send(draft);
                        }
                      }}
                    />
                    <button type="submit" className="zpa-send" aria-label={COPY.send} disabled={pending || draft.trim().length === 0}>
                      <SendIcon />
                    </button>
                  </div>
                  <span id={`${id}-hint`} className="zpa-sr">{COPY.inputHint} {draft.length}/{maxChars}</span>
                  {draft.length > maxChars * 0.8 ? <span className="zpa-count" aria-hidden="true">{draft.length}/{maxChars}</span> : null}
                  <p className="zpa-privacy">
                    <LockIcon />
                    <span>{data?.notice}</span>
                  </p>
                </form>
                {footerLinks.length > 0 ? (
                  <nav className="zpa-footer" aria-label="More help">
                    {footerLinks.map((l, i) => (
                      <a key={l.link_id} className="zpa-foot-link" href={client.linkUrl(l.link_id)} target="_blank" rel="noopener noreferrer">
                        {i === 0 ? <ChatIcon /> : <ShieldCheckIcon />}
                        {l.label}
                      </a>
                    ))}
                  </nav>
                ) : null}
              </>
            )}
          </div>
        </section>
      ) : null}
      <button
        ref={launcherRef}
        type="button"
        className="zpa-launcher"
        aria-label={open ? COPY.launcherClose : COPY.launcher}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? `${id}-panel` : undefined}
        onClick={() => {
          if (!open && load.state === "idle") setLoad({ state: "loading" });
          setOpen((v) => !v);
        }}
      >
        <span className="zpa-launcher-mark" aria-hidden="true">{mark}</span>
      </button>
    </div>
  );
}
