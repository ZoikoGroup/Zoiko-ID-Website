"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this the same as AI governance or safety?",
    answer:
      "No. AI governance and safety tools focus on model training, content filtering, or prompt guardrails. Zoiko iD operates at the authorization and identity layer, ensuring every autonomous action is bound to an authenticated agent, scoped by an explicit human-authorized mandate, and recorded with cryptographic proof.",
  },
  {
    question: "What if we revoke an agent mid-workflow?",
    answer:
      "Revocation is immediate with zero latency and no grace period. When a mandate is revoked by a sponsor or organization policy, the agent's credentials fail on the very next policy evaluation, immediately halting any unauthorized execution in-flight.",
  },
  {
    question: "Who decides if an agent has authority?",
    answer:
      "Authority is granted via explicit human sponsorship. A human sponsor creates a bounded mandate defining what resources the agent can access, how much it can spend, and its expiration time. The organization's policy engine continuously evaluates this mandate before any action is executed.",
  },
  {
    question: "How long is the audit trail kept?",
    answer:
      "All evidence logs are immutable and cryptographically signed at creation time. Retention periods can be configured according to your compliance and regulatory requirements (e.g., SOC 2, ISO 27001, FedRAMP, HIPAA), with full export capability.",
  },
  {
    question: "What if the AI agent makes a mistake?",
    answer:
      "Every decision and execution attempt is captured in the evidence log alongside its mandate and policy outcome. If anomalous behavior or errors occur, policies can trigger automated circuit-breakers, flag the event, and alert human operators immediately.",
  },
  {
    question: "What protocols and platforms do you support?",
    answer:
      "We support standard identity and authorization protocols including OAuth 2.0, OpenID Connect, mTLS, SPIFFE/SPIRE, and modern agentic frameworks like LangChain, CrewAI, AutoGen, and custom model endpoints.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-[270px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[900px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-8 py-7 text-left transition-colors duration-150 hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-[16px] font-semibold text-[#071426]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center font-manrope text-2xl font-bold text-[#22B8D6] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] px-8 pt-4 pb-7">
                    <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
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
