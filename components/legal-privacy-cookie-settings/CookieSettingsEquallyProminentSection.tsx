"use client";

import React from "react";
import { CheckCircle2, X, SlidersHorizontal } from "lucide-react";

interface CookieSettingsEquallyProminentSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const actionCards = [
  {
    icon: CheckCircle2,
    iconBg: "bg-[#e6f4f8] text-[#0891b2]",
    title: "Accept optional",
    description: "Enables only the purposes you select.",
    buttonText: "Accept optional (unavailable)",
  },
  {
    icon: X,
    iconBg: "bg-[#ffe4e6] text-[#e11d48]",
    title: "Reject optional",
    description: "Keeps all optional purposes off.",
    buttonText: "Reject optional (unavailable)",
  },
  {
    icon: SlidersHorizontal,
    iconBg: "bg-[#e6f4f8] text-[#0891b2]",
    title: "Save my choices",
    description: "Commits your selection once persisted.",
    buttonText: "Save my choices (unavailable)",
  },
];

export default function CookieSettingsEquallyProminentSection({
  view = "all",
}: CookieSettingsEquallyProminentSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full border-t border-[#edf2f7]">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block w-full bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Accept and reject are equally prominent
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Accept optional and Reject optional carry the same weight, size and effort. Save
                applies the current selection. All three are unavailable until the preference service is
                verified.
              </p>
            </div>

            {/* 3 Action Cards */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {actionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-6 lg:p-7 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md"
                  >
                    <div>
                      <div
                        className={`flex size-[40px] items-center justify-center rounded-[10px] ${card.iconBg}`}
                      >
                        <Icon className="size-[20px] stroke-[2]" />
                      </div>

                      <h3 className="mt-5 font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>

                      <p className="mt-2 font-['Manrope'] text-[12.5px] leading-relaxed text-[#64748b]">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <button
                        type="button"
                        disabled
                        aria-disabled="true"
                        className="w-full rounded-[10px] border border-[#e2e8f0] bg-white py-3 px-4 text-center font-['Manrope'] text-[12.5px] font-medium text-[#475569] shadow-none cursor-not-allowed transition hover:bg-slate-50"
                      >
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-10 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              04 · ACTIONS
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Accept and reject are</span>
            <span className="block">equally prominent</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
            Accept optional and Reject optional carry the same weight, size and effort. Save applies
            the current selection. All three are unavailable until the preference service is verified.
          </p>

          {/* 3 Mobile Action Cards Stacked */}
          <div className="mt-6 flex flex-col gap-4">
            {actionCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm"
                >
                  <div
                    className={`flex size-[38px] items-center justify-center rounded-[10px] ${card.iconBg}`}
                  >
                    <Icon className="size-[19px] stroke-[2]" />
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {card.title}
                  </h3>

                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                    {card.description}
                  </p>

                  <div className="mt-4">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="w-full rounded-[10px] bg-[#e2e8f0]/80 py-2.5 px-4 text-center font-['Manrope'] text-[12px] font-medium text-[#64748b] cursor-not-allowed"
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
