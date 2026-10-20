"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Is authentication the same as authorization?",
    answer:
      "No. Authentication verifies who an actor is, while authorization evaluates whether that actor is permitted to perform a specific action.",
  },
  {
    question: "What is organization identity?",
    answer:
      "Organization identity represents explicit affiliations and organizational structures rather than inferred user attributes.",
  },
  {
    question: "How do machine and agent identities differ?",
    answer:
      "Machine identities relate to bounded devices or workload processes, whereas AI agent identities operate under explicit, sponsored authority.",
  },
  {
    question: "What is delegated authority?",
    answer:
      "Delegated authority defines permissions granted to act on another party's behalf within a restricted scope and timeframe.",
  },
  {
    question: "Why are credentials different from permissions?",
    answer:
      "Credentials carry structured, verifiable claims, whereas permissions are real-time evaluations of allowed actions.",
  },
  {
    question: "Can Zoiko iD work alongside an existing identity provider?",
    answer:
      "Yes, Zoiko iD is designed to integrate with established identity providers and directory services.",
  },
] as const;

export default function IdentityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FAFC] min-h-screen py-20 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col  items-center">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Frequently asked questions
          </h1>
          <p className="text-sm md:text-base text-slate-600 text-center leading-relaxed">
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
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
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
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
