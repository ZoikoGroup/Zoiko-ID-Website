import Image from "next/image";
import Link from "next/link";

export default function MobileOpenPositionsSection() {
  return (
    <section id="open-positions" className="lg:hidden px-[22px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[50px] rounded-[28px] bg-[#f4f7fb] p-[28px]">
        <div className="relative h-[480px] w-full shrink-0 overflow-hidden rounded-[20px]">
          <Image
            src="/careers/mobile-open-positions.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 504px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-[15.3px]">
          <div className="flex items-center rounded-[999px] bg-[#e8ecf3] px-[12px] pb-[5.64px] pt-[5.5px]">
            <p className="font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#3b4a63] whitespace-nowrap">
              Open positions
            </p>
          </div>
          <div className="w-full pb-[0.745px] pt-[1.615px]">
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
              No published<br />
              openings right now.
            </h2>
          </div>
          <div className="w-full pb-[11.37px]">
            <p className="font-manrope text-[16px] font-normal leading-[26.4px] text-[#5b6b82]">
              When a position is approved and<br />
              published, it appears here with its title,<br />
              summary, location and employment<br />
              type, where those are confirmed. A<br />
              closed or withdrawn role is removed.
            </p>
          </div>
          <div className="flex w-full items-start gap-[12px] rounded-[14px] bg-white px-[20px] py-[18px]">
            <div className="flex h-[22px] w-[20px] shrink-0 items-start pt-[2px]">
              <Image src="/careers/mobile-icon-info-2.svg" width={20} height={20} alt="" />
            </div>
            <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155] whitespace-nowrap">
              This is not a talent community and<br />
              does not collect your details. No<br />
              alerts are offered on this page.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[12.7px]">
            <Link
              href="/"
              className="flex min-h-[50px] items-center rounded-[999px] border border-transparent bg-[#1d4ed8] px-[28px] py-[16px] font-manrope text-[15px] font-bold leading-[24.75px] text-white whitespace-nowrap transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
            >
              Explore Zoiko iD
            </Link>
            <Link
              href="/about-us"
              className="flex min-h-[50px] items-center rounded-[999px] border border-[#0b1b33] px-[28px] py-[16px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] whitespace-nowrap transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1b33] focus-visible:ring-offset-2"
            >
              About Zoiko iD
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
