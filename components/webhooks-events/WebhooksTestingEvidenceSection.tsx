export default function WebhooksTestingEvidenceSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Left Column: Testing guidance */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
              Testing guidance
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-azure-47">
              Published technical guidance covers approved test tooling only.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-grey-91 bg-grey-98 p-5 sm:p-6 shadow-xs">
              <p className="font-manrope text-sm font-bold leading-relaxed text-azure-9 sm:text-[15px]">
                Explore testing guidance
                <br />
                <span className="font-normal text-azure-47">
                  Published technical guidance for approved test tooling.
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-grey-91 bg-grey-98 p-5 sm:p-6 shadow-xs">
              <p className="font-manrope text-sm font-bold leading-relaxed text-azure-9 sm:text-[15px]">
                Sandbox status: not confirmed as active.
                <br />
                <span className="font-normal text-azure-47">
                  Ask about evaluation options.
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 shadow-xs">
              <p className="font-manrope text-sm font-bold leading-relaxed text-azure-9 sm:text-[15px]">
                No live test events are sent from this page. Any test must use
                synthetic records and cannot trigger live changes.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Evidence distinction */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px] md:leading-[1.15]">
              A notification is not the audit record
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-azure-47">
              Each notification can carry an event identifier and request context,
              so you can correlate it with your own logs. The authoritative audit
              evidence stays in the owning system.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-grey-91 bg-white-solid shadow-xs">
            <div className="grid grid-cols-1 divide-y divide-grey-91 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {/* Notification Side */}
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div className="flex flex-col gap-2.5 pb-6">
                  <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                    Notification
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                    Tells a subscriber that something changed. Used to trigger a
                    check. Not proof of an action.
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1 font-manrope text-xs font-bold text-slate-700">
                    Informational
                  </span>
                </div>
              </div>

              {/* Audit Evidence Side */}
              <div className="flex flex-col justify-between bg-slate-50/40 p-6 sm:p-7">
                <div className="flex flex-col gap-2.5 pb-6">
                  <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                    Audit evidence
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                    The governed record held by the owning service. Reviewed
                    through its own authorized route.
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 font-manrope text-xs font-bold text-emerald-800">
                    Authoritative in owning system
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
