import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const rows: { n: string; title: string; text: ReactNode; cta: string; href: string }[] = [
  {
    n: "01",
    title: "Establish identity",
    text: (
      <>
        Who or what is represented, for people, organizations, services, <br className="max-xl:hidden" />
        machines and AI agents.
      </>
    ),
    cta: "Explore identity",
    href: "/identity-guides",
  },
  {
    n: "02",
    title: "Govern delegated authority",
    text: (
      <>
        What an actor may do, on whose behalf, within which scope and for <br className="max-xl:hidden" />
        how long.
      </>
    ),
    cta: "Explore delegation",
    href: "/authority-explainers",
  },
  {
    n: "03",
    title: "Preserve audit-ready evidence",
    text: (
      <>
        A descriptive record of important decisions. It is not an assurance <br className="max-xl:hidden" />
        guarantee.
      </>
    ),
    cta: "Explore evidence",
    href: "/trust-center",
  },
];

export default function DesktopThreeQuestionsSection() {
  return (
    <section id="themes" className="hidden w-full items-start gap-[90px] bg-white px-[160px] py-[105px] lg:flex">
      <div className="flex min-w-0 flex-[447.826_1_0%] flex-col items-start gap-[14.8px]">
        <h2 className="font-dm-serif w-full pt-[2.315px] text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
          Three questions the platform answers
        </h2>
        <p className="font-manrope w-full max-w-[700px] pb-[0.535px] text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
          Each area is a product domain, not a job requirement or a team description.
        </p>
        <div className="relative h-[361.19px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/careers/desktop-product-areas.webp"
            alt="Product areas across identity, authority and evidence"
            fill
            sizes="(min-width: 1024px) 448px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <ul className="flex min-w-0 flex-[582.174_1_0%] flex-col items-start pt-[20px]">
        {rows.map((row, idx) => (
          <li
            key={row.n}
            className={`flex w-full items-start gap-[20px] py-[34px] ${
              idx > 0 ? "border-t border-solid border-[#dce3ee]" : ""
            }`}
          >
            <p className="font-dm-serif w-[90px] shrink-0 whitespace-nowrap text-[56px] font-normal leading-[56px] text-[#22b8d6]">
              {row.n}
            </p>
            <div className="flex min-w-px flex-[1_0_0] flex-col items-start gap-[8.9px] pb-[1.3px]">
              <h3 className="font-dm-serif w-full text-[30px] font-normal leading-[36px] text-[#0b1b33]">{row.title}</h3>
              <p className="font-manrope w-full pb-[0.625px] text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">
                {row.text}
              </p>
              <Link
                href={row.href}
                className="font-manrope inline-flex items-center gap-[5px] rounded-[4px] text-[14px] font-bold leading-[23.1px] text-[#1d4ed8] transition-transform hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              >
                {row.cta}
                <Image src="/careers/desktop-icon-arrow.svg" width={16} height={16} alt="" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
