import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dSTEPS: { icon: string; title: string; body: ReactNode; pill: string }[] = [
  {
    icon: "/continuous-trust/desktop-icon-flow-1.svg",
    title: "Trigger",
    body: (
      <>
        A change in context or a request <br className="max-xl:hidden" />
        prompts a check.
      </>
    ),
    pill: "Event list pending",
  },
  {
    icon: "/continuous-trust/desktop-icon-scale-2.svg",
    title: "Policy check",
    body: (
      <>
        The current policy is evaluated <br className="max-xl:hidden" />
        against the context.
      </>
    ),
    pill: "Policy catalog pending",
  },
  {
    icon: "/continuous-trust/desktop-icon-check-1.svg",
    title: "Decision",
    body: "One of the outcomes in section 05 is reached.",
    pill: "Decision labels pending",
  },
  {
    icon: "/continuous-trust/desktop-icon-doc.svg",
    title: "Evidence",
    body: (
      <>
        The decision and its reason are <br className="max-xl:hidden" />
        recorded.
      </>
    ),
    pill: "Event schema pending",
  },
];



function DesktopFlow() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] pb-[105px] pt-[112.31px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          A conceptual flow, with its text equivalent
        </h2>
        <p className="max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          The flow below shows the order of steps in a typical decision. It is a conceptual sequence,{" "}
          <br className="max-xl:hidden" />
          not a description of a specific API. The supported endpoints, events and SDKs are listed{" "}
          <br className="max-xl:hidden" />
          in their own documentation.
        </p>
      </div>
      <div className="flex w-full flex-col gap-[15px]">
        <ol className="m-0 flex w-full list-none items-stretch overflow-clip rounded-[22px] border border-[#d9e1ec] bg-white p-0 pb-[17.1px]">
          {dSTEPS.map((s, i) => (
            <li
              key={s.title}
              className={`flex min-w-px flex-1 flex-col items-start gap-[10.9px] p-[24px] ${
                i < dSTEPS.length - 1 ? "border-r border-[#d9e1ec]" : ""
              }`}
            >
              <div className="flex h-[43.1px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.1px]">
                <Image src={s.icon} width={20} height={20} alt="" />
              </div>
              <h3 className="m-0 flex min-h-[33.19px] w-full items-start font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                {s.title}
              </h3>
              <p className="m-0 w-full pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {s.body}
              </p>
              <div className="mt-auto pt-[1.11px]">
                <span className="inline-block rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
                  {s.pill}
                </span>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex w-full flex-col gap-[15px]">
          <p className="m-0 w-full rounded-[16px] bg-[#f4f6fa] px-[32px] py-[24px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82] xl:whitespace-nowrap">
            <strong className="font-bold text-[#071121]">Text equivalent:</strong> A trigger starts a policy check. The
            check reaches a decision: allow, step up, constrain, deny or refer. The decision and its reason are{" "}
            <br className="max-xl:hidden" />
            recorded as evidence.
          </p>
          <div className="flex h-[75.1px] w-full flex-wrap items-start gap-[16px] pt-[17.1px]">
            {["API Reference (pending)", "Webhooks & Events (pending)"].map((t) => (
              <span
                key={t}
                aria-disabled="true"
                className="flex min-h-[48px] cursor-not-allowed items-center self-stretch rounded-[999px] border border-[#071121] px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[25.5px] whitespace-nowrap text-[#071121]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mSteps: {
  icon: string;
  title: string;
  body: React.ReactNode;
  pill: string;
  border: string;
}[] = [
  {
    icon: "/continuous-trust/mobile-icon-flow.svg",
    title: "Trigger",
    body: (
      <>
        A change in context or a request prompts a
        <br />
        check.
      </>
    ),
    pill: "Event list pending",
    border: "border-b border-r",
  },
  {
    icon: "/continuous-trust/mobile-icon-scale-2.svg",
    title: "Policy check",
    body: (
      <>
        The current policy is evaluated against the
        <br />
        context.
      </>
    ),
    pill: "Policy catalog pending",
    border: "border-b",
  },
  {
    icon: "/continuous-trust/mobile-icon-check-1.svg",
    title: "Decision",
    body: "One of the outcomes in section 05 is reached.",
    pill: "Decision labels pending",
    border: "border-r",
  },
  {
    icon: "/continuous-trust/mobile-icon-doc.svg",
    title: "Evidence",
    body: "The decision and its reason are recorded.",
    pill: "Event schema pending",
    border: "",
  },
];



const mPending = ["API Reference (pending)", "Webhooks & Events (pending)"];



function MobileIntegrationFlow() {
  return (
    <section className="w-full border-b border-[#d9e1ec] bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14.9px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[27.81px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            14 · Integration and
            <br />
            documentation
          </p>
        </div>
        <h2 className="font-dm-serif pb-[0.75px] text-[32px] font-normal leading-[35.84px] text-[#071121]">
          A conceptual flow, with its
          <br />
          text equivalent
        </h2>
        <p className="font-manrope w-full max-w-[720px] pt-[0.575px] text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          The flow below shows the order of steps in
          <br />
          a typical decision. It is a conceptual
          <br />
          sequence, not a description of a specific
          <br />
          API. The supported endpoints, events and
          <br />
          SDKs are listed in their own
          <br />
          documentation.
        </p>
        <ol className="w-full list-none overflow-hidden rounded-[22px] border border-[#d9e1ec] bg-white pt-[17.11px]">
          {mSteps.map((s) => (
            <li
              key={s.title}
              className={`flex flex-col items-start gap-[11px] border-solid border-[#d9e1ec] p-[24px] ${s.border}`}
            >
              <div className="flex h-[43px] w-[42px] items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image src={s.icon} width={20} height={20} alt="" />
              </div>
              <h3 className="font-manrope -mt-px h-[33.19px] w-full text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                {s.title}
              </h3>
              <p className="font-manrope w-full text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                {s.body}
              </p>
              <span className="font-manrope mt-px inline-block rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]">
                {s.pill}
              </span>
            </li>
          ))}
        </ol>
        <div className="w-full rounded-[16px] bg-[#f4f6fa] px-[32px] pb-[24px] pt-[41.1px]">
          <p className="font-manrope text-[15px] font-normal leading-[25.5px] whitespace-nowrap text-[#5b6b82]">
            <strong className="font-bold text-[#071121]">Text equivalent:</strong> A trigger starts a policy
            <br />
            check. The check reaches a decision:
            <br />
            allow, step up, constrain, deny or refer.
            <br />
            The decision and its reason are recorded
            <br />
            as evidence.
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-[16px] pt-[17.1px]">
          {mPending.map((t) => (
            <span
              key={t}
              aria-disabled="true"
              className="font-manrope flex h-[57.5px] min-h-[48px] cursor-not-allowed items-center rounded-full border border-[#071121] px-[26px] py-[15px] text-[15px] font-bold leading-[25.5px] whitespace-nowrap text-[#071121]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FlowSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopFlow />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileIntegrationFlow />
      </div>
    </>
  );
}
