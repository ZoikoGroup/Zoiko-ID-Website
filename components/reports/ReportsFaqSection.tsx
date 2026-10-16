"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question:
      "What's the difference between a SOC 2 report and an ISO certification?",
    answer:
      "A SOC 2 report is an attestation report prepared by an independent CPA examining the operational effectiveness of security, availability, and confidentiality controls during a past review window (typically 6–12 months). An ISO/IEC 27001 certification is an ongoing certification issued by an accredited registrar verifying that an organization maintains and continuously operates a formal Information Security Management System (ISMS).",
  },
  {
    question: "Can I use an audit report to prove current compliance?",
    answer:
      "Audit reports evaluate controls over a specific historical testing window. While they demonstrate that controls were designed and operated effectively during that timeframe, they do not guarantee that changes have not occurred since the period closed. For real-time posture validation, organizations combine historical audit reports with continuous trust signals and automated evidence telemetry.",
  },
  {
    question: "Who can access restricted audit reports?",
    answer:
      "Restricted reports (such as our comprehensive penetration testing findings, customer data processing assessments, and HIPAA reviews) are available to verified customers, prospective enterprise partners under active evaluation, and authorized regulatory bodies upon signing a non-disclosure agreement (NDA).",
  },
  {
    question: "Can I share an audit report with others?",
    answer:
      "Public summary documents and certificates may be shared freely. However, full Type II audit reports and technical assessment findings contain proprietary architectural details and are strictly confidential. They may only be shared with authorized stakeholders (such as external auditors or legal counsel) who are bound by non-disclosure terms.",
  },
  {
    question: "How often are audit reports updated?",
    answer:
      "SOC 2 Type II reports are audited annually covering continuous twelve-month periods. ISO 27001 certifications operate on a three-year cycle with mandatory annual surveillance audits. Third-party penetration tests are executed annually or following major platform architectural revisions.",
  },
  {
    question: "What if an audit report is outdated?",
    answer:
      "If an audit report's period has expired before a new report is released, we provide a bridge letter (also called a gap letter) signed by executive leadership confirming that no material changes have occurred to our control environment since the close of the audit window.",
  },
  {
    question: "What does \"not available for public disclosure\" mean?",
    answer:
      "It signifies that the document contains sensitive operational, control, or infrastructural details that cannot be distributed openly on the web. Qualified parties can request access through our trust portal, subject to identity verification and an NDA.",
  },
];

export default function ReportsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal tracking-[-0.015em] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-base font-normal leading-relaxed text-[#475569] sm:text-[16.8px]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white-solid shadow-xs transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-base font-semibold text-[#071426] sm:text-[16.8px]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center font-manrope text-2xl font-bold leading-none text-[#22B8D6] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
                    <p className="font-manrope text-[15.2px] font-normal leading-relaxed text-[#64748B]">
                      {faq.answer}
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
