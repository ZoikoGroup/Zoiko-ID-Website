import Image from "next/image";

export default function MobileEuropeanOfficeSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col overflow-hidden rounded-[26px] border border-solid border-[#d9e1ec] bg-white">
        <div className="relative h-[380px] w-full">
          <Image
            src="/headquarters/mobile-euro-whiteboard.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="mt-[40px] px-[30px] pb-[36px] pt-[30px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              09 · European office
            </p>
          </div>
          <h2 className="font-dm-serif mt-[32px] text-[44px] font-normal leading-[49.28px] text-[#0b1b33]">
            A separate page
            <br />
            for London
          </h2>
          <p className="font-manrope mt-[31px] whitespace-nowrap text-[17px] font-normal leading-[28.9px] text-[#0b1b33]">
            European Headquarters
            <br />
            167–169 Great Portland Street, 5th
            <br />
            Floor
            <br />
            London W1W 5PF
            <br />
            United Kingdom
          </p>
          <p className="font-manrope mt-[14px] whitespace-nowrap text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
            The European office has its own page.
            <br />
            This page does not describe it.
          </p>
          <div className="mt-[20px]">
            <span className="font-manrope inline-block whitespace-nowrap rounded-[999px] bg-[#fef3c7] py-[6px] pl-[12px] pr-[89.53px] text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
              Link pending: European
              <br />
              Headquarters page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
