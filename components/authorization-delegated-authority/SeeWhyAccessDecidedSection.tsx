"use client";

import React from "react";
import Image from "next/image";

interface SeeWhyAccessDecidedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const auditFields = [
  {
    name: "Event ID",
    description: "Unique reference for the decision",
    status: "EXAMPLE",
  },
  {
    name: "Policy version",
    description: "Rules applied at evaluation time",
    status: "EXAMPLE",
  },
  {
    name: "Grant reference",
    description: "The grant the decision relied on",
    status: "EXAMPLE",
  },
  {
    name: "Evaluated at",
    description: "The as-of time for the decision",
    status: "EXAMPLE",
  },
];

export default function SeeWhyAccessDecidedSection({
  view = "all",
}: SeeWhyAccessDecidedSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Subtitle and Table */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  See why access was<br />
                  decided
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  An audit event records the event, the actor reference, the principal, the resource
                  and action, the policy version, the grant reference, the time and the decision.
                  Public examples contain no personal data, and restricted evidence is shown only to
                  authorized reviewers.
                </p>

                {/* Audit Fields Table Card */}
                <div className="mt-8 lg:mt-10 w-full max-w-[500px] rounded-[18px] border border-[#e2e8f0] bg-white divide-y divide-[#edf2f7] overflow-hidden shadow-xs">
                  {auditFields.map((field) => (
                    <div
                      key={field.name}
                      className="px-5 py-4 flex items-center justify-between gap-4 transition hover:bg-slate-50/50"
                    >
                      <div className="w-[110px] shrink-0 font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
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

              {/* Right Column: Team reviewing tablet */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[490px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada15.png"
                    alt="Team of colleagues reviewing digital records around table"
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
              14 · EVIDENCE AND AUDITABILITY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            See why access was decided
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            An audit event records the event, the actor reference, the principal, the resource and action, the policy version, the grant reference, the time and the decision. Public examples contain no personal data, and restricted evidence is shown only to authorized reviewers.
          </p>

          {/* Audit Fields Specification Card */}
          <div className="mt-6 rounded-[20px] border border-slate-200/90 bg-white divide-y divide-slate-100 shadow-sm overflow-hidden">
            {auditFields.map((field) => (
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

          {/* Bottom Analytics Dashboard Image */}
          <div className="mt-6 relative h-[250px] w-full overflow-hidden rounded-[22px] bg-slate-900 shadow-sm">
            <Image
              src="/authorization-delegated-authority/ada39.jpg"
              alt="Audit evidence analytics dashboard"
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
