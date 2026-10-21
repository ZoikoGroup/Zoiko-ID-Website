"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const faqs = [
  {
    q: "What is machine identity?",
    a: "Machine identity establishes an identity for a non-human actor, such as a service or workload. It answers who or what is calling, not what it may do.",
  },
  {
    q: "How is AI-agent identity different?",
    a: "An AI agent can initiate or coordinate actions. Its identity needs a sponsor and a bounded mandate, because the agent's identity does not give it authority.",
  },
  {
    q: "Does authentication equal permission?",
    a: "No. Authentication confirms a presented identity. Permission depends on policy, scope, purpose and context.",
  },
  {
    q: "What is delegated authority?",
    a: "A bounded basis for one actor to act on behalf of another. It is covered in more depth in the Delegated Authority Explainers.",
  },
  {
    q: "How does revocation change access?",
    a: "Where the mechanism permits, revocation withdraws authority, so later requests are checked against the withdrawn state. Timing depends on the approved implementation.",
  },
  {
    q: "Where are the exact technical details?",
    a: "In the API Reference, SDKs and Integrations pages, which hold the verified contracts. This guide explains concepts and links to them.",
  },
];

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Direct answers on machine and agent identity
        </h2>
        <div className="w-full pt-[24px]">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const btnId = `mai-faq-btn-${i}`;
            const panelId = `mai-faq-panel-${i}`;
            return (
              <div key={f.q} className="border-t border-solid border-[#e2e8f0]">
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-[12px] py-[24px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
                  >
                    <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f2fe]">
                      <Image src="/machine-agent-identity-guides/mobile-faq-icon.svg" alt="" width={18} height={18} className="size-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1 font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`flex size-[24px] shrink-0 items-center justify-center font-manrope text-[24px] font-bold leading-none text-[#22b8d6] transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="pb-[24px]">
                    <p className="font-manrope text-[15px] font-normal leading-[24px] text-[color:#64748b]">{f.a}</p>
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
