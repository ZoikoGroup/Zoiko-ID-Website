"use client";

import React from "react";
import Image from "next/image";

interface AssistantActsForExecutiveSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function AssistantActsForExecutiveSection({
  view = "all",
}: AssistantActsForExecutiveSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[380px] sm:h-[440px] lg:h-[470px] w-full max-w-[540px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada9.png"
                    alt="Executive and assistant reviewing documents and tablet at modern office desk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Heading and Text */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  An assistant acts for an<br />
                  executive
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  An executive authorizes an assistant to review specified records until a set date. The
                  grant names the records, not every record. Its end is fixed in advance, and it can be
                  withdrawn at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 py-9 border-t border-[#edf2f7]">
          {/* Top Image */}
          <div className="relative h-[260px] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-sm mb-7">
            <Image
              src="/authorization-delegated-authority/ada33.jpg"
              alt="Person using a digital tablet for delegation"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              10 · HUMAN DELEGATION
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            An assistant acts for an executive
          </h2>

          <p className="mt-3.5 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            An executive authorizes an assistant to review specified records until a set date. The grant names the records, not every record. Its end is fixed in advance, and it can be withdrawn at any time.
          </p>

          {/* Badges / Notes */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
              ILLUSTRATIVE
            </span>
            <span className="font-['Manrope'] text-[11px] text-[#64748b]">
              Not a live integration with any employer or sector.
            </span>
          </div>
        </section>
      )}
    </>
  );
}
