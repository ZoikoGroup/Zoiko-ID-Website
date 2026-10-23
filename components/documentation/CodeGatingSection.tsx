interface CodeGatingSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CodeGatingSection({
  view = "all",
}: CodeGatingSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Examples
                  <br />
                  are labelled,
                  <br />
                  and code is
                  <br />
                  gated
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Code samples come only from the approved engineering registry. No working endpoint is shown on this page.
                </p>
              </div>

              {/* Right Column: Code Window & 2 Cards */}
              <div className="flex flex-col gap-6 lg:col-span-8">
                {/* Code Block Window */}
                <div className="overflow-hidden rounded-2xl bg-[#0c1626] p-6 text-xs shadow-xl sm:p-7 sm:text-[13px]">
                  <pre className="font-mono leading-relaxed">
                    <span className="text-slate-400">
                      {"// Illustrative example - not a verified implementation contract"}
                    </span>
                    {"\n"}
                    <span className="text-[#38bdf8]">status:</span>{" "}
                    <span className="text-emerald-300">{"\"sample-only\","}</span>
                    {"\n"}
                    <span className="text-[#38bdf8]">source:</span>{" "}
                    <span className="text-emerald-300">{"\"engineering-registry: pending\""}</span>
                    {"\n"}
                    <span className="text-[#38bdf8]">runnable:</span>{" "}
                    <span className="text-rose-300">false</span>
                  </pre>
                </div>

                {/* 2 Feature Cards Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Card 1: Copy controls */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                    <h3 className="font-manrope text-[15px] font-bold text-[#071324]">
                      Copy controls
                    </h3>
                    <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      Copy works only with clipboard permission. Unsupported languages show a plain-text version.
                    </p>
                  </div>

                  {/* Card 2: Source unavailable */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                    <h3 className="font-manrope text-[15px] font-bold text-[#071324]">
                      Source unavailable
                    </h3>
                    <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      If a sample cannot be verified, the example is withdrawn and the surrounding text stays.
                    </p>
                  </div>
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
              06 · ARTICLE BODY AND EXAMPLES
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Examples are labelled, and code is gated
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Code samples come only from the approved engineering registry. No working endpoint is shown on this page.
          </p>

          {/* Code Window */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-[#0c192c] p-5 text-xs shadow-md">
            <pre className="font-mono leading-relaxed whitespace-pre-wrap text-[11.5px]">
              <span className="text-[#eab308]">
                {"// Illustrative example - not a\nverified implementation contract"}
              </span>
              {"\n"}
              <span className="text-[#94a3b8]">status:</span>{" "}
              <span className="text-[#38bdf8]">{"\"sample-only\""}</span>
              {"\n"}
              <span className="text-[#94a3b8]">source:</span>{" "}
              <span className="text-[#38bdf8]">{"\"engineering-registry:\npending\""}</span>
              {"\n"}
              <span className="text-[#94a3b8]">runnable:</span>{" "}
              <span className="text-slate-400">false</span>
            </pre>
          </div>

          {/* Mobile Cards Stack */}
          <div className="mt-4 flex flex-col gap-4">
            {/* Copy controls */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
              <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                Copy controls
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                Copy works only with clipboard permission. Unsupported languages show a plain-text version.
              </p>
            </div>

            {/* Source unavailable */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-xs">
              <h3 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                Source unavailable
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                If a sample cannot be verified, the example is withdrawn and the surrounding text stays.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
