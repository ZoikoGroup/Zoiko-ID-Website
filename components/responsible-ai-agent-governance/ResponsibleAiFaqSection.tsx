"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface ResponsibleAiFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const faqs = [
  {
    question: "Does Zoiko ID make AI models safe?",
    answer:
      "No. Zoiko ID governs authority, identity, and accountability for agent actions. It bounds what actions an agent can perform, who sponsors it, and records evidence for review, but model safety itself depends on the model provider and deployment guardrails.",
  },
  {
    question: "Can an agent approve its own actions?",
    answer:
      "Never. An agent cannot sponsor or approve its own mandate. Approval must originate from an accountable human principal or designated enterprise authority.",
  },
  {
    question: "Is there a governance score?",
    answer:
      "No. Governance is not an arbitrary numerical score. It is determined by verifiable evidence, bounded mandates, policy adherence, and clear accountability chains.",
  },
];

export default function ResponsibleAiFaqSection({
  view = "all",
}: ResponsibleAiFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="faq"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center flex flex-col items-center">
            {/* Header */}
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Frequently asked questions
            </h2>

            <p className="mt-3 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
              Find answers to common questions about Zoiko ID
            </p>

            {/* Accordion List */}
            <div className="mt-12 w-full max-w-[800px] flex flex-col gap-3.5 text-left">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between p-5 text-left transition"
                    >
                      <span className="font-['Manrope'] text-[15px] sm:text-[15.5px] font-bold text-[#0b1b33]">
                        {faq.question}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0088cc]">
                        {isOpen ? (
                          <Minus className="h-4 w-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="h-4 w-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1">
                        <p className="font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
                          {faq.answer}
                        </p>
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
        <section
          id="faq-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7] text-left"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 16 · QUESTIONS
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Direct answers
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            These answers describe what the platform is designed to do. They do not describe verified deployments or any certification.
          </p>

          {/* 3 Open Direct Answer Cards */}
          <div className="mt-7 flex flex-col gap-3.5">
            {/* Card 1 */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                <HelpCircle className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33] leading-snug">
                  Does Zoiko ID make AI models safe?
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                  No. The platform governs identity and delegated action. It does not guarantee model safety or accuracy.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                <HelpCircle className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33] leading-snug">
                  Can an agent approve its own actions?
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                  No. Authority comes from a sponsor and a mandate, not from the agent itself.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                <HelpCircle className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33] leading-snug">
                  Is there a governance score?
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                  No single score is used. Facts are shown separately, each with its source.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
