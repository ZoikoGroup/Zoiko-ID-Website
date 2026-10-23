import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const decisionChecks = [
  {
    text: "The next Legal page, the Privacy Notice, does not begin until this Terms of Use page is explicitly approved.",
    desktopIcon: "/legal-privacy-terms-of-use/decision-check-1.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-decision-check-1.svg",
  },
  {
    text: "No Terms text, date, entity or jurisdiction is added to this page without the Legal approval record.",
    desktopIcon: "/legal-privacy-terms-of-use/decision-check-2.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-decision-check-2.svg",
  },
];

export default function TermsFinalDecisionSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full bg-white px-[22px] pt-[60px] pb-12">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Decision Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Decision
            </span>
          </div>

          {/* Section 16 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              16
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Final build decision
              </h2>
            </div>

            {/* Status Alert Box */}
            <div className="mt-6 flex items-start gap-4 rounded-[16px] border border-[#FCA5A5] bg-[#FEF2F2] p-[22px]">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#FEE2E2]">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-decision-alert.svg"
                  alt="Alert warning"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#7F1D1D]">
                <strong className="font-bold">Build allowed. Publication prohibited.</strong>{" "}
                <span className="font-normal">
                  This page may be built for visual and engineering review while the operative clauses are pending. It may not be published until Legal supplies and approves the full text, the contracting identity, applicability, effective date, archive policy, any localised versions and every linked document.
                </span>
              </p>
            </div>

            {/* Checks */}
            <div className="flex flex-col gap-3 pt-6">
              {decisionChecks.map((chk, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Image
                      src={chk.mobileIcon}
                      alt="Check"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {chk.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section className="w-full bg-white px-8 lg:px-[160px] pt-[105px] pb-16">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Decision
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <div className="pb-[17px]">
            <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
              Final build decision
            </h2>
          </div>

          {/* Status Alert Box */}
          <div className="flex items-start gap-4 rounded-[16px] border border-[#FCA5A5] bg-[#FEF2F2] p-[26px_30px]">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#FEE2E2]">
              <Image
                src="/legal-privacy-terms-of-use/decision-alert.svg"
                alt="Alert warning"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-1 font-['Manrope'] text-[15px] leading-[25.5px] text-[#7F1D1D]">
              <div className="whitespace-nowrap">
                <span className="font-bold">Build allowed. Publication prohibited.</span>{" "}
                <span className="font-normal">This page may be built for visual and engineering</span>
              </div>
              <div className="whitespace-nowrap font-normal">
                review while the operative clauses are pending. It may not be published until Legal supplies and
              </div>
              <div className="whitespace-nowrap font-normal">
                approves the full text, the contracting identity, applicability, effective date, archive policy, any
              </div>
              <div className="whitespace-nowrap font-normal">
                localised versions and every linked document.
              </div>
            </div>
          </div>

          {/* Checks */}
          <div className="flex flex-col gap-[11.5px] pt-[23px]">
            {decisionChecks.map((chk, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="shrink-0">
                  <Image
                    src={chk.desktopIcon}
                    alt="Check"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                  {chk.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
