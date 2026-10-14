import Image from "next/image";

const evidenceItems = [
  {
    icon: "/solutions-ai-solutions/evidence-agent-identity.svg",
    title: "Agent Identity",
    description: "Who made the request (verified credential)",
  },
  {
    icon: "/solutions-ai-solutions/evidence-mandate-ref.svg",
    title: "Mandate Reference",
    description: "Which delegation was checked and its status",
  },
  {
    icon: "/solutions-ai-solutions/evidence-action-resource.svg",
    title: "Action & Resource",
    description: "What was requested on what resource",
  },
  {
    icon: "/solutions-ai-solutions/evidence-policy-decision.svg",
    title: "Decision & Reason",
    description:
      "Allow or deny and why (policy check, mandate status, risk signal)",
  },
  {
    icon: "/solutions-ai-solutions/evidence-crypto-proof.svg",
    title: "Timestamp & Signature",
    description: "When it happened with cryptographic proof. Cannot be altered.",
  },
];

export default function EvidenceTrailSection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      {/* Background Graphic matching Figma */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/solutions-ai-solutions/evidence-trail-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.4)_0%,rgba(3,7,18,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-white sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Complete evidence trail
        </h2>

        {/* Big White Card */}
        <div className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-8 lg:p-10 shadow-xl">
          <p className="mb-6 font-manrope text-base font-semibold leading-[28px] text-[#475569]">
            Every AI action is logged with complete context:
          </p>

          <div className="flex flex-col gap-3.5">
            {evidenceItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-[8px] bg-[#F1F5F9] px-5 py-4 transition-colors duration-150 hover:bg-[#E2E8F0]/60"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 text-green-600"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-x-2">
                  <span className="font-manrope text-[15.2px] font-semibold text-[#0F172A]">
                    {item.title}:
                  </span>
                  <span className="font-manrope text-[13.6px] font-normal text-[#64748B]">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance / Export-ready Callout */}
        <div className="mt-8 rounded-[12px] border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
          <p className="font-manrope text-[16px] font-bold leading-[28px] text-white">
            <span className="text-[#38BDF8]">Export-Ready:</span> Evidence can be extracted in SOC 2, FedRAMP, and compliance formats. Regulators can inspect the chain of command.
          </p>
        </div>
      </div>
    </section>
  );
}
