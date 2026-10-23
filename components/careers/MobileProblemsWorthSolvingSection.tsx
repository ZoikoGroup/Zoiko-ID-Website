import Image from "next/image";
import type { ReactNode } from "react";

const cards: { icon: string; title: ReactNode; body: ReactNode }[] = [
  {
    icon: "/careers/mobile-icon-check.svg",
    title: (
      <>
        Verification versus
        <br />
        authentication
      </>
    ),
    body: (
      <>
        Confirming a claim is different
        <br />
        from confirming a session.
      </>
    ),
  },
  {
    icon: "/careers/mobile-icon-bot-1.svg",
    title: (
      <>
        Human versus agent
        <br />
        permissions
      </>
    ),
    body: (
      <>
        An AI agent acts under a
        <br />
        sponsor and a bounded
        <br />
        mandate.
      </>
    ),
  },
  {
    icon: "/careers/mobile-icon-scale.svg",
    title: <>Delegated scopes</>,
    body: (
      <>
        Permissions expressed by
        <br />
        purpose, resource, time and
        <br />
        revocation.
      </>
    ),
  },
  {
    icon: "/careers/mobile-icon-layers-3.svg",
    title: <>Evidence lineage</>,
    body: (
      <>
        Tracing which policy and
        <br />
        authority informed a decision.
      </>
    ),
  },
];

export default function MobileProblemsWorthSolvingSection() {
  return (
    <section
      id="problems-worth-solving"
      className="relative overflow-clip bg-[#0b1b33] px-[22px] py-[105px] lg:hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[56%] right-0 opacity-40"
      >
        <Image
          src="/careers/mobile-hard-questions.webp"
          alt=""
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.7px]">
        <div className="flex h-[19.8px] w-full items-center gap-[12px]">
          <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#22b8d6]">
            Problems worth solving
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] pt-[2.215px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-white">
          Where the hard questions
          <br />
          sit
        </h2>
        <p className="w-full max-w-[700px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#a9b8ce]">
          Technical areas the platform addresses.
          <br />
          They describe the work, not vacancies or
          <br />
          team plans.
        </p>
        <ul className="flex w-full flex-col gap-[20px] pt-[35.3px]">
          {cards.map((c, i) => (
            <li
              key={i}
              className="flex w-full items-start gap-[18px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] p-[30px] backdrop-blur-[24px]"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.16)]">
                <Image src={c.icon} width={26} height={26} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="whitespace-nowrap font-manrope text-[18px] font-bold leading-[29.7px] text-white">
                  {c.title}
                </h3>
                <p className="mt-[5px] whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#a9b8ce]">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
