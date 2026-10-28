import Image from "next/image";

const IMAGES = [
  "/headquarters/mobile-gate-dashboard.webp",
  "/headquarters/mobile-gate-analytics.webp",
  "/headquarters/mobile-gate-data.webp",
];

const CARDS: {
  icon: string;
  title: string;
  body: React.ReactNode;
  pill?: string;
  pillTop?: string;
}[] = [
  {
    icon: "/headquarters/mobile-icon-doc.svg",
    title: "Source record",
    body: (<>Headquarters details come from the<br />approved corporate record.</>),
  },
  {
    icon: "/headquarters/mobile-icon-clock.svg",
    title: "Verification date",
    body: (<>Shown only when a verified date is<br />recorded.</>),
    pill: "Pending record",
    pillTop: "pt-[7.59px]",
  },
  {
    icon: "/headquarters/mobile-icon-alert.svg",
    title: "Suspected error",
    body: (<>Report it through Contact, and it will<br />be reviewed.</>),
    pill: "Route pending",
    pillTop: "pt-[7.6px]",
  },
];

export default function MobileKeepingCurrentSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[59.99px] pt-[67.32px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16.7px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            13 · Keeping this current
          </p>
        </div>
        <h2 className="pb-[0.655px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          Corporate records are<br />reviewed before changes<br />go live
        </h2>
        <div className="flex w-full flex-col gap-[18px] pt-[27.3px]">
          {IMAGES.map((src) => (
            <div key={src} className="relative h-[340px] w-full overflow-hidden rounded-[20px]">
              <Image src={src} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-[18px] pt-[23.3px]">
          {CARDS.map((c) => (
            <div key={c.title} className="flex w-full items-start gap-[14px] rounded-[18px] bg-[#f4f6fa] p-[24px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src={c.icon} width={24} height={24} alt="" />
              </div>
              <div className="flex min-w-0 flex-col items-start pr-[11px]">
                <h3 className="mb-[-1.41px] font-manrope text-[16px] font-bold leading-[27.2px] text-[#0b1b33] whitespace-nowrap">
                  {c.title}
                </h3>
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {c.body}
                </p>
                {c.pill && (
                  <span className={`mt-[1.4px] flex rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] ${c.pillTop}`}>
                    <span className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e] whitespace-nowrap">
                      {c.pill}
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
