import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const questionRoutes = [
  {
    title: "General enquiries",
    description: "Routed to the approved Legal contact. Route pending verification.",
    icon: "/legal-privacy-terms-of-use/questions-support.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-questions-support.svg",
  },
  {
    title: "Privacy questions",
    description: "Routed to the Privacy route, separate from these terms.",
    icon: "/legal-privacy-terms-of-use/questions-privacy.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-questions-privacy.svg",
  },
  {
    title: "Security and vulnerabilities",
    description: "Routed to Security Contact or Responsible Disclosure.",
    icon: "/legal-privacy-terms-of-use/questions-sales.svg",
    mobileIcon: "/legal-privacy-terms-of-use/mobile-questions-sales.svg",
  },
];

export default function TermsQuestionsSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section id="questions" className="w-full border-b border-[#D9E1EC] bg-white px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Questions Card */}
          <div className="flex flex-col gap-2 rounded-[14px] border border-[#D9E1EC] bg-white p-[22px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Questions
            </span>
          </div>

          {/* Section 07 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              07
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Questions about these
                <br />
                terms
              </h2>
            </div>
            <div className="pt-[17px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Ask the approved Legal contact route. Do not send sensitive personal information through an
                <br />
                ordinary form.
              </p>
            </div>

            {/* Question Route Cards */}
            <div className="flex flex-col gap-[22px] pt-[23px]">
              {questionRoutes.map((route) => (
                <div
                  key={route.title}
                  className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]"
                >
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                    <Image
                      src={route.mobileIcon || route.icon}
                      alt={route.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                      {route.title}
                    </h4>
                    <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist Items */}
            <div className="flex flex-col gap-3 pt-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-questions-check-1.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                  Public route; no sign-in required to view terms or contact.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-questions-check-2.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                  Enquiries are logged with timestamp and legal retention policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section id="questions" className="w-full bg-white px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Questions
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Questions about these terms
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Ask the approved Legal contact route. Do not send sensitive personal information through an
              <br />
              ordinary form.
            </p>
          </div>

          {/* Question Route Cards */}
          <div className="flex flex-col gap-[22px] pt-[23px]">
            {questionRoutes.map((route) => (
              <div
                key={route.title}
                className="flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white px-[30px] py-[28px]"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                  <Image
                    src={route.icon}
                    alt={route.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                    {route.title}
                  </h4>
                  <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                    {route.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist Items */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="/legal-privacy-terms-of-use/questions-check-1.svg"
                alt="Check"
                width={20}
                height={20}
              />
              <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                Public route; no sign-in required to view terms or contact.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/legal-privacy-terms-of-use/questions-check-2.svg"
                alt="Check"
                width={20}
                height={20}
              />
              <span className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                Enquiries are logged with timestamp and legal retention policy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
