import Image from "next/image";

const pipelineStages = [
  {
    title: "Your App",
    icon: "/customer-user-access/icons/arch-app.svg",
  },
  {
    title: "Identity & Auth",
    icon: "/customer-user-access/icons/arch-id.svg",
  },
  {
    title: "Policy & Decision",
    icon: "/customer-user-access/icons/arch-policy.svg",
  },
  {
    title: "Audit & Evidence",
    icon: "/customer-user-access/icons/arch-audit.svg",
  },
];

const integrationCards = [
  {
    title: "REST API",
    description:
      "Query policy, make access decisions, log evidence. Available and production-ready.",
    icon: "/customer-user-access/icons/arch-rest.svg",
  },
  {
    title: "Webhooks",
    description:
      "Real-time notifications on access changes, policy updates, or revocation events.",
    icon: "/customer-user-access/icons/arch-webhooks.svg",
  },
  {
    title: "SDKs",
    description:
      "JavaScript, Python, Node.js, Go. Simplify integration and decision embedding.",
    icon: "/customer-user-access/icons/arch-sdks.svg",
  },
];

export default function ArchitectureIntegrationSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <div className="flex max-w-[900px] flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Architecture &amp; integration
          </h2>
          <p className="font-manrope text-base font-normal leading-7 text-azure-47">
            Work with existing customer applications and identity estates.
            Additional authority and evidence checks can be integrated where
            implemented.
          </p>
        </div>

        {/* Pipeline Diagram */}
        <div className="w-full overflow-x-auto rounded-xl border border-grey-91 bg-cyan-49/5 p-8 sm:p-10 lg:p-12">
          <div className="flex min-w-[680px] items-center justify-between gap-4">
            {pipelineStages.map((stage, idx) => (
              <div key={stage.title} className="flex flex-1 items-center">
                <div className="flex flex-1 flex-col items-center gap-3 rounded-lg bg-white-solid/80 p-5 text-center shadow-xs">
                  <div className="flex size-10 items-center justify-center">
                    <Image
                      src={stage.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8"
                    />
                  </div>
                  <span className="font-manrope text-[14.4px] font-semibold text-[#475569]">
                    {stage.title}
                  </span>
                </div>

                {idx < pipelineStages.length - 1 && (
                  <span className="px-3 font-manrope text-2xl font-light text-cyan-49">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Integration Cards */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {integrationCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-xl border border-grey-91 bg-white-solid p-7 pb-10 transition-shadow duration-200 hover:shadow-sm"
            >
              <div className="flex size-10 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8"
                />
              </div>

              <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
                {card.title}
              </h3>

              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
