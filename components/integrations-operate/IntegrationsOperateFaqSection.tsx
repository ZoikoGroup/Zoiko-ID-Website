"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do we have to replace our identity provider?",
    answer:
      "No. Zoiko iD is non-destructive: you keep your existing IdP. Zoiko iD receives authentication signals, adds context and authority checks, and returns decisions. No migration is required.",
  },
  {
    question: "Does federation give Zoiko iD authority over our users?",
    answer:
      "No. Federation carries an identity assertion from your provider. It does not transfer user authority or grant access permissions to Zoiko iD. Access governance remains scoped and time-bound according to your explicit policies.",
  },
  {
    question: "Is my system on the connector list?",
    answer:
      "A listed category is an architecture concept unless its status says otherwise. Consult the integrations directory on this page or talk to an identity expert to confirm which connectors are available for your environment.",
  },
  {
    question: "Who owns our access policies?",
    answer:
      "Your organization retains full ownership of its access policies, tenants, and evaluation rules. Zoiko iD provides decision support and immutable evidence while your systems remain the authority.",
  },
  {
    question: "Can an AI agent act once it has a verified identity?",
    answer:
      "No. A verified agent identity only establishes who the agent is. It does not by itself authorize any tool, resource, or action. Explicit, sponsored mandates are required for any automated action.",
  },
  {
    question: "What happens when access is revoked?",
    answer:
      "Revocation signals propagate continuously. Consuming applications re-check current authority before any consequential action, preventing subsequent requests from succeeding on stale or cached data.",
  },
  {
    question: "Who do we contact for support?",
    answer:
      "Start with the system that produced the symptom. For IdP and sign-in issues, use your provider support. For Zoiko iD interface questions, contact support through your registry agreement and published support routes.",
  },
];

export default function IntegrationsOperateFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#F8FAFC] px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-12">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[60px]">
          Frequently asked questions
        </h2>

        {/* FAQ Cards List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="flex flex-col rounded-[16px] border border-[#E2E8F0] bg-white-solid p-6 shadow-2xs sm:px-8 sm:py-6"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 text-left font-manrope text-base font-semibold leading-[22px] text-[#071426]"
                >
                  <span className="text-[#071426]">{faq.question}</span>
                  <span
                    className={`shrink-0 font-manrope text-2xl font-bold leading-none text-[#22B8D6] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 border-t border-[#E2E8F0] pt-4 font-manrope text-base font-normal leading-7 text-[#64748B]">
                    <p>{faq.answer}</p>
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
