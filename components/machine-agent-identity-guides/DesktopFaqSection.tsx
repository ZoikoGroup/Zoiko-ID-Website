"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is machine identity?",
    answer:
      "Machine identity is the verifiable identity of a non-human actor such as a service, workload, device or AI agent. It establishes which actor is making a request. It does not, on its own, say what that actor is allowed to do.",
  },
  {
    question: "Does authentication equal permission?",
    answer:
      "No. Authentication confirms who or what an actor is. Permission comes from a separate decision made against current policy and a delegated mandate at the time of the request.",
  },
  {
    question: "How does revocation change access?",
    answer:
      "Revoking a credential or mandate removes the basis for future authorization decisions. Subsequent requests are evaluated against the current state, so access ends without waiting for a token or session to age out where the integration supports it.",
  },
  {
    question: "How is AI-agent identity different?",
    answer:
      "An AI agent acts on behalf of a sponsor and can chain actions. Its identity must therefore be paired with an explicit, bounded mandate and evidence of what it did, rather than inheriting the open-ended access of a person or service account.",
  },
  {
    question: "What is delegated authority?",
    answer:
      "Delegated authority is a bounded, time-limited grant from a sponsor to an actor, limited by purpose, resources and operations. A delegate cannot confer more authority than they hold.",
  },
  {
    question: "Where are the exact technical details?",
    answer:
      "This page is conceptual. Exact technical claims live in the architecture guides, the Delegated Authority Explainers and the developer documentation, each backed by an approved source.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#f8fafc] py-[105px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-[19px] text-center">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426]">
            Frequently asked questions
          </h2>
          <p className="pb-[0.55px] font-manrope text-[16.8px] font-normal leading-[28.56px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>
        <div className="flex w-full flex-col gap-[12px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `mai-faq-panel-${index}`;
            return (
              <div key={faq.question} className="overflow-hidden rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 p-[32px] text-left transition-colors hover:bg-slate-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#22b8d6]"
                >
                  <span className="font-manrope text-[16px] font-semibold text-[#071426]">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-[24px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold text-[#22b8d6] transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div id={panelId} className="px-[32px] pb-[32px]">
                    <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#475569]">{faq.answer}</p>
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
