/** Every string the widget writes itself (the server owns all answer text). Plain, calm, no promises (ZI-CHAT-UX-001 section 08). */
export const COPY = {
  launcher: "Open the Zoiko iD Assistant",
  launcherClose: "Close the Zoiko iD Assistant",
  close: "Close",
  welcomeTitle: "Welcome to Zoiko iD.",
  welcomeBody: "How can we help you build trust today?",
  welcomeScope: "I explain Zoiko iD concepts and point you to public pages. I can't see or change any account.",
  subtitle: "AI assistant · Identity infrastructure guidance",
  statusOnline: "Online",
  statusLoading: "Connecting…",
  statusOffline: "Offline",
  statusUnavailable: "Unavailable",
  darkMode: "Switch to dark mode",
  lightMode: "Switch to light mode",
  minimize: "Minimize",
  maximize: "Make the assistant larger",
  restore: "Make the assistant smaller",
  newChat: "New chat",
  history: "History",
  historyTitle: "Earlier chats",
  historyEmpty: "No earlier chats in this window yet. Start a new chat and the one you leave will appear here.",
  historyNote: "Kept only in this window, never on our servers. Use the bin to delete one now. They disappear when you close the assistant or reload the page.",
  historyDelete: "Delete this chat",
  historyBack: "Back to chat",
  historyAll: "All earlier chats",
  historyUntitled: "Chat",
  placeholder: "Ask a question…",
  audienceHeading: "I am a…",
  moreHeading: "More questions",
  starterHeading: "Try one of these",
  helpHeading: "Public pages",
  inputLabel: "Ask a question about Zoiko iD",
  inputHint: "Press Enter to send, Shift+Enter for a new line.",
  send: "Send",
  cancel: "Cancel",
  cancelled: "Cancelled. Nothing more was sent. You can ask again or rephrase.",
  notVerified: "Not verified against an approved source.",
  reviewed: "reviewed",
  thinking: "Looking at the approved sources…",
  loading: "Loading…",
  disabledTitle: "The assistant is switched off right now",
  disabledBody: "You can still use these public pages.",
  unavailableTitle: "The assistant is unavailable",
  unavailableBody: "Nothing was sent. Please use these public pages, or try again in a few minutes.",
  retry: "Try again",
  blocked: "Message not sent",
  sensitive:
    "For your security that message was not sent or stored. It looked like it may contain a password, a code or a personal document. Please don't share those here.",
  tooLong: (n: number) => `That message is too long. Please keep it under ${n} characters.`,
  invalid: "That message couldn't be sent. Please rephrase it and try again.",
  limited: (s: number | null) => (s ? `You're sending messages quickly. Please wait about ${s} seconds and try again.` : "You're sending messages quickly. Please wait a moment and try again."),
  sessionExpired: "Your session ended. Send your message again to start a new one.",
  sample: "Engineering sample content, not an approved publication.",
  sampleShort: "Sample content",
  sourcesHeading: "Sources",
  helpful: "Helpful",
  notHelpful: "Not helpful",
  feedbackThanks: "Thanks for the feedback.",
  feedbackFailed: "Feedback couldn't be sent.",
  talkSales: "Talk to sales",
  honeypotLabel: "Leave this field empty",
  selectCountry: "Select a country…",
  getSupport: "Get support",
  handoffNote: "This opens a separate request form. Your chat isn't attached.",
  decision: {
    ANSWER: "Answer",
    CLARIFY: "One more detail needed",
    ABSTAIN: "Can't confirm",
    REFUSE: "Can't help with that here",
    ESCALATE: "Best handled by a person",
  },
  // intake
  intakeTitleSales: "Talk to sales",
  intakeTitleSupport: "Get support",
  intakeBack: "Back to chat",
  intakeIntro: "This is a separate request, not part of the chat. We send only the details on this form.",
  intakeUnavailable: "This request form isn't available right now. Nothing was submitted. Please use these public pages instead.",
  consent: "I have read the notice above and agree that you use these details to respond to this request.",
  consentRequired: "Please confirm the notice to continue.",
  marketing: "Also send me product news by email (optional)",
  submit: "Send request",
  submitting: "Sending…",
  required: "Required",
  fixFields: "Some details need another look. Please check the marked fields.",
  regionBlocked: "This form isn't available for your selection. Please use the public pages instead.",
  conflict: "That request changed or was already received. Please review it and send again.",
  tooBig: "Your request is too long. Please shorten it and try again.",
  sensitiveForm: "For your security we couldn't accept that text. Please remove any passwords, codes or personal documents and try again.",
  intakeDown: "We couldn't receive your request right now. Nothing was submitted. Please use the public pages instead.",
  receivedTitle: "Request received",
  receivedBody: "Keep this reference if you contact us. It confirms we accepted the request, not when someone will reply. Your chat was not sent.",
  referenceLabel: "Reference",
  marketingFailed: "Your request was received, but the email preference couldn't be saved.",
} as const;

