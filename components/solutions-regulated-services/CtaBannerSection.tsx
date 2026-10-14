import Image from "next/image";
import Link from "next/link";
import {
  PhoneCallIcon,
  FileDownloadIcon,
  WhiteCircleCheckmarkIcon,
  CodeTerminalIcon,
} from "./icons";

export default function CtaBannerSection() {
  return (
    <section className="bg-[#071426] px-0 py-0 sm:bg-white sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center overflow-hidden bg-azure-9 px-5 py-14 text-center shadow-xl sm:rounded-[32px] sm:px-12 sm:py-20 lg:min-h-[440px] lg:justify-center">
        {/* Background Photo (rs9.png) */}
        <Image
          src="/solutions-regulated-services/rs9.png"
          alt="Team collaborating on compliance-ready identity and regulated authority"
          fill
          sizes="(min-width: 1440px) 1240px, 100vw"
          className="object-cover object-center brightness-75"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(159deg,rgba(7,20,38,0.92)_0%,rgba(13,31,53,0.88)_75%,rgba(34,184,214,0.14)_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-[780px] flex-col items-center gap-5">
          {/* Mobile Checkmark Badge */}
          <div className="mb-1 sm:hidden">
            <WhiteCircleCheckmarkIcon className="size-8" />
          </div>

          <h2 className="font-dm-serif text-[28px] font-normal leading-[1.14] text-white-solid sm:text-4xl lg:text-[48px] lg:leading-[56px]">
            <span className="sm:hidden">
              Ready to
              <br />
              implement compliance-
              <br />
              ready identity?
            </span>
            <span className="hidden sm:inline">
              Ready to implement compliance-ready
              <br />
              identity?
            </span>
          </h2>

          <p className="max-w-[640px] font-manrope text-[13.5px] font-normal leading-relaxed text-slate-300 sm:text-base">
            Let&apos;s discuss your regulatory requirements, architecture, and
            implementation timeline. We&apos;ll help you build identity,
            authority, and evidence infrastructure that your auditors will trust.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4 sm:pt-3">
            <Link
              href="#assessment"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-azure-48 px-6 py-3.5 font-manrope text-[14px] font-bold text-white-solid shadow-xs transition-colors duration-200 hover:bg-azure-53 sm:w-auto sm:rounded-md sm:px-7 sm:text-[15px]"
            >
              <PhoneCallIcon className="size-[17px] text-white" />
              Request compliance assessment
            </Link>

            <Link
              href="#whitepaper"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#0c1829]/60 px-6 py-3.5 font-manrope text-[14px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white/30 backdrop-blur-xs transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:rounded-md sm:px-7 sm:text-[15px]"
            >
              <FileDownloadIcon className="size-[17px] text-white" />
              Download architecture whitepaper
            </Link>

            {/* 3rd Button: Mobile Only */}
            <Link
              href="#api-docs"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#0c1829]/60 px-6 py-3.5 font-manrope text-[14px] font-bold text-white-solid outline-1 -outline-offset-1 outline-white/30 backdrop-blur-xs transition-colors duration-200 hover:bg-white/10 sm:hidden"
            >
              <CodeTerminalIcon className="size-[17px] text-white" />
              View API documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
