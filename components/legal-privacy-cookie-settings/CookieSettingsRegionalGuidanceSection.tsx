"use client";

import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

interface CookieSettingsRegionalGuidanceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsRegionalGuidanceSection({
  view = "all",
}: CookieSettingsRegionalGuidanceSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-14 sm:py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, description, and alert banner */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]">
                  Region-specific<br />guidance is pending<br />Legal
                </h2>

                <p className="mt-4 font-['Manrope'] text-[13.5px] sm:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82] max-w-[460px]">
                  Jurisdiction guidance appears only when an approved policy exists. Where a region
                  cannot be resolved, the page fails closed and does not guess.
                </p>

                {/* Amber Alert Banner */}
                <div className="mt-8 flex items-center gap-3.5 rounded-[16px] border border-[#fed7aa] bg-[#fff7ed] p-4 lg:p-4.5 shadow-sm max-w-[480px]">
                  <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f2fe] text-[#0284c7]">
                    <Globe className="size-[18px] stroke-[1.8]" />
                  </div>
                  <p className="font-['Manrope'] text-[12px] sm:text-[12.5px] leading-relaxed text-[#9a3412]">
                    <strong className="font-bold text-[#9a3412]">Policy not approved.</strong>{" "}
                    <span className="font-normal text-[#9a3412]">
                      No regional rule, consent requirement or legal regime is stated here.
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Column: Visual of person reviewing papers beside laptop */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[280px] sm:h-[320px] lg:h-[350px] w-full max-w-[500px] overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src="/Legal-Privacy-cookie-settings/cs6.png"
                    alt="Professional reviewing physical compliance documents next to laptop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 08) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              08 · REGIONAL INFORMATION
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Region-specific</span>
            <span className="block">guidance</span>
            <span className="block">is pending Legal</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[12.5px] leading-[1.65] text-[#5b6b82]">
            Jurisdiction guidance appears only when an approved policy exists. Where a region cannot be resolved, the page fails closed and does not guess.
          </p>

          {/* Amber Alert Card */}
          <div className="mt-5 flex items-start gap-3 rounded-[16px] border border-[#ffedd5] bg-[#fffaf5] p-3.5 shadow-sm">
            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f2fe] text-[#0284c7]">
              <Globe className="size-4 stroke-[1.8]" />
            </div>
            <p className="font-['Manrope'] text-[11.5px] leading-[1.55] text-[#9a3412]">
              <strong className="font-bold text-[#9a3412]">Policy not approved.</strong>{" "}
              <span className="font-normal text-[#9a3412]">
                No regional rule, consent requirement or legal regime is stated here.
              </span>
            </p>
          </div>

          {/* Earth at Night Image */}
          <div className="mt-6 relative h-[290px] w-full overflow-hidden rounded-[22px]">
            <Image
              src="/Legal-Privacy-cookie-settings/cs14.jpg"
              alt="Earth from space at night showing city lights"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}
    </>
  );
}
