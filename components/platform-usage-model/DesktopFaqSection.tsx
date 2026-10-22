"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a usage model?",
    a: "A usage model describes how identity, authority and evidence are applied in your environment: who or what is identified, what each actor may do under a delegated mandate, and how actions are recorded. It frames the questions to validate, not a price or a contractual outcome.",
  },
  {
    q: "Are machine and agent identities included?",
    a: "Yes, as a concept. Machine and agent identities are distinct from the authority they are granted. Each is tied to an accountable sponsor, bounded to specific tools and resources, and can be revoked independently.",
  },
  {
    q: "Is a sandbox available?",
    a: "Sandbox availability is confirmed as part of a qualified enquiry. Tell us which scenario you want to validate and we will confirm what can be evaluated before any commitment.",
  },
  {
    q: "Is usage priced per user?",
    a: "Not necessarily. The page describes concepts and questions to validate, not a pricing formula. Any commercial structure is confirmed with you during a qualified enquiry.",
  },
  {
    q: "Does API usage determine cost?",
    a: "API usage is one input to understanding how a deployment is used, but this page does not set out a cost formula. Terms are confirmed in writing, not inferred from usage illustrations.",
  },
  {
    q: "Where are enterprise terms confirmed?",
    a: "Enterprise terms are confirmed through a qualified enquiry and the resulting agreement. Illustrative scenarios and figures on this page are not contractual.",
  },
];

export default function DesktopFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] px-[270px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-[19px] text-center">
          <h2 className="font-dm-serif whitespace-nowrap text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426]">
            Frequently asked questions
          </h2>
          <p className="font-manrope pb-[0.55px] text-[16.8px] font-normal leading-[28.56px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>
        <div className="flex w-full flex-col gap-[12px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white p-[32px]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`usage-faq-panel-${i}`}
                    id={`usage-faq-btn-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="font-manrope flex w-full items-center justify-between gap-[24px] rounded-[8px] text-left text-[16px] font-semibold leading-[24px] text-[#071426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-4"
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`font-manrope flex size-[24px] shrink-0 items-center justify-center text-[24px] font-bold leading-none text-[#22b8d6] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`usage-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`usage-faq-btn-${i}`}
                    className="pt-[16px]"
                  >
                    <p className="font-manrope max-w-[680px] text-[15px] font-normal leading-[26px] text-[#475569]">
                      {f.a}
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
