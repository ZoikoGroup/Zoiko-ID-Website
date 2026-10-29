"use client";

import React from "react";
import Image from "next/image";

interface SchemasEndpointsBannerSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function SchemasEndpointsBannerSection({
  view = "all",
}: SchemasEndpointsBannerSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="schemas-endpoints-desktop"
          className="hidden sm:block relative w-full bg-white py-16 lg:py-24"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[26px] shadow-lg min-h-[300px] flex items-center p-8 sm:p-14 bg-[#081729]">
              {/* Background Image hsi15.png */}
              <Image
                src="/header-Platform-standards-interoperability/hsi15.png"
                alt="Executives discussing integration architecture and technical schemas"
                fill
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center opacity-30"
              />

              {/* Deep Navy/Slate Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#081729]/95 via-[#0c2038]/90 to-[#081729]/80" />

              {/* Text Content */}
              <div className="relative z-10 max-w-[800px] flex flex-col items-start text-left">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.15] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Schemas and endpoints live in the<br />
                  documentation
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#9bb3c9] max-w-[700px]">
                  This page does not publish endpoints, event schemas, SDK languages or
                  throughput figures. Those appear only in the API Reference and Quickstarts,
                  once they are published and verified.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="schemas-endpoints-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-8"
        >
          <div className="relative overflow-hidden rounded-[24px] shadow-lg p-6 bg-[#081729] text-left">
            {/* Background Image: hsi35.jpg */}
            <Image
              src="/header-Platform-standards-interoperability/hsi35.jpg"
              alt="Documentation and technical schemas"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#081729]/92 via-[#0c2038]/85 to-[#081729]/95" />

            <div className="relative z-10 flex flex-col items-start">
              {/* Category Tag */}
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
                <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
                  12 · DOCUMENTATION SANCTITY
                </span>
              </div>

              {/* Title */}
              <h2
                className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.18] tracking-tight text-white"
                style={{
                  fontFamily:
                    'var(--font-dm-serif-display-family), "DM Serif Display", serif',
                }}
              >
                Schemas and endpoints live in the documentation
              </h2>

              {/* Description */}
              <p className="mt-3.5 font-['Manrope'] text-[13px] leading-[1.65] text-[#9bb3c9]">
                This page does not publish endpoints, event schemas, SDK
                languages or throughput figures. These appear only in the API
                Reference and Quickstarts once they are published and verified.
              </p>

              {/* 3 Pills Stack */}
              <div className="mt-6 flex flex-col items-start gap-2.5">
                <div className="rounded-full bg-[#fef3c7] px-4 py-2 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#92400e] uppercase">
                  API REFERENCE PENDING
                </div>
                <div className="rounded-full bg-[#fef3c7] px-4 py-2 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#92400e] uppercase">
                  QUICKSTARTS PENDING
                </div>
                <div className="rounded-full bg-[#fef3c7] px-4 py-2 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#92400e] uppercase">
                  BENCHMARKS &amp; TARGETS PENDING
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
