"use client";

import { useState } from "react";
import Image from "next/image";

const FAQS = [
  {
    q: "Are Zoiko iD prices public?",
    a: "Not in this layout. Public prices, units and plans are shown only when formally published. Otherwise, scope is discussed with sales.",
  },
  {
    q: "What affects a proposal?",
    a: "Actor classes, products and capabilities, integration pattern, identity, authority and evidence scope, security and deployment needs, and service obligations.",
  },
  {
    q: "Is there a free plan?",
    a: "No free plan is stated in any published source. Ask sales about your evaluation options.",
  },
  {
    q: "Can we evaluate machine and agent identity?",
    a: "These are part of the capability families above. Which parts apply to your evaluation is confirmed in the conversation with sales.",
  },
  {
    q: "Does requesting a conversation create a commitment?",
    a: "No. An inquiry is not a contract, an offer or an acceptance of one. It means the request was received.",
  },
  {
    q: "What if my region or capability is unsupported?",
    a: "We will tell you plainly what is and is not available for your scope. Regional and capability availability is confirmed before any commitment.",
  },
];

export default function DesktopFaqSection() {
  // The design shows every answer visible, so all items start open.
  const [open, setOpen] = useState<boolean[]>(FAQS.map(() => true));

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section
      id="section-10"
      className="flex w-full flex-col items-start gap-[36px]"
    >
      <div className="flex w-full flex-col items-start gap-[24px]">
        <div className="flex w-full flex-col items-start">
          <p className="font-dm-serif text-[96px] font-normal leading-[96px] text-[#e0f2fe]">
            10
          </p>
          <h2 className="w-full pb-[0.89px] font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Questions and answers
          </h2>
        </div>
        <div className="relative h-[383px] w-full">
          <Image
            src="/pricing-overview/desktop-pricing-public.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 770px, 60vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 items-start gap-x-[60px]">
        {FAQS.map((item, i) => {
          const isOpen = open[i];
          return (
            <div
              key={item.q}
              className={`pb-[22px] pt-[21px] ${
                i >= 2 ? "border-t border-solid border-[#e2e8f0]" : ""
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 rounded text-left font-manrope text-[17px] font-bold leading-[28px] text-[#07111f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[22px] font-normal leading-[28px] text-[#2563eb] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={`grid transition-[grid-template-rows] duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-[8.75px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#64748b]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
