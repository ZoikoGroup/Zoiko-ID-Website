"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

interface DiscussAgentGovernanceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const formFields = [
  { label: "Name", requirement: "Required" },
  { label: "Work email", requirement: "Required; checked for format" },
  { label: "Organization", requirement: "Required" },
  { label: "Use case", requirement: "Required; describe briefly, without secrets" },
  { label: "Privacy acknowledgement", requirement: "Required; links to the Privacy Notice" },
];

export default function DiscussAgentGovernanceSection({
  view = "all",
}: DiscussAgentGovernanceSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="discuss-governance"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Discuss agent governance<br className="hidden sm:inline" /> for your organization
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                Describe your use case and the sponsor who would be accountable. A qualified team will
                reply through the approved route. Submitting does not promise a response time or a
                booking.
              </p>
            </div>

            {/* Discussion Image ra16.png */}
            <div className="mt-12 w-full max-w-[1000px] overflow-hidden rounded-[26px] shadow-sm border border-slate-200/80 bg-slate-100">
              <div className="relative h-[360px] sm:h-[420px] lg:h-[470px] w-full">
                <Image
                  src="/responsible-ai-Agent-Governance/ra16.png"
                  alt="Enterprise leadership discussing agent governance strategy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Synthetic Form Spec Box with Dashed Border */}
            <div className="mt-8 w-full max-w-[1000px] rounded-[24px] border border-dashed border-[#cbe8f5] bg-white p-6 sm:p-8 shadow-2xs">
              <div className="divide-y divide-[#edf2f7]">
                {formFields.map((field) => (
                  <div key={field.label} className="py-4 flex items-center">
                    <span className="w-[240px] shrink-0 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {field.label}
                    </span>
                    <span className="font-['Manrope'] text-[13.5px] text-[#5b6b82]">
                      {field.requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amber Alert Banner */}
            <div className="mt-6 flex items-start gap-3 w-full max-w-[1000px] rounded-[16px] border border-[#fef08a] bg-[#fefce8] p-4 text-[#854d0e]">
              <AlertTriangle className="h-4.5 w-4.5 shrink-0 text-[#ca8a04] mt-0.5 stroke-[2.2]" />
              <p className="font-['Manrope'] text-[13px] leading-relaxed text-[#713f12]">
                <strong className="font-semibold text-[#854d0e]">Form not yet live.</strong> No submit
                control appears until the enterprise route is verified.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="discuss-governance-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Top Image: ra37.jpg Modern corporate office corridor */}
          <div className="relative w-full aspect-[4/4.4] max-h-[380px] overflow-hidden rounded-[22px] shadow-sm border border-slate-200/80 bg-slate-900 mb-7">
            <Image
              src="/responsible-ai-Agent-Governance/ra37.jpg"
              alt="Office corridor leading to enterprise governance teams"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 17 · ENQUIRY
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Discuss agent<br />
            governance<br />
            for your organization
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Describe your use case and the sponsor who would be accountable. A qualified team will reply through the approved route. Submitting does not promise a response time or a booking.
          </p>

          {/* Synthetic Form Card */}
          <div className="mt-8 rounded-[22px] border border-slate-100 bg-white p-5 shadow-2xs mb-4">
            <div className="flex flex-col">
              {formFields.map((field, idx) => (
                <div
                  key={field.label}
                  className={`py-3 flex flex-col ${
                    idx !== formFields.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <span className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                    {field.label}
                  </span>
                  <span className="mt-1 font-['Manrope'] text-[11.5px] text-[#94a3b8]">
                    {field.requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Amber Alert Banner */}
          <div className="rounded-[18px] bg-[#fef3c7] p-4 flex items-start gap-3 border border-[#fde68a]/60 text-[#854d0e]">
            <AlertTriangle className="h-4.5 w-4.5 shrink-0 text-[#b45309] mt-0.5 stroke-[2.2]" />
            <p className="font-['Manrope'] text-[12px] leading-relaxed text-[#713f12]">
              <strong className="font-semibold text-[#b45309]">Form is not yet live.</strong> No submit control appears until the enterprise route is verified.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
