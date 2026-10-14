import Image from "next/image";

const boundaryCards = [
  {
    icon: "/solutions-ai-solutions/boundary-identity.svg",
    title: "Identity Binding",
    weDo: "Verify AI agent identity. Bind credentials to actions. Log identity context.",
    weDont: "Decide if the action is allowed.",
  },
  {
    icon: "/solutions-ai-solutions/boundary-mandate.svg",
    title: "Mandate Storage",
    weDo: "Store delegated authority. Track expiry. Provide mandate status to policy engine.",
    weDont: "Enforce policy rules (that's the engine).",
  },
  {
    icon: "/solutions-ai-solutions/boundary-evidence.svg",
    title: "Evidence Logging",
    weDo: "Record all identity & authority context. Link decisions to mandates. Create audit trail.",
    weDont: "Hide decisions. Decisions are all logged.",
  },
];

export default function ToolBoundarySection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-4">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
            Tool boundary & policy engine
          </h2>
          <p className="max-w-[844px] font-manrope text-base font-normal leading-[28px] text-[#64748B]">
            AI Solutions is NOT a policy engine. It&apos;s the identity and authority layer that works WITH your existing policy systems.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {boundaryCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>

              <h4 className="mb-4 font-manrope text-[16.8px] font-bold leading-snug text-[#071426]">
                {card.title}
              </h4>

              <div className="flex flex-col gap-4 font-manrope text-[14.4px] leading-[25.2px] text-[#64748B]">
                <p>
                  <strong className="font-bold text-[#071426]">We do:</strong>{" "}
                  {card.weDo}
                </p>
                <p>
                  <strong className="font-bold text-[#DC2626]">We don&apos;t:</strong>{" "}
                  {card.weDont}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
