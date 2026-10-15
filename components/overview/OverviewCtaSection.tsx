import Image from "next/image";
import Link from "next/link";

export default function OverviewCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[32px] bg-[linear-gradient(159deg,#071426_0%,#0D1F35_75%,rgba(34,184,214,0.1)_100%)] p-8 sm:p-14 lg:p-20 shadow-2xl">
        {/* Background Image Layer */}
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="/overview/cta-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Radial Blur Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.15)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        <div className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center gap-6 text-center">
          {/* CTA Heading */}
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px]">
            Ready to build with Zoiko ID?
          </h2>

          {/* Subtitle */}
          <p className="max-w-[700px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17px]">
            Whether you&apos;re building SSO, delegated access, AI agent identity, or compliance infrastructure—we&apos;re here to help. Choose your next step:
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
            <Link
              href="/quickstarts"
              className="inline-flex items-center gap-2.5 rounded-[6px] bg-azure-48 px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.4)]"
            >
              <Image
                src="/overview/cta-quickstart-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Start a quickstart
            </Link>

            <Link
              href="/apis-integrations"
              className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid/30 bg-white/[0.04] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid backdrop-blur-sm transition-all duration-200 hover:border-white-solid hover:bg-white-solid/10"
            >
              <Image
                src="/overview/cta-docs-icon.svg"
                alt=""
                width={18}
                height={18}
                className="brightness-0 invert"
              />
              Read the Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
