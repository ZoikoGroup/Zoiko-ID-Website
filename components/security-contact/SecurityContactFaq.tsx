"use client";

import { useState } from "react";

export default function SecurityContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I contact Zoiko iD security?",
      answer:
        "Select the specific enquiry intent matching your question above to route your request directly to the responsible team (such as AppSec, Security Response, Security Operations, GRC, or Privacy). Each route connects to the confirmed team owning that work.",
    },
    {
      question: "What information is safe to share?",
      answer:
        "Provide context such as the Zoiko iD product or integration involved, when you first noticed the issue (in your local timezone), and what you observed in your own words. Never share passwords, API keys, private tokens, personal records, or exploit payloads through standard contact fields.",
    },
    {
      question: "How do I check whether a service is affected?",
      answer:
        "To inspect operational service conditions, maintenance windows, or active incident reports, consult the Availability / Status route. This contact page does not provide live status telemetry.",
    },
    {
      question: "How do I report a vulnerability?",
      answer:
        "Suspected security flaws in Zoiko iD products or integrations should be reported through our verified Responsible Disclosure route to ensure coordinated analysis with our AppSec and PSIRT teams.",
    },
    {
      question: "Will I receive a response on a set timeline?",
      answer:
        "Receipt of your submission confirms that your request was created and assigned an initial record. Review and triage timelines are determined by the owning operational team based on classification; no automated technical SLA is implied.",
    },
    {
      question: "Is this page an emergency line?",
      answer:
        "No, this contact router is not an emergency hotline or immediate escalation endpoint. For active operational disruptions affecting your infrastructure, utilize your dedicated organizational escalation paths and verified operational status channels.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-[#F1F5F9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:py-[105px]">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          {/* Header */}
          <div className="text-center max-w-[700px]">
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal leading-[59.8px] tracking-[-0.015em] text-[#071426]">
              Frequently asked questions
            </h2>
          </div>

          {/* Accordion List: 740px width, 89px height items, no borders */}
          <div className="flex w-full max-w-[740px] flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="w-full overflow-hidden rounded-[16px] bg-white transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex min-h-[89px] w-full items-center justify-between px-6 sm:px-8 py-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[family-name:var(--font-manrope-family)] text-[16px] font-bold leading-normal text-[#0B1B33] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center font-[family-name:var(--font-manrope-family)] text-[24px] font-bold text-[#22B8D6] select-none"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-8 pt-0 sm:px-8">
                      <p className="font-[family-name:var(--font-manrope-family)] text-[15px] font-normal leading-[24px] text-[#64748B]">
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
    </section>
  );
}
