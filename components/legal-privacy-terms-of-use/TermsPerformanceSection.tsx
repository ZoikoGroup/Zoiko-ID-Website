import React from "react";
import Image from "next/image";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const mobilePerfCards = [
  {
    title: "Core Web Vitals",
    description: "Targeted against the approved web standard; no budget is claimed as already met.",
  },
  {
    title: "Scripts",
    description: "Minimal. Non-essential elements are lazy-loaded.",
  },
  {
    title: "Images",
    description: "Decorative photographs are sized to their containers and carry empty alternative text where they add no meaning.",
  },
  {
    title: "Caching",
    description: "Only last verified approved snapshots are served; unverified caches are not.",
  },
];

export default function TermsPerformanceSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Delivery Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Delivery
            </span>
          </div>

          {/* Section 11 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              11
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Performance and delivery
              </h2>
            </div>
            <div className="pt-[17px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Readable text comes first. The page is
                <br />
                light, so it stays usable on slow
                <br />
                connections and on low-end devices.
              </p>
            </div>

            {/* Stacked Cards */}
            <div className="flex flex-col gap-[14px] pt-[23px]">
              {mobilePerfCards.map((card) => (
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
              Delivery
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Performance and delivery
          </h2>
          <div className="pt-[4.9px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Readable text comes first. The page is light, so it stays usable on slow connections and low-end devices. Performance targets are checked; none is claimed as met.
            </p>
          </div>

          {/* Lean Delivery Card */}
          <div className="mt-4 flex items-center gap-[18px] rounded-[18px] border border-[#D9E1EC] bg-white p-7 pb-[26px] pt-[33px]">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#E4F3F8]">
              <Image
                src="/legal-privacy-terms-of-use/perf-lean.svg"
                alt="Lean delivery"
                width={26}
                height={26}
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-['Manrope'] text-[18px] font-bold leading-[25.2px] text-[#0B1B33]">
                Lean delivery
              </h4>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                Minimal scripts; non-essential media is lazy-loaded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
