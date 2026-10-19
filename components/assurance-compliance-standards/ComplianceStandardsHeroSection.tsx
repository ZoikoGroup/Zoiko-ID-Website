import Image from "next/image";
import Link from "next/link";

export default function ComplianceStandardsHeroSection() {
  return (
    <section className="relative -mt-20 sm:-mt-24 lg:-mt-[116px] w-full overflow-hidden bg-[#071426] px-6 pt-32 sm:pt-40 lg:pt-[180px] pb-20 lg:px-20 lg:pb-24 xl:px-40">
      {/* Background Image with Figma's Exact Blue Shade Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#071426]">
        <Image
          src="/assurance-compliance-standards/img-571738b587b84772ad67bd8e15fd0ef793eae793.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(154deg, rgba(7, 20, 38, 0.82) 0%, rgba(15, 23, 42, 0.84) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[946px] flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="w-full font-dm-serif text-4xl font-normal leading-[1.1] text-[#FFFFFF] sm:text-6xl lg:text-[72px] lg:leading-[64.4px]">
          Understand the standards and assurance boundaries behind Zoiko iD.
        </h1>

        {/* Subtitle with Verbatim Copy and Explicit Line Breaks */}
        <p className="mt-5 w-full font-manrope text-[15px] font-normal leading-[24px] text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
          Explore the identity, authentication, delegated authority and evidence
          <br className="hidden md:block" />
          {" "}standards relevant to Zoiko iD’s architecture. Review implementation
          <br className="hidden md:block" />
          {" "}scope and published assurance information where verified, and follow
          <br className="hidden md:block" />
          {" "}authoritative technical or Trust Center sources for details.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 pt-[21.1px]">
          <Link
            href="#standards-browser"
            className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold leading-[24px] text-[#FFFFFF] transition-colors hover:bg-blue-600"
          >
            Explore standards
          </Link>

          <Link
            href="/reports"
            className="inline-flex items-center justify-center rounded-[6px] border border-[#FFFFFF] bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold leading-[24px] text-[#FFFFFF] transition-colors hover:bg-white/10"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}
