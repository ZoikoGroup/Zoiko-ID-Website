"use client";

import React from "react";
import Image from "next/image";

interface WhatGrantStatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const grantFields = [
  {
    name: "Principal",
    description: "The party the authority comes from",
    status: "REQUIRED",
  },
  {
    name: "Delegate",
    description: "The actor receiving the grant",
    status: "REQUIRED",
  },
  {
    name: "Purpose",
    description: "Why the grant exists",
    status: "REQUIRED",
  },
  {
    name: "Scope",
    description: "Which resource and action are covered",
    status: "REQUIRED",
  },
  {
    name: "Valid period",
    description: "From and until, with an explicit end",
    status: "REQUIRED",
  },
  {
    name: "Provenance",
    description: "Issuer and approval record",
    status: "CONDITIONAL",
  },
];

export default function WhatGrantStatesSection({
  view = "all",
}: WhatGrantStatesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading and Grant Fields Table */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  What a grant states
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  A grant binds an actor to a purpose, a scope and a time. Every field below is shown
                  in a synthetic example, and each one has a tooltip that explains it in plain language.
                </p>

                {/* Table Card Container */}
                <div className="mt-8 lg:mt-10 w-full max-w-[520px] rounded-[18px] border border-[#e2e8f0] bg-white divide-y divide-[#edf2f7] overflow-hidden shadow-xs">
                  {grantFields.map((field) => (
                    <div
                      key={field.name}
                      className="px-5 py-4 flex items-center justify-between gap-4 transition hover:bg-slate-50/50"
                    >
                      <div className="w-[100px] shrink-0 font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                        {field.name}
                      </div>

                      <div className="flex-1 font-['Manrope'] text-[12px] text-[#5b6b82]">
                        {field.description}
                      </div>

                      <div className="shrink-0">
                        <span className="inline-block rounded-[6px] bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#7e22ce] uppercase">
                          {field.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual of person working in auditorium */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[430px] sm:h-[470px] lg:h-[500px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada8.png"
                    alt="Professional reviewing notes and working in an auditorium"
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
              06 · GRANT ANATOMY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            What a grant states
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            A grant binds an actor to a purpose, a scope and a time. Every field below is shown in a synthetic example, and each one has a tooltip that explains it in plain language.
          </p>

          {/* Fields Specification Card */}
          <div className="mt-6 rounded-[20px] border border-slate-200/90 bg-white divide-y divide-slate-100 shadow-sm overflow-hidden">
            {grantFields.map((field) => (
              <div key={field.name} className="p-4 flex flex-col">
                <span className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                  {field.name}
                </span>
                <span className="font-['Manrope'] text-[11.5px] text-[#64748b] mt-0.5">
                  {field.description}
                </span>
              </div>
            ))}
          </div>

          {/* Badges / Notes */}
          <div className="mt-4 flex items-center gap-2.5">
            <span className="rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
              ILLUSTRATIVE
            </span>
            <span className="font-['Manrope'] text-[10px] font-bold tracking-wider text-[#64748b] uppercase">
              EXAMPLE VALUES ARE SYNTHETIC.
            </span>
          </div>

          {/* Image */}
          <div className="mt-5 relative h-[280px] w-full overflow-hidden rounded-[22px] shadow-sm bg-slate-100">
            <Image
              src="/authorization-delegated-authority/ada27.jpg"
              alt="Code and grant parameters displayed on laptop"
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
