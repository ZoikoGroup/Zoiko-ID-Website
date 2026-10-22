import Link from "next/link";

export default function MobilePortfolioBoundarySection() {
  return (
    <section id="portfolio-boundary" className="bg-[#f7f8fa] px-[11px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[49.065px] rounded-[8px] bg-[#2563eb] px-[26px] pb-[26px] pt-[25px]">
        <div className="flex w-full flex-col items-start gap-[12px]">
          <p className="w-full pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#67e8f9]">
            Product portfolio boundary
          </p>
          <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[37.5px] text-white">
            <span>Only the verified Zoiko<br />
iD proposition is<br />
described here.</span>
          </h2>
          <p className="w-full pt-[1.05px] font-manrope text-[17px] font-normal leading-[28px] text-[#e2e8f0]">
            <span>No additional business units or named<br />
products appear on this page unless they<br />
are approved by the source owner.</span>
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-[24px]">
          <p className="w-full font-manrope text-[17px] font-normal leading-[28px] text-[#e2e8f0]">
            <span>Zoiko iD: identity infrastructure for people,<br />
organizations, services, machines and AI<br />
agents — with governed delegated<br />
authority and evidence.</span>
          </p>
          <Link
            href="/identity-guides"
            className="inline-flex min-h-[46px] items-center whitespace-nowrap rounded-[6px] border border-solid border-[#2563eb] bg-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#2563eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
          >
            Explore Zoiko iD
          </Link>
        </div>
      </div>
    </section>
  );
}
