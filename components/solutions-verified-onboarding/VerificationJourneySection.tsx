import { JourneyStepsHeaderIcon } from "./icons";

interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    step: 1,
    title: "Submit",
    description: "Applicant provides identity and/or organization claims.",
  },
  {
    step: 2,
    title: "Verify",
    description: "Claims checked against authoritative sources and evidence.",
  },
  {
    step: 3,
    title: "Review",
    description: "Human or policy-driven review of verification output.",
  },
  {
    step: 4,
    title: "Decide",
    description: "Approve, deny, or request additional information.",
  },
  {
    step: 5,
    title: "Grant",
    description: "If approved, access granted with scope and expiry.",
  },
];

export default function VerificationJourneySection() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <h2 className="mb-10 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-16 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <JourneyStepsHeaderIcon className="size-[22px] shrink-0 text-azure-9" />
              <span>Five-step</span>
            </span>
            <br />
            <span>verification journey</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Five-step verification journey</span>
        </h2>

        {/* 5 Step Cards */}
        <div className="mx-auto grid max-w-[380px] grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center rounded-[20px] border border-slate-200/80 bg-white px-6 py-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_18px_rgba(0,0,0,0.05)] lg:rounded-2xl lg:px-6 lg:py-8"
            >
              {/* Step Number Badge */}
              <div className="flex size-12 items-center justify-center rounded-full bg-linear-to-b from-[#22B8D6] to-[#1E69EC] font-manrope text-lg font-bold text-white shadow-sm lg:size-11 lg:bg-azure-48 lg:bg-none lg:text-base lg:shadow-xs">
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="mt-4 font-manrope text-base font-bold text-azure-9">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
