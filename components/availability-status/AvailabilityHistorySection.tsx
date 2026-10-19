import Image from "next/image";

export default function AvailabilityHistorySection() {
  return (
    <section id="history-section" className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-14">
        {/* Left Column: Heading + Subtitle + Callout Box */}
        <div className="flex w-full flex-col gap-6 lg:max-w-[504px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-[#0b1b33] sm:text-5xl lg:text-[52px] lg:leading-[55px]">
            Search past records by date and service
          </h2>

          <p className="font-manrope text-base font-normal leading-7 text-[#64748b] sm:text-[16px] sm:leading-[26px]">
            History covers only the source-backed window. Corrections are marked
            with their revision. A history entry is never shown as live.
          </p>

          {/* Retention Notice Box */}
          <div className="flex items-start gap-4 rounded-r-xl border-l-4 border-[#2563eb] bg-[#eff6ff] p-5 shadow-sm">
            <Image
              src="/availability-status/icon-info-history.svg"
              alt=""
              width={24}
              height={24}
              className="mt-0.5 h-6 w-6 shrink-0"
            />
            <p className="font-manrope text-[15px] font-bold leading-6 text-[#0b1b33]">
              Retention window not yet approved. The length of history shown is
              set by the status source and by approval, not by this page.
            </p>
          </div>
        </div>

        {/* Right Column: Search & Filter Interactive Mock Card */}
        <div className="w-full max-w-[566px] rounded-[20px] border border-[#e2e8f0] bg-white-solid p-6 shadow-sm sm:p-8">
          {/* 6 Filter Fields Grid (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Field 1: Date from */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-date-from"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Date from
              </label>
              <input
                id="filter-date-from"
                type="text"
                placeholder="YYYY-MM-DD"
                readOnly
                value="YYYY-MM-DD"
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              />
            </div>

            {/* Field 2: Date to */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-date-to"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Date to
              </label>
              <input
                id="filter-date-to"
                type="text"
                placeholder="YYYY-MM-DD"
                readOnly
                value="YYYY-MM-DD"
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              />
            </div>

            {/* Field 3: Service */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-service"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Service
              </label>
              <select
                id="filter-service"
                disabled
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              >
                <option>All monitored</option>
              </select>
            </div>

            {/* Field 4: Record type */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-record-type"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Record type
              </label>
              <select
                id="filter-record-type"
                disabled
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              >
                <option>Incident or maintenance</option>
              </select>
            </div>

            {/* Field 5: Timezone */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-timezone"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Timezone
              </label>
              <select
                id="filter-timezone"
                disabled
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              >
                <option>UTC and local</option>
              </select>
            </div>

            {/* Field 6: Sort */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="filter-sort"
                className="font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#0b1b33]"
              >
                Sort
              </label>
              <select
                id="filter-sort"
                disabled
                className="w-full rounded-lg border border-[#cbd5e1] bg-white-solid px-3 py-2.5 font-manrope text-[14px] text-[#94a3b8] focus:border-[#2563eb] focus:outline-none"
              >
                <option>Newest first</option>
              </select>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#cbd5e1] px-4 font-manrope text-[14px] font-bold text-[#94a3b8]"
            >
              Prev
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#cbd5e1] bg-blue-50 font-manrope text-[14px] font-bold text-[#2563eb]"
            >
              1
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#cbd5e1] font-manrope text-[14px] font-bold text-[#94a3b8]"
            >
              2
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#cbd5e1] px-4 font-manrope text-[14px] font-bold text-[#94a3b8]"
            >
              Next
            </button>
          </div>

          {/* Accessibility footnote */}
          <p className="mt-3 text-center font-manrope text-[13px] text-[#64748b]">
            Pagination is keyboard accessible. Layout only: no history records
            are shown.
          </p>
        </div>
      </div>
    </section>
  );
}
