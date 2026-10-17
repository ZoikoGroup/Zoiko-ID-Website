import Image from "next/image";

interface ControlItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  status: string;
  statusType: "designed" | "intended" | "pending" | "unavailable" | "reviewed";
}

const controls: ControlItem[] = [
  {
    title: "Policy-based access review",
    description: "Reviewer permissions follow policy and role.",
    image: "/audit-reports/control-access-review.webp",
    icon: "/audit-reports/control-icon-1.svg",
    status: "Designed",
    statusType: "designed",
  },
  {
    title: "Redaction",
    description: "Restricted fields are hidden from unauthorized viewers.",
    image: "/audit-reports/control-redaction.webp",
    icon: "/audit-reports/control-icon-2.svg",
    status: "Intended",
    statusType: "intended",
  },
  {
    title: "Audit logging",
    description: "Access to evidence is logged for accountability.",
    image: "/audit-reports/control-logging.webp",
    icon: "/audit-reports/control-icon-3.svg",
    status: "Intended",
    statusType: "intended",
  },
  {
    title: "Exception handling",
    description: "Exceptions are escalated to the named owner.",
    image: "/audit-reports/control-exception.webp",
    icon: "/audit-reports/control-icon-4.svg",
    status: "Owner sign-off pending",
    statusType: "pending",
  },
  {
    title: "Incident escalation",
    description: "Security incidents follow the Security route.",
    image: "/audit-reports/control-incident.webp",
    icon: "/audit-reports/control-icon-5.svg",
    status: "Unavailable here",
    statusType: "unavailable",
  },
  {
    title: "Accountability",
    description: "Named owners review each privacy claim.",
    image: "/audit-reports/control-accountability.webp",
    icon: "/audit-reports/control-icon-6.svg",
    status: "Independently reviewed where stated",
    statusType: "reviewed",
  },
];

const getStatusBadgeStyle = (type: ControlItem["statusType"]) => {
  switch (type) {
    case "designed":
      return "bg-[#DBEAFE] text-[#1E40AF]";
    case "intended":
      return "bg-[#EDE9FE] text-[#5B21B6]";
    case "pending":
      return "bg-[#FEF3C7] text-[#92400E]";
    case "reviewed":
      return "bg-[#D1FAE5] text-[#065F46]";
    case "unavailable":
      return "bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]";
  }
};

export default function AuditControlsSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-10 sm:gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            Controls, with their evidence status
          </h2>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((control) => (
            <div
              key={control.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-[150px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={control.image}
                    alt={control.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                  {/* Icon */}
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#E0F2FE]">
                    <Image
                      src={control.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="mb-1.5 font-manrope text-[17px] font-bold leading-snug text-[#0B1B33]">
                    {control.title}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {control.description}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="px-6 pb-6 pt-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] ${getStatusBadgeStyle(
                    control.statusType
                  )}`}
                >
                  {control.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Status Classes Legend Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="font-manrope text-[14px] text-[#64748B]">
            Status classes:
          </span>
          <span className="rounded-full bg-[#EDE9FE] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#5B21B6]">
            Intended
          </span>
          <span className="rounded-full bg-[#DBEAFE] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#1E40AF]">
            Designed
          </span>
          <span className="rounded-full bg-[#DCFCE7] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#166534]">
            Verified documented
          </span>
          <span className="rounded-full bg-[#D1FAE5] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#065F46]">
            Independently reviewed
          </span>
          <span className="rounded-full border border-[#CBD5E1] bg-[#F1F5F9] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#64748B]">
            Unavailable
          </span>
        </div>
      </div>
    </section>
  );
}
