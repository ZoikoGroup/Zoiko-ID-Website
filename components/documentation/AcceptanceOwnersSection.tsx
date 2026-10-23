import { AlertTriangle } from "lucide-react";

interface AcceptanceOwnersSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface AcceptanceDeliverable {
  deliverable: string;
  accountableOwner: string;
  publicationGate: string;
}

const deliverables: AcceptanceDeliverable[] = [
  {
    deliverable: "Topic taxonomy",
    accountableOwner: "Product and Developer Experience",
    publicationGate: "Approved mapping to specialist routes",
  },
  {
    deliverable: "Article content",
    accountableOwner: "Content and technical reviewers",
    publicationGate: "Verified dates and owners",
  },
  {
    deliverable: "Security and privacy copy",
    accountableOwner: "Security, Privacy and Legal",
    publicationGate: "Subject sign-off",
  },
  {
    deliverable: "Accessibility",
    accountableOwner: "Design and Accessibility QA",
    publicationGate: "WCAG 2.2 AA test report",
  },
  {
    deliverable: "Release",
    accountableOwner: "Publication owner",
    publicationGate: "All acceptance criteria pass, rollback prepared",
  },
];

export default function AcceptanceOwnersSection({
  view = "all",
}: AcceptanceOwnersSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#071426] text-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
                  Acceptance
                  <br />
                  and owners
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#94a3b8] sm:text-[13px]">
                  This page is an approval candidate and is not locked.
                </p>
              </div>

              {/* Right Column: Table & Release Rule Banner */}
              <div className="flex flex-col gap-5 lg:col-span-8">
                {/* 3-Column White Card Table */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#edf2f7] px-6 py-3.5 text-xs font-bold text-[#071324] font-manrope">
                    <span className="col-span-3">Deliverable</span>
                    <span className="col-span-4">Accountable owner</span>
                    <span className="col-span-5">Publication gate</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {deliverables.map((item) => (
                      <div
                        key={item.deliverable}
                        className="grid grid-cols-12 items-center px-6 py-4"
                      >
                        <span className="col-span-3 font-bold text-[#071324]">
                          {item.deliverable}
                        </span>
                        <span className="col-span-4 text-[#64748b] pr-3 leading-relaxed">
                          {item.accountableOwner}
                        </span>
                        <span className="col-span-5 text-[#64748b] leading-relaxed">
                          {item.publicationGate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Release rule Alert Banner */}
                <div className="flex items-start gap-3 rounded-2xl border border-[#fecaca] bg-[#fff5f5] p-5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />
                  <p className="font-manrope text-xs sm:text-[12.5px] leading-relaxed text-[#b91c1c]">
                    <strong className="font-bold">Release rule.</strong> The interface may be production-ready while a specific guide or specialist destination stays gated. Publish only verified content and truthful unavailable states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#071426] px-5 py-12 border-t border-white/10">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              RELEASE GATE
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.15] tracking-tight text-white">
            Acceptance and owners
          </h2>
          <p className="mt-2.5 font-manrope text-xs leading-relaxed text-[#94a3b8]">
            This page is an approval candidate and is not locked.
          </p>

          {/* Mobile Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xs">
            {/* Header */}
            <div className="grid grid-cols-[85px_1fr_1fr] bg-[#edf2f7] px-4 py-3 text-[11px] font-bold text-[#071324] font-manrope">
              <span>Deliverable</span>
              <span>Accountable owner</span>
              <span>Publication gate</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[85px_1fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Topic taxonomy
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug pr-2">
                  Product and Developer Experience
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug">
                  Approved mapping to specialist routes
                </span>
              </div>

              <div className="grid grid-cols-[85px_1fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Article content
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug pr-2">
                  Content and technical reviewers
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug">
                  Verified dates and owners
                </span>
              </div>

              <div className="grid grid-cols-[85px_1fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Security and privacy copy
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug pr-2">
                  Security, Privacy and Legal
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug">
                  Subject sign-off
                </span>
              </div>

              <div className="grid grid-cols-[85px_1fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Accessibility
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug pr-2">
                  Design and Accessibility QA
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug">
                  WCAG 2.2 AA test report
                </span>
              </div>

              <div className="grid grid-cols-[85px_1fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Release
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug pr-2">
                  Publication owner
                </span>
                <span className="text-[#64748b] text-[11px] leading-snug">
                  All acceptance criteria pass, rollback prepared
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Release Rule Alert */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#fecaca] bg-[#fff5f5] p-4.5">
            <AlertTriangle className="mt-0.5 size-4.5 shrink-0 text-[#dc2626]" />
            <p className="font-manrope text-xs leading-relaxed text-[#b91c1c]">
              <strong className="font-bold">Release rule.</strong> The interface may be production-ready while a specific guide or specialist destination stays gated. Publish only verified content and truthful unavailable states.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
