import Image from "next/image";

const trustCards = [
  {
    icon: "/solutions-ai-solutions/trust-credential-check.svg",
    title: "Credential Check",
    description:
      "At every request, verify agent credential is still valid. Revoked? Expired? Denied.",
  },
  {
    icon: "/solutions-ai-solutions/trust-mandate-expiry.svg",
    title: "Mandate Expiry",
    description:
      "Time boundary reached. Access revoked automatically. No renewal without re-grant.",
  },
  {
    icon: "/solutions-ai-solutions/trust-policy-sync.svg",
    title: "Policy Sync",
    description:
      "Organization policy changed? All agents re-evaluated. Can deny mid-workflow.",
  },
  {
    icon: "/solutions-ai-solutions/trust-risk-signal.svg",
    title: "Risk Signal",
    description:
      "Anomaly detected. Agent flagged. Policy engine can act (block, require step-up).",
  },
];

export default function ContinuousTrustSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Continuous trust evaluation
        </h2>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center rounded-[12px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-[55px] items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                />
              </div>

              <h4 className="mb-3 font-manrope text-[15.2px] font-bold leading-snug text-[#071426]">
                {card.title}
              </h4>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
