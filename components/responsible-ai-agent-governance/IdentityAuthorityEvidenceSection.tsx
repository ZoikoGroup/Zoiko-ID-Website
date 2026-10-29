"use client";

import React from "react";
import Image from "next/image";
import { User, Bot, KeyRound } from "lucide-react";

interface IdentityAuthorityEvidenceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const definitions = [
  {
    icon: User,
    title: "Principal",
    description: "The party an agent acts for, such as a person or an organization.",
  },
  {
    icon: Bot,
    title: "Agent",
    description: "An AI system that takes action toward a goal.",
  },
  {
    icon: KeyRound,
    title: "Mandate",
    description: "The bounded permission that links the agent to its principal.",
  },
];

export default function IdentityAuthorityEvidenceSection({
  view = "all",
}: IdentityAuthorityEvidenceSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="identity-not-authority"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: ra2.png Executive with Tablet */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[440px] sm:h-[480px] lg:h-[520px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-900">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra2.png"
                    alt="Executive reviewing identity and authority mandates"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, and 3 Concepts */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Identity is not authority,<br />
                  and authority is not evidence
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Three separate things are needed before an agent acts: an identity that says who it is,
                  an authority that says what it may do, and evidence that explains what it did. AI
                  output on its own is never proof of legitimate authority.
                </p>

                {/* 3 Definitions List */}
                <div className="mt-8 flex flex-col gap-5">
                  {definitions.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5 shadow-2xs">
                          <IconComponent className="h-4 w-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="identity-not-authority-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Top Image: ra20.jpg Smiling man */}
          <div className="relative w-full aspect-[4/3.2] max-h-[320px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-slate-900 mb-7">
            <Image
              src="/responsible-ai-Agent-Governance/ra20.jpg"
              alt="Professional executive smiling"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-top"
            />
          </div>

          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 03 · DEFINITIONS
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Identity is not authority,<br />
            and authority is not<br />
            evidence
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Three separate things are needed before an agent acts: an identity that says who it is, an authority that says what it may do, and evidence that explains what it did. AI output on its own is never proof of legitimate authority.
          </p>

          {/* 3 Definitions */}
          <div className="mt-7 flex flex-col gap-4">
            {definitions.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#dff3f9] text-[#00a4d6] mt-0.5 shadow-2xs">
                    <IconComponent className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
