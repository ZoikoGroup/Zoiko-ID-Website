"use client";

import React from "react";
import { Info } from "lucide-react";

interface CookieSettingsShortAnswersSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const faqItems = [
  {
    title: "Is anything switched on by default?",
    answer:
      "No optional purpose is pre-selected. Optional technologies stay off until you choose otherwise.",
  },
  {
    title: "Why can't I save right now?",
    answer: "The preference service has not been verified, so no save is offered.",
  },
  {
    title: "Will withdrawing undo past collection?",
    answer: "Changes apply going forward. Earlier collection cannot always be reversed.",
  },
  {
    title: "Where are the cookie details?",
    answer: "In the Cookie Notice, once it is approved.",
  },
];

export default function CookieSettingsShortAnswersSection({
  view = "all",
}: CookieSettingsShortAnswersSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-14 sm:py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Short answers
              </h2>
            </div>

            {/* 2x2 FAQ Cards Grid */}
            <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[18px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-sm"
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
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 12) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f8fafc] px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              12 · QUESTIONS
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-tight tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Short answers
          </h2>

          {/* 4 Stacked FAQ Cards */}
          <div className="mt-5 flex flex-col gap-3.5">
            {faqItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-4 shadow-sm"
              >
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                  <Info className="size-4 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[11px] leading-relaxed text-[#64748b]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
