import Image from "next/image";

const groups = [
  { label: "Actor type", items: ["Service", "Workload", "Machine", "AI agent"] },
  { label: "Topic", items: ["Lifecycle", "Sponsorship", "Authorization", "Revocation", "Evidence"] },
  { label: "Reader depth", items: ["Beginner", "Intermediate", "Advanced"] },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2";

export default function GuideFinderSection() {
  return (
    <section id="guide-finder" className="bg-[#f1f5f9] px-[22px] py-[60px] font-manrope">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-3">
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">Guide finder</span>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">Filter by actor, topic and depth</h2>
        <p className="max-w-[820px] pt-[1.39px] text-[16px] leading-[25.6px] text-[#64748b]">
          Filters appear only for values the approved guide registry supports. No guide inventory is published in this layout, so the counts below show the empty state.
        </p>

        <div className="flex w-full flex-col items-start gap-[18px] rounded-[22px] border border-solid border-[#e2e8f0] bg-white px-[22px] pb-[22px] pt-[45.99px]">
          <label className="flex h-[52px] w-full items-center gap-3 rounded-[10px] border border-solid border-[#cbd5e1] px-4 focus-within:ring-2 focus-within:ring-[#2563eb]">
            <Image src="/machine-agent-identity-guides/mobile-icon-search.svg" alt="" width={14} height={20} className="shrink-0" />
            <span className="sr-only">Search machine and agent identity topics</span>
            <input
              type="search"
              placeholder="Optional: search machine and agent identity topics"
              className="min-w-0 flex-1 bg-transparent text-[15px] leading-6 text-[#2563eb] outline-none placeholder:text-[#94a3b8]"
            />
          </label>

          <div className="flex w-full flex-col gap-[19px] pt-[5px]">
            {groups.map((g) => (
              <div key={g.label} role="group" aria-label={g.label} className="flex w-full flex-col gap-[10px]">
                <p className="text-[12px] font-bold uppercase leading-[19.2px] tracking-[0.72px] text-[#2563eb]">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed="false"
                      className={`rounded-full border border-solid border-[#e2e8f0] bg-white px-3 pb-[7.8px] pt-[6px] text-[13px] font-semibold leading-[20.8px] text-[#475569] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#22b8d6] hover:text-[#2563eb] ${focusRing}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-3 border-t border-solid border-[#e2e8f0] pt-[26.01px]">
            <p className="text-[16px] font-bold leading-[25.6px] text-[#2563eb]" role="status">
              0 guides match these filters
            </p>
            <button
              type="button"
              className={`rounded-[8px] border border-solid border-[#cbd5e1] px-4 pb-[9.89px] pt-[9.5px] text-[14px] font-bold leading-[22.4px] text-[#334155] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8fafc] ${focusRing}`}
            >
              Clear all filters
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-[10px] rounded-[18px] border border-dashed border-[#94a3b8] bg-[#fafafa] px-[34px] pb-[34px] pt-[38px] text-center">
            <Image src="/machine-agent-identity-guides/mobile-empty-state.svg" alt="" width={52} height={52} />
            <h3 className="font-dm-serif text-[24px] font-normal leading-[30px] text-[#2563eb]">No guides match these filters</h3>
            <p className="max-w-[520px] text-[14px] leading-[22.4px] text-[#64748b]">
              Remove a filter, or clear all. Your selections are kept until you change them. The topic list in the sections below remains available.
            </p>
          </div>

          <div className="w-full rounded-[12px] bg-[#fff7ed] px-[18px] py-[14px] text-[14px] leading-[22.4px] text-[#2563eb]">
            <p>
              <strong className="font-bold">Search is temporarily unavailable.</strong> Browse the actor types and topics on this page instead. We will not describe the library as empty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
