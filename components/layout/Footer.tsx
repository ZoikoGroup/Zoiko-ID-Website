import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const footerColumns = [
  {
    title: "PLATFORM",
    links: [
      "Workforce Intelligence",
      "Time & Activity Verification",
      "Session & Identity Assurance",
      "Evidence Capture",
      "Screenshots & Redaction Controls",
      "Policy & Location Context",
      "Integrity & Anomaly Detection",
      "Reporting & Workforce Analytics",
      "Audit & HR Enablement",
    ],
    lastItem: "ZoikoTime Mobile App",
    badge: "NEW",
  },
  {
    title: "SOLUTIONS",
    links: [
      "Distributed Workforces",
      "Client-Billable Teams",
      "Contractor & Gig Teams",
      "Regulated Industries",
      "Professional Services Firms",
      "Finance & Compliance Teams",
      "HR, Legal & Operations Teams",
      "Payroll & Timesheet Integrity",
      "Enterprise Workforce Governance",
    ],
    lastItem: "Workforce Assurance Programs",
  },
  {
    title: "TRUST & GOVERNANCE",
    links: [
      "Security Overview",
      "Privacy Controls",
      "Transparency Center",
      "Worker Transparency Notice",
      "AI & Automated Insights Policy",
      "Data Retention & Legal Hold",
      "Service Level Agreement",
      "Audit-Grade Evidence",
      "Incident & Availability Status",
      "Responsible AI",
    ],
  },
  {
    title: "RESOURCES",
    links: [
      "Case Studies",
      "Implementation Guide",
      "Product Documentation",
      "Admin Guide",
      "Worker Guide",
      "Help Center",
      "FAQs",
      "Blog & Insights",
    ],
    lastItem: "Request a Demo",
    demoBadge: "DEMO",
    extra: "Contact Sales",
  },
  {
    title: "COMPANY",
    links: [
      "About ZoikoTime",
      "About Zoiko Tech Inc.",
      "Leadership & Governance",
      "Enterprise Readiness",
      "Partners",
      "Careers",
      "Press & Media",
      "Contact",
    ],
  },
  {
    title: "LEGAL",
    links: [
      "Terms of Service",
      "Subscription Terms",
      "Data Processing Addendum",
      "Privacy Notice",
      "Cookie Notice",
      "Acceptable Use Policy",
      "Subprocessor List",
      "Security Addendum",
      "Service Level Agreement",
      "Data Retention, Deletion & Legal Hold Policy",
    ],
  },
];

const badges = [
  "SOC 2 TYPE II",
  "ISO 27001",
  "GDPR",
  "CCPA/CPRA",
  "ENTERPRISE SLA",
];

function ExternalArrow() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-slate-800 text-[9px] text-slate-300">
      ↗
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className={`${inter.className} w-full bg-[#020617] text-white`}
    >
      {/* =========================================================
          TOP FOOTER
      ========================================================= */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-14 sm:px-10 lg:px-20 lg:pt-16">
        {/* Dummy Logo */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/172x50"
            alt="ZoikoTime"
            className="h-[50px] w-[172px] object-contain"
          />
        </div>

        {/* Divider */}
        <div className="mt-7 border-t border-slate-800" />

        {/* Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-4">
          {badges.map((badge, index) => (
            <div
              key={badge}
              className={`flex h-[27px] items-center rounded-md border px-3 text-[11px] font-semibold tracking-wide ${
                index === 0
                  ? "border-cyan-900 bg-slate-900 text-cyan-400"
                  : "border-slate-700 bg-slate-900 text-slate-300"
              }`}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />
      </section>

      {/* =========================================================
          FOOTER NAVIGATION
      ========================================================= */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-14 sm:px-10 lg:px-20 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              {/* Column Heading */}
              <h3 className="min-h-[30px] border-b border-slate-800 pb-3 text-[16px] font-extrabold leading-[20px] tracking-tight text-white">
                {column.title}
              </h3>

              {/* Links */}
              <div className="pt-3">
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="group flex items-start gap-2 py-[6px] text-[13px] leading-[18px] text-slate-500 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link}</span>

                    {link === "Incident & Availability Status" && (
                      <ExternalArrow />
                    )}
                  </Link>
                ))}

                {/* Last item with badge */}
                {column.lastItem && (
                  <Link
                    href="#"
                    className="flex items-start gap-2 py-[6px] text-[13px] leading-[18px] text-slate-500 transition-colors duration-200 hover:text-white"
                  >
                    <span>{column.lastItem}</span>

                    {column.badge && (
                      <span className="mt-[1px] rounded bg-cyan-700 px-1.5 py-[2px] text-[8px] font-bold tracking-wide text-cyan-100">
                        {column.badge}
                      </span>
                    )}

                    {column.demoBadge && (
                      <span className="mt-[1px] rounded bg-blue-900 px-1.5 py-[2px] text-[8px] font-bold tracking-wide text-blue-300">
                        {column.demoBadge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Extra item */}
                {column.extra && (
                  <Link
                    href="#"
                    className="flex items-start gap-2 py-[6px] text-[13px] leading-[18px] text-slate-500 transition-colors duration-200 hover:text-white"
                  >
                    {column.extra}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          BOTTOM FOOTER
      ========================================================= */}
      <section className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-20">
          <p className="text-[12px] leading-5 text-slate-600">
            © 2026 Zoiko Tech Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-[12px] text-slate-600">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}