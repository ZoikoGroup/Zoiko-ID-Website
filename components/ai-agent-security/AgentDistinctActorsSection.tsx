import Image from "next/image";
import type { ReactNode } from "react";

interface ActorRow {
  icon: string;
  title: string;
  description: ReactNode;
}

const actors: ActorRow[] = [
  {
    icon: "/ai-agent-security/actor-ai-agent.svg",
    title: "The AI Agent",
    description: (
      <>
        A non-human principal with a verifiable identity. Could be a service account, model inference endpoint, or automation
        <br />
        system. Never has implied authority. Authority is always delegated and time-limited.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/actor-sponsor.svg",
    title: "The Sponsor (Human or Org)",
    description: (
      <>
        Decides to delegate authority to the agent. Defines scope (which resources, what actions), purpose (why the agent needs
        <br />
        this), and time limits. Can revoke anytime. Responsible for oversight.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/actor-organization.svg",
    title: "The Organization",
    description: (
      <>
        Owns the resources, sets policy, and enforces boundaries. Decides whether this agent+sponsor combination is allowed. Can
        <br />
        revoke all agent access instantly if policies change.
      </>
    ),
  },
];

export default function AgentDistinctActorsSection() {
  return (
    <section id="distinct-actors" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Distinct actors: agent, sponsor &
          <br />
          organization
        </h2>

        {/* 3 Actors White Container */}
        <div className="flex w-full flex-col rounded-xl border border-mystic bg-white-solid p-6 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] sm:p-8">
          {actors.map((actor, idx) => (
            <div
              key={actor.title}
              className={`flex items-start gap-5 py-6 sm:gap-6 ${
                idx < actors.length - 1 ? "border-b border-[#F1F5F9]" : ""
              } ${idx === 0 ? "pt-0" : ""} ${idx === actors.length - 1 ? "pb-0" : ""}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src={actor.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <div className="flex flex-col gap-1.5 pt-0.5">
                <h4 className="font-manrope text-[16.8px] font-bold leading-snug text-azure-9 text-left">
                  {actor.title}
                </h4>
                <p className="font-manrope text-base font-normal leading-7 text-[#64748B] text-left">
                  {actor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Critical Boundary Red Alert Box */}
        <div className="w-full rounded-xl border border-[#DC2626] bg-[linear-gradient(174deg,rgba(220,38,38,0.08)_0%,rgba(220,38,38,0)_100%)] p-6">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <span className="font-bold text-[#DC2626]">❌ &nbsp; Critical Boundary:</span>{" "}
            The agent is NOT the sponsor. A team member sponsors an agent. A customer sponsors an agent on their behalf.
            <br />
            Identity is separate from authority. One does not imply the other.
          </p>
        </div>
      </div>
    </section>
  );
}
