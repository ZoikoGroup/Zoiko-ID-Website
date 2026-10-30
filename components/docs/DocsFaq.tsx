"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

const docsFaqs: FaqItem[] = [
  {
    question: "Is every capability here live?",
    answer:
      "No. Each resource shows its verified availability beside it. Anything marked pending is not yet live, and no capability is labelled live until its release is confirmed.",
  },
  {
    question: "Do the samples run as shown?",
    answer:
      "Only reviewed samples are published, and each uses placeholder values rather than real secrets. Layout examples on this page are marked as not runnable.",
  },
  {
    question: "Where is the API reference?",
    answer:
      "The API reference is not yet published. It will appear in the API reference and SDK availability section once it is confirmed, rather than as an empty or invented list.",
  },
  {
    question: "What version is this?",
    answer:
      "The document version is not yet confirmed. Each page will show its version and product compatibility once confirmed, and validated deprecation notices will appear alongside it.",
  },
];

type DocsFaqProps = {
  faqs?: FaqItem[];
  idPrefix?: string;
};

export default function DocsFaq({ faqs = docsFaqs, idPrefix = "docs-faq" }: DocsFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 bg-grey-98 px-6 py-16 sm:px-10 sm:py-20 lg:py-28">
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
            const panelId = `${idPrefix}-${index}`;
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
