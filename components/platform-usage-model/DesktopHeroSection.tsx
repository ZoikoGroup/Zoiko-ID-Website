import Link from "next/link";
import Image from "next/image";

export default function DesktopHeroSection() {
  return (
    <section className="relative hidden w-full -mt-[116px] overflow-hidden px-[160px] pb-[64px] pt-[180px] lg:block">
      <div aria-hidden className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(136.55deg, rgb(7, 20, 38) 0%, rgb(15, 23, 42) 100%)" }}
        />
        <Image
          src="/platform-usage-model/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[840px] flex-col items-center gap-[20px] pt-[3px]">
        <h1 className="w-full text-center font-dm-serif text-[72px] font-normal leading-[73.44px] text-white">
          Understand Zoiko iD’s platform and usage considerations.
        </h1>
        <p className="max-w-[694px] pt-[8px] text-center font-manrope text-[16px] leading-[25.6px] text-[#cbd5e1]">
          Explore the identity, delegated-authority and evidence capabilities that can shape an enterprise evaluation. Actual usage definitions, supported functionality and commercial terms are confirmed through an approved proposal.
        </p>
        <div className="flex flex-wrap items-start justify-center gap-[20px] pt-[21px]">
          <Link
            href="/security-contact"
            className="flex items-center rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="#concepts"
            className="flex items-center rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
