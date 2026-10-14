import Image from "next/image";

const stackSteps = [
  {
    icon: "/solutions-ai-solutions/arch-ai-agent.svg",
    title: "AI Agent",
    subtitle: "Service account,\nmodel, endpoint",
  },
  {
    icon: "/solutions-ai-solutions/arch-identity-binding.svg",
    title: "Identity Binding",
    subtitle: "Verify credential",
  },
  {
    icon: "/solutions-ai-solutions/arch-delegated-mandate.svg",
    title: "Mandate Store",
    subtitle: "Check authority",
  },
  {
    icon: "/solutions-ai-solutions/arch-tool-boundary.svg",
    title: "Policy Engine",
    subtitle: "Apply rules",
  },
  {
    icon: "/solutions-ai-solutions/arch-continuous-trust.svg",
    title: "Evidence Log",
    subtitle: "Record decision",
  },
];

const archCards = [
  {
    title: "Mandate API",
    status: "Available",
    description:
      "Create, update, revoke AI agent mandates. Real-time status. Immutable history.",
  },
  {
    title: "Event Webhooks",
    status: "Planned",
    description:
      "Real-time notifications on mandate changes, revocations, expirations.",
  },
  {
    title: "Evidence Store",
    status: "Planned",
    description:
      "Immutable audit log. Query, export, compliance formats.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
            AI Solutions architecture
          </h2>
          <p className="max-w-[760px] font-manrope text-base font-normal leading-[28px] text-[#64748B]">
            Identity, authority, and evidence work together as a unified stack.
          </p>
        </div>

        {/* Top Horizontal Flow Card */}
        <div className="mb-10 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
            {stackSteps.map((step, index) => (
              <div key={step.title} className="flex flex-1 items-center justify-between gap-4">
                <div className="flex flex-1 flex-col items-center text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center">
                    <Image
                      src={step.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                  <h4 className="font-manrope text-[14.4px] font-semibold text-[#071426]">
                    {step.title}
                  </h4>
                  <p className="mt-1 whitespace-pre-line font-manrope text-[12.8px] leading-tight text-[#64748B]">
                    {step.subtitle}
                  </p>
                </div>

                {index !== stackSteps.length - 1 && (
                  <span className="hidden font-manrope text-2xl font-bold text-[#22B8D6] md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Component Cards Below */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {archCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <h4 className="font-manrope text-[16.8px] font-bold text-[#071426]">
                  {card.title}
                </h4>
                <span className="rounded-[4px] bg-[#F59E0B]/15 px-3 py-1 font-manrope text-xs font-bold text-[#F59E0B]">
                  {card.status}
                </span>
              </div>

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
