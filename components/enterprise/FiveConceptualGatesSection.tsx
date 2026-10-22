import Image from "next/image";

interface Gate {
  step: string;
  title: string;
  description: string;
}

const gates: Gate[] = [
  {
    step: "1",
    title: "Discover",
    description: "Preview how the architecture fits.",
  },
  {
    step: "2",
    title: "Scope",
    description: "Choose one identity domain in view.",
  },
  {
    step: "3",
    title: "Validate",
    description: "Review architecture, kit and trust material.",
  },
  {
    step: "4",
    title: "Govern",
    description: "Agree controls with security and privacy.",
  },
  {
    step: "5",
    title: "Operate",
    description: "Plan ongoing review for estate change.",
  },
];

export default function FiveConceptualGatesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-[800px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
            Five conceptual gates
          </h2>
          <p className="mt-4 font-manrope text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            These gates describe how an evaluation is usually structured. Each has an owner, and none commits
            you to a timeline or a deployment.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: 5 Gates List with Dividers */}
          <div className="flex flex-col divide-y divide-slate-100">
            {gates.map((gate) => (
              <div
                key={gate.step}
                className="py-4.5 first:pt-0 last:pb-0 sm:py-5"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-manrope text-sm font-bold text-[#071324]">
                    {gate.step}.
                  </span>
                  <h3 className="font-manrope text-sm font-bold text-[#071324] sm:text-base">
                    {gate.title}
                  </h3>
                </div>
                <p className="mt-1 pl-4.5 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  {gate.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Rounded Photo (ee5.png) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <Image
              src="/Enterprise-02-enterprise/ee5.png"
              alt="Enterprise team collaborating around a table evaluating architecture"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal cyan line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
            ENTERPRISE ADOPTION
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          Five conceptual gates
        </h2>

        {/* Mobile Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-[#4b5563]">
          These gates describe how an evaluation is usually structured. Each has an owner, and none commits you to a timeline or a deployment.
        </p>

        {/* Divider line before gates */}
        <div className="mt-5 border-b border-slate-200/80" />

        {/* Mobile 5 Gates Stack */}
        <div className="flex flex-col divide-y divide-slate-100">
          {/* 1. Discover */}
          <div className="py-4">
            <h3 className="font-manrope text-sm font-bold text-[#2563eb]">
              Discover
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              Read how the architecture fits.
            </p>
          </div>

          {/* 2. Scope */}
          <div className="py-4">
            <h3 className="font-manrope text-sm font-bold text-[#2563eb]">
              Scope
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              Choose the identity classes in view.
            </p>
          </div>

          {/* 3. Validate */}
          <div className="py-4">
            <h3 className="font-manrope text-sm font-bold text-[#2563eb]">
              Validate
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              Review architecture, API and trust material.
            </p>
          </div>

          {/* 4. Govern */}
          <div className="py-4">
            <h3 className="font-manrope text-sm font-bold text-[#2563eb]">
              Govern
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              Agree controls with security and privacy.
            </p>
          </div>

          {/* 5. Operate */}
          <div className="py-4">
            <h3 className="font-manrope text-sm font-bold text-[#2563eb]">
              Operate
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
              Plan ongoing ownership and change.
            </p>
          </div>
        </div>

        {/* Mobile Bottom Image (ee11.jpg cabin team meeting) */}
        <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/Enterprise-02-enterprise/ee11.jpg"
            alt="Enterprise engineering team working together around wooden meeting table"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
