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
    title: "Minimum necessary claims",
    description: "Only what a defined decision requires is presented.",
    image: "/trust-assurance-privacy/principle-claims.webp",
    icon: "/trust-assurance-privacy/principle-icon-1.svg",
    status: "Designed",
  },
  {
    title: "Limited disclosure",
    description: "Records are shown to authorized roles, not broadly.",
    image: "/trust-assurance-privacy/principle-policy.webp",
    icon: "/trust-assurance-privacy/principle-icon-2.svg",
    status: "Designed",
  },
  {
    title: "Policy-based access",
    description: "Access is decided by policy, not by the presence of data.",
    image: "/trust-assurance-privacy/principle-provenance.webp",
    icon: "/trust-assurance-privacy/principle-icon-3.svg",
    status: "Designed",
  },
  {
    title: "Provenance",
    description: "Each record names its source and originating service.",
    image: "/trust-assurance-privacy/principle-currentness.webp",
    icon: "/trust-assurance-privacy/principle-icon-4.svg",
    status: "Intended",
  },
  {
    title: "Governed currentness",
    description: "Each statement shows when it was last reviewed.",
    image: "/trust-assurance-privacy/principle-redaction.webp",
    icon: "/trust-assurance-privacy/principle-icon-5.svg",
    status: "Intended",
  },
];

export default function PrivacyPrinciplesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Five design principles, each with its status
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            These describe intended behavior. Each card states whether the
            principle is intended, designed, or independently reviewed.
            Selective disclosure and privacy-preserving techniques are not
            claimed as implemented.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {principles.map((principle) => {
            const isDesigned = principle.status === "Designed";
            return (
              <div
                key={principle.title}
                className="group flex flex-col justify-between overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-[130px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    {/* Icon Badge */}
                    <div className="mb-3.5 flex size-9 items-center justify-center rounded-lg bg-[#E0F2FE]">
                      <Image
                        src={principle.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5 shrink-0"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-manrope text-[16px] font-bold leading-snug text-[#071426] sm:text-[17px]">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="font-manrope text-[13.5px] leading-relaxed text-[#64748B]">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Status Pill Badge at Bottom */}
                <div className="border-t border-[#F1F5F9] px-4 py-3 sm:px-5">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-manrope text-[11px] font-extrabold uppercase tracking-wider ${
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
