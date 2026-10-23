import Image from "next/image";

const cards = [
  {
    icon: "user",
    title: "Account information",
    desc: (
      <>
        Categories for account holders, <br className="max-xl:hidden" />
        only if verified.
      </>
    ),
  },
  {
    icon: "cog",
    title: "Technical information",
    desc: (
      <>
        Categories only where the <br className="max-xl:hidden" />
        inventory confirms them.
      </>
    ),
  },
  {
    icon: "mail",
    title: "Communications",
    desc: (
      <>
        Enquiries and correspondence, <br className="max-xl:hidden" />
        as approved.
      </>
    ),
  },
];

export default function DesktopDataCategoriesSection() {
  return (
    <section
      id="data-categories"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-eye.svg" width={24} height={24} alt="" />
          </div>
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Data categories
          </p>
        </div>
        <div className="w-full min-w-0 max-w-[820px] flex-1">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Information collected and sources
          </h2>
          <p className="mt-[20.3px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Each category will show its purpose, its source and the context in which it is collected. Empty <br className="max-xl:hidden" />
            categories do not produce placeholder rows.
          </p>
          <div className="flex items-stretch gap-[18px] pt-[29px]">
            {cards.map((c) => (
              <div
                key={c.title}
                className="flex h-[235.17px] min-w-px flex-1 flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
              >
                <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src={`/privacy-notice/desktop-icon-${c.icon}.svg`} width={24} height={24} alt="" />
                </div>
                <h3 className="mt-[9px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                  {c.title}
                </h3>
                <p className="mt-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                  {c.desc}
                </p>
                <span className="mt-auto self-start whitespace-nowrap rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  Pending Legal
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
