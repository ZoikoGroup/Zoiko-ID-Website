"use client";

import React from "react";
import { CheckCircle2, X, Clock, AlertTriangle } from "lucide-react";

interface CookieSettingsReportedHonestlySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const outcomeItems = [
  {
    icon: CheckCircle2,
    iconBg: "bg-[#e6f4f8] text-[#0891b2]",
    title: "Saved",
    description: "Shown only after persistence is confirmed.",
  },
  {
    icon: X,
    iconBg: "bg-[#ffe4e6] text-[#e11d48]",
    title: "Not saved",
    description: "Try again, or use the approved privacy contact route.",
  },
  {
    icon: Clock,
    iconBg: "bg-[#e6f4f8] text-[#0891b2]",
    title: "Uncertain",
    description: "The state is read back before any message is shown.",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-[#e6f4f8] text-[#0891b2]",
    title: "Version conflict",
    description: "Updated categories are shown for deliberate reconfirmation.",
  },
];

export default function CookieSettingsReportedHonestlySection({
  view = "all",
}: CookieSettingsReportedHonestlySectionProps) {
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
                Every outcome is reported honestly
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Success is shown only after the service confirms it. An uncertain result is checked
                before anyone is told a save worked or failed.
              </p>
            </div>

            {/* 2x2 Outcome Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
              {outcomeItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-[18px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-sm"
                  >
                    <div
                      className={`flex size-[40px] shrink-0 items-center justify-center rounded-[10px] ${item.iconBg}`}
                    >
                      <Icon className="size-[19px] stroke-[2]" />
                    </div>

                    <div>
                      <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 09) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f8fafc] px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              09 · SAVE OUTCOMES
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Every outcome is</span>
            <span className="block">reported</span>
            <span className="block">honestly</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[12.5px] leading-[1.65] text-[#5b6b82]">
            Success is shown only after the service confirms it. An uncertain result is checked before anyone is told a save worked or failed.
          </p>

          {/* 4 Stacked Outcome Cards */}
          <div className="mt-5 flex flex-col gap-3">
            {/* Saved */}
            <div className="flex items-center gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-3.5 shadow-sm">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                <CheckCircle2 className="size-4 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                  Saved
                </h3>
                <p className="font-['Manrope'] text-[11px] text-[#5b6b82]">
                  Shown only after persistence is confirmed.
                </p>
              </div>
            </div>

            {/* Not saved */}
            <div className="flex items-center gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-3.5 shadow-sm">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#ffe4e6] text-[#f43f5e]">
                <X className="size-4 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                  Not saved
                </h3>
                <p className="font-['Manrope'] text-[11px] text-[#5b6b82]">
                  Try again, or use the approved privacy contact route.
                </p>
              </div>
            </div>

            {/* Uncertain */}
            <div className="flex items-center gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-3.5 shadow-sm">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                <Clock className="size-4 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                  Uncertain
                </h3>
                <p className="font-['Manrope'] text-[11px] text-[#5b6b82]">
                  The state is read back before any message is shown.
                </p>
              </div>
            </div>

            {/* Version conflict */}
            <div className="flex items-center gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-3.5 shadow-sm">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                <AlertTriangle className="size-4 stroke-[2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                  Version conflict
                </h3>
                <p className="font-['Manrope'] text-[11px] text-[#5b6b82]">
                  Updated categories are shown for deliberate reconfirmation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
