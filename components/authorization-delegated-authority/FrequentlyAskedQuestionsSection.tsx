"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageSquare, Clock, Bot, FileText, RotateCcw } from "lucide-react";

interface FrequentlyAskedQuestionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const faqs = [
  {
    question: "What is the difference between roles and grants?",
    answer:
      "Roles describe what an actor is permitted to do in general, while grants are explicit, bounded, and time-limited delegations of specific authority from an authorized principal.",
  },
  {
    question: "Can access expire?",
    answer:
      "Yes. Every delegated authority grant includes a valid period with an explicit end time. Access expires automatically and is never silently renewed.",
  },
  {
    question: "Can AI agents act for users?",
    answer:
      "Yes, provided the AI agent operates under an authorized human sponsor, has an explicit machine identity, and acts strictly within a delegated tool scope and action threshold.",
  },
  {
    question: "What evidence is retained?",
    answer:
      "Every evaluation produces an immutable audit event containing the actor reference, principal, resource, action, policy version, and timestamp. Public logs contain no sensitive or personal data.",
  },
  {
    question: "What is unsupported?",
    answer:
      "Silent permissions, implicit grants, unauthenticated delegations, and decisions without policy provenance are strictly unsupported and fail closed.",
  },
];

const mobileFaqs = [
  {
    icon: MessageSquare,
    question: "What is the difference between roles and grants?",
    answer:
      "A role describes a standing function. A grant is a specific, bounded permission for a purpose and a period.",
  },
  {
    icon: Clock,
    question: "Can access expire?",
    answer:
      "Yes. A grant has an end. When it ends, the decision is denied and the requester is shown a renewal route.",
  },
  {
    icon: Bot,
    question: "Can AI agents act for users?",
    answer:
      "Only under a sponsor, within a bounded tool scope. An agent does not gain authority from its identity alone.",
  },
  {
    icon: FileText,
    question: "What evidence is retained?",
    answer:
      "Decision records with their policy version and grant reference. Retention periods are set by the approved policy.",
  },
  {
    icon: RotateCcw,
    question: "What is unsupported?",
    answer:
      "Any protocol, availability or residency claim not confirmed against current documentation.",
  },
];

export default function FrequentlyAskedQuestionsSection({
  view = "all",
}: FrequentlyAskedQuestionsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Center Header */}
            <div className="mx-auto max-w-[680px] text-center">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Frequently asked questions
              </h2>
              <p className="mt-3 font-['Manrope'] text-[14.5px] text-[#5b6b82]">
                Find answers to common questions about Zoiko iD
              </p>
            </div>

            {/* Accordion List */}
            <div className="mx-auto mt-12 max-w-[760px] flex flex-col gap-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-[14px] border border-[#e2e8f0] bg-white transition hover:border-slate-300 shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full p-4.5 lg:p-5 flex items-center justify-between text-left gap-4"
                    >
                      <span className="font-['Manrope'] text-[14px] lg:text-[14.5px] font-bold text-[#0b1b33]">
                        {faq.question}
                      </span>
                      <span className="text-[#00bcd4] shrink-0">
                        {isOpen ? (
                          <Minus className="size-4 stroke-[2.2]" />
                        ) : (
                          <Plus className="size-4 stroke-[2.2]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-[13px] leading-relaxed text-[#5b6b82] border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              17 · QUESTIONS
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Ask better authorization questions
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            These answers match the product truth as it is documented. Where an answer depends on your deployment, it says so.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {mobileFaqs.map((faq) => {
              const Icon = faq.icon;
              return (
                <div
                  key={faq.question}
                  className="rounded-[20px] border border-slate-200/90 bg-white p-4 shadow-xs flex items-start gap-3.5"
                >
                  <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4] mt-0.5">
                    <Icon className="size-[18px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                      {faq.question}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
