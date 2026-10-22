import Link from "next/link";

export default function MobileBreadcrumbSection() {
  return (
    <nav aria-label="Breadcrumb" className="lg:hidden w-full bg-[#0f2140]">
      <ol className="mx-auto flex w-full max-w-[560px] flex-wrap items-start gap-x-[6px] px-[22px] py-[14px] font-manrope text-[13px] leading-[20.8px] text-[#94a3b8]">
        <li>
          <Link href="/" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#22b8d6]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>Pricing &amp; Enterprise</li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="font-bold text-white">
          Enterprise
        </li>
      </ol>
    </nav>
  );
}
