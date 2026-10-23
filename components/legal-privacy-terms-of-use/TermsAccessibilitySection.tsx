import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const accessCards = [
  {
    title: "Focus and obscuring",
    description:
      "Visible focus on every control, with focus never hidden by sticky index or banner (2.4.11).",
    icon: "/legal-privacy-terms-of-use/access-contrast.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-contrast.svg",
  },
  {
    title: "Target size",
    description:
      "Controls at least 44 × 44 px where practical, with minimum target sizing per 2.5.8.",
    icon: "/legal-privacy-terms-of-use/access-focus.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-focus.svg",
  },
  {
    title: "Reflow and zoom",
    description:
      "No loss of content at 320 CSS px or 400% zoom (1.4.10); clauses stay readable at 200% (AT-11, AT-12).",
    icon: "/legal-privacy-terms-of-use/access-reflow.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-reflow.svg",
  },
  {
    title: "Reading order and landmarks",
    description:
      "Native landmarks (header, navigation, main, footer), one H1, and semantic headings taken from the operative clause structure.",
    icon: "/legal-privacy-terms-of-use/access-target.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-target.svg",
  },
];

const accessChecks = [
  {
    text: "Skip link navigates to the main landmark, and is the first focusable control.",
    desktopIcon: "/legal-privacy-terms-of-use/access-check-1.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-check-1.svg",
  },
  {
    text: "Printed output and reflowed text keep clause numbers and cross-references intact.",
    desktopIcon: "/legal-privacy-terms-of-use/access-check-2.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-check-2.svg",
  },
  {
    text: "Colour contrast is checked for text, controls and focus indicators (AA).",
    desktopIcon: "/legal-privacy-terms-of-use/access-check-3.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-access-check-3.svg",
  },
];

export default function TermsAccessibilitySection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Standards */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Standards
            </span>
          </div>

          {/* Section 09 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              09
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Accessibility commitments
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                This page is built to the WCAG 2.2 AA target. Each criterion below is a release check, not a
                claim that it has already been met.
              </p>
            </div>

            {/* Cards Stack */}
            <div className="flex flex-col gap-[22px] pt-[23px]">
              {accessCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]"
                >
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                    <Image
                      src={card.mobileIcon || card.icon}
                      alt={card.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                      {card.title}
                    </h4>
                    <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checks List */}
            <div className="flex flex-col gap-3 pt-6">
              {accessChecks.map((chk, idx) => (
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
    <section className="w-full bg-[#F8FAFC] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Standards
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Accessibility commitments
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              This page is built to the WCAG 2.2 AA target. Each criterion below is a release check, not a
              <br />
              claim that it has already been met.
            </p>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-[22px] pt-[23px]">
            {accessCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white px-[30px] py-[28px]"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                    {card.title}
                  </h4>
                  <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checks List */}
          <div className="flex flex-col gap-3 pt-6">
            {accessChecks.map((chk, idx) => (
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
