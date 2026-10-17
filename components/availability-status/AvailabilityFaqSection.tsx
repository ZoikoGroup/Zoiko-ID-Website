"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does current status cover?",
    answer:
      "Current status covers operational condition only for monitored components and scopes explicitly confirmed by our status telemetry source. It reports whether monitored platform services are operational, degraded, or experiencing an outage, but does not imply the health of unlisted or unmonitored external dependencies.",
  },
  {
    question: "How do maintenance notices differ from incidents?",
    answer:
      "Maintenance notices describe planned, scheduled engineering work communicated in advance with stated execution windows and timezones. Incidents, by contrast, reflect unplanned disruptions, degraded service performance, or outages requiring active mitigation and investigation.",
  },
  {
    question: "How are security advisories handled?",
    answer:
      "A status page communicates operational availability, not security advisories or vulnerability submissions. Security disclosures, CVE assessments, and vulnerability reports are managed separately through our Trust Center, Responsible Disclosure program, and dedicated security channels.",
  },
  {
    question: "Where are incidents recorded?",
    answer:
      "All verified incidents are assigned a unique tracking ID, timestamped in UTC/local timezone, and logged in our operational history register. Historical incident records cover only the source-backed verification window.",
  },
  {
    question: "What if the data is unavailable?",
    answer:
      "If telemetry feeds or status source connections are interrupted, the page explicitly displays 'Unknown or unavailable' rather than assuming or defaulting to healthy. You can contact Help and Support or your account representative directly for manual validation.",
  },
];

export default function AvailabilityFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f8fafc] px-4 py-16 sm:px-8 lg:px-20 lg:py-[105px] xl:px-24">
      <div className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px] lg:leading-[60px]">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white-solid shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex min-h-[89px] w-full items-center justify-between gap-4 px-6 sm:px-8 text-left transition-colors hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-base font-semibold leading-[22px] text-[#071426]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center font-manrope text-[24px] font-bold leading-[33px] text-[#22b8d6] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#e2e8f0]/60 px-6 pb-6 pt-4 sm:px-8">
                    <p className="font-manrope text-[15px] font-normal leading-7 text-[#64748b]">
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

