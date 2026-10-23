import Image from "next/image";

export default function MobileOverviewSection() {
  return (
    <section
      id="overview"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col justify-center gap-[36px]">
        <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Overview
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-info.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">02</p>
          <h2 className="pb-[21.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Plain-language overview
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-overview-whiteboard.webp"
              alt="Whiteboard outlining a plain-language summary"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="pb-[23px] pt-[29px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            A short answer to “What is this notice
            <br />
            about?” will appear here once Privacy
            <br />
            counsel has approved the wording. Until
            <br />
            then, no summary is shown, so that it
            <br />
            cannot contradict the detailed clauses.
          </p>
          <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/mobile-icon-info.svg" width={24} height={24} alt="" />
            </div>
            <div className="min-w-0 flex-1 whitespace-nowrap">
              <p className="-mt-px font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                Summary rule
              </p>
              <p className="mt-[5.99px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                The summary never overrides the
                <br />
                detailed clauses. If the summary is
                <br />
                unapproved, the section is
                <br />
                omitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
