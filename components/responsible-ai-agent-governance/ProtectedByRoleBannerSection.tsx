"use client";

import React from "react";
import Image from "next/image";

interface ProtectedByRoleBannerSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function ProtectedByRoleBannerSection({
  view = "all",
}: ProtectedByRoleBannerSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="protected-by-role"
          className="hidden sm:block relative w-full bg-white py-16 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[26px] shadow-lg min-h-[340px] flex items-center justify-center p-8 sm:p-12 text-center bg-[#071322]">
              {/* Background Image ra12.png */}
              <Image
                src="/responsible-ai-Agent-Governance/ra12.png"
                alt="Leadership signing confidential compliance agreement"
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center"
              />

              {/* Deep Navy/Slate Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061830]/92 via-[#0a2745]/88 to-[#061830]/92 backdrop-blur-[0.5px]" />

              {/* Text Content */}
              <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.15] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Protected by role, minimized, and redacted
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-slate-200 max-w-[700px]">
                  Visibility of prompts, secrets and subject data is mapped to roles. Only the minimum
                  needed for review is recorded. For privacy questions, see the Privacy Notice. For
                  security concerns, use responsible disclosure, not sales.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="protected-by-role-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-8"
        >
          <div className="relative overflow-hidden rounded-[24px] shadow-md p-6 bg-[#081729] text-left">
            {/* Background Image ra28.jpg Code */}
            <Image
              src="/responsible-ai-Agent-Governance/ra28.jpg"
              alt="Code and compliance"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#081729]/95 via-[#0c2038]/90 to-[#081729]/95" />

            <div className="relative z-10 flex flex-col items-start">
              {/* Kicker */}
              <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
                — 13 · PRIVACY, SECURITY AND RIGHTS
              </p>

              {/* Heading */}
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Protected by role,<br />
                minimized, and<br />
                redacted
              </h2>

              {/* Description */}
              <p className="mt-4 font-['Manrope'] text-[13px] leading-[1.65] text-slate-300">
                Visibility of prompts, secrets and subject data is mapped to roles. Only the minimum needed for review is recorded. For privacy questions, see the Privacy Notice. For security concerns, use responsible disclosure, not sales.
              </p>

              {/* 2 Status Pills */}
              <div className="mt-7 flex flex-col gap-2.5 w-full">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#fef3c7] text-[#b45309] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase shadow-2xs">
                    PRIVACY NOTICE ROUTE PENDING
                  </span>
                </div>
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#fef3c7] text-[#b45309] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase shadow-2xs">
                    RESPONSIBLE DISCLOSURE PENDING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
