import Image from "next/image";

interface ProcureCard {
  title: string;
  description: string;
  audience: string;
  image: string;
}

const procureCards: ProcureCard[] = [
  {
    title: "Public disclosures",
    description: "Factual pages reviewed for currentness.",
    audience: "Audience: any visitor",
    image: "/audit-reports/procure-disclosures.webp",
  },
  {
    title: "Security evidence",
    description: "Approved security material, by request.",
    audience: "Audience: security reviewers",
    image: "/audit-reports/procure-security.webp",
  },
  {
    title: "Agreements",
    description: "Commercial and legal terms, through Legal.",
    audience: "Audience: counsel and procurement",
    image: "/audit-reports/procure-agreements.webp",
  },
  {
    title: "Architecture references",
    description: "Technical documentation for architects.",
    audience: "Audience: solution architects",
    image: "/audit-reports/procure-architecture.webp",
  },
];

export default function AuditProcurementSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            Evidence by audience and access level
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Confidential material is never downloaded directly. Each item lists
            who may request it and the approval it needs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {procureCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-5">
                  <h3 className="mb-1.5 font-manrope text-[17px] font-bold leading-snug text-[#0B1B33]">
                    {card.title}
                  </h3>
                  <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Audience Badge */}
              <div className="px-5 pb-5 pt-2">
                <span className="inline-flex rounded-full bg-[#F1F5F9] px-3.5 py-1.5 font-manrope text-[12px] font-semibold text-[#0B1B33]">
                  {card.audience}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="font-manrope text-[14px] text-[#64748B]">
          Restricted items require a request and an identity check. Turnaround
          is not promised on this page.
        </p>
      </div>
    </section>
  );
}
