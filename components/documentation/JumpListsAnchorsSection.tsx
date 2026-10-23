interface JumpListsAnchorsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const tocItems = [
  "Article body",
  "Lifecycle",
  "Developer handoffs",
  "Security and privacy",
  "Acceptance",
];

export default function JumpListsAnchorsSection({
  view = "all",
}: JumpListsAnchorsSectionProps = {}) {
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
                  Jump lists
                  <br />
                  and anchors
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Desktop shows a sticky table of contents only for long articles. Mobile uses a collapsible jump list.
                </p>
              </div>

              {/* Right Column: 2 Cards Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {/* Card 1: Desktop table of contents */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                  <h3 className="font-manrope text-[15px] font-bold text-[#071324]">
                    Desktop table of contents
                  </h3>

                  <div className="mt-5 divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {tocItems.map((item) => (
                      <div key={item} className="py-3 first:pt-1 last:pb-0 text-[#071324]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: Mobile jump list */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                  <div>
                    <h3 className="font-manrope text-[15px] font-bold text-[#071324]">
                      Mobile jump list
                    </h3>
                    <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      Collapsed by default. Expanding it moves focus to the list. Anchors keep their scroll offset.
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div className="mt-8 border-t border-slate-100 pt-4">
                    <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                      ZOOM 200% TESTED
                    </span>
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
              07 · IN-PAGE NAVIGATION
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.15] tracking-tight text-[#071324]">
            Jump lists and anchors
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Desktop shows a sticky table of contents only for long articles. Mobile uses a collapsible jump list.
          </p>

          {/* Mobile Cards Stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Desktop table of contents card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
              <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                Desktop table of contents
              </h3>
              <div className="mt-4 divide-y divide-slate-100 font-manrope text-xs">
                {tocItems.map((item) => (
                  <div
                    key={item}
                    className="py-2.5 text-center font-medium text-[#071324]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile jump list card */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
              <div>
                <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                  Mobile jump list
                </h3>
                <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                  Collapsed by default. Expanding it moves focus to the list. Anchors keep their scroll offset.
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3">
                <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-600 uppercase">
                  ZOOM 400% TESTED
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
