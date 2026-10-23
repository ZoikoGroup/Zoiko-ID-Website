"use client";

import { useState } from "react";

const FAQS = [
  { q: "Is a demo available?", a: "Availability depends on confirmation for your scope. Submitting a request does not confirm one." },
  { q: "Can I discuss integration here?", a: "Yes, as part of your evaluation. Integration support is confirmed for your environment; the developer documentation covers the technical detail." },
  { q: "Is this a quote request?", a: "Not in itself. Commercial scope is reviewed with the authorized team, and nothing here is binding." },
  { q: "Should I report a security incident here?", a: "No. Use Responsible Disclosure for vulnerabilities, and Availability / Status for live service events." },
  { q: "How do I evaluate usage?", a: "See the Platform & Usage Model, which lists the factors that shape an evaluation." },
];

export default function MobileFaqSection() {
  // The export shows every answer visible, so all items start open.
  const [open, setOpen] = useState<boolean[]>(() => FAQS.map(() => true));
  const toggle = (i: number) => setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="faq" className="w-full px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
          Questions
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Answers before you submit
        </h2>
        <div className="flex flex-col gap-[36px] pt-[28px]">
          {FAQS.map((f, i) => (
            <div key={f.q} className="flex flex-col gap-[8px]">
              <h3 className="border-l-[3px] border-[#06b6d4]">
                <button
                  type="button"
                  aria-expanded={open[i]}
                  aria-controls={`m-faq-panel-${i}`}
                  id={`m-faq-btn-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 pl-[18px] text-left font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[22px] leading-none text-[#06b6d4] transition-transform duration-200 ${open[i] ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`m-faq-panel-${i}`}
                role="region"
                aria-labelledby={`m-faq-btn-${i}`}
                hidden={!open[i]}
                className="pl-[18px]"
              >
                <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#64748b]">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
