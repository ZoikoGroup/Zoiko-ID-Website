import Image from "next/image";

const cards = [
  {
    icon: "/solutions-ai-solutions/trustgap-no-identity.svg",
    title: "No AI Identity",
    description:
      "AI agents lack verifiable credentials. Who is making the decision? Service account? Model inference? Unclear.",
  },
  {
    icon: "/solutions-ai-solutions/trustgap-undefined-scope.svg",
    title: "Undefined Scope",
    description:
      "AI actions unbounded. What can it access? How much can it spend? When does authority expire? Silent guesses.",
  },
  {
    icon: "/solutions-ai-solutions/trustgap-invisible-actions.svg",
    title: "Invisible Actions",
    description:
      "AI decisions hidden. Why did the bot approve/deny? Logs missing or incomplete. Auditors see nothing.",
  },
  {
    icon: "/solutions-ai-solutions/trustgap-no-revocation.svg",
    title: "No Revocation",
    description:
      "Rogue AI still running. Can't pull the plug instantly. Authority stays live until deployment restart.",
  },
];

export default function TrustGapSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-12 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          The AI trust gap
        </h2>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-[55px] items-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                />
              </div>

              <h4 className="mb-3 font-manrope text-[16.8px] font-bold leading-snug text-[#071426]">
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
