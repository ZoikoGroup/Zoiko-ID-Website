import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const roles: { title: string; dBody: ReactNode; mBody: string; dIcon: string; mIcon: string }[] = [
  {
    title: "Sponsor",
    dBody: (
      <>
        Approves the mandate and answers for <br className="max-xl:hidden" />
        its use.
      </>
    ),
    mBody: "Approves the mandate and answers for its use.",
    dIcon: "/machine-agent-identity/desktop-icon-user.svg",
    mIcon: "/machine-agent-identity/mobile-icon-user.svg",
  },
  {
    title: "Agent",
    dBody: (
      <>
        Acts within the mandate and nothing <br className="max-xl:hidden" />
        beyond it.
      </>
    ),
    mBody: "Acts within the mandate and nothing beyond it.",
    dIcon: "/machine-agent-identity/desktop-icon-bot.svg",
    mIcon: "/machine-agent-identity/mobile-icon-bot.svg",
  },
  {
    title: "Policy owner",
    dBody: (
      <>
        Maintains the rules the decision is <br className="max-xl:hidden" />
        checked against.
      </>
    ),
    mBody: "Maintains the rules the decision is checked against.",
    dIcon: "/machine-agent-identity/desktop-icon-shield-1.svg",
    mIcon: "/machine-agent-identity/mobile-icon-shield-1.svg",
  },
  {
    title: "Authorized reviewer",
    dBody: "Takes escalated and disputed decisions.",
    mBody: "Takes escalated and disputed decisions.",
    dIcon: "/machine-agent-identity/desktop-icon-users.svg",
    mIcon: "/machine-agent-identity/mobile-icon-users.svg",
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopSponsor() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          A named human stands behind each agent
        </h2>
        <p className="max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          A sponsor is accountable for an agent’s mandate. Escalation runs to a person, not to <br className="max-xl:hidden" />
          another automated system. No unaffiliated autonomous agent is implied.
        </p>
      </div>
      <ul className="flex w-full items-start justify-center border-t-2 border-solid border-[#d9e1ec]">
        {roles.map((r) => (
          <li
            key={r.title}
            className="flex min-w-px flex-1 flex-col items-start gap-[7px] pr-[26px] pt-[34px]"
          >
            <span className="flex w-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8] py-[11px]">
              <Image src={r.dIcon} alt="" width={20} height={20} className="size-[20px]" />
            </span>
            <h3 className="w-full pt-[8px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
              {r.title}
            </h3>
            <p className="w-full pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
              {r.dBody}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileSponsor() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            07 · Sponsor and accountability
          </p>
        </div>
        <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          A named human stands
          <br />
          behind each agent
        </h2>
        <p className="w-full max-w-[720px] pt-[0.59px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          A sponsor is accountable for an agent’s
          <br />
          mandate. Escalation runs to a person, not
          <br />
          to another automated system. No
          <br />
          unaffiliated autonomous agent is implied.
        </p>
        <ul className="flex w-full flex-col border-t-2 border-solid border-[#071121] pt-[33.19px]">
          {roles.map((r) => (
            <li key={r.title} className="flex w-full flex-col items-start gap-[7px] pr-[26px] pt-[34px]">
              <span className="flex w-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8] py-[11px]">
                <Image src={r.mIcon} alt="" width={20} height={20} className="size-[20px]" />
              </span>
              <h3 className="w-full pt-[8px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                {r.title}
              </h3>
              <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {r.mBody}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function SponsorSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopSponsor />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileSponsor />
      </div>
    </>
  );
}
