interface BarrierReportSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface SpecRow {
  field: string;
  rule: string;
}

const reportSpecs: SpecRow[] = [
  {
    field: "Affected page or feature",
    rule: "Optional path or page reference",
  },
  {
    field: "Describe the barrier",
    rule: "Required; bounded length, plain text",
  },
  {
    field: "Effect on your task",
    rule: "Optional",
  },
  {
    field: "Assistive technology, browser or device",
    rule: "Optional; never required",
  },
  {
    field: "Reply email",
    rule: "Optional; only if you ask for a reply",
  },
  {
    field: "Consent",
    rule: "Explicit privacy acknowledgement, separate from marketing",
  },
  {
    field: "Never requested",
    rule: "Passwords, tokens, identity documents, health or disability details",
  },
];

export default function BarrierReportSection({
  view = "all",
}: BarrierReportSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, specification rows and borders
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  08
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    BARRIER REPORT
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Report an
                    <br />
                    accessibility
                    <br />
                    barrier
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-sm">
                    This form is shown as a specification. No submit control appears
                    until a verified intake route and a secure backend exist.
                  </p>
                </div>
              </div>

              {/* Right Column: Specification Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm">
                  <div className="divide-y divide-slate-100">
                    {reportSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className={`grid grid-cols-12 gap-4 items-start ${
                          idx === 0 ? "pb-4" : idx === reportSpecs.length - 1 ? "pt-4" : "py-4"
                        }`}
                      >
                        <div className="col-span-5 text-sm font-semibold text-slate-900">
                          {spec.field}
                        </div>
                        <div
                          className={`col-span-7 text-xs sm:text-sm leading-relaxed ${
                            spec.field === "Never requested"
                              ? "text-slate-600 font-medium"
                              : "text-slate-600"
                          }`}
                        >
                          {spec.rule}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE VERSION (sm:hidden)
          Completely isolated to guarantee zero layout regression on desktop
          ========================================================================= */}
      {showMobile && (
        <div className="sm:hidden px-4 py-12 bg-[#F3F6FA] border-t border-slate-100">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            09
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              BARRIER REPORT
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Report an accessibility barrier
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The form is shown as a specification. No submit control appears until a
              verified intake route and a secure backend exist.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-600 border border-slate-300/60">
                FORM NOT AVAILABLE
              </span>
            </div>
          </div>

          {/* Specification Card for Mobile */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="divide-y divide-slate-100">
              {reportSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className={`space-y-1 ${
                    idx === 0 ? "pb-3.5" : idx === reportSpecs.length - 1 ? "pt-3.5" : "py-3.5"
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-900">
                    {spec.field}
                  </div>
                  <div className="text-xs leading-relaxed text-slate-600">
                    {spec.rule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
