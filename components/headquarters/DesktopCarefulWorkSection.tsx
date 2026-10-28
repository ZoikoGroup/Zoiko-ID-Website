import Image from "next/image";

export default function DesktopCarefulWorkSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-px flex-1 flex-col gap-[32px] pt-[7.31px]">
          <div className="flex w-full flex-col gap-[15px]">
            <h2 className="pt-[2.11px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Careful work, shared{" "}
              <br className="max-xl:hidden" />
              review
            </h2>
            <div className="flex w-full flex-col gap-[15px] font-manrope text-[17px] font-normal leading-[28.9px] text-[#5b6b82]">
              <p className="pb-[0.78px] pt-[1.99px]">
                Identity and authorization decisions are reviewed by people, not{" "}
                <br className="max-xl:hidden" />
                handed to automation alone. Teams across product, engineering,{" "}
                <br className="max-xl:hidden" />
                legal and security review changes before they ship.
              </p>
              <p className="pb-[0.835px]">
                For roles and open positions, see the Careers page. This page does not list vacancies.
              </p>
            </div>
          </div>
          <div className="pt-[11.1px]">
            <span className="inline-flex whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
              Careers page pending
            </span>
          </div>
        </div>
        <div className="relative h-[540px] min-w-px flex-1">
          <Image
            src="/headquarters/desktop-address-colleagues.webp"
            alt="Colleagues reviewing work together"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
