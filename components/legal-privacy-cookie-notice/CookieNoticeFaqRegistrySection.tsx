import React from "react";
import { Info } from "lucide-react";

interface CookieNoticeFaqRegistrySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const faqRegistryItems = [
  {
    title: "Which cookies does Zoiko iD use?",
    answer:
      "The list is published only from the verified registry. It is not shown here until it is approved.",
  },
  {
    title: "Can I refuse optional cookies?",
    answer:
      "Optional choices are offered through Cookie Settings once that route is live.",
  },
  {
    title: "How long are cookies kept?",
    answer:
      "Durations are stated per technology from verified evidence only.",
  },
  {
    title: "Where is the Privacy Notice?",
    answer: "It is a separate document under Legal & Privacy.",
  },
];

export default function CookieNoticeFaqRegistrySection({
  view = "all",
}: CookieNoticeFaqRegistrySectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-[#f8fafc] border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Answers that match the registry
              </h2>
            </div>

            {/* 2x2 FAQ Cards Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {faqRegistryItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[16px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300"
                >
                  <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Info className="size-[19px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              14 · QUESTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Answers that match the<br />registry
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {faqRegistryItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[18px] border border-[#e2e8f0] bg-white p-5 shadow-sm"
              >
                <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <Info className="size-[19px] stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#64748b]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
