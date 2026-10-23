"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const helpFaqs: FaqItem[] = [
  {
    question: "Where do I find integration documentation?",
    answer:
      "All technical integration guides, including REST APIs, SDK packages, code quickstarts and architecture specs, are maintained in our developer documentation portal.",
  },
  {
    question: "Where can I check service availability?",
    answer:
      "Real-time operational status, service health metrics, and scheduled maintenance notices are published on our Availability & Status dashboard.",
  },
  {
    question: "How do I get help with identity and delegated authority?",
    answer:
      "Review the Delegated Authority Explainers and Identity Guides for foundational principles, or request an evaluation consultation with our architecture specialists.",
  },
  {
    question: "How should I report a vulnerability?",
    answer:
      "Security vulnerabilities must be reported through our Responsible Disclosure program on the Security Contact page. Never submit suspected security findings through general support.",
  },
  {
    question: "Where do I send privacy-related requests?",
    answer:
      "Data protection, subject access, and privacy rights requests should be routed through our Trust & Privacy center or submitted directly to our Data Protection Officer.",
  },
];

const mobileFaqs = [
  {
    question: "Where do I find integration documentation?",
    answer:
      "Start with the Developer Overview and Quickstarts. The API Reference holds exact interface contracts.",
  },
  {
    question: "How should I report a vulnerability?",
    answer:
      "Use Responsible Disclosure. Do not send exploit material through the help form.",
  },
  {
    question: "Where can I check service availability?",
    answer:
      "On Availability / Status, which shows confirmed incidents and maintenance. This page does not predict outages.",
  },
  {
    question: "Where do I send privacy-related requests?",
    answer:
      "To the privacy route, which is separate from general support. Sending a help request does not fulfill a rights request.",
  },
  {
    question: "How do I get help with identity and delegated authority?",
    answer:
      "Read the topics above first. For complex organization cases, the enterprise route is the right owner.",
  },
];

interface HelpFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HelpFaqSection({
  view = "all",
}: HelpFaqSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              QUESTIONS
            </span>
          </div>

          {/* Title without awkward line breaks */}
          <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Answers to the questions people ask first
          </h2>

          {/* 5 FAQ Cards - Vertical Stack */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <h3 className="font-manrope text-[15px] font-bold text-[#071324] leading-snug">
                  {faq.question}
                </h3>
                <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 sm:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              Frequently asked questions
            </h2>
            <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm">
              Find answers to common questions about Zoiko iD
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="mt-12 flex flex-col gap-3.5 sm:mt-14">
            {helpFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between px-6 py-4.5 text-left transition hover:bg-slate-50/50 sm:py-5"
                  >
                    <span className="font-manrope text-xs font-semibold text-[#071324] sm:text-[13.5px]">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex size-5 shrink-0 items-center justify-center text-sky-500">
                      {isOpen ? (
                        <Minus className="size-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="size-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pt-3 pb-5">
                      <p className="font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
