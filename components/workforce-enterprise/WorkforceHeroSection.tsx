import Image from "next/image";
import Link from "next/link";

export default function WorkforceHeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-[580px] items-center justify-center overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[640px] lg:px-20 lg:pb-[105px] lg:pt-[175px]">
      {/* Background Image with exact positioning and muted neutral-dark overlay to reduce blue shade */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/workforce-enterprise/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(154deg,rgba(5,13,22,0.78)_0%,rgba(10,18,28,0.82)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1048px] flex-col items-center gap-5 text-center">
        <h1 className="font-dm-serif text-4xl font-normal leading-[1.12] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
          Identity, authority, and
          <br />
          bounded access for your
          <br />
          workforce.
        </h1>

        <p className="max-w-[700px] font-manrope text-base font-normal leading-[1.6] text-geyser sm:text-[17px] sm:leading-[27.2px]">
          Connect your enterprise identity infrastructure with verifiable organization context, role-
          <br />
          based authority, and continuous trust evaluation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
          <Link
            href="#workforce-lifecycle"
            className="inline-flex items-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
          >
            <Image
              src="/workforce-enterprise/hero-explore-icon.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            Explore Integration
          </Link>
          <Link
            href="#final-cta"
            className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10"
          >
            <Image
              src="/workforce-enterprise/hero-expert-icon.svg"
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
