import Image from "next/image";

const items: { icon: string; text: React.ReactNode }[] = [
  {
    icon: "mobile-icon-hand-1.svg",
    text: (
      <>
        Recipient categories: from the disclosure <br />
        register.
      </>
    ),
  },
  {
    icon: "mobile-icon-doc-1.svg",
    text: (
      <>
        Contractual references: only approved <br />
        agreements.
      </>
    ),
  },
];

export default function MobileRecipientsSection() {
  return (
    <section
      id="recipients"
      className="scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px] px-[22px] py-[60px]">
        <div className="flex flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">Recipients</p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-hand.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">07</p>
          <div className="pb-[0.83px]">
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">Sharing and recipients</h2>
          </div>
          <p className="pt-[21px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Recipient categories and processing roles <br />
            are shown only where verified. No <br />
            statement that information is never shared <br />
            is made unless it is independently <br />
            evidenced.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[23px]">
            {items.map((it) => (
              <li key={it.icon} className="flex h-[51px] items-start gap-[12px]">
                <Image src={"/privacy-notice/" + it.icon} width={20} height={20} alt="" className="mt-[3px] shrink-0" />
                <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155]">{it.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
