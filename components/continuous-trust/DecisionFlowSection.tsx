import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dSteps = [
  { icon: "/continuous-trust/desktop-icon-user.svg", title: "Request", body: "A revocation is requested by an authorized party." },
  { icon: "/continuous-trust/desktop-icon-key-2.svg", title: "Verify", body: "The requester’s identity and standing are checked." },
  { icon: "/continuous-trust/desktop-icon-scale-1.svg", title: "Evaluate", body: "Policy is evaluated against the affected grants." },
  { icon: "/continuous-trust/desktop-icon-doc-1.svg", title: "Record", body: "The decision, its reason and policy version are recorded." },
];



function DesktopDecisionFlow() {
  return (
    <section className="flex w-full flex-col items-start bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full items-start justify-center gap-[80px]">
        <div className="relative min-h-[520px] min-w-px flex-1 self-stretch rounded-[24px]">
          <Image
            src="/continuous-trust/desktop-revocation-whiteboard.webp"
            alt=""
            fill
            sizes="50vw"
            className="rounded-[24px] object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[36px]">
          <div className="flex w-full flex-col gap-[14px]">
            <h2 className="pt-[1.01px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
              From request to<br className="max-xl:hidden" />{" "}
              recorded decision
            </h2>
            <p className="w-full max-w-[720px] pt-[2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              A revocation request is verified, authorized, evaluated and<br className="max-xl:hidden" />{" "}
              recorded. Each step has an owner. No step promises a<br className="max-xl:hidden" />{" "}
              completion time; the page describes the order, not the speed.
            </p>
          </div>
          <ol className="relative flex h-[306px] w-full flex-col items-start pl-[18px]">
            <div
              aria-hidden="true"
              className="absolute bottom-[52.91px] left-[42px] top-[44.09px] w-[2px] bg-[#d9e1ec]"
            />
            {dSteps.map((s) => (
              <li key={s.title} className="relative h-[80.98px] w-full shrink-0">
                <div className="absolute left-0 top-0 flex size-[52px] items-center justify-center rounded-[26px] border-2 border-solid border-[#22b8d6] bg-white">
                  <Image src={s.icon} width={26} height={26} alt="" />
                </div>
                <div className="absolute left-[68px] right-0 top-[-1px] flex flex-col gap-[7px]">
                  <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                    {s.title}
                  </h3>
                  <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mSteps: { icon: string; title: string; text: ReactNode }[] = [
  {
    icon: "/continuous-trust/mobile-icon-user.svg",
    title: "Request",
    text: (
      <>
        A revocation is requested by an
        <br />
        authorized party.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-key-2.svg",
    title: "Verify",
    text: (
      <>
        The requester’s identity and standing are
        <br />
        checked.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-scale-1.svg",
    title: "Evaluate",
    text: (
      <>
        Policy is evaluated against the affected
        <br />
        grants.
      </>
    ),
  },
  {
    icon: "/continuous-trust/mobile-icon-doc-1.svg",
    title: "Record",
    text: (
      <>
        The decision, its reason and policy
        <br />
        version are recorded.
      </>
    ),
  },
];



function MobileRevocationJourney() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[50px]">
        <div className="relative h-[520px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/continuous-trust/mobile-revocation-whiteboard.webp"
            alt="Whiteboard sketching a revocation review"
            fill
            sizes="(max-width: 600px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[14px] pt-[7.32px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
              07 · Revocation journey
            </p>
          </div>
          <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
            From request to recorded
            <br />
            decision
          </h2>
          <p className="max-w-[720px] pt-[1.99px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
            A revocation request is verified, authorized,
            <br />
            evaluated and recorded. Each step has an
            <br />
            owner. No step promises a completion
            <br />
            time; the page describes the order, not the
            <br />
            speed.
          </p>
          <ol className="relative flex flex-col pl-[18px] pt-[18px]">
            <div
              aria-hidden="true"
              className="absolute bottom-[10px] left-[43px] top-[28px] w-[2px] bg-[#d9e1ec]"
            />
            {mSteps.map((s) => (
              <li key={s.title} className="relative h-[104.78px]">
                <div className="absolute left-0 top-0 flex size-[52px] items-center justify-center rounded-full border-2 border-solid border-[#6d28d9] bg-white">
                  <Image src={s.icon} width={26} height={26} alt="" />
                </div>
                <div className="absolute left-[70px] right-0 top-[-1px] flex flex-col gap-[6.9px]">
                  <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#071121]">
                    {s.title}
                  </h3>
                  <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="pt-[16px]">
            <span className="inline-flex rounded-full bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
              Illustrative
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DecisionFlowSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopDecisionFlow />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileRevocationJourney />
      </div>
    </>
  );
}
