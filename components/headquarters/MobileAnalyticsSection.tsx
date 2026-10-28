import type { ReactNode } from "react";
import Image from "next/image";

const cards: { img: string; title: string; body: ReactNode }[] = [
  {
    img: "/headquarters/mobile-analytics-charts.webp",
    title: "Page views",
    body: (
      <>
        Aggregate counts only, with no personal
        <br />
        data.
      </>
    ),
  },
  {
    img: "/headquarters/mobile-analytics-dashboard.webp",
    title: "Address copy",
    body: (
      <>
        An event only. Clipboard content is never
        <br />
        logged.
      </>
    ),
  },
  {
    img: "/headquarters/mobile-analytics-lock.webp",
    title: "Route clicks",
    body: (
      <>
        Destination type only. No message content
        <br />
        or coordinates.
      </>
    ),
  },
];

export default function MobileAnalyticsSection() {
  return (
    <section className="lg:hidden w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            15 · Data and analytics
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          What is recorded, and
          <br />
          what is not
        </h2>
        <ul className="flex w-full flex-col gap-[22px] pt-[27.2px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex w-full flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[10px] p-[28px]">
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] whitespace-nowrap">
                  {c.title}
                </h3>
                <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
