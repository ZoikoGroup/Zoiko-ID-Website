import Image from "next/image";
import type { ReactNode } from "react";

interface ChallengeCard {
  image: string;
  title: string;
  description: ReactNode;
}

const challengeCards: ChallengeCard[] = [
  {
    image: "/workforce-enterprise/challenges-federation.png",
    title: "Enterprise Federation",
    description: (
      <>
        Connect customer Okta,
        <br />
        Azure AD, or Ping
        <br />
        instances. Authenticate
        <br />
        via their IdP while adding
        <br />
        organization context
        <br />
        and authority evaluation.
      </>
    ),
  },
  {
    image: "/workforce-enterprise/challenges-role-based.png",
    title: "Role & Policy Based",
    description: (
      <>
        Define and enforce
        <br />
        role-based access
        <br />
        within organizations.
        <br />
        Map HRIS, directory, or
        <br />
        custom role hierarchies
        <br />
        to resource permissions.
      </>
    ),
  },
  {
    image: "/workforce-enterprise/challenges-delegation.png",
    title: "Delegation & Escalation",
    description: (
      <>
        Managers delegate
        <br />
        task approval or
        <br />
        temporary access to
        <br />
        team members. Bounded,
        <br />
        auditable, revocable at
        <br />
        any time.
      </>
    ),
  },
  {
    image: "/workforce-enterprise/challenges-continuous-trust.png",
    title: "Continuous Trust",
    description: (
      <>
        Monitor role changes,
        <br />
        terminations, and risk
        <br />
        signals. Re-evaluate
        <br />
        and revoke access
        <br />
        immediately when
        <br />
        conditions change.
      </>
    ),
  },
];

export default function WorkforceChallengesSection() {
  return (
    <section id="workforce-challenges" className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-16 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Choose your workforce access challenge
        </h2>

        {/* 4 Cards with adjusted width so 'Delegation & Escalation' fits on 1 line and content is start aligned */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="flex h-[511px] w-[270px] shrink-0 flex-col items-start overflow-hidden rounded-xl border border-mystic bg-white-solid text-left shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-lg"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="270px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col items-start justify-start p-6 text-left">
                <h3 className="mb-3 whitespace-nowrap font-dm-serif text-[19.2px] font-normal leading-snug text-azure-9 text-left">
                  {card.title}
                </h3>

                <p className="font-manrope text-base font-normal leading-7 text-azure-47 text-left">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
