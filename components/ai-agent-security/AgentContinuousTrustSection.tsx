import Image from "next/image";
import type { ReactNode } from "react";

interface TrustCard {
  icon: string;
  title: string;
  description: ReactNode;
}

const trustCards: TrustCard[] = [
  {
    icon: "/ai-agent-security/trust-mandate-expiry.svg",
    title: "Mandate Expiry",
    description: (
      <>
        When mandate time
        <br />
        expires, agent access is
        <br />
        revoked. No extension
        <br />
        without explicit re-grant.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/trust-manual-revocation.svg",
    title: "Manual Revocation",
    description: (
      <>
        Sponsor or org can revoke
        <br />
        immediately. No delay. All
        <br />
        active sessions
        <br />
        terminated.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/trust-policy-change.svg",
    title: "Policy Change",
    description: (
      <>
        If organization policy
        <br />
        changes, all agents re-
        <br />
        evaluated. Access can be
        <br />
        denied mid-workflow.
      </>
    ),
  },
  {
    icon: "/ai-agent-security/trust-risk-signal.svg",
    title: "Risk Signal",
    description: (
      <>
        Anomaly detected
        <br />
        (unusual API calls, rate
        <br />
        limits). Agent flagged for
        <br />
        review or denied.
      </>
    ),
  },
];

export default function AgentContinuousTrustSection() {
  return (
    <section id="continuous-trust" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Continuous trust monitoring
        </h2>

        {/* 4 Cards with exact 259px width, 248px height, white bg, and border Mystic */}
        <div className="flex flex-wrap items-center justify-center gap-7 lg:flex-nowrap">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="flex h-[248px] w-[259px] shrink-0 flex-col items-center justify-center rounded-xl border border-mystic bg-white-solid p-7 text-center shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center">
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
