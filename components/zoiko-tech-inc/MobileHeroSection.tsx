import Link from "next/link";

const rows = [
  { label: "Entity", value: "Zoiko Tech Inc." },
  { label: "Platform", value: "Zoiko iD" },
  { label: "Relationship", value: "Zoiko iD is a Zoiko Tech Inc. platform." },
  { label: "Headquarters", value: <span>Sacramento, USA and London, UK (see addresses<br />below)</span> },
];

export default function MobileHeroSection() {
  return (
    <section className="lg:hidden w-full border-b border-solid border-[#dce3ee] bg-white px-[22px] pb-[60px] pt-[59px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[70px]">
        <div className="flex flex-col">
          <p className="pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
            The company behind Zoiko iD
          </p>
          <h1 className="font-dm-serif text-[40px] font-normal leading-[42px] text-[#2563eb]">
            Zoiko Tech Inc.
          </h1>
          <p className="max-w-[680px] pt-[21.045px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            <span>Zoiko iD is a Zoiko Tech Inc. platform, designed<br />
around trusted identity, bounded authority and<br />
auditable evidence.</span>
          </p>
          <div className="flex flex-wrap items-center gap-[14px] pt-[32px]">
            <Link
              href="#entity"
              className="flex min-h-[46px] items-center rounded-[6px] border border-solid border-[#2563eb] bg-[#2563eb] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Explore Zoiko iD
            </Link>
            <Link
              href="#addresses"
              className="flex min-h-[46px] items-center rounded-[6px] border border-solid border-[#2563eb] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#2563eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="w-full overflow-clip rounded-[8px] border border-solid border-[#dce3ee] bg-[#f7f8fa]">
          <div className="bg-[#2563eb] px-[22px] py-[18px]">
            <h2 className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.44px] text-white">
              Entity summary
            </h2>
          </div>
          <dl className="py-[6px]">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`px-[22px] py-[14px] ${i < rows.length - 1 ? "border-b border-solid border-[#dce3ee]" : ""}`}
              >
                <dt className="pt-[2px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[0.72px] text-[#2563eb]">
                  {r.label}
                </dt>
                <dd className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155]">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-solid border-[#f4e3b5] bg-[#fffbeb] px-[22px] pb-[14.595px] pt-[12.795px]">
            <p className="font-manrope text-[12px] font-normal leading-[19.8px] text-[#7c4a03]">
              <span className="whitespace-nowrap">Entity facts are shown only where documented. Legal<br />
registry, ownership and leadership details are not stated on<br />
this page.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
