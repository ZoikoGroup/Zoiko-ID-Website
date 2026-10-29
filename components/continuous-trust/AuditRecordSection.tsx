import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dItems = [
  { icon: "/continuous-trust/desktop-icon-user-2.svg", title: "Actor", text: "Who, or what, acted" },
  { icon: "/continuous-trust/desktop-icon-doc-2.svg", title: "Action", text: "What was requested" },
  { icon: "/continuous-trust/desktop-icon-info-1.svg", title: "Reason code", text: "Why it was decided" },
  { icon: "/continuous-trust/desktop-icon-clock-3.svg", title: "Timestamp", text: "Why it was decided" },
  { icon: "/continuous-trust/desktop-icon-layers.svg", title: "Policy version", text: "Which rules applied" },
  { icon: "/continuous-trust/desktop-icon-shield.svg", title: "Restricted access", text: "Who may read" },
];



function DesktopAuditRecord() {
  return (
    <section className="w-full bg-white px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[60px]">
        <div className="flex min-w-px flex-1 flex-col justify-center gap-[36px] pt-[7.31px]">
          <div className="flex w-full flex-col gap-[15px]">
            <h2 className="font-dm-serif w-full text-[52px] leading-[58.24px] font-normal text-[#071121] [word-break:break-word]">
              Every decision leaves a <br className="max-xl:hidden" />
              record
            </h2>
            <p className="font-manrope w-full max-w-[720px] text-[18px] leading-[30.6px] font-normal text-[#5b6b82] [word-break:break-word]">
              A record answers who, what, why, when and under which policy <br className="max-xl:hidden" />
              version. Access to the full record is restricted, and sensitive <br className="max-xl:hidden" />
              identifiers are removed before anything is shown outside the audit team.
            </p>
          </div>
          <ul className="grid grid-cols-[repeat(2,228px)] gap-[15px]">
            {dItems.map((it) => (
              <li
                key={it.title}
                className="flex h-[93px] w-[228px] items-start gap-[12px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[25px] py-[17px]"
              >
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={it.icon} width={20} height={20} alt="" />
                </div>
                <div className="flex flex-col items-start gap-[8px]">
                  <p className="font-manrope text-[14px] leading-[23.8px] font-bold whitespace-nowrap text-[#071121]">{it.title}</p>
                  <p className="font-manrope text-[13px] leading-[22.1px] font-normal whitespace-nowrap text-[#5b6b82]">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[520px] min-w-px flex-1 rounded-[24px]">
          <Image
            src="/continuous-trust/desktop-audit-dashboard.webp"
            alt="Audit dashboard showing recorded trust decisions"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


type mRow = {
  icon: string;
  label: ReactNode;
  desc: ReactNode;
  single?: boolean;
};



const mROWS: mRow[] = [
  { icon: "/continuous-trust/mobile-icon-user-2.svg", label: "Actor", desc: "Who, or what, acted", single: true },
  { icon: "/continuous-trust/mobile-icon-doc-2.svg", label: "Action", desc: "What was requested", single: true },
  {
    icon: "/continuous-trust/mobile-icon-info-1.svg",
    label: (<>Reason<br />code</>),
    desc: (<>Why it was<br />decided</>),
  },
  {
    icon: "/continuous-trust/mobile-icon-clock-3.svg",
    label: "Timestamp",
    desc: (<>When it was<br />decided</>),
  },
  {
    icon: "/continuous-trust/mobile-icon-layers.svg",
    label: (<>Policy<br />version</>),
    desc: (<>Which rules<br />applied</>),
  },
  {
    icon: "/continuous-trust/mobile-icon-shield.svg",
    label: (<>Restricted<br />access</>),
    desc: (<>Who may read<br />the full record</>),
  },
];



function MobileEvidence() {
  return (
    <section className="lg:hidden flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[50px]">
        <div className="flex w-full flex-col items-start gap-[14.8px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
              11 · Evidence and audit trail
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            Every decision leaves a
            <br />
            record
          </h2>
          <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
            A record answers who, what, why, when
            <br />
            and under which policy version. Access to
            <br />
            the full record is restricted, and sensitive
            <br />
            identifiers are removed before anything is
            <br />
            shown outside the audit team.
          </p>
          <ul className="flex w-full flex-col items-start gap-[24px] pt-[33.2px]">
            {mROWS.map((r) => (
              <li
                key={r.icon}
                className="flex w-full items-start gap-[12px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[24px] py-[16px]"
              >
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={r.icon} width={20} height={20} alt="" />
                </div>
                <div
                  className={`flex min-w-0 items-start gap-[12px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[24px] ${
                    r.single ? "h-[57.8px] items-center gap-[10px]" : "py-[16px]"
                  }`}
                >
                  <span className="font-manrope text-[14px] font-bold leading-[23.8px] whitespace-nowrap text-[#071121]">
                    {r.label}
                  </span>
                  <span className="font-manrope text-[13px] font-normal leading-[22.1px] whitespace-nowrap text-[#5b6b82]">
                    {r.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="relative h-[98.28px] w-full">
            <span className="absolute left-0 top-[21.2px] inline-flex items-start rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
              Illustrative
            </span>
            <span className="absolute left-[8px] top-[65.89px] inline-flex items-start rounded-[999px] bg-[#e8ecf3] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#3b4a63]">
              Event schema not yet published
            </span>
          </div>
        </div>
        <div className="relative h-[520px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/mobile-audit-dashboard.webp"
            alt="Audit dashboard showing a log of recorded decisions"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function AuditRecordSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopAuditRecord />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileEvidence />
      </div>
    </>
  );
}
