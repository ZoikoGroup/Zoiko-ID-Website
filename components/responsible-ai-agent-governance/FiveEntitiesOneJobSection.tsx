"use client";

import React from "react";
import Image from "next/image";
import { User, Building2, ShieldCheck, Bot, UserCog } from "lucide-react";

interface FiveEntitiesOneJobSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const entities = [
  {
    icon: User,
    title: "Human principal",
    description: "Who the agent acts for.",
  },
  {
    icon: Building2,
    title: "Organization",
    description: "The entity that holds the relationship.",
  },
  {
    icon: ShieldCheck,
    title: "Sponsor",
    description: "Accountable for the mandate.",
  },
  {
    icon: Bot,
    title: "Agent",
    description: "Acts within its mandate.",
  },
  {
    icon: UserCog,
    title: "Reviewer",
    description: "Handles escalations and disputes.",
  },
];

export default function FiveEntitiesOneJobSection({
  view = "all",
}: FiveEntitiesOneJobSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="five-entities"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image ra3.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[460px] sm:h-[500px] lg:h-[540px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-900">
                  <Image
                    src="/responsible-ai-Agent-Governance/ra3.png"
                    alt="Corporate leadership reviewing governance entities"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, and 5 Entities List */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Five entities, each<br />
                  with one job
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  The model separates the entities a reviewer needs to see: the human principal, the
                  organization, the sponsor, the agent, and the reviewer who handles escalations. Each
                  entity links to its definition and its machine identity guide.
                </p>

                {/* 5 Entities List */}
                <div className="mt-8 flex flex-col gap-4">
                  {entities.map((item) => {
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
                          <p className="mt-0.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
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
          id="five-entities-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Top Image: ra21.jpg Three people collaborating with laptops */}
          <div className="relative w-full aspect-[4/3.2] max-h-[320px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-slate-900 mb-7">
            <Image
              src="/responsible-ai-Agent-Governance/ra21.jpg"
              alt="Team members reviewing governance and accountability"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 06 · PRINCIPALS AND SPONSORS
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Five entities, each with<br />
            one job
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            The model separates the entities a reviewer needs to see: the human principal, the organization, the sponsor, the agent, and the reviewer who handles escalations. Each entity links to its definition and its machine identity guide.
          </p>

          {/* 5 Entities List */}
          <div className="mt-7 flex flex-col gap-4">
            {entities.map((item) => {
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
