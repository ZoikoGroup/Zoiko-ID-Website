import Image from "next/image";

interface AgentCard {
  image: string;
  badge: string;
  title: string;
  description: string;
}

const agentCards: AgentCard[] = [
  {
    image: "/integrations-operate/img-42dceb61907c5d54a408c5f0ce2d51d2b9e684ad.png",
    badge: "Principal",
    title: "Agent identity",
    description: "Non-human principal with\nits own identifier.",
  },
  {
    image: "/integrations-operate/img-bdc59787124ebebbc730e0c93eecc95ec6971090.png",
    badge: "Sponsor",
    title: "Organization sponsor",
    description: "The accountable party\nresponsible for the agent.",
  },
  {
    image: "/integrations-operate/img-f17fbf227427a124d784c11c0de49a916d81252b.png",
    badge: "Mandate",
    title: "Explicit mandate",
    description: "Defines tools, resources,\npurpose, and expiry.",
  },
  {
    image: "/integrations-operate/img-56d900859ae34eee4ea13221419ad7597837f15d.png",
    badge: "Revocation",
    title: "Continuous signal",
    description: "Withdrawal of sponsorship\nor mandate ends authority.",
  },
];

export default function IntegrationsOperateMachineAiSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Top Banner Image: AI Illustration */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] sm:h-[260px]">
          <Image
            src="/integrations-operate/img-54c471c8dcf1b588d873d41c09b9c3489fef33fa.png"
            alt="AI illustration"
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Connect machine and AI-agent identities
          </h2>

          <p className="max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            A verified agent identity establishes who the agent is. It does not authorize any tool use. Authority comes from
            <br className="hidden sm:block" />
            {" "}an explicit mandate, sponsored by an accountable organization.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agentCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-xs transition-shadow duration-200 hover:shadow-lg"
            >
              {/* Photo Header */}
              <div className="relative h-[150px] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded-[20px] bg-[#FEF3C7] px-3.5 py-1 font-manrope text-[11px] font-bold uppercase tracking-wider text-[#92400E]">
                  {card.badge}
                </span>

                <h3 className="mt-3 font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                  {card.title}
                </h3>

                <p className="mt-2 whitespace-pre-line font-manrope text-[14px] font-normal leading-6 text-[#64748B]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box (Red accent & light red bg) */}
        <div className="w-full rounded-[10px] border-l-4 border-[#EF4444] bg-[#FEF2F2] p-5 sm:px-7 sm:py-6 shadow-xs">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <strong className="font-bold text-[#071426]">Tool use is never automatic.</strong>{" "}
            A verified agent identity does not by itself authorize any tool, resource, or action. Each permission must
            <br className="hidden sm:block" />
            {" "}be explicitly granted within a mandate.
          </p>
        </div>
      </div>
    </section>
  );
}
