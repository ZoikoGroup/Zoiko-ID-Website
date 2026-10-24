"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface CookieNoticeFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What accessibility standard does Zoiko iD target?",
    answer:
      "Zoiko iD targets the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard across public marketing, identity, and console experiences.",
  },
  {
    question: "Can I use a keyboard?",
    answer:
      "Yes. All interactive controls, navigation paths, and form inputs are designed to be fully reachable and operable using keyboard navigation alone.",
  },
  {
    question: "How do I report a barrier?",
    answer:
      "You can describe the barrier, affected URL, and assistive tech used through our barrier reporting intake route or via our designated accessibility channels.",
  },
  {
    question: "Where can I get account help?",
    answer:
      "For account recovery, sign-in assistance, or subscription inquiries, visit our dedicated Help & Support center.",
  },
];

export default function CookieNoticeFaqSection({
  view = "all",
}: CookieNoticeFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-[#f8fafc] border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[860px]">
            {/* Centered Header */}
            <div className="text-center">
              <h2 className="font-['DM_Serif_Display'] text-[38px] lg:text-[42px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]">
                Frequently asked questions
              </h2>
              <p className="mt-3 font-['Manrope'] text-[14px] lg:text-[14.5px] font-normal leading-[1.6] text-[#5b6b82]">
                Find answers to common questions about Zoiko iD
              </p>
            </div>

            {/* Accordion List */}
            <div className="mt-12 flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left transition"
                      aria-expanded={isOpen}
                    >
                      <span className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {faq.question}
                      </span>
                      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-full text-[#0891b2] transition">
                        {isOpen ? (
                          <Minus className="size-4 stroke-[2.2]" />
                        ) : (
                          <Plus className="size-4 stroke-[2.2]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-50 px-6 pb-5 pt-2">
                        <p className="font-['Manrope'] text-[13.5px] leading-relaxed text-[#64748b]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION - Not present in mobile specs, kept hidden on mobile */}
      {showMobile && null}
    </section>
  );
}
