import Image from "next/image";

const actors = [
  {
    badge: "Principal",
    title: "Principal (Your Organization)",
    description:
      "The organization that owns resources and grants authority. Sets policy. Revokes access. Owns audit trail.",
    icon: "/third-party-access/actor-principal-icon.svg",
    highlight: false,
  },
  {
    badge: "Delegator",
    title: "Delegator (Manager)",
    description:
      "Authenticated person from principal organization who decides to grant access. Creates and signs the delegation mandate.",
    icon: "/third-party-access/actor-authorizer-icon.svg",
    highlight: true,
  },
  {
    badge: "Recipient",
    title: "Recipient (External Actor)",
    description:
      "Third-party person, service, or AI agent that needs to act on behalf of the principal. Gets verified credential.",
    icon: "/third-party-access/actor-recipient-icon.svg",
    highlight: false,
  },
];

export default function ActorRelationshipModelSection() {
  return (
    <section id="actor-model" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Header Block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            The actor and relationship model
          </h2>
          <p className="font-manrope text-base font-normal text-azure-47 sm:text-[17px]">
            Three actors. One mandate. One decision at a time.
          </p>
        </div>

        {/* 3 Actors Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {actors.map((actor) => (
            <div
              key={actor.badge}
              className={`relative flex flex-col gap-4 rounded-[12px] bg-white-solid p-7 sm:p-8 ${
                actor.highlight
                  ? "border-2 border-cyan-49 shadow-[0px_4px_24px_0px_rgba(34,184,214,0.12)]"
                  : "border-2 border-mystic shadow-sm"
              }`}
            >
              {/* Badge Tag */}
              <div className="absolute right-5 top-5 rounded-full border border-cyan-49/30 bg-cyan-49/10 px-3 py-1 font-manrope text-xs font-bold uppercase tracking-wider text-cyan-49">
                {actor.badge}
              </div>

              {/* Icon Container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-49/10">
                <Image
                  src={actor.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-dm-serif text-xl font-normal leading-snug text-azure-9 sm:text-[22.4px]">
                {actor.title}
              </h3>

              <p className="font-manrope text-[14px] font-normal leading-[25.2px] text-azure-47 sm:text-[14.4px]">
                {actor.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Arrow Callout */}
        <div className="w-full rounded-[12px] border border-mystic bg-[#F8FAFC] p-6 text-center sm:p-7">
          <p className="font-manrope text-[15px] leading-relaxed text-[#475569] sm:text-[16px] sm:leading-[28px]">
            <strong className="font-bold text-[#334155]">The arrow:</strong>{" "}
            Delegator → (creates) → Mandate → (grants to) → Recipient. At every
            action, Principal policy evaluates: Is recipient credential valid? Is
            mandate still active? Does action fit scope?
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
