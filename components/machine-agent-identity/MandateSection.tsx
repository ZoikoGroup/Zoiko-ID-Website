import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const fields: {
  title: string;
  body: string;
  dIcon: string;
  mIcon: string;
  mBody?: ReactNode;
}[] = [
  {
    title: "Grantor",
    body: "Who gives the authority.",
    dIcon: "/machine-agent-identity/desktop-icon-user.svg",
    mIcon: "/machine-agent-identity/mobile-icon-user.svg",
  },
  {
    title: "Grantee",
    body: "The agent that receives it.",
    dIcon: "/machine-agent-identity/desktop-icon-bot.svg",
    mIcon: "/machine-agent-identity/mobile-icon-bot.svg",
  },
  {
    title: "Permitted action",
    body: "The single operation allowed.",
    dIcon: "/machine-agent-identity/desktop-icon-key.svg",
    mIcon: "/machine-agent-identity/mobile-icon-key.svg",
  },
  {
    title: "Resource",
    body: "The one thing the action may touch.",
    dIcon: "/machine-agent-identity/desktop-icon-doc.svg",
    mIcon: "/machine-agent-identity/mobile-icon-doc.svg",
    mBody: (
      <>
        The one thing the action may
        <br />
        touch.
      </>
    ),
  },
  {
    title: "Purpose",
    body: "Why the mandate exists.",
    dIcon: "/machine-agent-identity/desktop-icon-info.svg",
    mIcon: "/machine-agent-identity/mobile-icon-info-1.svg",
  },
  {
    title: "Time window",
    body: "When the mandate starts and ends.",
    dIcon: "/machine-agent-identity/desktop-icon-clock.svg",
    mIcon: "/machine-agent-identity/mobile-icon-clock.svg",
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopMandate() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full max-w-[739px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Six fields define what an agent may do
        </h2>
        <p className="w-full max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          A mandate names the grantor, the grantee, the permitted action, the resource, the <br className="max-xl:hidden" />
          purpose, the time window and the conditions. Every field is required, and revocation is <br className="max-xl:hidden" />
          part of the model. The example values are synthetic.
        </p>
      </div>
      <div className="flex w-full items-start gap-[60px]">
        <div className="relative h-[381px] min-w-px flex-[1_0_0] rounded-[24px]">
          <Image
            src="/machine-agent-identity/desktop-lifecycle-whiteboard.webp"
            alt=""
            fill
            sizes="300px"
            className="rounded-[24px] object-cover"
          />
        </div>
        <ul className="grid w-[760px] shrink grid-cols-2 gap-[24px]">
          {fields.map((f) => (
            <li
              key={f.title}
              className="flex h-[111px] items-start gap-[28px] rounded-[22px] border border-solid border-[#d9e1ec] bg-white px-[26px] pt-[25px]"
            >
              <div className="mt-[1px] flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image src={f.dIcon} alt="" width={20} height={20} />
              </div>
              <div className="flex min-w-0 flex-col gap-[7px]">
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">{f.title}</h3>
                <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileMandate() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[59.99px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            08 · Agent mandate
          </p>
        </div>
        <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Six fields define what an
          <br />
          agent may do
        </h2>
        <p className="w-full max-w-[720px] pt-[0.685px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          A mandate names the grantor, the grantee,
          <br />
          the permitted action, the resource, the
          <br />
          purpose, the time window and the
          <br />
          conditions. Every field is required, and
          <br />
          revocation is part of the model. The
          <br />
          example values are synthetic.
        </p>
        <ul className="flex flex-col gap-[24px] pt-[33.2px]">
          {fields.map((f) => (
            <li
              key={f.title}
              className="flex items-start gap-[28px] rounded-[22px] border border-solid border-[#d9e1ec] bg-white px-[26px] pb-[29.2px] pt-[25px]"
            >
              <div className="mt-[1px] flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image src={f.mIcon} alt="" width={20} height={20} />
              </div>
              <div className="flex min-w-0 flex-col gap-[7px]">
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">{f.title}</h3>
                <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {f.mBody ?? f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="pt-[33.21px]">
          <div className="flex items-center gap-[12px]">
            <span className="rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9] whitespace-nowrap">
              Illustrative
            </span>
            <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82] whitespace-nowrap">
              Revocation is modelled as an event
            </p>
          </div>
          <p className="mt-[3.4px] pb-[1.65px] font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82] whitespace-nowrap">
            that ends the mandate early.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function MandateSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopMandate />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileMandate />
      </div>
    </>
  );
}
