const steps = [
  {
    number: "1",
    title: "1. Initial Access Granted",
    description:
      "User signs in. Session established. Access granted for current role and policy.",
  },
  {
    number: "2",
    title: "2. Signal Change Detected",
    description:
      "New information arrives: IP address changed, failed login attempt, organization policy updated, role revoked.",
  },
  {
    number: "3",
    title: "3. Policy Re-evaluated",
    description:
      "System checks: Is this session still trusted? Does updated policy allow the action? Are new mandates valid?",
  },
  {
    number: "4",
    title: "4. Step-Up or Denial",
    description:
      "System requires additional authentication, limits access, or denies the action. User never silently allowed to proceed.",
  },
  {
    number: "5",
    title: "5. Decision Recorded",
    description:
      "Outcome logged with timestamp, reason, and evidence. Auditable trail of trust changes during session.",
  },
];

export default function ContinuousTrustSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <div className="flex max-w-[900px] flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Continuous trust &amp; session changes
          </h2>
          <p className="font-manrope text-base font-normal leading-7 text-azure-47">
            A session may remain recognizable while the right to take an action
            changes as policy, authority or signals change.
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-5">
          {/* Vertical connecting line behind the badges */}
          <div
            aria-hidden="true"
            className="absolute left-[38px] top-8 bottom-8 hidden w-0.5 bg-linear-to-b from-cyan-49 via-azure-53 to-cyan-49 sm:block"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-2 rounded-xl border border-cyan-49 bg-white-solid p-6 pl-6 shadow-xs sm:pl-20"
            >
              <div
                aria-hidden="true"
                className="static mb-2 size-8 shrink-0 rounded-full bg-linear-to-br from-cyan-49 to-azure-48 ring-4 ring-white-solid sm:absolute sm:left-[29px] sm:top-6 sm:mb-0"
              />

              <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
                {step.title}
              </h3>

              <p className="font-manrope text-[14.4px] font-normal leading-6 text-azure-47">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
