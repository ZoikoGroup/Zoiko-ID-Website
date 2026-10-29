"use client";

import React from "react";
import Image from "next/image";
import { Hand, Layers, ShieldCheck, Eye, Info, KeyRound } from "lucide-react";

interface DelegatedAuthorityHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const floatingHighlights = [
  {
    icon: Hand,
    title: "Skip to main content",
    description: "First stop on the keyboard",
  },
  {
    icon: Layers,
    title: "Global header",
    description: "Approved menu, Escape closes it",
  },
  {
    icon: ShieldCheck,
    title: "Breadcrumb",
    description: "Authorization & Delegated Authority",
  },
  {
    icon: Eye,
    title: "Visible focus",
    description: "On every control",
  },
];

const mobileHighlights = [
  {
    icon: Hand,
    title: "Skip to main content",
    description: "First stop on the keyboard",
  },
  {
    icon: Layers,
    title: "Global header",
    description: "Approved menu, Escape closes it",
  },
  {
    icon: ShieldCheck,
    title: "Breadcrumb",
    description: "Home > Authority & Trust > Authorization & Delegated Authority",
  },
  {
    icon: Eye,
    title: "Visible focus",
    description: "On every control",
  },
];

export default function DelegatedAuthorityHeroSection({
  view = "all",
}: DelegatedAuthorityHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full overflow-hidden bg-[#071322]">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/authorization-delegated-authority/ada1.png"
              alt="Legal and authority discussion over tablet with gavel"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Clean Navy/Slate Tint Overlay to ensure image visibility & text contrast */}
            <div className="absolute inset-0 bg-[#0b192c]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/75 via-[#071322]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071322]/60" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-20">
            {/* Main Hero Header */}
            <div className="max-w-[940px]">
              <h1
                className="font-dm-serif font-['DM_Serif_Display'] text-[44px] sm:text-[52px] lg:text-[60px] font-normal leading-[1.08] tracking-[-0.015em] text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Authority should be explicit,<br />
                bounded and reviewable.
              </h1>

              <p className="mt-5 font-['Manrope'] text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#94a3b8] max-w-[560px]">
                Connect identity to the authority to act, evaluate permissions in context, and
                preserve evidence behind decisions—without confusing authentication with
                permission.
              </p>
            </div>

            {/* Bottom Floating White Card Bar */}
            <div className="mt-14 lg:mt-16 rounded-[22px] border border-white/20 bg-white p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {floatingHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`flex items-center gap-3.5 ${
                        idx === 0 ? "md:pr-5" : idx === 3 ? "md:pl-5" : "md:px-5"
                      } py-3 md:py-0`}
                    >
                      <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[#e0f7fa] text-[#00bcd4]">
                        <Icon className="size-[20px] stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                          {item.title}
                        </h3>
                        <p className="font-['Manrope'] text-[12px] text-[#64748b] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 pt-3 pb-12">
          {/* Top Breadcrumb */}
          <div className="py-2 text-[11px] font-['Manrope'] text-[#64748b]">
            <span>Home</span>
            <span className="mx-1 text-[#94a3b8]">&gt;</span>
            <span>Authority &amp; Trust</span>
            <span className="mx-1 text-[#94a3b8]">&gt;</span>
            <span className="font-semibold text-[#0b1b33]">Authorization &amp; Delegated Authority</span>
          </div>

          {/* Top 4-Item Information Card */}
          <div className="mt-2 rounded-[20px] border border-slate-100 bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col divide-y divide-slate-100/90">
              {mobileHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5 py-3 first:pt-0 last:pb-0">
                    <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4] mt-0.5">
                      <Icon className="size-[18px] stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>
                      <p className="font-['Manrope'] text-[11px] text-[#64748b] mt-0.5 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section Eyebrow */}
          <div className="mt-8 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              ZOIKO ID / AUTHORITY &amp; TRUST
            </span>
          </div>

          {/* Main Hero Header */}
          <div className="mt-3.5">
            <h1
              className="font-dm-serif font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.12] text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Authority should<br />
              be<br />
              explicit, bounded<br />
              and reviewable.
            </h1>

            <p className="mt-4 font-['Manrope'] text-[13.5px] font-normal leading-[1.65] text-[#64748b]">
              Connect identity to the authority to act, evaluate permissions in context, and
              preserve evidence behind decisions—without confusing authentication with
              permission.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              className="w-full rounded-full bg-[#e2e8f0] py-3 px-5 text-center font-['Manrope'] text-[13px] font-semibold text-[#334155] transition-colors hover:bg-slate-300"
            >
              Talk to Sales (not yet available)
            </button>
            <button
              type="button"
              className="w-full rounded-full border border-[#0b1b33] bg-white py-3 px-5 text-center font-['Manrope'] text-[13px] font-semibold text-[#0b1b33] transition-colors hover:bg-slate-50"
            >
              Explore the authorization model
            </button>
          </div>

          {/* Sales Availability Note */}
          <p className="mt-4 font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
            Enterprise sales is not yet connected to this page. Until then, the authorization model below explains each concept.
          </p>

          {/* Illustrative Model Note */}
          <div className="mt-3.5 flex items-start gap-2">
            <Info className="size-4 shrink-0 text-[#00bcd4] mt-0.5" />
            <p className="font-['Manrope'] text-[11px] leading-relaxed text-[#64748b]">
              Illustrative model. Confirm available enforcement methods and integrations for your deployment.
            </p>
          </div>

          {/* 3 Images Showcase Grid */}
          <div className="mt-8">
            {/* Top 2 Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-[160px] w-full rounded-[18px] overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/authorization-delegated-authority/ada18.jpg"
                  alt="Team collaborating on authorization"
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[160px] w-full rounded-[18px] overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/authorization-delegated-authority/ada19.jpg"
                  alt="Documentation clipboard"
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Image with Overlapping Floating Card */}
            <div className="relative mt-3 pb-8">
              <div className="relative w-[50%] h-[170px] rounded-[18px] overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/authorization-delegated-authority/ada20.jpg"
                  alt="Security authority code audit"
                  fill
                  sizes="(max-width: 640px) 55vw, 300px"
                  className="object-cover"
                />
              </div>

              {/* Floating White Card Overlapping Bottom Image */}
              <div className="absolute right-0 bottom-0 w-[78%] rounded-[18px] border border-slate-100 bg-white p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-3">
                  <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4]">
                    <KeyRound className="size-[18px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="font-['Manrope'] text-[12px] font-bold text-[#0b1b33] leading-snug">
                      Authority is granted, not assumed
                    </h4>
                    <p className="font-['Manrope'] text-[10px] text-[#64748b] leading-tight mt-0.5">
                      Each grant states its purpose and its end.
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
