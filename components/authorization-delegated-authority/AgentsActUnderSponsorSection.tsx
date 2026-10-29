"use client";

import React from "react";
import Image from "next/image";

interface AgentsActUnderSponsorSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function AgentsActUnderSponsorSection({
  view = "all",
}: AgentsActUnderSponsorSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-12 lg:py-16">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="relative min-h-[300px] sm:min-h-[330px] w-full overflow-hidden rounded-[28px] shadow-lg flex items-center p-8 sm:p-12 lg:p-14">
              {/* Background Image */}
              <Image
                src="/authorization-delegated-authority/ada13.png"
                alt="Professional agent working with laptop and clipboard in modern office"
                fill
                sizes="(max-width: 1200px) 100vw, 1240px"
                className="object-cover object-center"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081528]/95 via-[#081528]/85 to-[#081528]/45" />

              {/* Content */}
              <div className="relative z-10 max-w-[760px]">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Agents act under a sponsor, a tool scope<br />
                  and a threshold
                </h2>

                <p className="mt-4 font-['Manrope'] text-[13.5px] sm:text-[14.5px] font-normal leading-[1.65] text-[#cbd5e1] max-w-[720px]">
                  Each agent has a sponsor, an explicit identity, a delegated tool scope. An action
                  threshold and its own evidence trail. Sensitive actions need a step-up or a hand-off to
                  a person. A scope breach leads to a safe denial.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 py-6">
          <div className="relative w-full overflow-hidden rounded-[24px] p-6 shadow-md">
            <Image
              src="/authorization-delegated-authority/ada37.jpg"
              alt="Technical wave structure"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/95 via-[#061224]/85 to-[#061224]/65" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-[#00bcd4]" />
                <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider uppercase text-[#00bcd4]">
                  12 · WORKLOAD AND AGENT DELEGATION
                </span>
              </div>

              <h2
                className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[24px] sm:text-[28px] font-normal leading-[1.2] text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Agents act under a sponsor, a tool scope and a threshold
              </h2>

              <p className="mt-3 font-['Manrope'] text-[12.5px] leading-relaxed text-[#cbd5e1]">
                Each agent has a sponsor, a workload identity, a delegated tool scope, an action threshold and its own evidence trail. Sensitive actions need a step-up or a hand-off to a person. A scope breach leads to a safe denial.
              </p>

              {/* Badges / Notes */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
                  ILLUSTRATIVE
                </span>
                <span className="font-['Manrope'] text-[10.5px] text-[#94a3b8]">
                  No automatic approval of autonomous actions is implied.
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
