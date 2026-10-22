import Link from "next/link";

export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="lg:hidden w-full border-b border-solid border-[#dce3ee] bg-white px-[22px] pb-[13.94px] pt-[13.5px]"
    >
      <ol className="mx-auto flex w-full max-w-[560px] items-start gap-[6px] whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
        <li>
          <Link href="/" className="hover:text-[#2563eb] focus-visible:outline-2 focus-visible:outline-[#2563eb]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>Company</li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="font-bold text-[#2563eb]">
          Zoiko Tech Inc.
        </li>
      </ol>
    </nav>
  );
}
