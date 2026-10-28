import type { ReactNode } from "react";
import Image from "next/image";

const cards: { image: string; title: string; body: ReactNode }[] = [
  {
    image: "/headquarters/desktop-analytics-charts.webp",
    title: "Page views",
    body: (
      <>
        Aggregate counts only, with no personal <br className="max-xl:hidden" />
        data.
      </>
    ),
  },
  {
    image: "/headquarters/desktop-analytics-dashboard.webp",
    title: "Address copy",
    body: (
      <>
        An event only. Clipboard content is never <br className="max-xl:hidden" />
        logged.
      </>
    ),
  },
  {
    image: "/headquarters/desktop-analytics-lock.webp",
    title: "Route clicks",
    body: (
      <>
        Destination type only. No message content <br className="max-xl:hidden" />
        or coordinates.
      </>
    ),
  },
];

export default function DesktopRecordedSection() {
  return (
    <section className="flex w-full flex-col gap-[60px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] pb-[105px] pt-[112.31px]">
      <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
        What is recorded, and what is not
      </h2>
      <ul className="flex w-full items-stretch gap-[22px]">
        {cards.map((c) => (
          <li
            key={c.title}
            className="flex min-w-px flex-1 flex-col overflow-hidden rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[240px] w-full shrink-0">
              <Image src={c.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex w-full flex-col gap-[9.99px] p-[28px]">
              <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">{c.title}</h3>
              <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">{c.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
