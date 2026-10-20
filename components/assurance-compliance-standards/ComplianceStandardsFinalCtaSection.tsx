import Image from "next/image";
import Link from "next/link";

export default function ComplianceStandardsFinalCtaSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-12 lg:px-20 lg:py-12 xl:px-[105px]">
      <div
        className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[32px] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-[130px] shadow-xl"
        style={{
          backgroundColor: "#071426",
          background:
            "linear-gradient(159deg, #071426 0%, #0D1F35 70%, #08172b 100%)",
        }}
      >
        {/* Background Image Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/assurance-compliance-standards/img-dd2db9d8b61f96713be8596c70976334be06e22b.png"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="(min-width: 1250px) 1250px, 100vw"
          />
        </div>

        {/* Top-Right Radial Glow Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 z-0 h-[625px] w-[625px] rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(34, 184, 214, 0.16) 0%, rgba(34, 184, 214, 0) 70%)",
          }}
        />

        {/* CTA Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center gap-[15.3px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#FFFFFF] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Explore the technical documentation, or talk to an identity expert.
          </h2>

          <p className="max-w-[600px] font-manrope text-[15px] font-normal leading-[25px] text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
            Developers can start with the developer documentation.
            <br className="hidden sm:block" />
            {" "}Enterprise teams can discuss a scoped review with an identity
            <br className="hidden sm:block" />
            {" "}expert.
          </p>

          {/* Feature Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3.5 pb-2.5">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Image
                src="/assurance-compliance-standards/icon-501_627.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-[14px] font-normal text-[#E2E8F0]">
                Developer docs
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Image
                src="/assurance-compliance-standards/icon-501_633.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-[14px] font-normal text-[#E2E8F0]">
                Trust Center
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
            <Link
              href="/api-reference"
              className="inline-flex min-w-[180px] items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold leading-[24px] text-[#FFFFFF] shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-600"
            >
              View developer docs
            </Link>

            <Link
              href="#expert"
              className="inline-flex min-w-[224px] items-center justify-center rounded-[6px] border border-[#FFFFFF] bg-transparent px-7 py-3.5 font-manrope text-[15px] font-bold leading-[24px] text-[#FFFFFF] transition-colors hover:bg-white/10"
            >
              Talk to an identity expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
