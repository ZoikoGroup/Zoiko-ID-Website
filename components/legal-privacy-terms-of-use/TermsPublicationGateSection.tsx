import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const gateItems = [
  {
    text: "Legal Counsel supplies the operative Terms, agreement scope and governing law.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-1.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-1.svg",
  },
  {
    text: "Corporate Legal verifies the exact contracting entity.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-2.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-2.svg",
  },
  {
    text: "Privacy Counsel confirms the links to the Privacy and Cookie notices.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-3.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-3.svg",
  },
  {
    text: "Accessibility QA confirms WCAG 2.2 AA, print output and reflow.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-4.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-4.svg",
  },
  {
    text: "Web and SEO confirm the canonical route and indexing rules.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-5.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-5.svg",
  },
  {
    text: "A two-person publishing approval and a rollback rehearsal are recorded.",
    desktopIcon: "/legal-privacy-terms-of-use/gate-check-6.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-gate-check-6.svg",
  },
];

export default function TermsPublicationGateSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full bg-[#0B1B33] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Publication gate */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#94A3B8]">
              Publication gate
            </span>
          </div>

          {/* Section 08 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#22B8D6]">
              08
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-white">
                What must happen before
                <br />
                publication
              </h2>
            </div>

            {/* Checklist items */}
            <div className="flex flex-col gap-3 pt-6">
              {gateItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Image
                      src={item.mobileIcon}
                      alt="Check"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#C9D3E3]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile Photos Stack */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="relative h-[220px] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-gate-portrait-5dd32a.png"
                  alt="Professional portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[220px] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-gate-meeting-5dd32a.png"
                  alt="Team meeting around a table"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[220px] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-gate-lock-5dd32a.png"
                  alt="Abstract security lock"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section className="w-full bg-[#0B1B33] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#94A3B8]">
              Publication gate
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9.1px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-white">
            What must happen before
            <br />
            publication
          </h2>

          {/* Checklist items */}
          <div className="flex flex-col gap-[11.5px] pt-[16.9px]">
            {gateItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="shrink-0">
                  <Image
                    src={item.desktopIcon}
                    alt="Check"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#C9D3E3]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Photos Row */}
          <div className="grid grid-cols-2 gap-5 pt-[40.9px]">
            <div className="relative h-[260px] w-full overflow-hidden rounded-[16px]">
              <Image
                src="/legal-privacy-terms-of-use/gate-portrait-desktop.png"
                alt="Professional portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[260px] w-full overflow-hidden rounded-[16px]">
              <Image
                src="/legal-privacy-terms-of-use/gate-lock-desktop.png"
                alt="Abstract security lock"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
