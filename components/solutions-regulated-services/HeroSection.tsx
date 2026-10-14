import Image from "next/image";
import Link from "next/link";
import {
  ScreenPresentationIcon,
  DocumentArchitectureIcon,
  EyebrowShieldCheckIcon,
} from "./icons";

export default function HeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-linear-to-b from-azure-9 via-azure-13 to-azure-11 px-5 pb-16 pt-32 sm:-mt-24 sm:px-10 sm:pt-40 lg:-mt-[116px] lg:min-h-[640px] lg:px-16 lg:pb-24 lg:pt-[175px] xl:px-20">
      {/* Background Photo */}
      <Image
        src="/solutions-regulated-services/rs1.png"
        alt="Compliance-ready identity and delegated authority team"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-[0.72] contrast-[1.05]"
      />

      {/* Dark Tint Overlay with high transparency so photo stays clearly visible */}
      <div className="absolute inset-0 bg-[#071426]/60 backdrop-blur-[0.5px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,20,38,0.4)_0%,rgba(7,20,38,0.78)_100%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1020px] flex-col items-start text-left lg:items-center lg:text-center">
        {/* Mobile Eyebrow (hidden on desktop) */}
        <div className="mb-5 flex items-center gap-2.5 lg:hidden">
          <EyebrowShieldCheckIcon className="size-4 shrink-0 text-[#22B8D6]" />
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#22B8D6] leading-tight">
            SOLUTIONS / DELEGATION /
            <br />
            REGULATED SERVICES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-dm-serif text-[34px] font-normal leading-[1.12] tracking-tight text-white-solid sm:text-5xl lg:text-[62px] lg:leading-[70px]">
          <span className="lg:hidden">
            Compliance-ready
            <br />
            identity and
            <br />
            delegated
            <br />
            authority for
            <br />
            regulated sectors.
          </span>
          <span className="hidden lg:inline">
            Compliance-ready identity
            <br />
            and delegated authority for
            <br />
            regulated sectors.
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mt-5 max-w-[720px] font-manrope text-[14.5px] font-normal leading-relaxed text-slate-300 sm:text-base lg:mt-6 lg:text-[16.5px]">
          Govern identity, authorization, and evidence across regulated
          domains—finance, healthcare, government, energy. No unsupported claims.
          Clear audit trail. Policy-driven decisions.
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-8">
          <Link
            href="#assessment"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#2563EB] px-6 py-3.5 font-manrope text-[14.5px] font-semibold text-white-solid shadow-sm transition-colors duration-200 hover:bg-blue-600 sm:w-auto sm:rounded-md lg:px-7"
          >
            <ScreenPresentationIcon className="size-[18px] text-white" />
            <span className="lg:hidden">Request compliance assessment</span>
            <span className="hidden lg:inline">Explore compliance assessment</span>
          </Link>

          <Link
            href="#architecture"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-[#0c1829]/40 px-6 py-3.5 font-manrope text-[14.5px] font-semibold text-white-solid backdrop-blur-xs transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:rounded-md lg:px-7"
          >
            <DocumentArchitectureIcon className="size-[18px] text-white" />
            Review architecture
          </Link>
        </div>
      </div>
    </section>
  );
}
