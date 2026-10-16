import Image from "next/image";

const gates = [
  {
    gate: "Event Registry",
    confirms: "Exact event types and schemas are published and versioned.",
    owner: "Engineering with Product",
  },
  {
    gate: "Delivery contract",
    confirms: "Ordering, retry, expiry and reconciliation terms are stated.",
    owner: "Platform engineering",
  },
  {
    gate: "Security review",
    confirms: "Origin verification, secret handling and tenant boundary approved.",
    owner: "Security",
  },
  {
    gate: "Accessibility QA",
    confirms: "This page and its components meet WCAG 2.2 AA.",
    owner: "Front-end and QA",
  },
  {
    gate: "Route registry",
    confirms: "Every link resolves to an approved destination.",
    owner: "Web platform",
  },
];

export default function WebhooksReadinessGatesSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            What must be approved before go-live
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-azure-47">
            Each gate has a named owner. A gate that is not met keeps its feature
            hidden or marked pending.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xs sm:aspect-[24/10]">
          <Image
            src="/webhooks-events/readiness-gates-team.webp"
            alt="Team meeting around a table discussing go-live approval gates"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Gates Table */}
        <div className="overflow-x-auto rounded-2xl border border-grey-91 bg-white-solid shadow-xs">
          <table className="w-full min-w-[640px] border-collapse text-left font-manrope">
            <thead>
              <tr className="border-b border-grey-91 bg-grey-96">
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  Gate
                </th>
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  What it confirms
                </th>
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  Owner
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grey-91 text-sm">
              {gates.map((row) => (
                <tr
                  key={row.gate}
                  className="transition-colors duration-150 hover:bg-slate-50/60"
                >
                  <td className="px-6 py-5 font-bold text-azure-9 sm:px-8 sm:py-6">
                    {row.gate}
                  </td>
                  <td className="px-6 py-5 text-slate-700 sm:px-8 sm:py-6">
                    {row.confirms}
                  </td>
                  <td className="px-6 py-5 text-slate-700 sm:px-8 sm:py-6">
                    {row.owner}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
