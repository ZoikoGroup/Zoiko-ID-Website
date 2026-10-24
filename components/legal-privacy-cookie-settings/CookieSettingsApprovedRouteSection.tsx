"use client";

import React from "react";
import Image from "next/image";

interface CookieSettingsApprovedRouteSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsApprovedRouteSection({
  view = "all",
}: CookieSettingsApprovedRouteSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-14 sm:py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            <div className="relative min-h-[340px] sm:min-h-[380px] w-full overflow-hidden rounded-[28px] shadow-xl flex items-center justify-center text-center">
              {/* Background Image */}
              <Image
                src="/Legal-Privacy-cookie-settings/cs8.png"
                alt="Business colleagues reviewing legal contract documents together"
                fill
                sizes="(max-width: 1200px) 100vw, 1140px"
                className="object-cover object-center"
              />

              {/* Deep Navy Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081528]/95 via-[#081528]/85 to-[#0b2545]/75" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-6 sm:px-12 py-10 max-w-[640px]">
                <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-white">
                  Read the notices, or contact the<br />approved route.
                </h2>

                <p className="mt-4 font-['Manrope'] text-[13.5px] sm:text-[14.5px] font-normal leading-[1.65] text-[#cbd5e1] max-w-[540px]">
                  Cookie Notice and Privacy Notice explain the detail. Contact and Help & Support
                  handle questions the notices do not answer.
                </p>

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="mt-7 inline-flex items-center justify-center rounded-[8px] bg-[#2563eb] px-6 py-2.5 font-['Manrope'] text-[13px] font-bold text-white shadow-sm hover:bg-blue-600 transition active:scale-[0.98]"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 16) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#0b1728] px-5 pt-10 pb-8 text-left">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              16 · NEXT STEP
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-white"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Read the notices, or</span>
            <span className="block">contact the approved</span>
            <span className="block">route.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[12px] leading-[1.65] text-[#94a3b8]">
            Cookie Notice and Privacy Notice explain the detail. Contact and Help &amp; Support handle questions the notices do not answer.
          </p>

          {/* Back to top outline button */}
          <div className="mt-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-[8px] border border-white/20 bg-transparent px-5 py-2 font-['Manrope'] text-[12px] font-medium text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              Back to top
            </button>
          </div>

          {/* 3D Connected Cubes Image */}
          <div className="mt-8 relative h-[270px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/Legal-Privacy-cookie-settings/cs17.jpg"
              alt="Connected translucent 3D cubes network"
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
