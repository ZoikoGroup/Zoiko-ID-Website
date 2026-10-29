import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dNotes: { icon: string; text: ReactNode; nowrap: boolean }[] = [
  {
    icon: "/continuous-trust/desktop-icon-lock.svg",
    text: "Security concerns and vulnerability reports: Responsible Disclosure, and the Security Contact.",
    nowrap: false,
  },
  {
    icon: "/continuous-trust/desktop-icon-shield-1.svg",
    text: "Assurance evidence: Trust Center, where access is authorized.",
    nowrap: true,
  },
  {
    icon: "/continuous-trust/desktop-icon-eye-1.svg",
    text: (
      <>
        Privacy questions: the Privacy Notice explains how personal data is <br className="max-xl:hidden" />
        handled.
      </>
    ),
    nowrap: true,
  },
];



function DesktopSensitiveSignals() {
  return (
    <section
      className="w-full px-[160px] py-[105px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 51) 0%, rgb(11, 27, 51) 100%)",
      }}
    >
      <div className="flex w-full items-center justify-center gap-[60px]">
        <div className="flex min-w-px flex-1 items-start gap-[36px]">
          <div className="flex min-w-px flex-1 flex-col gap-[15px]">
            <h2 className="font-dm-serif w-full text-[52px] leading-[58.24px] font-normal text-white [word-break:break-word]">
              Trust signals can be <br className="max-xl:hidden" />
              sensitive
            </h2>
            <p className="font-manrope w-full pt-px text-[16px] leading-[27.2px] font-normal text-[#c9d3e3] [word-break:break-word]">
              Access, identity and trust signals are sensitive. This page does not <br className="max-xl:hidden" />
              describe attack methods, sample tokens or how to evade a control. <br className="max-xl:hidden" />
              Security and privacy questions go to their own routes.
            </p>
          </div>
          <ul className="flex min-w-px flex-1 flex-col gap-[15px]">
            {dNotes.map((n, i) => (
              <li key={i} className="flex w-full items-start gap-[14px] rounded-[8px] bg-[rgba(34,184,214,0.15)] px-[16px] py-[8px]">
                <div className="flex size-[20px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src={n.icon} width={20} height={20} alt="" />
                </div>
                <p
                  className={`font-manrope text-[15px] leading-[25.5px] font-normal text-[#d7e0ee] [word-break:break-word] ${n.nowrap ? "xl:whitespace-nowrap" : ""}`}
                >
                  {n.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mItems: { icon: string; pr: string; text: React.ReactNode }[] = [
  {
    icon: "/continuous-trust/mobile-icon-lock.svg",
    pr: "pr-[25.19px]",
    text: (
      <>
        Security concerns and vulnerability reports:
        <br />
        Responsible Disclosure, and the Security
        <br />
        Contact.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-shield-1.svg",
    pr: "pr-[37.69px]",
    text: (
      <>
        Assurance evidence: Trust Center, where
        <br />
        access is authorized.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-eye-2.svg",
    pr: "pr-[6.02px]",
    text: (
      <>
        Privacy questions: the Privacy Notice explains
        <br />
        how personal data is handled.
      </>
    ),
  },
];



function MobileSecurityPrivacy() {
  return (
    <section
      className="w-full px-[22px] py-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 51) 0%, rgb(11, 27, 51) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="flex w-full flex-col gap-[14.8px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
              13 · Security and privacy
            </p>
          </div>
          <h2 className="font-dm-serif pb-[0.745px] text-[32px] font-normal leading-[35.84px] text-white">
            Trust signals can be
            <br />
            sensitive
          </h2>
          <p className="font-manrope pt-[1.2px] text-[16px] leading-[27.2px] text-[#c9d3e3] whitespace-nowrap">
            Access, identity and trust signals are sensitive.
            <br />
            This page does not describe attack methods,
            <br />
            sample tokens or how to evade a control.
            <br />
            Security and privacy questions go to their own
            <br />
            routes.
          </p>
          {mItems.map((it) => (
            <div key={it.icon} className="flex items-start gap-[14px] pt-[1.2px]">
              <div className="flex size-[20px] shrink-0 items-center justify-center pt-[3px]">
                <Image src={it.icon} width={20} height={20} alt="" />
              </div>
              <p
                className={`font-manrope text-[15px] font-normal leading-[25.5px] whitespace-nowrap text-[#d7e0ee] ${it.pr}`}
              >
                {it.text}
              </p>
            </div>
          ))}
        </div>
        <div className="relative h-[440px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/mobile-integration-network.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function SensitiveSignalsSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSensitiveSignals />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileSecurityPrivacy />
      </div>
    </>
  );
}
