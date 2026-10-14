import Image from "next/image";
import type { ReactNode } from "react";

interface ActorCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const actorCards: ActorCard[] = [
  {
    icon: "/workforce-enterprise/actor-employee.svg",
    title: "Employee",
    description: (
      <>
        Authenticated user with assigned role.
        <br />
        Authority limited to defined scope and
        <br />
        policy.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/actor-manager.svg",
    title: "Manager",
    description: (
      <>
        Can delegate tasks, approve access
        <br />
        requests, manage team members.
        <br />
        Auditable authority.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/actor-organization.svg",
    title: "Organization",
    description: (
      <>
        Customer entity that owns employees,
        <br />
        roles, policies, and can revoke access
        <br />
        instantly.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/actor-policy-engine.svg",
    title: "Policy Engine",
    description: (
      <>
        Evaluates access requests. Applies role,
        <br />
        time, location, risk signals. Makes
        <br />
        allow/deny decisions.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/actor-audit-compliance.svg",
    title: "Audit & Compliance",
    description: (
      <>
        Reviews decision logs, access changes,
        <br />
        role hierarchy. Searches for compliance
        <br />
        evidence.
      </>
    ),
  },
  {
    icon: "/workforce-enterprise/actor-workflow-bot.svg",
    title: "Workflow / Bot",
    description: (
      <>
        Automated process acting on behalf of
        <br />
        org. Requires explicit grant and monitoring.
      </>
    ),
  },
];

export default function ActorsAuthoritySection() {
  return (
    <section id="actors-authority" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Actor, affiliation & authority model
        </h2>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actorCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[227px] flex-col items-center justify-center rounded-xl border border-mystic bg-white-solid p-6 text-center shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <h4 className="mb-2 font-manrope text-[16.8px] font-bold leading-snug text-azure-9">
                {card.title}
              </h4>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
