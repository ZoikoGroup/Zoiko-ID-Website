"use client";

import React from "react";
import Image from "next/image";
import { Lock, Users, EyeOff } from "lucide-react";

interface BoundVisibilitySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const visibilityRules = [
  {
    icon: Lock,
    title: "Least privilege",
    description: "Each viewer sees only what their role needs.",
  },
  {
    icon: Users,
    title: "Separation of duties",
    description: "The person who grants is not the only person who reviews.",
  },
  {
    icon: EyeOff,
    title: "Redaction",
    description: "Sensitive values are removed from every public example.",
  },
];

export default function BoundVisibilitySection({
  view = "all",
}: BoundVisibilitySectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[490px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada16.png"
                    alt="Woman sitting on park bench opening laptop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Heading, Subtitle and 3 Rules */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Bound visibility as<br />
                  carefully as permission
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Redaction, least privilege, separation of duties and independent review limit what
                  can be seen. Grant details are never exposed without authentication, and error
                  messages do not reveal sensitive policy logic.
                </p>

                {/* 3 Visibility Rules */}
                <div className="mt-8 flex flex-col gap-4 max-w-[480px]">
                  {visibilityRules.map((rule) => {
                    const Icon = rule.icon;
                    return (
                      <div key={rule.title} className="flex items-start gap-3.5">
                        <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4]">
                          <Icon className="size-[18px] stroke-[1.8]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                            {rule.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                            {rule.description}
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
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Top Code Image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-[22px] bg-slate-900 shadow-sm mb-6">
            <Image
              src="/authorization-delegated-authority/ada40.jpg"
              alt="Code syntax highlighting visibility controls"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              15 · PRIVACY AND SECURITY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Bound visibility as carefully as permission
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Redaction, least privilege, separation of duties and independent review limit what can be seen. Grant details are never exposed without authentication, and error messages do not reveal sensitive policy logic.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {visibilityRules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div key={rule.title} className="flex items-start gap-3.5">
                  <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f7fa] text-[#00bcd4] mt-0.5">
                    <Icon className="size-[18px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                      {rule.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
                      {rule.description}
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
