"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import type { Audience } from "./copy";

/** The widget is loaded only in the browser, after the page is interactive, so it never slows a first paint. */
const AssistantWidget = dynamic(() => import("./AssistantWidget").then((m) => m.AssistantWidget), { ssr: false });

/** Pages where the assistant is not shown: legal text and notices are read, not chatted about. */
const HIDDEN_PREFIXES = ["/legal-", "/privacy-notice"];

const AUDIENCES: readonly Audience[] = [
  { label: "Developers", text: "How do developers integrate Zoiko iD?", icon: "code" },
  { label: "Enterprises", text: "Can Zoiko iD help with enterprise onboarding?", icon: "building" },
  { label: "Individuals", text: "Who is Zoiko iD for?", icon: "user" },
];

const FALLBACK_LINKS = [
  { label: "Talk to sales", href: "/talk-to-sales" },
  { label: "Help & support", href: "/help-support" },
  { label: "Contact", href: "/contact" },
  { label: "Trust Center", href: "/trust-center" },
];

/** A friendlier opening on the pages where visitors usually have a specific question. Only the greeting changes; every answer still
 * comes from the approved content on the server. Constants, so the widget never re-creates its copy. */
const BASE_COPY = { welcomeScope: "I explain Zoiko iD concepts and point you to public pages. I can't see or change any account, and I can't quote prices." } as const;
const PAGE_COPY: { prefixes: string[]; copy: Record<string, string> }[] = [
  { prefixes: ["/pricing-overview", "/talk-to-sales", "/procurement-enterprise"], copy: { ...BASE_COPY, welcomeBody: "Questions about evaluating Zoiko iD or how pricing works?" } },
  { prefixes: ["/security", "/trust-center", "/trust-assurance-privacy", "/assurance-compliance-standards", "/audit-reports"], copy: { ...BASE_COPY, welcomeBody: "Questions about security, trust or assurance?" } },
  { prefixes: ["/docs", "/documentation", "/api-reference", "/quickstarts", "/sandbox", "/apis-integrations", "/webhooks-events", "/overview"], copy: { ...BASE_COPY, welcomeBody: "Questions about integrating Zoiko iD?" } },
];
const DEFAULT_COPY: Record<string, string> = { ...BASE_COPY };

function copyFor(path: string): Record<string, string> {
  return PAGE_COPY.find((p) => p.prefixes.some((x) => path === x || path.startsWith(`${x}/`)))?.copy ?? DEFAULT_COPY;
}

function Mark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden width="32" height="32">
      <rect width="32" height="32" rx="8" fill="#6b66e8" />
      <path d="M9 10.5h14l-10.5 11H23" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23.5" cy="10.5" r="1.6" fill="#c7c5f7" />
    </svg>
  );
}

export default function AssistantMount() {
  const path = usePathname() ?? "/";
  if (HIDDEN_PREFIXES.some((p) => path.startsWith(p))) return null;
  return <AssistantWidget key={copyFor(path).welcomeBody ?? "default"} apiBase="/api/public/chat/v1" logo={<Mark />} fallbackLinks={FALLBACK_LINKS} audiences={AUDIENCES} resizable copy={copyFor(path)} />;
}
