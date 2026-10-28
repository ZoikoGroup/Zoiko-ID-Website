import Image from "next/image";

const facts = [
  { icon: "building", title: "Company", text: "Zoiko Tech Inc.", gap: "gap-[14px]", textGap: "gap-[2.75px]" },
  { icon: "layers", title: "Global navigation", text: "Approved header", gap: "gap-[16px]", textGap: "gap-[2.75px]" },
  { icon: "pin", title: "Locations & Connect", text: "Breadcrumb path", gap: "gap-[16px]", textGap: "gap-[3px]" },
  { icon: "globe", title: "Visible focus", text: "On every control", gap: "gap-[16px]", textGap: "gap-[3px]" },
];

export default function DesktopHeroSection() {
  return (
    <section className="relative -mt-[116px] flex min-h-[722px] flex-col items-start justify-center gap-[32px] overflow-hidden px-[160px] pb-[105px] pt-[221px]">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,20,38,0.9)] to-[rgba(7,20,38,0.95)]" />
        <Image
          src="/headquarters/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative flex w-[634px] min-w-[512px] flex-col items-start gap-[19.4px]">
        <h1 className="w-[980px] max-w-none font-dm-serif text-[72px] font-normal leading-[82.8px] text-white [word-break:break-word]">
          Headquarters
        </h1>
        <p className="w-full font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#c9d3e3] [word-break:break-word]">
          Zoiko Tech Inc., the company behind Zoiko iD, is headquartered in Sacramento,<br className="max-xl:hidden" />{" "}
          California. Use the details below for corporate location information.
        </p>
      </div>

      <div className="relative w-full border-l-4 border-solid border-[#22b8d6] py-px pl-[16px]">
        <p className="max-w-[819.144px] font-manrope text-[17px] font-normal leading-[28.9px] text-[#e2e8f0]">
          Zoiko Tech Inc. headquarters: Sacramento, California, United States. Zoiko iD is a Zoiko Tech Inc. platform.
        </p>
      </div>

      <div className="relative flex w-full items-stretch justify-center rounded-[24px] border-b border-solid border-[#d9e1ec] bg-white">
        {facts.map((f, i) => (
          <div
            key={f.title}
            className={`flex min-w-px flex-1 items-center px-[26px] py-[47px] ${f.gap} ${
              i < facts.length - 1 ? "border-r border-solid border-[#d9e1ec]" : ""
            }`}
          >
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.18)]">
              <Image src={`/headquarters/desktop-icon-${f.icon}.svg`} alt="" width={24} height={24} />
            </div>
            <div className={`flex shrink-0 flex-col items-start pb-[1.19px] whitespace-nowrap ${f.textGap}`}>
              <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#0b1b33]">{f.title}</p>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
