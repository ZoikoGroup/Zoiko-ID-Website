"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

interface DiscussAuthorizationSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const formRequirements = [
  {
    field: "Work email",
    detail: "Required; checked for format.",
  },
  {
    field: "Organization",
    detail: "Required.",
  },
  {
    field: "Role",
    detail: "Required.",
  },
  {
    field: "Use case",
    detail: "Required; describe briefly.",
  },
  {
    field: "Systems involved",
    detail: "Optional.",
  },
  {
    field: "Consent",
    detail: "Required acknowledgement; links to the Privacy Notice.",
  },
  {
    field: "Human check",
    detail: "Required; protects against automated submissions.",
  },
];

export default function DiscussAuthorizationSection({
  view = "all",
}: DiscussAuthorizationSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Subtitle, Specification Table and Alert */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Discuss authorization for your environment
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5b6b82] max-w-[540px]">
                  A short qualifying form, routed to the approved sales owner. It asks for your work
                  email, organization, role, use-case and the systems involved. It does not promise a
                  response time, a booking or a free trial.
                </p>

                {/* Form Fields Specification Table Card */}
                <div className="mt-8 w-full max-w-[520px] rounded-[18px] border border-[#e2e8f0] bg-white divide-y divide-[#edf2f7] overflow-hidden shadow-xs">
                  {formRequirements.map((row) => (
                    <div
                      key={row.field}
                      className="px-5 py-3 flex items-center justify-between gap-4 text-[12.5px] font-['Manrope'] transition hover:bg-slate-50/50"
                    >
                      <div className="w-[140px] shrink-0 font-bold text-[#0b1b33]">
                        {row.field}
                      </div>
                      <div className="flex-1 text-[#64748b]">
                        {row.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Yellow Amber Alert Banner */}
                <div className="mt-5 w-full max-w-[520px] rounded-[16px] border border-[#fef08a] bg-[#fefce8] p-4 flex items-center gap-3.5 shadow-xs">
                  <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#fef9c3] text-[#ca8a04]">
                    <AlertTriangle className="size-[17px] stroke-[2]" />
                  </div>
                  <p className="font-['Manrope'] text-[12px] leading-relaxed text-[#854d0e]">
                    <strong className="font-bold text-[#854d0e]">Form not yet live.</strong>{" "}
                    No submit control appears until the sales route and secure backend are approved.
                  </p>
                </div>
              </div>

              {/* Right Column: Three colleagues meeting */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[440px] sm:h-[480px] lg:h-[510px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada17.png"
                    alt="Three colleagues meeting and discussing authorization in office"
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
          {/* Top Office Corridor Visual */}
          <div className="relative h-[250px] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-sm mb-6">
            <Image
              src="/authorization-delegated-authority/ada45.jpg"
              alt="Office hallway"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              18 · ENTERPRISE ENQUIRY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Discuss authorization<br />for<br />your environment
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            A short qualifying form, routed to the approved sales owner. It asks for your work email, organization, role, use case and the systems involved. It does not promise a response time, a booking or a free trial.
          </p>

          {/* Form Fields Specification Table Card */}
          <div className="mt-6 rounded-[20px] border border-slate-200/90 bg-white divide-y divide-slate-100 shadow-sm overflow-hidden">
            {formRequirements.map((row) => (
              <div key={row.field} className="p-3.5 text-[12px] flex flex-col gap-0.5">
                <span className="font-['Manrope'] font-bold text-[#0b1b33]">{row.field}</span>
                <span className="font-['Manrope'] text-[#64748b]">{row.detail}</span>
              </div>
            ))}
          </div>

          {/* Amber Alert Banner */}
          <div className="mt-4 rounded-[18px] border border-[#fef08a] bg-[#fefce8] p-4 flex items-start gap-3 shadow-xs">
            <AlertTriangle className="size-4 shrink-0 text-[#b45309] mt-0.5" />
            <p className="font-['Manrope'] text-[11.5px] leading-relaxed text-[#92400e]">
              <strong className="font-bold text-[#b45309]">Form not yet live.</strong> No submit control appears until the sales route and secure backend are approved.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
