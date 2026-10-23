import { AlertTriangle } from "lucide-react";

interface ArticleStatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface StateRow {
  state: string;
  meaning: string;
}

const stateRows: StateRow[] = [
  {
    state: "Current",
    meaning: "Reviewed against its owner's source, with a last-reviewed date.",
  },
  {
    state: "Review pending",
    meaning: "Labelled as under review; never presented as current.",
  },
  {
    state: "Superseded",
    meaning: "A notice that links to the replacement article.",
  },
  {
    state: "Withdrawn",
    meaning: "Removed, or explained with the reason.",
  },
  {
    state: "Restricted",
    meaning: "Shown only to entitled readers; no snippet is public.",
  },
];

export default function ArticleStatesSection({
  view = "all",
}: ArticleStatesSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Every page
                  <br />
                  shows its
                  <br />
                  state
                </h2>
              </div>

              {/* Right Column: State Matrix Table & Callout Alert */}
              <div className="flex flex-col gap-6 lg:col-span-8">
                {/* States Table Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#edf2f7] px-6 py-3.5 text-xs font-bold text-[#071324] font-manrope">
                    <span className="col-span-4">State</span>
                    <span className="col-span-8">What the reader sees</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {stateRows.map((row) => (
                      <div
                        key={row.state}
                        className="grid grid-cols-12 items-center px-6 py-4"
                      >
                        <span className="col-span-4 font-bold text-[#071324]">
                          {row.state}
                        </span>
                        <span className="col-span-8 leading-relaxed text-[#64748b]">
                          {row.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout Alert Box */}
                <div className="flex items-start gap-3.5 rounded-2xl border border-rose-200 bg-rose-50/50 p-5 sm:p-6">
                  <AlertTriangle className="size-4.5 shrink-0 text-rose-600 mt-0.5" />
                  <p className="font-manrope text-xs leading-relaxed sm:text-[13px]">
                    <strong className="font-bold text-rose-900">
                      Unverified dates block publication.
                    </strong>{" "}
                    <span className="text-rose-800">
                      An article without an owner and a verified review date cannot be published as current.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              08 · CONTENT TRUST AND LIFECYCLE
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Every page shows its state
          </h2>

          {/* Mobile Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-[90px_1fr] bg-[#edf2f7] px-4 py-3 text-[11.5px] font-bold text-[#071324] font-manrope">
              <span>State</span>
              <span>What the reader sees</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[90px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Current
                </span>
                <span className="leading-relaxed text-[#64748b] text-[11.5px]">
                  Reviewed against its owner&apos;s source, with a last-reviewed date.
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Review pending
                </span>
                <span className="leading-relaxed text-[#64748b] text-[11.5px]">
                  Labelled as under review, never presented as current.
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Superseded
                </span>
                <span className="leading-relaxed text-[#64748b] text-[11.5px]">
                  A notice that links to the replacement article.
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Withdrawn
                </span>
                <span className="leading-relaxed text-[#64748b] text-[11.5px]">
                  Removed, or explained with the reason.
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Restricted
                </span>
                <span className="leading-relaxed text-[#64748b] text-[11.5px]">
                  Shown only to entitled readers; no snippet is public.
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Alert Box */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200/90 bg-[#FFF5F5] p-4.5">
            <AlertTriangle className="size-4.5 shrink-0 text-[#b91c1c] mt-0.5" />
            <div className="font-manrope">
              <h4 className="text-[12px] font-bold text-[#991b1b]">
                Unverified dates block publication.
              </h4>
              <p className="mt-1 text-[11.5px] leading-relaxed text-[#b91c1c]/90">
                An article without an owner and a verified review date cannot be
                published as current.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
