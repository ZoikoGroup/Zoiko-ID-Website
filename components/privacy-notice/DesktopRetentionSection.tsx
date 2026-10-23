import Image from "next/image";

export default function DesktopRetentionSection() {
  return (
    <section
      id="retention"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex size-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/desktop-icon-clock.svg" width={24} height={24} alt="" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Retention
          </p>
        </div>
        <div className="flex w-[770px] max-w-[820px] shrink-0 flex-col items-start gap-[32px]">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Retention and deletion
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Retention periods and deletion criteria appear only once approved for each purpose. Sample <br className="max-xl:hidden" />
              numbers are never shown as actual periods.
            </p>
          </div>
          <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[30px] py-[28px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/desktop-icon-clock.svg" width={24} height={24} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="-mt-px font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                Deletion criteria
              </h3>
              <p className="mt-[6px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] xl:whitespace-nowrap">
                Stated per purpose; a policy conflict places the item on hold.
              </p>
              <span className="whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                Pending Legal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
