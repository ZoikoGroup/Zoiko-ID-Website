import Image from "next/image";
import type { ReactNode } from "react";

interface AuthzStep {
  icon: string;
  title: string;
  description: ReactNode;
}

const authzSteps: AuthzStep[] = [
  {
    icon: "/workforce-enterprise/authz-who-requesting.svg",
    title: "Who is requesting?",
    description: (
      <>
        Authenticated employee identity confirmed. Organization
        <br />
        membership verified.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/authz-what-role.svg",
    title: "What is their role?",
    description: (
      <>
        Current role and associated permissions looked up. Manager,
        <br />
        director, engineer, auditor?
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/authz-what-accessing.svg",
    title: "What are they accessing?",
    description: (
      <>
        Resource, action, and scope identified. Protected data,
        <br />
        admin panel, customer records?
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/authz-policy-say.svg",
    title: "What does policy say?",
    description: (
      <>
        Organization policy applied. Time-of-day, IP location, risk
        <br />
        score, MFA status considered.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/authz-allow-deny.svg",
    title: "Allow or deny?",
    description: (
      <>
        Decision made in milliseconds. Reason logged. Evidence
        <br />
        recorded for audit.
      </>
    ),
  },
];

const evidenceSteps: AuthzStep[] = [
  {
    icon: "/workforce-enterprise/evidence-who-acted.svg",
    title: "Who Acted",
    description: (
      <>
        Employee identity, organization, and timestamp of
        <br />
        decision or access attempt.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/evidence-what-role.svg",
    title: "What Role",
    description: (
      <>
        Role at time of action. Role history and delegations linked
        <br />
        in evidence.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/evidence-audit-log.svg",
    title: "Immutable Audit Log",
    description: (
      <>
        Evidence retained per policy. Searchable, indexed, and
        <br />
        compliance-ready.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/evidence-what-resource.svg",
    title: "What Resource",
    description: (
      <>
        Resource ID, action, and scope requested. Access path
        <br />
        traced.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/evidence-policy-applied.svg",
    title: "Policy Applied",
    description: (
      <>
        Policy version, time, location, MFA status, risk signals all
        <br />
        logged.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/evidence-decision.svg",
    title: "Decision",
    description: (
      <>
        Allow or deny. Reason category. If denied, guidance
        <br />
        provided.
      </>
    ),
  },
];

export default function PerActionAuthzSection() {
  return (
    <section id="per-action-authorization" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-14 lg:gap-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Per-action authorization */}
          <div className="flex flex-col">
            <h2 className="mb-10 font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
              Per-action
              <br />
              authorization
            </h2>

            <div className="flex flex-col gap-4">
              {authzSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-5 rounded-xl border border-mystic bg-white-solid p-7 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(34,184,214,0.15)_0%,rgba(37,99,235,0.15)_100%)]">
                    <Image
                      src={step.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>

                  <div className="flex flex-col pt-0.5">
                    <h4 className="mb-1.5 font-manrope text-[16.8px] font-bold leading-snug text-azure-9">
                      {step.title}
                    </h4>
                    <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-azure-47">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Evidence, provenance & review */}
          <div className="flex flex-col">
            <h2 className="mb-10 font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
              Evidence, provenance
              <br />
              & review
            </h2>

            <div className="flex flex-col gap-4">
              {evidenceSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-5 rounded-xl border border-mystic bg-white-solid p-7 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(34,184,214,0.15)_0%,rgba(37,99,235,0.15)_100%)]">
                    <Image
                      src={step.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>

                  <div className="flex flex-col pt-0.5">
                    <h4 className="mb-1.5 font-manrope text-[16.8px] font-bold leading-snug text-azure-9">
                      {step.title}
                    </h4>
                    <p className="font-manrope text-[15.2px] font-normal leading-[26.6px] text-azure-47">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
