import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const notices = [
  {
    title: "Privacy Notice",
    description: "Separate notice for personal data. Route pending verification.",
    icon: "/legal-privacy-terms-of-use/related-privacy.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-related-privacy.svg",
  },
  {
    title: "Cookie Notice",
    description: "Separate notice for cookies. Route pending verification.",
    icon: "/legal-privacy-terms-of-use/related-cookie-notice.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-related-cookie-notice.svg",
  },
  {
    title: "Cookie Settings",
    description: "Cookie settings and consent preferences. Route pending verification.",
    icon: "/legal-privacy-terms-of-use/related-cookie-settings.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-related-cookie-settings.svg",
  },
  {
    title: "Accessibility",
    description: "Accessibility statement and testing notes. Route pending verification.",
    icon: "/legal-privacy-terms-of-use/related-accessibility.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-related-accessibility.svg",
  },
];

export default function TermsRelatedNoticesSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section id="related-notices" className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Clause index Card */}
          <div className="flex flex-col gap-2 rounded-[14px] border border-[#D9E1EC] bg-white p-[22px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Related notices
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Each notice is a separate document.
            </p>
          </div>

          {/* Section 04 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              04
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Related agreements and notices
              </h2>
            </div>
            <div className="pt-[17px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                These links appear only once each
                <br />
                destination is verified as published. Terms
                <br />
                of Use does not replace the Privacy Notice,
                <br />
                the Cookie Notice or any separate
                <br />
                agreement.
              </p>
            </div>

            {/* Stacked Cards */}
            <div className="flex flex-col gap-[22px] pt-[23px]">
              {notices.map((notice) => (
                <div
                  key={notice.title}
                  className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]"
                >
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                    <Image
                      src={notice.mobileIcon || notice.icon}
                      alt={notice.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                      {notice.title}
                    </h4>
                    <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                      {notice.description}
                    </p>
                  </div>
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
    <section id="related-notices" className="w-full bg-[#F8FAFC] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col gap-3 rounded-[14px] border border-[#64748B]/15 p-8">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Related notices
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Each notice is a separate document.
            </p>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Related agreements and notices
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              These links appear only once each destination is verified as published. Terms of Use does not
              <br />
              replace the Privacy Notice, the Cookie Notice or any separate agreement.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[22px] pt-[23px]">
            {notices.map((notice) => (
              <div
                key={notice.title}
                className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white px-[30px] py-[28px]"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src={notice.icon}
                    alt={notice.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                    {notice.title}
                  </h4>
                  <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                    {notice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
