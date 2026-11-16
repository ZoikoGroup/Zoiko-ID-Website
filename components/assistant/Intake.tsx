import { useId, useMemo, useRef, useState } from "react";

import { AssistantApiError, type AssistantClient } from "./client";
import { COPY, COUNTRIES, DEFAULT_SALES_FIELDS, DEFAULT_SUPPORT_FIELDS, humanize } from "./copy";
import { uuid } from "./focus";
import type { HandoffPurpose, IntakeConfig, IntakeFieldSpec, IntakePurposeConfig, IntakeReceipt, StaticHelpLink } from "./types";

export interface IntakeProps {
  purpose: HandoffPurpose;
  config: IntakePurposeConfig;
  marketing: IntakeConfig["marketing"] | null;
  marketingFlag: boolean;
  client: AssistantClient;
  locale: string;
  staticHelp: StaticHelpLink[];
  onBack: () => void;
}

type Phase = "editing" | "submitting" | "accepted";

/** WF-10A (sales) and WF-10B (support): a separate request, never the chat. The reference is shown ONLY after the server answers 202
 * (durable acceptance); every failure says plainly that nothing was submitted. The conversation transcript is not part of this component. */
export function Intake({ purpose, config, marketing, marketingFlag, client, locale, staticHelp, onBack }: IntakeProps) {
  const kind = purpose === "SALES" ? "sales" : "support";
  const uid = useId();
  const fields: IntakeFieldSpec[] = useMemo(() => {
    const given = config.fields && config.fields.length > 0 ? config.fields : purpose === "SALES" ? DEFAULT_SALES_FIELDS : DEFAULT_SUPPORT_FIELDS;
    const withOptions = given.map((f) => (f.name === "inquiry_type" && !f.options && config.inquiry_types ? { ...f, type: "select", options: config.inquiry_types } : f));
    return withOptions.some((f) => f.name === "country_code") ? withOptions : [...withOptions, { name: "country_code", type: "country", required: true, max_length: 2, label: "Country" }];
  }, [config, purpose]);

  const [values, setValues] = useState<Record<string, string>>({});
  const [trap, setTrap] = useState(""); // honeypot: invisible to people, filled by bots
  const [consent, setConsent] = useState(false);
  const [wantsMarketing, setWantsMarketing] = useState(false);
  const [phase, setPhase] = useState<Phase>("editing");
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState<string[]>([]);
  const [receipt, setReceipt] = useState<IntakeReceipt | null>(null);
  const [marketingNote, setMarketingNote] = useState<string | null>(null);
  const key = useRef(uuid()); // one idempotency key per form instance; renewed after a 409

  const title = purpose === "SALES" ? COPY.intakeTitleSales : COPY.intakeTitleSupport;
  const showMarketing = purpose === "SALES" && marketingFlag && marketing?.available === true;

  if (!config.available || !config.form_revision) {
    return (
      <div className="zpa-view">
        <h3 className="zpa-view-title">{title}</h3>
        <p className="zpa-note" role="status">{COPY.intakeUnavailable}</p>
        <HelpLinks client={client} links={staticHelp} />
        <button type="button" className="zpa-btn zpa-btn-secondary" onClick={onBack}>{COPY.intakeBack}</button>
      </div>
    );
  }

  if (phase === "accepted" && receipt) {
    return (
      <div className="zpa-view">
        <h3 className="zpa-view-title" tabIndex={-1} ref={(el) => el?.focus()}>{COPY.receivedTitle}</h3>
        <p className="zpa-note" role="status">{COPY.receivedBody}</p>
        <p className="zpa-reference"><span className="zpa-muted">{COPY.referenceLabel}: </span><strong>{receipt.reference}</strong></p>
        {marketingNote ? <p className="zpa-note" role="status">{marketingNote}</p> : null}
        <button type="button" className="zpa-btn zpa-btn-secondary" onClick={onBack}>{COPY.intakeBack}</button>
      </div>
    );
  }

  const set = (name: string, v: string) => setValues((s) => ({ ...s, [name]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (phase === "submitting") return; // one submission at a time
    if (trap) return; // a bot filled the hidden field: do nothing and claim nothing
    const lacking = fields.filter((f) => f.required && !(values[f.name] ?? "").trim()).map((f) => f.name);
    const tooShort = fields.filter((f) => f.min_length && (values[f.name] ?? "").trim().length > 0 && (values[f.name] ?? "").trim().length < f.min_length).map((f) => f.name);
    const bad = [...lacking, ...tooShort];
    setMissing(bad);
    if (bad.length > 0) return setError(COPY.fixFields);
    if (!consent) return setError(COPY.consentRequired);
    setError(null);
    setPhase("submitting");
    const country = (values.country_code ?? "").trim().toUpperCase();
    const payload: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.name !== "country_code" && v) payload[f.name] = v;
    }
    try {
      const r = await client.submitIntake(
        kind,
        { form_revision: config.form_revision as string, purpose: purpose === "SALES" ? "sales_inquiry" : "support_request", country_code: country, locale, notice_accepted: true, fields: payload },
        key.current,
      );
      // durable acceptance: only now may a reference be shown
      setReceipt(r);
      setPhase("accepted");
      if (wantsMarketing && showMarketing && marketing?.notice_id) {
        try {
          await client.setMarketing({ channel: "EMAIL", election: true, country_code: country, notice_id: marketing.notice_id });
        } catch {
          setMarketingNote(COPY.marketingFailed);
        }
      }
    } catch (err) {
      setPhase("editing");
      setError(messageFor(err, () => (key.current = uuid())));
    }
  }

  return (
    <form className="zpa-view" onSubmit={(e) => void submit(e)} noValidate aria-labelledby={`${uid}-t`}>
      <h3 id={`${uid}-t`} className="zpa-view-title">{title}</h3>
      <p className="zpa-muted">{COPY.intakeIntro}</p>
      {config.notice_text ? <div className="zpa-notice" id={`${uid}-n`}>{config.notice_text}</div> : null}
      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const label = f.label ?? humanize(f.name);
        const invalid = missing.includes(f.name);
        const common = {
          id,
          name: f.name,
          value: values[f.name] ?? "",
          required: !!f.required,
          "aria-invalid": invalid || undefined,
          "aria-describedby": invalid ? `${id}-e` : undefined,
          disabled: phase === "submitting",
        };
        return (
          <div className="zpa-field" key={f.name}>
            <label htmlFor={id}>{label}{f.required ? <span className="zpa-req"> ({COPY.required})</span> : null}</label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={4} maxLength={f.max_length} onChange={(e) => set(f.name, e.target.value)} />
            ) : f.type === "country" || f.name === "country_code" ? (
              <select {...common} autoComplete="country" onChange={(e) => set(f.name, e.target.value)}>
                <option value="">{COPY.selectCountry}</option>
                {COUNTRIES.map(([code, label]) => <option key={code} value={code}>{label} ({code})</option>)}
              </select>
            ) : f.type === "select" || (f.options && f.options.length > 0) ? (
              <select {...common} onChange={(e) => set(f.name, e.target.value)}>
                <option value="">Select…</option>
                {(f.options ?? []).map((o) => <option key={o} value={o}>{humanize(o)}</option>)}
              </select>
            ) : (
              <input
                {...common}
                type={f.type === "email" ? "email" : f.type === "tel" ? "tel" : "text"}
                maxLength={f.max_length}
                autoComplete={f.type === "email" ? "email" : f.name === "country_code" ? "country" : "off"}
                onChange={(e) => set(f.name, e.target.value)}
              />
            )}
            {invalid ? <p className="zpa-field-error" id={`${id}-e`}>{COPY.required}{f.min_length ? `: at least ${f.min_length} characters` : ""}</p> : null}
          </div>
        );
      })}
      <div className="zpa-hp" aria-hidden="true">
        <label htmlFor={`${uid}-hp`}>{COPY.honeypotLabel}</label>
        <input id={`${uid}-hp`} type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>
      <div className="zpa-check">
        <input id={`${uid}-consent`} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} disabled={phase === "submitting"} />
        <label htmlFor={`${uid}-consent`}>{COPY.consent}</label>
      </div>
      {showMarketing ? (
        <div className="zpa-check">
          <input id={`${uid}-mk`} type="checkbox" checked={wantsMarketing} onChange={(e) => setWantsMarketing(e.target.checked)} disabled={phase === "submitting"} />
          <label htmlFor={`${uid}-mk`}>{COPY.marketing}</label>
        </div>
      ) : null}
      {error ? <p className="zpa-error" role="alert">{error}</p> : null}
      <div className="zpa-actions">
        <button type="submit" className="zpa-btn zpa-btn-primary" disabled={phase === "submitting"} aria-busy={phase === "submitting"}>
          {phase === "submitting" ? COPY.submitting : COPY.submit}
        </button>
        <button type="button" className="zpa-btn zpa-btn-secondary" onClick={onBack} disabled={phase === "submitting"}>{COPY.intakeBack}</button>
      </div>
    </form>
  );
}

function messageFor(err: unknown, renewKey: () => void): string {
  if (!(err instanceof AssistantApiError)) return COPY.intakeDown;
  switch (err.code) {
    case "INVALID_REQUEST":
      return COPY.fixFields;
    case "REGION_OR_POLICY_BLOCK":
      return COPY.regionBlocked;
    case "IDEMPOTENCY_CONFLICT":
      renewKey();
      return COPY.conflict;
    case "PAYLOAD_TOO_LARGE":
      return COPY.tooBig;
    case "SENSITIVE_CONTENT_BLOCKED":
      return COPY.sensitiveForm;
    case "RESOURCE_LIMIT":
      return COPY.limited(err.retryAfterS);
    default:
      return COPY.intakeDown;
  }
}

export function HelpLinks({ client, links }: { client: AssistantClient; links: StaticHelpLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="zpa-links">
      {links.map((l) => (
        <li key={l.link_id}>
          <a href={client.linkUrl(l.link_id)} target="_blank" rel="noopener noreferrer">{l.label}</a>
        </li>
      ))}
    </ul>
  );
}
