import Image from "next/image";
import Link from "next/link";

export default function SecurityContactHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-14 xl:px-[160px] lg:py-[105px]">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-[70px]">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-7 w-full lg:max-w-[580px]">
            <div className="flex flex-col gap-[11px]">
              <h1 className="font-[family-name:var(--font-dm-serif-display-family)] text-4xl sm:text-5xl lg:text-[72px] lg:leading-[70.4px] text-[#0B1B33] font-normal tracking-tight">
                Contact the<br />
                Zoiko iD security<br />
                team.
              </h1>
              <div className="pt-[11px]">
                <p className="max-w-[550px] font-[family-name:var(--font-manrope-family)] text-[16px] leading-[27.2px] text-[#444444] font-normal">
                  Use this page to find the appropriate Zoiko iD security route for an enterprise enquiry, potential security concern or trust-related question. Suspected vulnerabilities use Responsible Disclosure; service condition is reported through Availability / Status. Contact methods and response processes appear only when confirmed by Zoiko iD security operations.
                </p>
              </div>
            </div>

            {/* Action Buttons: 2 buttons in 1 line only */}
            <div className="flex flex-nowrap items-center gap-3 sm:gap-[14px] pt-[17px]">
              <a
                href="#intents"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[8px] bg-[#2563EB] px-4 sm:px-6 py-[14px] font-[family-name:var(--font-manrope-family)] text-[13.5px] sm:text-[15px] font-bold leading-[24px] text-white shadow-sm transition-colors hover:bg-[#1d4ed8]"
              >
                Choose a security enquiry type
              </a>
              <Link
                href="#routing-cards"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[8px] border border-[#2563EB] bg-white px-4 sm:px-6 py-[14px] font-[family-name:var(--font-manrope-family)] text-[13.5px] sm:text-[15px] font-bold leading-[24px] text-[#2563EB] transition-colors hover:bg-blue-50"
              >
                Report a suspected vulnerability
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual & Badge */}
          <div className="relative shrink-0 w-full max-w-[461px] lg:w-[461px]">
            <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[428px] overflow-hidden rounded-[24px]">
              <Image
                src="/security-contact/hero-datacenter-5ca11a.png"
                alt="Zoiko iD Security Team"
                fill
                sizes="(max-width: 1024px) 100vw, 461px"
                className="object-cover"
                priority
              />

              {/* Floating Badge (inside the hero image container at bottom-left) */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 flex items-center gap-[10px] rounded-[12px] bg-white px-4 py-[11.5px] shadow-[0px_8px_24px_rgba(7,20,38,0.12)]">
                <Image
                  src="/security-contact/hero-badge-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-bold leading-[22.4px] text-[#0B1B33] whitespace-nowrap">
                  Route and ownership, not a live dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
