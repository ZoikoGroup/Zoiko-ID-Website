"use client";

import React from "react";
import { EyeOff, Lock, AlertTriangle, X } from "lucide-react";

interface EveryStateNamedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const stateCards = [
  {
    icon: EyeOff,
    title: "No approved proof",
    description: "The claim has no verified evidence yet.",
    badge: "NO APPROVED PROOF",
    badgeBg: "bg-[#e0f2fe]/80 border-[#bae6fd] text-[#0284c7]",
  },
  {
    icon: Lock,
    title: "Gated",
    description: "Available only once its route is approved.",
    badge: "GATED",
    badgeBg: "bg-[#e0f2fe]/80 border-[#bae6fd] text-[#0284c7]",
  },
  {
    icon: AlertTriangle,
    title: "Stale source",
    description: "The source is older than its review date.",
    badge: "STALE",
    badgeBg: "bg-[#fef9c3] border-[#fef08a] text-[#a16207]",
  },
  {
    icon: X,
    title: "Permission denied",
    description: "This content is not open to your role.",
    badge: "DENIED",
    badgeBg: "bg-[#ffe4e6] border-[#fecdd3] text-[#e11d48]",
  },
];

export default function EveryStateNamedSection({
  view = "all",
}: EveryStateNamedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="every-state-named"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Every state is named,<br className="hidden sm:inline" /> including the uncomfortable ones
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                The page shows its state honestly. An unverified claim is labelled, a stale source is
                marked stale, and an unavailable service says so. Nothing is shown as complete when it
                is not.
              </p>
            </div>

            {/* 4 State Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px]">
              {stateCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white p-6 shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[220px]"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc]">
                        <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                      </div>

                      <h3 className="mt-4 font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>

                      <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-5">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase ${card.badgeBg}`}>
                        {card.badge}
                      </span>
                    </div>
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
          id="every-state-named-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 15 · PAGE STATES
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Every state is named,<br />
            including the<br />
            uncomfortable ones
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            The page shows its state honestly. An unverified claim is labelled, a stale source is marked stale, and an unavailable service says so. Nothing is shown as complete when it is not.
          </p>

          {/* 4 Honest State Cards */}
          <div className="mt-7 flex flex-col gap-3.5">
            {/* Card 1: No approved proof */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6]">
                <EyeOff className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                No approved proof
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                This claim lacks verified evidence yet.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#bfdbfe] bg-[#eff6ff] py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#1d4ed8] tracking-wider uppercase text-left">
                  NO APPROVED PROOF
                </div>
              </div>
            </div>

            {/* Card 2: Gated */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6]">
                <Lock className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Gated
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                Available only once its route is approved.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#bfdbfe] bg-[#eff6ff] py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#1d4ed8] tracking-wider uppercase text-left">
                  GATED
                </div>
              </div>
            </div>

            {/* Card 3: Stale source */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6]">
                <AlertTriangle className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Stale source
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                The source is older than its review date.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#fde68a] bg-[#fffbeb] py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#b45309] tracking-wider uppercase text-left">
                  STALE
                </div>
              </div>
            </div>

            {/* Card 4: Permission denied */}
            <div className="rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6]">
                <X className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Permission denied
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                This content is not open to your role.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#fecaca] bg-[#fef2f2] py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#dc2626] tracking-wider uppercase text-left">
                  DENIED
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
