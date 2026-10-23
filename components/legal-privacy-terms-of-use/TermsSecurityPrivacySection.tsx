import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const securityCards = [
  {
    title: "Account wall",
    description: "None. Public Terms are accessible without sign-in (AT-36).",
  },
  {
    title: "Script dependency",
    description: "The clause text is in the HTML itself, not added by JavaScript (AT-38 scope).",
  },
  {
    title: "Content handling",
    description: "CMS HTML is sanitised; executable code in clauses is disallowed.",
  },
  {
    title: "Consent inference",
    description: "None from page views, scrolling or clicks. Any click-to-accept pattern is a separate Legal and product workflow.",
  },
];

const securityChecks = [
  {
    text: "Security headers are set and publishing privileges are monitored.",
    desktopIcon: "/legal-privacy-terms-of-use/sec-check-1.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-sec-check-1.svg",
  },
  {
    text: "Analytics record only document_view, toc_jump, print_select and related_link, with no clause text or user-entered text.",
    desktopIcon: "/legal-privacy-terms-of-use/sec-check-2.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-sec-check-2.svg",
  },
];

export default function TermsSecurityPrivacySection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-white px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Security and privacy Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Security and privacy
            </span>
          </div>

          {/* Section 10 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              10
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Security, privacy and consent
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                The page serves public legal text without an account wall, and it does not depend on scripts for its only copy. It does not infer agreement from a page view or from scrolling.
              </p>
            </div>

            {/* Stacked Cards */}
            <div className="flex flex-col gap-[14px] pt-[23px]">
              {securityCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-1 rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pt-4"
                >
                  <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                    {card.title}
                  </span>
                  <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3 pt-6">
              {securityChecks.map((chk, idx) => (
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
    <section className="w-full bg-white px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Security and privacy
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Security, privacy and consent
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              The page serves public legal text without an account wall, and it does not depend on scripts for its only copy. It does not infer agreement from a page view or from scrolling.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-[14px] pt-[23px]">
            {securityCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-1 rounded-[12px] border border-[#D9E1EC] bg-white p-[18px] pt-4"
              >
                <span className="font-['Manrope'] text-[14px] font-bold leading-[23.8px] text-[#0B1B33]">
                  {card.title}
                </span>
                <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-3 pt-6">
            {securityChecks.map((chk, idx) => (
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
