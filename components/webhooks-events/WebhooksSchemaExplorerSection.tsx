import Image from "next/image";

const schemaFamilies = [
  {
    title: "Identity lifecycle",
    version: "Version: not published",
    description:
      "Schema not published. Contact your identity expert for the current contract.",
  },
  {
    title: "Delegated authority",
    version: "Version: not published",
    description:
      "Schema not published. Contact your identity expert for the current contract.",
  },
  {
    title: "Policy outcomes",
    version: "Version: not published",
    description:
      "Schema not published. Contact your identity expert for the current contract.",
  },
];

export default function WebhooksSchemaExplorerSection() {
  return (
    <section className="bg-grey-98 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Schema explorer
          </h2>
          <p className="max-w-[840px] font-manrope text-base font-normal leading-relaxed text-azure-47">
            Event families appear here only with an approved schema. Until then,
            each shows as pending. No example is generated or guessed.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xs sm:aspect-[24/9]">
          <Image
            src="/webhooks-events/schema-explorer-charts.webp"
            alt="Analytics charts on a laptop representing schema explorer metrics"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 3 Family Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schemaFamilies.map((fam) => (
            <div
              key={fam.title}
              className="flex flex-col gap-3 rounded-2xl border border-grey-91 bg-white-solid p-6 shadow-xs sm:p-7"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 font-manrope text-xs font-bold text-amber-800">
                  Schema pending publication
                </span>
              </div>
              <h3 className="pt-2 font-dm-serif text-2xl font-normal text-azure-9">
                {fam.title}
              </h3>
              <span className="font-manrope text-xs font-medium text-azure-47">
                {fam.version}
              </span>
              <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                {fam.description}
              </p>
            </div>
          ))}
        </div>

        {/* Filter State Note */}
        <div className="rounded-xl border border-grey-91 bg-white-solid p-5 sm:p-6 shadow-xs">
          <p className="font-manrope text-sm font-normal leading-relaxed text-slate-600 sm:text-[15px]">
            No published event schemas match the filter “Verified schema.” Once a
            schema is approved, its version, status and last-reviewed date will
            appear here with a read-only sample.
          </p>
        </div>
      </div>
    </section>
  );
}
