"use client";

import React from "react";
import Image from "next/image";

interface AiIncidentRoutingSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const incidentCards = [
  {
    image: "/responsible-ai-Agent-Governance/ra13.png",
    alt: "Individual misusing stolen digital credentials",
    title: "Credential misuse",
    description: "Report through the security route.",
    badge: "SECURITY ROUTE PENDING",
  },
  {
    image: "/responsible-ai-Agent-Governance/ra14.png",
    alt: "Corporate team addressing escalation and sponsor review",
    title: "Overreach",
    description: "Raise with the sponsor and reviewer.",
    badge: "ESCALATION PENDING",
  },
  {
    image: "/responsible-ai-Agent-Governance/ra15.png",
    alt: "Zoiko trust center specialists ready to assist",
    title: "Assurance questions",
    description: "Ask through the Trust Center.",
    badge: "TRUST CENTER PENDING",
  },
];

export default function AiIncidentRoutingSection({
  view = "all",
}: AiIncidentRoutingSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="ai-incident-routing"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Where to take an AI-related incident
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                Concerns about misuse go through security routing. Questions about risk assessment go
                to a qualified reviewer. Neither goes through a sales form.
              </p>
            </div>

            {/* 3 Incident Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px]">
              {incidentCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col justify-between overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[320px]"
                >
                  <div>
                    {/* Card Top Image */}
                    <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <span className="inline-flex items-center rounded-full bg-[#fef3c7] border border-[#fde68a] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#92400e]">
                      {card.badge}
                    </span>
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
          id="ai-incident-routing-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 14 · RISK AND INCIDENT HANDOFFS
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Where to take an AI-<br />
            related incident
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Concerns about misuse go through security routing. Questions about risk assessment go to a qualified reviewer. Neither goes through a sales form.
          </p>

          {/* 3 Incident Cards */}
          <div className="mt-8 flex flex-col gap-4">
            {/* Card 1: Credential misuse */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[130px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/responsible-ai-Agent-Governance/ra34.jpg"
                  alt="Team investigating credential misuse incident"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                  Credential misuse
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Report through the security route.
                </p>
                <div className="mt-3.5">
                  <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                    SECURITY ROUTE PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Overreach */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra35.jpg"
                  alt="Reviewing overreach telemetry on laptop"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                  Overreach
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Raise with the sponsor and reviewer.
                </p>
                <div className="mt-3.5">
                  <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                    ESCALATION PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Assurance questions */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra36.jpg"
                  alt="Checklist and documentation for assurance questions"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 pb-5">
                <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                  Assurance questions
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Ask through the Trust Center.
                </p>
                <div className="mt-3.5">
                  <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                    TRUST CENTER PENDING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
