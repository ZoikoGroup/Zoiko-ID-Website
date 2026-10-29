"use client";

import React from "react";
import Image from "next/image";

interface RepresentationNotBlankCheckSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function RepresentationNotBlankCheckSection({
  view = "all",
}: RepresentationNotBlankCheckSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Subtitle, and Two Cards */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Representation is not<br />a blank check
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  An external service provider can receive approved, time-bounded access to selected
                  records for an organization. Representing an organization does not cover everything
                  it holds, and an approver without enough authority cannot create the grant.
                </p>

                {/* 2 Outcome Cards */}
                <div className="mt-8 grid grid-cols-2 gap-4 max-w-[480px]">
                  {/* Card 1: Denied */}
                  <div className="rounded-[18px] border border-[#e2e8f0] bg-white p-3 shadow-xs">
                    <div className="relative h-[115px] w-full overflow-hidden rounded-[14px]">
                      <Image
                        src="/authorization-delegated-authority/ada10.png"
                        alt="Rejected stamp in hand"
                        fill
                        sizes="(max-width: 1024px) 50vw, 240px"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-2.5 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                      Denied
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b]">
                      The approver lacks authority.
                    </p>
                  </div>

                  {/* Card 2: Expired */}
                  <div className="rounded-[18px] border border-[#e2e8f0] bg-white p-3 shadow-xs">
                    <div className="relative h-[115px] w-full overflow-hidden rounded-[14px]">
                      <Image
                        src="/authorization-delegated-authority/ada11.png"
                        alt="Expired stamp on document"
                        fill
                        sizes="(max-width: 1024px) 50vw, 240px"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-2.5 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                      Expired
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b]">
                      The grant&apos;s period has ended.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Woman and Executive discussing */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[490px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada12.png"
                    alt="Professional woman explaining document report to seated senior executive"
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
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              11 · ORGANIZATION AND PARTNER DELEGATION
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Representation is not a blank check
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            An external service provider can receive approved, time-bounded access to selected records for an organization. Representing an organization does not cover everything it holds, and an approver without enough authority cannot create the grant.
          </p>

          {/* 2 Outcome Cards */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Card 1: Denied */}
            <div className="rounded-[18px] border border-slate-200/90 bg-white p-3 shadow-xs">
              <div className="relative h-[110px] w-full overflow-hidden rounded-[12px] bg-slate-100">
                <Image
                  src="/authorization-delegated-authority/ada34.jpg"
                  alt="Denied representation"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-2.5 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Denied
              </h3>
              <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b]">
                The approver lacks authority.
              </p>
            </div>

            {/* Card 2: Expired */}
            <div className="rounded-[18px] border border-slate-200/90 bg-white p-3 shadow-xs">
              <div className="relative h-[110px] w-full overflow-hidden rounded-[12px] bg-slate-100">
                <Image
                  src="/authorization-delegated-authority/ada35.jpg"
                  alt="Expired representation"
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-2.5 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Expired
              </h3>
              <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b]">
                The grant period has ended.
              </p>
            </div>
          </div>

          {/* Large Image Below */}
          <div className="mt-5 relative h-[280px] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-sm">
            <Image
              src="/authorization-delegated-authority/ada36.jpg"
              alt="Team collaborating on authorization"
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
