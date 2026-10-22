import Image from "next/image";
import type { ReactNode } from "react";

type RouteCard = {
  iconBg: string;
  icon: string;
  title: ReactNode;
  body: ReactNode;
  checks: ReactNode[];
  extra?: string;
  minH: string;
  bodyMt: string;
  listMt: string;
};

const cards: RouteCard[] = [
  {
    iconBg: "bg-[#fee2e2]",
    icon: "/contact/mobile-icon-alert.svg",
    title: (
      <>
        Report a suspected
        <br />
        vulnerability
      </>
    ),
    body: (
      <>
        Use Responsible Disclosure. Do not send
        <br />
        exploit material, passwords or secret keys
        <br />
        through this page.
      </>
    ),
    checks: [
      <>
        Vulnerabilities: Responsible
        <br />
        Disclosure.
      </>,
      <>
        Other security questions: Security
        <br />
        Contact.
      </>,
      <>
        Live service events: Availability /
        <br />
        Status.
      </>,
    ],
    extra: "border-l-[6px] pl-[23px]",
    minH: "min-h-[512.19px]",
    bodyMt: "mt-[10.75px]",
    listMt: "mt-[13.5px]",
  },
  {
    iconBg: "bg-[#e4f3f8]",
    icon: "/contact/mobile-icon-lock.svg",
    title: (
      <>
        Privacy questions and
        <br />
        rights requests
      </>
    ),
    body: (
      <>
        Sending a message here does not verify
        <br />
        your identity or fulfil a rights request.
      </>
    ),
    checks: [
      "Privacy practices: Privacy Notice.",
      <>
        Data-rights requests: the approved
        <br />
        rights process.
      </>,
      "Legal terms: the legal notice.",
    ],
    minH: "min-h-[437.94px]",
    bodyMt: "mt-[10.88px]",
    listMt: "mt-[18.5px]",
  },
];

const photos = [
  "/contact/mobile-route-security.webp",
  "/contact/mobile-route-data.webp",
  "/contact/mobile-route-network.webp",
  "/contact/mobile-flow-meeting.webp",
];

function Eyebrow({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex h-[19.8px] w-full items-center font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px]">
      <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
      <span className="ml-[12px] text-[#0b1b33]">{num}</span>
      <span className="ml-[11px] text-[#0891b2]">{label}</span>
    </div>
  );
}

export default function MobileSpecialistRoutingSection() {
  return (
    <section
      id="security"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full max-w-[820px] flex-col gap-[14.9px]">
          <Eyebrow num="03" label="Specialist routing" />
          <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Security and privacy are
            <br />
            handled separately
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Vulnerability reports and data-rights requests
            <br />
            never travel through a general inbox or a
            <br />
            general form.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[24px]">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`flex w-full flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px] ${c.extra ?? ""} ${c.minH}`}
            >
              <div
                className={`flex h-[53.2px] w-[52px] items-center justify-center rounded-[14px] pb-[1.2px] ${c.iconBg}`}
              >
                <Image src={c.icon} width={24} height={24} alt="" />
              </div>
              <h3 className="mt-[10.8px] pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33] [word-break:break-word]">
                {c.title}
              </h3>
              <p
                className={`${c.bodyMt} whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]`}
              >
                {c.body}
              </p>
              <ul className={`${c.listMt} flex flex-col gap-[12px]`}>
                {c.checks.map((t, j) => (
                  <li key={j} className="flex items-start gap-[12px]">
                    <Image
                      src="/contact/mobile-icon-check.svg"
                      width={20}
                      height={20}
                      alt=""
                      className="mt-[2px] shrink-0"
                    />
                    <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-[8px] pt-[24px]">
                <Image
                  src="/contact/mobile-icon-clock.svg"
                  width={16}
                  height={16}
                  alt=""
                  className="shrink-0"
                />
                <span className="whitespace-nowrap font-manrope text-[13px] font-bold leading-[21.45px] text-[#92400e]">
                  Route pending verification
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-[24px] pt-[19.99px]">
          {photos.map((src) => (
            <div
              key={src}
              className="relative h-[200px] w-full overflow-hidden rounded-[14px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
