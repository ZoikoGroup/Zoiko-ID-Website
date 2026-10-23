interface ArticleStructureSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface ArticleOrderRow {
  label: string;
  purpose: string;
}

const articleOrderRows: ArticleOrderRow[] = [
  {
    label: "Goal",
    purpose: "what it helps you do",
  },
  {
    label: "Prerequisites",
    purpose: "what you need first",
  },
  {
    label: "Steps",
    purpose: "conceptual or procedural",
  },
  {
    label: "Evidence",
    purpose: "context and sources",
  },
  {
    label: "Boundaries",
    purpose: "what is not covered",
  },
  {
    label: "Troubleshooting",
    purpose: "common issues",
  },
  {
    label: "Next action",
    purpose: "where to go next",
  },
];

export default function ArticleStructureSection({
  view = "all",
}: ArticleStructureSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200/60">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Every article
                  <br />
                  follows the
                  <br />
                  same order
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  A consistent order shows what is a prerequisite, what is a step, and what is context.
                </p>
              </div>

              {/* Right Column: Order Matrix Card */}
              <div className="lg:col-span-8">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="divide-y divide-slate-100 font-manrope">
                    {articleOrderRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between py-3.5 first:pt-1 last:pb-1 sm:py-4"
                      >
                        <span className="text-xs font-semibold text-[#071324] sm:text-[13.5px]">
                          {row.label}
                        </span>
                        <span className="text-xs font-medium text-[#9a5b32] sm:text-[13px]">
                          {row.purpose}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f4f7fa] px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              05 · ARTICLE STRUCTURE
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Every article follows the same order
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            A consistent order shows what is a prerequisite, what is a step, and what is context.
          </p>

          {/* Mobile Order Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
            <div className="divide-y divide-slate-100 font-manrope">
              {articleOrderRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3.5 first:pt-1 last:pb-1"
                >
                  <span className="text-xs font-bold text-[#071324]">
                    {row.label}
                  </span>
                  <span className="text-[11.5px] font-medium text-[#9a5b32]">
                    {row.purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
