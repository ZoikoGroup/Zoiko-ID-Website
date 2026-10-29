import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Shared content ===== */

const principals: {
  label: string;
  title: string;
  dImage: string;
  mImage: string;
  dBody: ReactNode;
  mBody: ReactNode;
}[] = [
  {
    label: "Runtime",
    title: "Service account",
    dImage: "/machine-agent-identity/desktop-principal-runtime-dev.webp",
    mImage: "/machine-agent-identity/mobile-principal-runtime-dev.webp",
    dBody: (
      <>
        A named account a <br className="max-xl:hidden" />
        software service uses to <br className="max-xl:hidden" />
        call another system.
      </>
    ),
    mBody: (
      <>
        A named account a software service uses to call
        <br />
        another system.
      </>
    ),
  },
  {
    label: "Runtime",
    title: "Workload",
    dImage: "/machine-agent-identity/desktop-principal-runtime-code.webp",
    mImage: "/machine-agent-identity/mobile-principal-runtime-code.webp",
    dBody: (
      <>
        A running job or container, <br className="max-xl:hidden" />
        with its own identity and <br className="max-xl:hidden" />
        lifetime.
      </>
    ),
    mBody: (
      <>
        A running job or container, with its own identity
        <br />
        and lifetime.
      </>
    ),
  },
  {
    label: "Ownership",
    title: "Machine or device",
    dImage: "/machine-agent-identity/desktop-principal-ownership.webp",
    mImage: "/machine-agent-identity/mobile-principal-ownership.webp",
    dBody: (
      <>
        A physical or virtual <br className="max-xl:hidden" />
        machine, identified by its <br className="max-xl:hidden" />
        registered owner.
      </>
    ),
    mBody: (
      <>
        A physical or virtual machine, identified by its
        <br />
        registered owner.
      </>
    ),
  },
  {
    label: "Governed",
    title: "AI agent",
    dImage: "/machine-agent-identity/desktop-principal-governed.webp",
    mImage: "/machine-agent-identity/mobile-principal-governed.webp",
    dBody: (
      <>
        Acts toward a goal, but <br className="max-xl:hidden" />
        only under a sponsor and <br className="max-xl:hidden" />
        a bounded mandate.
      </>
    ),
    mBody: (
      <>
        Acts toward a goal, but only under a sponsor
        <br />
        and a bounded mandate.
      </>
    ),
  },
  {
    label: "Human",
    title: "Sponsor",
    dImage: "/machine-agent-identity/desktop-principal-human.webp",
    mImage: "/machine-agent-identity/mobile-principal-human.webp",
    dBody: (
      <>
        The person or <br className="max-xl:hidden" />
        organization accountable <br className="max-xl:hidden" />
        for the principal above.
      </>
    ),
    mBody: (
      <>
        The person or organization accountable for the
        <br />
        principal above.
      </>
    ),
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopPrincipals() {
  return (
    <section
      id="actor-types"
      className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]"
    >
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Five kinds of principal, each with an owner
        </h2>
        <p className="max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Service accounts, workloads, machines and devices, and AI agents are different things. <br className="max-xl:hidden" />
          Each has a definition, an accountable owner and its own lifecycle. A human sponsor <br className="max-xl:hidden" />
          stands behind every non-human principal.
        </p>
      </div>
      <ul className="flex w-full items-stretch gap-[18px]">
        {principals.map((p) => (
          <li
            key={p.title}
            className="flex min-w-px flex-1 flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[150px] w-full shrink-0">
              <Image src={p.dImage} alt="" fill sizes="210px" className="object-cover" />
            </div>
            <div className="flex w-full flex-col gap-[7px] p-[22px]">
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#0e7490] whitespace-nowrap">
                {p.label}
              </p>
              <h3 className="h-[33.19px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                <span className="relative -top-px">{p.title}</span>
              </h3>
              <p className="pb-[0.595px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                {p.dBody}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobilePrincipals() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[59.99px] pt-[67.32px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            05 · Actor taxonomy
          </p>
        </div>
        <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Five kinds of principal,
          <br />
          each with an owner
        </h2>
        <p className="w-full max-w-[720px] pt-[0.675px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          Service accounts, workloads, machines
          <br />
          and devices, and AI agents are different
          <br />
          things. Each has a definition, an
          <br />
          accountable owner and its own lifecycle. A
          <br />
          human sponsor stands behind every non-
          <br />
          human principal.
        </p>
        <ul className="flex w-full flex-col gap-[18px] pt-[33.21px]">
          {principals.map((p) => (
            <li
              key={p.title}
              className="flex w-full flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[150px] w-full shrink-0">
                <Image src={p.mImage} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="flex h-[211.56px] w-full flex-col gap-[7px] p-[22px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#0e7490] whitespace-nowrap">
                  {p.label}
                </p>
                <h3 className="mt-[0.99px] h-[33.19px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121] whitespace-nowrap">
                  <span className="relative -top-px">{p.title}</span>
                </h3>
                <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {p.mBody}
                </p>
                <span className="mt-auto flex w-fit items-start rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[15.5px]">
                  <span className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e] whitespace-nowrap">
                    Pending verification
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PrincipalsSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopPrincipals />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobilePrincipals />
      </div>
    </>
  );
}
