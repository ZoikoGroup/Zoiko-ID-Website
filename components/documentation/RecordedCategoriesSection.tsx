import { CheckCircle2, X } from "lucide-react";

interface RecordedCategoriesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const recordedItems = [
  "topic_entry and article_opened, by category",
  "documentation_search_submitted, category only",
  "specialist_handoff_clicked and help_route_clicked",
];

const neverRecordedItems = [
  "Raw search query text",
  "Passwords, access tokens or credential identifiers",
  "Identity claims or free-text security detail",
];

export default function RecordedCategoriesSection({
  view = "all",
}: RecordedCategoriesSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200/60">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Categories
                  <br />
                  only, never
                  <br />
                  typed text
                </h2>
              </div>

              {/* Right Column: Two comparison cards side by side */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
                {/* Recorded Card */}
                <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs">
                  <h3 className="font-manrope text-sm font-bold text-[#071324]">
                    Recorded
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4 font-manrope text-xs text-[#64748b]">
                    {recordedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Never Recorded Card */}
                <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs">
                  <h3 className="font-manrope text-sm font-bold text-[#071324]">
                    Never recorded
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4 font-manrope text-xs text-[#64748b]">
                    {neverRecordedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              13 · ANALYTICS
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Categories only, never typed text
          </h2>

          {/* Mobile Cards Stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Recorded Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                Recorded
              </h3>
              <ul className="mt-4 flex flex-col gap-3 font-manrope text-xs text-[#64748b]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
                  <span className="leading-relaxed">
                    topic_entry and article_opened, by category
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
                  <span className="leading-relaxed">
                    documentation_search_submitted, category only
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#0ea5e9]" />
                  <span className="leading-relaxed">
                    specialist_handoff_clicked and help_route_clicked
                  </span>
                </li>
              </ul>
            </div>

            {/* Never Recorded Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                Never recorded
              </h3>
              <ul className="mt-4 flex flex-col gap-3 font-manrope text-xs text-[#64748b]">
                <li className="flex items-start gap-2.5">
                  <X className="mt-0.5 size-3.5 shrink-0 text-[#dc2626]" />
                  <span className="leading-relaxed">Raw search query text</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="mt-0.5 size-3.5 shrink-0 text-[#dc2626]" />
                  <span className="leading-relaxed">
                    Passwords, access tokens or credential identifiers
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="mt-0.5 size-3.5 shrink-0 text-[#dc2626]" />
                  <span className="leading-relaxed">
                    Identity claims or free-text security detail
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
