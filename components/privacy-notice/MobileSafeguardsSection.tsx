import Image from "next/image";

export default function MobileSafeguardsSection() {
  return (
    <section
      id="safeguards"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Safeguards
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-shield.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[4.9px]">
          <p className="w-full font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            12
          </p>
          <h2 className="w-full pb-[21.84px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Security and automated<br />
            processing
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-safeguards-lock.webp"
              alt="Digital padlock representing security safeguards"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="w-full pt-[28.585px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Only approved disclosures about<br />
            safeguards, profiling and automated<br />
            decision-making appear here. Assistance<br />
            from AI is not treated as automated<br />
            decision-making by default, and no<br />
            algorithmic rights are claimed.
          </p>
          <div className="flex w-full flex-col items-start gap-[12px] pt-[23.1px]">
            <div className="flex w-full items-center gap-[12px]">
              <Image
                src="/privacy-notice/mobile-icon-shield-1.svg"
                width={20}
                height={20}
                alt=""
                className="shrink-0"
              />
              <p className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155]">
                Safeguards: only approved descriptions.
              </p>
            </div>
            <div className="flex w-full items-start gap-[12px]">
              <Image
                src="/privacy-notice/mobile-icon-bot.svg"
                width={20}
                height={20}
                alt=""
                className="mt-[3px] shrink-0"
              />
              <p className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155]">
                Automated processing: only where legally<br />
                required and verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
