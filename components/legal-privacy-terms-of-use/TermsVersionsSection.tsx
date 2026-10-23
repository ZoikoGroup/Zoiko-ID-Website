import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

export default function TermsVersionsSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section id="versions" className="w-full border-b border-[#D9E1EC] bg-white px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Versions Card */}
          <div className="flex flex-col gap-2 rounded-[14px] border border-[#D9E1EC] bg-white p-[22px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Versions
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Archives are immutable once approved.
            </p>
          </div>

          {/* Section 05 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              05
            </span>
            <div className="pb-[17px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Version history
              </h2>
            </div>

            {/* Card 1: No archive available */}
            <div className="flex flex-col gap-[14px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]">
              <div className="w-fit rounded-full bg-[#F5F7FA] px-3 py-1">
                <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#3B4A63]">
                  No archive available
                </span>
              </div>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                No previous version exists in the approved record, so no archive entry is shown. Superseded versions will appear here with their effective period and a link to the current version.
              </p>
            </div>

            {/* Card 2: Single active version */}
            <div className="mt-[22px] flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white p-[22px]">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
                <Image
                  src="/legal-privacy-terms-of-use/mobile-versions-single.svg"
                  alt="Single active version"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                  Single active version
                </h4>
                <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                  Current, superseded, withdrawn. Each state is labelled and never overwritten silently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section id="versions" className="w-full bg-white px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col gap-3 rounded-[14px] border border-[#64748B]/15 p-8">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Versions
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Archives are immutable once approved.
            </p>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <div className="pb-[17px]">
            <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
              Version history
            </h2>
          </div>

          {/* Card 1: No archive available */}
          <div className="flex flex-col gap-[14px] rounded-[16px] border border-[#D9E1EC] bg-white px-[30px] pb-[41px] pt-[28px]">
            <div className="w-fit rounded-full bg-[#F5F7FA] px-3 py-1">
              <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#3B4A63]">
                No archive available
              </span>
            </div>
            <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
              No previous version exists in the approved record, so no archive entry is shown. Superseded versions will appear here with their effective period and a link to the current version.
            </p>
          </div>

          {/* Card 2: Single active version */}
          <div className="mt-[22px] flex items-center gap-[18px] rounded-[16px] border border-[#D9E1EC] bg-white px-[30px] py-[28px]">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
              <Image
                src="/legal-privacy-terms-of-use/versions-single.svg"
                alt="Single active version"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                Single active version
              </h4>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                Current, superseded, withdrawn. Each state is labelled and never overwritten silently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
