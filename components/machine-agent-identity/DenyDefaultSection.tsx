import Image from "next/image";

/* ===== Shared content ===== */

const toolCards: { title: string; body: string }[] = [
  { title: "Read-only lookup", body: "Allowed for one resource." },
  { title: "Write, with approval", body: "Requires step-up before it runs." },
  { title: "Delete", body: "Not permitted for any agent by default." },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopDenyDefault() {
  return (
    <section className="flex w-full flex-col items-start bg-white px-[160px] py-[48px]">
      <div className="relative flex min-h-[420px] w-full items-end overflow-clip rounded-[28px] pb-[0.01px] pt-[18.26px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-[-206.31%] h-[360.3%] w-full">
            <Image
              src="/machine-agent-identity/desktop-trust-readonly.webp"
              alt=""
              fill
              sizes="1120px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.1)] to-[rgba(11,27,51,0.95)] to-[85%]" />
        <div className="relative flex min-w-px flex-1 flex-col items-start gap-[14px] px-[56px] pb-[55.99px] pt-[63.32px]">
          <div className="flex w-full items-stretch justify-center gap-[22px] pt-[17.09px]">
            {toolCards.map((c) => (
              <article
                key={c.title}
                className="flex min-w-px flex-1 flex-col items-start gap-[9px] rounded-[22px] border border-solid border-[rgba(255,255,255,0.16)] bg-white p-[26px]"
              >
                <h3 className="h-[33.19px] w-full whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0f2140]">
                  {c.title}
                </h3>
                <div className="flex w-full flex-col items-start gap-[16.8px]">
                  <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                    {c.body}
                  </p>
                  <span className="rounded-full bg-[rgba(34,184,214,0.1)] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#22b8d6]">
                    Illustrative
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="flex w-full flex-col items-start pt-[1.005px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-white">
              Deny by default; allow only what is listed
            </h2>
          </div>
          <div className="flex w-full flex-col items-start pt-[2px]">
            <p className="w-full font-manrope text-[16px] font-normal leading-[27.2px] text-[#c9d3e3]">
              An agent can reach only the tools and resources its mandate lists. Each entry gives the reason and the action type. Anything not listed is <br className="max-xl:hidden" />
              denied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileDenyDefault() {
  return (
    <section className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]">
      <div className="relative mx-auto flex min-h-[440px] w-full max-w-[560px] items-end overflow-clip rounded-[28px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-202.66%] top-0 h-full w-[505.32%]">
            <Image
              src="/machine-agent-identity/mobile-tools-cover.webp"
              alt=""
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.1)] to-[rgba(11,27,51,0.95)] to-[85%]" />
        <div className="relative flex min-w-px flex-1 flex-col items-start gap-[14.9px] p-[24px]">
          <div className="flex items-center gap-[12px] pr-[92.03px]">
            <span className="h-[2px] w-[27.31px] shrink-0 bg-[#22b8d6]" />
            <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
              12 · Tools, APIs and
              <br />
              resources
            </p>
          </div>
          <div className="flex w-full flex-col items-start pb-[0.745px]">
            <h2 className="w-full font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
              Deny by default; allow
              <br />
              only what is listed
            </h2>
          </div>
          <div className="flex w-full flex-col items-start pt-[1.09px]">
            <p className="w-full whitespace-nowrap font-manrope text-[16px] font-normal leading-[27.2px] text-[#c9d3e3]">
              An agent can reach only the tools and
              <br />
              resources its mandate lists. Each entry
              <br />
              gives the reason and the action type.
              <br />
              Anything not listed is denied.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-[22px] pt-[17.1px]">
            {toolCards.map((c) => (
              <article
                key={c.title}
                className="flex w-full flex-col items-start gap-[9px] rounded-[22px] border border-solid border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.07)] p-[26px]"
              >
                <h3 className="h-[33.19px] w-full whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-white">
                  {c.title}
                </h3>
                <div className="flex w-full flex-col items-start gap-[16.8px]">
                  <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#c9d3e3]">
                    {c.body}
                  </p>
                  <span className="rounded-full bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9]">
                    Illustrative
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DenyDefaultSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopDenyDefault />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileDenyDefault />
      </div>
    </>
  );
}
