import Image from "next/image";

const cards = [
  {
    icon: "user",
    title: "Account information",
    desc: <>Categories for account holders, only if verified.</>,
    h: "h-[211.38px]",
  },
  {
    icon: "cog",
    title: "Technical information",
    desc: (
      <>
        Categories only where the inventory confirms
        <br />
        them.
      </>
    ),
    h: "h-[235.17px]",
  },
  {
    icon: "mail",
    title: "Communications",
    desc: <>Enquiries and correspondence, as approved.</>,
    h: "h-[211.38px]",
  },
];

export default function MobileDataCategoriesSection() {
  return (
    <section
      id="data-categories"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Data categories
          </p>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/mobile-icon-eye.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[4.9px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            05
          </p>
          <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Information collected and
            <br />
            sources
          </h2>
          <p className="pt-[20.49px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Each category will show its purpose, its
            <br />
            source and the context in which it is
            <br />
            collected. Empty categories do not produce
            <br />
            placeholder rows.
          </p>
          <div className="flex w-full flex-col gap-[18px] pt-[29.09px]">
            {cards.map((c) => (
              <div
                key={c.title}
                className={`flex w-full flex-col items-start rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px] ${c.h}`}
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src={`/privacy-notice/mobile-icon-${c.icon}.svg`} width={24} height={24} alt="" />
                </div>
                <h3 className="mt-[9px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                  {c.title}
                </h3>
                <p className="mt-[10px] whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {c.desc}
                </p>
                <span className="mt-auto rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
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
