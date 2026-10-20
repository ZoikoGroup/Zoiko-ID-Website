import Image from "next/image";

interface EvidenceStage {
  title: string;
  desc: string;
}

const stages: EvidenceStage[] = [
  { title: "Actor and context", desc: "A reference, not the full profile" },
  { title: "Authority reference", desc: "Which grant applied" },
  { title: "Decision basis", desc: "Policy and context version" },
  { title: "Outcome", desc: "Allowed, restricted or denied" },
  { title: "Governed evidence", desc: "Access controlled by role" },
];

export default function AuthorityEvidenceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="max-w-[960px] font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.9px]">
            Explain a decision without collecting more than it needs
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            A decision can be explained through a reference to the actor, the authority, the policy version, the outcome and any change. Retention and visibility depend on verified policy and permissions.
          </p>
        </div>

        {/* Preview image */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-[#F1F5F9] shadow-sm sm:h-[321px] sm:rounded-[32px]">
          <Image
            src="/authority-explainers/evidence-doc-preview.webp"
            alt="Evidence decision document"
            fill
            sizes="(min-width: 1024px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 5-Stage Sequential Row */}
        <div className="grid w-full grid-cols-1 divide-y divide-[#E2E8F0] overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white-solid shadow-sm md:grid-cols-5 md:divide-x md:divide-y-0">
          {stages.map((stage) => (
            <div key={stage.title} className="flex flex-col gap-1.5 p-5 text-left">
              <span className="font-manrope text-sm font-bold text-[#334155]">
                {stage.title}
              </span>
              <span className="font-manrope text-xs font-normal leading-5 text-[#64748B]">
                {stage.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
