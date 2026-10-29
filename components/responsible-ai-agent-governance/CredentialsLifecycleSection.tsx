"use client";

import React from "react";
import Image from "next/image";

interface CredentialsLifecycleSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const lifecycleSteps = [
  {
    title: "Issued",
    description: "Created for a bound agent.",
  },
  {
    title: "Rotated",
    description: "Replaced before its end.",
  },
  {
    title: "Expired",
    description: "Reached the end of its valid period.",
  },
  {
    title: "Revoked",
    description: "Withdrawn. Confirmed only once recorded.",
  },
];

export default function CredentialsLifecycleSection({
  view = "all",
}: CredentialsLifecycleSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="credentials-lifecycle"
          className="hidden sm:block relative w-full bg-[#0b1c33] py-20 lg:py-28 overflow-hidden"
        >
          {/* Background Image ra10.png */}
          <Image
            src="/responsible-ai-Agent-Governance/ra10.png"
            alt="Engineer managing credentials and token lifecycles on laptop"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Deep Navy/Slate Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/95 via-[#0b2440]/90 to-[#071629]/92" />

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Credentials are issued, rotated,<br className="hidden sm:inline" /> expired and revoked
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-slate-200">
                An agent credential moves through a lifecycle of its own. Each step is recorded
                separately. No secret is shown on this page, and no credential value is kept in an
                analytics event.
              </p>
            </div>

            {/* 4 Lifecycle Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px]">
              {lifecycleSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[18px] bg-white p-6 shadow-sm border border-white/10 transition hover:shadow-md"
                >
                  <h3 className="font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="credentials-lifecycle-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 10 · AGENT CREDENTIALS AND LIFECYCLE
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Credentials are issued,<br />
            rotated, expired and<br />
            revoked
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            An agent credential moves through a lifecycle of its own. Each step is recorded separately. No secret is shown on this page, and no credential value is kept in an analytics event.
          </p>

          {/* 4 Lifecycle Cards with Images */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Card 1: Issued */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[120px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/responsible-ai-Agent-Governance/ra28.jpg"
                  alt="Code representing issued agent credential"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Issued
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Created for a bound agent.
                </p>
              </div>
            </div>

            {/* Card 2: Rotated */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[120px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra29.jpg"
                  alt="Team rotating operational credentials"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Rotated
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Replaced before its end.
                </p>
              </div>
            </div>

            {/* Card 3: Expired */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[120px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/responsible-ai-Agent-Governance/ra30.jpg"
                  alt="Metrics showing expired operational window"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Expired
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Reached the end of its valid period.
                </p>
              </div>
            </div>

            {/* Card 4: Revoked */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[120px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra31.jpg"
                  alt="Reviewing revocation action on phone and laptop"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Revoked
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Withdrawn. Confirmed only once recorded.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
