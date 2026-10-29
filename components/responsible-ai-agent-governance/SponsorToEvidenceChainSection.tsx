"use client";

import React from "react";
import { User, Bot, KeyRound, Scale, FileText } from "lucide-react";

interface SponsorToEvidenceChainSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const chainSteps = [
  {
    icon: User,
    title: "Sponsor",
    description: "Accountable for the mandate.",
  },
  {
    icon: Bot,
    title: "Agent identity",
    description: "The actor that acts.",
  },
  {
    icon: KeyRound,
    title: "Delegated mandate",
    description: "What it may do, and until when.",
  },
  {
    icon: Scale,
    title: "Policy decision",
    description: "Allow, deny, step-up or unknown.",
  },
  {
    icon: FileText,
    title: "Evidence",
    description: "The record for later review.",
  },
];

export default function SponsorToEvidenceChainSection({
  view = "all",
}: SponsorToEvidenceChainSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="sponsor-to-evidence"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Left-Aligned Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                From sponsor to evidence, in one chain
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                Every agent action traces back through five links. A reviewer can follow the chain from
                the sponsor who approved the mandate, to the decision, to the evidence record. Each
                link is a separate entity, so none can stand in for another.
              </p>
            </div>

            {/* 5-Link Chain Diagram */}
            <div className="relative mt-16 w-full max-w-[1100px]">
              {/* Cyan Connecting Line running through node centers */}
              <div className="absolute top-6 left-[8%] right-[8%] h-[2px] bg-[#9ee2f8] -translate-y-1/2 z-0" />

              {/* 5 Nodes */}
              <div className="relative z-10 grid grid-cols-5 gap-4">
                {chainSteps.map((step) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.title} className="flex flex-col items-center text-center px-1">
                      {/* Cyan Ring Node */}
                      <div className="w-12 h-12 rounded-full border-2 border-[#00a4d6] bg-white flex items-center justify-center shadow-2xs">
                        <IconComponent className="w-5 h-5 text-[#00a4d6] stroke-[2.2]" />
                      </div>

                      {/* Node Title */}
                      <h3 className="mt-4 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                        {step.title}
                      </h3>

                      {/* Node Subtitle */}
                      <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82] max-w-[170px]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="sponsor-to-evidence-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 04 · ACCOUNTABILITY GRAPH
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            From sponsor to<br />
            evidence,<br />
            in one chain
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Every agent action traces back through five links. A reviewer can follow the chain from the sponsor who approved the mandate, to the decision, to the evidence record. Each link is a separate entity, so none can stand in for another.
          </p>

          {/* 5 Stacked Centered Badges */}
          <div className="mt-10 flex flex-col items-center gap-7">
            {chainSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center text-center max-w-[240px]">
                  {/* Purple Bordered Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#9333ea] bg-white flex items-center justify-center shadow-xs mb-2.5">
                    <IconComponent className="w-5 h-5 text-[#9333ea] stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Illustrative Diagram Note */}
          <div className="mt-10 pt-2 flex flex-col gap-2">
            <span className="inline-block self-start px-2.5 py-1 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase">
              ILLUSTRATIVE DIAGRAM
            </span>
            <p className="font-['Manrope'] text-[12px] text-[#64748b] leading-relaxed">
              Text equivalent: sponsor, then agent, then mandate, then policy decision, then evidence.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
