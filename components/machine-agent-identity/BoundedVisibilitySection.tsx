import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const visItems: { title: string; dIcon: string; mIcon: string; dBody: ReactNode; mBody: ReactNode }[] = [
  {
    title: "Tenant boundary",
    dIcon: "/machine-agent-identity/desktop-icon-lock.svg",
    mIcon: "/machine-agent-identity/mobile-icon-lock.svg",
    dBody: "Each organization’s records stay within its tenant.",
    mBody: (
      <>
        Each organization’s records stay within
        <br />
        its tenant.
      </>
    ),
  },
  {
    title: "Minimization",
    dIcon: "/machine-agent-identity/desktop-icon-eye-1.svg",
    mIcon: "/machine-agent-identity/mobile-icon-eye-1.svg",
    dBody: "Only the fields a decision needs are recorded.",
    mBody: (
      <>
        Only the fields a decision needs are
        <br />
        recorded.
      </>
    ),
  },
  {
    title: "Evidence permissions",
    dIcon: "/machine-agent-identity/desktop-icon-users.svg",
    mIcon: "/machine-agent-identity/mobile-icon-users.svg",
    dBody: "Reviewers see evidence only within their role.",
    mBody: (
      <>
        Reviewers see evidence only within their
        <br />
        role.
      </>
    ),
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopBoundedVisibility() {
  return (
    <section className="flex w-full flex-col items-start bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="relative h-[500px] min-w-px flex-1 rounded-[24px]">
          <Image
            src="/machine-agent-identity/desktop-privacy-lock.webp"
            alt=""
            fill
            sizes="520px"
            className="rounded-[24px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[36px] pt-[7.31px]">
          <div className="flex w-full flex-col items-start gap-[15px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
              Bounded visibility, <br className="max-xl:hidden" />
              minimized data
            </h2>
            <p className="w-full max-w-[720px] pt-px font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
              Tenant boundaries, data minimization and separate evidence <br className="max-xl:hidden" />
              permissions limit what each person sees. This page makes no <br className="max-xl:hidden" />
              claim of a specific isolation method, cryptography or certification.
            </p>
          </div>
          <ul className="flex w-full flex-col items-start gap-[24px]">
            {visItems.map((it) => (
              <li key={it.title} className="flex w-full items-start gap-[14px]">
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={it.dIcon} width={20} height={20} alt="" />
                </span>
                <div className="flex flex-col items-start">
                  <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] xl:whitespace-nowrap">
                    {it.title}
                  </h3>
                  <p className="pt-[7.99px] font-manrope text-[16px] font-normal leading-[27.2px] text-[#334155] xl:whitespace-nowrap">
                    {it.dBody}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileBoundedVisibility() {
  return (
    <section className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[50px]">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[24px]">
          <div className="absolute left-0 top-[-14.07%] h-[128.15%] w-full">
            <Image
              src="/machine-agent-identity/mobile-trust-lock.webp"
              alt=""
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-[14.9px]">
          <div className="flex items-center gap-[12px] pr-[25.2px]">
            <span className="h-[2px] w-[22.28px] shrink-0 bg-[#22b8d6]" />
            <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              13 · Privacy, security and tenant
              <br />
              boundaries
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            Bounded visibility,
            <br />
            minimized data
          </h2>
          <p className="w-full max-w-[720px] whitespace-nowrap pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Tenant boundaries, data minimization and
            <br />
            separate evidence permissions limit what
            <br />
            each person sees. This page makes no
            <br />
            claim of a specific isolation method,
            <br />
            cryptography or certification.
          </p>
          <ul className="flex w-full flex-col items-start gap-[16px] pt-[17.1px]">
            {visItems.map((it) => (
              <li key={it.title} className="flex w-full items-start gap-[14px]">
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={it.mIcon} width={20} height={20} alt="" />
                </span>
                <div className="flex flex-col items-start">
                  <h3 className="whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                    {it.title}
                  </h3>
                  <p className="whitespace-nowrap pt-[7.99px] font-manrope text-[16px] font-normal leading-[27.2px] text-[#334155]">
                    {it.mBody}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function BoundedVisibilitySection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopBoundedVisibility />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileBoundedVisibility />
      </div>
    </>
  );
}
