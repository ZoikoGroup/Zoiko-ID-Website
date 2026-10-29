"use client";

import React from "react";
import Image from "next/image";
import {
  MousePointerClick,
  Layers,
  Compass,
  Eye,
  CornerDownRight,
  Info,
  RotateCcw,
} from "lucide-react";

interface StandardsHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const navFeatures = [
  {
    icon: MousePointerClick,
    title: "Skip to main content",
    subtitle: "First stop on the keyboard",
  },
  {
    icon: Layers,
    title: "Approved header",
    subtitle: "Platform mega-menu; Escape closes it",
  },
  {
    icon: Compass,
    title: "Breadcrumb",
    subtitle: "Standards & Interoperability",
  },
  {
    icon: Eye,
    title: "Visible focus",
    subtitle: "On every control",
  },
];

export default function StandardsHeroSection({
  view = "all",
}: StandardsHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="standards-hero-desktop"
          className="hidden sm:block relative w-full bg-[#081729] pt-24 lg:pt-32 pb-16 overflow-hidden"
        >
          {/* Hero Background Image hsi1.png */}
          <Image
            src="/header-Platform-standards-interoperability/hsi1.png"
            alt="Corporate team collaborating on standards and interoperability"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />

          {/* Deep Navy/Dark Slate Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081729]/92 via-[#0c2038]/88 to-[#081729]/95" />

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center flex flex-col items-center">
            {/* Title */}
            <h1
              className="font-dm-serif font-['DM_Serif_Display'] text-[46px] sm:text-[54px] lg:text-[62px] font-normal leading-[1.12] tracking-tight text-white max-w-[920px]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Standards &amp; Interoperability
            </h1>

            {/* Subtitle */}
            <p className="mt-5 font-['Manrope'] text-[15px] sm:text-[16px] leading-[1.7] text-[#9bb3c9] max-w-[700px]">
              Explore the protocols, integration patterns and trust boundaries used to
              connect identity, authority and evidence across systems. Verify capability
              status in the matrix below.
            </p>

            {/* 4-Item Floating Card */}
            <div className="mt-14 w-full max-w-[1040px] rounded-[22px] bg-white p-5 sm:p-6 shadow-2xl border border-slate-100 text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {navFeatures.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5 p-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#dff3f9] text-[#00a4d6] shadow-2xs mt-0.5">
                      <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-relaxed text-[#556987]">
                        {item.subtitle}
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
          id="standards-hero-mobile"
          className="sm:hidden relative w-full bg-white text-left"
        >
          {/* Top Breadcrumbs Bar */}
          <div className="w-full border-b border-slate-200/80 px-5 py-3">
            <p className="font-['Manrope'] text-[11px] leading-normal text-slate-500">
              <span>Home</span>
              <span className="mx-1.5 text-slate-400">›</span>
              <span>Platform</span>
              <span className="mx-1.5 text-slate-400">›</span>
              <span>Build &amp; Connect</span>
              <span className="mx-1.5 text-slate-400">›</span>
              <span className="font-bold text-[#0b1b33]">
                Standards &amp; Interoperability
              </span>
            </p>
          </div>

          {/* Accessibility & Quick Navigation Card */}
          <div className="w-full border-b border-slate-200/80 px-5 py-6">
            <div className="flex flex-col gap-5 border-r-2 border-[#edf2f7] pr-3">
              {/* 1. Skip to main content */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e1f5fa] text-[#00a4d6]">
                  <MousePointerClick className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                    Skip to main content
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#556987]">
                    First stop on the keyboard
                  </p>
                </div>
              </div>

              {/* 2. Approved header */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e1f5fa] text-[#00a4d6]">
                  <Layers className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                    Approved header
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#556987]">
                    Platform mega-menu; Escape closes it
                  </p>
                </div>
              </div>

              {/* 3. Breadcrumb */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e1f5fa] text-[#00a4d6]">
                  <CornerDownRight className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                    Breadcrumb
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#556987]">
                    Home › Platform › Build &amp; Connect › Standards &amp; Interoperability
                  </p>
                </div>
              </div>

              {/* 4. Visible focus */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e1f5fa] text-[#00a4d6]">
                  <Eye className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] leading-snug">
                    Visible focus
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#556987]">
                    On every control
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content & CTA Buttons */}
          <div className="w-full px-5 pt-8 pb-10">
            {/* Category Tag */}
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
              <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
                PLATFORM / BUILD &amp; CONNECT
              </span>
            </div>

            {/* Title */}
            <h1
              className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[34px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{
                fontFamily:
                  'var(--font-dm-serif-display-family), "DM Serif Display", serif',
              }}
            >
              Standards &amp;<br />
              Interoperability
            </h1>

            {/* Subtitle */}
            <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.7] text-[#5b6b82]">
              Explore the protocols, integration patterns and trust boundaries
              used to connect identity, authority and evidence across systems.
              Verify capability status in the matrix below.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                className="w-full rounded-full bg-[#e6edf5] py-3.5 px-5 font-['Manrope'] text-[12.5px] font-medium text-[#4a5568] transition hover:bg-[#dbe4f0] text-center"
              >
                Explore integration guides (not yet available)
              </button>

              <button
                type="button"
                className="w-full rounded-full border border-[#0b1b33] bg-white py-3 px-5 font-['Manrope'] text-[13px] font-bold text-[#0b1b33] transition hover:bg-slate-50 text-center shadow-2xs"
              >
                View architecture
              </button>
            </div>

            {/* Notice text */}
            <p className="mt-4 font-['Manrope'] text-[11px] leading-[1.65] text-[#718096]">
              The integration guides are not yet published. The matrix and
              architecture explain what is designed and what is verified.
            </p>

            {/* Info callout */}
            <div className="mt-3 flex items-start gap-2">
              <Info className="h-4 w-4 shrink-0 text-[#00a4d6] mt-0.5" />
              <p className="font-['Manrope'] text-[11px] leading-relaxed text-[#5b6b82]">
                Naming a standard is not a claim that every profile, version or
                feature is implemented.
              </p>
            </div>

            {/* Visual Media Collage */}
            <div className="mt-9 flex flex-col gap-4">
              {/* Row 1: Side by side images */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Left: hsi18.jpg */}
                <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-[20px] bg-slate-900 shadow-sm border border-slate-200/60">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi18.jpg"
                    alt="Identity estate server infrastructure"
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Right: hsi19.jpg */}
                <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-[20px] bg-slate-900 shadow-sm border border-slate-200/60">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi19.jpg"
                    alt="Global interoperability night view"
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Row 2: Bottom image hsi20.jpg with overlapping floating badge */}
              <div className="relative w-full pt-1 pb-6">
                <div className="relative aspect-[4/3] w-[78%] overflow-hidden rounded-[20px] bg-slate-100 shadow-sm border border-slate-200/60">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi20.jpg"
                    alt="Integration dashboard estate"
                    fill
                    sizes="(max-width: 640px) 80vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-0 right-0 max-w-[245px] rounded-[16px] bg-white p-3.5 shadow-xl border border-slate-100 flex items-start gap-2.5 z-10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#e1f5fa] text-[#00a4d6] mt-0.5">
                    <RotateCcw className="h-4 w-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-['Manrope'] text-[12px] font-bold text-[#0b1b33] leading-snug">
                      Overlay, not replacement
                    </h4>
                    <p className="mt-0.5 font-['Manrope'] text-[10.5px] leading-snug text-[#5b6b82]">
                      Designed to complement your existing estate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
