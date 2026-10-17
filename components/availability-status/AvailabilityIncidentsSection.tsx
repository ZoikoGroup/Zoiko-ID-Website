import Image from "next/image";

export default function AvailabilityIncidentsSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 lg:gap-16">
        {/* Upper Two-Column Layout */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column: Heading + Description + 4 Spec Points */}
          <div className="flex w-full flex-col gap-6 lg:max-w-[535px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-[#0b1b33] sm:text-5xl lg:text-[52px] lg:leading-[55px]">
              Current incidents, with what is known
            </h2>
            <p className="font-manrope text-base font-normal leading-7 text-[#64748b] sm:text-[16px] sm:leading-[26px]">
              Incidents list an incident ID, a public title, impact scope, phase,
              start time, last update, affected components and a permanent link.
              Where a fact is not known, the entry says so.
            </p>

            {/* 2x2 Specs Matrix */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#e2e8f0] bg-white-solid p-6 shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="font-manrope text-[12px] font-bold uppercase tracking-wider text-[#0b1b33]">
                  Incident ID
                </span>
                <span className="font-manrope text-[14px] text-[#64748b]">
                  Source-assigned
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-manrope text-[12px] font-bold uppercase tracking-wider text-[#0b1b33]">
                  Impact scope
                </span>
                <span className="font-manrope text-[14px] text-[#64748b]">
                  Named components only
                </span>
              </div>

              <div className="flex flex-col gap-1 border-t border-[#e2e8f0] pt-4">
                <span className="font-manrope text-[12px] font-bold uppercase tracking-wider text-[#0b1b33]">
                  Phase
                </span>
                <span className="font-manrope text-[14px] text-[#64748b]">
                  Shown only if the source defines it
                </span>
              </div>

              <div className="flex flex-col gap-1 border-t border-[#e2e8f0] pt-4">
                <span className="font-manrope text-[12px] font-bold uppercase tracking-wider text-[#0b1b33]">
                  Last update
                </span>
                <span className="font-manrope text-[14px] text-[#64748b]">
                  Timestamp with timezone
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Image */}
          <div className="relative aspect-[535/400] w-full max-w-[535px] overflow-hidden rounded-[20px] shadow-[0px_16px_36px_0px_rgba(10,21,32,0.06)]">
            <Image
              src="/availability-status/incidents-engineer-review.webp"
              alt="Engineer reviewing incident monitoring code"
              fill
              sizes="(max-width: 1024px) 100vw, 535px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Lower Row: Empty Incident State Card */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-[18px] border border-[#94a3b8] bg-white-solid p-8 text-center shadow-sm sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center">
            <Image
              src="/availability-status/icon-empty-incident.svg"
              alt=""
              width={52}
              height={52}
              className="h-13 w-13"
            />
          </div>

          <h3 className="font-dm-serif text-2xl font-normal text-[#0b1b33] sm:text-[24px] sm:leading-[30px]">
            No active incidents are shown in this layout
          </h3>

          <p className="max-w-[580px] font-manrope text-[14px] leading-[22px] text-[#64748b]">
            This is not a statement that no incident exists. Incidents appear
            here only from the verified source window. Check the
            source-qualified state above.
          </p>
        </div>
      </div>
    </section>
  );
}
