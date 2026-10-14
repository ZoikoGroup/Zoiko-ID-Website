"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for sandbox access or explore our quickstarts. You can implement your first basic authentication or delegation flow in under 15 minutes using our official SDKs and verified walkthroughs.",
  },
  {
    question: "Do I need to replace my IdP?",
    answer:
      "No. Zoiko iD uses an overlay-first architecture that layers seamlessly on top of your existing identity providers (Okta, Azure AD, Keycloak, etc.) without requiring rip-and-replace of your auth systems.",
  },
  {
    question: "What API rate limits should I expect?",
    answer:
      "Standard sandbox tenants include generous rate limits suitable for rapid development and testing. Production deployments support custom throughput allocations, automatic burst handling, and high-availability enterprise SLAs.",
  },
  {
    question: "How long do credentials last?",
    answer:
      "Credential lifecycles are completely configurable based on your security policies, ranging from short-lived ephemeral tokens (minutes) to long-term certificate-based identities with automated key rotation.",
  },
  {
    question: "How long is audit data retained?",
    answer:
      "Audit trails and cryptographic evidence are retained according to your compliance and operational requirements (typically 1 to 7 years), with immutable storage and continuous export capabilities.",
  },
  {
    question: "Do you support compliance standards (SOC 2, ISO 27001, HIPAA)?",
    answer:
      "Yes. Zoiko iD is engineered to meet stringent regulatory standards, providing pre-formatted audit evidence packages, real-time activity logs, and cryptographic proofs tailored for SOC 2 Type II, ISO 27001, and HIPAA audits.",
  },
];

export default function OverviewFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          Frequently asked questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-mystic bg-white-solid shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-150 hover:bg-slate-50/60 sm:p-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-base font-semibold text-azure-9 sm:text-[16.8px]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-azure-48 text-white-solid" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-mystic/60 px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                    <p className="font-manrope text-sm font-normal leading-relaxed text-[#475569] sm:text-[15.2px]">
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
