"use client";

import React from "react";
import { Search, FileText, Code2, ShieldCheck } from "lucide-react";

interface FourStepsEvaluationIntegrationSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const steps = [
  {
    icon: Search,
    title: "Assess",
    description: "Check the matrix against your estate.",
  },
  {
    icon: FileText,
    title: "Design",
    description: "Agree the boundary and responsibilities.",
  },
  {
    icon: Code2,
    title: "Integrate",
    description: "Use the documented interfaces.",
  },
  {
    icon: ShieldCheck,
    title: "Validate",
    description: "Record the evidence for your scope.",
  },
];

export default function FourStepsEvaluationIntegrationSection({
  view = "all",
}: FourStepsEvaluationIntegrationSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="four-steps-desktop"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Four steps from evaluation to integration
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                The pathway describes the order of work. It does not promise a timeline.
                Each step links to its own owner, and steps with no verified destination
                are shown as pending.
              </p>
            </div>

            {/* Connecting Cyan Line */}
            <div className="mt-14 w-full max-w-[1100px] h-[1.5px] bg-[#cbe8f5]" />

            {/* 4 Steps Row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px]">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="flex flex-col">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-3.5 shadow-2xs">
                      <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                    </div>

                    <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                      {step.title}
                    </h3>

                    <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="four-steps-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              09 · IMPLEMENTER PATHWAY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Four steps from evaluation to integration
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            The pathway describes the order of work. It does not promise a
            timeline. Each step links to its own owner, and steps with no
            verified destination are shown as pending.
          </p>

          {/* Divider Line */}
          <div className="mt-5 w-full h-[1.5px] bg-slate-300" />

          {/* 4 Steps Stack */}
          <div className="mt-6 flex flex-col gap-6">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mb-2.5">
                    <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
