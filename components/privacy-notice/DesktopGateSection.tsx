import Image from "next/image";

export default function DesktopGateSection() {
  return (
    <section
      id="gate"
      className="hidden w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px] lg:block"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-alert-1.svg" width={24} height={24} alt="" className="size-[24px]" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Gate
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[5px]">
          <h2 className="w-full pb-[21px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Publication gate
          </h2>
          <div className="flex w-full items-start gap-[16px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[30px] py-[26px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
              <Image src="/privacy-notice/desktop-icon-alert.svg" width={24} height={24} alt="" className="size-[24px]" />
            </div>
            <p className="min-w-0 pr-[7.81px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#7f1d1d] xl:whitespace-nowrap">
              <strong className="font-bold">Publication prohibited.</strong> The page may be built for layout and engineering review. It may not be <br className="max-xl:hidden" />
              published until Privacy counsel approves the notice, the controller and region scope is verified, <br className="max-xl:hidden" />
              and every legally required data row is backed by the registry.
            </p>
          </div>
          <div className="flex w-full items-stretch gap-[18px] pt-[35px]">
            <div className="relative h-[200px] min-w-px flex-1">
              <Image src="/privacy-notice/desktop-gate-developer.webp" alt="" fill sizes="376px" className="rounded-[16px] object-cover" />
            </div>
            <div className="relative h-[200px] min-w-px flex-1">
              <Image src="/privacy-notice/desktop-gate-data.webp" alt="" fill sizes="376px" className="rounded-[16px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
