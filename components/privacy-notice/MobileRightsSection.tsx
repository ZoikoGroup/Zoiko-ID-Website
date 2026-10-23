import Image from "next/image";

const cards = [
  { icon: "mobile-icon-key.svg", title: "Access", desc: "Eligibility and route pending." },
  { icon: "mobile-icon-x.svg", title: "Erasure", desc: "Eligibility and exemptions pending." },
  { icon: "mobile-icon-check-1.svg", title: "Withdrawal", desc: "Only where a basis is consent." },
];

export default function MobileRightsSection() {
  return (
    <section
      id="rights"
      className="scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px] px-[22px] py-[60px]">
        <div className="flex flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">Rights</p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-key.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">10</p>
          <div className="pb-[21.82px]">
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">Your rights and choices</h2>
          </div>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image src="/privacy-notice/mobile-rights-portrait.webp" alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
          </div>
          <p className="pt-[29px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Rights are listed by jurisdiction and by <br />
            eligibility. Each request type has a verified <br />
            route, an identity-verification explanation <br />
            and its limits. No response time is <br />
            promised.
          </p>
          <ul className="flex flex-col gap-[18px] pt-[29px]">
            {cards.map((c) => (
              <li key={c.title} className="relative h-[211.38px] w-full rounded-[16px] border border-solid border-[#d9e1ec] bg-white">
                <div className="absolute left-[24px] top-[24px] flex size-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src={"/privacy-notice/" + c.icon} width={24} height={24} alt="" />
                </div>
                <h3 className="absolute left-[24px] right-[24px] top-[83px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">{c.title}</h3>
                <p className="absolute left-[24px] right-[24px] top-[118.19px] whitespace-nowrap pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">{c.desc}</p>
                <span className="absolute bottom-[24px] left-[24px] whitespace-nowrap rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">Pending Legal</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
