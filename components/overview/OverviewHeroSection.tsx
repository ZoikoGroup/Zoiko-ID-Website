import Image from "next/image";
import Link from "next/link";

export default function OverviewHeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-[linear-gradient(154deg,#071426_0%,#0F172A_100%)] px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[640px] lg:px-20 lg:pb-24 lg:pt-[180px] xl:px-40">
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-luminosity">
        <Image
          src="/overview/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Subtle Cyan Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1048px] flex-col items-center gap-6 text-center">
        {/* Main Heading */}
        <h1 className="font-dm-serif text-4xl font-normal leading-[1.15] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
          Build governed identity and
          <span className="block">delegated access into</span>
          <span className="block">your applications.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[900px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
          Explore how identity, bounded authority, policy decisions, continuous trust and evidence connect across existing enterprise systems. Choose the integration path that fits your architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
          <Link
            href="/quickstarts"
            className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)]"
          >
            <Image
              src="/overview/hero-quickstarts-icon.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            Explore quickstarts
          </Link>

          <Link
            href="/apis-integrations"
            className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid/30 bg-white/[0.04] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid backdrop-blur-sm transition-all duration-200 hover:border-white-solid hover:bg-white-solid/10"
          >
            <Image
              src="/overview/hero-docs-icon.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            View documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
