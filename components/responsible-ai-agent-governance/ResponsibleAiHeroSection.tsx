"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointerClick, Globe, ShieldCheck, Eye, Info, User } from "lucide-react";

interface ResponsibleAiHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const guidanceChecklist = [
  {
    icon: MousePointerClick,
    title: "Skip to main content",
    subtitle: "First stop on the keyboard",
  },
  {
    icon: Globe,
    title: "Global header",
    subtitle: "Approved menu, Escape closes it",
  },
  {
    icon: ShieldCheck,
    title: "Breadcrumb",
    subtitle: "Home > Authority & Trust > Responsible AI & Agent Governance",
  },
  {
    icon: Eye,
    title: "Visible focus",
    subtitle: "On every control",
  },
];

export default function ResponsibleAiHeroSection({
  view = "all",
}: ResponsibleAiHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (100% UNTOUCHED) ================= */}
      {showDesktop && (
        <section
          id="responsible-ai-hero"
          className="hidden sm:block relative w-full bg-[#0b1c33] pt-20 lg:pt-28 pb-0 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 50% 15%, #132e4d 0%, #0c2038 45%, #081729 100%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center flex flex-col items-center">
            {/* Main Heading */}
            <h1
              className="font-dm-serif font-['DM_Serif_Display'] text-[46px] sm:text-[54px] lg:text-[62px] font-normal leading-[1.12] tracking-tight text-white max-w-[900px]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Responsible AI and agent<br />
              governance
            </h1>

            {/* Subtitle */}
            <p className="mt-5 font-['Manrope'] text-[15px] sm:text-[16px] leading-[1.7] text-[#9bb3c9] max-w-[720px]">
              Zoiko ID is designed to make agent activity accountable to identified principals,
              defined mandates, human oversight, policy boundaries, revocation and reviewable
              decision evidence.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/authorization-delegated-authority"
                className="inline-flex items-center justify-center rounded-full border border-[#3b5e80] bg-[#122e4d]/80 hover:bg-[#183b63] hover:border-[#4d7ba6] px-6 py-2.5 text-[13.5px] font-semibold text-[#c8d9e6] transition shadow-xs"
              >
                Explore delegated authority
              </Link>
            </div>

            {/* Hero Image ra1.png */}
            <div className="mt-12 sm:mt-16 w-full max-w-[1040px] mx-auto">
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden rounded-t-[28px] lg:rounded-t-[34px] shadow-2xl bg-[#071322]">
                <Image
                  src="/responsible-ai-Agent-Governance/ra1.png"
                  alt="Responsible AI and Agent Governance Keynote Session"
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1040px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ACCORDING TO USER REFERENCE) ================= */}
      {showMobile && (
        <section
          id="responsible-ai-hero-mobile"
          className="sm:hidden relative w-full bg-white pt-4 pb-12 px-4"
        >
          {/* Mobile Breadcrumb */}
          <div className="flex items-center gap-1.5 font-['Manrope'] text-[12px] text-[#64748b] mb-6">
            <span>Home</span>
            <span>›</span>
            <span>Authority &amp; Trust</span>
            <span>›</span>
            <span className="font-semibold text-[#0b1b33]">Responsible AI &amp; Agent Governance</span>
          </div>

          {/* Accessibility & Guidance Checklist Box */}
          <div className="relative mb-8 rounded-[18px] border border-slate-200/80 bg-white p-4 shadow-2xs">
            <div className="flex flex-col gap-3.5 pr-2">
              {guidanceChecklist.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                      <IconComponent className="h-4 w-4 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h4>
                      <p className="font-['Manrope'] text-[11.5px] text-[#64748b]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Subtle right accent line */}
            <div className="absolute right-0 top-3 bottom-3 w-[2px] bg-slate-200/80 rounded-full" />
          </div>

          {/* Cyan Kicker */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-[2px] bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.14em] uppercase text-[#00a4d6]">
              ZOIKO ID / AUTHORITY &amp; TRUST
            </span>
          </div>

          {/* Mobile Main Heading */}
          <h1
            className="font-dm-serif font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Responsible AI<br />
            and<br />
            agent governance
          </h1>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Zoiko ID is designed to make agent activity accountable to identified principals, defined
            mandates, human oversight, policy boundaries, revocation and reviewable decision
            evidence.
          </p>

          {/* 2 Mobile Pill Buttons */}
          <div className="mt-6 flex flex-col gap-2.5">
            <div className="w-full rounded-full bg-[#e2e8f0]/70 py-3 px-5 text-center font-['Manrope'] text-[12.5px] font-medium text-[#475569]">
              Discuss agent governance (not yet available)
            </div>

            <Link
              href="/authorization-delegated-authority"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#0b1b33] bg-white px-5 py-2.5 font-['Manrope'] text-[13px] font-semibold text-[#0b1b33] shadow-2xs"
            >
              Explore delegated authority
            </Link>
          </div>

          {/* Verification Subtext */}
          <p className="mt-4 font-['Manrope'] text-[12px] leading-relaxed text-[#718096]">
            The enquiry route is not yet verified. The governance model below explains what the platform is designed to do.
          </p>

          {/* Disclaimer Callout */}
          <div className="mt-3 flex items-start gap-2 text-[#5b6b82]">
            <Info className="h-4 w-4 shrink-0 text-[#0088cc] mt-0.5" />
            <p className="font-['Manrope'] text-[11.5px] leading-relaxed">
              This page is not a claim that the platform independently guarantees model safety, factual accuracy or regulatory compliance.
            </p>
          </div>

          {/* 3 Mobile Images Layout */}
          <div className="mt-8 flex flex-col gap-3">
            {/* Top 2 Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Left Image: 3D Blue 'A' on purple matrix ra17.jpg */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] shadow-sm bg-slate-900">
                <Image
                  src="/responsible-ai-Agent-Governance/ra17.jpg"
                  alt="Responsible AI 3D matrix"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Image: Developers working on laptops ra18.jpg */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] shadow-sm bg-slate-900">
                <Image
                  src="/responsible-ai-Agent-Governance/ra18.jpg"
                  alt="Developers engineering AI systems"
                  fill
                  sizes="(max-width: 640px) 50vw, 200px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Image ra19.jpg with Floating Badge */}
            <div className="relative w-full pt-1 pb-4">
              <div className="relative h-[280px] w-[68%] overflow-hidden rounded-[22px] shadow-sm bg-slate-100">
                <Image
                  src="/responsible-ai-Agent-Governance/ra19.jpg"
                  alt="Enterprise principal accountable for agent actions"
                  fill
                  sizes="(max-width: 640px) 70vw, 300px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Badge Card Overlapping Bottom-Right */}
              <div className="absolute right-0 bottom-1 w-[78%] rounded-[16px] bg-white p-3.5 shadow-xl border border-slate-100 flex items-start gap-3 z-10">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                  <User className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[12px] font-bold text-[#0b1b33] leading-snug">
                    Governance of identity and delegated action
                  </h4>
                  <p className="mt-0.5 font-['Manrope'] text-[10.5px] text-[#64748b]">
                    Not a safety or accuracy score.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
