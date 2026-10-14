import Image from "next/image";
import type { ReactNode } from "react";

interface PersonaCard {
  image: string;
  title: string;
  description: ReactNode;
}

const personas: PersonaCard[] = [
  {
    image: "/ai-agent-security/persona-sponsor.png",
    title: "Sponsor (Human)",
    description: (
      <>
        Decides to delegate work to an AI
        <br />
        agent. Creates the mandate,
        <br />
        defines scope and purpose. Can
        <br />
        revoke anytime. Responsible for
        <br />
        agent&apos;s actions.
      </>
    ),
  },
  {
    image: "/ai-agent-security/persona-policy-owner.png",
    title: "Policy Owner (Org)",
    description: (
      <>
        Sets and enforces organization
        <br />
        policy. Controls whether any
        <br />
        agent+sponsor combo is allowed.
        <br />
        Can revoke all agent access
        <br />
        instantly.
      </>
    ),
  },
  {
    image: "/ai-agent-security/persona-auditor.png",
    title: "Auditor (Compliance)",
    description: (
      <>
        Reviews action logs, mandate
        <br />
        changes, and revocation events.
        <br />
        Searches for evidence of
        <br />
        compliance or violations. Owns
        <br />
        evidence discovery.
      </>
    ),
  },
];

export default function AgentGovernancePersonasSection() {
  return (
    <section id="governance-personas" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Governance personas
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mystic bg-white-solid shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={persona.image}
                  alt={persona.title}
                  fill
                  sizes="(min-width: 1024px) 352px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8 text-left">
                <h3 className="mb-3 font-dm-serif text-[22.4px] font-normal leading-snug text-azure-9 text-left">
                  {persona.title}
                </h3>
                <p className="font-manrope text-base font-normal leading-7 text-[#64748B] text-left">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
