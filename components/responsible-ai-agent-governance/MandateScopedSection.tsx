"use client";

import React from "react";
import Image from "next/image";

interface MandateScopedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const scopeCards = [
  {
    image: "/responsible-ai-Agent-Governance/ra4.png",
    alt: "Hand with pen pointing at authorized actions in agreement",
    kicker: "SCOPE",
    title: "Actions",
    description: "Only the operations named in the mandate.",
  },
  {
    image: "/responsible-ai-Agent-Governance/ra5.png",
    alt: "Legal and compliance representatives defining authorized resources",
    kicker: "SCOPE",
    title: "Resources",
    description: "Only the resources named in the mandate.",
  },
  {
    image: "/responsible-ai-Agent-Governance/ra6.png",
    alt: "Stamped approved document designating bounded operational period",
    kicker: "SCOPE",
    title: "Period",
    description: "An explicit start and end. No open-ended grants.",
  },
];

export default function MandateScopedSection({
  view = "all",
}: MandateScopedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="mandate-scoped"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Left-Aligned Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                A mandate is scoped, not general
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                A mandate states the sponsor, the permitted actions and resources, the constraints, the
                purpose and the period. Anything the mandate does not list is outside it. The example
                below is synthetic.
              </p>
            </div>

            {/* 3 Scope Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px]">
              {scopeCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                >
                  {/* Card Image */}
                  <div className="relative h-[190px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col">
                    <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] text-[#00a4d6] uppercase">
                      {card.kicker}
                    </span>
                    <h3 className="mt-1.5 font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                      {card.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                      {card.description}
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
          id="mandate-scoped-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 07 · DELEGATION BOUNDARIES
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            A mandate is scoped,<br />
            not<br />
            general
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            A mandate states the sponsor, the permitted actions and resources, the constraints, the purpose and the period. Anything the mandate does not list is outside it. The example below is synthetic.
          </p>

          {/* 3 Scope Cards in 3 Columns */}
          <div className="mt-8 grid grid-cols-3 gap-2">
            {/* Card 1: Actions */}
            <div className="flex flex-col justify-between overflow-hidden rounded-[16px] border border-slate-100 bg-white p-2 pb-3 shadow-2xs">
              <div>
                <div className="relative h-[85px] w-full overflow-hidden rounded-[12px] bg-slate-100 mb-2">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra22.jpg"
                    alt="Authorized actions clipboard"
                    fill
                    sizes="(max-width: 640px) 33vw, 150px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-['Manrope'] text-[9px] font-bold tracking-wider text-[#00a4d6] uppercase block">
                  SCOPE
                </span>
                <h3 className="mt-1 font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] leading-tight">
                  Actions
                </h3>
                <p className="mt-1 font-['Manrope'] text-[9.5px] leading-[1.4] text-[#556987]">
                  Only the operations named in the mandate.
                </p>
              </div>
              <div className="mt-3">
                <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[7.5px] font-bold uppercase tracking-wider">
                  CONCEPTUAL
                </span>
              </div>
            </div>

            {/* Card 2: Resources */}
            <div className="flex flex-col justify-between overflow-hidden rounded-[16px] border border-slate-100 bg-white p-2 pb-3 shadow-2xs">
              <div>
                <div className="relative h-[85px] w-full overflow-hidden rounded-[12px] bg-slate-100 mb-2">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra23.jpg"
                    alt="Authorized resources analytics"
                    fill
                    sizes="(max-width: 640px) 33vw, 150px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-['Manrope'] text-[9px] font-bold tracking-wider text-[#00a4d6] uppercase block">
                  SCOPE
                </span>
                <h3 className="mt-1 font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] leading-tight">
                  Resources
                </h3>
                <p className="mt-1 font-['Manrope'] text-[9.5px] leading-[1.4] text-[#556987]">
                  Only the resources named in the mandate.
                </p>
              </div>
              <div className="mt-3">
                <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[7.5px] font-bold uppercase tracking-wider">
                  CONCEPTUAL
                </span>
              </div>
            </div>

            {/* Card 3: Period */}
            <div className="flex flex-col justify-between overflow-hidden rounded-[16px] border border-slate-100 bg-white p-2 pb-3 shadow-2xs">
              <div>
                <div className="relative h-[85px] w-full overflow-hidden rounded-[12px] bg-slate-100 mb-2">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra24.jpg"
                    alt="Authorized period tracking"
                    fill
                    sizes="(max-width: 640px) 33vw, 150px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="font-['Manrope'] text-[9px] font-bold tracking-wider text-[#00a4d6] uppercase block">
                  SCOPE
                </span>
                <h3 className="mt-1 font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] leading-tight">
                  Period
                </h3>
                <p className="mt-1 font-['Manrope'] text-[9.5px] leading-[1.4] text-[#556987]">
                  An explicit start and end. No open-ended grants.
                </p>
              </div>
              <div className="mt-3">
                <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[7.5px] font-bold uppercase tracking-wider">
                  CONCEPTUAL
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
