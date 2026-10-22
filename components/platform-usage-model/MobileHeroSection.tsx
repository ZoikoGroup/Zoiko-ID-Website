import Image from "next/image";
import Link from "next/link";

export default function MobileHeroSection() {
  return (
    <section className="lg:hidden w-full bg-white px-[22px] pb-[60px] pt-[90px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[20px]">
        <div className="flex w-full flex-col rounded-[22px] bg-[#071426] px-[30px] pb-[30px] pt-[29px]">
          <div className="flex flex-col gap-[17.1px]">
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#22b8d6]">
              Pricing &amp; Enterprise · Platform &amp; Usage Model
            </p>
            <h1 className="font-manrope text-[38px] font-extrabold leading-[41.8px] tracking-[-0.76px] text-white">
              Understand
              <br />
              Zoiko iD’s
              <br />
              platform and
              <br />
              usage
              <br />
              considerations.
            </h1>
            <p className="max-w-[620px] font-manrope text-[16px] leading-[25.6px] text-[#cbd5e1]">
              Explore the identity, delegated-authority and evidence capabilities that can shape an enterprise
              evaluation. Actual usage definitions, supported functionality and commercial terms are confirmed
              through an approved proposal.
            </p>
          </div>
          <div className="flex flex-col gap-[18px] pt-[30px]">
            <div className="flex flex-col items-start gap-[12px]">
              <Link
                href="/security-contact"
                className="flex min-h-[46px] items-center whitespace-nowrap rounded-[10px] border border-solid border-[#2563eb] bg-[#2563eb] px-[22px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Talk to an identity expert
              </Link>
              <Link
                href="#concepts"
                className="flex min-h-[46px] items-center whitespace-nowrap rounded-[10px] border border-solid border-white px-[22px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore the platform
              </Link>
            </div>
            <p className="max-w-[620px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#94a3b8]">
              View developer docs → <span className="text-[#64748b]">(route pending)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="relative h-[238px] min-h-[210px] w-full overflow-hidden rounded-[22px]">
            <Image
              src="/platform-usage-model/mobile-hero-visual.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
            <p className="font-manrope text-[15px] font-bold leading-[24px] text-[#2563eb]">
              Conceptual model, not a rate card.
            </p>
            <p className="pt-[8px] font-manrope text-[15px] leading-[24px] text-[#334155]">
              Zoiko iD organizes programmable identity, delegated authority and evidence capabilities. This page
              outlines factors to discuss during evaluation. Commercial usage units, availability and pricing
              require an approved proposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
