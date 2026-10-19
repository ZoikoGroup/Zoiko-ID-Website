import Image from "next/image";

interface ProcurementCard {
  title: string;
  description: string;
  audience: string;
  image: string;
}

const evidenceCards: ProcurementCard[] = [
  {
    title: "Public disclosures",
    description: "Factual pages reviewed for currentness.",
    audience: "Audience: any visitor",
    image: "/trust-assurance-privacy/procure-disclosures.webp",
  },
  {
    title: "Security evidence",
    description: "Approved security material, by request.",
    audience: "Audience: security reviewers",
    image: "/trust-assurance-privacy/procure-security.webp",
  },
  {
    title: "Agreements",
    description: "Commercial and legal terms, through Legal.",
    audience: "Audience: counsel and procurement",
    image: "/trust-assurance-privacy/procure-agreements.webp",
  },
  {
    title: "Architecture references",
    description: "Technical documentation for architects.",
    audience: "Audience: solution architects",
    image: "/trust-assurance-privacy/procure-architecture.webp",
  },
];

export default function PrivacyProcurementSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Evidence by audience and access level
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Confidential material is never downloaded directly. Each item lists
            who may request it and the approval it needs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 font-manrope text-[17px] font-bold text-[#071426]">
                    {card.title}
                  </h3>
                  <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Audience Pill Footer */}
              <div className="border-t border-[#F1F5F9] px-5 py-3.5">
                <span className="inline-block rounded-[8px] bg-[#F1F5F9] px-3 py-1 font-manrope text-[12px] font-semibold text-[#071426]">
                  {card.audience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
