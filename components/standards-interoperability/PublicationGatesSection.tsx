"use client";

import React from "react";

interface PublicationGatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const gates = [
  {
    title: "Capability registry",
    description: "Publication standard in scope, each row evidenced.",
  },
  {
    title: "Route",
    description: "Must perform a genuine review and respond.",
  },
  {
    title: "Certification",
    description: "Legal and standards tie-in checked and clear.",
  },
  {
    title: "Accessibility",
    description: "Accessibility QA: WCAG 2.2 AA verified.",
  },
];

export default function PublicationGatesSection({
  view = "all",
}: PublicationGatesSectionProps) {
  const showMobile = view === "all" || view === "mobile";

  // Note: Publication Gates is an extra mobile-only specification element
  return (
    <>
      {showMobile && (
        <section
          id="publication-gates-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              15 · PUBLICATION GATES
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            What must be cleared before this page goes live
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            This is a design and engineering specification. Each gate names its
            owner. Until every gate is cleared, nothing on the page is published
            as a live capability.
          </p>

          {/* 4 Gate Cards */}
          <div className="mt-7 flex flex-col gap-3.5">
            {gates.map((gate) => (
              <div
                key={gate.title}
                className="rounded-[18px] border border-rose-300/80 bg-white p-4.5 shadow-2xs"
              >
                <h3 className="font-['Manrope'] text-[13.5px] font-bold text-rose-800">
                  {gate.title}
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                  {gate.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
