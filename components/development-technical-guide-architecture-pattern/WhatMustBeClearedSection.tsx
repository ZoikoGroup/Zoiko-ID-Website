"use client";

import React from "react";
import Image from "next/image";

interface WhatMustBeClearedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const gates = [
  {
    title: "Pattern evidence",
    description: "Engineering: prerequisites verified per pattern",
  },
  {
    title: "Route",
    description: "Web platform: canonical route approved",
  },
  {
    title: "Claims",
    description: "Legal and product: no unverified guarantees",
  },
  {
    title: "Accessibility",
    description: "Accessibility QA: WCAG 2.2 AA tested",
  },
];

export default function WhatMustBeClearedSection({
  view = "all",
}: WhatMustBeClearedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="what-must-be-cleared"
          className="hidden sm:block relative w-full bg-[#0b1c34] py-16 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              What must be cleared before this page is<br />
              published
            </h2>

            <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-slate-300 max-w-[700px]">
              This is a reference specification. Each gate names its owner. Until every gate is
              cleared, no pattern is published as a shipped capability.
            </p>

            {/* 4 Gates Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gates.map((gate) => (
                <div
                  key={gate.title}
                  className="rounded-[16px] bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {gate.title}
                  </h3>
                  <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                    {gate.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <>
          <section
            id="what-must-be-cleared-mobile"
            className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-8 border-t border-[#edf2f7]"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-[2px] bg-[#00a4d6]" />
              <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
                PUBLICATION GATES
              </span>
            </div>

            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              What must be cleared<br />
              before this page is<br />
              published
            </h2>

            <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
              This is a reference specification. Each gate names its owner. Until every gate is cleared, no pattern is published as a shipped capability.
            </p>

            {/* 4 Red/Rose Bordered Cards */}
            <div className="mt-6 flex flex-col gap-3">
              {gates.map((gate) => (
                <div
                  key={gate.title}
                  className="rounded-[16px] bg-white border border-[#fecdd3] p-4 shadow-2xs"
                >
                  <h3 className="font-['Manrope'] text-[14px] font-bold text-[#9f1239]">
                    {gate.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {gate.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Next Step Section (aph29.jpg) */}
          <section
            id="next-step-mobile"
            className="sm:hidden relative w-full bg-white px-4 py-8 border-t border-[#edf2f7]"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-[2px] bg-[#00a4d6]" />
              <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
                NEXT STEP
              </span>
            </div>

            <p className="font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
              Each pattern states its prerequisites. Confirm them before you rely on a pattern in production.
            </p>

            {/* Bottom 3D Wireframe Image aph29.jpg */}
            <div className="mt-6 relative h-[260px] w-full overflow-hidden rounded-[24px] shadow-sm bg-black">
              <Image
                src="/develeopment-techinal-guide-Architecture- Pattern/aph29.jpg"
                alt="Architecture pattern prerequisites diagram"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </section>
        </>
      )}
    </>
  );
}
