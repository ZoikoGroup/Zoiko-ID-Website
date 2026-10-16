import Image from "next/image";
import Link from "next/link";

interface DetailItem {
  icon: string;
  label: string;
  value: string;
}

interface ActionItem {
  label: string;
  icon?: string;
  href: string;
  disabled?: boolean;
}

interface ReportItem {
  title: string;
  date: string;
  badge: {
    label: string;
    type: "public" | "request" | "superseded";
  };
  details: DetailItem[];
  actions: ActionItem[];
}

const reports: ReportItem[] = [
  {
    title: "SOC 2 Type II Report",
    date: "January 1, 2024 – December 31, 2024",
    badge: {
      label: "PUBLICLY LISTED",
      type: "public",
    },
    details: [
      {
        icon: "/reports/meta-auditor.svg",
        label: "Auditor:",
        value: "Anderson & Associates LLP",
      },
      {
        icon: "/reports/meta-scope.svg",
        label: "Scope:",
        value: "Security, availability, integrity, confidentiality",
      },
      {
        icon: "/reports/meta-coverage.svg",
        label: "Coverage:",
        value: "All production systems, user access, data encryption",
      },
      {
        icon: "/reports/meta-access.svg",
        label: "Access:",
        value: "Publicly available under NDA",
      },
    ],
    actions: [
      {
        label: "Download PDF",
        icon: "/reports/action-download.svg",
        href: "#",
      },
      {
        label: "View summary",
        icon: "/reports/action-summary.svg",
        href: "#",
      },
    ],
  },
  {
    title: "ISO 27001 Certification Report",
    date: "Certified January 15, 2024",
    badge: {
      label: "PUBLICLY LISTED",
      type: "public",
    },
    details: [
      {
        icon: "/reports/meta-auditor.svg",
        label: "Certification Body:",
        value: "TUV Rheinland",
      },
      {
        icon: "/reports/meta-scope.svg",
        label: "Valid Until:",
        value: "January 14, 2027",
      },
      {
        icon: "/reports/meta-coverage.svg",
        label: "Scope:",
        value: "Information security management system (ISMS)",
      },
      {
        icon: "/reports/meta-access.svg",
        label: "Access:",
        value: "Public certificate available",
      },
    ],
    actions: [
      {
        label: "View certificate",
        icon: "/reports/action-download.svg",
        href: "#",
      },
      {
        label: "Certification details",
        icon: "/reports/action-details.svg",
        href: "#",
      },
    ],
  },
  {
    title: "GDPR Data Processing Assessment",
    date: "April 2024",
    badge: {
      label: "REQUEST ACCESS",
      type: "request",
    },
    details: [
      {
        icon: "/reports/meta-auditor.svg",
        label: "Assessment Type:",
        value: "Data processing alignment review",
      },
      {
        icon: "/reports/meta-scope.svg",
        label: "Availability:",
        value: "Restricted — customers only",
      },
      {
        icon: "/reports/meta-coverage.svg",
        label: "Scope:",
        value: "Data minimization, retention, deletions",
      },
      {
        icon: "/reports/meta-access.svg",
        label: "Freshness:",
        value: "Updated quarterly",
      },
    ],
    actions: [
      {
        label: "Request access",
        icon: "/reports/action-download.svg",
        href: "#request-access",
      },
      {
        label: "Learn more",
        href: "#",
      },
    ],
  },
  {
    title: "Annual Penetration Test Report",
    date: "Q4 2024",
    badge: {
      label: "SUPERSEDED",
      type: "superseded",
    },
    details: [
      {
        icon: "/reports/meta-auditor.svg",
        label: "Assessment Type:",
        value: "Red team penetration testing",
      },
      {
        icon: "/reports/meta-scope.svg",
        label: "Status:",
        value: "Newer report available",
      },
      {
        icon: "/reports/meta-coverage.svg",
        label: "Replaced by:",
        value: "Q1 2025 assessment (Jan–Mar 2025)",
      },
      {
        icon: "/reports/meta-access.svg",
        label: "Access:",
        value: "Archived — contact security team",
      },
    ],
    actions: [
      {
        label: "View archived",
        icon: "/reports/action-download.svg",
        href: "#",
        disabled: true,
      },
      {
        label: "View latest report",
        icon: "/reports/action-download.svg",
        href: "#",
      },
    ],
  },
];

export default function ReportsRegistrySection() {
  return (
    <section
      id="available-reports"
      className="scroll-mt-24 bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Available audit reports
        </h2>

        {/* Reports Stack */}
        <div className="flex w-full flex-col gap-5">
          {reports.map((report) => (
            <div
              key={report.title}
              className="flex flex-col gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 sm:p-7 shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              {/* Header Row: Title & Date on Left, Status Badge on Right */}
              <div className="flex flex-wrap items-start justify-between gap-4 sm:items-center">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-manrope text-[16.8px] font-bold text-[#071426]">
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <Image
                      src="/reports/registry-calendar.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <span className="font-manrope text-[12.8px] font-normal text-[#64748B]">
                      {report.date}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  {report.badge.type === "public" && (
                    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[rgba(22,163,74,0.1)] px-3 py-1.5 font-manrope text-xs font-semibold tracking-wider text-[#16A34A]">
                      <Image
                        src="/reports/status-public.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                      {report.badge.label}
                    </span>
                  )}
                  {report.badge.type === "request" && (
                    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[rgba(245,158,11,0.1)] px-3 py-1.5 font-manrope text-xs font-semibold tracking-wider text-[#F59E0B]">
                      <Image
                        src="/reports/status-request.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                      {report.badge.label}
                    </span>
                  )}
                  {report.badge.type === "superseded" && (
                    <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[rgba(156,163,175,0.1)] px-3 py-1.5 font-manrope text-xs font-semibold tracking-wider text-[#9CA3AF]">
                      <Image
                        src="/reports/status-superseded.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                      {report.badge.label}
                    </span>
                  )}
                </div>
              </div>

              {/* 2x2 Details Grid */}
              <div className="grid grid-cols-1 gap-x-5 gap-y-3.5 pt-2 sm:grid-cols-2">
                {report.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-0.5 shrink-0">
                      <Image
                        src={detail.icon}
                        alt=""
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="font-manrope text-[14.4px] leading-snug">
                      <span className="font-bold text-[#071426]">
                        {detail.label}{" "}
                      </span>
                      <span className="font-normal text-[#475569]">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions Row */}
              <div className="flex flex-wrap items-center gap-3 border-t border-[#E2E8F0] pt-4">
                {report.actions.map((action, idx) => (
                  <Link
                    key={idx}
                    href={action.href}
                    className={`inline-flex items-center gap-2 rounded-[6px] bg-[#F8FAFC] px-4 py-2.5 font-manrope text-[14.4px] font-semibold text-[#2563EB] transition-colors duration-150 hover:bg-slate-100 ${
                      action.disabled ? "opacity-60" : ""
                    }`}
                  >
                    {action.icon && (
                      <Image
                        src={action.icon}
                        alt=""
                        width={16}
                        height={16}
                      />
                    )}
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
