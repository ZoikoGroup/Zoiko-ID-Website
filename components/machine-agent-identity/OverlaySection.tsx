import Image from "next/image";

/* ===== Shared content ===== */

const overlayCards: { title: string; body: string; pill: string; dIcon: string; mIcon: string }[] = [
  {
    title: "Existing identity provider",
    body: "Your current provider keeps its role.",
    pill: "Connector pending",
    dIcon: "/machine-agent-identity/desktop-icon-server.svg",
    mIcon: "/machine-agent-identity/mobile-icon-server.svg",
  },
  {
    title: "Policy trust layer",
    body: "Evaluates mandate, policy and context.",
    pill: "Capability pending",
    dIcon: "/machine-agent-identity/desktop-icon-shield-1.svg",
    mIcon: "/machine-agent-identity/mobile-icon-shield-1.svg",
  },
  {
    title: "Relying application",
    body: "Receives the decision and acts on it.",
    pill: "Docs pending",
    dIcon: "/machine-agent-identity/desktop-icon-flow.svg",
    mIcon: "/machine-agent-identity/mobile-icon-flow.svg",
  },
];

/* ===== Desktop layout (>= lg) ===== */

function DesktopOverlay() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <div className="flex w-full flex-col items-start gap-[15px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          An overlay that sits beside your identity provider
        </h2>
        <p className="w-full max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          The pattern runs from your existing identity provider, through a policy trust layer, to the <br className="max-xl:hidden" />
          relying application. Connector and protocol logos appear only once their support is <br className="max-xl:hidden" />
          verified. Until then, the pattern is shown with its text equivalent.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white">
        {overlayCards.map((c, i) => (
          <li
            key={c.title}
            className={`flex min-w-px flex-1 flex-col items-start gap-[11px] px-[26px] py-[30px] ${
              i < overlayCards.length - 1 ? "border-r border-solid border-[#d9e1ec]" : ""
            }`}
          >
            <span className="flex h-[43px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-px">
              <Image src={c.dIcon} width={20} height={20} alt="" />
            </span>
            <h3 className="h-[33.19px] w-full whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
              {c.title}
            </h3>
            <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
              {c.body}
            </p>
            <div className="flex w-full flex-col items-start justify-end pt-px">
              <span className="rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                {c.pill}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

function MobileOverlay() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] pb-[59.99px] pt-[67.32px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
            14 · Integration model
          </p>
        </div>
        <h2 className="w-full pb-[0.75px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          An overlay that sits beside
          <br />
          your identity provider
        </h2>
        <p className="w-full max-w-[720px] whitespace-nowrap pt-[0.675px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          The pattern runs from your existing identity
          <br />
          provider, through a policy trust layer, to the
          <br />
          relying application. Connector and protocol
          <br />
          logos appear only once their support is
          <br />
          verified. Until then, the pattern is shown
          <br />
          with its text equivalent.
        </p>
        <ul className="flex w-full flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white pt-[33.21px]">
          {overlayCards.map((c) => (
            <li
              key={c.title}
              className="flex w-full flex-col items-start gap-[11px] border-b border-solid border-[#d9e1ec] px-[26px] py-[30px]"
            >
              <span className="flex h-[43px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-px">
                <Image src={c.mIcon} width={20} height={20} alt="" />
              </span>
              <h3 className="h-[33.19px] w-full whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                {c.title}
              </h3>
              <p className="w-full pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {c.body}
              </p>
              <div className="flex w-full flex-col items-start justify-end pt-px">
                <span className="rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  {c.pill}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative h-[89.07px] w-full">
          <span className="absolute left-0 top-[33.19px] rounded-full bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] text-[#6d28d9]">
            Illustrative
          </span>
          <p className="absolute left-[121.03px] top-[35.64px] whitespace-nowrap font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
            Text equivalent: the provider identifies,
          </p>
          <p className="absolute left-0 top-[65.33px] whitespace-nowrap font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82]">
            the policy layer decides, the application acts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function OverlaySection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopOverlay />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileOverlay />
      </div>
    </>
  );
}
