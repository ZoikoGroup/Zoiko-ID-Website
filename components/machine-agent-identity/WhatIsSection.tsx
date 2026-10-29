import Image from "next/image";

/* ===== Desktop layout (>= lg) ===== */

function DesktopWhatIs() {
  return (
    <section className="flex w-full flex-col items-start bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="relative h-[500px] min-w-px flex-[1_0_0] rounded-[24px]">
          <Image
            src="/machine-agent-identity/desktop-what-is-identity.webp"
            alt=""
            fill
            sizes="520px"
            className="rounded-[24px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-[1_0_0] flex-col items-start gap-[15px] pt-[7.31px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#07111f]">
            What is machine <br className="max-xl:hidden" />
            identity?
          </h2>
          <p className="w-full max-w-[720px] pt-px font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Machine identity gives a non-human actor a name it can be held to. Each such actor needs an owner, a purpose, a bounded set of permissions and an explainable record of what it did.
          </p>
          <h3 className="w-full pt-[33px] font-dm-serif text-[26px] font-normal leading-[31.2px] text-[#071121]">
            What makes an AI agent authorized?
          </h3>
          <p className="w-full pt-px font-manrope text-[16px] font-normal leading-[27.2px] text-[#334155] xl:whitespace-nowrap">
            An agent mandate identifies the sponsor, the permitted actions and <br className="max-xl:hidden" />
            resources, the applicable policy, the validity period and the revocation <br className="max-xl:hidden" />
            conditions. Without all of these, the agent is not authorized.
          </p>
          <div className="pt-[17px]">
            <span className="flex rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
              Illustrative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileWhatIs() {
  return (
    <section className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[50px]">
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[24px]">
          <Image
            src="/machine-agent-identity/mobile-answer-first.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-[14.9px] pt-[7.32px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              03 · Answer first
            </p>
          </div>
          <h2 className="w-full pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            What is machine identity?
          </h2>
          <p className="w-full max-w-[720px] pt-[1.09px] font-manrope text-[18px] font-normal leading-[30.6px] whitespace-nowrap text-[#5b6b82]">
            Machine identity gives a non-human actor
            <br />
            a name it can be held to. Each such actor
            <br />
            needs an owner, a purpose, a bounded set
            <br />
            of permissions and an explainable record
            <br />
            of what it did.
          </p>
          <h3 className="w-full pt-[25.1px] font-dm-serif text-[26px] font-normal leading-[31.2px] text-[#071121]">
            What makes an AI agent
            <br />
            authorized?
          </h3>
          <p className="w-full pt-[1.1px] font-manrope text-[16px] font-normal leading-[27.2px] whitespace-nowrap text-[#334155]">
            An agent mandate identifies the sponsor, the
            <br />
            permitted actions and resources, the applicable
            <br />
            policy, the validity period and the revocation
            <br />
            conditions. Without all of these, the agent is not
            <br />
            authorized.
          </p>
          <div className="pt-[17.1px]">
            <span className="flex rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
              Illustrative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhatIsSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopWhatIs />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileWhatIs />
      </div>
    </>
  );
}
