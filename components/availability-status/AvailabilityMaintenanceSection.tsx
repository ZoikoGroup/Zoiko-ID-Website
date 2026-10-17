import Image from "next/image";

export default function AvailabilityMaintenanceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071426] via-[#0d1f35] to-[#071426] px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/availability-status/maintenance-bg-banner.webp"
          alt="Maintenance background"
          fill
          className="object-cover opacity-20"
          priority={false}
        />
      </div>

      {/* Subtle Cyan Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.12)_0%,rgba(34,184,214,0)_70%)] blur-[70px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col gap-10 lg:gap-12">

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-white-solid sm:text-5xl lg:text-[52px] lg:leading-[55px]">
            Planned work is listed separately
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-7 text-[#cbd5e1] sm:text-[16px] sm:leading-[26px]">
            Maintenance is not an incident. Each notice gives its scope, its
            scheduled start and end in a stated timezone, and any change or
            postponement.
          </p>
        </div>

        {/* Maintenance Schedule Table Card */}
        <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white-solid p-6 shadow-xl sm:p-8">
          {/* Row 1: Upcoming */}
          <div className="flex flex-col items-start justify-between gap-4 py-2 sm:flex-row sm:items-center">
            <div className="w-full sm:w-48 shrink-0">
              <span className="font-manrope text-[15px] font-extrabold text-[#0b1b33]">
                Upcoming
              </span>
            </div>
            <div className="flex-1">
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Notices appear here in date order, grouped by month, when the
                source publishes them.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3.5 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#1e40af]">
                Maintenance
              </span>
            </div>
          </div>

          <div className="my-5 border-t border-[#e2e8f0]" />

          {/* Row 2: Ongoing */}
          <div className="flex flex-col items-start justify-between gap-4 py-2 sm:flex-row sm:items-center">
            <div className="w-full sm:w-48 shrink-0">
              <span className="font-manrope text-[15px] font-extrabold text-[#0b1b33]">
                Ongoing
              </span>
            </div>
            <div className="flex-1">
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Work in progress is shown with its scope and the last updated
                time.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full bg-[#dbeafe] px-3.5 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#1e40af]">
                Maintenance
              </span>
            </div>
          </div>

          <div className="my-5 border-t border-[#e2e8f0]" />

          {/* Row 3: No notice */}
          <div className="flex flex-col items-start justify-between gap-4 py-2 sm:flex-row sm:items-center">
            <div className="w-full sm:w-48 shrink-0">
              <span className="font-manrope text-[15px] font-extrabold text-[#0b1b33]">
                No notice
              </span>
            </div>
            <div className="flex-1">
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Shown as &quot;No published maintenance notices in the current
                source window.&quot; Not as &quot;No maintenance planned.&quot;
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full border border-[#94a3b8] bg-[#f1f5f9] px-3.5 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]">
                Source window
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
