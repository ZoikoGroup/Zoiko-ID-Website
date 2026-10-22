"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Zoiko iD a Zoiko Tech Inc. platform?",
    a: "Yes. Zoiko iD is the identity, delegated-authority and evidence platform operated by Zoiko Tech Inc. This page describes the company; product capabilities are documented on the Zoiko iD platform pages.",
  },
  {
    q: "Does visiting a headquarters address get me a meeting?",
    a: "No. The documented addresses identify where the company is established and are not walk-in contact points. Use the routed contact options so your enquiry reaches the right team.",
  },
  {
    q: "Where are Zoiko iD product details?",
    a: "Product details, architecture and API documentation live on the Zoiko iD platform, architecture guides and API reference pages. Use the where-to-go-next cards on this page to reach them.",
  },
  {
    q: "Where are the documented headquarters?",
    a: "The two documented addresses are listed in the addresses section of this page, each with its role for the company.",
  },
  {
    q: "Is the company behind Zoiko iD a subsidiary of another group?",
    a: "The corporate entity explainer on this page sets out how Zoiko Tech Inc. is structured and where it sits in relation to other Zoiko entities.",
  },
  {
    q: <span className="xl:whitespace-nowrap">Does Zoiko Tech Inc. publish all platform security claims on this <br className="max-xl:hidden" />page?</span>,
    a: "No. This page summarises the company's security posture. Detailed platform security, trust and evidence information is published in the Trust Center and the platform documentation.",
  },
];

export default function DesktopFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f8fafc] px-[270px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-[19px] text-center">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-[16.8px] font-normal leading-[28.56px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[12px]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                className="rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`tech-faq-panel-${i}`}
                  id={`tech-faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 rounded-[16px] p-[32px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
                >
                  <span className="font-manrope text-[16px] font-semibold leading-[24px] text-[#071426]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex size-[24px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold leading-none text-[#22b8d6] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`tech-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`tech-faq-button-${i}`}
                  hidden={!isOpen}
                  className="px-[32px] pb-[32px]"
                >
                  <p className="font-manrope text-[16px] font-normal leading-[26.4px] text-[#475569]">
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
