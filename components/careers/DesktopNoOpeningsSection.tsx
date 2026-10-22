import Image from "next/image";
import Link from "next/link";

export default function DesktopNoOpeningsSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex w-full items-center justify-center gap-[70px] rounded-[28px] bg-[#f8fafc] px-[160px] py-[80px]">
        <div className="relative h-[480px] min-w-px flex-1 rounded-[20px]">
          <Image
            src="/careers/desktop-open-positions.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[14.9px]">
          <h2 className="w-full pt-[2.215px] font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
            No published <br className="max-xl:hidden" />
            openings right now.
          </h2>
          <p className="w-full pb-[11.1px] font-manrope text-[16px] leading-[26.4px] text-[#5b6b82]">
            When a position is approved and published, it appears here <br className="max-xl:hidden" />
            with its title, summary, location and employment type, where <br className="max-xl:hidden" />
            those are confirmed. A closed or withdrawn role is removed.
          </p>
          <div className="flex w-full items-start gap-[12px] rounded-[14px] bg-white px-[20px] py-[18px]">
            <div className="flex h-[22px] w-[20px] shrink-0 flex-col items-start pt-[2px]">
              <Image src="/careers/desktop-icon-info.svg" width={20} height={20} alt="" />
            </div>
            <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#334155] xl:whitespace-nowrap">
              This is not a talent community and does not collect your <br className="max-xl:hidden" />
              details. No alerts are offered on this page.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-[14px] pt-[13.1px]">
            <Link
              href="/"
              className="flex min-h-[50px] items-center rounded-[999px] border border-transparent bg-[#1d4ed8] px-[28px] py-[16px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
            >
              Explore Zoiko iD
            </Link>
            <Link
              href="/about-us"
              className="flex min-h-[50px] items-center rounded-[999px] border border-solid border-[#0b1b33] px-[28px] py-[16px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1b33] focus-visible:ring-offset-2"
            >
              About Zoiko iD
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
