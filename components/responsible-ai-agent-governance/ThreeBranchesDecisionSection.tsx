"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Clock, X } from "lucide-react";

interface ThreeBranchesDecisionSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const branches = [
  {
    icon: CheckCircle2,
    iconColor: "text-[#16a34a]",
    iconBg: "bg-[#dcfce7]",
    borderColor: "border-[#86efac]/80",
    bgColor: "bg-[#f0faf5]",
    title: "Permitted",
    description: "Within the mandate and current policy.",
    badgeText: "ALLOWED",
    badgeBorder: "border-[#86efac]",
    badgeTextColor: "text-[#15803d]",
  },
  {
    icon: Clock,
    iconColor: "text-[#d97706]",
    iconBg: "bg-[#fef3c7]",
    borderColor: "border-[#fde68a]/90",
    bgColor: "bg-[#fefce8]",
    title: "Held for review",
    description: "Needs a step-up or a human reviewer before it can proceed.",
    badgeText: "STEP UP",
    badgeBorder: "border-[#fde68a]",
    badgeTextColor: "text-[#b45309]",
  },
  {
    icon: X,
    iconColor: "text-[#e11d48]",
    iconBg: "bg-[#ffe4e6]",
    borderColor: "border-[#fecdd3]/90",
    bgColor: "bg-[#fff1f2]",
    title: "Denied",
    description: "Outside the mandate, with a safe reason.",
    badgeText: "DENIED",
    badgeBorder: "border-[#fecdd3]",
    badgeTextColor: "text-[#be123c]",
  },
];

const policyCards = [
  {
    image: "/responsible-ai-Agent-Governance/ra8.png",
    alt: "Auditors reviewing least privilege policy boundaries",
    title: "Policy boundaries",
    description: "Least privilege is the default. Policy examples are filtered by the situation they cover.",
    badge: "POLICY CATALOGUE PENDING",
  },
  {
    image: "/responsible-ai-Agent-Governance/ra9.png",
    alt: "Reviewer checking active policy versions on laptop",
    title: "Policy versions",
    description: "Each decision names the policy version that applied, so reviewers see which rules were in force.",
    badge: "VERSIONING PENDING",
  },
];

export default function ThreeBranchesDecisionSection({
  view = "all",
}: ThreeBranchesDecisionSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="three-branches"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Three branches, and none defaults to allow
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                A decision ends in one of three branches. Unknown, stale and unavailable are shown as
                themselves. A failure to decide is never recorded as permission.
              </p>
            </div>

            {/* 3 Decision Branch Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px]">
              {branches.map((b) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={b.title}
                    className={`flex flex-col justify-between rounded-[20px] border ${b.borderColor} ${b.bgColor} p-6 shadow-2xs transition hover:shadow-xs min-h-[220px]`}
                  >
                    <div>
                      <div className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${b.iconBg} ${b.iconColor}`}>
                        <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                      </div>

                      <h3 className="mt-4 font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                        {b.title}
                      </h3>

                      <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                        {b.description}
                      </p>
                    </div>

                    <div className="mt-5">
                      <span className={`inline-flex items-center rounded-[6px] border ${b.badgeBorder} bg-white px-2.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase ${b.badgeTextColor} shadow-2xs`}>
                        {b.badgeText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 2 Horizontal Policy Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px]">
              {policyCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col sm:flex-row overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[190px]"
                >
                  {/* Left Half: Image */}
                  <div className="relative w-full sm:w-[45%] h-[180px] sm:h-auto overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Right Half: Body */}
                  <div className="w-full sm:w-[55%] p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-[#fef3c7] border border-[#fde68a] px-3.5 py-1.5 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-[#92400e]">
                        {card.badge}
                      </span>
                    </div>
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
          id="three-branches-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 09 · DECISION MAP
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Three branches, and<br />
            none<br />
            defaults to allow
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            A decision ends in one of three branches. Unknown, stale and unavailable are shown as themselves. A failure to decide is never recorded as permission.
          </p>

          {/* 3 Decision Cards */}
          <div className="mt-7 flex flex-col gap-3.5">
            {/* Permitted Card */}
            <div className="rounded-[18px] border border-[#86efac] bg-[#f0fdf4] p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dcfce7] text-[#16a34a]">
                <CheckCircle2 className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Permitted
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                Within the mandate and current policy.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#86efac]/80 bg-white/70 py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#15803d] tracking-wider uppercase text-left">
                  ALLOWED
                </div>
              </div>
            </div>

            {/* Held for review Card */}
            <div className="rounded-[18px] border border-[#fde68a] bg-[#fffbeb] p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#fef3c7] text-[#d97706]">
                <Clock className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Held for review
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                Needs a step-up or a human reviewer before it can proceed.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#fde68a]/80 bg-white/70 py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#b45309] tracking-wider uppercase text-left">
                  STEP-UP
                </div>
              </div>
            </div>

            {/* Denied Card */}
            <div className="rounded-[18px] border border-[#fecaca] bg-[#fef2f2] p-4.5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#ffe4e6] text-[#e11d48]">
                <X className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="mt-3 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Denied
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#556987]">
                Outside the mandate, with a safe reason.
              </p>
              <div className="mt-3.5">
                <div className="w-full rounded-full border border-[#fecaca]/80 bg-white/70 py-1.5 px-3 font-['Manrope'] text-[9.5px] font-bold text-[#dc2626] tracking-wider uppercase text-left">
                  DENIED
                </div>
              </div>
            </div>
          </div>

          {/* Illustrative Branches Pill */}
          <div className="mt-6 mb-8 flex justify-start">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f3e8ff] text-[#9333ea] font-['Manrope'] text-[10px] font-bold tracking-wider uppercase">
              ILLUSTRATIVE BRANCHES
            </span>
          </div>

          {/* 2 Policy Cards */}
          <div className="flex flex-col gap-5">
            {/* Policy boundaries */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra26.jpg"
                  alt="Laptop displaying policy boundary code"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                  Policy boundaries
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Least privilege is the default. Policy examples are filtered by the situation they cover.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                    POLICY CATALOGUE PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Policy versions */}
            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra27.jpg"
                  alt="Hands holding phone and operating laptop with active policy version"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                  Policy versions
                </h3>
                <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#556987]">
                  Each decision names the policy version that applied, so reviewers see which rules were in force.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                    VERSIONING PENDING
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
