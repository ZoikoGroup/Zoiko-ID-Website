import Image from "next/image";

export default function AvailabilityScopeSection() {
  return (
    <section className="bg-[#f1f5f9] px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-[#0b1b33] sm:text-5xl lg:text-[52px] lg:leading-[55px]">
            Only monitored components are listed
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-7 text-[#64748b] sm:text-[16px] sm:leading-[26px]">
            Status is reported for the components the status source monitors. A
            component that is not listed is not implied to be working.
          </p>
        </div>

        {/* 3 Component Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Identity Service */}
          <div className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="relative aspect-[358/150] w-full">
              <Image
                src="/availability-status/scope-identity-service.webp"
                alt="Identity service"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3.5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f2fe]">
                <Image
                  src="/availability-status/icon-key.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <h3 className="font-manrope text-[17px] font-bold leading-tight text-[#0b1b33]">
                Identity service
              </h3>
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Listed only if the status source monitors it.
              </p>
              <div className="mt-1 inline-flex w-fit items-center rounded-lg bg-[#f1f5f9] px-3 py-1.5 font-manrope text-[13px] font-normal text-[#0b1b33]">
                Current state: unknown until verified
              </div>
            </div>
          </div>

          {/* Card 2: API Service */}
          <div className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="relative aspect-[358/150] w-full">
              <Image
                src="/availability-status/scope-policy-engine.webp"
                alt="API service"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3.5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f2fe]">
                <Image
                  src="/availability-status/icon-cog.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <h3 className="font-manrope text-[17px] font-bold leading-tight text-[#0b1b33]">
                API service
              </h3>
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Listed only if the status source monitors it.
              </p>
              <div className="mt-1 inline-flex w-fit items-center rounded-lg bg-[#f1f5f9] px-3 py-1.5 font-manrope text-[13px] font-normal text-[#0b1b33]">
                Current state: unknown until verified
              </div>
            </div>
          </div>

          {/* Card 3: Events and notifications */}
          <div className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white-solid shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="relative aspect-[358/150] w-full">
              <Image
                src="/availability-status/scope-event-router.webp"
                alt="Events and notifications"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3.5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0f2fe]">
                <Image
                  src="/availability-status/icon-bell.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <h3 className="font-manrope text-[17px] font-bold leading-tight text-[#0b1b33]">
                Events and notifications
              </h3>
              <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                Listed only if the status source monitors it.
              </p>
              <div className="mt-1 inline-flex w-fit items-center rounded-lg bg-[#f1f5f9] px-3 py-1.5 font-manrope text-[13px] font-normal text-[#0b1b33]">
                Current state: unknown until verified
              </div>
            </div>
          </div>
        </div>

        {/* Scope Table Card */}
        <div className="overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white-solid shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-4 bg-[#0f2140] px-6 py-4 text-white-solid sm:grid-cols-4">
            <span className="font-manrope text-[13px] font-extrabold uppercase tracking-wide">
              Component
            </span>
            <span className="font-manrope text-[13px] font-extrabold uppercase tracking-wide">
              Source state
            </span>
            <span className="font-manrope text-[13px] font-extrabold uppercase tracking-wide">
              Last observed
            </span>
            <span className="font-manrope text-[13px] font-extrabold uppercase tracking-wide">
              Source record
            </span>
          </div>

          {/* Example Component Row */}
          <div className="grid grid-cols-2 items-center gap-4 border-b border-[#e2e8f0] px-6 py-4 sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src="/availability-status/scope-avatar-sample.webp"
                  alt="Example component"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="font-manrope text-[15px] font-bold text-[#0b1b33]">
                Example component row
              </span>
            </div>

            <div>
              <span className="inline-flex items-center justify-center rounded-full border border-[#94a3b8] bg-[#f1f5f9] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#64748b]">
                Unknown
              </span>
            </div>

            <div>
              <span className="font-manrope text-[14px] text-[#64748b]">
                Not yet verified
              </span>
            </div>

            <div>
              <span className="font-manrope text-[14px] text-[#64748b]">
                Record ID assigned by source
              </span>
            </div>
          </div>

          {/* Banner Footnote */}
          <div className="flex items-start gap-3.5 bg-[#fafafa] px-6 py-4 sm:items-center">
            <Image
              src="/availability-status/icon-info-scope.svg"
              alt=""
              width={20}
              height={20}
              className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0"
            />
            <p className="font-manrope text-[14px] leading-[22px] text-[#0b1b33]">
              No public component inventory is confirmed in this layout. The row
              above is a layout example and does not describe a real service. For
              scope questions, use the Security contact route.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
