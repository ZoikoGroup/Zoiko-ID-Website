import Image from "next/image";
import Link from "next/link";

export default function MobileHeroSection() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="w-full bg-[#f4f7fb] px-[22px] pb-[15.94px] pt-[15.5px]">
        <ol className="mx-auto flex w-full max-w-[560px] flex-wrap items-start gap-x-[6px] text-[13px] leading-[21.45px]">
          <li className="font-manrope font-normal text-[#64748b]">
            <Link href="/">Home</Link>
          </li>
          <li aria-hidden="true" className="font-manrope font-normal text-[#64748b]">›</li>
          <li className="font-manrope font-normal text-[#64748b]">Pricing &amp; Enterprise</li>
          <li aria-hidden="true" className="font-manrope font-normal text-[#64748b]">›</li>
          <li aria-current="page" className="font-manrope font-bold text-[#2563eb]">Pricing overview</li>
        </ol>
      </nav>

      <section className="w-full">
        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[20px] px-[22px] pt-[59px]">
          <div className="flex w-full flex-col items-center pb-[0.8px]">
            <p className="font-manrope text-center text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#2563eb]">
              Pricing &amp; Enterprise
            </p>
          </div>
          <h1 className="font-dm-serif relative left-1/2 w-max -translate-x-1/2 whitespace-nowrap text-center text-[40px] font-normal leading-[42px] tracking-[-0.4px] text-[#2563eb]">
            Explore how Zoiko iD
            <br />
            can fit your enterprise
          </h1>
          <div className="mx-auto w-full max-w-[720px] pt-[3.09px]">
            <p className="font-manrope text-center text-[17px] font-normal leading-[28px] text-[#64748b]">
              Zoiko iD is designed for identity, credentials, delegated authority and evidence across people, organizations, services, machines and AI agents. A proposal reflects the scope of your evaluation, not a list price.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-[14px] pb-[50px] pt-[12px]">
            <Link
              href="/security-contact"
              className="font-manrope inline-flex min-h-[48px] items-center justify-center rounded-[999px] border border-solid border-[#2563eb] bg-[#2563eb] px-[26px] py-[15px] text-center text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="#section-01"
              className="font-manrope inline-flex min-h-[48px] items-center justify-center rounded-[999px] border border-solid border-[#2563eb] bg-white px-[26px] py-[15px] text-center text-[15px] font-bold leading-[24.75px] text-[#2563eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Explore the platform
            </Link>
          </div>
          <div className="h-px w-full bg-[#e2e8f0]" />
          <div className="relative h-[370px] w-full overflow-hidden">
            <Image
              src="/pricing-overview/mobile-hero-visual.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[70px] px-[11px] pt-[70px]">
          <div className="w-full pt-[12px]">
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#2563eb]">
              The short answer
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-[13.045px]">
            <blockquote className="font-dm-serif w-full border-l-4 border-solid border-[#22b8d6] pl-[28px] text-[32px] font-normal leading-[43.2px] text-[#2563eb]">
              Zoiko iD pricing and usage terms depend on the capabilities and deployment scope approved for a specific evaluation. Public pricing figures, units and plans are shown only when formally published.
            </blockquote>
            <p className="font-manrope w-full pl-[32px] text-[14px] font-normal leading-[23.1px] text-[#64748b]">
              View the platform &amp; usage model → (route pending registry)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
