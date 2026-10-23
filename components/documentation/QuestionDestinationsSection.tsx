import Link from "next/link";

interface QuestionDestinationsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface DestinationRow {
  question: string;
  destination: string;
  href?: string;
}

const destinationRows: DestinationRow[] = [
  {
    question: "Security vulnerability",
    destination: "Responsible Disclosure",
    href: "/security-contact",
  },
  {
    question: "Security concern",
    destination: "Security Contact",
    href: "/security-contact",
  },
  {
    question: "Privacy or data rights",
    destination: "Privacy route",
    href: "/trust-assurance-privacy",
  },
  {
    question: "Confirmed incident or maintenance",
    destination: "Availability / Status",
    href: "/availability-status",
  },
  {
    question: "Account or product help",
    destination: "Help & Support",
    href: "/help-support",
  },
];

export default function QuestionDestinationsSection({
  view = "all",
}: QuestionDestinationsSectionProps = {}) {
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
                  Each question
                  <br />
                  has one
                  <br />
                  destination
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Case details are never passed automatically between routes.
                </p>
              </div>

              {/* Right Column: Question Table & Footnote */}
              <div className="flex flex-col gap-3 lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-[#edf2f7] px-6 py-3.5 text-xs font-bold text-[#071324] font-manrope">
                    <span className="col-span-6">Question</span>
                    <span className="col-span-6">Goes to</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                    {destinationRows.map((row) => (
                      <div
                        key={row.question}
                        className="grid grid-cols-12 items-center px-6 py-4"
                      >
                        <span className="col-span-6 font-bold text-[#071324]">
                          {row.question}
                        </span>
                        <div className="col-span-6">
                          {row.href ? (
                            <Link
                              href={row.href}
                              className="text-[#64748b] transition hover:text-[#2563eb]"
                            >
                              {row.destination}
                            </Link>
                          ) : (
                            <span className="text-[#64748b]">
                              {row.destination}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-manrope text-[11.5px] text-[#94a3b8]">
                  Every destination above is marked pending until its route is verified.
                </p>
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
              10 · SECURITY, PRIVACY AND OPERATIONS
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Each question has one destination
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Case details are never passed automatically between routes.
          </p>

          {/* Mobile Table Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1fr] bg-[#edf2f7] px-4 py-3 text-[11.5px] font-bold text-[#071324] font-manrope">
              <span>Question</span>
              <span>Goes to</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 font-manrope text-xs">
              <div className="grid grid-cols-[1.2fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Security vulnerability
                </span>
                <div>
                  <Link
                    href="/security-contact"
                    className="text-[#64748b] text-[11.5px] leading-snug transition hover:text-[#2563eb]"
                  >
                    Responsible
                    <br />
                    Disclosure
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Security concern
                </span>
                <div>
                  <Link
                    href="/security-contact"
                    className="text-[#64748b] text-[11.5px] transition hover:text-[#2563eb]"
                  >
                    Security Contact
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px]">
                  Privacy or data rights
                </span>
                <div>
                  <Link
                    href="/trust-assurance-privacy"
                    className="text-[#64748b] text-[11.5px] transition hover:text-[#2563eb]"
                  >
                    Privacy route
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Confirmed incident or
                  <br />
                  maintenance
                </span>
                <div>
                  <Link
                    href="/availability-status"
                    className="text-[#64748b] text-[11.5px] leading-snug transition hover:text-[#2563eb]"
                  >
                    Availability /
                    <br />
                    Status
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-[1.2fr_1fr] items-start px-4 py-3.5">
                <span className="font-bold text-[#071324] text-[12px] leading-snug">
                  Account or product
                  <br />
                  help
                </span>
                <div>
                  <Link
                    href="/help-support"
                    className="text-[#64748b] text-[11.5px] transition hover:text-[#2563eb]"
                  >
                    Help &amp; Support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b]">
            Every destination above is marked pending until its route is verified.
          </p>
        </div>
      )}
    </section>
  );
}
