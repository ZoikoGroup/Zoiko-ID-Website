import Image from "next/image";

/* ===== Shared content ===== */

const scenarioCards = [
  {
    image: "service-job",
    title: "Scheduled service job",
  },
  {
    image: "support-agent",
    title: "Support agent",
  },
  {
    image: "device-fleet",
    title: "Device fleet",
  },
];

/* ===== Desktop layout (>= lg) ===== */

const dScenarioBodies: React.ReactNode[] = [
  <>
    A job reads one report within a fixed window,<br className="max-xl:hidden" />{" "}
    under its owner’s mandate.
  </>,
  <>
    An agent drafts a reply but must hand off any<br className="max-xl:hidden" />{" "}
    refund to a person.
  </>,
  "Registered devices report status only; none may change configuration.",
];

function DesktopScenarios() {
  return (
    <section className="flex w-full flex-col items-start gap-[60px] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full flex-col gap-[15px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#071121]">
          Three conceptual scenarios
        </h2>
        <p className="w-full max-w-[720px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Each scenario shows how the model applies. None describes a named customer or a live<br className="max-xl:hidden" />{" "}
          deployment.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center gap-[22px]">
        {scenarioCards.map((c, i) => (
          <li
            key={c.title}
            className="relative flex min-w-px flex-1 flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[180px] w-full shrink-0">
              <Image
                src={`/machine-agent-identity/desktop-examples-${c.image}.webp`}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[8.9px] p-[24px]">
              <h3 className="h-[33.19px] shrink-0 -translate-y-px font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                {c.title}
              </h3>
              <p className="pb-[0.695px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                {dScenarioBodies[i]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */

const mScenarioBodies: React.ReactNode[] = [
  <>
    A job reads one report within a fixed window,<br />
    under its owner’s mandate.
  </>,
  <>
    An agent drafts a reply but must hand off any<br />
    refund to a person.
  </>,
  <>
    Registered devices report status only; none<br />
    may change configuration.
  </>,
];

function MobileScenarios() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            15 · Use cases and questions
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          Three conceptual
          <br />
          scenarios
        </h2>
        <p className="w-full max-w-[720px] pt-[1.19px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          Each scenario shows how the model
          <br />
          applies. None describes a named
          <br />
          customer or a live deployment.
        </p>
        <ul className="flex w-full flex-col gap-[22px] pt-[33.21px]">
          {scenarioCards.map((c, i) => (
            <li
              key={c.title}
              className="relative flex w-full flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[180px] w-full shrink-0">
                <Image
                  src={`/machine-agent-identity/mobile-examples-${c.image}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8.9px] p-[24px]">
                <h3 className="h-[33.19px] shrink-0 -translate-y-px font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                  {c.title}
                </h3>
                <p className="pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] whitespace-nowrap text-[#5b6b82]">
                  {mScenarioBodies[i]}
                </p>
                <div className="flex w-full flex-col items-start justify-end pt-[1.11px]">
                  <span className="inline-flex rounded-[999px] bg-[#ede9fe] px-[10px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.7px] tracking-[0.88px] whitespace-nowrap text-[#6d28d9]">
                    Conceptual
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ScenariosSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopScenarios />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileScenarios />
      </div>
    </>
  );
}
