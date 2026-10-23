import Image from "next/image";

export default function MobileRetentionSection() {
  return (
    <section
      id="retention"
      className="scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px] px-[22px] py-[60px]">
        <div className="flex flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">Retention</p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-clock.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">09</p>
          <div className="pb-[0.83px]">
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">Retention and deletion</h2>
          </div>
          <p className="pb-[23px] pt-[20.385px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Retention periods and deletion criteria <br />
            appear only once approved for each <br />
            purpose. Sample numbers are never <br />
            shown as actual periods.
          </p>
          <div className="flex items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/mobile-icon-clock.svg" width={24} height={24} alt="" />
            </div>
            <div className="relative h-[114.58px] w-[232px] shrink-0">
              <h3 className="absolute left-0 right-0 top-[-1px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">Deletion criteria</h3>
              <p className="absolute left-0 right-0 top-[31.19px] whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                Stated per purpose; a policy <br />
                conflict places the item on hold.
              </p>
              <span className="absolute left-0 top-[82.19px] whitespace-nowrap rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">Pending Legal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
