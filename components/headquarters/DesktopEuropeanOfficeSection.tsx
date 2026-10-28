import Image from "next/image";

export default function DesktopEuropeanOfficeSection() {
  return (
    <section className="hidden w-full border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px] lg:block">
      <div className="flex w-full items-start overflow-clip rounded-[26px] border border-solid border-[#d9e1ec] bg-white">
        <div className="relative min-h-[380px] min-w-px flex-1 self-stretch">
          <Image
            src="/headquarters/desktop-hero-bg.webp"
            alt=""
            fill
            sizes="560px"
            className="object-cover"
          />
        </div>
        <div className="relative h-[509.88px] min-w-px flex-1">
          <div className="absolute left-[50px] right-[50px] top-[50px] flex items-center gap-[12px] pb-[18px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <span className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              European office
            </span>
          </div>
          <h2 className="absolute left-[50px] right-[50px] top-[102.39px] pb-[18px] font-dm-serif text-[44px] font-normal leading-[49.28px] text-[#0b1b33]">
            A separate page for <br className="max-xl:hidden" />
            London
          </h2>
          <div className="absolute left-[50px] right-[133px] top-[calc(50%+34.93px)] -translate-y-1/2 border-l-4 border-solid border-[#67e8f9] bg-[rgba(34,184,214,0.05)] py-[12px] pl-[24px]">
            <p className="w-[259px] whitespace-pre-wrap font-manrope text-[17px] font-normal leading-[28.9px] text-[#0b1b33]">
              European Headquarters 167–169 Great Portland Street, <br className="max-xl:hidden" />
              5th Floor London W1W 5PF, United Kingdom
            </p>
          </div>
          <div className="absolute left-[50px] top-[404.87px] flex w-[476px] flex-col items-start gap-[8px]">
            <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] xl:whitespace-nowrap">
              The European office has its own page. This page does not describe it.
            </p>
            <span className="rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
              Link pending: European Headquarters page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
