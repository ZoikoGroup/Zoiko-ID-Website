import type { ReactNode } from "react";
import Image from "next/image";

const cards: { icon: string; title: ReactNode; desc: ReactNode; badge: string }[] = [
  {
    icon: "desktop-icon-doc.svg",
    title: "Terms of Use",
    desc: "Legal & Privacy.",
    badge: "Approved and locked",
  },
  {
    icon: "desktop-icon-cog.svg",
    title: "Cookie Notice",
    desc: "Separate notice.",
    badge: "Route pending",
  },
  {
    icon: "desktop-icon-shield.svg",
    title: (
      <>
        Trust &amp; Assurance: <br className="max-xl:hidden" />
        Privacy
      </>
    ),
    desc: (
      <>
        Informational, not a legal <br className="max-xl:hidden" />
        notice.
      </>
    ),
    badge: "Route pending",
  },
];

export default function DesktopRelatedSection() {
  return (
    <section
      id="related"
      className="hidden w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px] lg:block"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-layers-1.svg" width={24} height={24} alt="" className="size-[24px]" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Related
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[48px]">
          <div className="flex w-full flex-col gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Related notices
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              These are separate documents. Each link appears only when its destination is published.
            </p>
          </div>
          <ul className="flex w-full items-stretch gap-[18px] pt-[24px]">
            {cards.map((c) => (
              <li
                key={c.icon}
                className="flex min-h-[260.36px] min-w-px flex-1 flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
              >
                <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src={`/privacy-notice/${c.icon}`} width={24} height={24} alt="" className="size-[24px]" />
                </div>
                <h3 className="mt-[9px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                  {c.title}
                </h3>
                <p className="mt-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                  {c.desc}
                </p>
                <span className="mt-auto self-start whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  {c.badge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
