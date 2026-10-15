import Image from "next/image";
import Link from "next/link";

export default function ChangelogFinalCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-12 sm:px-10 lg:px-[105px] lg:py-[48px]">
      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[32px] bg-[#071426] p-8 sm:p-12 lg:p-[80px]">
        {/* Background Image and Gradient Layers */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/changelog/final-cta-bg.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1250px, 100vw"
            className="object-cover object-[center_right] sm:object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.88)_0%,rgba(7,20,38,0.76)_40%,rgba(13,31,53,0.28)_75%,rgba(34,184,214,0.08)_100%)]" />
          <div className="absolute -right-20 top-0 h-[570px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.12)_0%,rgba(34,184,214,0)_70%)] blur-[60px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="max-w-[998px] font-dm-serif text-3xl font-normal leading-[1.15] text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Need guidance on a specific change?
          </h2>

          <p className="mt-[20px] max-w-[800px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#CBD5E1] sm:text-[17.6px] sm:leading-[29.92px]">
            Talk to an identity expert about the change that affects your integration. We will
            <br className="hidden sm:inline" />
            confirm what applies to your environment.
          </p>

          <div className="mt-[40px] flex flex-wrap items-center justify-center gap-[16px]">
            <Link
              href="#contact"
              className="inline-flex h-[54px] items-center gap-[10px] rounded-[6px] bg-[#2563EB] px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors duration-200 hover:bg-blue-700"
            >
              <Image
                src="/changelog/icons/icon_361_2111.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 brightness-0 invert"
              />
              Talk to an identity expert
            </Link>

            <Link
              href="/apis-integrations"
              className="inline-flex h-[54px] items-center gap-[10px] rounded-[6px] border border-white-solid bg-transparent px-[26px] font-manrope text-[15.2px] font-bold leading-[25.84px] text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
            >
              <Image
                src="/changelog/icons/icon_361_2116.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0 brightness-0 invert"
              />
              View API Reference
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
