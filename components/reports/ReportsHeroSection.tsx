import Image from "next/image";
import Link from "next/link";

export default function ReportsHeroSection() {
  return (
    <section
      className="relative -mt-20 overflow-hidden px-6 pb-20 pt-36 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[640px] lg:px-20 lg:pb-24 lg:pt-[180px] xl:px-40"
      style={{
        backgroundColor: "#071426",
        backgroundImage: `linear-gradient(154deg, rgba(7, 20, 38, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%), url('/reports/hero-bg.webp')`,
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

      <div className="relative mx-auto flex w-full max-w-[800px] flex-col items-center gap-6 text-center">
        {/* Main Heading */}
        <h1 className="font-dm-serif text-4xl font-normal leading-[1.08] text-white-solid sm:text-6xl lg:text-[72px] lg:leading-[64.4px]">
          Understand the
          <span className="block">assurance evidence</span>
          <span className="block">behind the controls.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[577px] font-manrope text-base font-normal leading-7 text-[#CBD5E1] sm:text-[17px] sm:leading-[27.2px]">
          Clear scope, currency and access rules. See which reports are
          available, request access to restricted documents, and understand
          what each assessment covers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-5 sm:gap-5">
          <Link
            href="#available-reports"
            className="inline-flex items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)]"
          >
            <Image
              src="/reports/hero-view-reports.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            View available reports
          </Link>

          <Link
            href="#request-access"
            className="inline-flex items-center gap-2.5 rounded-[6px] border border-white-solid bg-transparent px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10"
          >
            <Image
              src="/reports/hero-request-access.svg"
              alt=""
              width={18}
              height={18}
              className="brightness-0 invert"
            />
            Request access
          </Link>
        </div>
      </div>
    </section>
  );
}
