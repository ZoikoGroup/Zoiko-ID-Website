import Image from "next/image";
import type { ReactNode } from "react";

interface ChallengeCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const challengeCards: ChallengeCard[] = [
  {
    icon: "/ai-agent-security/challenge-who-is-agent.svg",
    title: "Who is the agent?",
    description: (
      <>
        Service account? Trusted process?
        <br />
        AI model running on behalf of a
        <br />
        customer? Identity must be
        <br />
        verifiable and distinct from the
        <br />
        sponsoring human or team.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/challenge-what-authority.svg",
    title: "What authority do they have?",
    description: (
      <>
        An explicit grant defines scope
        <br />
        (which resources), purpose (what
        <br />
        actions), time (how long), and who
        <br />
        authorized it (audit trail).
      </>
    ),
  },
  {
    icon: "/ai-agent-security/challenge-can-trust-revoked.svg",
    title: "Can trust be revoked?",
    description: (
      <>
        Yes. Immediately, without delay.
        <br />
        When the agent&apos;s mandate expires,
        <br />
        the sponsor withdraws it, or
        <br />
        policies change, access is revoked
        <br />
        and logged.
      </>
    ),
  },
];

export default function AgentChallengeSection() {
  return (
    <section id="the-challenge" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          The challenge: AI agents need bounded
          <br />
          trust
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start rounded-xl border border-mystic bg-white-solid p-8 shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-start">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>

              <h4 className="mb-3 whitespace-nowrap font-manrope text-[16.8px] font-bold leading-snug text-azure-9 text-left">
                {card.title}
              </h4>

              <p className="font-manrope text-base font-normal leading-7 text-azure-47 text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
