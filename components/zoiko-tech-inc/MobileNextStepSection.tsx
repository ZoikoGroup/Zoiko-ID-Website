import Image from "next/image";
import Link from "next/link";

export default function MobileNextStepSection() {
  return (
    <section id="next-step" className="lg:hidden w-full bg-[#2563eb]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[70px] px-[22px] py-[105px]">
        <div className="flex w-full flex-col items-start gap-[12px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#67e8f9]">
            Next step
          </p>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-white">
            <span>Explore Zoiko iD, or contact<br />
the company.</span>
          </h2>
          <p className="pt-[1.085px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#c9d3e3]">
            <span>Start with the platform to understand the identity,<br />
delegated-authority and evidence capabilities. For<br />
corporate questions, use the routed contact<br />
options.</span>
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[14px]">
            <Link
              href="/apis-integrations"
              className="flex min-h-[46px] items-center rounded-[6px] border border-solid border-[#2563eb] bg-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] whitespace-nowrap text-[#2563eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
            >
              Explore Zoiko iD
            </Link>
            <Link
              href="/security-contact"
              className="flex min-h-[46px] items-center rounded-[6px] border border-solid border-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
            >
              Contact the Company
            </Link>
          </div>
        </div>
        <div className="relative h-[340px] w-full overflow-hidden rounded-[6px]">
          <Image
            src="/zoiko-tech-inc/mobile-final-cta-bg.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 516px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
