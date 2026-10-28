"use client";

import React from "react";
import Image from "next/image";

interface Pattern07ContinuousAccessSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const steps = [
  {
    step: "Step 1",
    title: "Risk signal",
  },
  {
    step: "Step 2",
    title: "Policy re-evaluation",
  },
  {
    step: "Step 3",
    title: "Action taken",
  },
  {
    step: "Step 4",
    title: "Session or credential propagation",
  },
];

export default function Pattern07ContinuousAccessSection({
  view = "all",
}: Pattern07ContinuousAccessSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section
          id="pattern-07"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Subtitle & 4 Step Cards */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Pattern 07: Continuous<br />
                  access
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[490px]">
                  Risk signal, policy re-evaluation, action, and session or credential propagation.
                </p>

                {/* 4 Steps Grid (2x2) */}
                <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-[460px]">
                  {steps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-[16px] border border-slate-200/90 bg-white p-4 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                    >
                      <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#94a3b8] uppercase">
                        {item.step}
                      </span>
                      <h3 className="mt-1 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Image of Security Operations & Monitoring */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[440px] lg:h-[470px] w-full max-w-[520px] overflow-hidden rounded-[26px] shadow-md bg-slate-100">
                  <Image
                    src="/develeopment-techinal-guide-Architecture- Pattern/aph10.png"
                    alt="Engineers reviewing continuous access and risk signals"
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
          id="pattern-07-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-10 border-t border-slate-200/80"
        >
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#0088cc]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#0088cc] uppercase">
              AP-10
            </span>
          </div>

          <h2
            className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Pattern 07: Continuous<br />
            access
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Risk signal, policy re-evaluation, action, and session or credential propagation.
          </p>

          {/* 4 Steps Vertical List */}
          <div className="mt-6 flex flex-col gap-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[16px] border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  {item.title}
                </h3>
                <span className="mt-1 block font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#94a3b8] uppercase">
                  {item.step}
                </span>
              </div>
            ))}
          </div>

          {/* Illustrative Note & Pending Badge */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-[#64748b]">
              <span className="rounded-full bg-[#f3e8ff] px-2.5 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#7e22ce]">
                Illustrative
              </span>
              <span className="font-['Manrope']">
                Signal; re-evaluation; propagation
              </span>
            </div>

            <div>
              <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#92400e]">
                Full Pattern Pending
              </span>
            </div>
          </div>

          {/* Image at Bottom */}
          <div className="mt-6 relative h-[240px] w-full overflow-hidden rounded-[22px] shadow-sm bg-slate-900">
            <Image
              src="/develeopment-techinal-guide-Architecture- Pattern/aph24.jpg"
              alt="Continuous access verification"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}
    </>
  );
}
