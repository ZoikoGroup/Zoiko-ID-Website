"use client";

import React from "react";

interface FiveLabelsFullTextSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const labels = [
  {
    title: "Validated",
    description: "Implemented and tested against a stated scope.",
  },
  {
    title: "Pending validation",
    description: "Implemented, not yet validated.",
  },
  {
    title: "Planned",
    description: "On the roadmap; not available.",
  },
  {
    title: "Not supported",
    description: "Not offered for this capability.",
  },
  {
    title: "Not evaluated",
    description: "No assessment has been recorded yet.",
  },
];

const mobileLabels = [
  {
    tag: "IMPLEMENTED & VALIDATED",
    tagStyles: "border-emerald-300 bg-emerald-50/80 text-emerald-700",
    title: "Validated",
    description: "Implemented and tested against a stated scope.",
  },
  {
    tag: "IMPLEMENTED; VALIDATION PENDING",
    tagStyles: "border-amber-300 bg-amber-50/80 text-amber-800",
    title: "Pending validation",
    description: "Implemented, not yet validated.",
  },
  {
    tag: "PLANNED",
    tagStyles: "border-blue-200 bg-blue-50/80 text-blue-700",
    title: "Planned",
    description: "On the roadmap; not available.",
  },
  {
    tag: "NOT SUPPORTED",
    tagStyles: "border-rose-200 bg-rose-50/80 text-rose-700",
    title: "Not supported",
    description: "Not offered for this capability.",
  },
  {
    tag: "NOT EVALUATED",
    tagStyles: "border-slate-200 bg-slate-50/90 text-slate-600",
    title: "Not evaluated",
    description: "No assessment has been recorded yet.",
  },
];

export default function FiveLabelsFullTextSection({
  view = "all",
}: FiveLabelsFullTextSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="five-labels-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Five labels, always shown in full text
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                Every capability carries one of five labels. Each label is written out in
                words, so the state is never conveyed by colour alone. Certification is
                shown separately, and only when it has been independently verified.
              </p>
            </div>

            {/* 5 Cards Row */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {labels.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[140px] flex flex-col justify-between"
                >
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="five-labels-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              02 · STATUS VOCABULARY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Five labels, always shown in full text
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Every capability carries one of five labels. Each label is written out in
            words, so the state is never conveyed by colour alone. Certification is
            shown separately, and only when it has been independently verified.
          </p>

          <div className="mt-7 flex flex-col gap-3.5">
            {mobileLabels.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-slate-200/90 bg-white p-4 shadow-2xs"
              >
                <div
                  className={`inline-block w-full rounded-full border px-3 py-1.5 font-['Manrope'] text-[10px] font-bold tracking-wider uppercase text-left ${item.tagStyles}`}
                >
                  {item.tag}
                </div>
                <h3 className="mt-3 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                  {item.title}
                </h3>
                <p className="mt-1 font-['Manrope'] text-[11.5px] leading-relaxed text-[#5b6b82]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
