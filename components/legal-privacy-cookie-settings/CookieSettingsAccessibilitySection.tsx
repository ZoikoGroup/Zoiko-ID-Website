"use client";

import React from "react";
import { Key, Eye, ZoomIn, CheckCircle2 } from "lucide-react";

interface CookieSettingsAccessibilitySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const accessibilityItems = [
  {
    icon: Key,
    title: "Keyboard",
    description: "Native buttons and switches, visible focus, no trap.",
  },
  {
    icon: Eye,
    title: "Screen readers",
    description: "Purpose, selection and outcome are announced.",
  },
  {
    icon: ZoomIn,
    title: "Zoom and reflow",
    description: "No clipped actions at 200% or 400%.",
  },
  {
    icon: CheckCircle2,
    title: "Reduced motion",
    description: "Animation is removed on request.",
  },
];

export default function CookieSettingsAccessibilitySection({
  view = "all",
}: CookieSettingsAccessibilitySectionProps) {
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
                Usable with a keyboard and a screen reader
              </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {accessibilityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col rounded-[18px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-sm"
                  >
                    <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                      <Icon className="size-[19px] stroke-[1.8]" />
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 14) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              14 · ACCESSIBILITY
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Usable with a keyboard</span>
            <span className="block">and a screen reader</span>
          </h2>

          {/* 4 Stacked Accessibility Cards */}
          <div className="mt-5 flex flex-col gap-3.5">
            {accessibilityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-2.5 rounded-[16px] border border-[#edf2f7] bg-white p-4 shadow-sm"
                >
                  <div className="flex size-[34px] items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                    <Icon className="size-4 stroke-[1.8]" />
                  </div>

                  <div>
                    <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11px] leading-relaxed text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
