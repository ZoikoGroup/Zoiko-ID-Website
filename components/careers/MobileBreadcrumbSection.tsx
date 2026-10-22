export default function MobileBreadcrumbSection() {
  return (
    <div className="w-full">
      <nav
        aria-label="Breadcrumb"
        className="flex w-full items-start gap-[8px] whitespace-nowrap border-b border-solid border-[#dce3ee] bg-[#f4f7fb] px-[22px] pb-[15.94px] pt-[15.5px] font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]"
      >
        <span>Home</span>
        <span aria-hidden="true">/</span>
        <span>Company</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="font-bold text-[#0b1b33]">
          Careers
        </span>
      </nav>
    </div>
  );
}
