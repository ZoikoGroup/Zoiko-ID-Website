import Link from "next/link";

const previewRows = [
  { label: "Endpoint", value: "Your HTTPS endpoint" },
  { label: "Event categories", value: "Choose by category" },
  { label: "Tenant scope", value: "Set server-side" },
  { label: "Status", value: "Not available in this preview" },
];

export default function WebhooksSubscriptionsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-14">
        {/* Left Column */}
        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px] md:leading-[1.15]">
            How subscriptions are scoped
          </h2>

          <p className="font-manrope text-base font-normal leading-relaxed text-azure-47">
            Subscriptions are configured in an authenticated, authorized console
            once it is available to your account. The panel opposite is a
            conceptual example, not a working control.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-full border border-grey-91 bg-white-solid px-6 py-3 font-manrope text-sm font-bold text-azure-9 shadow-xs transition-all duration-150 hover:bg-slate-50 hover:border-slate-300"
            >
              Open the authenticated console
            </Link>
            <Link
              href="/apis-integrations"
              className="inline-flex items-center justify-center rounded-full border border-grey-91 bg-white-solid px-6 py-3 font-manrope text-sm font-bold text-azure-47 shadow-xs transition-all duration-150 hover:bg-slate-50 hover:text-azure-9 hover:border-slate-300"
            >
              Subscription documentation
            </Link>
          </div>
        </div>

        {/* Right Column: Preview Panel */}
        <div className="w-full lg:w-[480px]">
          <div className="overflow-hidden rounded-2xl border border-grey-91 bg-white-solid shadow-xs">
            {/* Panel Header */}
            <div className="flex items-center justify-between border-b border-grey-91 bg-grey-96 px-6 py-4.5">
              <span className="font-manrope text-base font-bold text-azure-9">
                Subscription setup preview
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 font-manrope text-xs font-bold text-purple-900">
                Conceptual example
              </span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-grey-91">
              {previewRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-6 py-4 font-manrope text-sm"
                >
                  <span className="font-semibold text-azure-47">{row.label}</span>
                  <span className="font-normal text-azure-9">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Panel Footer */}
            <div className="border-t border-grey-91 bg-grey-98 px-6 py-3.5 text-center font-manrope text-[13px] font-normal text-azure-47">
              No change is saved from this page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
