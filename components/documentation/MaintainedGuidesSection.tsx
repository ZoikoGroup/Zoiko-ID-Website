interface MaintainedGuidesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function MaintainedGuidesSection({
  view = "all",
}: MaintainedGuidesSectionProps = {}) {
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
              <div className="lg:col-span-5">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Only
                  <br />
                  maintained,
                  <br />
                  owned guides
                  <br />
                  are featured
                </h2>
              </div>

              {/* Right Column: Explainer & State Card */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                <p className="max-w-[620px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px] sm:leading-relaxed">
                  A guide is featured only when it has an owner, a verified review date and a current status. Until then, this area stays empty rather than filled with placeholders.
                </p>

                {/* Empty State Card */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                  <div className="inline-flex items-center rounded-full bg-[#f1f5f9] px-3 py-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      NO GUIDES PUBLISHED
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                    No featured guides yet
                  </h3>

                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                    When guides pass review, they appear here with their title, summary, owner and last reviewed date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-100">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              04 · FEATURED GUIDES
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Only maintained, owned guides are featured
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            A guide is featured only when it has an owner, a verified review date and a current status. Until then, this area stays empty rather than filled with placeholders.
          </p>

          {/* Mobile Empty State Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
            <div className="inline-flex items-center rounded-full bg-[#edf2f7] px-3 py-1">
              <span className="font-mono text-[9px] font-bold tracking-wider text-slate-600 uppercase">
                NO GUIDES PUBLISHED
              </span>
            </div>

            <h3 className="mt-3.5 font-manrope text-[14.5px] font-bold text-[#071324]">
              No featured guides yet
            </h3>

            <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
              When guides pass review, they appear here with their title, summary, owner and last reviewed date.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
