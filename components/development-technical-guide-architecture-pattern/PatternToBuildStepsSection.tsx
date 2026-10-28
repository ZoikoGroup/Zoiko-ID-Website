"use client";

import React from "react";
import Image from "next/image";
import { Compass, FileText, Code, ShieldCheck, AlertTriangle } from "lucide-react";

interface PatternToBuildStepsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const buildSteps = [
  {
    icon: Compass,
    title: "Choose a pattern",
    description: "Use the chooser above.",
  },
  {
    icon: FileText,
    title: "Read the prerequisites",
    description: "Confirm them against current documentation.",
  },
  {
    icon: Code,
    title: "Build against the reference",
    description: "Use the documented interfaces only.",
  },
  {
    icon: ShieldCheck,
    title: "Validate for your scope",
    description: "Record the evidence your review needs.",
  },
];

export default function PatternToBuildStepsSection({
  view = "all",
}: PatternToBuildStepsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="pattern-to-build"
          className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image of Executive Reviewing Specifications */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[480px] sm:h-[540px] lg:h-[570px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md bg-slate-100">
                  <Image
                    src="/develeopment-techinal-guide-Architecture- Pattern/aph13.png"
                    alt="Engineering lead signing off on implementation architecture specifications"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Subtitle, 4 Steps, and Verification Alert */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  From pattern to build, in<br />
                  four steps
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[490px]">
                  The pathway links each step to its reference. Quickstarts, SDKs and sandboxes appear
                  only where they are actually available. Specialist contact is offered for anything the
                  documentation does not cover.
                </p>

                {/* 4 Steps List */}
                <div className="mt-8 flex flex-col gap-4">
                  {buildSteps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                          <IconComponent className="h-4 w-4 stroke-[2.5]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                            {step.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[13px] text-[#5b6b82]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Yellow/Amber Alert Box */}
                <div className="mt-8 flex items-start gap-3 rounded-[14px] border border-[#fef08a] bg-[#fefce8] p-4 text-[#854d0e]">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-[#ca8a04] mt-0.5 stroke-[2.5]" />
                  <p className="font-['Manrope'] text-[12.5px] leading-relaxed text-[#713f12]">
                    <strong className="font-semibold text-[#854d0e]">Quickstarts and SDKs:</strong>{" "}
                    not linked on this page until they are published and verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="pattern-to-build-mobile"
          className="sm:hidden relative w-full bg-white px-4 py-8 border-t border-[#edf2f7]"
        >
          {/* Top Corridor Image */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-[22px] shadow-sm bg-slate-100 mb-6">
            <Image
              src="/develeopment-techinal-guide-Architecture- Pattern/aph27.jpg"
              alt="Implementation pathway corridor"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
              AP-16 · IMPLEMENTATION PATHWAY
            </span>
          </div>

          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            From pattern to build,<br />
            in<br />
            four steps
          </h2>

          <p className="mt-3.5 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            The pathway links each step to its reference. Quickstarts, SDKs and sandboxes appear only where they are actually available. Specialist contact is offered for anything the documentation does not cover.
          </p>

          {/* 4 Steps */}
          <div className="mt-6 flex flex-col gap-4">
            {buildSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                    <IconComponent className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Amber Alert Box */}
          <div className="mt-6 flex items-start gap-3 rounded-[16px] border border-[#fef08a] bg-[#fefce8] p-4 text-[#854d0e]">
            <AlertTriangle className="h-4 w-4 shrink-0 text-[#ca8a04] mt-0.5 stroke-[2.5]" />
            <p className="font-['Manrope'] text-[12px] leading-relaxed text-[#713f12]">
              <strong className="font-semibold text-[#854d0e]">Quickstarts and SDKs:</strong>{" "}
              not linked on this page until they are published and verified.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
