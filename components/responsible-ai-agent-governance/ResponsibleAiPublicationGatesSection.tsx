"use client";

import React from "react";
import Image from "next/image";

interface ResponsibleAiPublicationGatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const gates = [
  {
    title: "Capability claims",
    description: "Product and engineering review must approve all capabilities.",
  },
  {
    title: "Oversight claims",
    description: "Review and ownership approval mechanisms are verified.",
  },
  {
    title: "Legal rewording",
    description: "Legal / jurisdiction statements approved.",
  },
  {
    title: "Evidence and privacy",
    description: "Privacy and security retention and redaction approved.",
  },
];

export default function ResponsibleAiPublicationGatesSection({
  view = "all",
}: ResponsibleAiPublicationGatesSectionProps) {
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {/* Desktop version remains untouched as requested */}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden">
          {/* Section 18: Publication Gates */}
          <section
            id="publication-gates-mobile"
            className="relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
          >
            {/* Kicker */}
            <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
              — 18 · PUBLICATION GATES
            </p>

            {/* Heading */}
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              What must be cleared<br />
              before launch
            </h2>

            {/* Description */}
            <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
              Each gate names its owner. Until all gates are cleared, this page is not published, and no capability it describes is treated as live.
            </p>

            {/* 4 Coral/Rose Bordered Gate Cards */}
            <div className="mt-8 flex flex-col gap-3.5">
              {gates.map((gate) => (
                <div
                  key={gate.title}
                  className="rounded-[18px] border border-[#fca5a5]/80 bg-white p-4.5 shadow-2xs"
                >
                  <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#991b1b]">
                    {gate.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                    {gate.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 19: What Next */}
          <section
            id="what-next-mobile"
            className="relative w-full bg-white px-5 py-12 border-t border-[#edf2f7]"
          >
            {/* Kicker */}
            <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-3">
              — 19 · WHAT NEXT
            </p>

            {/* Description */}
            <p className="font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
              Delegated authority explains what an actor may do. The Trust Center holds assurance evidence, and Contact handles questions this model does not answer.
            </p>

            {/* Bottom 3D Wireframe Cube Network Image ra38.jpg */}
            <div className="mt-8 relative w-full aspect-[4/3.3] max-h-[320px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-black">
              <Image
                src="/responsible-ai-Agent-Governance/ra38.jpg"
                alt="Connected governance and assurance network"
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
