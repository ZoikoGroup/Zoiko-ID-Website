import Image from "next/image";

const actorClasses = [
  {
    title: "People",
    description:
      "Individual human. Can authenticate. Membership is not authority. Role determines permissions.",
    image: "/b2b-saas/actor-people.webp",
    icon: "/b2b-saas/icons/actor-user.svg",
  },
  {
    title: "Organizations",
    description:
      "Customer entity. Has members, representatives, and policies. Resource owner and policy enforcer.",
    image: "/b2b-saas/actor-organizations.webp",
    icon: "/b2b-saas/icons/actor-org.svg",
  },
  {
    title: "Services",
    description: (
      <>
        Non-human principal. Can authenticate via token. Represents
        <br />
        delegated authority and scoped purpose.
      </>
    ),
    image: "/b2b-saas/actor-services.webp",
    icon: "/b2b-saas/icons/actor-service.svg",
  },
  {
    title: "AI Agents",
    description: (
      <>
        Sponsored non- human. Acts on behalf of organization or
        <br />
        person. Requires explicit mandate and bounds.
      </>
    ),
    image: "/b2b-saas/actor-ai-agents.webp",
    icon: "/b2b-saas/icons/actor-agent.svg",
  },
];

export default function ActorClassesSection() {
  return (
    <section
      id="actor-classes"
      className="bg-white-solid border-t border-mystic px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[56px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Principal model: distinct relationships
        </h2>

        {/* 2x2 Grid matching Figma */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {actorClasses.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-xl border border-grey-91 bg-white-solid"
            >
              <div className="relative h-[233px] w-full shrink-0 overflow-hidden bg-grey-91">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 548px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                {/* 64x64 Gradient Icon Container */}
                <div className="mb-4 flex size-16 items-center justify-center rounded-xl border border-cyan-49/20 bg-linear-to-br from-cyan-49/15 to-azure-48/15">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="size-7"
                  />
                </div>

                <h3 className="pb-2 font-manrope text-[20px] font-bold leading-7 text-azure-9">
                  {item.title}
                </h3>

                <p className="font-manrope text-base font-normal leading-7 text-azure-47">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout matching Figma */}
        <div className="flex items-center justify-center gap-2 pt-2 text-center">
          <Image
            src="/b2b-saas/icons/actor-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          <p className="font-manrope text-sm leading-7 text-azure-47 sm:text-[15.2px]">
            <strong className="font-bold text-azure-9">
              Relationship ≠ Permission.
            </strong>{" "}
            Being a member of an organization does not grant authority to act on
            its behalf.
          </p>
        </div>
      </div>
    </section>
  );
}
