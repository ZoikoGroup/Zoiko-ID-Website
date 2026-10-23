import Image from "next/image";

export default function DesktopSafeguardsSection() {
  return (
    <section
      id="safeguards"
      className="hidden w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px] lg:block"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-shield.svg" width={24} height={24} alt="" className="size-[24px]" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Safeguards
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[32px]">
          <div className="flex w-full flex-col gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Security and automated processing
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Only approved disclosures about safeguards, profiling and automated decision-making appear here. Assistance from AI is not treated as automated decision-making by default, and no algorithmic rights are claimed.
            </p>
          </div>
          <div className="flex w-full flex-col gap-[5px]">
            <div className="relative h-[301px] w-full">
              <Image
                src="/privacy-notice/desktop-safeguards-lock.webp"
                alt=""
                fill
                sizes="770px"
                className="rounded-[20px] object-cover"
              />
            </div>
            <ul className="flex w-full flex-col gap-[11.5px] pt-[23px]">
              <li className="flex w-full items-center gap-[12px]">
                <Image src="/privacy-notice/desktop-icon-shield-1.svg" width={20} height={20} alt="" className="size-[20px] shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] xl:whitespace-nowrap">
                  Safeguards: only approved descriptions.
                </span>
              </li>
              <li className="flex w-full items-center gap-[12px]">
                <Image src="/privacy-notice/desktop-icon-bot.svg" width={20} height={20} alt="" className="size-[20px] shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] xl:whitespace-nowrap">
                  Automated processing: only where legally required and verified.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
