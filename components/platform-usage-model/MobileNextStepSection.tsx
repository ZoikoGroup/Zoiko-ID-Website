import Image from "next/image";
import Link from "next/link";

export default function MobileNextStepSection() {
  return (
    <section className="lg:hidden w-full px-[33px] pb-[60px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center gap-[50px] rounded-[28px] bg-[#071426] p-[30px]">
        <div className="flex w-full flex-col items-start">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#22b8d6]">
            Next step
          </p>
          <h2 className="w-full max-w-[220px] font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-white">
            Talk to an identity expert about your usage considerations.
          </h2>
          <p className="w-full max-w-[264px] pt-[12px] font-manrope text-[15px] font-normal leading-[24px] text-[#cbd5e1]">
            Describe your use case. An expert will confirm the capability scope and the commercial steps that apply to you.
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-[12px] pt-[22px]">
            <Link
              href="/security-contact"
              className="flex min-h-[46px] items-center whitespace-nowrap rounded-[10px] border border-solid border-[#2563eb] bg-[#2563eb] px-[22px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="/platform-usage-model#concepts"
              className="flex min-h-[46px] items-center whitespace-nowrap rounded-[10px] border border-solid border-white px-[22px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore the platform
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/platform-usage-model/mobile-final-cta-bg.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 500px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
