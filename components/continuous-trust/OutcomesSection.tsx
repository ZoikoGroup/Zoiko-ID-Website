import Image from "next/image";

/* ===== Desktop layout (>= lg) ===== */


const dOutcomes = [
  {
    icon: "/continuous-trust/desktop-icon-check.svg",
    title: "Allow",
    body: (
      <>
        Context is consistent with the<br className="max-xl:hidden" />{" "}
        mandate.
      </>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-key-1.svg",
    title: "Step up",
    body: (
      <>
        Ask for additional verification<br className="max-xl:hidden" />{" "}
        before acting.
      </>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-scale.svg",
    title: "Constrain",
    body: (
      <>
        Allow only a narrower scope or<br className="max-xl:hidden" />{" "}
        shorter term.
      </>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-x.svg",
    title: "Deny",
    body: (
      <>
        Refuse the action and explain the<br className="max-xl:hidden" />{" "}
        change.
      </>
    ),
  },
  {
    icon: "/continuous-trust/desktop-icon-users.svg",
    title: "Refer",
    body: (
      <>
        Send the decision to an authorized<br className="max-xl:hidden" />{" "}
        human reviewer.
      </>
    ),
  },
];



function DesktopOutcomes() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Five possible outcomes, none automatic
        </h2>
        <p className="w-full max-w-[720px] pt-[1.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          When policy is evaluated against current context, the result is one of a small set of<br className="max-xl:hidden" />{" "}
          outcomes. Each outcome names what changed, who can review it, and how to appeal.<br className="max-xl:hidden" />{" "}
          The outcomes below describe the model; they are not a live control panel.
        </p>
      </div>
      <div className="relative w-full pt-[33.1px]">
        <div
          aria-hidden="true"
          className="absolute left-[8%] right-[8%] top-[68.1px] h-[3px] bg-[#22b8d6]"
        />
        <ol className="relative flex w-full items-start justify-center">
          {dOutcomes.map((o) => (
            <li
              key={o.title}
              className="flex min-w-0 flex-1 flex-col items-center gap-[7.1px] px-[10px] text-center"
            >
              <div className="flex size-[70px] shrink-0 items-center justify-center rounded-[35px] border-[3px] border-solid border-[#22b8d6] bg-white">
                <Image src={o.icon} width={26} height={26} alt="" />
              </div>
              <h3 className="w-full pt-[7.9px] font-manrope text-[16px] font-bold leading-[22.4px] text-[#071121]">
                {o.title}
              </h3>
              <p className="w-full font-manrope text-[13px] font-normal leading-[22.1px] text-[#5b6b82] xl:whitespace-nowrap">
                {o.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mOutcomes = [
  { icon: "check", title: "Allow", text: "Context is consistent with the mandate." },
  { icon: "key", title: "Step up", text: "Ask for additional verification before acting." },
  { icon: "scale", title: "Constrain", text: "Allow only a narrower scope or shorter term." },
  { icon: "x", title: "Deny", text: "Refuse the action and explain the change." },
  { icon: "users", title: "Refer", text: "Send the decision to an authorized human reviewer." },
];



function MobilePolicyDecisions() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            05 · Policy decisions
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Five possible outcomes,
          <br />
          none automatic
        </h2>
        <p className="w-full max-w-[720px] pt-[0.685px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          When policy is evaluated against current
          <br />
          context, the result is one of a small set of
          <br />
          outcomes. Each outcome names what
          <br />
          changed, who can review it, and how to
          <br />
          appeal. The outcomes below describe the
          <br />
          model; they are not a live control panel.
        </p>
        <ul className="flex w-full flex-col items-start pt-[17.2px]">
          {mOutcomes.map((o) => (
            <li key={o.title} className="flex w-full flex-col items-center gap-[7px] px-[10px]">
              <div className="flex size-[70px] shrink-0 items-center justify-center rounded-[35px] border-[3px] border-solid border-[#6d28d9] bg-white">
                <Image src={`/continuous-trust/mobile-icon-${o.icon}.svg`} width={26} height={26} alt="" />
              </div>
              <p className="pt-[8px] text-center font-manrope text-[16px] font-bold leading-[22.4px] whitespace-nowrap text-[#071121]">
                {o.title}
              </p>
              <p className="text-center font-manrope text-[13px] font-normal leading-[22.1px] whitespace-nowrap text-[#5b6b82]">
                {o.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="w-full pt-[33.2px]">
          <span className="inline-flex rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
            Illustrative
          </span>
        </div>
      </div>
    </section>
  );
}

export default function OutcomesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopOutcomes />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobilePolicyDecisions />
      </div>
    </>
  );
}
