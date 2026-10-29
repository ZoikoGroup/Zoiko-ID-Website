"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";

interface WhatCountsAsProofSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const proofCategories = [
  {
    icon: CheckCircle2,
    title: "Test evidence",
    description: "Results from a stated test scope.",
  },
  {
    icon: FileText,
    title: "Specification reference",
    description: "What the standard says, not what the product does.",
  },
  {
    icon: ShieldCheck,
    title: "Independent certification",
    description: "Shown separately, only when verified and in scope.",
  },
];

export default function WhatCountsAsProofSection({
  view = "all",
}: WhatCountsAsProofSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="what-counts-as-proof-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image hsi16.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[440px] sm:h-[480px] lg:h-[500px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-900">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi16.png"
                    alt="Engineer evaluating verified evidence and test scopes on laptop"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, and 3 Proof Categories */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  What counts as proof,<br />
                  and what does not
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Evidence is categorized by its source. A vendor statement is not validation,
                  and a standards name is not a certification. Only evidence that the owner
                  has approved is linked.
                </p>

                {/* 3 Categories List */}
                <div className="mt-8 flex flex-col gap-5">
                  {proofCategories.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5 shadow-2xs">
                          <IconComponent className="h-4 w-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                            {item.description}
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
        <section
          id="what-counts-as-proof-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Top Image: hsi34.jpg */}
          <div className="relative w-full aspect-[4/3.2] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-900 mb-6">
            <Image
              src="/header-Platform-standards-interoperability/hsi34.jpg"
              alt="Validation evidence analytics monitor"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              10 · VALIDATION EVIDENCE
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            What counts as proof, and what does not
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Evidence is categorized by its source. A vendor statement is not
            validation, and a standards name is not a certification. Only evidence
            that the owner has approved is linked.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {proofCategories.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                    <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                      {item.description}
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
