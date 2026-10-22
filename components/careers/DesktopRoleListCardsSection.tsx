import type { ReactNode } from "react";
import Image from "next/image";

const cards: { summary: ReactNode }[] = [
  {
    summary: (
      <>
        Summary appears once approved for <br className="max-xl:hidden" />
        publication.
      </>
    ),
  },
  {
    summary: (
      <>
        Department and location appear only when <br className="max-xl:hidden" />
        confirmed.
      </>
    ),
  },
  {
    summary: (
      <>
        No “last verified” time appears until a registry <br className="max-xl:hidden" />
        timestamp exists.
      </>
    ),
  },
];

const chips = [
  { label: "Team", icon: "/careers/desktop-icon-layers-3.svg" },
  { label: "Location", icon: "/careers/desktop-icon-pin-1.svg" },
  { label: "Type", icon: "/careers/desktop-icon-clock-1.svg" },
];

export default function DesktopRoleListCardsSection() {
  return (
    <ul className="flex w-full items-stretch justify-center gap-[20px]">
      {cards.map((card, i) => (
        <li
          key={i}
          className="flex h-[224.42px] min-w-px flex-1 flex-col rounded-[18px] border border-dashed border-[#94a3b8] bg-[#fcfdfe] p-[30px]"
        >
          <p className="font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#92400e] xl:whitespace-nowrap">
            Layout template · not a role
          </p>
          <h3 className="mt-[11.99px] pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33]">
            Role title
          </h3>
          <p className="mt-[11.05px] font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82] xl:whitespace-nowrap">
            {card.summary}
          </p>
          <div className="mt-auto flex h-[31.8px] flex-wrap items-start gap-[8px]">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="flex h-full items-center gap-[6px] rounded-[999px] border border-dashed border-[#94a3b8] px-[10px] font-manrope text-[12px] font-normal leading-[19.8px] text-[#64748b]"
              >
                <Image src={chip.icon} width={12} height={12} alt="" className="shrink-0" />
                {chip.label}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
