"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does Zoiko iD fit with existing identity providers?",
    a: "Zoiko iD sits alongside your existing identity providers rather than replacing them. Your provider continues to authenticate people and workloads, while Zoiko iD adds the authority layer: who or what is allowed to act, under which delegated mandate, and with what evidence.",
  },
  {
    q: "How are AI agents constrained?",
    a: "Agents act only under an explicit delegated mandate that defines scope, limits and duration. Every action is checked against that mandate, can be revoked at any time, and leaves evidence that authorized reviewers can inspect.",
  },
  {
    q: "Does this page include pricing?",
    a: "No. This page describes how the enterprise approach works. Submitting a request does not create an offer; an identity expert will confirm what is supported for your environment and discuss commercial terms separately.",
  },
  {
    q: "How is delegated authority different from login?",
    a: "Login proves who or what is present. Delegated authority defines what that actor is permitted to do on someone's behalf, within which limits, and for how long. It can be narrowed or revoked without changing how the actor authenticates.",
  },
  {
    q: "What evidence can authorized reviewers see?",
    a: "Authorized reviewers can see the mandate that was in force, the actor that used it, the actions taken and the outcome of each authority check, including any revocation. Access to this evidence is itself restricted to authorized roles.",
  },
  {
    q: "Are you certified?",
    a: "Certification status depends on your environment and requirements. An identity expert will confirm what is supported for you, and the Trust Center lists current assurance information.",
  },
];

export default function DesktopFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#f8fafc] px-[270px] py-[105px] hidden lg:block"
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[80px] px-[80px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-[19px] text-center">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-[#071426]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-[16.8px] font-normal leading-[28.56px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="w-full rounded-[16px] border-b border-solid border-[#e2e8f0] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`desktop-faq-panel-${i}`}
                  id={`desktop-faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-[24px] rounded-[16px] p-[32px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
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
                {isOpen && (
                  <div
                    id={`desktop-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`desktop-faq-button-${i}`}
                    className="px-[32px] pb-[32px]"
                  >
                    <p className="font-manrope text-[16px] font-normal leading-[25.6px] text-[#475569]">
                      {item.a}
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
