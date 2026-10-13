export default function InterfaceShowcaseSection() {
  return (
    <section className="bg-grey-96 px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <div className="flex max-w-[900px] flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
            Interface concept showcase
          </h2>
          <p className="font-manrope text-base font-normal leading-7 text-azure-47">
            Illustrative example — not a depiction of a current live dashboard.
          </p>
        </div>

        {/* Dashboard Concept Card */}
        <div className="flex w-full flex-col gap-6 rounded-xl border border-grey-91 bg-white-solid p-6 shadow-sm sm:p-8 lg:p-10">
          {/* Top 2x2 Grid */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 rounded-md bg-grey-96 p-4 sm:p-5">
              <span className="font-sans text-[13.6px] font-bold text-[#475569]">
                Active Organization
              </span>
              <span className="font-sans text-base font-normal text-[#475569]">
                Acme Corp (Primary)
              </span>
            </div>

            <div className="flex flex-col gap-1.5 rounded-md bg-grey-96 p-4 sm:p-5">
              <span className="font-sans text-[13.6px] font-bold text-[#475569]">
                Actor Identity
              </span>
              <span className="font-sans text-base font-normal text-[#475569]">
                john.smith@acme.com
              </span>
            </div>

            <div className="flex flex-col gap-1.5 rounded-md bg-grey-96 p-4 sm:p-5">
              <span className="font-sans text-[13.6px] font-bold text-[#475569]">
                Account Status
              </span>
              <span className="font-sans text-base font-semibold text-[#16A34A]">
                Active Member
              </span>
            </div>

            <div className="flex flex-col gap-1.5 rounded-md bg-grey-96 p-4 sm:p-5">
              <span className="font-sans text-[13.6px] font-bold text-[#475569]">
                Last Login
              </span>
              <span className="font-sans text-base font-normal text-[#475569]">
                2 min ago from 192.168.1.100
              </span>
            </div>
          </div>

          {/* Requested Action Table */}
          <div className="flex flex-col gap-4 border-t border-grey-91 pt-6">
            <h3 className="font-sans text-[13.6px] font-bold text-[#475569]">
              Requested Action
            </h3>

            <div className="overflow-hidden rounded-md border border-grey-91">
              <div className="grid grid-cols-1 divide-y divide-grey-91 font-sans text-[13.6px]">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full bg-grey-96/60 px-4 py-3 font-medium text-[#475569] sm:w-[240px]">
                    Resource
                  </div>
                  <div className="flex-1 px-4 py-3 text-[#475569]">
                    Marketing Budget 2026
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row">
                  <div className="w-full bg-grey-96/60 px-4 py-3 font-medium text-[#475569] sm:w-[240px]">
                    Action
                  </div>
                  <div className="flex-1 px-4 py-3 text-[#475569]">Export</div>
                </div>

                <div className="flex flex-col sm:flex-row">
                  <div className="w-full bg-grey-96/60 px-4 py-3 font-medium text-[#475569] sm:w-[240px]">
                    Policy
                  </div>
                  <div className="flex-1 px-4 py-3 text-[#475569]">
                    Marketing-Export-Policy v2.1
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row">
                  <div className="w-full bg-grey-96/60 px-4 py-3 font-medium text-[#475569] sm:w-[240px]">
                    Decision
                  </div>
                  <div className="flex-1 px-4 py-3 font-bold text-[#16A34A]">
                    ALLOW
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason Footnote */}
          <div className="border-t border-grey-91 pt-5">
            <p className="font-sans text-[12.8px] font-normal leading-5 text-azure-47">
              Reason: User is active member with Marketing role. Policy allows
              export for Marketing group members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
