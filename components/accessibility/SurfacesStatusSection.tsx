interface SurfacesStatusSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface SurfaceItem {
  surface: string;
  covers: string;
  testStatus: string;
}

const surfaceRows: SurfaceItem[] = [
  {
    surface: "Public marketing pages",
    covers: "Overview, platform and company pages",
    testStatus: "Not published",
  },
  {
    surface: "Help and documentation",
    covers: "Support, documentation and specialist routes",
    testStatus: "Not published",
  },
  {
    surface: "Identity flows",
    covers: "Authentication sign-in and recovery flows",
    testStatus: "Not published",
  },
  {
    surface: "Enterprise consoles",
    covers: "Organization administration, where released",
    testStatus: "Not published",
  },
];

export default function SurfacesStatusSection({
  view = "all",
}: SurfacesStatusSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, table structure and borders
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  05
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    WHERE ACCESSIBILITY APPLIES
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Surfaces and
                    <br />
                    their status
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-md">
                    Each surface is noted separately. Test status is shown only
                    where verified evidence exists.
                  </p>
                </div>
              </div>

              {/* Right Column: Surfaces Status Table */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200/80">
                        <th className="py-3.5 px-6 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600 w-1/3">
                          Surface
                        </th>
                        <th className="py-3.5 px-6 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600 w-1/2">
                          Covers
                        </th>
                        <th className="py-3.5 px-6 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600 text-right">
                          Test status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {surfaceRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="py-4 px-6 text-sm font-semibold text-slate-900 align-top">
                            {row.surface}
                          </td>
                          <td className="py-4 px-6 text-xs lg:text-sm text-slate-600 leading-relaxed align-top">
                            {row.covers}
                          </td>
                          <td className="py-4 px-6 text-xs font-medium text-slate-500 text-right whitespace-nowrap align-top">
                            {row.testStatus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
        <div className="sm:hidden px-4 py-12 border-t border-slate-100">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            06
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              WHERE ACCESSIBILITY APPLIES
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Surfaces and their status
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Each surface is noted separately. Test status is shown only where
              verified evidence exists.
            </p>
          </div>

          {/* Table Card for Mobile */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th className="py-3 px-3 font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-600 w-[30%]">
                    Surface
                  </th>
                  <th className="py-3 px-3 font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-600 w-[45%]">
                    Covers
                  </th>
                  <th className="py-3 px-3 font-mono text-[9.5px] font-bold uppercase tracking-wider text-slate-600 text-right w-[25%]">
                    Test status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {surfaceRows.map((row, idx) => (
                  <tr key={idx} className="align-top">
                    <td className="py-3 px-3 text-[11px] font-bold text-slate-900 leading-tight">
                      {row.surface}
                    </td>
                    <td className="py-3 px-3 text-[10px] text-slate-600 leading-relaxed">
                      {row.covers}
                    </td>
                    <td className="py-3 px-3 text-[10px] text-slate-500 text-right whitespace-nowrap">
                      {row.testStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
