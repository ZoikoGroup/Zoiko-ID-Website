import Image from "next/image";

export default function DesktopOverviewSection() {
  return (
    <section
      id="overview"
      className="flex w-full scroll-mt-[120px] flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-[132px] flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Overview
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-info.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex min-w-0 max-w-[820px] flex-1 flex-col items-start gap-[48px]">
          <div className="flex w-full flex-col items-start gap-[21px] pb-[23px] pt-[16px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Plain-language overview
            </h2>
            <p className="w-full font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              A short answer to “What is this notice about?” will appear here once Privacy counsel has{" "}
              <br className="max-xl:hidden" />
              approved the wording. Until then, no summary is shown, so that it cannot contradict the detailed clauses.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-[16px]">
            <div className="relative h-[301.01px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/privacy-notice/desktop-overview-whiteboard.webp"
                alt="Whiteboard with planning notes"
                fill
                sizes="770px"
                className="object-cover"
              />
            </div>
            <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[30px] py-[28px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src="/privacy-notice/desktop-icon-info.svg" width={24} height={24} alt="" />
              </div>
              <div className="min-w-0">
                <p className="font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#0b1b33]">
                  Summary rule
                </p>
                <p className="mt-[6px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] xl:whitespace-nowrap">
                  The summary never overrides the detailed clauses. If the summary is unapproved, the section is{" "}
                  <br className="max-xl:hidden" />
                  omitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
