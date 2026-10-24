"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";

interface CookieSettingsChoicesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsChoicesSection({
  view = "all",
}: CookieSettingsChoicesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block w-full bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Enclosing Card Container matching reference */}
            <div className="overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-6 sm:p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Hand on laptop trackpad with green screen */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative h-[260px] sm:h-[300px] lg:h-[330px] w-full overflow-hidden rounded-[20px] shadow-sm">
                    <Image
                      src="/Legal-Privacy-cookie-settings/cs2.png"
                      alt="Hand navigating laptop trackpad"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right Column: Title, description, and status pills */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]">
                    Your choices are not<br />shown until verified
                  </h2>

                  <p className="mt-4 font-['Manrope'] text-[13.5px] sm:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                    Each optional purpose is off or undecided until you choose. Nothing is
                    pre-selected, and no choice is inferred from scrolling or browsing.
                  </p>

                  {/* Status Rows */}
                  <div className="mt-6 flex flex-col gap-3">
                    {/* Row 1: Default state */}
                    <div className="flex items-center gap-3.5 rounded-[14px] bg-[#f1f5f9]/80 px-4 py-3.5 transition hover:bg-[#eaf0f6]">
                      <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#e0f2fe] text-[#0284c7]">
                        <CheckCircle2 className="size-[17px] stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                          Default state
                        </h3>
                        <p className="font-['Manrope'] text-[11.5px] text-[#64748b]">
                          Optional purposes off or undecided
                        </p>
                      </div>
                    </div>

                    {/* Row 2: Unsaved edits */}
                    <div className="flex items-center gap-3.5 rounded-[14px] bg-[#f1f5f9]/80 px-4 py-3.5 transition hover:bg-[#eaf0f6]">
                      <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#e0f2fe] text-[#0284c7]">
                        <X className="size-[17px] stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                          Unsaved edits
                        </h3>
                        <p className="font-['Manrope'] text-[11.5px] text-[#64748b]">
                          Shown with an &ldquo;unsaved changes&rdquo; indicator
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-8 bg-[#f8fafc]">
          <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white p-5 shadow-sm">
            {/* Top Visual: Woman typing on blue tablet laptop */}
            <div className="relative h-[240px] w-full overflow-hidden rounded-[18px]">
              <Image
                src="/Legal-Privacy-cookie-settings/cs10.jpg"
                alt="Working on blue tablet laptop"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mt-6 mb-3">
              <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
              <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
                03 · CURRENT SELECTION
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              <span className="block">Your choices are not</span>
              <span className="block">shown until verified</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
              Each optional purpose is off or undecided until you choose. Nothing
              is pre-selected, and no choice is inferred from scrolling or browsing.
            </p>

            {/* 2 Grey Status Rows */}
            <div className="mt-6 flex flex-col gap-3">
              {/* Default state */}
              <div className="flex items-center gap-3.5 rounded-[14px] bg-[#f1f5f9]/80 p-4">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f2fe] text-[#0284c7]">
                  <CheckCircle2 className="size-[18px] stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                    Default state
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#64748b]">
                    Optional purposes off or undecided
                  </p>
                </div>
              </div>

              {/* Unsaved edits */}
              <div className="flex items-center gap-3.5 rounded-[14px] bg-[#f1f5f9]/80 p-4">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f2fe] text-[#0284c7]">
                  <X className="size-[18px] stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                    Unsaved edits
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#64748b]">
                    Shown with an &ldquo;unsaved changes&rdquo; indicator
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
