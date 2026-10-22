const panels = [
  {
    eyebrow: "Platform concepts",
    eyebrowColor: "text-[#166534]",
    title: "What they describe",
    mark: "✓",
    markColor: "text-[#166534]",
    bg: "bg-white",
    items: [
      "Platform capability",
      "Principal category",
      "Integration event",
      "Evidence concept",
      "Evaluation path",
    ],
  },
  {
    eyebrow: "Commercial meanings they do not carry",
    eyebrowColor: "text-[#991b1b]",
    title: "What they are not",
    mark: "✕",
    markColor: "text-[#991b1b]",
    bg: "bg-[#fff7f5] border-t border-[#e2e8f0]",
    items: [
      "A billable unit",
      "A priced seat",
      "A metered charge",
      "Unlimited storage",
      "A sandbox entitlement",
    ],
  },
];

export default function MobileNotMeanSection() {
  return (
    <section className="w-full px-[22px] py-[60px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          What this model does not mean
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Five platform concepts, and what they are not
        </h2>
        <div className="mt-[44px] overflow-hidden rounded-[22px] border border-[#e2e8f0]">
          {panels.map((p) => (
            <div key={p.title} className={`flex flex-col gap-[18px] p-[36px] ${p.bg}`}>
              <div className="flex flex-col gap-[5px]">
                <p className={`font-manrope text-[12px] font-extrabold uppercase leading-[15px] tracking-[1.2px] ${p.eyebrowColor}`}>
                  {p.eyebrow}
                </p>
                <h3 className="font-manrope text-[21px] font-bold leading-[26.25px] text-[#2563eb]">
                  {p.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-[12px]">
                {p.items.map((t) => (
                  <li key={t} className="relative pl-[28px] font-manrope text-[15px] leading-[24px] text-[#334155]">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 font-manrope text-[15px] font-extrabold leading-[24px] ${p.markColor}`}
                    >
                      {p.mark}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
