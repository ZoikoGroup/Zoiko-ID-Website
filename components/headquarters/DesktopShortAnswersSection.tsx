import type { ReactNode } from "react";
import Image from "next/image";

const items: { q: string; a: ReactNode }[] = [
  {
    q: "Where is Zoiko Tech Inc. headquartered?",
    a: (
      <>
        Sacramento, California, United States. The street address is shown <br className="max-xl:hidden" />
        above.
      </>
    ),
  },
  { q: "Is Zoiko iD a Zoiko Tech Inc. platform?", a: "Yes. Zoiko iD is a Zoiko Tech Inc. platform." },
  { q: "Is there a European office?", a: "A London location is listed separately, on its own page." },
  {
    q: "Can I visit the headquarters?",
    a: (
      <>
        No visiting arrangement is published on this page. Use the <br className="max-xl:hidden" />
        corporate contact route.
      </>
    ),
  },
];

export default function DesktopShortAnswersSection() {
  return (
    <section className="border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-x-[60px] gap-y-[60px]">
        <div className="relative min-h-[654.19px] rounded-[22px]">
          <Image
            src="/headquarters/desktop-short-answers.webp"
            alt="Zoiko Tech Inc. headquarters building"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-[22px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-[36px] pt-[7.31px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">Short answers</h2>
          <dl className="flex flex-col gap-[14px] pt-[13.1px]">
            {items.map((it) => (
              <div
                key={it.q}
                className="relative flex gap-[20px] rounded-[18px] border border-solid border-[#d9e1ec] bg-white pb-[24px] pl-[26px] pr-[26px] pt-[23px]"
              >
                <div className="mt-[1px] flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src="/headquarters/desktop-icon-info.svg" width={24} height={24} alt="" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
                  <dt className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">{it.q}</dt>
                  <dd className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">{it.a}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
