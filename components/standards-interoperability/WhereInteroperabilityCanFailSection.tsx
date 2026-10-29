"use client";

import React from "react";
import { AlertTriangle, Clock, X } from "lucide-react";

interface WhereInteroperabilityCanFailSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const failureModes = [
  {
    icon: AlertTriangle,
    title: "Profile mismatch",
    description:
      "The two sides support different profiles. Connection is refused with a clear reason.",
  },
  {
    icon: Clock,
    title: "Stale signal",
    description:
      "A trust signal is out of date. The decision is marked stale, not treated as current.",
  },
  {
    icon: X,
    title: "Unavailable source",
    description:
      "An external source cannot be reached. The outcome is unknown, not allow.",
  },
];

export default function WhereInteroperabilityCanFailSection({
  view = "all",
}: WhereInteroperabilityCanFailSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="failure-modes-desktop"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Where interoperability can fail, and what happens then
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                Each failure mode has a stated effect and a safe default. An interoperability
                problem is never presented as a successful connection, and a missing signal
                never grants access.
              </p>
            </div>

            {/* 3 Failure Mode Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px]">
              {failureModes.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col justify-between rounded-[20px] border border-slate-200/80 bg-white p-6 shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[190px]"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-4 shadow-2xs">
                        <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                      </div>

                      <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>

                      <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                        {card.description}
                      </p>
                    </div>
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
          id="failure-modes-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              11 · CONSTRAINTS AND FAILURE MODES
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Where interoperability can fail, and what happens then
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Each failure mode has a stated effect and a safe default. An
            interoperability problem is never presented as a successful
            connection, and a missing signal never grants access.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {failureModes.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-2xs"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mb-3">
                    <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {card.description}
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
