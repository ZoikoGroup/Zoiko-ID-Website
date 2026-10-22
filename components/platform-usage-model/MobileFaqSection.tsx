"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a usage model?",
    a: "The set of factors used to scope an evaluation. The commercial units themselves are confirmed in an approved proposal.",
  },
  {
    q: "Is usage priced per user?",
    a: "This page does not establish a per-user unit. Pricing and units are confirmed through an approved proposal.",
  },
  {
    q: "Are machine and agent identities included?",
    a: "They are principal classes in the platform model. Whether they are part of your proposal is confirmed during scoping.",
  },
  {
    q: "Does API usage determine cost?",
    a: "This page does not state that. Commercial factors are discussed with the authorized team.",
  },
  {
    q: "Is a sandbox available?",
    a: "Sandbox availability depends on confirmed access for your organization. It is not implied by reading documentation.",
  },
  {
    q: "Where are enterprise terms confirmed?",
    a: "In an approved proposal, with the authorized commercial team.",
  },
];

export default function MobileFaqSection() {
  // The design shows every answer visible, so all items start open.
  const [open, setOpen] = useState<boolean[]>(() => faqs.map(() => true));

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="faq" className="lg:hidden w-full px-[22px] pb-[60px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          Questions
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Direct answers on usage and scope
        </h2>
        <ul className="flex flex-col gap-[20px] pt-[40px]">
          {faqs.map((f, i) => {
            const isOpen = open[i];
            return (
              <li
                key={f.q}
                className="rounded-[18px] border border-solid border-[#e2e8f0] bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-panel-${i}`}
                  id={`m-faq-btn-${i}`}
                  className={`flex w-full flex-col items-start gap-[6px] rounded-[18px] px-[26px] pt-[25px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] ${
                    isOpen ? "pb-[1.4px]" : "pb-[26px]"
                  }`}
                >
                  <span className="flex w-full items-center justify-between">
                    <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.2px] text-[#2563eb]">
                      Q{i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-manrope text-[18px] font-bold leading-none text-[#2563eb] transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </span>
                  <span className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">
                    {f.q}
                  </span>
                </button>
                <div
                  id={`m-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`m-faq-btn-${i}`}
                  hidden={!isOpen}
                  className="px-[26px] pb-[26px] pt-[7.4px]"
                >
                  <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                    {f.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
