"use client";

import React from "react";
import Image from "next/image";

interface CookieSettingsChoicesLoggedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsChoicesLoggedSection({
  view = "all",
}: CookieSettingsChoicesLoggedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-10 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            <div className="relative min-h-[260px] sm:min-h-[290px] w-full overflow-hidden rounded-[24px] shadow-lg">
              {/* Background Image */}
              <Image
                src="/Legal-Privacy-cookie-settings/cs7.png"
                alt="Hand typing consent choices on laptop in office environment"
                fill
                sizes="(max-width: 1200px) 100vw, 1140px"
                className="object-cover object-center"
              />

              {/* Deep Navy Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081528]/95 via-[#081528]/85 to-[#081528]/50" />

              {/* Content */}
              <div className="relative z-10 flex min-h-[260px] sm:min-h-[290px] flex-col justify-center px-8 sm:px-12 lg:px-16 py-8">
                <h2 className="font-['DM_Serif_Display'] text-[30px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.15] tracking-tight text-white max-w-[500px]">
                  Choices are logged without<br />identifiers
                </h2>

                <p className="mt-4 max-w-[480px] font-['Manrope'] text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#cbd5e1]">
                  Consent records use minimal metadata, restricted access and an approved retention
                  policy. They are never sent to marketing analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 13) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-5 py-6">
          <div className="relative w-full rounded-[24px] overflow-hidden min-h-[340px] p-6 flex flex-col justify-end shadow-md">
            {/* Background Image */}
            <Image
              src="/Legal-Privacy-cookie-settings/cs16.jpg"
              alt="Person smiling with beard"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081528]/98 via-[#081528]/80 to-[#081528]/40" />

            {/* Foreground Content */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="flex items-start gap-2">
                <div className="w-5 h-[2px] bg-[#00bcd4] mt-1.5" />
                <span className="font-['Manrope'] text-[10px] font-bold tracking-wider text-[#00bcd4] uppercase max-w-[200px] leading-tight">
                  13 · PRIVACY AND GOVERNANCE
                </span>
              </div>

              {/* Heading */}
              <h2
                className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[25px] min-[390px]:text-[27px] font-normal leading-[1.18] tracking-[-0.01em] text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                <span className="block">Choices are logged</span>
                <span className="block">without identifiers</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3 font-['Manrope'] text-[11.5px] leading-[1.65] text-[#cbd5e1]">
                Consent records use minimal metadata, restricted access and an approved retention policy. They are never sent to marketing analytics.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
