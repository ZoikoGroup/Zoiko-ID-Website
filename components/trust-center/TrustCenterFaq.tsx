"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What does the Trust Center contain?",
    answer:
      "Approved summaries of identity security, delegated authority, privacy, governance and assurance topics, each linking to the page that owns it. It also lists published evidence assets and explains how to request restricted material.",
  },
  {
    question: "Can I access audit reports?",
    answer:
      "Where an approved report exists, enterprise reviewers can request it through the assurance request form. A request starts a review by the owning team; it does not grant access or guarantee release.",
  },
  {
    question: "How is AI-agent access addressed?",
    answer:
      "Machine and agent security is a design area covering sponsors and mandates for non-human principals. Agents act within bounded, revocable authority. Implementation claims appear only when verified and approved.",
  },
  {
    question: "Is every feature or standard generally available?",
    answer:
      "No. Each architecture category shows its own status, such as Designed or Pending verification. Standards alignment is not certification, and no availability is implied unless a dated, approved source says so.",
  },
  {
    question: "Does the Trust Center certify Zoiko iD?",
    answer:
      "No. Certifications are issued by third parties with a stated scope and validity date. This page publishes no certification claim, and badges appear only when backed by an approved source.",
  },
  {
    question: "How does delegated authority relate to security?",
    answer:
      "Authentication establishes who or what is acting; delegated authority defines the bounded actions that actor may take, with expiry and revocation. Keeping the two separate limits what any single credential can do.",
  },
  {
    question: "Where can I find privacy information?",
    answer:
      "Privacy architecture is described on the Privacy page. Formal privacy terms, rights routes and jurisdiction-specific statements are owned by Legal and appear in the Privacy Notice only.",
  },
];

export default function TrustCenterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-grey-98 px-6 py-16 sm:px-10 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[740px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-[34px] font-normal leading-[1.15] text-[#0F172A] sm:text-[42px] lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-base text-azure-47">Find answers to common questions about Zoiko iD</p>
        </div>

        <div className="mt-12 flex flex-col gap-3.5 lg:mt-[84px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `trust-faq-${index}`;
            return (
              <div key={faq.question} className="rounded-2xl bg-white-solid shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-8 py-7 text-left"
                >
                  <span className="font-manrope text-base font-semibold text-[#0F172A]">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="size-4 shrink-0 text-cyan-49" strokeWidth={2.5} aria-hidden="true" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-cyan-49" strokeWidth={2.5} aria-hidden="true" />
                  )}
                </button>
                {isOpen ? (
                  <p id={panelId} className="px-8 pb-7 font-manrope text-[15px] leading-[26px] text-azure-47">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
