export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-solid border-[#d9e1ec] bg-white pb-[16.09px] pt-[15px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-wrap items-start gap-x-[8px] px-[22px] text-[13px] leading-[22.1px] whitespace-nowrap">
        <span className="font-manrope font-normal text-[#5b6b82]">Home</span>
        <span aria-hidden="true" className="font-manrope font-normal text-[#5b6b82]">/</span>
        <span className="font-manrope font-normal text-[#5b6b82]">Locations &amp; Connect</span>
        <span aria-hidden="true" className="font-manrope font-normal text-[#5b6b82]">/</span>
        <span aria-current="page" className="font-manrope font-bold text-[#0b1b33]">Headquarters</span>
      </div>
    </nav>
  );
}
