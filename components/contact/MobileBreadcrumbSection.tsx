import Link from "next/link";

export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[15.94px] pt-[15.5px]"
    >
      <ol className="mx-auto flex w-full max-w-[560px] items-start gap-[8px] whitespace-nowrap text-[13px] leading-[21.45px]">
        <li className="font-manrope font-normal text-[#5b6b82]">
          <Link href="/" className="focus-visible:outline-2 focus-visible:outline-[#0891b2]">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="font-manrope font-normal text-[#5b6b82]">
          /
        </li>
        <li className="font-manrope font-normal text-[#5b6b82]">Company</li>
        <li aria-hidden="true" className="font-manrope font-normal text-[#5b6b82]">
          /
        </li>
        <li aria-current="page" className="font-manrope font-bold text-[#0b1b33]">
          Contact
        </li>
      </ol>
    </nav>
  );
}
