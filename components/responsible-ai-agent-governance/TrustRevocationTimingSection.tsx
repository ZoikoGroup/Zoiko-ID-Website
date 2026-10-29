"use client";

import React from "react";
import Image from "next/image";

interface TrustRevocationTimingSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const statusPills = [
  {
    label: "CURRENT",
    bg: "bg-[#e6f4fa]",
    text: "text-[#0088cc]",
    border: "border-[#bae6fd]",
  },
  {
    label: "STALE",
    bg: "bg-[#fef9c3]",
    text: "text-[#a16207]",
    border: "border-[#fef08a]",
  },
  {
    label: "REVOKED",
    bg: "bg-[#ffe4e6]",
    text: "text-[#e11d48]",
    border: "border-[#fecdd3]",
  },
  {
    label: "UNKNOWN",
    bg: "bg-[#f1f5f9]",
    text: "text-[#475569]",
    border: "border-[#e2e8f0]",
  },
  {
    label: "UNAVAILABLE",
    bg: "bg-[#fff1f2]",
    text: "text-[#be123c]",
    border: "border-[#fecdd3]",
  },
];

export default function TrustRevocationTimingSection({
  view = "all",
}: TrustRevocationTimingSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="trust-revocation-timing"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image ra11.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[500px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-100">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra11.png"
                    alt="Reviewer examining revocation and reassessment agreement"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, and Status Pills */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Trust can change, and<br />
                  revocation takes time to apply
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  When context changes, the agent&apos;s authority is reassessed. The status of a stale
                  or unavailable signal is shown as such. No immediate global revocation is claimed,
                  because propagation depends on the architecture involved.
                </p>

                {/* 5 Status Pills in a Row */}
                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  {statusPills.map((pill) => (
                    <span
                      key={pill.label}
                      className={`inline-flex items-center rounded-full border ${pill.border} ${pill.bg} ${pill.text} px-3.5 py-1.5 font-['Manrope'] text-[11px] font-bold tracking-wider uppercase shadow-2xs`}
                    >
                      {pill.label}
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
          id="trust-revocation-timing-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Top Image: ra32.jpg 3D wireframe cube network */}
          <div className="relative w-full aspect-[4/3.3] max-h-[320px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-black mb-7">
            <Image
              src="/responsible-ai-Agent-Governance/ra32.jpg"
              alt="Connected network nodes and revocation pathways"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 11 · SIGNALS AND REVOCATION
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Trust can change, and<br />
            revocation takes time to<br />
            apply
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            When context changes, the agent&apos;s authority is reassessed. The status of a stale or unavailable signal is shown as such. No immediate global revocation is claimed, because propagation depends on the architecture involved.
          </p>

          {/* 5 Status Pills in 2 Rows */}
          <div className="mt-7 flex flex-col gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#0b1b33]">
                CURRENT
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fde68a] bg-[#fffbeb] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#b45309]">
                STALE
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fecaca] bg-[#fef2f2] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#dc2626]">
                REVOKED
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#0b1b33]">
                UNKNOWN
              </span>
              <span className="inline-flex items-center rounded-full border border-[#fecaca] bg-[#fef2f2] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#dc2626]">
                UNAVAILABLE
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
