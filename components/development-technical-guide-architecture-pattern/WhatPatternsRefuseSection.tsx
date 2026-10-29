"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface WhatPatternsRefuseSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const antiPatterns = [
  {
    title: "Unbounded delegation",
    description: "Access granted with no purpose, scope or expiry.",
  },
  {
    title: "Public secrets",
    description: "Credentials embedded in pages, logs or examples.",
  },
  {
    title: "Implicit trust",
    description: "Treating a request as trusted without a current check.",
  },
  {
    title: "Hidden privilege escalation",
    description: "Any path that grants more than was approved.",
  },
];

export default function WhatPatternsRefuseSection({
  view = "all",
}: WhatPatternsRefuseSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section
          id="what-patterns-refuse"
          className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              What the patterns refuse to do
            </h2>

            <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[700px]">
              Each anti-pattern names a shortcut that weakens authority or hides a decision. Patterns
              are written to avoid these, and a design that adopts one is flagged for review.
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: 4 Anti-pattern Cards */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                {antiPatterns.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                  >
                    {/* Light cyan/blue square with X icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e6f4fa] text-[#0088cc]">
                      <X className="h-4 w-4 stroke-[2.5]" />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-['Manrope'] text-[13px] text-[#5b6b82]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Image of Engineer at Workstations */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[440px] lg:h-[470px] w-full max-w-[520px] overflow-hidden rounded-[26px] shadow-md bg-slate-100">
                  <Image
                    src="/develeopment-techinal-guide-Architecture- Pattern/aph12.png"
                    alt="Engineer adhering to secure architectural patterns and avoiding anti-patterns"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ONLY SHOWN ON MOBILE) ================= */}
      {showMobile && (
        <section
          id="what-patterns-refuse-mobile"
          className="sm:hidden relative w-full bg-white pt-10 pb-12 overflow-hidden border-t border-[#edf2f7]"
        >
          {/* Top Row: Left Text + Right Tall Cropped Image */}
          <div className="relative flex min-h-[300px] w-full items-stretch">
            {/* Left Content */}
            <div className="w-[62%] pl-4 pr-3 py-2 flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="h-[2px] w-5 bg-[#0088cc]" />
                <span className="font-['Manrope'] text-[10px] font-bold tracking-wider text-[#0088cc] uppercase">
                  AP-15 · Boundaries and Anti-Patterns
                </span>
              </div>

              <h2
                className="mt-3 font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                What the<br />
                patterns<br />
                refuse to<br />
                do
              </h2>

              <p className="mt-2.5 font-['Manrope'] text-[12px] leading-[1.65] text-[#5b6b82]">
                Each anti-pattern names a shortcut that weakens authority or hides a decision. Patterns are written to avoid these, and a design that adopts one is flagged for review.
              </p>
            </div>

            {/* Right Tall Image */}
            <div className="relative w-[38%] overflow-hidden rounded-l-[26px] shadow-md bg-slate-900">
              <Image
                src="/develeopment-techinal-guide-Architecture- Pattern/aph26.jpg"
                alt="Architecture anti-pattern code review"
                fill
                sizes="40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom 4 Anti-pattern Cards */}
          <div className="mt-8 px-4 flex flex-col gap-3">
            {antiPatterns.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[18px] border border-rose-200/90 bg-white p-4 shadow-2xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                  <X className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
