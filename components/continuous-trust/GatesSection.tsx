import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";

/* ===== Desktop layout (>= lg) ===== */


const dGATES: { title: string; body: ReactNode }[] = [
  { title: "Route and canonical", body: "Web platform: approved route registry" },
  {
    title: "Signal families",
    body: (
      <>
        Security and engineering: verified <br className="max-xl:hidden" />
        support matrix
      </>
    ),
  },
  {
    title: "Revocation scope",
    body: (
      <>
        Engineering and security: technical <br className="max-xl:hidden" />
        contract
      </>
    ),
  },
  {
    title: "Privacy and legal",
    body: (
      <>
        Privacy and legal: data-processing <br className="max-xl:hidden" />
        inventory
      </>
    ),
  },
];



function DesktopGates() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          What must be approved before this page goes live
        </h2>
        <p className="max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          This page is a specification. Each gate below names the owner and the evidence that{" "}
          <br className="max-xl:hidden" />
          clears it. Until every gate is cleared, nothing on the page is published as a live capability.
        </p>
      </div>
      <div className="relative h-[407px] w-full shrink-0 overflow-hidden rounded-[24px]">
        <Image
          src="/continuous-trust/desktop-gates-office.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="rounded-[24px] object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-[15px]">
        <ul className="m-0 flex w-full list-none items-stretch gap-[24px] p-0 pb-[16px]">
          {dGATES.map((g) => (
            <li
              key={g.title}
              className="flex min-w-px flex-1 flex-col items-start gap-[3.04px] rounded-[16px] border border-[#fca5a5] bg-white px-[20px] pb-[18.14px] pt-[17px]"
            >
              <h3 className="m-0 w-full pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#7f1d1d]">
                {g.title}
              </h3>
              <p className="m-0 font-manrope text-[13px] font-normal leading-[22.1px] text-[#7f1d1d] xl:whitespace-nowrap">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[16px] rounded-[20px] border border-[#fca5a5] bg-[#fef2f2] px-[30px] py-[26px]">
          <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#fee2e2]">
            <Image src="/continuous-trust/desktop-icon-alert-2.svg" width={26} height={26} alt="" />
          </div>
          <p className="m-0 pr-[27.5px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#7f1d1d] xl:whitespace-nowrap">
            <strong className="font-bold">Build allowed. Publication prohibited.</strong> Prepared for explicit
            approval and not locked. Latency, coverage and SLA statements are excluded until{" "}
            <br className="max-xl:hidden" />
            engineering and security provide verified contracts.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) — block 1 ===== */


const m1Gates = [
  { title: "Route and canonical", owner: "Web platform: approved route registry" },
  { title: "Signal families", owner: "Security and engineering: verified support matrix" },
  { title: "Revocation scope", owner: "Engineering and security: technical contract" },
  { title: "Privacy and legal", owner: "Privacy and legal: data-processing inventory" },
];



function MobilePublicationGates() {
  return (
    <section
      id="publication-gates"
      className="scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
            17 · Publication gates
          </p>
        </div>
        <h2 className="pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          What must be approved
          <br />
          before this page goes live
        </h2>
        <p className="max-w-[720px] pt-[1.19px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          This page is a specification. Each gate
          <br />
          below names the owner and the evidence
          <br />
          that clears it. Until every gate is cleared,
          <br />
          nothing on the page is published as a live
          <br />
          capability.
        </p>
        <ul className="flex w-full flex-col gap-[24px] pt-[17.2px]">
          {m1Gates.map((g) => (
            <li
              key={g.title}
              className="flex flex-col gap-[3px] rounded-[16px] border border-solid border-[#fca5a5] bg-white px-[20px] pb-[18.09px] pt-[17px]"
            >
              <p className="pb-[0.8px] font-manrope text-[14px] font-bold leading-[23.8px] text-[#7f1d1d]">
                {g.title}
              </p>
              <p className="font-manrope text-[13px] font-normal leading-[22.1px] text-[#7f1d1d] whitespace-nowrap">
                {g.owner}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[16px] rounded-[20px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[30px] pb-[26px] pt-[43.2px]">
          <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#fee2e2]">
            <Image
              src="/continuous-trust/mobile-icon-alert-2.svg"
              alt=""
              width={26}
              height={26}
              className="size-[26px]"
            />
          </div>
          <p className="pr-[9.64px] font-manrope text-[15px] leading-[25.5px] text-[#7f1d1d] whitespace-nowrap">
            <span className="font-bold">Build allowed. Publication</span>
            <br />
            <span className="font-bold">prohibited.</span>
            <span className="font-normal">{` Prepared for`}</span>
            <br />
            <span className="font-normal">
              explicit approval and not
              <br />
              locked. Latency, coverage and
              <br />
              SLA statements are excluded
              <br />
              until engineering and security
              <br />
              provide verified contracts.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) — block 2 ===== */


const m2Chips = [
  { label: "Delegated authority", href: "/authority-explainers", icon: "/continuous-trust/mobile-icon-key-3.svg" },
  { label: "Trust Center", href: "/trust-center", icon: "/continuous-trust/mobile-icon-shield-2.svg" },
  { label: "Contact", href: "/security-contact", icon: "/continuous-trust/mobile-icon-mail.svg" },
];



function MobileNextStep() {
  return (
    <section className="bg-[#0b1b33] px-[22px] pb-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px] pt-[60px]">
        <div className="flex flex-col pt-[7.32px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              18 · Next step
            </p>
          </div>
          <h2 className="pb-[0.75px] pt-[14.8px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
            Read the authority model,
            <br />
            then reach the right team.
          </h2>
          <p className="pt-[15.99px] font-manrope text-[16px] leading-[27.2px] text-[#b6c3d6] whitespace-nowrap">
            Delegated authority explains what an actor may
            <br />
            do. Trust Center covers assurance. Security and
            <br />
            privacy questions have their own routes.
          </p>
          <div className="flex max-w-[346px] flex-wrap gap-[10px] pt-[16px]">
            {m2Chips.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="inline-flex h-[41.8px] items-center gap-[8px] rounded-full border border-solid border-[rgba(255,255,255,0.22)] px-[14px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#e2e8f0] whitespace-nowrap transition hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
              >
                <Image src={c.icon} alt="" width={18} height={20} className="h-[20px] w-[18px]" />
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative h-[380px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/mobile-footer-network.webp"
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

export default function GatesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopGates />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobilePublicationGates />
        <MobileNextStep />
      </div>
    </>
  );
}
