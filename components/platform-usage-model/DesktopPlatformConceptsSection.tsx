const columns = [
  {
    eyebrow: "Platform concepts",
    title: "What they describe",
    mark: "✓",
    markColor: "text-[#166534]",
    bg: "bg-white",
    border: "",
    items: ["Platform capability", "Principal category", "Integration event", "Evidence concept", "Evaluation path"],
  },
  {
    eyebrow: "Commercial meanings they do not carry",
    title: "What they are not",
    mark: "✕",
    markColor: "text-[#991b1b]",
    bg: "bg-[#fff7f5]",
    border: "border-l border-solid border-[#e2e8f0]",
    items: ["A billable unit", "A priced seat", "A metered charge", "Unlimited storage", "A sandbox entitlement"],
  },
];

export default function DesktopPlatformConceptsSection() {
  return (
    <section
      id="concepts"
      className="hidden lg:flex flex-col items-start gap-[60px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <h2 className="max-w-[888px] font-dm-serif font-normal text-[52px] leading-[58.8px] tracking-[-0.38px] text-[#07111f]">
        Five platform concepts, and what they are not
      </h2>
      <div className="grid w-full grid-cols-2 overflow-clip rounded-[22px] border border-solid border-[#e2e8f0]">
        {columns.map((c) => (
          <div key={c.title} className={`flex min-w-0 flex-col items-start gap-[18px] p-[36px] ${c.bg} ${c.border}`}>
            <div className="flex w-full flex-col gap-[5px]">
              <p
                className={`font-manrope text-[12px] font-extrabold uppercase leading-[15px] tracking-[1.2px] ${
                  c.mark === "✓" ? "text-[#166534]" : "text-[#991b1b]"
                }`}
              >
                {c.eyebrow}
              </p>
              <h3 className="font-manrope text-[21px] font-extrabold leading-[26.25px] text-[#07111f]">
                {c.title}
              </h3>
            </div>
            <ul className="flex w-full flex-col gap-[12px]">
              {c.items.map((item) => (
                <li key={item} className="relative pl-[28px] font-manrope text-[15px] leading-[24px] text-[#334155]">
                  <span aria-hidden="true" className={`absolute left-0 top-0 font-extrabold ${c.markColor}`}>
                    {c.mark}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
