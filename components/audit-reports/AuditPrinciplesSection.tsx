import Image from "next/image";

interface PrincipleCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  status: "Designed" | "Intended";
}

const principles: PrincipleCard[] = [
  {
    title: "Limited disclosure",
    description: "Records are shown to authorized roles, not broadly.",
    image: "/audit-reports/principle-disclosure.webp",
    icon: "/audit-reports/principle-icon-1.svg",
    status: "Designed",
  },
  {
    title: "Policy-based access",
    description: "Access is decided by policy, not by the presence of data.",
    image: "/audit-reports/principle-policy.webp",
    icon: "/audit-reports/principle-icon-2.svg",
    status: "Designed",
  },
  {
    title: "Provenance",
    description: "Each record names its source and originating service.",
    image: "/audit-reports/principle-provenance.webp",
    icon: "/audit-reports/principle-icon-3.svg",
    status: "Intended",
  },
  {
    title: "Governed currentness",
    description: "Each statement shows when it was last reviewed.",
    image: "/audit-reports/principle-currentness.webp",
    icon: "/audit-reports/principle-icon-4.svg",
    status: "Intended",
  },
];

export default function AuditPrinciplesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            Five design principles, each with its status
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            These describe intended behavior. Each card states whether the
            principle is intended, designed, or independently reviewed.
            Selective disclosure and privacy-preserving techniques are not
            claimed as implemented.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => {
            const isDesigned = principle.status === "Designed";
            return (
              <div
                key={principle.title}
                className="group flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col p-5">
                    {/* Icon Badge */}
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-[#E0F2FE]">
                      <Image
                        src={principle.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-1.5 font-manrope text-[17px] font-bold leading-snug text-[#0B1B33]">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Status Pill Footer */}
                <div className="px-5 pb-5 pt-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] ${
                      isDesigned
                        ? "bg-[#DBEAFE] text-[#1E40AF]"
                        : "bg-[#EDE9FE] text-[#5B21B6]"
                    }`}
                  >
                    {principle.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
