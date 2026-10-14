import Image from "next/image";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: "/ai-agent-security/decision-verify-identity.svg",
    title: "Verify agent identity",
    description: "Is this agent credential valid? Has it been revoked?",
  },
  {
    icon: "/ai-agent-security/decision-check-mandate.svg",
    title: "Check mandate",
    description: "Does this agent have a valid mandate? Is it still within time bounds?",
  },
  {
    icon: "/ai-agent-security/decision-evaluate-scope.svg",
    title: "Evaluate scope",
    description: "Is the requested action within the mandate's scope?",
  },
  {
    icon: "/ai-agent-security/decision-apply-policy.svg",
    title: "Apply organization policy",
    description: "Does organization policy allow this? Any risk signals or conditions?",
  },
  {
    icon: "/ai-agent-security/decision-render-decision.svg",
    title: "Render decision",
    description: "Allow, deny, or require additional verification. Log with full context.",
  },
];

export default function AgentDecisionEnforcementSection() {
  return (
    <section id="decision-enforcement" className="relative overflow-hidden bg-[#030712] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      {/* Background Graphic matching Figma */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/ai-agent-security/decision-enforcement-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.78)_0%,rgba(3,7,18,0.85)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 lg:gap-8">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Decision & enforcement
        </h2>

        {/* Process Box */}
        <div className="flex w-full flex-col rounded-xl border border-mystic bg-white-solid p-8 shadow-sm">
          <p className="mb-6 font-manrope text-base font-normal leading-7 text-[#475569] text-left">
            When an AI agent makes a request, the decision process is:
          </p>

          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex items-center gap-3 rounded-[6px] bg-[#F1F5F9] p-3 text-left transition-colors duration-150 hover:bg-[#E2E8F0]"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-manrope text-[15.2px] font-semibold leading-[26.6px] text-[#475569]">
                    {step.title}
                  </span>
                  <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enforcement Location Warning Box */}
        <div className="w-full rounded-xl border border-[#DC2626] bg-white-solid p-6 shadow-sm text-left">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <span className="font-bold text-[#DC2626]">⚠️ &nbsp; Enforcement Location Matters:</span>{" "}
            This decision can be enforced at the identity layer (who can authenticate), the API layer (who can
            <br />
            call), the resource layer (who can access data), or the application layer (who can see features). All layers should be consistent and
            <br />
            audit decisions across the stack.
          </p>
        </div>
      </div>
    </section>
  );
}
