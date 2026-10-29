"use client";

import React from "react";
import { Shield, User } from "lucide-react";

interface WhoOwnsEachPartSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function WhoOwnsEachPartSection({
  view = "all",
}: WhoOwnsEachPartSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="who-owns-integration-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Who owns each part of an integration
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                An integration is shared work. Each party owns its own configuration, data
                and decisions. Naming the boundary prevents assumptions about what the
                other party handles.
              </p>
            </div>

            {/* 2 Responsibility Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px]">
              {/* Card 1: Zoiko iD */}
              <div className="rounded-[20px] border border-[#3b82f6] bg-white p-6 sm:p-7 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-4 shadow-2xs">
                  <Shield className="h-4.5 w-4.5 stroke-[2.2]" />
                </div>

                <h3 className="font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                  Zoiko iD is responsible for
                </h3>

                <p className="mt-2.5 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                  The platform&apos;s capabilities as verified, its documented interfaces, and
                  the evidence it records for decisions.
                </p>
              </div>

              {/* Card 2: Your organization */}
              <div className="rounded-[20px] border border-[#00a4d6] bg-white p-6 sm:p-7 shadow-2xs">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-4 shadow-2xs">
                  <User className="h-4.5 w-4.5 stroke-[2.2]" />
                </div>

                <h3 className="font-['Manrope'] text-[16px] font-bold text-[#0b1b33]">
                  Your organization is responsible for
                </h3>

                <p className="mt-2.5 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
                  Its own identity provider, its policies, its users, its applications and
                  the secrets it holds.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="who-owns-integration-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              08 · SHARED RESPONSIBILITY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Who owns each part of an integration
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            An integration is shared work. Each party owns its own configuration,
            data and decisions. Naming the boundary prevents assumptions about what
            the other party handles.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {/* Card 1: Zoiko iD */}
            <div className="rounded-[22px] border-2 border-[#3b82f6] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mb-3 shadow-2xs">
                <Shield className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Zoiko iD is responsible for
              </h3>
              <p className="mt-2 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                The platform capabilities as written, its documented interfaces, and the evidence it records for decisions.
              </p>
            </div>

            {/* Card 2: Your organization */}
            <div className="rounded-[22px] border-2 border-[#00a4d6] bg-white p-5 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mb-3 shadow-2xs">
                <User className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
              <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                Your organization is responsible for
              </h3>
              <p className="mt-2 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                Its own identity provider, its policies, its users, its applications and the decisions it makes.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
