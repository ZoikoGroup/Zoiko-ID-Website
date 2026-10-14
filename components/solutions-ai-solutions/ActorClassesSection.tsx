import Image from "next/image";

const actorClasses = [
  {
    tag: "THE AGENT",
    title: "AI Agent",
    image: "/solutions-ai-solutions/actor-agent.webp",
    identity:
      "Service account, model endpoint, or inference engine with verifiable credentials.",
    role: "Executes delegated actions. No implied authority. Every action checked against mandate.",
  },
  {
    tag: "THE SPONSOR",
    title: "Sponsor (Human)",
    image: "/solutions-ai-solutions/actor-sponsor.webp",
    identity:
      "Authenticated human or team that decides to delegate work to the agent.",
    role: "Creates mandate. Defines scope, purpose, time. Can revoke anytime. Accountable for agent.",
  },
  {
    tag: "THE ORG",
    title: "Organization",
    image: "/solutions-ai-solutions/actor-resource.webp",
    identity: "System that owns resources and enforces policy.",
    role: "Sets policy. Evaluates decisions. Can revoke all agent access instantly. Owns audit log.",
  },
];

export default function ActorClassesSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          The three AI actor classes
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {actorClasses.map((actor) => (
            <div
              key={actor.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Image banner */}
              <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={actor.image}
                  alt={actor.title}
                  fill
                  sizes="(min-width: 1024px) 350px, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-[4px] bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                  <span className="font-manrope text-[11.2px] font-bold tracking-wider text-[#071426]">
                    {actor.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-4 font-dm-serif text-[19.2px] leading-[26.3px] text-[#071426]">
                  {actor.title}
                </h3>

                <div className="flex flex-col gap-4 font-manrope text-[16px] leading-[28px] text-[#64748B]">
                  <p>
                    <strong className="font-bold text-[#071426]">Identity:</strong>{" "}
                    {actor.identity}
                  </p>
                  <p>
                    <strong className="font-bold text-[#071426]">Role:</strong>{" "}
                    {actor.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
