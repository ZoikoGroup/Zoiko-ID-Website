import Image from "next/image";

const steps = [
  {
    title: "1. Actor Identity",
    description:
      "Who is making the request? Person, service, or agent with verified identity.",
    icon: "/b2b-saas/icons/delegation-1.svg",
  },
  {
    title: "2. Organization Context",
    description:
      "Which organization are they acting for? Is their membership current and approved?",
    icon: "/b2b-saas/icons/delegation-2.svg",
  },
  {
    title: "3. Mandate & Scope",
    description:
      "What is their explicit authority? Which resources and actions? Are there time or purpose limits?",
    icon: "/b2b-saas/icons/delegation-3.svg",
  },
  {
    title: "4. Policy Evaluation",
    description:
      "Apply organization policy. Apply network, time, and risk signals. Allow, deny, or require step-up.",
    icon: "/b2b-saas/icons/delegation-4.svg",
  },
  {
    title: "5. Auditable Decision",
    description:
      "Log the decision with reason, timestamp, and actor. Provide evidence for compliance and investigation.",
    icon: "/b2b-saas/icons/delegation-5.svg",
  },
];

export default function DelegatedAuthorityModelSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Delegated authority model
        </h2>

        {/* 5 Sequential Cards */}
        <div className="flex w-full flex-col gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-start gap-4 rounded-xl border border-grey-91 bg-white-solid p-6 shadow-xs sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-49/10 text-cyan-49">
                <Image
                  src={step.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-manrope text-[16px] font-bold text-azure-9">
                  {step.title}
                </h3>
                <p className="font-manrope text-[14.4px] font-normal leading-6 text-azure-47">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Warning Callout */}
        <div className="w-full max-w-[1120px] min-h-[134px] rounded-xl border border-[#DC2626] bg-[linear-gradient(173deg,rgba(220,38,38,0.08)_0%,rgba(220,38,38,0)_100%)] p-6 text-left flex flex-col justify-center">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <strong className="font-bold text-[#DC2626]">
              ❌ Membership alone never grants permission.
            </strong>{" "}
            A user is a member of org A but tries to access org B&apos;s data. The system evaluates who
            <br />
            they are (actor), what they&apos;re asking for (resource), their authority in that org (mandate), and org policy. Membership in org A is
            <br />
            irrelevant. Decision: deny.
          </p>
        </div>
      </div>
    </section>
  );
}
