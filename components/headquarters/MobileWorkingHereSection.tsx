import Image from "next/image";

export default function MobileWorkingHereSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="flex flex-col gap-[14.9px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              07 · Working here
            </p>
          </div>
          <h2 className="font-dm-serif pb-[0.745px] pt-[1.905px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Careful work, shared
            <br />
            review
          </h2>
          <p className="font-manrope pb-[0.67px] pt-[1.88px] text-[17px] font-normal leading-[28.9px] text-[#5b6b82]">
            Identity and authorization decisions are
            <br />
            reviewed by people, not handed to
            <br />
            automation alone. Teams across product,
            <br />
            engineering, legal and security review
            <br />
            changes before they ship.
          </p>
          <p className="font-manrope pb-[0.835px] text-[17px] font-normal leading-[28.9px] text-[#5b6b82]">
            For roles and open positions, see the Careers
            <br />
            page. This page does not list vacancies.
          </p>
          <div className="pt-[11.1px]">
            <span className="font-manrope inline-block whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
              Careers page pending
            </span>
          </div>
        </div>
        <div className="relative h-[400px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/headquarters/mobile-address-colleagues.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
