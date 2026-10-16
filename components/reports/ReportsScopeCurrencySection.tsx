import Image from "next/image";

export default function ReportsScopeCurrencySection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1108px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Understanding report scope & currency
        </h2>

        {/* Banner Graphic Image */}
        <div className="relative aspect-[1108/359] w-full overflow-hidden rounded-[20px] shadow-sm sm:rounded-[28px]">
          <Image
            src="/reports/scope-currency-banner.webp"
            alt="Report scope and currency timeline illustration"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* 2 Column Comparison Cards */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {/* Card 1: Report Period */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xs sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src="/reports/scope-period.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="font-dm-serif text-[20.8px] font-normal text-[#071426]">
                Report Period
              </h3>
            </div>

            {/* Content Blocks */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  What it means:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                  The audit covers specific dates. Evidence is from those dates only.
                </p>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  Example:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                  SOC 2 Type II: &ldquo;Jan 1 – Dec 31, 2024&rdquo; means testing occurred during that year.
                </p>
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  ⚠️ Important:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#F59E0B]">
                  Does NOT guarantee current state. Policies or systems may have changed.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Report Scope */}
          <div className="flex flex-col gap-6 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xs sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src="/reports/scope-boundary.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="font-dm-serif text-[20.8px] font-normal text-[#071426]">
                Report Scope
              </h3>
            </div>

            {/* Content Blocks */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  What it covers:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                  Only the systems and controls explicitly listed in the report.
                </p>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#E2E8F0] pb-3">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  Example:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                  SOC 2 may cover &ldquo;cloud infrastructure&rdquo; but exclude &ldquo;mobile app&rdquo; or &ldquo;partner integrations.&rdquo;
                </p>
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <h4 className="font-manrope text-base font-semibold text-[#071426]">
                  ⚠️ Important:
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#F59E0B]">
                  Out-of-scope areas are not assessed. Review the full report for coverage limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
