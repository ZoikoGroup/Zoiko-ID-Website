"use client";

import React from "react";
import { Eye, SlidersHorizontal, Check, Clock } from "lucide-react";

interface CookieSettingsChangeMindSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const steps = [
  {
    icon: Eye,
    title: "Review",
    subtitle: "Open from the footer.",
  },
  {
    icon: SlidersHorizontal,
    title: "Change",
    subtitle: "Adjust one or more purposes.",
  },
  {
    icon: Check,
    title: "Save",
    subtitle: "Confirmed by the service.",
  },
  {
    icon: Clock,
    title: "Apply",
    subtitle: "Future collection stops as governed.",
  },
];

export default function CookieSettingsChangeMindSection({
  view = "all",
}: CookieSettingsChangeMindSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full border-t border-[#edf2f7]">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block w-full bg-[#f8fafc] py-14 sm:py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                What happens when you change your mind
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Changes apply from the moment they are saved. Earlier collection cannot always be
                undone, and this page says so plainly.
              </p>
            </div>

            {/* Desktop Horizontal Stepper */}
            <div className="relative mt-16 lg:mt-20">
              {/* Continuous Connecting Line */}
              <div className="absolute top-[23px] left-[10%] right-[10%] h-[2px] bg-[#3b82f6] hidden sm:block -z-0" />

              {/* Stepper Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 relative z-10">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex flex-col items-center text-center">
                      {/* Circle Node */}
                      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm transition hover:scale-105">
                        <Icon className="size-[20px] stroke-[2]" />
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="mt-4 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                        {step.title}
                      </h3>
                      <p className="mt-1 max-w-[160px] font-['Manrope'] text-[11.5px] leading-snug text-[#64748b]">
                        {step.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-10 bg-[#f8fafc]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              07 · WITHDRAWING A CHOICE
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">What happens when</span>
            <span className="block">you</span>
            <span className="block">change your mind</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
            Changes apply from the moment they are saved. Earlier collection cannot always be
            undone, and this page says so plainly.
          </p>

          {/* Mobile Vertical Stepper Flow */}
          <div className="mt-10 flex flex-col items-center">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.title}>
                  {/* Step Node */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                      <Icon className="size-[20px] stroke-[2]" />
                    </div>

                    <h3 className="mt-3 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 max-w-[200px] font-['Manrope'] text-[12px] text-[#64748b]">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Vertical Connecting Line (between steps) */}
                  {idx < steps.length - 1 && (
                    <div className="my-3.5 h-[34px] w-[2px] bg-[#3b82f6]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
