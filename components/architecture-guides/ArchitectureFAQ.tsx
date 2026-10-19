"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: readonly FAQItem[] = [
  {
    question: "What does overlay-first mean?",
    answer:
      "Overlay-first means the trust and delegated-authority model sits on top of your existing identity providers and application infrastructure without requiring a rip-and-replace migration.",
  },
  {
    question: "How is revocation modeled?",
    answer:
      "Revocation is event-driven and context-aware. When a risk signal or policy change occurs, authority grants are re-evaluated and can be instantly invalidated or stepped up.",
  },
  {
    question: "How do authority and authentication differ?",
    answer:
      "Authentication proves who an actor is, while authority defines what specific actions, resources, and scope that actor is permitted to execute under explicit mandate.",
  },
  {
    question: "Where are the actual endpoints documented?",
    answer:
      "Actual endpoints, API contracts, and integration SDKs are documented in the Developer Documentation and API Reference destinations once approved.",
  },
] as const;

export default function ArchitectureFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] py-20 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Frequently asked questions
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-sky-500">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    <p className="pt-4">{item.answer}</p>
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
