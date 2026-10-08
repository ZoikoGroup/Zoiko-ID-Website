import { Section, SectionHeader } from "./shared";

const steps = [
  { title: "Identity", description: "Establish who or what the actor is" },
  { title: "Authenticate", description: "Prove the claimed identity" },
  { title: "Verify", description: "Check credentials and claims" },
  { title: "Authorize", description: "Evaluate access decisions" },
  { title: "Revoke", description: "Instant authority termination" },
];

export function StepNumber({
  number,
  className = "size-14 text-xl",
}: {
  number: number;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-azure-53 to-cyan-49 font-manrope font-bold leading-8 text-white-solid ${className}`}
    >
      {number}
    </span>
  );
}

export default function TrustLifecycleSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Continuous trust lifecycle"
        subtitle="Identity re-evaluated through signals and policy at every step"
      />

      <ol className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-center gap-3.5 rounded-xl bg-white-solid p-8 outline-1 -outline-offset-1 outline-grey-91"
          >
            <StepNumber number={index + 1} />
            <h3 className="text-center font-dm-serif text-base font-normal leading-6 text-azure-9">
              {step.title}
            </h3>
            <p className="max-w-40 text-center font-manrope text-sm font-normal leading-5 text-azure-35">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
