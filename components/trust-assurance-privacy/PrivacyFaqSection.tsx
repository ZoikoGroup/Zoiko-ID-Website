"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How is authentication different from authorization for privacy?",
    answer:
      "Authentication verifies who an actor is—whether an individual person, organization, service workload, machine, or AI agent. Authorization determines what specific claims and actions that verified actor is permitted to access under governed policy and explicit mandates, enforcing minimal disclosure so that identity validation does not automatically expose unrelated personal records.",
  },
  {
    question: "Is delegated authority the same as consent?",
    answer:
      "No. Delegated authority is an explicit, bounded organizational or principal mandate that defines what actions a delegate or agent may perform on behalf of another entity. Consent pertains to a data subject's legal permission regarding personal data processing. Mandates are governed by explicit lifecycles, scopes, and revocations.",
  },
  {
    question: "How long is data kept?",
    answer:
      "Data retention is governed by reviewed privacy records, statutory retention schedules, and stated purpose scopes rather than automatic indefinite preservation. Unneeded claims are minimized at the decision stage, and audit records retain provenance only for accountability and governed currency.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Storage location, regional data residency, transfer mechanisms, and subprocessor arrangements are established in formally reviewed privacy records and our Privacy Notice. Technical architecture diagrams alone do not decide data residency.",
  },
  {
    question: "Does an AI agent get access to personal data it does not need?",
    answer:
      "No. Machine and AI agent identities operate under explicit mandates and narrow, bounded duty. Unrelated personal data is not exposed to agents; they only receive minimal necessary claims strictly required for the specific evaluated decision, and their actions remain linked to a responsible sponsor.",
  },
  {
    question: "What evidence can I review?",
    answer:
      "Reviewable evidence is scoped by audience and access level. Public disclosures and factual pages are accessible to all visitors. Detailed security evidence, agreements, and technical architecture references require verification, authorized role permissions, and formal request approval.",
  },
  {
    question: "How do I exercise my privacy rights?",
    answer:
      "Privacy rights requests (such as access, rectification, or erasure) must be submitted through our governed Legal operations rights channel. Public contact and sales forms never collect identity documents or handle rights intake.",
  },
  {
    question: "Where are security claims?",
    answer:
      "Security claims, operational controls, and certifications are published through our Trust Center and Security route. Each control on this page specifies its evidence status (such as Designed, Intended, or Independently reviewed) to ensure distinct boundaries between security and privacy assertions.",
  },
];

export default function PrivacyFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px] lg:leading-[60px]">
            Frequently asked questions
          </h2>
          <p className="max-w-[600px] font-manrope text-base font-normal leading-relaxed text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white transition-colors duration-150 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-manrope text-base font-semibold leading-snug text-[#071426] sm:text-[17px]">
                    {faq.question}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center font-manrope text-2xl font-bold leading-none text-[#22B8D6] transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] px-5 pb-6 pt-4 sm:px-6">
                    <p className="font-manrope text-[15px] leading-relaxed text-[#64748B]">
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
