"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface DocumentationFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "What is documentation on Zoiko ID?",
    answer:
      "Zoiko ID documentation provides source-backed, verified technical guidance covering identity architecture, authority delegation, evidence models, and developer integrations. Every guide is governed by accountable named team roles.",
  },
  {
    question: "How does authorization differ from authentication?",
    answer:
      "Authentication verifies who is signing in. Authorization governs what specific actions, data scopes, and delegated authority that actor is allowed to exercise within enterprise trust boundaries.",
  },
  {
    question: "Where are the API references?",
    answer:
      "API endpoints, schemas, webhooks, and code contracts live in the dedicated Developer Documentation and API Reference portal. Only verified, current endpoints are published without speculative drafts.",
  },
  {
    question: "How do I get support?",
    answer:
      "For account, billing, or general product questions, head to Help & Support. Security vulnerabilities must be reported through Responsible Disclosure, while privacy requests follow the Trust & Privacy route.",
  },
];

export default function DocumentationFaqSection({
  view = "all",
}: DocumentationFaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200/60">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center">
              <h2 className="font-dm-serif text-3xl font-normal tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                Frequently asked questions
              </h2>
              <p className="mt-3 font-manrope text-xs sm:text-[13.5px] text-[#64748b]">
                Find answers to common questions about Zoiko ID
              </p>
            </div>

            {/* Accordion Cards */}
            <div className="mx-auto mt-12 max-w-[760px] flex flex-col gap-3.5">
              {faqList.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between px-6 py-4.5 text-left transition hover:bg-slate-50/50"
                      aria-expanded={isOpen}
                    >
                      <span className="font-manrope text-xs sm:text-[13.5px] font-bold text-[#071324]">
                        {item.question}
                      </span>
                      <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[#0ea5e9]">
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 font-manrope text-xs sm:text-[13px] leading-relaxed text-[#64748b] border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f4f7fa] px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              16 · QUESTIONS
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Answers to the first questions
          </h2>

          {/* 4 Stacked Answer Cards */}
          <div className="mt-6 flex flex-col gap-3.5 font-manrope">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <h3 className="text-[13.5px] font-bold text-[#071324]">
                What is documentation on Zoiko iD?
              </h3>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#64748b]">
                Explanatory and implementation guidance, labelled by type. Each page states whether it is conceptual or a verified technical reference.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <h3 className="text-[13.5px] font-bold text-[#071324]">
                Where are the API references?
              </h3>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#64748b]">
                In the API Reference, owned by Developers. This page points to it and does not restate its contracts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <h3 className="text-[13.5px] font-bold text-[#071324]">
                How does authorization differ from authentication?
              </h3>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#64748b]">
                Authentication establishes who is signing in. Authorization decides what that party may do.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <h3 className="text-[13.5px] font-bold text-[#071324]">
                How do I get support?
              </h3>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#64748b]">
                Use Help &amp; Support for account and product questions. Security and privacy matters go to their own routes.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
