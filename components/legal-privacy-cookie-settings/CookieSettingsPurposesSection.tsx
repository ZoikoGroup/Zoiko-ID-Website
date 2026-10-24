"use client";

import React from "react";
import { ShieldCheck, Layers, Lock } from "lucide-react";

interface CookieSettingsPurposesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsPurposesSection({
  view = "all",
}: CookieSettingsPurposesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full border-t border-[#edf2f7]">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block w-full bg-[#f8fafc] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Necessary, and optional purposes
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Strictly necessary is explained but not switchable. Optional purposes appear only
                when they are in the approved registry.
              </p>
            </div>

            {/* 2 Purpose Cards */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Strictly necessary */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-6 lg:p-8 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md">
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-[42px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                      <ShieldCheck className="size-[22px] stroke-[1.8]" />
                    </div>
                    <span className="inline-block rounded-full bg-[#f1f5f9] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#475569]">
                      ALWAYS ACTIVE
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-['DM_Serif_Display'] text-[24px] font-normal text-[#0b1b33]">
                    Strictly necessary
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 font-['Manrope'] text-[13px] leading-relaxed text-[#64748b]">
                    Strictly necessary technologies support essential site functions and cannot be
                    switched off through this control.
                  </p>
                </div>

                {/* Bottom Status Element */}
                <div className="mt-8 flex items-center gap-3 pt-2">
                  <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#e6f4f8] text-[#0891b2]">
                    <Lock className="size-[16px] stroke-[1.8]" />
                  </div>
                  <span className="font-['Manrope'] text-[12px] font-semibold text-[#0b1b33]">
                    Classification pending registry confirmation
                  </span>
                </div>
              </div>

              {/* Card 2: Optional purposes */}
              <div className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-6 lg:p-8 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md">
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-[42px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                      <Layers className="size-[22px] stroke-[1.8]" />
                    </div>
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                      NO OPTIONAL PURPOSES
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-['DM_Serif_Display'] text-[24px] font-normal text-[#0b1b33]">
                    Optional purposes
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 font-['Manrope'] text-[13px] leading-relaxed text-[#64748b]">
                    Each approved optional purpose will appear here with its description and a
                    switch that is off by default. None is listed while the registry is unverified.
                  </p>
                </div>

                {/* Bottom Status Element */}
                <div className="mt-8 flex items-center gap-3 pt-2">
                  {/* Disabled switch (off) */}
                  <div
                    aria-hidden="true"
                    className="relative inline-flex h-[24px] w-[42px] shrink-0 cursor-not-allowed items-center rounded-full bg-[#cbd5e1] p-0.5 transition-colors"
                  >
                    <span className="inline-block size-[20px] rounded-full bg-white shadow-sm transition-transform" />
                  </div>
                  <span className="font-['Manrope'] text-[12px] font-semibold text-[#0b1b33]">
                    Switches appear only with a verified purpose
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-10 bg-[#f8fafc]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              05 · PURPOSE CATEGORIES
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Necessary, and optional</span>
            <span className="block">purposes</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
            Strictly necessary is explained but not switchable. Optional purposes appear only when
            they are in the approved registry.
          </p>

          {/* 2 Stacked Purpose Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Strictly necessary */}
            <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <ShieldCheck className="size-[20px] stroke-[1.8]" />
                </div>
                <span className="inline-block rounded-full bg-[#f1f5f9] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#475569]">
                  ALWAYS ACTIVE
                </span>
              </div>

              <h3 className="mt-4 font-['DM_Serif_Display'] text-[22px] font-normal text-[#0b1b33]">
                Strictly necessary
              </h3>

              <p className="mt-2 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                Strictly necessary technologies support essential site functions and cannot be
                switched off through this control.
              </p>

              <div className="mt-5 flex items-center gap-3 pt-1">
                <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[6px] bg-[#e6f4f8] text-[#0891b2]">
                  <Lock className="size-[14px] stroke-[1.8]" />
                </div>
                <span className="font-['Manrope'] text-[11px] font-semibold text-[#0b1b33]">
                  Classification pending registry confirmation
                </span>
              </div>
            </div>

            {/* Card 2: Optional purposes */}
            <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <Layers className="size-[20px] stroke-[1.8]" />
                </div>
                <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#b45309]">
                  NO OPTIONAL PURPOSES
                </span>
              </div>

              <h3 className="mt-4 font-['DM_Serif_Display'] text-[22px] font-normal text-[#0b1b33]">
                Optional purposes
              </h3>

              <p className="mt-2 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                Each approved optional purpose will appear here with its description and a switch that is
                off by default. None is listed while the registry is unverified.
              </p>

              <div className="mt-5 flex items-center gap-3 pt-1">
                <div
                  aria-hidden="true"
                  className="relative inline-flex h-[22px] w-[38px] shrink-0 cursor-not-allowed items-center rounded-full bg-[#cbd5e1] p-0.5"
                >
                  <span className="inline-block size-[18px] rounded-full bg-white shadow-sm" />
                </div>
                <span className="font-['Manrope'] text-[11px] font-semibold text-[#0b1b33]">
                  Switches appear only with a verified purpose
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
