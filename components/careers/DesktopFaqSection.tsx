"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Where can I see current openings?",
    a: "There are no published roles at the moment. When a role is open, it is listed in the open positions section of this page with its approved application route.",
  },
  {
    q: "Are positions remote?",
    a: "Each role states its own working arrangement and location when it is published. An office address on this site does not describe how any particular role is worked.",
  },
  {
    q: "Can I join a talent community?",
    a: "No. We do not keep speculative lists, add applicants to alert lists or collect details for future roles.",
  },
  {
    q: "How do I apply?",
    a: "Applications are made through the approved route stated on each published role, together with its privacy notice.",
  },
  {
    q: "What information is needed?",
    a: "The information required is set out in the application route for each role. This page does not collect your name, email or CV.",
  },
  {
    q: "Does an office address mean I can work there?",
    a: "No. A listed address identifies a company location and does not mean roles are available or can be performed there.",
  },
];

export default function DesktopFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] px-[270px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-[700px] max-w-[700px] flex-col items-center gap-[19px]">
          <h2 className="text-center font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426] xl:whitespace-nowrap">
            Frequently asked questions
          </h2>
          <p className="pb-[0.55px] text-center font-manrope text-[16.8px] font-normal leading-[28.56px] text-[#475569] xl:whitespace-nowrap">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="w-full rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white p-[32px]"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`careers-faq-panel-${i}`}
                    id={`careers-faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 rounded-[4px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-4"
                  >
                    <span className="font-manrope text-[16px] font-semibold text-[#071426]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold text-[#22b8d6] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`careers-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`careers-faq-button-${i}`}
                  hidden={!isOpen}
                  className="pt-4 font-manrope text-[15px] font-normal leading-[24.75px] text-[#475569]"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
