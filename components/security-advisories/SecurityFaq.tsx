"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is a security advisory?",
    answer:
      "A security advisory is a source-reviewed notice about a security issue, affected product scope, available actions, and subsequent changes. Each advisory shows its scope, what is not yet established, and the date of its latest revision.",
  },
  {
    question: "Why are some fields marked not yet established?",
    answer:
      "Fields are marked as 'not yet established' when official analysis or verification is actively ongoing. We only publish confirmed source facts and avoid assuming unverified information.",
  },
  {
    question: "How do I report a vulnerability?",
    answer:
      "To report a suspected security vulnerability, please submit a report through our Responsible Disclosure route or contact our security team directly.",
  },
  {
    question: "Is my deployment affected?",
    answer:
      "Check the specific product versions and scopes listed in the advisory. Entitled users can sign in to view organization-specific impact details if applicable.",
  },
  {
    question: "Does no advisory mean no vulnerabilities?",
    answer:
      "Not necessarily. Advisories are published only for verified issues following completed reviews. Absence of an advisory does not guarantee zero risk across unassessed components.",
  },
];

export default function SecurityFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto mt-12 max-w-4xl flex flex-col space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#CBD5E1]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-bold text-[#0F172A] sm:text-[18px]">
                    {faq.question}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0284C7] transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[14px] leading-[1.7] text-[#475569] sm:text-[15px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
