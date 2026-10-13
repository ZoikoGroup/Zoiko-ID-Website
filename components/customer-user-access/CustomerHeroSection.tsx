import Image from "next/image";
import Link from "next/link";

export default function CustomerHeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-[560px] items-center justify-center overflow-hidden bg-azure-9 px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[664px] lg:pt-[180px]">
      <Image
        src="/customer-user-access/hero-bg.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(154deg,rgba(7,20,38,0.85)_0%,rgba(15,23,42,0.92)_100%)]" />

      <div className="relative flex w-full max-w-[1060px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-[2.5rem] font-normal leading-[1.08] text-white-solid sm:text-6xl lg:text-7xl lg:leading-[82.8px]">
          <span className="block">Give customers access that</span>
          <span className="block">respects identity, context, and</span>
          <span className="block">authority.</span>
        </h1>

        <p className="max-w-[620px] pt-2 font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
          Design customer-facing access around who is signing in,
          <br className="hidden sm:inline" />
          {" "}what application or organization they belong to, what
          <br className="hidden sm:inline" />
          {" "}actions are allowed, and what happens when trust changes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <Link
            href="#buyer-problems"
            className="inline-flex items-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
          >
            <Image
              src="/customer-user-access/icons/hero-explore.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            Explore Actors
          </Link>
          <Link
            href="#final-cta"
            className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10"
          >
            <Image
              src="/customer-user-access/icons/hero-expert.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            Talk to expert
          </Link>
        </div>
      </div>
    </section>
  );
}
