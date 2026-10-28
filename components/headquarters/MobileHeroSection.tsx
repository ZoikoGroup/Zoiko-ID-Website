import Image from "next/image";

const facts = [
  { icon: "/headquarters/mobile-icon-building.svg", title: "Company", sub: "Zoiko Tech Inc.", gap: "gap-[3px]" },
  { icon: "/headquarters/mobile-icon-layers-1.svg", title: "Platform", sub: "Zoiko iD", gap: "gap-[2.75px]" },
  { icon: "/headquarters/mobile-icon-pin-1.svg", title: "Headquarters", sub: "Sacramento, California", gap: "gap-[3px]" },
  { icon: "/headquarters/mobile-icon-globe.svg", title: "European office", sub: "Listed separately, London", gap: "gap-[3px]" },
];

export default function MobileHeroSection() {
  return (
    <section className="relative flex min-h-[560px] w-full items-end overflow-clip border-b border-solid border-[#d9e1ec] bg-[#0b1b33] px-[22px] py-[60px] lg:hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/headquarters/mobile-hero-office.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.15)] to-[rgba(11,27,51,0.95)] to-[85%]" />
      <div className="relative mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.9px] pb-[40px] pt-[7.31px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            02 · Headquarters
          </p>
        </div>
        <div className="w-full pb-[0.67px]">
          <h1 className="font-dm-serif text-[42px] font-normal leading-[43.68px] text-white">Headquarters</h1>
        </div>
        <div className="w-full max-w-[680px] pt-[2.5px]">
          <p className="font-manrope text-[18px] font-normal leading-[30.6px] text-[#c9d3e3]">
            Zoiko Tech Inc., the company behind Zoiko <br />
            iD, is headquartered in Sacramento, <br />
            California. Use the details below for <br />
            corporate location information.
          </p>
        </div>
        <div className="flex min-h-[93.76px] w-full items-center border-l-4 border-solid border-[#22b8d6] pl-[20px]">
          <p className="font-manrope text-[17px] font-normal leading-[28.9px] whitespace-nowrap text-[#e2e8f0]">
            Zoiko Tech Inc. headquarters: <br />
            Sacramento, California, United States. <br />
            Zoiko iD is a Zoiko Tech Inc. platform.
          </p>
        </div>
        <ul className="m-0 flex w-full list-none flex-col items-start rounded-[20px] border border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(11,27,51,0.7)] p-0 pt-[27.1px] backdrop-blur-[24px]">
          {facts.map((f) => (
            <li
              key={f.title}
              className="flex w-full items-center gap-[14px] border-b border-solid border-[rgba(255,255,255,0.1)] px-[26px] py-[24px]"
            >
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.18)]">
                <Image src={f.icon} width={24} height={24} alt="" />
              </div>
              <div className={`flex flex-col items-start pb-[1.19px] whitespace-nowrap ${f.gap}`}>
                <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-white">{f.title}</p>
                <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#a9b8ce]">{f.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
