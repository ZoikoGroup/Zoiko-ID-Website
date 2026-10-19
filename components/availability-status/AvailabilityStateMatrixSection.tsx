export default function AvailabilityStateMatrixSection() {
  const states = [
    {
      badgeText: "Operational",
      badgeStyle: "bg-[#dcfce7] text-[#166534]",
      title: "Operational",
      description: "The source confirms the listed component is operating.",
      tag: "Not a global guarantee",
    },
    {
      badgeText: "Degraded",
      badgeStyle: "bg-[#fef9c3] text-[#854d0e]",
      title: "Degraded",
      description:
        "The source reports reduced performance for named components.",
      tag: "No impact inferred elsewhere",
    },
    {
      badgeText: "Partial outage",
      badgeStyle: "bg-[#ffedd5] text-[#9a3412]",
      title: "Partial outage",
      description:
        "Some source-defined components or workflows are unavailable.",
      tag: "Affected scope named",
    },
    {
      badgeText: "Outage",
      badgeStyle: "bg-[#fee2e2] text-[#991b1b]",
      title: "Outage",
      description: "The source confirms the affected service is unavailable.",
      tag: "No restoration estimate given",
    },
    {
      badgeText: "Maintenance",
      badgeStyle: "bg-[#dbeafe] text-[#1e40af]",
      title: "Maintenance",
      description:
        "Scheduled or ongoing planned work, not an unplanned incident.",
      tag: "Shown separately from incidents",
    },
    {
      badgeText: "Unknown",
      badgeStyle: "bg-[#f1f5f9] border border-[#94a3b8] text-[#0b1b33]",
      title: "Unknown or unavailable",
      description: "The source cannot provide or verify the current state.",
      tag: "Never defaults to healthy",
    },
  ];

  return (
    <section className="bg-[#f1f5f9] px-6 py-16 sm:px-10 lg:px-20 lg:py-24 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.1] text-[#0b1b33] sm:text-5xl lg:text-[52px] lg:leading-[55px]">
            Six states, none inferred from the others
          </h2>
          <p className="max-w-[800px] font-manrope text-base font-normal leading-7 text-[#64748b] sm:text-[16px] sm:leading-[26px]">
            These are the proposed presentation labels. Their exact names and
            mapping must be approved by the source owner before publication.
          </p>
        </div>

        {/* 6 State Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[224px] flex-col justify-between rounded-[18px] border border-[#e2e8f0] bg-white-solid p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-3.5">
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3.5 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider ${item.badgeStyle}`}
                >
                  {item.badgeText}
                </span>

                <h3 className="font-manrope text-[17px] font-bold leading-tight text-[#0b1b33]">
                  {item.title}
                </h3>

                <p className="font-manrope text-[14px] leading-[22px] text-[#64748b]">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 inline-flex w-fit items-center rounded-lg bg-[#f1f5f9] px-3 py-1.5 font-manrope text-[13px] font-normal text-[#0b1b33]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
