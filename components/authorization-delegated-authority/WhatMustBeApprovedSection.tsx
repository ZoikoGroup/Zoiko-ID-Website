"use client";

import React from "react";

interface WhatMustBeApprovedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const gates = [
  {
    title: "Terminology",
    description: "Product and content: glossary approved.",
  },
  {
    title: "Claims",
    description: "Engineering and legal: protocol and auditability verified.",
  },
  {
    title: "Evidence",
    description: "Security and privacy: fields and visibility approved.",
  },
  {
    title: "Analytics",
    description: "Product and privacy: events and consent registered.",
  },
];

export default function WhatMustBeApprovedSection({
  view = "all",
}: WhatMustBeApprovedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#0b1728] py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                What must be approved first
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#94a3b8] max-w-[620px]">
                This page is a specification. Each gate names its owner. Until all gates are cleared,
                the page is not published, and no capability it describes is treated as live.
              </p>
            </div>

            {/* 4 White Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {gates.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] bg-white p-5 lg:p-6 shadow-md flex flex-col justify-between min-h-[120px] transition hover:shadow-lg"
                >
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              19 · PUBLICATION GATES
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            What must be approved first
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            This page is a specification. Each gate names its owner. Until all gates are cleared, the page is not published, and no capability it describes is treated as live.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {gates.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-[#fecdd3] bg-white p-4 shadow-xs"
              >
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#b91c1c]">
                  {item.title}
                </h3>
                <p className="mt-1 font-['Manrope'] text-[11.5px] text-[#64748b]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
