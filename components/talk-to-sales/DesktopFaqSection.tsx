"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is a demo available?",
    a: "Yes. Choose the demo or platform walkthrough enquiry type and tell us what you want to see. We route your enquiry for review and follow up with the right person.",
  },
  {
    q: "Is this a quote request?",
    a: "No. Submitting an enquiry does not create a quote, offer or contractual commitment. It starts a conversation about your evaluation goals.",
  },
  {
    q: "How do I evaluate usage?",
    a: "Share your expected scale, the machine identities and authorities involved, and how you want to evidence delegated actions. We will help you scope an evaluation around those goals.",
  },
  {
    q: "Can I discuss integration here?",
    a: "Yes. Describe your systems and where machine identity, authority and delegated mandate need to connect. For technical detail, see the API reference and integration guides.",
  },
  {
    q: "Should I report a security incident here?",
    a: "No. This form is for sales enquiries only. If you believe there is a security issue or incident, use the security contact route so it reaches the right team promptly.",
  },
];

export default function DesktopFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#f8fafc] px-[270px] py-[105px]"
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-[19px]">
          <h2 className="font-dm-serif text-center text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426] whitespace-nowrap">
            Frequently asked questions
          </h2>
          <p className="pb-[0.55px] font-manrope text-center text-[16.8px] font-normal leading-[28.56px] text-[#475569] whitespace-nowrap">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[12px]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 rounded-[16px] p-[32px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
                  >
                    <span className="font-manrope text-[16px] font-semibold text-[#071426]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex size-[24px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold text-[#22b8d6] transition-transform duration-200 ${
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
                  hidden={!isOpen}
                  className="px-[32px] pb-[32px]"
                >
                  <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#475569]">
                    {item.a}
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
