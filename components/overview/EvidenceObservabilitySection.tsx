import Image from "next/image";

const auditItems = [
  {
    icon: "/overview/evidence-actor.svg",
    title: "Actor Identity",
    description: "Principal, service, or AI agent that took the action",
  },
  {
    icon: "/overview/evidence-mandate.svg",
    title: "Mandate Status",
    description: "Which delegation was referenced and its validity",
  },
  {
    icon: "/overview/evidence-policy.svg",
    title: "Policy Version",
    description: "Which rules were applied at decision time",
  },
  {
    icon: "/overview/evidence-trace.svg",
    title: "Decision Trace",
    description: "Allow, deny, or error—with reason and timestamp",
  },
  {
    icon: "/overview/evidence-signature.svg",
    title: "Event Signature",
    description: "Cryptographic proof. Cannot be altered or forged.",
  },
];

const evidenceCards = [
  {
    image: "/overview/evidence-export-compliance.webp",
    title: "Export compliance",
    description:
      "Pull audit evidence in SOC 2, ISO 27001, HIPAA formats. Ready for auditors and regulators.",
  },
  {
    image: "/overview/evidence-query-dashboard.webp",
    title: "Query and dashboard",
    description:
      "Search audit trail by actor, resource, time range. Build custom compliance dashboards.",
  },
  {
    image: "/overview/evidence-stream-events.webp",
    title: "Stream events",
    description:
      "Subscribe to all evidence events. Feed into SIEM, log aggregation, or custom analysis tools.",
  },
];

export default function EvidenceObservabilitySection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-[60px]">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          Evidence and observability
        </h2>

        {/* Complete Audit Trail Hero Card */}
        <div className="flex w-full flex-col gap-6 rounded-[16px] border border-mystic bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h3 className="font-dm-serif text-2xl font-normal text-azure-9 sm:text-[28px]">
            Complete audit trail
          </h3>

          {/* 5 Stacked Full-Width Audit Trail Rows Matching Figma */}
          <div className="flex w-full flex-col gap-3.5">
            {auditItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-[10px] bg-[#F1F5F9]/80 px-5 py-4 transition-colors duration-150 hover:bg-[#EBF2F7] sm:px-6 sm:py-4.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center text-scooter-48">
                  <Image
                    src={item.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-manrope text-[15px] font-semibold text-azure-9">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-[13.5px] font-normal leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Evidence Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {evidenceCards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-xl border border-mystic bg-white-solid transition-all duration-300 hover:-translate-y-1 hover:border-scooter-48/40 hover:shadow-[0px_16px_32px_0px_rgba(7,20,38,0.06)]"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-6 sm:p-7">
                <h3 className="font-dm-serif text-xl font-normal text-azure-9">
                  {card.title}
                </h3>
                <p className="font-manrope text-sm font-normal leading-relaxed text-slate-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
