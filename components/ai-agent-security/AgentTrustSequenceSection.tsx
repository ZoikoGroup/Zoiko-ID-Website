import Image from "next/image";
import type { ReactNode } from "react";

interface TrustStep {
  step: string;
  title: string;
  description: ReactNode;
}

const trustSteps: TrustStep[] = [
  {
    step: "1",
    title: "Agent Identity Established",
    description: (
      <>
        Agent authenticates with a credential (key, token, or certificate). Identity verified and logged. Every action can be traced back to
        <br />
        this principal.
      </>
    ),
  },
  {
    step: "2",
    title: "Sponsor & Purpose Confirmed",
    description: (
      <>
        Who authorized this agent? For what purpose? Time limit? These details are recorded in a mandate. Mandate is the grant of
        <br />
        authority, not the agent itself.
      </>
    ),
  },
  {
    step: "3",
    title: "Scope Evaluated",
    description: (
      <>
        Agent requests an action on a resource. Is this action within the agent&apos;s granted scope? Check mandate, organization policy, and
        <br />
        time-of-action rules.
      </>
    ),
  },
  {
    step: "4",
    title: "Decision Rendered",
    description: (
      <>
        Allow, deny, or require additional steps (step-up auth, human review). Decision is made, logged with full context, and returned to
        <br />
        the requestor.
      </>
    ),
  },
  {
    step: "5",
    title: "Action Recorded",
    description: (
      <>
        What happened? Who (agent) did it? On what (resource)? With what authority (mandate)? Outcome? All recorded in audit
        <br />
        evidence with cryptographic proof.
      </>
    ),
  },
  {
    step: "6",
    title: "Continuous Trust Monitor",
    description: (
      <>
        Is the mandate still valid? Has the agent&apos;s status changed? Policies updated? Signals re-evaluated continuously. If trust breaks,
        <br />
        actions are immediately denied.
      </>
    ),
  },
];

export default function AgentTrustSequenceSection() {
  return (
    <section id="trust-sequence" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          AI agent trust sequence
        </h2>

        {/* Hero Graphic Container */}
        <div className="relative aspect-[1120/511] w-full overflow-hidden rounded-[32px] border border-mystic shadow-[0px_4px_20px_0px_rgba(15,23,42,0.06)] lg:h-[511px]">
          <Image
            src="/ai-agent-security/mandate-illustration.png"
            alt="AI agent trust sequence architecture"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 6 Step Sequence Box */}
        <div className="flex w-full flex-col rounded-xl border border-mystic bg-white-solid p-6 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] sm:p-8">
          {trustSteps.map((item, idx) => (
            <div
              key={item.step}
              className={`flex items-start gap-5 py-6 sm:gap-6 ${
                idx < trustSteps.length - 1 ? "border-b border-[#F1F5F9]" : ""
              } ${idx === 0 ? "pt-0" : ""} ${idx === trustSteps.length - 1 ? "pb-0" : ""}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#22B8D6_0%,#2563EB_100%)] font-manrope text-base font-bold text-white-solid shadow-sm">
                {item.step}
              </div>

              <div className="flex flex-col pt-0.5">
                <h4 className="mb-1.5 font-manrope text-[16.8px] font-bold leading-snug text-azure-9">
                  {item.title}
                </h4>
                <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-azure-47">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
