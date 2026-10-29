"use client";

import React from "react";
import Link from "next/link";
import { User, Key, Cpu, Bot, FileCheck, Eye } from "lucide-react";

interface StartFromProblemSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const problemCards = [
  {
    icon: User,
    title: "I need apps to use identity provider",
    mobileTitle: "I need my apps to use our identity provider",
    subtitle: "Application authentication and enterprise federation.",
    href: "#pattern-01",
  },
  {
    icon: Key,
    title: "I need a partner to act on our behalf",
    mobileTitle: "I need a partner to act on our behalf",
    subtitle: "Delegated third-party access, with an explicit purpose and expiry.",
    href: "#pattern-02",
  },
  {
    icon: Cpu,
    title: "I need a workload to call an API",
    mobileTitle: "I need a service or workload to call an API",
    subtitle: "Machine and workload identity with short-lived credentials.",
    href: "#pattern-03",
  },
  {
    icon: Bot,
    title: "I need an AI agent to use tools",
    mobileTitle: "I need an AI agent to use tools",
    subtitle: "AI-agent identity with a sponsor and a bounded mandate.",
    href: "#pattern-04",
  },
  {
    icon: FileCheck,
    title: "I need credentials I can verify",
    mobileTitle: "I need credentials I can verify",
    subtitle: "Verifiable credentials, with issuer, holder and verifier.",
    href: "#pattern-05",
  },
  {
    icon: Eye,
    title: "I need to explain decisions later",
    mobileTitle: "I need to explain decisions later",
    subtitle: "Continuous access and evidence and audit.",
    href: "#pattern-06",
  },
];

export default function StartFromProblemSection({
  view = "all",
}: StartFromProblemSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#0b1c34] py-20 lg:py-24 border-t border-slate-800/40">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Start from the problem you are solving
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#94a3b8] max-w-[700px]">
                Choose the pattern that matches your actor and your problem. Each card links to its full
                pattern below. Patterns marked illustrative describe a reference design, not a shipped
                feature.
              </p>
            </div>

            {/* 6 Cards Grid (3x2) */}
            <div className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problemCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group rounded-[20px] bg-white p-5 lg:p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between min-h-[145px]"
                  >
                    <div>
                      <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4] transition-colors group-hover:bg-[#b2ebf2]">
                        <Icon className="size-[19px] stroke-[1.8]" />
                      </div>
                      <h3 className="mt-3.5 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33] group-hover:text-[#2563eb] transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                        {card.subtitle}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ONLY SHOWN ON MOBILE) ================= */}
      {showMobile && (
        <section
          id="problem-chooser-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-10 border-t border-slate-200/80"
        >
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#0088cc]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#0088cc] uppercase">
              02 · Pattern Chooser
            </span>
          </div>

          <h2
            className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Start from the problem<br />
            you are solving
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Choose the pattern that matches your actor and your problem. Each card links to its full pattern below. Patterns marked illustrative describe a reference design, not a shipped feature.
          </p>

          {/* 6 Cards Vertical List */}
          <div className="mt-6 flex flex-col gap-3.5">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.mobileTitle}
                  className="rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-2xs"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc]">
                    <Icon className="h-4 w-4 stroke-[2.2]" />
                  </div>

                  <h3 className="mt-3 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                    {card.mobileTitle}
                  </h3>

                  <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {card.subtitle}
                  </p>

                  <div className="mt-3.5">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#92400e] uppercase">
                      Pattern Link Pending
                    </span>
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
