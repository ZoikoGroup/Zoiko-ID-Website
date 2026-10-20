"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is delegated authority the same as single sign-on?",
    answer:
      "No. Single sign-on (SSO) establishes identity—verifying who or what an actor is. Delegated authority is a distinct, bounded permission that establishes what that actor is allowed to do on behalf of another party under defined constraints.",
  },
  {
    question: "Can an AI agent act on behalf of an organization?",
    answer:
      "Yes, provided it acts within an explicit, sponsored mandate. Proving the agent's identity does not grant open-ended authority; its actions must be bounded by specific resources, operations, and policy conditions set by its human or organizational sponsor.",
  },
  {
    question: "Can it be revoked?",
    answer:
      "Yes. Delegated authority is time-bounded and subject to continuous trust evaluation. It can be revoked early by the sponsor, expired when its time window ends, or invalidated when trust signals (such as security status or role change) trigger re-evaluation.",
  },
  {
    question: "Does a credential automatically grant access?",
    answer:
      "No. A credential carries claims about an actor or relationship, but access depends on a dynamic authorization decision evaluated against current policy, context, and mandate constraints at request time.",
  },
  {
    question: "Who can delegate?",
    answer:
      "Authority can be delegated by an individual, an organization, or a workload sponsor with the legal or organizational mandate to grant that authority. A delegate cannot confer more authority than they themselves hold.",
  },
  {
    question: "What limits a delegated action?",
    answer:
      "A delegated action is bounded by purpose, specific resources, permitted operations (such as read vs. update), time window, environmental context, and the delegator's underlying policies.",
  },
  {
    question: "What does evidence prove?",
    answer:
      "Evidence records the decision outcome, the applicable policy version, the mandate reference, and the actor context at the moment of evaluation. It explains past decisions under privacy controls without serving as a substitute for current permission.",
  },
];

export default function AuthorityFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 lg:gap-14">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-base font-normal leading-[28.56px] text-[#475569] sm:text-[17px]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* Accordions */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border-b border-[#E2E8F0] bg-white-solid shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50/50 sm:p-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-base font-semibold text-[#071426] sm:text-[17px]">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex size-7 shrink-0 items-center justify-center font-manrope text-2xl font-bold leading-none text-[#22B8D6] transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-3 sm:px-8 sm:pb-8">
                    <p className="font-manrope text-sm font-normal leading-relaxed text-[#475569] sm:text-base">
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
