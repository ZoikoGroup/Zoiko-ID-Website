import Image from "next/image";
import type { ReactNode } from "react";

const items: { icon: string; title: string; body: ReactNode }[] = [
  {
    icon: "/careers/desktop-icon-check.svg",
    title: "Verification versus authentication",
    body: (
      <>
        Confirming a claim is different from confirming <br className="max-xl:hidden" />
        a session.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-bot-1.svg",
    title: "Human versus agent permissions",
    body: (
      <>
        An AI agent acts under a sponsor and a <br className="max-xl:hidden" />
        bounded mandate.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-scale.svg",
    title: "Delegated scopes",
    body: (
      <>
        Permissions expressed by purpose, resource, <br className="max-xl:hidden" />
        time and revocation.
      </>
    ),
  },
  {
    icon: "/careers/desktop-icon-layers-1.svg",
    title: "Evidence lineage",
    body: (
      <>
        Tracing which policy and authority informed a <br className="max-xl:hidden" />
        decision.
      </>
    ),
  },
];

export default function DesktopHardQuestionsSection() {
  return (
    <section className="relative w-full overflow-clip bg-[#0b1b33] px-[160px] py-[105px]">
      <Image
        src="/careers/desktop-hard-questions.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom opacity-40"
      />
      <div className="relative flex w-full flex-col items-start gap-[14.8px]">
        <h2 className="w-full pt-[2.2px] font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-white">
          Where the hard questions sit
        </h2>
        <p className="pb-[0.54px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#a9b8ce] xl:whitespace-nowrap">
          Technical areas the platform addresses. They describe the work, not vacancies or team <br className="max-xl:hidden" />
          plans.
        </p>
        <ul className="grid w-full list-none grid-cols-2 items-stretch gap-[20px] pt-[35.19px]">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex items-start gap-[18px] rounded-[18px] border border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] p-[30px] backdrop-blur-[24px]"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(34,184,214,0.16)]">
                <Image src={it.icon} width={26} height={26} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="pb-[0.69px] font-manrope text-[18px] font-bold leading-[29.7px] text-white xl:whitespace-nowrap">
                  {it.title}
                </h3>
                <p className="mt-[4.87px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#a9b8ce] xl:whitespace-nowrap">
                  {it.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
