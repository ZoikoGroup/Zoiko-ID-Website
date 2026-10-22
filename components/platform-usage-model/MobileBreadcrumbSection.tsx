import Link from "next/link";

export default function MobileBreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="lg:hidden w-full border-b border-solid border-[#e2e8f0] bg-white px-[22px] py-[14px]"
    >
      <ol className="mx-auto flex w-full max-w-[560px] flex-wrap items-start gap-x-[6px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]">
        <li>
          <Link href="/" className="hover:text-[#2563eb] focus-visible:outline-2 focus-visible:outline-[#2563eb]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>Pricing &amp; Enterprise</li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="font-bold text-[#2563eb]">
          Platform &amp; Usage Model
        </li>
      </ol>
    </nav>
  );
}
