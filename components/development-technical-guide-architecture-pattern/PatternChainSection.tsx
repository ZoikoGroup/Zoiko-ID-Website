"use client";

import React from "react";
import { User, Key, Scale, ShieldCheck, FileText } from "lucide-react";

interface PatternChainSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const chainStages = [
  {
    icon: User,
    title: "Identity",
    subtitle: "Who or what is acting.",
  },
  {
    icon: Key,
    title: "Authority",
    subtitle: "What it may do.",
  },
  {
    icon: Scale,
    title: "Policy decision",
    subtitle: "Allow, deny or unknown.",
  },
  {
    icon: ShieldCheck,
    title: "Enforcement",
    subtitle: "Where the decision applies.",
  },
  {
    icon: FileText,
    title: "Evidence",
    subtitle: "The record for review.",
  },
];

export default function PatternChainSection({
  view = "all",
}: PatternChainSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-slate-100">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Identity, authority, decision, enforcement,<br className="hidden lg:block" /> evidence
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[740px]">
                Every pattern follows the same chain. Each stage is a separate boundary, and a stage can
                fail independently. The text equivalent below states the order and the owner of each stage.
              </p>
            </div>

            {/* Horizontal Cyan Chain with 5 Badges */}
            <div className="mt-14 lg:mt-20 relative w-full">
              {/* Connecting Horizontal Line (connecting center of circle 1 to center of circle 5) */}
              <div className="absolute top-[27px] left-[10%] right-[10%] h-[2px] bg-[#00bcd4] z-0" />

              {/* 5 Stages Grid */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {chainStages.map((stage) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.title} className="flex flex-col items-center text-center">
                      {/* Circle Badge */}
                      <div className="flex size-[54px] items-center justify-center rounded-full border-2 border-[#00bcd4] bg-white text-[#00bcd4] shadow-sm transition hover:scale-105">
                        <Icon className="size-[22px] stroke-[1.9]" />
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="mt-4 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                        {stage.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b] max-w-[150px] leading-snug">
                        {stage.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ONLY SHOWN ON MOBILE) ================= */}
      {showMobile && (
        <section
          id="pattern-chain-mobile"
          className="sm:hidden relative w-full bg-white px-4 py-10 border-t border-slate-100"
        >
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#0088cc]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#0088cc] uppercase">
              03 · Core Architecture Model
            </span>
          </div>

          <h2
            className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Identity, authority,<br />
            decision, enforcement,<br />
            evidence
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Every pattern follows the same chain. Each stage is a separate boundary, and a stage can fail independently. The text equivalent below states the order and the owner of each stage.
          </p>

          {/* Centered Vertical 5-Stage Chain */}
          <div className="mt-10 flex flex-col items-center gap-7">
            {chainStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title} className="flex flex-col items-center text-center">
                  <div className="flex size-[52px] items-center justify-center rounded-full border-2 border-[#8b5cf6] bg-white text-[#8b5cf6] shadow-sm">
                    <Icon className="size-5 stroke-[2]" />
                  </div>
                  <h3 className="mt-2.5 font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    {stage.title}
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#64748b]">
                    {stage.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Illustrative Note */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col gap-2">
            <div>
              <span className="inline-block rounded-full bg-[#f3e8ff] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#7e22ce]">
                Illustrative Diagram
              </span>
            </div>
            <p className="font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
              Text equivalent: identity then authority, then policy decision, then enforcement, then evidence.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
