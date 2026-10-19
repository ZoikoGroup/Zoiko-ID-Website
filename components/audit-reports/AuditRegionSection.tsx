import Image from "next/image";

const regionItems = [
  {
    icon: "/audit-reports/region-icon-1.svg",
    text: "Regional information appears only when sourced from an approved disclosure.",
  },
  {
    icon: "/audit-reports/region-icon-2.svg",
    text: "Applicability depends on geography and effective date.",
  },
  {
    icon: "/audit-reports/region-icon-3.svg",
    text: "Subprocessor lists come from the Privacy Notice, not this page.",
  },
];

export default function AuditRegionSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-[50px]">
        {/* Left: Global Network Image */}
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-900 shadow-sm sm:h-[340px] lg:h-[340px] lg:w-[530px]">
          <Image
            src="/audit-reports/region-network.webp"
            alt="Global network of connected nodes"
            fill
            sizes="(min-width: 1024px) 530px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content & List */}
        <div className="flex w-full flex-1 flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.06] text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[51.92px]">
              Architecture does not
              <span className="block">decide where data</span>
              <span className="block">lives</span>
            </h2>
            <p className="max-w-[510px] font-manrope text-[15px] sm:text-base font-normal leading-[25.6px] text-[#64748B]">
              Where data is stored or transferred is set by reviewed privacy
              records, not by this diagram. No residency, transfer mechanism or
              vendor list is stated on this page.
            </p>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-3 pt-1">
            {regionItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-[12px] bg-white px-5 py-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.03)]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] shrink-0"
                />
                <p className="font-manrope text-[14px] sm:text-[15px] leading-[24px] text-[#334155]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
