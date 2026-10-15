import Image from "next/image";

const stages = [
  {
    icon: "/sandbox/icons/icon_334_2728.svg",
    title: "Authenticate the actor",
    description: "Confirms who is asking.",
    alertIcon: "/sandbox/icons/icon_334_2738.svg",
    alertText: (
      <>
        Does not establish that any
        <br />
        action is allowed.
      </>
    ),
  },
  {
    icon: "/sandbox/icons/icon_334_2745.svg",
    title: "Evaluate delegated scope",
    description: (
      <>
        Checks sponsor, action, resource,
        <br />
        and expiry.
      </>
    ),
    alertIcon: "/sandbox/icons/icon_334_2753.svg",
    alertText: (
      <>
        Does not prove the mandate
        <br />
        is still current.
      </>
    ),
  },
  {
    icon: "/sandbox/icons/icon_334_2760.svg",
    title: "Apply policy and context",
    description: (
      <>
        Evaluates the request against the
        <br />
        current policy version.
      </>
    ),
    alertIcon: "/sandbox/icons/icon_334_2768.svg",
    alertText: (
      <>
        Does not show that policy is
        <br />
        unchanged.
      </>
    ),
  },
  {
    icon: "/sandbox/icons/icon_334_2775.svg",
    title: "Record the outcome",
    description: (
      <>
        Captures the decision and its
        <br />
        basis for review.
      </>
    ),
    alertIcon: "/sandbox/icons/icon_334_2783.svg",
    alertText: (
      <>
        Does not show the
        <br />
        downstream app acted.
      </>
    ),
  },
];

export default function SandboxDecisionSequenceSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-[11px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
            Four stages, each separate
          </h2>

          <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
            A test flow can establish identity, evaluate delegated scope, apply policy, and record
            <br className="hidden sm:inline" />
            evidence. Passing one stage does not imply the others.
          </p>
        </div>

        {/* 2-Image Grid */}
        <div className="mt-[33px] grid grid-cols-1 gap-[20px] md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] sm:h-[280px]">
            <Image
              src="/sandbox/processor-chip.png"
              alt="Processor chip close-up"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] sm:h-[280px]">
            <Image
              src="/sandbox/connected-nodes.png"
              alt="Abstract network of connected nodes"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* 4 Connected Stages */}
        <div className="relative mt-[33px]">
          {/* Horizontal Gradient Connecting Line (Desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-[34px] left-[44px] right-[44px] hidden h-[3px] bg-[linear-gradient(90deg,#22B8D6_0%,#2563EB_100%)] lg:block"
          />

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px]">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="flex flex-col items-start rounded-[14px] border border-[#E2E8F0] bg-white p-[26px_24px] text-left"
              >
                {/* Circle Icon */}
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[6px] border-[#F1F5F9] bg-[#22B8D6] shadow-sm">
                  <Image
                    src={stage.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="brightness-0 invert"
                  />
                </div>

                <h4 className="mt-4 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  {stage.title}
                </h4>

                <p className="mt-1 flex-1 font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                  {stage.description}
                </p>

                {/* Red Warning/Alert Box at Bottom */}
                <div className="mt-5 flex w-full items-start gap-2.5 rounded-[8px] bg-[#FEF2F2] p-[12px] text-left">
                  <Image
                    src={stage.alertIcon}
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0 pt-0.5"
                  />
                  <span className="font-manrope text-[13.6px] font-normal leading-[22.44px] text-[#991B1B]">
                    {stage.alertText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
