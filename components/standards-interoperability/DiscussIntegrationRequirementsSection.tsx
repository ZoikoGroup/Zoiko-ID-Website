"use client";

import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

interface DiscussIntegrationRequirementsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const formFields = [
  { label: "Name", requirement: "Required" },
  { label: "Work email", requirement: "Required; checked for format" },
  { label: "Organization", requirement: "Required" },
  { label: "Systems in scope", requirement: "Required; describe briefly, without secrets" },
  { label: "Privacy acknowledgement", requirement: "Required; links to the Privacy Notice" },
];

export default function DiscussIntegrationRequirementsSection({
  view = "all",
}: DiscussIntegrationRequirementsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="discuss-integration-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Discuss your integration<br />
                requirements
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                Describe the identity estate you need to connect. A qualified team will
                reply through the approved route. Submitting does not promise a response
                time, a booking or a free trial.
              </p>
            </div>

            {/* Discussion Image hsi17.png */}
            <div className="mt-10 w-full max-w-[1000px] overflow-hidden rounded-[26px] shadow-sm border border-slate-200/80 bg-slate-100">
              <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] w-full">
                <Image
                  src="/header-Platform-standards-interoperability/hsi17.png"
                  alt="Corporate partners discussing technical integration requirements"
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
          id="discuss-integration-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Top Image: hsi36.jpg */}
          <div className="relative w-full aspect-[4/3.2] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-100 mb-6">
            <Image
              src="/header-Platform-standards-interoperability/hsi36.jpg"
              alt="Corporate corridor and discussion rooms"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              14 · NEXT STEP
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Discuss your integration requirements
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Describe the identity estate you need to connect. A qualified team will
            reply through the approved route. Submitting does not promise a response
            time, a booking or a free trial.
          </p>

          {/* Form Specification Card */}
          <div className="mt-7 rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-2xs divide-y divide-slate-100">
            <div className="pb-3 flex flex-col">
              <span className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Name
              </span>
              <span className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#5b6b82]">
                Required
              </span>
            </div>

            <div className="py-3 flex flex-col">
              <span className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Work email
              </span>
              <span className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#5b6b82]">
                Required, used as the format
              </span>
            </div>

            <div className="py-3 flex flex-col">
              <span className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Organization
              </span>
              <span className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#5b6b82]">
                Required
              </span>
            </div>

            <div className="py-3 flex flex-col">
              <span className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Systems in scope
              </span>
              <span className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#5b6b82]">
                Required, describe family without secrets
              </span>
            </div>

            <div className="pt-3 flex flex-col">
              <span className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                Privacy acknowledgement
              </span>
              <span className="mt-0.5 font-['Manrope'] text-[11.5px] text-[#5b6b82]">
                Required, link to Zoiko Privacy Notice
              </span>
            </div>
          </div>

          {/* Amber Alert Banner */}
          <div className="mt-5 flex items-start gap-3 rounded-[16px] border border-[#fef08a] bg-[#fefce8] p-4 text-[#854d0e]">
            <AlertTriangle className="h-4.5 w-4.5 shrink-0 text-[#ca8a04] mt-0.5 stroke-[2.2]" />
            <p className="font-['Manrope'] text-[12px] leading-relaxed text-[#713f12]">
              <strong className="font-semibold text-[#854d0e]">Form is not yet live.</strong> No submit control appears until the enterprise mailbox verifies.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
