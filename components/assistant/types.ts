/** Wire types of the public assistant API v1 (backend/assistant/API.md). Server-owned: the widget trusts `decision` and the approved
 * action types and nothing the model wrote beyond `answer_text`, which it renders as escaped plain text. */

export type Decision = "ANSWER" | "CLARIFY" | "ABSTAIN" | "REFUSE" | "ESCALATE";

export interface StaticHelpLink {
  link_id: string;
  label: string;
}

export interface Starter {
  label: string;
  text: string;
  /** A short line shown under the label on a topic tile. */
  description?: string | null;
  /** One of the widget's fixed icon names; anything else shows the default glyph. */
  icon?: string | null;
}

export interface Bootstrap {
  enabled: boolean;
  display_name: string;
  locale: string;
  revision: string;
  snapshot_id: string;
  sample_content: boolean;
  flags: { ai_answers: boolean; intake_sales: boolean; intake_support: boolean; marketing: boolean };
  limits: { message_max_chars: number; session_idle_seconds: number };
  starters: Starter[];
  static_help: StaticHelpLink[];
  /** Up to two links for the panel footer (for example "Talk to an expert" and a privacy page). Optional: absent means none. */
  footer_links?: StaticHelpLink[];
  notice: string;
}

export interface SessionInfo {
  session_expires_at: string;
  idle_seconds: number;
}

export interface ClaimRef {
  claim_id: string;
  support: string[];
}

export interface Citation {
  source_id: string;
  revision: string;
  title: string;
  span_id?: string | null;
  link_id?: string | null;
  /** Last-reviewed date of the source, when the server knows it. */
  reviewed_at?: string | null;
}

export interface Action {
  type: "OPEN_APPROVED_LINK" | "START_HANDOFF_SALES" | "START_HANDOFF_SUPPORT" | (string & {});
  link_id?: string | null;
  label?: string | null;
}

export interface Safety {
  reason: string;
  sensitive_input_blocked: boolean;
  sample_content: boolean;
  ai_assisted: boolean;
}

export interface AnswerPacket {
  response_id: string;
  policy_version: string;
  snapshot_id: string;
  decision: Decision;
  intent_id?: string | null;
  answer_text: string;
  claims: ClaimRef[];
  citations: Citation[];
  capabilities: { capability_id: string; public_state: string }[];
  actions: Action[];
  safety: Safety;
  session_expires_at?: string | null;
}

export interface SendMessageBody {
  client_message_id: string;
  text: string;
  locale: string;
  intent_hint?: string | null;
}

export type FeedbackRating = "USEFUL" | "NOT_USEFUL";

export interface IntakeFieldSpec {
  name: string;
  type: string; // email | text | textarea | select | tel | country | multiselect
  required?: boolean;
  max_length?: number;
  min_length?: number;
  label?: string;
  options?: string[];
}

export interface IntakePurposeConfig {
  available: boolean;
  form_revision?: string | null;
  notice_id?: string;
  notice_text?: string;
  fields?: IntakeFieldSpec[];
  inquiry_types?: string[];
}

export interface IntakeConfig {
  sales: IntakePurposeConfig;
  support: IntakePurposeConfig;
  marketing: { available: boolean; notice_id?: string; notice_text?: string };
}

export type HandoffPurpose = "SALES" | "SUPPORT";
export type IntakeKind = "sales" | "support";

export interface IntakeBody {
  form_revision: string;
  purpose: "sales_inquiry" | "support_request";
  country_code: string;
  locale: string;
  notice_accepted: boolean;
  fields: Record<string, string | string[]>;
}

export interface IntakeReceipt {
  reference: string;
  status: string;
}

export interface MarketingBody {
  channel: "EMAIL";
  election: boolean;
  country_code: string;
  notice_id: string;
}
