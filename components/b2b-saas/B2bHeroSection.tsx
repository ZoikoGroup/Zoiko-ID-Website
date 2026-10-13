import Image from "next/image";
import Link from "next/link";

export default function B2bHeroSection() {
  return (
    <section className="relative -mt-20 flex min-h-[580px] items-center overflow-hidden bg-linear-to-r from-azure-9 via-azure-13 to-azure-11 px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[680px] lg:px-20 lg:pt-[180px]">
      {/* Figma Radial Blur Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 h-[700px] w-[1400px] rounded-[523px] bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[50px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Left Column: Copy & Actions */}
        <div className="flex max-w-[620px] flex-col gap-6 text-center lg:text-left">
          <h1 className="font-dm-serif text-[2.5rem] font-normal leading-[1.08] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
            B2B identity
            <br />
            for organization,
            <br />
            users, and delegated access
          </h1>

          <p className="max-w-[466px] font-manrope text-base font-normal leading-7 text-geyser sm:text-[17.6px] sm:leading-[30.8px]">
            Design multi-organization access around distinct
            <br />
            organization identities, memberships, representatives, and bounded
            authority—without treating sign-in as permission.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-2 lg:justify-start">
            <Link
              href="#actor-classes"
              className="inline-flex items-center gap-2.5 rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-azure-53"
            >
              <Image
                src="/b2b-saas/icons/hero-explore.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Explore model
            </Link>
            <Link
              href="#final-cta"
              className="inline-flex items-center gap-2.5 rounded-md px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/b2b-saas/icons/hero-expert.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="relative aspect-[596/434] w-full max-w-[596px] shrink-0 overflow-hidden rounded-[24px] border border-white/10 shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)] lg:h-[434px] lg:w-[596px] lg:-translate-x-[110px]">
          <Image
            src="/b2b-saas/hero-identity.webp"
            alt="Enterprise identity infrastructure"
            fill
            priority
            sizes="(min-width: 1024px) 596px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
