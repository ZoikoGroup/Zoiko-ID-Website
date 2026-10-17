import Image from "next/image";
import Link from "next/link";

export default function AuditHeroSection() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[640px] lg:px-20 lg:pb-24 lg:pt-[180px] xl:px-40"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(154deg, rgba(7, 20, 38, 0.90) 0%, rgba(15, 23, 42, 0.94) 100%), url('/audit-reports/hero-bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Cyan Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
      />

      <div className="relative mx-auto flex w-full max-w-[820px] flex-col items-center gap-6 text-center">
        {/* Main Heading */}
        <h1 className="font-dm-serif text-4xl font-normal leading-[1.08] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[64.4px]">
          Privacy boundaries
          <span className="block">for identity and</span>
          <span className="block">delegated authority.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[694px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
          Privacy choices govern what is collected, disclosed, accessed and kept
          as reviewable evidence across the identity and authority lifecycle.
          Zoiko iD is designed to disclose only the minimum claims a decision
          needs, to restrict access by policy, and to keep provenance for each
          record.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-5 sm:gap-5">
          <Link
            href="#enquiry-section"
            className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)] hover:-translate-y-0.5"
          >
            Talk to an identity expert
          </Link>

          <Link
            href="#architecture-section"
            className="inline-flex items-center justify-center rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10 hover:-translate-y-0.5"
          >
            Explore technical architecture
          </Link>
        </div>
      </div>
    </section>
  );
}
