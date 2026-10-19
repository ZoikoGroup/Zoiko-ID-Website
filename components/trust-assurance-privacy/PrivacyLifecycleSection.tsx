import Image from "next/image";

interface LifecycleStage {
  icon: string;
  title: string;
  description: string;
}

const stages: LifecycleStage[] = [
  {
    icon: "/trust-assurance-privacy/lifecycle-icon-1.svg",
    title: "Collect",
    description: "Only approved attributes are collected.",
  },
  {
    icon: "/trust-assurance-privacy/lifecycle-icon-2.svg",
    title: "Evaluate",
    description: "Decisions stay within scope.",
  },
  {
    icon: "/trust-assurance-privacy/lifecycle-icon-3.svg",
    title: "Record",
    description: "Evidence is proportional to the decision.",
  },
  {
    icon: "/trust-assurance-privacy/lifecycle-icon-4.svg",
    title: "Revoke",
    description: "Access may be withdrawn when context changes.",
  },
  {
    icon: "/trust-assurance-privacy/lifecycle-icon-5.svg",
    title: "Dispose",
    description: "Erasure follows the approved retention record.",
  },
];

export default function PrivacyLifecycleSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-16">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Collect less, decide in scope, record proportionately
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Retention and erasure follow reviewed records, not assumptions made
            on this screen. No period, deletion schedule or backup commitment is
            stated here.
          </p>
        </div>

        {/* 5-Step Horizontal Stepper Timeline */}
        <div className="relative w-full">
          {/* Horizontal Connecting Gradient Line (Spanning from center of 1st circle to center of 5th circle) */}
          <div
            aria-hidden="true"
            className="absolute top-[27px] left-[10%] right-[10%] hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#22B8D6] to-[#2563EB] md:block"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Circle Icon Container */}
                <div className="flex size-[54px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563EB] bg-white shadow-xs transition-transform duration-200 hover:scale-105">
                  <Image
                    src={stage.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="size-5.5 shrink-0"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3.5 font-manrope text-[16px] font-bold text-[#071426]">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="mt-1 max-w-[190px] font-manrope text-[13px] leading-relaxed text-[#64748B]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Retention Callout Notice Banner */}
        <div className="flex items-center gap-4 rounded-[16px] border border-[#CBD5E1] bg-white p-6 shadow-xs sm:gap-5 sm:p-7">
          <Image
            src="/trust-assurance-privacy/lifecycle-icon-notice.svg"
            alt=""
            width={28}
            height={28}
            className="size-7 shrink-0"
          />
          <div className="flex flex-col gap-1">
            <h4 className="font-manrope text-base font-bold text-[#071426] sm:text-[17px]">
              Retention
            </h4>
            <p className="font-manrope text-[13.5px] leading-relaxed text-[#64748B]">
              Retention periods appear here only when a reviewed Privacy record
              is present. Until then, this section hands off to the Privacy
              Notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
