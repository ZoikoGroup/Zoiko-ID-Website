"use client";

import React from "react";
import Image from "next/image";

interface ExploreRelatedGuidanceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const statusTags = [
  "STANDARDS & INTEROPERABILITY LINK PENDING",
  "API REFERENCE PENDING",
  "EXPERT ROUTE PENDING",
];

export default function ExploreRelatedGuidanceSection({
  view = "all",
}: ExploreRelatedGuidanceSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="explore-guidance"
          className="hidden sm:block relative w-full bg-white py-16 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[26px] shadow-lg min-h-[400px] lg:min-h-[440px] flex items-center justify-center">
              {/* Background Office Image aph14.png */}
              <Image
                src="/develeopment-techinal-guide-Architecture- Pattern/aph14.png"
                alt="Advisory experts discussing systems architecture and guidance"
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center"
              />

              {/* Deep Navy/Teal Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061830]/90 via-[#0a2745]/85 to-[#061830]/90 backdrop-blur-[1px]" />

              {/* Text Content */}
              <div className="relative z-10 px-6 py-12 text-center max-w-[820px] mx-auto flex flex-col items-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.15] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Explore related guidance, or talk to<br />
                  an expert.
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15.5px] leading-[1.7] text-slate-200 max-w-[680px]">
                  Standards & interoperability explains which protocols and profiles are verified.
                  The API Reference will hold exact contracts once published. An expert can review
                  your architecture when the enquiry route is live.
                </p>

                {/* 3 Status Tags (Yellow/Amber Pills) */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {statusTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#fef08a] px-4 py-2 font-['Manrope'] text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase text-[#713f12] shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="explore-guidance-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-8"
        >
          <div className="relative overflow-hidden rounded-[24px] shadow-md min-h-[380px] bg-[#071322]">
            {/* Background 3D Matrix Image aph28.jpg */}
            <Image
              src="/develeopment-techinal-guide-Architecture- Pattern/aph28.jpg"
              alt="Architecture guidance and matrix cubes"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center opacity-45"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061830]/92 via-[#0a2745]/88 to-[#061830]/94" />

            <div className="relative z-10 px-5 py-7 text-left flex flex-col items-start">
              {/* Kicker */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-[2px] bg-[#00a4d6]" />
                <span className="font-['Manrope'] text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
                  AP-18 · NEXT STEP
                </span>
              </div>

              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.18] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Explore related<br />
                guidance, or talk to<br />
                an<br />
                expert.
              </h2>

              <p className="mt-3.5 font-['Manrope'] text-[12.5px] leading-[1.65] text-slate-300">
                Standards &amp; Interoperability explains which protocols and profiles are verified. The API Reference will hold exact contracts once published. An expert can review your architecture when the enquiry route is live.
              </p>

              {/* 3 Status Tags (Amber Pills) */}
              <div className="mt-6 flex flex-col gap-2.5 w-full">
                {statusTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center rounded-full bg-[#fef3c7] border border-[#fde68a] px-3.5 py-2 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#92400e] shadow-2xs text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
