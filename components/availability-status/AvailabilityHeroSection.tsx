import Image from "next/image";
import Link from "next/link";

export default function AvailabilityHeroSection() {
  return (
    <section className="bg-white-solid px-6 pt-10 pb-16 sm:px-10 sm:pt-14 lg:px-20 lg:pt-16 lg:pb-20 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-16 lg:gap-20">
        {/* --- Upper Hero: Heading + Description + CTAs + Hero Image --- */}
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-14">
          {/* Left Column: Heading, Body, Buttons, Notice */}
          <div className="flex w-full flex-col gap-6 lg:max-w-[550px]">
            <h1 className="font-dm-serif text-4xl font-normal leading-[1.08] text-[#0b1b33] sm:text-6xl lg:text-[72px] lg:leading-[70px]">
              Availability / Status
            </h1>

            <p className="font-manrope text-base font-normal leading-7 text-[#444444] sm:text-[16px] sm:leading-[27px]">
              Check the currently published service-status information for Zoiko iD.
              Status, affected scope, and timestamps are shown only where confirmed
              by the operational source. Zoiko iD publishes service status and
              operational notices only for monitored components and scopes
              confirmed by its status source.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#status-box"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#2563eb] px-7 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.25)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.35)]"
              >
                View current status
              </Link>
              <Link
                href="#history-section"
                className="inline-flex items-center justify-center rounded-[8px] border border-[#2563eb] bg-white-solid px-7 py-3.5 font-manrope text-[15px] font-bold text-[#2563eb] transition-all duration-200 hover:bg-blue-50"
              >
                View history
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
              A status page reports operational condition. It does not report
              security advisories or vulnerability submissions.
            </p>
          </div>

          {/* Right Column: Hero Visual with Badge */}
          <div className="relative w-full max-w-[500px] overflow-hidden rounded-[24px] shadow-[0px_20px_40px_0px_rgba(10,21,32,0.08)]">
            <div className="relative aspect-[500/520] w-full">
              <Image
                src="/availability-status/hero-datacenter-racks.webp"
                alt="Data center server racks"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Floating Status Badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-[12px] bg-white-solid px-4 py-2.5 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)]">
              <Image
                src="/availability-status/icon-pulse.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0"
              />
              <span className="font-manrope text-[14px] font-bold leading-[22px] text-[#0b1b33]">
                Source-qualified status only
              </span>
            </div>
          </div>
        </div>

        {/* --- Lower Section: Unified Status Box Card --- */}
        <div
          id="status-box"
          className="mx-auto w-full max-w-[1120px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white-solid shadow-[0px_24px_48px_0px_rgba(16,33,29,0.08)]"
        >
          {/* Top 4 Photo Strip (zero gap, seamless) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group relative aspect-[280/197] overflow-hidden">
              <Image
                src="/availability-status/hero-card-circuit.webp"
                alt="Monitored components"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-gradient-to-t from-[#071426]/90 via-[#071426]/50 to-transparent p-4 pt-8">
                <Image
                  src="/availability-status/icon-server.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 shrink-0"
                />
                <span className="font-manrope text-[14px] font-bold text-white-solid">
                  Monitored components
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative aspect-[280/197] overflow-hidden">
              <Image
                src="/availability-status/hero-card-analytics.webp"
                alt="Timestamps shown"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-gradient-to-t from-[#071426]/90 via-[#071426]/50 to-transparent p-4 pt-8">
                <Image
                  src="/availability-status/icon-clock.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 shrink-0"
                />
                <span className="font-manrope text-[14px] font-bold text-white-solid">
                  Timestamps shown
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative aspect-[280/197] overflow-hidden">
              <Image
                src="/availability-status/hero-card-support.webp"
                alt="Support routes"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-gradient-to-t from-[#071426]/90 via-[#071426]/50 to-transparent p-4 pt-8">
                <Image
                  src="/availability-status/icon-chat.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 shrink-0"
                />
                <span className="font-manrope text-[14px] font-bold text-white-solid">
                  Support routes
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative aspect-[280/197] overflow-hidden">
              <Image
                src="/availability-status/hero-card-team.webp"
                alt="Planned maintenance"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-gradient-to-t from-[#071426]/90 via-[#071426]/50 to-transparent p-4 pt-8">
                <Image
                  src="/availability-status/icon-calendar.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4.5 w-4.5 shrink-0"
                />
                <span className="font-manrope text-[14px] font-bold text-white-solid">
                  Planned maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Top Status Alert Row */}
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[#f1f5f9]">
                  <Image
                    src="/availability-status/icon-help.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h2 className="font-dm-serif text-xl font-normal leading-tight text-[#0b1b33] sm:text-2xl">
                    Status information is temporarily unavailable. We cannot
                    confirm current service health.
                  </h2>
                  <p className="mt-1 font-manrope text-[15px] leading-6 text-[#64748b]">
                    The status source is not connected in this layout. No state
                    is shown as operational.
                  </p>
                </div>
              </div>

              <div className="inline-flex shrink-0 items-center justify-center rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-4 py-1.5 font-manrope text-[11px] font-extrabold uppercase tracking-widest text-[#64748b]">
                Unknown
              </div>
            </div>

            {/* Horizontal Line Divider */}
            <div className="my-7 border-t border-[#e2e8f0]" />

            {/* 4-Column Metadata Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#0b1b33]">
                  Last verified
                </p>
                <p className="mt-1 font-manrope text-[14px] leading-6 text-[#64748b]">
                  Shown only with a verified source timestamp
                </p>
              </div>

              <div>
                <p className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#0b1b33]">
                  Source
                </p>
                <p className="mt-1 font-manrope text-[14px] leading-6 text-[#64748b]">
                  Approved status source, once connected
                </p>
              </div>

              <div>
                <p className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#0b1b33]">
                  Scope
                </p>
                <p className="mt-1 font-manrope text-[14px] leading-6 text-[#64748b]">
                  Monitored components only
                </p>
              </div>

              <div>
                <p className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#0b1b33]">
                  Timezone
                </p>
                <p className="mt-1 font-manrope text-[14px] leading-6 text-[#64748b]">
                  Shown with every timestamp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
