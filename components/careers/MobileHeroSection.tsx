import Image from "next/image";
import Link from "next/link";

export default function MobileHeroSection() {
  return (
    <section className="w-full px-[22px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="flex w-full flex-col items-start gap-[16.7px]">
          <div className="flex h-[19.8px] w-full items-center gap-[12px]">
            <span className="h-[2px] w-[36px] shrink-0 bg-[#22b8d6]" aria-hidden="true" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
              Company / Careers
            </p>
          </div>
          <h1 className="w-full font-dm-serif text-[42px] font-normal leading-[43.68px] tracking-[-0.42px] text-[#0b1b33] [word-break:break-word]">
            Build trustworthy <br />
            identity <br />
            infrastructure
          </h1>
          <p className="w-full max-w-[700px] pb-[0.75px] pt-[6.36px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82] [word-break:break-word]">
            Zoiko iD is a Zoiko Tech Inc. platform <br />
            focused on establishing identity, governing <br />
            authority and preserving evidence across <br />
            people, organizations, services and AI <br />
            agents. Explore the work and, where <br />
            positions are publicly approved, <br />
            opportunities to contribute.
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[19.3px]">
            <Link
              href="#themes"
              className="inline-flex min-h-[58.75px] items-center gap-[12px] rounded-[999px] border border-solid border-transparent bg-[#1d4ed8] px-[28px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
            >
              Explore Zoiko iD
              <Image src="/careers/mobile-icon-arrow.svg" width={18} height={18} alt="" />
            </Link>
            <Link
              href="/about-us"
              className="flex min-h-[50px] items-center whitespace-nowrap rounded-[999px] border border-solid border-[#0b1b33] px-[28px] py-[16px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1b33] focus-visible:ring-offset-2"
            >
              About Zoiko iD
            </Link>
          </div>
          <div className="flex w-full items-center gap-[10px] pt-[5.02px]">
            <Image src="/careers/mobile-icon-info.svg" width={16} height={16} alt="" className="shrink-0" />
            <p className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
              No positions are listed right now. “View open roles” <br />
              appears only when a verified role is published.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-[14px]">
          <div className="grid h-[396px] w-full grid-cols-2 grid-rows-[200px_180px] gap-[16px]">
            <div className="relative col-span-2 overflow-hidden rounded-[18px]">
              <Image
                src="/careers/mobile-hero-whiteboard.webp"
                alt="Team working at a whiteboard"
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-[18px]">
              <Image
                src="/careers/mobile-hero-laptop.webp"
                alt="Person working on a laptop"
                fill
                sizes="(max-width: 560px) 50vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-[18px]">
              <Image
                src="/careers/mobile-hero-code.webp"
                alt="Code on a screen"
                fill
                sizes="(max-width: 560px) 50vw, 280px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[14px] shadow-[0px_14px_15px_rgba(11,27,51,0.14)]">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/careers/mobile-icon-layers.svg" width={21} height={21} alt="" />
            </div>
            <div className="min-w-0">
              <p className="font-manrope text-[14px] font-bold leading-[23.1px] text-[#0b1b33]">
                Work themes, not vacancies
              </p>
              <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                Identity, authority and evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
