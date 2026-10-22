import Image from "next/image";

export default function FiveDistinctNodesSection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-28">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Rounded Image (ee3.png) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <Image
              src="/Enterprise-02-enterprise/ee3.png"
              alt="Security personnel operating laptop in enterprise environment"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Text & Light Box Callout */}
          <div className="flex flex-col">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[42px]">
              Five distinct nodes, each with its own owner
            </h2>

            <p className="mt-5 font-manrope text-sm leading-relaxed text-[#4b5563] sm:text-[15px]">
              Actor and organization, mandate, policy, decision and reviewable
              evidence. Each node has its own limits, so none can stand in for
              another.
            </p>

            {/* Gray/Light-Blue Text Callout Box */}
            <div className="mt-8 rounded-xl border border-slate-200/90 bg-[#f4f7fb] p-5 sm:p-6">
              <p className="font-manrope text-xs leading-relaxed text-[#4b5563] sm:text-[13px]">
                <strong className="font-bold text-[#111827]">
                  Text equivalent.
                </strong>{" "}
                An actor (person, workforce or AI agent acting for an
                organization) makes a request; a mandate states who granted
                authority, purpose, resource, and time frame; policy is
                evaluated against current context; a decision is produced for
                this request; reviewable evidence records the basis and is
                evaluable only by authorized reviewers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Mobile Top Image (ee9.jpg) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/Enterprise-02-enterprise/ee9.jpg"
            alt="Person operating laptop and smartphone concurrently"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Category Pill / Subtitle */}
        <span className="mt-7 font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
          HOW A DECISION IS MADE AND EXPLAINED
        </span>

        {/* Mobile Heading */}
        <h2 className="mt-2 font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          Five distinct nodes, each with its own owner
        </h2>

        {/* Mobile Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-[#4b5563]">
          Actor and organization, mandate, policy, decision and reviewable evidence. Each node has its own limits, so none can stand in for another.
        </p>

        {/* Gray/Light-Blue Text Callout Box */}
        <div className="mt-6 rounded-xl border border-slate-200/90 bg-[#f4f7fb] p-5">
          <p className="font-manrope text-xs leading-relaxed text-[#4b5563]">
            <strong className="font-bold text-[#2563eb]">
              Text equivalent.
            </strong>{" "}
            An actor (person, service or AI agent acting for an organization) makes a request; a mandate states who granted authority, purpose, resources and timeframe; policy is evaluated against current context; a decision is produced for this request; reviewable evidence records the basis and is shown only to authorized reviewers.
          </p>
        </div>
      </div>
    </section>
  );
}
