"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How is authentication different from authorization?",
    answer:
      "Authentication verifies who you are (your identity). Authorization evaluates whether you are permitted to perform a specific action on a specific resource at that moment under active policy.",
  },
  {
    id: "faq-2",
    question: "What evidence can be reviewed?",
    answer:
      "Evidence captures the actor reference, the authority grant boundary, the policy version evaluated, contextual signals, and the timestamp of the decision—without collecting sensitive payload data.",
  },
  {
    id: "faq-3",
    question: "Are you certified?",
    answer:
      "This architecture page presents design principles. Official certifications, attestations, and compliance reports are maintained on our dedicated Trust Center page.",
  },
  {
    id: "faq-4",
    question: "How can delegated access be revoked?",
    answer:
      "Delegated authority can be revoked immediately by the grantor, by administrators via policy change, or automatically when the bounded grant reaches its predefined expiration.",
  },
  {
    id: "faq-5",
    question: "How does this fit an existing identity provider?",
    answer:
      "Zoiko iD does not replace your IdP. Your identity provider authenticates the principal, while Zoiko iD evaluates delegated authority and policy context before your relying application enforces the action.",
  },
  {
    id: "faq-6",
    question: "Where do I report a vulnerability?",
    answer:
      "Suspected vulnerabilities should be reported directly through our Responsible Disclosure program route, ensuring confidential handling and prompt remediation.",
  },
];

export default function SecurityFaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F1F5F9] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[270px]">
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-[60px] sm:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-[19px] max-w-[700px]">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.15] text-[#071426] tracking-[-0.015em]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-[16px] leading-[25.6px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-6 sm:p-8 transition-shadow hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-manrope font-bold text-[16px] sm:text-[17px] leading-[27.2px] text-[#071426]">
                    {item.question}
                  </span>
                  <span
                    className={`font-manrope font-bold text-[22px] leading-none text-[#22B8D6] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 border-t border-[#E2E8F0]/60 mt-4">
                    <p className="font-manrope text-[15px] leading-[24px] text-[#64748B]">
                      {item.answer}
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
