"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the Zoiko iD changelog?",
    answer:
      "The Zoiko iD changelog is the published record of product and developer changes, including affected integration areas, version context, and links to authoritative documentation.",
  },
  {
    question: "Is this where I check for outages?",
    answer:
      "No. Live operational state and outage information are published on the separate Availability and Status page, not in the changelog.",
  },
  {
    question: "How do I know if a change affects my integration?",
    answer:
      "Every changelog entry clearly lists affected components, supported versions, and required actions so you can determine if your specific integration needs updates.",
  },
  {
    question: "Can a published entry change?",
    answer:
      "Published entries are immutable records. If a correction is necessary, the revision date and specific reason are transparently appended to the entry.",
  },
  {
    question: "Can I receive notifications when something changes?",
    answer:
      "Direct notification subscriptions are not yet available on this page. When approved subscription and consent processes are ready, they will be enabled here.",
  },
];

export default function ChangelogFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[860px] flex flex-col items-center gap-[48px]">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Frequently asked questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-[12px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] bg-white-solid transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-[24px_32px] sm:p-[28px_32px] text-left"
                >
                  <span className="font-manrope text-[16px] font-semibold leading-[24px] text-[#071426]">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center font-manrope text-[24px] font-bold leading-none text-[#22B8D6] select-none transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] px-[32px] pb-[28px] pt-4">
                    <p className="font-manrope text-[15px] sm:text-[16px] font-normal leading-[26.4px] text-[#64748B]">
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
  );
}
