import Image from "next/image";
import {
  VerifyIdentityCyanIcon,
  CheckMandateCircleIcon,
  ApplyPolicyDocIcon,
  RenderDecisionShieldIcon,
  DarkGavelHeaderIcon,
} from "./icons";

const policySteps = [
  {
    title: "Verify Identity",
    description:
      "Is the actor who they claim to be? Credential valid? Session not anomalous?",
    icon: VerifyIdentityCyanIcon,
  },
  {
    title: "Check Mandate",
    description:
      "Does this actor have a valid delegation for this action? Is it in scope? Still in effect?",
    icon: CheckMandateCircleIcon,
  },
  {
    title: "Apply Policy",
    description:
      "Organization policy (SOX, HIPAA, etc.). Any exceptions? Risk signals?",
    icon: ApplyPolicyDocIcon,
  },
  {
    title: "Render Decision",
    description:
      "Allow, deny, or require step-up auth. Log immediately.",
    icon: RenderDecisionShieldIcon,
  },
];

export default function PolicyEvaluationSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Gavel Icon */}
        <div className="mb-6 flex items-center gap-3 sm:hidden">
          <DarkGavelHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Policy evaluation
            <br />
            &amp; decision
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Policy evaluation &amp; decision
        </h2>

        {/* 2-Column Row: Steps Left, Photo Right (Photo hidden on mobile) */}
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: 4 Policy Rows */}
          <div className="divide-y divide-slate-100 lg:col-span-6">
            {policySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`flex items-start gap-3.5 sm:gap-4 ${
                    idx === 0
                      ? "pb-4.5 sm:pb-5.5"
                      : idx === policySteps.length - 1
                        ? "pt-4.5 sm:pt-5.5"
                        : "py-4.5 sm:py-5.5"
                  }`}
                >
                  {/* Mobile Badge: Blue Numbered Circle */}
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1E69EC] font-manrope text-xs font-bold text-white shadow-xs sm:hidden">
                    {idx + 1}
                  </div>

                  {/* Desktop Icon: Cyan Icon */}
                  <Icon className="mt-0.5 hidden size-5 shrink-0 text-[#22B8D6] sm:block" />

                  <div>
                    <h3 className="font-manrope text-[13.5px] font-bold text-azure-9 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Corporate Decision Team Photo (rs4.png) - hidden on mobile */}
          <div className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] lg:col-span-6 lg:block">
            <Image
              src="/solutions-regulated-services/rs4.png"
              alt="Compliance and risk governance team reviewing policy decisions"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
