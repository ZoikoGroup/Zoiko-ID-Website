/* ===== Shared content ===== */

const gates = [
  { title: "Capability inventory", owner: "Product and engineering: registry verified" },
  { title: "Integration claims", owner: "Engineering and security: support confirmed" },
  { title: "Mandate semantics", owner: "Security and legal: definitions approved" },
  { title: "Analytics", owner: "Privacy: payload exclusion verified" },
];

/* ===== Mobile layout (< lg) ===== */

function MobileGates() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.32px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            19 · Publication gates
          </p>
        </div>
        <h2 className="w-full pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          What must be approved
          <br />
          before launch
        </h2>
        <p className="w-full max-w-[720px] pt-[0.58px] font-manrope text-[18px] font-normal leading-[30.6px] whitespace-nowrap text-[#5b6b82]">
          This page is a specification. Each gate
          <br />
          names its owner. Until every gate is
          <br />
          cleared, nothing on the page is treated as
          <br />
          a live capability.
        </p>
        <ul className="flex w-full flex-col items-start gap-[14px] pt-[33.2px]">
          {gates.map((g) => (
            <li
              key={g.title}
              className="flex w-full flex-col gap-[5px] rounded-[16px] border border-solid border-[#fca5a5] bg-white px-[18px] pb-[18.1px] pt-[17px]"
            >
              <p className="w-full pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#7f1d1d]">
                {g.title}
              </p>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] whitespace-nowrap text-[#7f1d1d]">
                {g.owner}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function GatesSection() {
  return (
    <div className="overflow-x-clip lg:hidden">
      <MobileGates />
    </div>
  );
}
