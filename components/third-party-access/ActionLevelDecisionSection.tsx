import Image from "next/image";

const decisionSteps = [
  {
    icon: "/third-party-access/action-step-request.svg",
    title: "Request",
    description: "Recipient asks to access resource",
  },
  {
    icon: "/third-party-access/action-step-verify.svg",
    title: "Verify Identity",
    description: "Is credential valid?",
  },
  {
    icon: "/third-party-access/action-step-policy.svg",
    title: "Check Mandate",
    description: "Is grant still active?",
  },
  {
    icon: "/third-party-access/action-step-scope.svg",
    title: "Evaluate Scope",
    description: "Does action fit scope?",
  },
  {
    icon: "/third-party-access/action-step-evidence.svg",
    title: "Apply Policy",
    description: "Org rules, risk check?",
  },
  {
    icon: "/third-party-access/action-step-decision.svg",
    title: "ALLOW / DENY",
    description: "Decision logged",
  },
];

export default function ActionLevelDecisionSection() {
  return (
    <section id="action-decision" className="bg-[#F1F5F9] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[95px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Action-level decision flow
          </h2>
          <p className="font-manrope text-base font-normal text-azure-47 sm:text-[17px]">
            Every request from a delegated recipient is evaluated in real time.
          </p>
        </div>

        {/* 6-Step Decision Flow Box */}
        <div className="w-full overflow-x-auto rounded-[12px] border border-mystic bg-white-solid p-6 shadow-sm sm:p-10">
          <div className="flex min-w-[780px] items-center justify-between gap-3 lg:gap-4">
            {decisionSteps.map((step, idx) => (
              <div key={step.title} className="flex flex-1 items-center">
                {/* Step Card */}
                <div className="flex flex-1 flex-col items-center gap-2.5 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-49/10">
                    <Image
                      src={step.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <h3 className="font-manrope text-sm font-semibold text-[#475569] sm:text-[14px]">
                    {step.title}
                  </h3>
                  <p className="max-w-[120px] font-manrope text-xs font-normal leading-tight text-azure-47 sm:text-[12px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow to Next Step (except last) */}
                {idx < decisionSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="px-1 text-lg font-bold text-cyan-49 lg:px-2"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
