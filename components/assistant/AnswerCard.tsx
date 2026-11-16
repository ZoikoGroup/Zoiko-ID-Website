import { useState, type ReactNode } from "react";

import { useReveal } from "./useReveal";

import type { AssistantClient } from "./client";
import { COPY } from "./copy";
import { ArrowRightIcon } from "./icons";
import type { AnswerPacket, FeedbackRating, HandoffPurpose } from "./types";

export interface AnswerCardProps {
  packet: AnswerPacket;
  client: AssistantClient;
  flags: { intake_sales: boolean; intake_support: boolean };
  onHandoff: (purpose: HandoffPurpose) => void;
  /** The host's logo (or the neutral glyph) shown beside the reply. */
  logo: ReactNode;
  /** Local time the reply arrived, already formatted. */
  time: string;
  /** Flow the text in letter by letter (a display effect over the finished answer). Off for earlier chats and for answers already shown. */
  animate?: boolean;
  onRevealed?: () => void;
}

/** The answer text, flowing in like water: the newest letters are faint and settle as the text moves on. The full text is also given to
 * assistive technology at once, so a screen reader never hears it in pieces. */
const TAIL = 9;
function Flow({ text, animate, onDone }: { text: string; animate: boolean; onDone?: () => void }) {
  const n = useReveal(text, animate, onDone);
  if (!animate || n >= text.length) return <>{text}</>;
  const head = text.slice(0, Math.max(0, n - TAIL));
  const tail = text.slice(Math.max(0, n - TAIL), n);
  return (
    <>
      <span className="zpa-sr">{text}</span>
      <span aria-hidden="true">
        {head}
        {Array.from(tail).map((ch, i) => (
          <span key={n - tail.length + i} className="zpa-flow-ch" style={{ opacity: (i + 1) / (tail.length + 1) }}>{ch}</span>
        ))}
      </span>
    </>
  );
}

/** One validated answer packet, as a chat bubble. `answer_text` is written as a text node: no HTML, no Markdown, ever (ADR-13). A link
 * exists only when the server issued a link id for it, and it always goes through `/out/{link_id}`. A plain ANSWER carries no badge; any
 * other decision (cannot confirm, declined, escalated) is labelled, so a restricted answer is never mistaken for a normal one. */
export function AnswerCard({ packet, client, flags, onHandoff, logo, time, animate = false, onRevealed }: AnswerCardProps) {
  const [settled, setSettled] = useState(!animate);
  const [rated, setRated] = useState<null | "sent" | "failed">(null);
  const label = COPY.decision[packet.decision] ?? COPY.decision.ABSTAIN;

  async function rate(rating: FeedbackRating) {
    try {
      await client.sendFeedback(packet.response_id, rating);
      setRated("sent");
    } catch {
      setRated("failed");
    }
  }

  // WF-02: one recommended action and at most two supplementary ones
  const actions = packet.actions.flatMap((a, i) => {
    if (a.type === "OPEN_APPROVED_LINK" && a.link_id) {
      return [
        <a key={`a${i}`} className="zpa-link-action" href={client.linkUrl(a.link_id)} target="_blank" rel="noopener noreferrer">
          {a.label ?? "Open the page"}
          <ArrowRightIcon />
        </a>,
      ];
    }
    if (a.type === "START_HANDOFF_SALES" && flags.intake_sales) {
      return [
        <button key={`a${i}`} type="button" className="zpa-btn zpa-btn-secondary" onClick={() => onHandoff("SALES")}>
          {a.label ?? COPY.talkSales}
        </button>,
      ];
    }
    if (a.type === "START_HANDOFF_SUPPORT" && flags.intake_support) {
      return [
        <button key={`a${i}`} type="button" className="zpa-btn zpa-btn-secondary" onClick={() => onHandoff("SUPPORT")}>
          {a.label ?? COPY.getSupport}
        </button>,
      ];
    }
    return []; // any other action type is not approved for display
  }).slice(0, 3);

  return (
    <div className="zpa-row zpa-row-bot">
      <span className="zpa-avatar zpa-avatar-bot" aria-hidden="true">{logo}</span>
      <div className="zpa-stack">
        <article className={`zpa-bubble zpa-bubble-bot zpa-decision-${packet.decision.toLowerCase()}`} aria-label={`Assistant reply: ${label}`}>
          {packet.decision !== "ANSWER" ? <p className="zpa-badge">{label}</p> : null}
          <p className="zpa-answer"><Flow text={packet.answer_text} animate={animate} onDone={() => { setSettled(true); onRevealed?.(); }} /></p>
          {actions.length > 0 ? <div className={`zpa-actions zpa-settle${settled ? " zpa-settled" : ""}`}>{actions}</div> : null}
          {packet.decision === "ANSWER" && packet.citations.length === 0 ? <p className="zpa-muted zpa-unverified">{COPY.notVerified}</p> : null}
          {packet.citations.length > 0 ? (
            <div className={`zpa-sources zpa-settle${settled ? " zpa-settled" : ""}`}>
              <span className="zpa-small-heading">{COPY.sourcesHeading}: </span>
              {packet.citations.filter((c, i, all) => all.findIndex((o) => o.source_id === c.source_id && o.revision === c.revision) === i).slice(0, 3).map((c, i) => (
                <span key={`${c.source_id}-${c.span_id ?? i}`} className="zpa-source">
                  {c.link_id ? (
                    <a href={client.linkUrl(c.link_id)} target="_blank" rel="noopener noreferrer">
                      {c.title}
                    </a>
                  ) : (
                    <span>{c.title}</span>
                  )}
                  <span className="zpa-muted"> ({c.revision}{c.reviewed_at && !Number.isNaN(Date.parse(c.reviewed_at)) ? `, ${COPY.reviewed} ${new Date(c.reviewed_at).toLocaleDateString()}` : ""})</span>
                </span>
              ))}
            </div>
          ) : null}
        </article>
        <div className={`zpa-meta zpa-settle${settled ? " zpa-settled" : ""}`}>
          <time className="zpa-time">{time}</time>
          <span className="zpa-feedback">
            {rated === "sent" ? (
              <span role="status" className="zpa-muted">{COPY.feedbackThanks}</span>
            ) : (
              <>
                <button type="button" className="zpa-fb" onClick={() => void rate("USEFUL")} aria-label={`${COPY.helpful}: this answer helped`}>
                  {COPY.helpful}
                </button>
                <button type="button" className="zpa-fb" onClick={() => void rate("NOT_USEFUL")} aria-label={`${COPY.notHelpful}: this answer did not help`}>
                  {COPY.notHelpful}
                </button>
                {rated === "failed" ? <span role="status" className="zpa-muted">{COPY.feedbackFailed}</span> : null}
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
