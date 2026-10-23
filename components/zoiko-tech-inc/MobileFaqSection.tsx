"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Zoiko iD a Zoiko Tech Inc. platform?",
    answer: "Yes. Zoiko iD is a Zoiko Tech Inc. platform.",
  },
  {
    question: "Where are the documented headquarters?",
    answer: <span>Sacramento, California, USA, and London, United<br />Kingdom, as listed above.</span>,
  },
  {
    question: <span>Does Zoiko Tech Inc. publish all platform<br />security claims on this page?</span>,
    answer:
      <span>No. Visit product-specific trust resources, which hold<br />the claims for their topic and scope.</span>,
  },
  {
    question: <span>Is the company behind Zoiko iD a subsidiary<br />of another group?</span>,
    answer:
      <span>This page does not describe group structure or<br />ownership. Those details appear only from an<br />approved legal source.</span>,
  },
  {
    question: <span>Does visiting a headquarters address get me<br />a meeting?</span>,
    answer:
      <span>The addresses are documented for reference. Walk-in<br />visits and visiting hours are not offered; use the contact<br />routes above.</span>,
  },
  {
    question: "Where are Zoiko iD product details?",
    answer:
      <span>On the Zoiko iD pages, including the platform overview,<br />the developer documentation and the Trust Center.</span>,
  },
];

export default function MobileFaqSection() {
  // The design shows every answer visible, so all items start open.
  const [open, setOpen] = useState<boolean[]>(() => faqs.map(() => true));

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="faq" className="lg:hidden w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px] px-[22px] py-[60px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
          Questions
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          <span>Corporate questions,<br />
answered directly</span>
        </h2>
        <div className="mt-[24px] w-full">
          {faqs.map((faq, i) => {
            const isOpen = open[i];
            const panelId = `m-faq-panel-${i}`;
            const buttonId = `m-faq-button-${i}`;
            return (
              <div key={i} className="w-full border-t border-solid border-[#dce3ee]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-start justify-between gap-[12px] pt-[23px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                  >
                    <span className="font-manrope text-[17px] font-bold leading-[28px] text-[#2563eb]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex size-[28px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold leading-none text-[#0891b2] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pt-[5px] pb-[24px]"
                >
                  <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                    {faq.answer}
                  </p>
                </div>
                {!isOpen && <div className="pb-[24px]" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