/** Default Doc 10 field sets, used only when the server sends no `fields` for an available form. */
export const DEFAULT_SALES_FIELDS = [
  { name: "email", type: "email", required: true, max_length: 254, label: "Email address" },
  { name: "contact_name", type: "text", max_length: 100, label: "Name" },
  { name: "organization_name", type: "text", max_length: 140, label: "Organization" },
  { name: "country_code", type: "country", required: true, max_length: 2, label: "Country" },
  { name: "inquiry_type", type: "select", required: true, label: "What is this about?", options: ["DEMO", "SALES", "PARTNERSHIP", "DEVELOPER", "PROCUREMENT", "OTHER"] },
  { name: "timeframe", type: "select", label: "Timeframe", options: ["EXPLORING", "0_3_MONTHS", "3_6_MONTHS", "LATER"] },
  { name: "message", type: "textarea", max_length: 500, label: "Message" },
];

export const DEFAULT_SUPPORT_FIELDS = [
  { name: "email", type: "email", required: true, max_length: 254, label: "Reply email" },
  { name: "country_code", type: "country", required: true, max_length: 2, label: "Country" },
  { name: "topic", type: "select", required: true, label: "Topic", options: ["PUBLIC_DOCS", "API_GUIDANCE", "GENERAL_PRODUCT", "ACCESSIBILITY", "REPORT_CONTENT", "OTHER"] },
  { name: "summary", type: "textarea", required: true, min_length: 10, max_length: 300, label: "Summary" },
  { name: "contact_name", type: "text", max_length: 100, label: "Name" },
  { name: "requester_type", type: "select", label: "I am a", options: ["PROSPECT", "CUSTOMER", "DEVELOPER", "OTHER"] },
];

export function humanize(name: string): string {
  const s = name.replace(/_/g, " ").toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Audience shortcuts under the topic tiles. Each one simply SENDS a question (visible in the chat): no hidden profile is built. A host
 * that does not want them passes `audiences={[]}`. */
export interface Audience {
  label: string;
  text: string;
  icon?: "code" | "building" | "user";
}
export const DEFAULT_AUDIENCES: readonly Audience[] = [
  { label: "Developers", text: "How do developers integrate Zoiko iD?", icon: "code" },
  { label: "Enterprises", text: "Can Zoiko iD help with enterprise onboarding?", icon: "building" },
  { label: "Individuals", text: "Who is Zoiko iD for?", icon: "user" },
];

/** ISO 3166-1 alpha-2 codes offered by the intake country selector (the server still decides which are allowed). */
export const COUNTRIES: readonly [string, string][] = [
  ["AU","Australia"],["AT","Austria"],["BE","Belgium"],["BR","Brazil"],["CA","Canada"],["CH","Switzerland"],["CN","China"],["DE","Germany"],["DK","Denmark"],["ES","Spain"],
  ["FI","Finland"],["FR","France"],["GB","United Kingdom"],["HK","Hong Kong"],["IE","Ireland"],["IN","India"],["IT","Italy"],["JP","Japan"],["KR","South Korea"],["MX","Mexico"],
  ["NL","Netherlands"],["NO","Norway"],["NZ","New Zealand"],["PL","Poland"],["PT","Portugal"],["SA","Saudi Arabia"],["SE","Sweden"],["SG","Singapore"],["AE","United Arab Emirates"],["US","United States"],["ZA","South Africa"],
];
