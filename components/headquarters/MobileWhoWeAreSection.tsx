import type { ReactNode } from "react";
import Image from "next/image";

const points: ReactNode[] = [
  <>Identity for people, organizations, services,<br />machines and AI agents.</>,
  <>Delegated authority with bounded scope and<br />time.</>,
  <>Evidence that supports review of important<br />decisions.</>,
];

export default function MobileWhoWeAreSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[40px]">
        <div className="relative h-[400px] w-full overflow-hidden rounded-[24px]">
          <Image src="/headquarters/mobile-who-we-are.webp" alt="Zoiko team at work" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
        </div>
        <div className="flex w-full flex-col items-start gap-[16.7px] pt-[7.32px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              04 · Who we are
            </p>
          </div>
          <h2 className="font-dm-serif w-full pb-[0.655px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            The company behind a<br />
            platform for identity and<br />
            authority
          </h2>
          <p className="font-manrope w-full pb-[0.67px] text-[17px] font-normal leading-[28.9px] text-[#5b6b82]">
            Zoiko iD is a Zoiko Tech Inc. platform. It is<br />
            focused on three things: establishing who or<br />
            what is acting, governing what that actor may<br />
            do, and keeping reviewable evidence of<br />
            decisions.
          </p>
          <ul className="flex w-full flex-col items-start gap-[14px] pt-[9.31px]">
            {points.map((p, i) => (
              <li key={i} className="flex w-full items-start gap-[14px]">
                <div className="flex size-[22px] shrink-0 items-center justify-center rounded-[14px] pt-[3px]">
                  <Image src="/headquarters/mobile-icon-check.svg" alt="" width={20} height={20} />
                </div>
                <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] whitespace-nowrap">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
