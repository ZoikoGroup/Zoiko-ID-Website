"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, AlertTriangle, Layers, SlidersHorizontal } from "lucide-react";

interface CookieSettingsHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsHeroSection({
  view = "all",
}: CookieSettingsHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block relative w-full bg-[#081528] overflow-hidden">
          {/* Ambient background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))]" />

          <div className="relative mx-auto w-full max-w-[1140px] px-6 pt-8 pb-10 lg:px-8 lg:pt-10 lg:pb-12">
            {/* Top 2-Column Hero Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading & Action */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h1 className="font-['DM_Serif_Display'] text-[42px] sm:text-[48px] lg:text-[54px] font-normal leading-[1.08] tracking-tight text-white">
                  Cookie Settings
                </h1>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] font-normal leading-[1.65] text-[#94a3b8] max-w-[440px]">
                  Choose which optional technologies Zoiko iD may use. You can
                  review and change your preferences here.
                </p>

                <div className="mt-7">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#2563eb] px-5 py-2.5 font-['Manrope'] text-[13px] font-bold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.98]"
                  >
                    Review current status
                  </button>
                </div>
              </div>

              {/* Right Column: Hero Visual with Overlaid Badge */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[270px] sm:h-[300px] lg:h-[320px] w-full max-w-[480px] overflow-hidden rounded-[24px] shadow-2xl">
                  <Image
                    src="/Legal-Privacy-cookie-settings/cs1.png"
                    alt="Two people discussing and pointing at laptop screen"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />

                  {/* Floating Overlaid Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[12px] border border-white/80 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                    <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#e6f4f8] text-[#0891b2]">
                      <Layers className="size-[17px] stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-['Manrope'] text-[12.5px] font-bold leading-tight text-[#0b1b33]">
                        Work themes, not vacancies
                      </h4>
                      <p className="mt-0.5 font-['Manrope'] text-[10.5px] leading-tight text-[#64748b]">
                        Identity, authority and evidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3-Card Status Bar */}
            <div className="mt-8 lg:mt-10 overflow-hidden rounded-[20px] border border-slate-100 bg-white p-2 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Card 1: Current choice */}
                <div className="flex items-center gap-3.5 p-4 lg:p-5">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Clock className="size-[20px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[13.5px] lg:text-[14px] font-bold text-[#0b1b33]">
                      Current choice
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] lg:text-[12px] text-[#64748b]">
                      Not available : no verified saved state
                    </p>
                  </div>
                </div>

                {/* Card 2: Last confirmed update */}
                <div className="flex items-center gap-3.5 p-4 lg:p-5">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Eye className="size-[20px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[13.5px] lg:text-[14px] font-bold text-[#0b1b33]">
                      Last confirmed update
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] lg:text-[12px] text-[#64748b]">
                      Shown only when the server confirms it
                    </p>
                  </div>
                </div>

                {/* Card 3: Verification */}
                <div className="flex items-center gap-3.5 p-4 lg:p-5">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#ffe4e6] text-[#e11d48]">
                    <AlertTriangle className="size-[20px] stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[13.5px] lg:text-[14px] font-bold text-[#0b1b33]">
                      Verification
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] lg:text-[12px] text-[#64748b]">
                      Preference service not verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full bg-white">
          {/* Breadcrumb */}
          <div className="w-full border-b border-[#edf2f7] bg-white px-5 py-3.5">
            <div className="flex items-center gap-1.5 font-['Manrope'] text-[12px] text-[#64748b]">
              <Link href="/" className="hover:text-[#0b1b33]">
                Home
              </Link>
              <span>/</span>
              <span>Legal & Privacy</span>
              <span>/</span>
              <span className="font-bold text-[#0b1b33]">Cookie Settings</span>
            </div>
          </div>

          {/* Mobile Hero Content */}
          <div className="px-5 pt-8 pb-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
              <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
                LEGAL & PRIVACY · 04
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-dm-serif font-['DM_Serif_Display'] text-[32px] min-[390px]:text-[34px] font-normal leading-[1.12] text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Cookie Settings
            </h1>

            {/* Paragraph */}
            <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
              Choose which optional technologies Zoiko<br />
              iD may use. You can review and change<br />
              your preferences here.
            </p>

            {/* 2 Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                disabled
                className="w-full rounded-[10px] bg-[#e2e8f0]/80 py-3 px-4 text-center font-['Manrope'] text-[12.5px] font-medium text-[#64748b] cursor-not-allowed"
              >
                Save my choices (unavailable)
              </button>
              <button
                type="button"
                className="w-full rounded-[10px] border border-[#0b1b33] bg-white py-3 px-4 text-center font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] hover:bg-slate-50 transition active:scale-[0.98]"
              >
                Review current status
              </button>
            </div>

            {/* Visual with Overlaid Floating Badge */}
            <div className="relative mt-8 h-[360px] w-full overflow-hidden rounded-[24px]">
              <Image
                src="/Legal-Privacy-cookie-settings/cs9.jpg"
                alt="Code on screen"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Floating Overlaid Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5 rounded-[16px] bg-white p-3.5 shadow-lg border border-slate-100">
                <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <SlidersHorizontal className="size-[18px] stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33] leading-tight">
                    Preference control
                  </h4>
                  <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b] leading-tight">
                    Not a policy page. Saving is available only once verified.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider and 3 Stacked Status Rows */}
            <div className="mt-8 border-t border-[#edf2f7] divide-y divide-[#edf2f7]">
              {/* 1. Current choice */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e6f4f8] text-[#0891b2]">
                  <Clock className="size-[20px] stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Current choice
                  </h3>
                  <p className="font-['Manrope'] text-[12px] text-[#64748b]">
                    Not available : no verified saved state
                  </p>
                </div>
              </div>

              {/* 2. Last confirmed update */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e6f4f8] text-[#0891b2]">
                  <Eye className="size-[20px] stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Last confirmed update
                  </h3>
                  <p className="font-['Manrope'] text-[12px] text-[#64748b]">
                    Shown only when the server confirms it
                  </p>
                </div>
              </div>

              {/* 3. Verification */}
              <div className="flex items-center gap-4 py-4">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#ffe4e6] text-[#e11d48]">
                  <AlertTriangle className="size-[20px] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Verification
                  </h3>
                  <p className="font-['Manrope'] text-[12px] text-[#64748b]">
                    Preference service not verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

