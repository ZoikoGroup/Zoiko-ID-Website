import type { ReactNode } from "react";
import Image from "next/image";

const cards: ReactNode[] = [
  <>
    Summary appears once approved for<br />
    publication.
  </>,
  <>
    Department and location appear only when<br />
    confirmed.
  </>,
  <>
    No “last verified” time appears until a registry<br />
    timestamp exists.
  </>,
];

const chips = [
  { label: "Team", icon: "/careers/mobile-icon-layers-2.svg" },
  { label: "Location", icon: "/careers/mobile-icon-pin-1.svg" },
  { label: "Type", icon: "/careers/mobile-icon-clock-1.svg" },
];

export default function MobileRolePlaceholderCardsSection() {
  return (
    <section className="lg:hidden px-[22px] pt-[14.7px]">
      <ul className="mx-auto flex w-full max-w-[560px] flex-col gap-[20px] pt-[15.3px]">
        {cards.map((text, i) => (
          <li
            key={i}
            className="flex h-[224.42px] flex-col overflow-hidden rounded-[18px] border border-dashed border-[#94a3b8] bg-[#fcfdfe] p-[30px]"
          >
            <p className="font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#92400e] whitespace-nowrap">
              Layout template · not a role
            </p>
            <p className="mt-[12px] pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#64748b]">
              Role title
            </p>
            <p className="mt-[11px] font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82] whitespace-nowrap">
              {text}
            </p>
            <div className="mt-auto flex h-[31.8px] flex-wrap items-start gap-[8px]">
              {chips.map((c) => (
                <span
                  key={c.label}
                  className="flex items-center gap-[6px] self-stretch rounded-[999px] border border-dashed border-[#94a3b8] pl-[10px] pr-[11px] font-manrope text-[12px] font-normal leading-[19.8px] text-[#64748b]"
                >
                  <Image src={c.icon} width={12} height={12} alt="" />
                  {c.label}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
