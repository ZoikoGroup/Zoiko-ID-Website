import Image from "next/image";
import Link from "next/link";

export default function AuthorityCtaSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div
        className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center overflow-hidden rounded-[32px] px-8 py-20 text-center shadow-xl sm:py-28 lg:py-[130px]"
        style={{
          backgroundColor: "#071426",
          backgroundImage: `linear-gradient(159deg, rgba(7, 20, 38, 0.95) 0%, rgba(13, 31, 53, 0.92) 75%, rgba(34, 184, 214, 0.15) 100%), url('/authority-explainers/final-cta-bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Glow behind */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[80px]"
        />

        <div className="relative z-10 flex w-full max-w-[820px] flex-col items-center gap-6">
          {/* Main Heading */}
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Keep reading, or move to the architecture.
          </h2>

          {/* Subtitle */}
          <p className="max-w-[600px] font-manrope text-base font-normal leading-[25.6px] text-[#CBD5E1]">
            Read the other explainers, follow the architecture guides for system context, or talk to an identity expert about your use case.
          </p>

          {/* Tag links */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="#paths-section"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0]/30 bg-white-solid/10 px-4 py-2 font-manrope text-sm text-[#E2E8F0] backdrop-blur-xs transition-colors hover:bg-white-solid/20"
            >
              <Image
                src="/authority-explainers/cta-arrow-1.svg"
                alt=""
                width={14}
                height={14}
                className="size-3.5"
              />
              <span>Architecture Guides</span>
            </Link>

            <Link
              href="#paths-section"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0]/30 bg-white-solid/10 px-4 py-2 font-manrope text-sm text-[#E2E8F0] backdrop-blur-xs transition-colors hover:bg-white-solid/20"
            >
              <Image
                src="/authority-explainers/cta-arrow-2.svg"
                alt=""
                width={14}
                height={14}
                className="size-3.5"
              />
              <span>Developer documentation</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
            <Link
              href="#readers-section"
              className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)] hover:-translate-y-0.5"
            >
              Explore explainers
            </Link>

            <Link
              href="#handoffs"
              className="inline-flex items-center justify-center rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10 hover:-translate-y-0.5"
            >
              Talk to an identity expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
