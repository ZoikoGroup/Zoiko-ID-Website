"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

interface CookieSettingsPublicationBlockedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsPublicationBlockedSection({
  view = "all",
}: CookieSettingsPublicationBlockedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-14 sm:py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Publication is blocked
              </h2>
            </div>

            {/* Warning Alert Banner */}
            <div className="mt-8 flex items-center gap-4 rounded-[20px] border border-[#fecdd3] bg-[#fff1f2] p-6 lg:p-7 shadow-sm">
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#ffe4e6] text-[#e11d48]">
                <AlertTriangle className="size-[20px] stroke-[2]" />
              </div>

              <p className="font-['Manrope'] text-[13px] sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#9f1239]">
                <strong className="font-bold text-[#9f1239]">
                  Build allowed. Publication prohibited.
                </strong>{" "}
                <span className="font-normal text-[#9f1239]">
                  Production publication needs the verified technology registry, approved regional
                  policy, a tested consent service, tag enforcement, notice synchronisation and Legal,
                  Privacy and Security sign-off. Cookie Notice approval also comes first.
                </span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 15) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f8fafc] px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              15 · PUBLICATION GATE
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-tight tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Publication is blocked
          </h2>

          {/* Warning Card */}
          <div className="mt-5 rounded-[20px] border border-[#fecdd3] bg-[#fff1f2] p-4.5 flex items-start gap-3.5 shadow-sm">
            <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#ffe4e6] text-[#e11d48]">
              <AlertTriangle className="size-4 stroke-[2]" />
            </div>

            <p className="font-['Manrope'] text-[11.5px] leading-[1.65] text-[#9f1239]">
              <strong className="font-bold text-[#9f1239]">
                Build allowed. Publication prohibited.
              </strong>{" "}
              <span className="font-normal text-[#9f1239]">
                Production publication needs the verified technology registry, approved regional policy, a tested consent service, tag enforcement, notice synchronisation and Legal, Privacy and Security sign-off. Cookie Notice approval also comes first.
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
