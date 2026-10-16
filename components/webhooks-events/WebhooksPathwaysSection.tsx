import Image from "next/image";

const pathways = [
  {
    image: "/webhooks-events/pathway-human-access.webp",
    alt: "Human access management in workforce directory",
    title: "Human access",
    description: "Sync access in your directory when a person's credential status changes.",
    scope: "Scope: re-check access against current policy before changing sessions.",
  },
  {
    image: "/webhooks-events/pathway-partner-delegation.webp",
    alt: "Partner delegation across enterprise organizations",
    title: "Partner delegation",
    description:
      "Track delegations to external partners and update your own records when scope changes.",
    scope:
      "Scope: the partner's access is decided by the owning authority, not by the notification.",
  },
  {
    image: "/webhooks-events/pathway-machine-lifecycle.webp",
    alt: "Machine lifecycle automation and workload credentials",
    title: "Machine lifecycle",
    description:
      "Queue renewals and pause dependent services when a machine identity is revoked.",
    scope:
      "Scope: availability of machine identity events is not confirmed for every family.",
  },
  {
    image: "/webhooks-events/pathway-ai-agent-control.webp",
    alt: "AI-agent mandate and bounded execution control",
    title: "AI-agent control",
    description:
      "Respond to a sponsor's withdrawal of a mandate by stopping the agent's next action.",
    scope:
      "Scope: agent event families are not claimed as available until confirmed.",
  },
];

export default function WebhooksPathwaysSection() {
  return (
    <section className="bg-grey-98 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Scenarios, with their limits
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {pathways.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid p-6 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-7"
            >
              <div className="relative aspect-[24/11] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between pt-6">
                <div className="flex flex-col gap-2 pb-6">
                  <h3 className="font-dm-serif text-2xl font-normal text-azure-9">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>

                <div className="rounded-lg bg-grey-96 p-4 font-manrope text-sm font-medium leading-relaxed text-azure-9">
                  {item.scope}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
