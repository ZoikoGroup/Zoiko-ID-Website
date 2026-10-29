import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dCards: { title: string; icon: string; body: React.ReactNode }[] = [
  {
    title: "Workload",
    icon: "/continuous-trust/desktop-icon-cog.svg",
    body: "A scheduled job reads one resource within a fixed window.",
  },
  {
    title: "Service",
    icon: "/continuous-trust/desktop-icon-flow.svg",
    body: (
      <>
        A service calls an API only for the <br className="max-xl:hidden" />
        purposes its sponsor approved.
      </>
    ),
  },
  {
    title: "Delegated agent",
    icon: "/continuous-trust/desktop-icon-bot.svg",
    body: (
      <>
        An agent acts for a person, and stops <br className="max-xl:hidden" />
        when that person’s grant is withdrawn.
      </>
    ),
  },
];



function DesktopAgentsMandate() {
  return (
    <section className="flex w-full flex-col bg-white px-[160px] py-[48px]">
      <div className="relative flex min-h-[420px] w-full items-end overflow-hidden rounded-[28px] pt-[18.26px]">
        <Image
          src="/continuous-trust/desktop-machines-ai.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.1)] to-[rgba(11,27,51,0.95)] to-[85%]" />
        <div className="relative flex min-w-px flex-1 flex-col gap-[14px] px-[56px] pb-[55.99px] pt-[63.32px]">
          <ul className="grid w-full list-none grid-cols-3 items-stretch gap-[24px] pt-[33.09px]">
            {dCards.map((c) => (
              <li
                key={c.title}
                className="flex min-h-[195px] flex-col gap-[24px] rounded-[18px] border border-solid border-[rgba(255,255,255,0.25)] bg-white p-[24px]"
              >
                <div className="flex w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(34,184,214,0.15)] py-[11px]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <div className="flex w-full flex-col">
                  <h3 className="font-manrope text-[16px] font-bold leading-[22.4px] text-[#0a1a33]">{c.title}</h3>
                  <p className={`pt-[8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] ${typeof c.body === "string" ? "" : "xl:whitespace-nowrap"}`}>
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="pt-[1.005px] font-dm-serif text-[52px] font-normal leading-[58.24px] text-white">
            Agents act within a sponsored, limited mandate
          </h2>
          <p className="pt-[2px] font-manrope text-[16px] font-normal leading-[27.2px] text-[#c9d3e3]">
            An agent has a sponsor and a bounded mandate. Its authority ends when the mandate ends, and it does not extend itself. Three illustrative scenarios show how this applies.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


function MPill({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-start rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9] ${className}`}
    >
      Illustrative
    </span>
  );
}



function MScenarioCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-start rounded-[18px] border border-solid border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.07)] p-[24px] backdrop-blur-[24px]">
      <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
        <Image src={icon} width={20} height={20} alt="" />
      </div>
      <h3 className="mt-[-1px] w-full font-manrope text-[16px] font-bold leading-[22.4px] text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}



function MobileMachines() {
  return (
    <section
      className="lg:hidden flex w-full flex-col items-start px-[22px] py-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(11, 27, 51) 0%, rgb(11, 27, 51) 100%)",
      }}
    >
      <div className="relative mx-auto flex min-h-[380px] w-full max-w-[560px] items-end overflow-clip rounded-[28px]">
        <Image
          src="/continuous-trust/mobile-machines-cover.webp"
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, 560px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.1)] to-[85%] to-[rgba(11,27,51,0.94)]" />
        <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start gap-[14.8px] p-[24px]">
          <div className="flex items-center gap-[12px] pr-[44.64px]">
            <div className="h-[2px] w-[23.58px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
              10 · Machine and AI-agent
              <br />
              scenarios
            </p>
          </div>
          <h2 className="w-full pb-[0.65px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
            Agents act within a
            <br />
            sponsored, limited
            <br />
            mandate
          </h2>
          <p className="w-full pt-[1.2px] font-manrope text-[16px] font-normal leading-[27.2px] text-[#c9d3e3] whitespace-nowrap">
            An agent has a sponsor and a bounded
            <br />
            mandate. Its authority ends when the
            <br />
            mandate ends, and it does not extend
            <br />
            itself. Three illustrative scenarios show
            <br />
            how this applies.
          </p>
          <div className="flex w-full flex-col items-start gap-[24px] pt-[33.2px]">
            <MScenarioCard icon="/continuous-trust/mobile-icon-cog.svg" title="Workload">
              <div className="min-h-[85.48px] w-full pt-[15.9px]">
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#c9d3e3]">
                  A scheduled job reads one resource
                  <br />
                  within a fixed window.{" "}
                  <MPill className="my-[-3px] align-middle" />
                </p>
              </div>
            </MScenarioCard>
            <MScenarioCard icon="/continuous-trust/mobile-icon-flow.svg" title="Service">
              <div className="flex w-full flex-col items-start gap-[16.695px] pt-[15.895px]">
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#c9d3e3]">
                  A service calls an API only for the
                  <br />
                  purposes its sponsor approved.
                </p>
                <MPill />
              </div>
            </MScenarioCard>
            <MScenarioCard icon="/continuous-trust/mobile-icon-bot.svg" title="Delegated agent">
              <div className="flex w-full flex-col items-start gap-[16.69px] pt-[15.9px]">
                <p className="font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#c9d3e3]">
                  An agent acts for a person, and stops
                  <br />
                  when that person’s grant is withdrawn.
                </p>
                <MPill />
              </div>
            </MScenarioCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AgentsMandateSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopAgentsMandate />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileMachines />
      </div>
    </>
  );
}
