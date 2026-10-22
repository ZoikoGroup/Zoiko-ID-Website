import Image from "next/image";
import type { ReactNode } from "react";

const items: { icon: string; title: ReactNode; body: ReactNode }[] = [
  {
    icon: "/careers/desktop-icon-key.svg",
    title: "Bounded authority",
    body: (
      <>
        Permissions are scoped, <br className="max-xl:hidden" />
        not implied.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-doc.svg",
    title: "Verifiable evidence",
    body: (
      <>
        Decisions can be <br className="max-xl:hidden" />
        reviewed later.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-lock.svg",
    title: "Privacy by design",
    body: (
      <>
        Collect only what a <br className="max-xl:hidden" />
        decision needs.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-bot.svg",
    title: "Accountable AI",
    body: "Agents act under a named sponsor.",
  },
  {
    icon: "/careers/desktop-icon-eye.svg",
    title: (
      <>
        Accessible <br className="max-xl:hidden" />
        experiences
      </>
    ),
    body: (
      <>
        Built to WCAG 2.2 AA <br className="max-xl:hidden" />
        from the start.
      </>
    ),
  },
];

export default function DesktopGoodWorkSection() {
  return (
    <section className="flex w-full flex-col items-start gap-[14.9px] bg-white px-[160px] py-[105px]">
      <h2 className="w-full pt-[2.09px] font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
        How we describe good work here
      </h2>
      <p className="pb-[0.54px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82] xl:whitespace-nowrap">
        Product principles, clearly labelled as such. Employee benefits and working practices <br className="max-xl:hidden" />
        are confirmed separately.
      </p>
      <ul className="flex w-full list-none items-stretch justify-center gap-[16px] pt-[35.09px]">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex min-w-px flex-1 flex-col items-start gap-[11px] rounded-[18px] border border-solid border-[#dce3ee] bg-white px-[22px] pb-[50.93px] pt-[28px]"
          >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src={it.icon} width={26} height={26} alt="" />
            </div>
            <h3 className="w-full pb-[0.94px] font-manrope text-[17px] font-bold leading-[22.95px] text-[#0b1b33]">
              {it.title}
            </h3>
            <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
              {it.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
