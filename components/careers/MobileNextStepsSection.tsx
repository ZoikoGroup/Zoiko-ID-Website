import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const CARDS: { href: string; icon: string; title: string; desc: ReactNode }[] = [
  {
    href: "/",
    icon: "/careers/mobile-icon-book.svg",
    title: "About Zoiko iD",
    desc: "The product narrative and proposition.",
  },
  {
    href: "/zoiko-tech-inc",
    icon: "/careers/mobile-icon-building-1.svg",
    title: "Zoiko Tech Inc.",
    desc: "The corporate entity behind the platform.",
  },
  {
    href: "/security-contact",
    icon: "/careers/mobile-icon-mail-1.svg",
    title: "Contact",
    desc: (
      <>
        Routed contact options. Route pending
        <br />
        verification.
      </>
    ),
  },
];

export default function MobileNextStepsSection() {
  return (
    <section
      id="next-steps"
      className="px-[22px] py-[105px]"
      style={{
        backgroundImage:
          "linear-gradient(120.03deg, rgb(11, 27, 51) 0%, rgb(18, 48, 94) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[60px]">
        <div className="flex flex-col gap-[15.1px]">
          <div className="flex h-[19.8px] items-center">
            <span aria-hidden className="h-[2px] w-[36px] bg-[#22b8d6]" />
            <p className="ml-[12px] font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#22b8d6]">
              Next steps
            </p>
          </div>
          <h2 className="pb-[0.745px] pt-[1.815px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-white">
            Learn the platform, then
            <br />
            see what is open.
          </h2>
          <p className="font-manrope text-[17px] font-normal leading-[28px] text-[#c9d3e3]">
            Start with the platform to understand the
            <br />
            identity, delegated-authority and evidence
            <br />
            work. Corporate details are on the company
            <br />
            pages.
          </p>
        </div>
        <ul className="flex flex-col gap-[14px]">
          {CARDS.map((c) => (
            <li key={c.title}>
              <Link
                href={c.href}
                className="flex items-center gap-[16px] rounded-[18px] border border-solid border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.07)] p-[24px] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
              >
                <Image src={c.icon} width={24} height={24} alt="" className="shrink-0" />
                <span className="block min-w-0">
                  <span className="block font-manrope text-[17px] font-bold leading-[22.95px] text-white">
                    {c.title}
                  </span>
                  <span className="mt-[12px] block font-manrope text-[14px] font-normal leading-[23.1px] text-[#a9b8ce]">
                    {c.desc}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
