"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

interface PatternShortDefinitionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const definitions = [
  {
    title: "What is an architecture pattern?",
    description:
      "A reference design for connecting identity, authority, decisions and evidence. It is guidance, not a product feature.",
  },
  {
    title: "Does a pattern mean the product does this?",
    description:
      "Not necessarily. Each pattern states which capabilities must be validated for your environment.",
  },
  {
    title: "What do I still own?",
    description:
      "Your identity provider, your applications, your secrets and your policies. The pattern states the split.",
  },
  {
    title: "Where are the endpoints?",
    description: "In the API Reference, once it is published.",
  },
];

export default function PatternShortDefinitionsSection({
  view = "all",
}: PatternShortDefinitionsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="pattern-definitions"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Short definitions, and what you still own
            </h2>

            <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[720px]">
              These definitions are short and consistent with the rest of the site. Where a behaviour
              depends on your deployment, the answer says so.
            </p>

            {/* 2x2 Definitions Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {definitions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                    <HelpCircle className="h-4 w-4 stroke-[2.5]" />
                  </div>

                  <div>
                    <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="pattern-definitions-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-8 border-t border-[#edf2f7]"
        >
          {/* Mobile Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
              AP-17 · DEFINITIONS AND QUESTIONS
            </span>
          </div>

          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Short definitions, and<br />
            what you still own
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            These definitions are short and consistent with the rest of the site. Where a behaviour depends on your deployment, the answer says so.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {definitions.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-2xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                  <HelpCircle className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
