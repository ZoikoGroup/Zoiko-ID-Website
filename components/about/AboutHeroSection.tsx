import Image from "next/image";

import { CtaButtons } from "./shared";

export default function AboutHeroSection() {
  return (
    // Negative top margin pulls the hero up behind the floating header;
    // matches the header height at each breakpoint (see Header.tsx).
    <section className="relative -mt-20 flex min-h-[560px] items-center justify-center overflow-hidden bg-azure-9 px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[664px] lg:pt-[180px]">
      <Image
        src="/about-us/hero-bg.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex w-full max-w-[694px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-[2.75rem] font-normal leading-[1.05] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[74.6px]">
          Trust requires more than identity.
        </h1>

        <p className="max-w-[577px] pt-2 font-manrope text-base font-normal leading-7 text-[#CBD5E1]">
          Zoiko iD helps systems establish who actors are, what they&apos;re
          authorized to do, and why decisions can be trusted. All with evidence
          that can be reviewed later.
        </p>

        <CtaButtons />
      </div>
    </section>
  );
}
