const deliveryRows = [
  {
    area: "Ordering",
    says: "Global order is not implied. Compare timestamps before applying changes.",
    status: "Contract pending",
  },
  {
    area: "Duplicates",
    says: "Design consumers to handle repeats. Deduplicate using the verified event identifier.",
    status: "Contract pending",
  },
  {
    area: "Retries and expiry",
    says: "Set by the published contract. Keep handlers responsive and queue slow work.",
    status: "Contract pending",
  },
  {
    area: "Missed events",
    says: "Reconcile from the approved query path if one is published. Alert on gaps in your own records.",
    status: "Contract pending",
  },
];

export default function WebhooksDeliverySection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Documented slots, contracts pending
          </h2>
          <p className="max-w-[840px] font-manrope text-base font-normal leading-relaxed text-azure-47">
            Each area has a documented slot. The contract for each is pending
            publication by the owning team, so no values are shown here.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-grey-91 bg-white-solid shadow-xs">
          <table className="w-full min-w-[640px] border-collapse text-left font-manrope">
            <thead>
              <tr className="border-b border-grey-91 bg-grey-96">
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  Area
                </th>
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  What this page says
                </th>
                <th className="px-6 py-4.5 text-sm font-bold text-azure-9 sm:px-8 sm:py-5">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grey-91 text-sm">
              {deliveryRows.map((row) => (
                <tr
                  key={row.area}
                  className="transition-colors duration-150 hover:bg-slate-50/60"
                >
                  <td className="px-6 py-5 font-bold text-slate-700 sm:px-8 sm:py-6">
                    {row.area}
                  </td>
                  <td className="px-6 py-5 text-slate-700 sm:px-8 sm:py-6">
                    {row.says}
                  </td>
                  <td className="px-6 py-5 sm:px-8 sm:py-6">
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 font-manrope text-xs font-bold text-amber-800">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alert Card below Table */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
          <p className="font-manrope text-sm font-bold leading-relaxed text-azure-9 sm:text-[15px]">
            No delivery guarantee is stated on this page. Ask an identity expert for
            the current contract for your environment.
          </p>
        </div>
      </div>
    </section>
  );
}
