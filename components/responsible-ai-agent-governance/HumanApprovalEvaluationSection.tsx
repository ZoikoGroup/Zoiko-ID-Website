"use client";

import React from "react";
import Image from "next/image";

interface HumanApprovalEvaluationSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HumanApprovalEvaluationSection({
  view = "all",
}: HumanApprovalEvaluationSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="human-approval"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading and Description */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Human approval,<br />
                  automated evaluation,<br />
                  later review
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Three separate steps. A human can approve a mandate. A policy evaluates each request. A
                  reviewer examines the record afterwards. None of these is shown as live unless its
                  capability is verified.
                </p>
              </div>

              {/* Right Column: Image ra7.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[420px] lg:h-[460px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-100">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra7.png"
                    alt="Approved mandate document evaluation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="human-approval-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 08 · HUMAN OVERSIGHT
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Human approval,<br />
            automated evaluation,<br />
            later review
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Three separate steps. A human can approve a mandate. A policy evaluates each request. A reviewer examines the record afterwards. None of these is shown as live unless its capability is verified.
          </p>

          {/* Pending Mechanism Pill */}
          <div className="mt-6 mb-7 flex justify-start">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#fef3c7] text-[#b45309] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase">
              HUMAN-APPROVAL MECHANISM PENDING
            </span>
          </div>

          {/* Bottom Image: ra25.jpg Meeting room under chandelier */}
          <div className="relative w-full aspect-[4/3.3] max-h-[320px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-slate-900">
            <Image
              src="/responsible-ai-Agent-Governance/ra25.jpg"
              alt="Team members reviewing approvals around meeting table"
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
