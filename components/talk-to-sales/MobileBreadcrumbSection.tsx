import Link from "next/link";

export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="lg:hidden w-full bg-[#eef4fb] px-[22px] py-[14px]"
    >
      <ol className="mx-auto flex w-full max-w-[560px] items-start gap-[6px] whitespace-nowrap font-manrope text-[13px] leading-[20.8px] text-[#64748b]">
        <li>
          <Link href="/" className="hover:text-[#2563eb] focus-visible:outline-2 focus-visible:outline-[#2563eb]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>Pricing &amp; Enterprise</li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="font-bold text-[#2563eb]">
          Talk to Sales
        </li>
      </ol>
    </nav>
  );
}
