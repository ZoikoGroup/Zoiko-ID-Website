import Image from "next/image";
import type { ReactNode } from "react";

const roles: { img: string; icon: string; title: string; body: ReactNode }[] = [
  {
    img: "/contact/mobile-roles-anonymous.webp",
    icon: "/contact/mobile-icon-user.svg",
    title: "Anonymous visitors",
    body: (
      <>
        Access approved public routing and submit <br />
        an approved general enquiry. No account <br />
        privileges.
      </>
    ),
  },
  {
    img: "/contact/mobile-roles-routing.webp",
    icon: "/contact/mobile-icon-scale.svg",
    title: "Routing administrators",
    body: (
      <>
        Update only approved registry records, with <br />
        change audit, publisher review and rollback.
      </>
    ),
  },
  {
    img: "/contact/mobile-roles-specialist.webp",
    icon: "/contact/mobile-icon-shield.svg",
    title: "Specialist queues",
    body: (
      <>
        Security, Privacy, Sales and Support own <br />
        their data. General users cannot inspect it.
      </>
    ),
  },
  {
    img: "/contact/mobile-roles-abuse.webp",
    icon: "/contact/mobile-icon-lock.svg",
    title: "Abuse prevention",
    body: (
      <>
        Privacy-respecting, accessible rate limiting <br />
        and bot protection, with a manual <br />
        alternative.
      </>
    ),
  },
];

const nots: ReactNode[] = [
  <>
    No user-provided content in URLs, browser <br />
    analytics, log labels or third-party telemetry.
  </>,
  <>
    No claims of end-to-end encryption, exact <br />
    retention days or 24/7 response unless <br />
    approved controls exist.
  </>,
];

export default function MobilePermissionsSecuritySection() {
  return (
    <section
      id="permissions"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[14.8px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[24.25px] shrink-0 bg-[#0891b2]" />
            <span className="w-[17.2px] shrink-0 font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
              08
            </span>
            <span className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Permissions, security and <br />
              resilience
            </span>
          </div>
          <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Access by role, and <br />
            specialist queues stay <br />
            private
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Nothing on this page grants account <br />
            privileges. Specialist submissions remain with <br />
            their owners.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[24px]">
          {roles.map((r) => (
            <li
              key={r.title}
              className="flex flex-col items-start gap-[10.8px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
            >
              <div className="relative h-[160px] w-full overflow-hidden rounded-[12px]">
                <Image src={r.img} alt="" fill sizes="(max-width: 560px) 100vw, 512px" className="object-cover" />
              </div>
              <div className="mt-[8px] flex h-[54px] w-[52px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src={r.icon} alt="" width={24} height={24} />
              </div>
              <h3 className="pb-[6px] font-manrope text-[18px] font-bold leading-[24.3px] text-[#0b1b33] [word-break:break-word]">
                {r.title}
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]">
                {r.body}
              </p>
            </li>
          ))}
        </ul>

        <ul className="flex w-full max-w-[900px] flex-col gap-[12px] pt-[4px]">
          {nots.map((t, i) => (
            <li key={i} className="flex items-start gap-[12px]">
              <Image src="/contact/mobile-icon-x-1.svg" alt="" width={20} height={20} className="mt-[2px] shrink-0" />
              <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
