import Image from "next/image";
import Link from "next/link";

export default function ThirdPartyHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(93deg,#071426_0%,#0D1F35_50%,#0A1A2E_100%)] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 xl:px-40 xl:py-[100px]">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-10 h-[600px] w-[800px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[50px] lg:h-[800px] lg:w-[1100px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="flex w-full flex-1 flex-col items-start gap-5 lg:max-w-[580px]">
          <h1 className="font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[82.8px]">
            Trusted on behalf-of access,{" "}
            <span className="block">auditable every step.</span>
          </h1>

          <p className="max-w-[500px] font-manrope text-base font-normal leading-[28px] text-[#CBD5E1] sm:text-[17.6px] sm:leading-[30.8px]">
            When partners, consultants, or services need to act for your
            organization—bind their identity to bounded authority. Evaluate
            every action. Revoke instantly. Preserve complete evidence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 sm:gap-5">
            <Link
              href="#trust-gap"
              className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-blue-600 shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)]"
            >
              <Image
                src="/third-party-access/hero-how-it-works-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              How it works
            </Link>

            <Link
              href="#final-cta"
              className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/third-party-access/hero-talk-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Talk to an expert
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Graphic Preview */}
        <div className="relative flex w-full flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] shadow-[0px_20px_48px_0px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <Image
              src="/third-party-access/hero-identity-infrastructure.webp"
              alt="Enterprise identity infrastructure"
              width={596}
              height={434}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
