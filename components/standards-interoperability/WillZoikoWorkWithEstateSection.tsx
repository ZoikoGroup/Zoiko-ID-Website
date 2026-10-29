"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, X, CheckCircle2 } from "lucide-react";

interface WillZoikoWorkWithEstateSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const points = [
  {
    icon: ShieldCheck,
    title: "Designed to complement",
    description: "Overlay-first, alongside what you already run.",
  },
  {
    icon: X,
    title: "Not a drop-in replacement",
    description: "No zero-effort migration or universal compatibility is implied.",
  },
];

export default function WillZoikoWorkWithEstateSection({
  view = "all",
}: WillZoikoWorkWithEstateSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="identity-estate-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Image hsi2.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative h-[440px] sm:h-[480px] lg:h-[520px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-900">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi2.png"
                    alt="Engineer reviewing identity infrastructure and data center estate"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Heading, Description, and 2 Highlights */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Will Zoiko iD work<br />
                  with our identity<br />
                  estate?
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Zoiko iD is designed to complement an existing identity provider,
                  directory and authorization estate, rather than replace it. Which
                  protocols and profiles connect is decided per capability, and only
                  verified capabilities are described as available.
                </p>

                {/* 2 Points */}
                <div className="mt-8 flex flex-col gap-5">
                  {points.map((point) => {
                    const IconComponent = point.icon;
                    return (
                      <div key={point.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5 shadow-2xs">
                          <IconComponent className="h-4 w-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                            {point.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                            {point.description}
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
          id="identity-estate-mobile"
          className="sm:hidden relative w-full bg-[#f4f7fb] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Top Image: hsi21.jpg */}
          <div className="relative w-full aspect-[4/3.3] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-900 mb-6">
            <Image
              src="/header-Platform-standards-interoperability/hsi21.jpg"
              alt="Team discussing identity architecture"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              01 · DIRECT ANSWER
            </span>
          </div>

          {/* Title */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Will Zoiko iD work with our identity estate?
          </h2>

          {/* Description */}
          <div className="mt-4 flex flex-col gap-3 font-['Manrope'] text-[13.5px] leading-[1.7] text-[#5b6b82]">
            <p>
              Zoiko iD is designed to complement an existing identity provider,
              directory and authorization estate, rather than replace it.
            </p>
            <p>
              Which protocols and profiles connect is decided per capability, and
              only verified capabilities are described as available.
            </p>
          </div>

          {/* 2 Points */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Point 1: Designed to complement */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                <CheckCircle2 className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  Designed to complement
                </h3>
                <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                  Overlay-first, alongside what you already run.
                </p>
              </div>
            </div>

            {/* Point 2: Not a drop-in replacement */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                <X className="h-4.5 w-4.5 stroke-[2.4]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                  Not a drop-in replacement
                </h3>
                <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                  No zero-effort migration or universal compatibility is implied.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
