import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const outcomes: {
  title: string;
  bg: string;
  border: string;
  dIcon: string;
  mIcon: string;
  dBody: ReactNode;
  mBody: ReactNode;
}[] = [
  {
    title: "Allow",
    bg: "bg-[#f0fdf4]",
    border: "border-[#86efac]",
    dIcon: "/machine-agent-identity/desktop-icon-check.svg",
    mIcon: "/machine-agent-identity/mobile-icon-check.svg",
    dBody: "The request is within the mandate and policy.",
    mBody: "The request is within the mandate and policy.",
  },
  {
    title: "Step up",
    bg: "bg-[#fffbeb]",
    border: "border-[#fcd34d]",
    dIcon: "/machine-agent-identity/desktop-icon-key.svg",
    mIcon: "/machine-agent-identity/mobile-icon-key.svg",
    dBody: (
      <>
        Additional verification is required <br className="max-xl:hidden" />
        first.
      </>
    ),
    mBody: "Additional verification is required first.",
  },
  {
    title: "Deny",
    bg: "bg-[#fef2f2]",
    border: "border-[#fca5a5]",
    dIcon: "/machine-agent-identity/desktop-icon-x.svg",
    mIcon: "/machine-agent-identity/mobile-icon-x.svg",
    dBody: (
      <>
        The request falls outside the <br className="max-xl:hidden" />
        mandate, with a safe reason.
      </>
    ),
    mBody: (
      <>
        The request falls outside the mandate, with a
        <br />
        safe reason.
      </>
    ),
  },
  {
    title: "Unknown",
    bg: "bg-[#f8fafc]",
    border: "border-[#cbd5e1]",
    dIcon: "/machine-agent-identity/desktop-icon-alert.svg",
    mIcon: "/machine-agent-identity/mobile-icon-alert.svg",
    dBody: (
      <>
        Context is unavailable. Never <br className="max-xl:hidden" />
        treated as allow.
      </>
    ),
    mBody: "Context is unavailable. Never treated as allow.",
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopDecisions() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Four outcomes, and one that is never silent
        </h2>
        <p className="w-full max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Each request is checked against the mandate and current policy. The result is allow, step <br className="max-xl:hidden" />
          up, deny, or unknown. Unknown is shown as unknown, and the system does not fall back <br className="max-xl:hidden" />
          to allow.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center gap-[18px]">
        {outcomes.map((o) => (
          <li
            key={o.title}
            className={`flex min-w-px flex-[1_0_0] flex-col items-start gap-[8.9px] rounded-[20px] border border-solid p-[24px] ${o.bg} ${o.border}`}
          >
            <div className="flex h-[43.1px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.1px]">
              <Image src={o.dIcon} alt="" width={20} height={20} />
            </div>
            <div className="h-[33.19px] w-full shrink-0">
              <h3 className="relative -top-[1px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                {o.title}
              </h3>
            </div>
            <p className="w-full pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
              {o.dBody}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileDecisions() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            09 · Policy-based decisions
          </p>
        </div>
        <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Four outcomes, and one
          <br />
          that is never silent
        </h2>
        <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Each request is checked against the
          <br />
          mandate and current policy. The result is
          <br />
          allow, step up, deny, or unknown. Unknown
          <br />
          is shown as unknown, and the system
          <br />
          does not fall back to allow.
        </p>
        <ul className="flex flex-col gap-[18px] pt-[33.2px]">
          {outcomes.map((o) => (
            <li
              key={o.title}
              className={`flex flex-col items-start gap-[9px] rounded-[20px] border border-solid p-[24px] ${o.bg} ${o.border}`}
            >
              <div className="flex h-[43px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-px">
                <Image src={o.mIcon} alt="" width={20} height={20} />
              </div>
              <div className="h-[33.19px] w-full shrink-0">
                <h3 className="relative -top-[1px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                  {o.title}
                </h3>
              </div>
              <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                {o.mBody}
              </p>
            </li>
          ))}
        </ul>
        <div className="pt-[33.2px]">
          <span className="inline-flex rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9] whitespace-nowrap">
            Illustrative
          </span>
        </div>
      </div>
    </section>
  );
}

export default function DecisionsSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopDecisions />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileDecisions />
      </div>
    </>
  );
}
