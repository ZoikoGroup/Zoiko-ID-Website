import React from "react";
import { Search, FileText, CheckCircle2, User, Globe } from "lucide-react";

interface CookieNoticeVerificationFlowSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const flowSteps = [
  {
    icon: Search,
    title: "Scan",
    description: "Observe storage on the live site.",
  },
  {
    icon: FileText,
    title: "Register",
    description: "Record name, provider and purpose.",
  },
  {
    icon: CheckCircle2,
    title: "Verify",
    description: "Confirm duration and classification.",
  },
  {
    icon: User,
    title: "Approve",
    description: "Privacy and engineering sign-off.",
  },
  {
    icon: Globe,
    title: "Publish",
    description: "Immutable version with its history.",
  },
];

export default function CookieNoticeVerificationFlowSection({
  view = "all",
}: CookieNoticeVerificationFlowSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                From scan to publication
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal text-[#5b6b82]">
                The published inventory is only what the verification steps confirm. No stage is skipped.
              </p>
            </div>

            {/* Stepper Flow */}
            <div className="relative mt-16 pb-6">
              {/* Horizontal Connecting Line between first and last node */}
              <div
                aria-hidden="true"
                className="absolute top-[23px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8]"
              />

              <div className="relative z-10 grid grid-cols-5 gap-4">
                {flowSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Step Circle */}
                      <div className="flex size-[48px] items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm transition group-hover:scale-105 group-hover:border-blue-700">
                        <Icon className="size-[20px] stroke-[1.8]" />
                      </div>

                      {/* Step Title */}
                      <h3 className="mt-4 font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="mt-1 max-w-[145px] font-['Manrope'] text-[11.5px] leading-snug text-[#64748b]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              05 · HOW THE INVENTORY IS VERIFIED
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            From scan to
            <br />
            publication
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            The published inventory is only what the verification steps confirm.
            No stage is skipped.
          </p>

          {/* Centered Vertical Stepper Flow */}
          <div className="mt-10 flex flex-col gap-8">
            {flowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex size-[48px] items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                    <Icon className="size-[20px] stroke-[1.8]" />
                  </div>
                  <h3 className="mt-3 font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[210px] font-['Manrope'] text-[12px] leading-snug text-[#64748b]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
