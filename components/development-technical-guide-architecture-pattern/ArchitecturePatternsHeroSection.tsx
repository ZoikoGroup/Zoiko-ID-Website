"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Hand,
  CornerDownRight,
  Eye,
  Info,
  ArrowRight,
  Code2,
} from "lucide-react";

interface ArchitecturePatternsHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const mobileA11yItems = [
  {
    icon: Hand,
    title: "Skip to main content",
    subtitle: "First stop on the keyboard",
  },
  {
    icon: Layers,
    title: "Approved header",
    subtitle: "Developers menu: Escape closes it",
  },
  {
    icon: CornerDownRight,
    title: "Breadcrumb",
    subtitle: "Home › Developers › Development › Technical Guides › Architecture Patterns",
  },
  {
    icon: Eye,
    title: "Visible focus",
    subtitle: "On every control",
  },
];

export default function ArchitecturePatternsHeroSection({
  view = "all",
}: ArchitecturePatternsHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full overflow-hidden bg-gradient-to-br from-[#06152d] via-[#091b38] to-[#040e1e] py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Heading, Subtitle & Action Buttons */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h1
                  className="font-dm-serif font-['DM_Serif_Display'] text-[46px] sm:text-[54px] lg:text-[62px] font-normal leading-[1.08] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Architecture<br />
                  Patterns
                </h1>

                <p className="mt-6 font-['Manrope'] text-[14.5px] sm:text-[15.5px] font-normal leading-[1.65] text-[#94a3b8] max-w-[490px]">
                  Explore architectural patterns for connecting identities, authority, policy
                  decisions and audit evidence across applications, APIs, machines and AI agents.
                  Patterns are reference guidance; deployment prerequisites and supported
                  capabilities must be validated against current documentation.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="#patterns"
                    className="rounded-[10px] bg-[#2563eb] px-6 py-3 font-['Manrope'] text-[14px] font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition"
                  >
                    Explore patterns
                  </Link>
                  <button
                    type="button"
                    className="rounded-[10px] border border-[#334155] bg-transparent px-6 py-3 font-['Manrope'] text-[14px] font-semibold text-white hover:bg-white/5 transition"
                  >
                    View API Reference (not yet available)
                  </button>
                </div>
              </div>

              {/* Right Column: 3 Images Showcase with Floating Badge */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[560px]">
                  {/* Top Image: People coding at table */}
                  <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden rounded-[22px] shadow-lg">
                    <Image
                      src="/develeopment-techinal-guide-Architecture- Pattern/aph1.png"
                      alt="Engineers collaborating on laptops"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Bottom Row: 2 Images */}
                  <div className="mt-3.5 grid grid-cols-2 gap-3.5">
                    {/* Bottom Left Image */}
                    <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden rounded-[22px] shadow-lg">
                      <Image
                        src="/develeopment-techinal-guide-Architecture- Pattern/aph2.png"
                        alt="Business executives reviewing documents"
                        fill
                        sizes="(max-width: 1024px) 50vw, 280px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden rounded-[22px] shadow-lg">
                      <Image
                        src="/develeopment-techinal-guide-Architecture- Pattern/aph3.png"
                        alt="Typing on laptop over architecture blueprints"
                        fill
                        sizes="(max-width: 1024px) 50vw, 280px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Floating White Card Overlapping Bottom Row */}
                  <div className="absolute left-4 bottom-[-14px] sm:left-6 sm:bottom-[-16px] z-20 rounded-[18px] border border-slate-100 bg-white p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.22)] flex items-center gap-3.5">
                    <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e0f7fa] text-[#00bcd4]">
                      <Layers className="size-[20px] stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                        Work themes, not vacancies
                      </h4>
                      <p className="font-['Manrope'] text-[11px] text-[#64748b] mt-0.5">
                        Identity, authority and evidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ONLY SHOWN ON MOBILE) ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 pt-6 pb-12">
          {/* Top Breadcrumb Navigation */}
          <div className="pb-4 font-['Manrope'] text-[11px] text-[#64748b]">
            <span>Home</span>
            <span className="mx-1 text-slate-400">›</span>
            <span>Developers</span>
            <span className="mx-1 text-slate-400">›</span>
            <span>Development</span>
            <span className="mx-1 text-slate-400">›</span>
            <span>Technical Guides</span>
            <br />
            <span className="font-semibold text-[#0b1b33]">Architecture Patterns</span>
          </div>

          <div className="h-px w-full bg-slate-200/80 mb-6" />

          {/* Accessibility & Header Guidance Cards List */}
          <div className="flex flex-col gap-4 pb-6 border-b border-slate-200/80">
            {mobileA11yItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5">
                    <IconComp className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="font-['Manrope'] text-[11px] text-[#64748b] mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Hero Header */}
          <div className="pt-8">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0088cc]" />
              <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#0088cc] uppercase">
                Development / Technical Guides
              </span>
            </div>

            <h1
              className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[34px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Architecture<br />
              Patterns
            </h1>

            <p className="mt-4 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
              Explore architectural patterns for connecting identities, authority, policy decisions and audit evidence across applications, APIs, machines and AI agents. Patterns are reference guidance; deployment prerequisites and supported capabilities must be validated against current documentation.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#patterns"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#0b1c34] py-3.5 px-6 font-['Manrope'] text-[13px] font-semibold text-white shadow-sm"
              >
                <span>Explore patterns</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                className="w-full rounded-full bg-[#e2e8f0] py-3.5 px-6 font-['Manrope'] text-[13px] font-semibold text-[#475569] text-center"
              >
                View API Reference (not yet available)
              </button>
            </div>

            {/* Implementation Guidance Notice */}
            <div className="mt-4 flex items-start gap-2 text-[#5b6b82]">
              <Info className="h-4 w-4 shrink-0 text-[#0088cc] mt-0.5" />
              <p className="font-['Manrope'] text-[11.5px] leading-relaxed">
                Illustrative implementation guidance; confirm supported integration and product maturity before relying on it in production.
              </p>
            </div>
          </div>

          {/* 3 Showcase Images */}
          <div className="mt-8 flex flex-col gap-3">
            {/* Top Row: 2 images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-[150px] w-full overflow-hidden rounded-[18px] shadow-sm bg-slate-100">
                <Image
                  src="/develeopment-techinal-guide-Architecture- Pattern/aph15.jpg"
                  alt="Analytics dashboard on laptop"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative h-[150px] w-full overflow-hidden rounded-[18px] shadow-sm bg-slate-100">
                <Image
                  src="/develeopment-techinal-guide-Architecture- Pattern/aph16.jpg"
                  alt="Code editor on laptop screen"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Image: Earth from space */}
            <div className="relative h-[210px] w-full overflow-hidden rounded-[22px] shadow-md bg-slate-900">
              <Image
                src="/develeopment-techinal-guide-Architecture- Pattern/aph17.jpg"
                alt="Global architecture infrastructure"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Floating White Card on Bottom Right */}
              <div className="absolute right-3 bottom-3 z-10 max-w-[250px] rounded-[16px] bg-white p-3 shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc]">
                  <Code2 className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] text-[11.5px] font-bold text-[#0b1b33] leading-snug">
                    Reference patterns, not a deployment
                  </h4>
                  <p className="font-['Manrope'] text-[10px] text-[#64748b] mt-0.5 leading-tight">
                    Confirm prerequisites first.
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
