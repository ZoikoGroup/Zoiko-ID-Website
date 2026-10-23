import Link from "next/link";

interface IssueOwnerRow {
  issue: string;
  owner: string;
  href?: string;
}

const issueMappings: IssueOwnerRow[] = [
  {
    issue: "Account issue",
    owner: "Support intake if active",
    href: "#routes",
  },
  {
    issue: "API documentation",
    owner: "Developer documentation",
    href: "/overview",
  },
  {
    issue: "Security vulnerability",
    owner: "Responsible Disclosure",
    href: "/security-contact",
  },
  {
    issue: "Suspected compromise",
    owner: "Security Contact",
    href: "/security-contact",
  },
  {
    issue: "Active outage",
    owner: "Availability / Status",
    href: "/availability-status",
  },
  {
    issue: "Data rights",
    owner: "Privacy route",
    href: "/trust-assurance-privacy",
  },
  {
    issue: "Commercial",
    owner: "Talk to Sales",
    href: "/talk-to-sales",
  },
  {
    issue: "Careers",
    owner: "Company Careers",
    href: "/about-us",
  },
];

const mobileIssueMappings = [
  {
    issue: "Account issue",
    goesTo: "Support intake, if active",
    href: "#routes",
  },
  {
    issue: "API documentation",
    goesTo: "Developers documentation",
    href: "/overview",
  },
  {
    issue: "Security vulnerability",
    goesTo: "Responsible Disclosure",
    href: "/security-contact",
  },
  {
    issue: "Suspected compromise",
    goesTo: "Security Contact",
    href: "/security-contact",
  },
  {
    issue: "Active outage",
    goesTo: "Availability / Status",
    href: "/availability-status",
  },
  {
    issue: "Data rights",
    goesTo: "Privacy route",
    href: "/trust-assurance-privacy",
  },
  {
    issue: "Commercial",
    goesTo: "Talk to Sales",
    href: "/talk-to-sales",
  },
  {
    issue: "Careers",
    goesTo: "Company Careers",
    href: "/about-us",
  },
];

interface IssueOwnerTableSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function IssueOwnerTableSection({
  view = "all",
}: IssueOwnerTableSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              SPECIALIST HANDOFFS
            </span>
          </div>

        {/* Title without awkward line breaks */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
          Each kind of issue has one owner
        </h2>
        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Support does not take over specialist work. A handoff passes your context to the owner and never creates a duplicate request.
        </p>

        {/* Mobile Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1.1fr_1.3fr] bg-[#edf2f7] px-5 py-3.5 text-slate-800">
            <span className="font-manrope text-[11.5px] font-bold text-[#071324]">
              Issue
            </span>
            <span className="font-manrope text-[11.5px] font-bold text-[#071324]">
              Goes to
            </span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 font-manrope">
            {mobileIssueMappings.map((row) => (
              <div
                key={row.issue}
                className="grid grid-cols-[1.1fr_1.3fr] gap-3 px-5 py-3.5 items-center"
              >
                <span className="text-[12.5px] font-bold text-[#071324] leading-snug">
                  {row.issue}
                </span>
                <div>
                  {row.href ? (
                    <Link
                      href={row.href}
                      className="text-[12px] text-[#475569] transition hover:text-[#0284c7] leading-snug"
                    >
                      {row.goesTo}
                    </Link>
                  ) : (
                    <span className="text-[12px] text-[#475569] leading-snug">
                      {row.goesTo}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1020px] px-6 sm:px-8">
          {/* Section Header */}
          <div className="max-w-[800px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              Each kind of issue has one owner
            </h2>
            <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              Support does not take over specialist work. A handoff passes your context to the owner and never creates a duplicate request.
            </p>
          </div>

          {/* Ownership Matrix Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            {/* Dark Navy Table Header */}
            <div className="grid grid-cols-1 bg-[#071324] px-6 py-4 text-white sm:grid-cols-2">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300">
                Issue
              </span>
              <span className="hidden font-mono text-[11px] font-bold tracking-wider uppercase text-slate-300 sm:block">
                Owner
              </span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 font-manrope">
              {issueMappings.map((row) => (
                <div
                  key={row.issue}
                  className="grid grid-cols-1 gap-1 px-6 py-4 transition hover:bg-slate-50/50 sm:grid-cols-2 sm:gap-4 sm:py-4.5"
                >
                  {/* Column 1: Issue */}
                  <span className="text-xs font-bold text-[#071324] sm:text-[13.5px]">
                    {row.issue}
                  </span>

                  {/* Column 2: Owner */}
                  <div>
                    {row.href ? (
                      <Link
                        href={row.href}
                        className="text-xs text-[#2563eb] transition hover:underline sm:text-[13.5px]"
                      >
                        {row.owner}
                      </Link>
                    ) : (
                      <span className="text-xs text-[#64748b] sm:text-[13.5px]">
                        {row.owner}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
