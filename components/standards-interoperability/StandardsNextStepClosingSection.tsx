"use client";

import React from "react";
import Image from "next/image";

interface StandardsNextStepClosingSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function StandardsNextStepClosingSection({
  view = "all",
}: StandardsNextStepClosingSectionProps) {
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {showMobile && (
        <section
          id="standards-next-step-closing-mobile"
          className="sm:hidden relative w-full bg-white px-5 pt-8 pb-14 border-t border-[#edf2f7] text-left"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              16 · NEXT STEP
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.7] text-[#5b6b82]">
            Delegated authority explains what an actor may do. The Trust Center
            holds assurance material, and Contact handles questions this page
            does not answer.
          </p>

          {/* Image hsi37.jpg */}
          <div className="mt-7 relative w-full aspect-[4/3.4] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-950">
            <Image
              src="/header-Platform-standards-interoperability/hsi37.jpg"
              alt="Connected network of delegated authority and assurance nodes"
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
