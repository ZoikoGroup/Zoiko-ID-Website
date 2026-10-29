"use client";

import React from "react";

interface StateAndNextStepSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const states = [
  {
    title: "Permitted",
    description: "The action is allowed within the grant. Recovery: none needed.",
  },
  {
    title: "Denied",
    description: "The action is not allowed. Recovery: request a proper grant.",
  },
  {
    title: "Additional verification",
    description: "More proof is needed. Recovery: complete the verification.",
  },
  {
    title: "Pending",
    description: "A request is waiting. Recovery: wait for the approver.",
  },
  {
    title: "Expired or revoked",
    description: "The grant has ended. Recovery: a new request, with no silent extension.",
  },
  {
    title: "Indeterminate",
    description: "The policy source is unavailable. Recovery: retry or use the support route.",
  },
];

export default function StateAndNextStepSection({
  view = "all",
}: StateAndNextStepSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#0b1728] py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-white"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Every state has a name and a next step
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#94a3b8] max-w-[620px]">
                Each state below has a plain-language name, a short explanation and a recovery path.
                Colour is never the only signal, so each state also has its own label.
              </p>
            </div>

            {/* 6 White Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {states.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-white p-5 lg:p-6 shadow-md flex flex-col justify-between min-h-[140px] transition hover:shadow-lg"
                >
                  <div>
                    <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-['Manrope'] text-[12px] leading-[1.65] text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              09 · AUTHORIZATION STATES
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Every state has a name<br />and a next step
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Each state below has a plain-language name, a short explanation and a recovery path. Colour is never the only signal, so each state also has its own label.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {states.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3.5">
                  <span className="inline-block rounded-full bg-[#fef3c7] px-2.5 py-0.5 font-['Manrope'] text-[9px] font-bold tracking-wider text-[#b45309] uppercase">
                    LABEL PENDING
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
