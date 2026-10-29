import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const events: {
  title: string;
  body: string;
  dIcon: string;
  mIcon: string;
  mBody?: ReactNode;
}[] = [
  {
    title: "Issue",
    body: "A credential is created for a bound principal.",
    dIcon: "/machine-agent-identity/desktop-icon-key.svg",
    mIcon: "/machine-agent-identity/mobile-icon-key.svg",
    mBody: (
      <>
        A credential is created for a bound
        <br />
        principal.
      </>
    ),
  },
  {
    title: "Rotate",
    body: "A credential is replaced before its end.",
    dIcon: "/machine-agent-identity/desktop-icon-refresh.svg",
    mIcon: "/machine-agent-identity/mobile-icon-refresh.svg",
  },
  {
    title: "Expire",
    body: "A credential reaches the end of its valid period.",
    dIcon: "/machine-agent-identity/desktop-icon-clock.svg",
    mIcon: "/machine-agent-identity/mobile-icon-clock.svg",
    mBody: (
      <>
        A credential reaches the end of its valid
        <br />
        period.
      </>
    ),
  },
  {
    title: "Revoke",
    body: "A credential is withdrawn before its end.",
    dIcon: "/machine-agent-identity/desktop-icon-x.svg",
    mIcon: "/machine-agent-identity/mobile-icon-x.svg",
  },
];

const states: {
  title: string;
  image: string;
  pill: string;
  body: ReactNode;
  gap: string;
}[] = [
  {
    title: "Requested",
    image: "/machine-agent-identity/mobile-state-requested.webp",
    pill: "Pending",
    body: "The revoke has been asked for.",
    gap: "gap-[7px]",
  },
  {
    title: "Confirmed",
    image: "/machine-agent-identity/mobile-state-confirmed.webp",
    pill: "Confirmed state",
    body: "The system has recorded the change.",
    gap: "gap-[7px]",
  },
  {
    title: "Stale",
    image: "/machine-agent-identity/mobile-state-stale.webp",
    pill: "Flagged",
    body: (
      <>
        The last decision may not reflect current
        <br />
        context.
      </>
    ),
    gap: "gap-[6.9px]",
  },
  {
    title: "Unavailable",
    image: "/machine-agent-identity/mobile-state-unavailable.webp",
    pill: "Error case",
    body: (
      <>
        The source cannot be reached. No safe
        <br />
        outcome is asserted.
      </>
    ),
    gap: "gap-[6.9px]",
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopLifecycle() {
  return (
    <section className="flex w-full flex-col items-start bg-white px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-px flex-[1_0_0] flex-col items-start gap-[36px]">
          <div className="flex w-full flex-col items-start gap-[15px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
              Issue, rotate, expire and revoke are separate events
            </h2>
            <p className="w-full max-w-[720px] pt-[0.9px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Each lifecycle event is recorded on its own. Secrets are never <br className="max-xl:hidden" />
              displayed on this page, and no credential value appears in an <br className="max-xl:hidden" />
              example or an analytics event.
            </p>
          </div>
          <ul className="flex w-full flex-col items-start gap-[24px]">
            {events.map((e) => (
              <li key={e.title} className="flex w-full items-start gap-[14px]">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={e.dIcon} alt="" width={20} height={20} />
                </div>
                <div className="min-w-0">
                  <div className="h-[33.19px]">
                    <h3 className="relative -top-[1px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                      {e.title}
                    </h3>
                  </div>
                  <p className="font-manrope text-[16px] font-normal leading-[27.2px] text-[#334155] xl:whitespace-nowrap">
                    {e.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[500px] min-w-px flex-[1_0_0] rounded-[24px]">
          <Image
            src="/machine-agent-identity/desktop-trust-lock.webp"
            alt=""
            fill
            sizes="520px"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileLifecycle() {
  return (
    <>
      <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
          <div className="flex flex-col gap-[14.8px] pt-[7.31px]">
            <div className="flex items-center gap-[12px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
                10 · Credential lifecycle
              </p>
            </div>
            <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
              Issue, rotate, expire and
              <br />
              revoke are separate events
            </h2>
            <p className="w-full max-w-[720px] pt-[0.59px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
              Each lifecycle event is recorded on its own.
              <br />
              Secrets are never displayed on this page,
              <br />
              and no credential value appears in an
              <br />
              example or an analytics event.
            </p>
            <ul className="flex flex-col gap-[16px] pt-[17.2px]">
              {events.map((e) => (
                <li key={e.title} className="flex items-start gap-[14px]">
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                    <Image src={e.mIcon} alt="" width={20} height={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="h-[33.19px]">
                      <h3 className="relative -top-[1px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                        {e.title}
                      </h3>
                    </div>
                    <p className="font-manrope text-[16px] font-normal leading-[27.2px] text-[#334155] whitespace-nowrap">
                      {e.mBody ?? e.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] w-full rounded-[24px]">
            <Image
              src="/machine-agent-identity/mobile-trust-lock.webp"
              alt=""
              fill
              sizes="(max-width: 1023px) 560px"
              className="rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60.01px] pt-[67.31px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
          <div className="flex items-center gap-[12px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              11 · Trust state and revocation
            </p>
          </div>
          <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            A request to revoke is not
            <br />
            yet a revocation
          </h2>
          <p className="w-full max-w-[720px] pt-[0.685px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
            A revocation request is shown as pending
            <br />
            until the system confirms it. Only a
            <br />
            confirmed state is presented as completed.
            <br />
            Propagation depends on the credential, the
            <br />
            session and the integration, and no instant
            <br />
            effect is promised.
          </p>
          <ul className="flex flex-col gap-[20px] pt-[33.2px]">
            {states.map((s) => (
              <li
                key={s.title}
                className="flex flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
              >
                <div className="relative h-[130px] w-full shrink-0">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 560px"
                    className="object-cover"
                  />
                </div>
                <div className={`flex w-full flex-col items-start p-[22px] ${s.gap}`}>
                  <div className="h-[33.19px] w-full shrink-0">
                    <h3 className="relative -top-[1px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                      {s.title}
                    </h3>
                  </div>
                  <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                    {s.body}
                  </p>
                  <div className="pt-px">
                    <span className="inline-flex rounded-[999px] bg-[#fef3c7] px-[12px] py-[5.89px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e] whitespace-nowrap">
                      {s.pill}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default function LifecycleSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopLifecycle />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileLifecycle />
      </div>
    </>
  );
}
