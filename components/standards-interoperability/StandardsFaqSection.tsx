"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface StandardsFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const faqs = [
  {
    question: "Is Zoiko ID certified to a standard?",
    answer:
      "Certification is shown separately, and only when it has been independently verified. A capability being listed or aligned with a standard does not constitute formal certification unless explicitly verified with third-party audit evidence.",
  },
  {
    question: "Can Zoiko ID replace our identity provider?",
    answer:
      "No. Zoiko iD is designed to complement your existing identity provider, directory, and authorization estate as an overlay, rather than replace it. It manages bounded delegated authority, continuous trust, and immutable decision evidence.",
  },
  {
    question: "Does naming a standard mean it is supported?",
    answer:
      "No. Naming a standard or protocol indicates the architectural domain or potential integration profile. Each capability carries one of five explicit status labels (Validated, Pending validation, Planned, Not supported, or Not evaluated). Only 'Validated' capabilities with owner-approved evidence are supported in production.",
  },
  {
    question: "Where are the endpoints?",
    answer:
      "Specific endpoints, event schemas, SDK languages, and throughput figures are published exclusively in the API Reference and Quickstart documentation once verified, rather than on this conceptual overview page.",
  },
];

const mobileDirectFaqs = [
  {
    question: "Is Zoiko iD certified to a standard?",
    answer:
      "Not on this page. Certification is shown separately, and only when independently verified.",
  },
  {
    question: "Does naming a standard mean it is supported?",
    answer:
      "No. Support is shown per profile and per capability in the matrix.",
  },
  {
    question: "Can Zoiko iD replace our identity provider?",
    answer:
      "It is designed to complement it. Replacement is not implied.",
  },
  {
    question: "Where are the endpoints?",
    answer:
      "In the API Reference, once it is published.",
  },
];

export default function StandardsFaqSection({
  view = "all",
}: StandardsFaqSectionProps) {
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
          id="standards-faq-desktop"
          className="hidden sm:block relative w-full bg-[#f8fafd] py-20 lg:py-28 border-t border-[#edf2f7]"
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
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition"
                    >
                      <span className="font-['Manrope'] text-[15px] sm:text-[15.5px] font-bold text-[#0b1b33]">
                        {faq.question}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#00a4d6]">
                        {isOpen ? (
                          <Minus className="h-4 w-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="h-4 w-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-50">
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
          id="standards-faq-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7] text-left"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              13 · DIRECT FAQS
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Direct answers
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            These answers describe what is designed and what is verified. Where a
            fact is not yet confirmed, the answer says so rather than guessing.
          </p>

          <div className="mt-7 flex flex-col gap-3.5">
            {mobileDirectFaqs.map((faq) => (
              <div
                key={faq.question}
                className="flex items-start gap-3.5 rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                  <HelpCircle className="h-4.5 w-4.5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                    {faq.question}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
