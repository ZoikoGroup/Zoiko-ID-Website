import type { ReactNode } from "react";
import Image from "next/image";

type Item = {
  icon: string;
  title: ReactNode;
  lines: string[];
  className: string;
  textClassName: string;
};

const items: Item[] = [
  {
    icon: "/headquarters/mobile-icon-hand.svg",
    title: (
      <>
        Skip to <br />
        main <br />
        content
      </>
    ),
    lines: ["First stop", "on the", "keyboard"],
    className: "border-b border-r min-h-[215.06px]",
    textClassName: "gap-[3px] pr-[5.83px]",
  },
  {
    icon: "/headquarters/mobile-icon-layers.svg",
    title: (
      <>
        Approved <br />
        header
      </>
    ),
    lines: ["Global", "navigation"],
    className: "border-b min-h-[215.06px]",
    textClassName: "gap-[3.3px]",
  },
  {
    icon: "/headquarters/mobile-icon-pin.svg",
    title: (
      <>
        Locations <br />
        &amp; <br />
        Connect
      </>
    ),
    lines: ["Breadcrumb", "path"],
    className: "border-r min-h-[188.56px]",
    textClassName: "gap-[3px]",
  },
  {
    icon: "/headquarters/mobile-icon-eye.svg",
    title: (
      <>
        Visible <br />
        focus
      </>
    ),
    lines: ["On every", "link and", "control"],
    className: "min-h-[188.56px]",
    textClassName: "gap-[3.3px] pr-[8.25px]",
  },
];

export default function MobileIntroSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden">
      <ul className="mx-auto grid w-full max-w-[560px] list-none grid-cols-2 border-b border-solid border-[#d9e1ec] p-0">
        {items.map((it) => (
          <li
            key={it.icon}
            className={`flex items-center gap-[14px] border-solid border-[#d9e1ec] px-[24px] py-[28px] ${it.className}`}
          >
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src={it.icon} width={24} height={24} alt="" />
            </div>
            <div className={`flex shrink-0 flex-col items-start pb-[1.19px] whitespace-nowrap ${it.textClassName}`}>
              <p className="font-manrope text-[15px] font-bold leading-[25.5px] text-[#0b1b33]">{it.title}</p>
              {it.lines.map((l) => (
                <p key={l} className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
                  {l}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
