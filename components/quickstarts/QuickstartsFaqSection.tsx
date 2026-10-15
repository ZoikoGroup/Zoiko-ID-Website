"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Are the code samples production-ready?",
    answer:
      "Verified quickstarts provide fully tested, reproducible reference code designed for production workflows. We recommend replacing mock keys and test credentials with your organization's environment variables and key management system before deploying.",
  },
  {
    question: "What if my language isn't listed?",
    answer:
      "Zoiko iD exposes standards-compliant REST APIs and OpenAPI v3 contracts. You can interact with endpoints directly via HTTP, or generate idiomatic client bindings using standard OpenAPI generators for C#, Ruby, Rust, PHP, and other languages.",
  },
  {
    question: "Do I need a sandbox account to follow along?",
    answer:
      "You can review architectural models and sample code without an account. However, to execute live token issuance, delegation mandate queries, and webhook deliveries, you will need a sandbox account with provisioned API keys.",
  },
  {
    question: "Where can I find deeper explanations?",
    answer:
      "Each quickstart corresponds to full reference documentation in our API Reference, Architecture Guides, and Delegated Authority Explainers. Deep links are provided inside each walkthrough.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "You can reach our solutions engineering team through developer chat, open a discussion in our community repository, or review the error scenarios and recovery patterns outlined above.",
  },
];

export default function QuickstartsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-14">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px]">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border-b border-[#E2E8F0] bg-white-solid transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-7 text-left transition-colors hover:bg-slate-50/50 sm:p-8"
                >
                  <span className="pr-4 font-manrope text-base font-semibold leading-relaxed text-[#071426] sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center font-manrope text-2xl font-bold leading-none text-[#22B8D6]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-8 pt-0 sm:px-8">
                    <p className="font-manrope text-base font-normal leading-7 text-[#64748B]">
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
