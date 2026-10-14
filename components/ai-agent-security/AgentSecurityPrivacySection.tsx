import Image from "next/image";
import type { ReactNode } from "react";

interface SecurityCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const securityCards: SecurityCard[] = [
  {
    icon: "/ai-agent-security/security-no-implicit.svg",
    title: "No Implicit Authority",
    description: (
      <>
        Agent identity + mandate
        <br />
        are separate. One does not
        <br />
        imply the other. Both are
        <br />
        required.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/security-minimal-logging.svg",
    title: "Minimal Logging",
    description: (
      <>
        Credentials and tokens
        <br />
        never logged. Only
        <br />
        references, outcomes, and
        <br />
        audit context.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/security-immediate-revocation.svg",
    title: "Immediate Revocation",
    description: (
      <>
        No delay. No grace period.
        <br />
        Authority withdrawn
        <br />
        instantly when needed.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/security-auditable-provable.svg",
    title: "Auditable & Provable",
    description: (
      <>
        Every decision backed by
        <br />
        evidence with
        <br />
        cryptographic proof.
        <br />
        Immutable audit trail.
      </>
    ),
  },
];

export default function AgentSecurityPrivacySection() {
  return (
    <section id="security-privacy" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Security, privacy & trust
        </h2>

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-mystic bg-white-solid p-7 text-center shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>

              <h4 className="mb-2 font-manrope text-[15.2px] font-bold leading-snug text-azure-9">
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
