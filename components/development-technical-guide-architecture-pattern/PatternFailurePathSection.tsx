"use client";

import React from "react";
import { X, Clock, AlertTriangle } from "lucide-react";

interface PatternFailurePathSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const failureCards = [
  {
    icon: X,
    title: "Denial",
    description: "The request is refused with a safe reason.",
  },
  {
    icon: Clock,
    title: "Retry",
    description: "Retries are bounded, and never grant new access.",
  },
  {
    icon: AlertTriangle,
    title: "Source unavailable",
    description: "The outcome is unknown, and the fallback is stated.",
  },
];

export default function PatternFailurePathSection({
  view = "all",
}: PatternFailurePathSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="failure-paths"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Every pattern shows its failure path
            </h2>

            <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[700px]">
              A single happy path hides outages. Each pattern states what happens on denial, retry, an
              unavailable source and fallback. A failure is never reported as success.
            </p>

            {/* 3 Failure Path Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {failureCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col rounded-[18px] border border-slate-200/90 bg-white p-6 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#e6f4fa] text-[#0088cc]">
                      <IconComponent className="h-4 w-4 stroke-[2.5]" />
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                      {card.title}
                    </h3>

                    <p className="mt-1 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="failure-paths-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-8 border-t border-[#edf2f7]"
        >
          {/* Mobile Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
              AP-12 · FAILURE BEHAVIOUR
            </span>
          </div>

          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[26px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Every pattern shows its failure path
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            A single happy path hides outages. Each pattern states what happens on denial, retry, an unavailable source and fallback. A failure is never reported as success.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {failureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-2xs flex flex-col items-start"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc]">
                    <IconComponent className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
