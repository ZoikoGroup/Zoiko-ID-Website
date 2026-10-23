interface SourceBackedMetadataSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface MetadataItem {
  property: string;
  specification: string;
}

const metadataItems: MetadataItem[] = [
  {
    property: "Title",
    specification:
      "Unique, factual, Documentation for identity, authority and evidence",
  },
  {
    property: "Canonical",
    specification: "Only after route approval; no invented path",
  },
  {
    property: "Indexing",
    specification: "Previews, drafts and private pages marked noindex",
  },
  {
    property: "Answers",
    specification: "Concise first-paragraph answers with clear headings",
  },
  {
    property: "Structured data",
    specification:
      "FAQ markup only where eligible and approved; no fake review or rating schema",
  },
];

export default function SourceBackedMetadataSection({
  view = "all",
}: SourceBackedMetadataSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white border-t border-slate-100">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Source-
                  <br />
                  backed
                  <br />
                  metadata
                  <br />
                  only
                </h2>
              </div>

              {/* Right Column: Key-Value Table */}
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {metadataItems.map((item) => (
                      <div
                        key={item.property}
                        className="grid grid-cols-12 items-center px-6 py-4.5"
                      >
                        <span className="col-span-3 font-bold text-[#071324]">
                          {item.property}
                        </span>
                        <span className="col-span-9 text-[#64748b] leading-relaxed">
                          {item.specification}
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
        <div className="sm:hidden bg-white px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              15 · SEO AND ANSWER-FIRST
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Source-backed metadata only
          </h2>

          {/* Mobile Key-Value Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[100px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Title
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-relaxed">
                  Unique, factual. Documentation for identity, authority and evidence
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Canonical
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-relaxed">
                  Only after route approval; no invented path
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Indexing
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-relaxed">
                  Previews, drafts and private pages marked noindex
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Answers
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-relaxed">
                  Concise first-paragraph answers with clear headings
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Structured data
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-relaxed">
                  FAQ markup only where eligible and approved; no fake review or rating schema
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
