export default function DesktopIntentsHeaderSection() {
  return (
    <div className="flex w-full items-center justify-center gap-[80px]">
      <div className="flex min-w-px flex-[1_0_0] flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Where each intent goes
        </h2>
        <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
          Each intent has a destination and a forbidden fallback. A general <br className="max-xl:hidden" />
          inbox is never a fallback for a security or privacy matter.
        </p>
      </div>
      <div className="flex min-h-[254.77px] min-w-px flex-[1_0_0] flex-col items-start rounded-[18px] border border-solid border-[#d9e1ec] bg-white p-[36px]">
        <h3 className="w-full border-l-[3px] border-solid border-[#0891b2] pl-[18px] font-dm-serif text-[26px] font-normal leading-[33.8px] text-[#0b1b33] xl:whitespace-nowrap">
          Zoiko iD is a Zoiko Tech Inc. platform.
        </h3>
        <p className="mt-[16.9px] font-manrope text-[16px] leading-[26.4px] text-[#334155] xl:whitespace-nowrap">
          Headquarters details are published on the Zoiko Tech Inc. <br className="max-xl:hidden" />
          page once approved. A listed address does not mean a staffed <br className="max-xl:hidden" />
          reception, local support or business hours.
        </p>
        <p className="mt-[19px] w-full rounded-[6px] bg-[#fef3c7] px-[12px] py-[6px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e] xl:whitespace-nowrap">
          Zoiko Tech Inc. page · route pending
        </p>
      </div>
    </div>
  );
}
