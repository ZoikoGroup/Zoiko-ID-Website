"use client";

import React from "react";
import { AlertTriangle, X, Lock, EyeOff } from "lucide-react";

interface AgentStandingPermissionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const riskCards = [
  {
    icon: AlertTriangle,
    title: "Standing permission",
    description: "An agent inherits access it was never specifically granted.",
  },
  {
    icon: X,
    title: "Overreach",
    description: "An action goes beyond the purpose of its mandate.",
  },
  {
    icon: Lock,
    title: "Credential misuse",
    description: "A credential is used outside its intended context.",
  },
  {
    icon: EyeOff,
    title: "Unexplained action",
    description: "An action cannot be traced back to an approval.",
  },
];

export default function AgentStandingPermissionsSection({
  view = "all",
}: AgentStandingPermissionsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="standing-permissions"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Left-Aligned Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Agents should not inherit a human&apos;s<br className="hidden sm:inline" /> standing permissions
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                Giving an agent a human&apos;s role creates unlimited standing access. The model below
                keeps each risk named, so each one can be assessed and bounded separately.
              </p>
            </div>

            {/* 2x2 Risk Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px]">
              {riskCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-4 rounded-[18px] border border-slate-200/80 bg-white p-6 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                      <IconComponent className="h-4 w-4 stroke-[2.2]" />
                    </div>

                    <div>
                      <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
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
          id="standing-permissions-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 05 · THE GOVERNANCE PROBLEM
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Agents should not<br />
            inherit<br />
            a human&apos;s standing<br />
            permissions
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Giving an agent a human&apos;s role creates unlimited standing access. The model below keeps each risk named, so each one can be assessed and bounded separately.
          </p>

          {/* 4 Risk Cards */}
          <div className="mt-7 flex flex-col gap-3.5">
            {riskCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-3.5 rounded-[18px] border border-slate-100 bg-white p-4.5 shadow-2xs"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#dff3f9] text-[#00a4d6] mt-0.5 shadow-2xs">
                    <IconComponent className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expandable Examples Pill */}
          <div className="mt-7 flex justify-start">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase">
              EXPANDABLE EXAMPLES
            </span>
          </div>
        </section>
      )}
    </>
  );
}
