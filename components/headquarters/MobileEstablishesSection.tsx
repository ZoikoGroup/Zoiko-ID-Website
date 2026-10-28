import Image from "next/image";

export default function MobileEstablishesSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
            08 · What this page establishes
          </p>
        </div>
        <h2 className="font-dm-serif pb-[0.745px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          What the address does and
          <br />
          does not tell you
        </h2>
        <div className="flex flex-col gap-[18px] pt-[27.2px]">
          <div className="relative h-[340px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/headquarters/mobile-address-laptop.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-start gap-[14px] rounded-[18px] bg-[#f4f6fa] p-[24px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src="/headquarters/mobile-icon-check-1.svg" width={24} height={24} alt="" />
              </div>
              <div className="font-manrope flex flex-col whitespace-nowrap pb-[0.595px]">
                <p className="-mb-[1.515px] text-[16px] font-bold leading-[27.2px] text-[#0b1b33]">
                  Established
                </p>
                <p className="text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  Zoiko Tech Inc.’s headquarters
                  <br />
                  address, as stated in the corporate
                  <br />
                  record.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[14px] rounded-[18px] bg-[#fef2f2] p-[24px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
                <Image src="/headquarters/mobile-icon-x.svg" width={24} height={24} alt="" />
              </div>
              <div className="font-manrope flex flex-col whitespace-nowrap pb-[0.695px]">
                <p className="-mb-[1.415px] text-[16px] font-bold leading-[27.2px] text-[#0b1b33]">
                  Not established here
                </p>
                <p className="text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  Visits, hours, reception, telephone
                  <br />
                  numbers, or a statutory seat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
