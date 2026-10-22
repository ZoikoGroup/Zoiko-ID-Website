import Image from "next/image";

const BR = <br className="max-xl:hidden" />;

type Card = {
  iconBg: string;
  icon: string;
  title: React.ReactNode;
  titleBox?: string;
  desc: React.ReactNode;
  items: string[];
  accent?: boolean;
};

const cards: Card[] = [
  {
    iconBg: "bg-[#fee2e2]",
    icon: "/contact/desktop-icon-alert.svg",
    title: "Report a suspected vulnerability Request",
    titleBox: "w-[465px] max-w-full",
    desc: (
      <>
        Use Responsible Disclosure. Do not send exploit material, passwords {BR}
        or secret keys through this page.
      </>
    ),
    items: [
      "Vulnerabilities: Responsible Disclosure.",
      "Other security questions: Security Contact.",
      "Live service events: Availability / Status.",
    ],
    accent: true,
  },
  {
    iconBg: "bg-[#e4f3f8]",
    icon: "/contact/desktop-icon-lock.svg",
    title: "Privacy questions and rights requests",
    desc: (
      <>
        Sending a message here does not verify your identity or fulfil a rights {BR}
        request.
      </>
    ),
    items: [
      "Privacy practices: Privacy Notice.",
      "Data-rights requests: the approved rights process.",
      "Legal terms: the legal notice.",
    ],
  },
];

export default function DesktopSecurityPrivacySection() {
  return (
    <section
      id="security"
      className="flex w-full flex-col gap-[60px] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex max-w-[820px] flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Security and privacy are handled {BR}
          separately
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] xl:whitespace-nowrap">
          Vulnerability reports and data-rights requests never travel through a general inbox or a general {BR}
          form.
        </p>
      </div>

      <div className="relative h-[436px] w-full overflow-hidden rounded-[14px]">
        <Image
          src="/contact/desktop-route-security.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 55.7%" }}
        />
      </div>

      <ul className="flex w-full items-stretch gap-[24px]">
        {cards.map((c) => (
          <li
            key={c.icon}
            className={`flex min-h-[432px] min-w-0 flex-1 flex-col gap-[16px] rounded-[16px] border border-[#d9e1ec] bg-white p-[32px] ${
              c.accent ? "border-l-[6px]" : ""
            }`}
          >
            <div className={`flex h-[53px] w-[52px] items-center justify-center rounded-[14px] ${c.iconBg}`}>
              <Image src={c.icon} width={24} height={24} alt="" />
            </div>
            <div className="flex flex-col">
              <h3
                className={`pb-[10px] font-dm-serif text-[30px] font-normal leading-[36px] text-[#0b1b33] ${c.titleBox ?? ""}`}
              >
                {c.title}
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] xl:whitespace-nowrap">
                {c.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-[12px]">
              {c.items.map((t) => (
                <li key={t} className="flex items-center gap-[12px]">
                  <Image src="/contact/desktop-icon-check.svg" width={20} height={20} alt="" className="shrink-0" />
                  <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-[8px] pt-[12px]">
              <Image src="/contact/desktop-icon-clock.svg" width={16} height={16} alt="" className="shrink-0" />
              <span className="font-manrope text-[13px] font-bold leading-[21.45px] text-[#92400e]">
                Route pending verification
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
