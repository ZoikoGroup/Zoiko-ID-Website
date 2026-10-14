import Image from "next/image";
import Link from "next/link";

export default function ThirdPartyCtaSection() {
  return (
    <section id="final-cta" className="bg-white-solid px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] bg-azure-9 px-6 py-16 sm:px-12 sm:py-20 lg:p-20">
        {/* Background Graphic */}
        <Image
          src="/third-party-access/cta-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1250px, 100vw"
          className="object-cover opacity-80"
        />

        {/* Gradient Overlay & Accent Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(159deg,#071426_0%,#0D1F35_75%,rgba(34,184,214,0.1)_100%)] opacity-90" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.14)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        {/* Content */}
        <div className="relative flex w-full max-w-[880px] flex-col items-center gap-6 text-center sm:gap-8">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Ready to secure third-party access?
          </h2>

          <p className="max-w-[760px] font-manrope text-base font-normal leading-relaxed text-[#CBD5E1] sm:text-[17px] sm:leading-[30px]">
            Whether you&apos;re onboarding consultants, integrating SaaS
            services, or responding to incidents—bind identity to authority.
            Evaluate every action. Revoke instantly. Preserve the evidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-blue-600 shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)]"
            >
              <Image
                src="/third-party-access/cta-talk-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Talk to our team
            </Link>

            <Link
              href="/apis-integrations"
              className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/third-party-access/cta-guide-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              View implementation guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
