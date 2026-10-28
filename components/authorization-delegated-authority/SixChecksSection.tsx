"use client";

import React from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

interface SixChecksSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const checks = [
  {
    number: "01",
    title: "Identity evidence",
    description: "The actor's identity is evaluated.",
  },
  {
    number: "02",
    title: "Relation and grant",
    description: "A valid grant or relationship is found.",
  },
  {
    number: "03",
    title: "Resource and action",
    description: "The request is matched to the grant's scope.",
  },
  {
    number: "04",
    title: "Current policy and context",
    description: "Rules and context are read as of now.",
  },
  {
    number: "05",
    title: "Decision",
    description: "Allow, deny, step-up or indeterminate.",
  },
  {
    number: "06",
    title: "Audit event",
    description: "The decision is recorded with its policy version.",
  },
];

export default function SixChecksSection({
  view = "all",
}: SixChecksSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Six checks before an action
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#5b6b82] max-w-[620px]">
                Each decision passes through the same six checks. If any check cannot be completed,
                the outcome is never a silent allow.
              </p>
            </div>

            {/* 6 Numbered Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {checks.map((check) => (
                <div
                  key={check.number}
                  className="rounded-[18px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition"
                >
                  <span className="font-['Manrope'] text-[18px] font-bold text-[#00bcd4]">
                    {check.number}
                  </span>
                  <h3 className="mt-2 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {check.title}
                  </h3>
                  <p className="mt-2 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {check.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 3 Outcome Banner Cards */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Permitted */}
              <div className="rounded-[18px] border border-[#bbf7d0] bg-[#f0fdf4] p-5 flex items-start gap-3.5 shadow-xs">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#dcfce7] text-[#16a34a]">
                  <CheckCircle2 className="size-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Permitted
                  </h4>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                    All checks pass within scope.
                  </p>
                </div>
              </div>

              {/* Step up or indeterminate */}
              <div className="rounded-[18px] border border-[#fef08a] bg-[#fefce8] p-5 flex items-start gap-3.5 shadow-xs">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#fef9c3] text-[#ca8a04]">
                  <AlertTriangle className="size-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Step up or indeterminate
                  </h4>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                    More verification is needed, or a source is unavailable. Never a silent allow.
                  </p>
                </div>
              </div>

              {/* Denied */}
              <div className="rounded-[18px] border border-[#fecdd3] bg-[#fff1f2] p-5 flex items-start gap-3.5 shadow-xs">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#ffe4e6] text-[#e11d48]">
                  <X className="size-4 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    Denied
                  </h4>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                    A check fails. The reason shown is minimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              08 · DECISION PATH
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Six checks before an action
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Each decision passes through the same six checks. If any check cannot be completed, the outcome is never an silent allow.
          </p>

          {/* 6 Numbered Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {checks.map((check) => (
              <div
                key={check.number}
                className="rounded-[18px] border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs"
              >
                <span className="font-['Manrope'] text-[20px] font-bold text-[#00bcd4]">
                  {check.number}
                </span>
                <h3 className="mt-1.5 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                  {check.title}
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                  {check.description}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Outcome Banners */}
          <div className="mt-4 flex flex-col gap-3">
            {/* Permitted */}
            <div className="rounded-[18px] border border-[#bbf7d0] bg-[#f0fdf4] p-4 flex items-start gap-3.5 shadow-xs">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4]">
                <CheckCircle2 className="size-4 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  Permitted
                </h4>
                <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                  All checks pass; action is in scope.
                </p>
              </div>
            </div>

            {/* Step up or indeterminate */}
            <div className="rounded-[18px] border border-[#fef08a] bg-[#fefce8] p-4 flex items-start gap-3.5 shadow-xs">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4]">
                <AlertTriangle className="size-4 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  Step up or indeterminate
                </h4>
                <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                  More confirmation is needed, or a source is unavailable. Never a silent allow.
                </p>
              </div>
            </div>

            {/* Denied */}
            <div className="rounded-[18px] border border-[#fecdd3] bg-[#fff1f2] p-4 flex items-start gap-3.5 shadow-xs">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4]">
                <X className="size-4 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  Denied
                </h4>
                <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-[1.6] text-[#5b6b82]">
                  A check fails. The reason shown is recorded.
                </p>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-5">
            <span className="inline-block rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
              ILLUSTRATIVE
            </span>
          </div>
        </section>
      )}
    </>
  );
}
