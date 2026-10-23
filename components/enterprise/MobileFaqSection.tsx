"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does Zoiko iD fit with existing identity providers?",
    a: "As an overlay. Existing providers keep the functions they already own. Specific integrations are confirmed for your environment.",
  },
  {
    q: "How is delegated authority different from login?",
    a: "Login establishes identity. Delegated authority is a bounded mandate that states on whose behalf an action is taken, for what purpose, within which limits and until when.",
  },
  {
    q: "How are AI agents constrained?",
    a: "An agent is treated as a distinct non-human principal with a named sponsor and an explicit, bounded mandate. Its identity does not grant authority by itself.",
  },
  {
    q: "What evidence can authorized reviewers see?",
    a: "Records of the basis for a decision, scoped by role and minimized. Retention follows the approved policy for each record type.",
  },
  {
    q: "Does this page include pricing?",
    a: "No. Commercial information is in Pricing Overview, which owns pricing and usage terms.",
  },
  {
    q: "Are you certified?",
    a: "This page makes no certification claim. Assurance information is published only in the Trust Center, with its scope and currency.",
  },
];

export default function MobileFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="lg:hidden px-[22px] pb-[60px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14px]">
        <div className="relative h-[19.19px] w-full">
          <span aria-hidden="true" className="absolute left-0 top-1/2 h-[2px] w-[28px] -translate-y-1/2 bg-[#22b8d6]" />
          <p className="absolute left-[38px] top-1/2 -translate-y-1/2 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
            Questions
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb] [word-break:break-word]">
          Direct answers for enterprise evaluators
        </h2>
        <div className="flex w-full flex-col pt-[26px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-[#e2e8f0]">
                <h3>
                  <button
                    type="button"
                    id={`m-faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`m-faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-[24px] text-left font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-2"
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`flex size-[27px] shrink-0 items-center justify-center text-[24px] font-bold leading-none text-[#22b8d6] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={`m-faq-panel-${i}`} role="region" aria-labelledby={`m-faq-btn-${i}`} className="pb-[24px]">
                    <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#64748b]">{f.a}</p>
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
