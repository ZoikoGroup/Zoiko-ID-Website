"use client";

import React from "react";
import Image from "next/image";

interface CookieSettingsConfirmationCopySectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieSettingsConfirmationCopySection({
  view = "all",
}: CookieSettingsConfirmationCopySectionProps) {
  // This section is only shown on mobile as per design reference
  const showMobile = view === "all" || view === "mobile";

  if (!showMobile) return null;

  return (
    <section className="sm:hidden relative w-full bg-white px-5 py-6">
      <div className="relative w-full rounded-[24px] bg-[#0b1728] p-5 border border-[#1e293b] shadow-md overflow-hidden">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-[2px] bg-[#00bcd4]" />
          <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
            10 · CONFIRMATION COPY
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-white"
          style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
        >
          <span className="block">Words the page will</span>
          <span className="block">use</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 font-['Manrope'] text-[12px] leading-[1.65] text-[#94a3b8]">
          The success, failure and unavailable messages are fixed text. Each appears only in the state it describes.
        </p>

        {/* State Copy Cards */}
        <div className="mt-5 flex flex-col gap-3">
          {/* Success Card */}
          <div className="rounded-[14px] border border-white/15 bg-white/[0.04] p-3.5">
            <div className="flex items-start gap-2.5">
              <span className="font-['Manrope'] text-[12px] font-bold text-white shrink-0 min-w-[58px]">
                Success:
              </span>
              <p className="font-['Manrope'] text-[11.5px] leading-relaxed text-[#94a3b8]">
                Your preference choices have been saved. You can change them here at any time.
              </p>
            </div>
          </div>

          {/* Failure Card */}
          <div className="rounded-[14px] border border-white/15 bg-white/[0.04] p-3.5">
            <div className="flex items-start gap-2.5">
              <span className="font-['Manrope'] text-[12px] font-bold text-white shrink-0 min-w-[58px]">
                Failure:
              </span>
              <p className="font-['Manrope'] text-[11.5px] leading-relaxed text-[#94a3b8]">
                We couldn&apos;t save your choices. Try again or use the approved privacy contact route.
              </p>
            </div>
          </div>
        </div>

        {/* Team Collaboration Image */}
        <div className="mt-6 relative h-[250px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/Legal-Privacy-cookie-settings/cs15.jpg"
            alt="Team members laughing and working around laptops at table"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
