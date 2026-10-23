import Image from "next/image";

const addresses = [
  {
    img: "/zoiko-tech-inc/mobile-hq-us.webp",
    alt: "Zoiko Tech Inc. global headquarters, Sacramento",
    label: ["United States · Global headquarters"],
    gap: "gap-[12.4px]",
    top: "",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811", "USA"],
    notePad: "pt-[1.6px]",
  },
  {
    img: "/zoiko-tech-inc/mobile-hq-uk.webp",
    alt: "Zoiko Tech Inc. European headquarters, London",
    label: ["United Kingdom · European", "headquarters"],
    gap: "gap-[6.4px]",
    top: "pt-[5.99px]",
    lines: ["167–169 Great Portland Street, 5th Floor", "London W1W 5PF", "United Kingdom"],
    notePad: "pt-[7.6px]",
  },
];

export default function MobileCorporatePresenceSection() {
  return (
    <section
      id="addresses"
      className="border-y border-solid border-[#dce3ee] bg-white px-[22px] pb-[60px] pt-[120px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <p className="w-full pb-[0.8px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
          Corporate presence
        </p>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Two documented addresses
        </h2>
        <p className="w-full max-w-[680px] pt-[1.07px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
          <span>These are documented headquarters addresses.<br />
They are not walk-in offices, and no visiting<br />
hours, local services or regional availability is<br />
implied.</span>
        </p>
        <ul className="flex w-full flex-col gap-[24px] pt-[28px]">
          {addresses.map((a) => (
            <li
              key={a.img}
              className="overflow-hidden rounded-[8px] border border-solid border-[#dce3ee] bg-white"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image src={a.img} alt={a.alt} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <div className={`flex flex-col items-start ${a.gap} px-[26px] pb-[26px] pt-[30px]`}>
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.44px] text-[#0891b2]">
                  {a.label.map((l) => (
                    <span key={l} className="block whitespace-nowrap">
                      {l}
                    </span>
                  ))}
                </p>
                <address className={`w-full font-manrope text-[16px] not-italic leading-[27.2px] text-[#2563eb] ${a.top}`}>
                  {a.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <p className={`w-full font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] ${a.notePad}`}>
                  <span>Documented address. No visiting hours or walk-in<br />
service are implied.</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
