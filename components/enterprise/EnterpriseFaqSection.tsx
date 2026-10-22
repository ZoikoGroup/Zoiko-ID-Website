"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const enterpriseFaqs: FaqItem[] = [
  {
    question: "How does Zoiko iD fit with existing identity providers?",
    answer:
      "Zoiko iD does not replace your primary Identity Provider (such as Okta, Microsoft Entra ID, Ping, or Google Workspace). Your IdP continues to handle user authentication, directory management, and core sign-in tokens. Zoiko iD sits as a bounded authority overlay to evaluate delegation, evaluate policies per action, and generate immutable audit evidence.",
  },
  {
    question: "How are AI agents constrained?",
    answer:
      "AI agents are assigned distinct machine credentials and strictly bounded mandates that specify who sponsored the agent, authorized resources, permitted tools, and valid time frames. Every action taken by an agent requires a mandate check and policy evaluation, preventing autonomous escalation.",
  },
  {
    question: "Does this page include pricing?",
    answer:
      "Public pricing figures, plans, and units are published only when formally released. Because enterprise deployments depend heavily on integration patterns, evaluation scope, actor volumes, and regulatory assurance tiers, commercial terms are scoped individually with our architecture team.",
  },
  {
    question: "How is delegated authority different from login?",
    answer:
      "Authentication answers 'who is this?', while delegated authority proves 'who gave this actor permission to act on their behalf, for what purpose, and within what boundary?'. Separating login from authority prevents arbitrary actions from occurring solely because a valid credential exists.",
  },
  {
    question: "What evidence can authorized reviewers see?",
    answer:
      "Authorized compliance officers and auditors receive reviewable, cryptographically signed evidence records containing the actor reference, delegation mandate ID, policy version applied, evaluated context, and approval decision—without exposing underlying sensitive business payload data.",
  },
  {
    question: "Are you certified?",
    answer:
      "Our design principles are built around Zero Trust, least privilege, and compliance-ready audit trail standards (including SOC 2 Type II, ISO 27001, and HIPAA-aligned controls). Official attestations, audit reports, and security certifications are maintained directly on our dedicated Trust Center page.",
  },
];

const mobileFaqs = [
  {
    question: "How does Zoiko ID fit with existing identity providers?",
    answer:
      "As an overlay. Existing providers keep the functions they already own. Specific integrations are confirmed for your environment.",
  },
  {
    question: "How is delegated authority different from login?",
    answer:
      "Login establishes identity. Delegated authority is a bounded mandate that states on whose behalf an action is taken, for what purpose, within which limits and until when.",
  },
  {
    question: "How are AI agents constrained?",
    answer:
      "An agent is treated as a distinct non-human principal with a named sponsor and an explicit, bounded mandate. Its identity does not grant authority by itself.",
  },
  {
    question: "What evidence can authorized reviewers see?",
    answer:
      "Records of the basis for a decision, scoped by role and minimized. Retention follows the approved policy for each record type.",
  },
  {
    question: "Does this page include pricing?",
    answer:
      "No. Commercial information is in Pricing Overview, which owns pricing and usage terms.",
  },
  {
    question: "Are you certified?",
    answer:
      "This page makes no certification claim. Assurance information is published only in the Trust Center, with its scope and currency.",
  },
];

export default function EnterpriseFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-white py-16 sm:bg-[#f8fafc] sm:py-24 lg:py-28">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[860px] px-6 sm:block sm:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
            Frequently asked questions
          </h2>
          <p className="mt-3 font-manrope text-sm leading-relaxed text-[#64748b]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 flex flex-col gap-3.5 sm:mt-14">
          {enterpriseFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between px-6 py-4.5 text-left transition hover:bg-slate-50/50 sm:py-5"
                >
                  <span className="font-manrope text-xs font-semibold text-[#071324] sm:text-[13.5px]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex size-5 shrink-0 items-center justify-center text-sky-500">
                    {isOpen ? (
                      <Minus className="size-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="size-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pt-3 pb-5">
                    <p className="font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal cyan line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
            QUESTIONS
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          Direct answers for enterprise evaluators
        </h2>

        {/* Divider line before Q&A list */}
        <div className="mt-6 border-b border-slate-200/80" />

        {/* Mobile direct answers list with dividers */}
        <div className="divide-y divide-slate-100">
          {mobileFaqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <h3 className="font-manrope text-[13.5px] font-bold leading-snug text-[#2563eb]">
                {faq.question}
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
