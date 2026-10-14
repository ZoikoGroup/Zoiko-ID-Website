import Image from "next/image";
import Link from "next/link";

const integrationGoals = [
  {
    image: "/overview/goal-identity-sso.webp",
    icon: "/overview/goal-identity-icon.svg",
    title: "Identity & SSO",
    description:
      "Integrate with your IdP (Okta, Azure AD). Verify actor identity. Layer delegated authority on top.",
    href: "/quickstarts",
  },
  {
    image: "/overview/goal-delegated-authority.webp",
    icon: "/overview/goal-delegated-icon.svg",
    title: "Delegated Authority",
    description:
      "Build on-behalf-of access. Grant time-limited, scoped mandates. Revoke instantly when needed.",
    href: "/quickstarts",
  },
  {
    image: "/overview/goal-machine-agent.webp",
    icon: "/overview/goal-machine-icon.svg",
    title: "Machine & Agent",
    description:
      "Issue credentials to services, AI agents, and non-human principals. Bind identity to actions.",
    href: "/quickstarts",
  },
  {
    image: "/overview/goal-evidence-events.webp",
    icon: "/overview/goal-evidence-icon.svg",
    title: "Evidence & Events",
    description:
      "Stream identity and authority events. Build custom audit, compliance and observability workflows.",
    href: "/quickstarts",
  },
];

export default function IntegrationGoalsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          Choose an integration goal
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrationGoals.map((goal, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-xl border border-mystic bg-white-solid transition-all duration-300 hover:-translate-y-1 hover:border-scooter-48/40 hover:shadow-[0px_16px_32px_0px_rgba(7,20,38,0.06)]"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden sm:h-52">
                <Image
                  src={goal.image}
                  alt={goal.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-scooter-48/10 p-1.5">
                      <Image
                        src={goal.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-dm-serif text-xl font-normal text-azure-9">
                      {goal.title}
                    </h3>
                  </div>

                  <p className="font-manrope text-[15px] font-normal leading-relaxed text-slate-500">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-mystic/60">
                  <Link
                    href={goal.href}
                    className="inline-flex items-center gap-2 font-manrope text-sm font-bold text-azure-48 transition-colors duration-200 hover:text-blue-700"
                  >
                    Quickstart
                    <Image
                      src="/overview/arrow-right.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
