"use client";

import React from "react";
import Image from "next/image";

interface AuthorityReevaluatedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const conditions = [
  {
    title: "Signal change",
    description: "New context arrives.",
  },
  {
    title: "Re-evaluation",
    description: "Policy is checked again.",
  },
  {
    title: "Stale decision",
    description: "Flagged, not hidden.",
  },
  {
    title: "Source unavailable",
    description: "Shown as an error case.",
  },
];

export default function AuthorityReevaluatedSection({
  view = "all",
}: AuthorityReevaluatedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Subtitle, and 2x2 Cards */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Authority is re-<br />
                  evaluated when<br />
                  conditions change
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  When a signal changes, policy is evaluated again, and the outcome can be a
                  suspension or a revocation. Propagation can be delayed, and a decision can become
                  stale. Each of these is shown as its own case, never as an instant guarantee.
                </p>

                {/* 2x2 Grid of Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4 max-w-[480px]">
                  {conditions.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[16px] border border-[#e2e8f0] bg-white p-4 shadow-xs hover:border-slate-300 transition"
                    >
                      <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-['Manrope'] text-[11.5px] leading-relaxed text-[#64748b]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Colleagues discussing with laptop */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[490px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada14.png"
                    alt="Professionals in blazers reviewing data on laptop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              13 · CONTINUOUS TRUST AND REVOCATION
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Authority is re-evaluated when conditions change
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            When a signal changes, policy is evaluated again, and the outcome can be a suspension or a revocation. Propagation can be delayed, and a decision can become stale. Each of these is shown as its own case, never as an instant guarantee.
          </p>

          {/* 2x2 Grid of Cards */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-[16px] border border-slate-200/90 bg-white p-3.5 shadow-xs">
              <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Signal change
              </h3>
              <p className="mt-1 font-['Manrope'] text-[11px] text-[#64748b]">
                New context arrives.
              </p>
            </div>

            <div className="rounded-[16px] border border-slate-200/90 bg-white p-3.5 shadow-xs">
              <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Re-evaluation
              </h3>
              <p className="mt-1 font-['Manrope'] text-[11px] text-[#64748b]">
                Policy is checked again.
              </p>
            </div>

            <div className="rounded-[16px] border border-slate-200/90 bg-white p-3.5 shadow-xs">
              <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Stale decision
              </h3>
              <p className="mt-1 font-['Manrope'] text-[11px] text-[#64748b]">
                Flagged, not hidden.
              </p>
            </div>

            <div className="rounded-[16px] border border-slate-200/90 bg-white p-3.5 shadow-xs">
              <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Source unavailable
              </h3>
              <p className="mt-1 font-['Manrope'] text-[11px] text-[#64748b]">
                Shown as an error state.
              </p>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="mt-6 relative h-[280px] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-sm">
            <Image
              src="/authorization-delegated-authority/ada38.jpg"
              alt="Person holding smartphone in front of laptop reviewing security code"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}
    </>
  );
}
