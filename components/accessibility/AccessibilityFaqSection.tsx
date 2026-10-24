"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccessibilityFaqSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What accessibility standard does Zoiko iD target?",
    answer:
      "Zoiko iD targets the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard across public marketing, identity, and console experiences.",
  },
  {
    question: "Can I use a keyboard?",
    answer:
      "Yes. All interactive controls, navigation paths, and form inputs are designed to be fully reachable and operable using keyboard navigation alone.",
  },
  {
    question: "How do I report a barrier?",
    answer:
      "You can describe the barrier, affected URL, and assistive tech used through our barrier reporting intake route or via our designated accessibility channels.",
  },
  {
    question: "Where can I get account help?",
    answer:
      "For account recovery, sign-in assistance, or subscription inquiries, visit our dedicated Help & Support center.",
  },
];

export default function AccessibilityFaqSection({
  view = "all",
}: AccessibilityFaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches typography, card styling, centered alignment and accordion behavior
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[800px] px-6 sm:px-8">
            <div className="text-center">
              <h2 className="font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm lg:text-base text-slate-500">
                Find answers to common questions about Zoiko iD
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm lg:text-base font-semibold text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-slate-50 text-sky-600 flex items-center justify-center shrink-0 border border-slate-200/60">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs lg:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE VERSION (sm:hidden)
          Completely isolated to guarantee zero layout regression on desktop
          ========================================================================= */}
      {showMobile && (
        <div className="sm:hidden px-4 py-12 border-t border-slate-100 bg-white">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            12
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              QUESTIONS
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Direct answers
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {/* FAQ Card 1 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                What accessibility standard does Zoiko iD target?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                WCAG 2.2 Level AA. This is a target. Verified results are published only with their scope and date.
              </p>
            </div>

            {/* FAQ Card 2 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                How do I report a barrier?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A dedicated route is not yet verified. Until it is, use Help &amp; Support, and do not send secrets through any route.
              </p>
            </div>

            {/* FAQ Card 3 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Can I use a keyboard?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Pages are designed for keyboard use. Section 05 describes the behaviour you can rely on.
              </p>
            </div>

            {/* FAQ Card 4 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Where can I get account help?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Through Help &amp; Support. Security concerns go to Security Contact, and privacy requests to the privacy route.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
