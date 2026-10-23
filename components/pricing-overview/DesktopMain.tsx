const INDEX_ITEMS = [
  "How a proposal is shaped",
  "Capability families",
  "Actors and usage",
  "Commercial disclosure",
  "Deployment considerations",
  "Ways to evaluate",
  "Readiness checklist",
  "Security and legal",
  "Talk to an expert",
  "Questions",
];

export default function DesktopMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex w-full flex-col gap-[105px] py-[105px] px-[160px]">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-[70px]">
          <h2 className="self-start font-dm-serif text-[52px] font-normal capitalize leading-[57.8px] tracking-[1.92px] text-black">
            why Zoiko ID Pricing?
          </h2>
          <div className="self-start border-l-4 border-[#22b8d6] py-[10px] pl-[28px]">
            <p className="max-w-[668px] font-manrope text-[24px] font-normal leading-[43.2px] text-[#2563eb]">
              Zoiko iD pricing and usage terms depend on the capabilities and deployment scope approved for a specific evaluation. Public pricing figures, units and plans are shown only when formally published.
            </p>
          </div>
        </div>

        <div className="flex w-full items-start gap-[90px]">
          <aside className="sticky top-[140px] w-[260px] shrink-0 self-start">
            <nav aria-label="In this page" className="flex flex-col">
              <p className="pb-[14.79px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.68px] text-[#64748b]">
                In this page
              </p>
              {INDEX_ITEMS.map((label, i) => {
                const num = String(i + 1).padStart(2, "0");
                return (
                  <a
                    key={num}
                    href={`#section-${num}`}
                    className="flex items-start gap-[10px] whitespace-nowrap border-b border-[#e2e8f0] pb-[9.09px] pt-[8px] text-[14px] leading-[23.1px] transition-colors hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
                  >
                    <span className="font-manrope font-extrabold text-[#2563eb]">{num}</span>
                    <span className="font-manrope font-normal text-[#07111f]">{label}</span>
                  </a>
                );
              })}
            </nav>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-[105px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
