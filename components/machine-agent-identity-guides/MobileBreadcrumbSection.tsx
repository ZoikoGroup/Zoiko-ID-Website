import Link from "next/link";

const linkClass =
  "transition-colors hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]";

export default function BreadcrumbSection() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-solid border-[#e2e8f0] px-[22px] pb-[18.9px] pt-[17.1px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]"
    >
      <p className="mx-auto w-full max-w-[560px]">
        <Link href="/" className={linkClass}>
          Home
        </Link>
        <span aria-hidden="true" className="mx-[5px]">›</span>
        <Link href="/identity-guides" className={linkClass}>
          Resources Learn
        </Link>
        <span aria-hidden="true" className="mx-[5px]">›</span>
        <span aria-current="page" className="font-bold text-[#2563eb]">
          Machine &amp; Agent Identity Guides
        </span>
      </p>
    </nav>
  );
}
