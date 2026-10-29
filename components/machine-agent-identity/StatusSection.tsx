/* ===== Shared content ===== */

const statusCards = [
  { title: "Verified available", bg: "bg-[#f0fdf4]", border: "border-[#86efac]" },
  { title: "Limited", bg: "bg-[#fffbeb]", border: "border-[#fcd34d]" },
  { title: "Planned", bg: "bg-[#eff6ff]", border: "border-[#93c5fd]" },
  { title: "Not public", bg: "bg-[#f8fafc]", border: "border-[#cbd5e1]" },
];

const statusBodiesShared = [
  null,
  "Available with stated conditions.",
  "Not yet released. Described as a plan.",
  "Not described on this page.",
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopStatus() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Every capability is labelled with its real status
        </h2>
        <p className="w-full max-w-[720px] pt-[1.11px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          A capability is marked verified available, limited, planned or not public. Only verified items<br className="max-xl:hidden" />{" "}
          are described as available. Anything else is stated as such, and no certification badge<br className="max-xl:hidden" />{" "}
          appears without documentary approval.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center gap-[16px]">
        {statusCards.map((c, i) => (
          <li
            key={c.title}
            className={`flex min-w-px flex-1 flex-col gap-[9px] rounded-[18px] border border-solid px-[22px] pb-[44.1px] pt-[22px] ${c.bg} ${c.border}`}
          >
            <h3 className="h-[33.19px] shrink-0 -translate-y-px font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
              {c.title}
            </h3>
            <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
              {i === 0 ? (
                <>
                  Confirmed against the capability<br className="max-xl:hidden" />{" "}
                  registry.
                </>
              ) : (
                statusBodiesShared[i]
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileStatus() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            16 · Capability status
          </p>
        </div>
        <h2 className="w-full pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Every capability is
          <br />
          labelled with its real status
        </h2>
        <p className="w-full max-w-[720px] pt-[0.675px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          A capability is marked verified available,
          <br />
          limited, planned or not public. Only verified
          <br />
          items are described as available. Anything
          <br />
          else is stated as such, and no certification
          <br />
          badge appears without documentary
          <br />
          approval.
        </p>
        <ul className="flex w-full flex-col gap-[16px] pt-[33.2px]">
          {statusCards.map((c, i) => (
            <li
              key={c.title}
              className={`flex w-full flex-col gap-[9px] rounded-[18px] border border-solid p-[22px] ${c.bg} ${c.border}`}
            >
              <h3 className="h-[33.19px] shrink-0 -translate-y-px font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                {c.title}
              </h3>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
                {i === 0 ? "Confirmed against the capability registry." : statusBodiesShared[i]}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-col items-start pt-[33.2px]">
          <span className="inline-flex rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
            Trust Center evidence pending
          </span>
        </div>
      </div>
    </section>
  );
}

export default function StatusSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopStatus />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileStatus />
      </div>
    </>
  );
}
