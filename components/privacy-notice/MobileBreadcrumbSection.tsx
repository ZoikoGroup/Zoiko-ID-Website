export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[16.09px] pt-[15px]"
    >
      <ol className="mx-auto flex w-full max-w-[560px] items-start gap-[8px] whitespace-nowrap font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
        <li>Home</li>
        <li aria-hidden="true">/</li>
        <li>Legal &amp; Privacy</li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-bold text-[#0b1b33]">
          Privacy Notice
        </li>
      </ol>
    </nav>
  );
}
