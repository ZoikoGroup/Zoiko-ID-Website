import Image from "next/image";
import type { ReactNode } from "react";

const cards: {
  title: string;
  icon: string;
  iconBg: string;
  cardBg: string;
  pb: string;
  body: ReactNode;
}[] = [
  {
    title: "Established",
    icon: "/headquarters/desktop-icon-check-1.svg",
    iconBg: "bg-[#e4f3f8]",
    cardBg: "bg-white",
    pb: "pb-[26.51px]",
    body: (
      <>
        Zoiko Tech Inc.’s <br className="max-xl:hidden" />
        headquarters address, as <br className="max-xl:hidden" />
        stated in the corporate <br className="max-xl:hidden" />
        record.
      </>
    ),
  },
  {
    title: "Not established here",
    icon: "/headquarters/desktop-icon-x.svg",
    iconBg: "bg-[#fee2e2]",
    cardBg: "bg-[#fef2f2]",
    pb: "pb-[26.53px]",
    body: (
      <>
        Visits, hours, reception, <br className="max-xl:hidden" />
        telephone numbers, or a <br className="max-xl:hidden" />
        statutory seat.
      </>
    ),
  },
];

export default function DesktopAddressSection() {
  return (
    <section className="hidden w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] pb-[105px] pt-[112.32px] lg:block">
      <div className="flex flex-col gap-[60px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          What the address does and does not tell you
        </h2>
        <div className="grid h-[340px] grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-x-[32px]">
          <div className="relative h-[340px] rounded-[20px]">
            <Image
              src="/headquarters/desktop-address-laptop.webp"
              alt=""
              fill
              sizes="640px"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-[18px] self-start">
            {cards.map((c) => (
              <div
                key={c.title}
                className={`flex w-full items-start gap-[14px] rounded-[18px] px-[24px] pt-[24px] ${c.pb} ${c.cardBg}`}
              >
                <div
                  className={`flex size-[50px] shrink-0 items-center justify-center rounded-[14px] ${c.iconBg}`}
                >
                  <Image src={c.icon} width={24} height={24} alt="" />
                </div>
                <div className="flex flex-col xl:whitespace-nowrap">
                  <h3 className="-mb-[1.5px] font-manrope text-[16px] font-bold leading-[27.2px] text-[#0b1b33]">
                    {c.title}
                  </h3>
                  <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
