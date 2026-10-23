import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SectionProps {
  view?: "desktop" | "mobile";
}

export default function TermsHeroSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full bg-white">
        {/* Mobile Breadcrumb */}
        <div className="flex w-full items-center gap-2 border-b border-[#D9E1EC] bg-white px-[22px] py-[15px]">
          <Link href="/" className="font-['Manrope'] text-[13px] leading-[22.1px] text-[#5B6B82] hover:text-[#0B1B33]">
            Home
          </Link>
          <span className="font-['Manrope'] text-[13px] leading-[22.1px] text-[#5B6B82]">/</span>
          <span className="font-['Manrope'] text-[13px] leading-[22.1px] text-[#5B6B82]">
            Legal & Privacy
          </span>
          <span className="font-['Manrope'] text-[13px] leading-[22.1px] text-[#5B6B82]">/</span>
          <span className="font-['Manrope'] text-[13px] font-bold leading-[22.1px] text-[#0B1B33]">
            Terms of Use
          </span>
        </div>

        {/* Mobile Hero Content */}
        <div className="w-full border-b border-[#D9E1EC] px-[22px] py-[60px]">
          <div className="flex flex-col gap-[17px]">
            {/* Top Indicator */}
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-[25px] bg-[#0891B2]" />
              <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#0891B2]">
                01 · Legal & Privacy · Document identity
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-['DM_Serif_Display'] text-[42px] font-normal leading-[43.68px] text-[#0B1B33]">
              Terms of Use
            </h1>

            {/* Subtitle */}
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Read the terms that apply to your use of
              <br />
              the relevant Zoiko iD website or services.
            </p>

            {/* Red Warning Status Box */}
            <div className="flex items-start gap-4 rounded-[16px] border border-[#FCA5A5] bg-[#FEF2F2] p-[22px] pt-[39px]">
              <div className="mt-0.5 flex h-[24px] w-[22px] shrink-0 items-center justify-center">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-decision-alert.svg"
                  alt="Alert warning"
                  width={22}
                  height={22}
                />
              </div>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px]">
                <strong className="font-bold text-[#7F1D1D]">
                  Publication blocked: operative Terms pending Legal.
                </strong>{" "}
                <span className="font-bold text-[#7F1D1D]">
                  The clause text, contracting entity, effective date and governing-law terms have not been supplied or approved. This page shows the layout only and contains no contractual provisions.
                </span>
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mt-2 h-[373px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/legal-privacy-terms-of-use/mobile-hero-desk-3af9f1.png"
                alt="Printed documents on a desk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section className="relative flex h-[602px] w-full items-center justify-center overflow-hidden px-8 lg:px-[160px] py-[105px]">
      {/* Background Image with Figma's Exact Linear Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/legal-privacy-terms-of-use/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 20, 38, 0.65) 0%, rgba(7, 20, 38, 0.72) 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col items-start gap-7">
        <div className="flex flex-col gap-[14px]">
          <div className="pb-[0.69px] pt-[4.9px]">
            <h1 className="w-full max-w-[644px] font-['DM_Serif_Display'] text-[72px] font-normal leading-[82.8px] text-white">
              Terms of Use
            </h1>
          </div>
          <div className="pb-[0.77px] pt-[8.86px]">
            <p className="font-['Manrope'] text-[17.6px] font-normal leading-[29.92px] text-[#C9D3E3]">
              Read the terms that apply to your use of the relevant Zoiko iD website or
              <br />
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
