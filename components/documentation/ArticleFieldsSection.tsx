interface ArticleFieldsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface ArticleField {
  field: string;
  contract: string;
  ownerAndValidation: string;
}

const articleFields: ArticleField[] = [
  {
    field: "doc_id",
    contract: "Opaque, stable identifier",
    ownerAndValidation: "Content Ops; unique",
  },
  {
    field: "publication_status",
    contract: "Draft, review, current, superseded, restricted, withdrawn",
    ownerAndValidation: "Only current is public",
  },
  {
    field: "last_reviewed_at",
    contract: "ISO date, evidence-backed",
    ownerAndValidation: "Required before a current label",
  },
  {
    field: "canonical_route",
    contract: "Approved same-site or verified specialist route",
    ownerAndValidation: "Route registry; fails closed",
  },
  {
    field: "source_owner",
    contract: "Named team role, never a fabricated person",
    ownerAndValidation: "Governance registry",
  },
  {
    field: "related_documents",
    contract: "Verified canonical route identifiers",
    ownerAndValidation: "Cross-link integrity checked",
  },
];

export default function ArticleFieldsSection({
  view = "all",
}: ArticleFieldsSectionProps = {}) {
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
                  Every article
                  <br />
                  record has
                  <br />
                  the same
                  <br />
                  fields
                </h2>
              </div>

              {/* Right Column: Fields Table */}
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#edf2f7] px-6 py-3.5 text-xs font-bold text-[#071324] font-manrope">
                    <span className="col-span-3">Field</span>
                    <span className="col-span-5">Contract</span>
                    <span className="col-span-4">Owner and validation</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {articleFields.map((row) => (
                      <div
                        key={row.field}
                        className="grid grid-cols-12 items-center px-6 py-4"
                      >
                        <span className="col-span-3 font-mono font-bold text-[#071324] text-[12.5px]">
                          {row.field}
                        </span>
                        <span className="col-span-5 text-[#64748b] pr-4 leading-relaxed">
                          {row.contract}
                        </span>
                        <span className="col-span-4 text-[#64748b] leading-relaxed">
                          {row.ownerAndValidation}
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
              12 · CONTENT DATA CONTRACT
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Every article record has the same fields
          </h2>

          {/* Mobile Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-[105px_1fr_85px] bg-[#edf2f7] px-4 py-3 text-[11.5px] font-bold text-[#071324] font-manrope">
              <span>Field</span>
              <span>Contract</span>
              <span>Owner validation</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  doc_id
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Opaque, stable identifier
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Content Ops; unique
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  publication_status
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Draft, review, current, superseded, restricted, withdrawn
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Only current is public
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  last_reviewed_at
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  ISO date, evidence-backed
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Required before a current label
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  canonical_route
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Approved same-site or verified specialist route
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Route registry; fails closed
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  source_owner
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Named team role, never a fabricated person
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Governance registry
                </span>
              </div>

              <div className="grid grid-cols-[105px_1fr_85px] items-start px-4 py-3.5">
                <span className="font-mono font-bold text-[#071324] text-[11px] break-all">
                  related_documents
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug pr-2">
                  Verified canonical route identifiers
                </span>
                <span className="text-[#64748b] text-[11.5px] leading-snug">
                  Cross-link integrity checked
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
