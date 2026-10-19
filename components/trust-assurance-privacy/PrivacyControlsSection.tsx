import Image from "next/image";

interface ControlCard {
  title: string;
  description: string;
  image: string;
  icon: string;
  status: string;
  badgeType: "designed" | "intended" | "pending" | "unavailable" | "reviewed";
}

const controls: ControlCard[] = [
  {
    title: "Policy-based access review",
    description: "Reviewer permissions follow policy and role.",
    image: "/trust-assurance-privacy/control-access-review.webp",
    icon: "/trust-assurance-privacy/control-icon-1.svg",
    status: "Designed",
    badgeType: "designed",
  },
  {
    title: "Redaction",
    description: "Restricted fields are hidden from unauthorized viewers.",
    image: "/trust-assurance-privacy/control-logging.webp",
    icon: "/trust-assurance-privacy/control-icon-2.svg",
    status: "Intended",
    badgeType: "intended",
  },
  {
    title: "Audit logging",
    description: "Access to evidence is logged for accountability.",
    image: "/trust-assurance-privacy/control-redaction.webp",
    icon: "/trust-assurance-privacy/control-icon-3.svg",
    status: "Intended",
    badgeType: "intended",
  },
  {
    title: "Exception handling",
    description: "Exceptions are escalated to the named owner.",
    image: "/trust-assurance-privacy/control-accountability.webp",
    icon: "/trust-assurance-privacy/control-icon-4.svg",
    status: "Owner sign-off pending",
    badgeType: "pending",
  },
  {
    title: "Incident escalation",
    description: "Security incidents follow the Security route.",
    image: "/trust-assurance-privacy/control-incident.webp",
    icon: "/trust-assurance-privacy/control-icon-5.svg",
    status: "Unavailable here",
    badgeType: "unavailable",
  },
  {
    title: "Accountability",
    description: "Named owners review each privacy claim.",
    image: "/trust-assurance-privacy/control-exception.webp",
    icon: "/trust-assurance-privacy/control-icon-6.svg",
    status: "Independently reviewed where stated",
    badgeType: "reviewed",
  },
];

function getBadgeClasses(type: ControlCard["badgeType"]) {
  switch (type) {
    case "designed":
      return "bg-[#DBEAFE] text-[#1E40AF]";
    case "intended":
      return "bg-[#EDE9FE] text-[#5B21B6]";
    case "pending":
      return "bg-[#FEF3C7] text-[#92400E]";
    case "unavailable":
      return "bg-[#F1F5F9] text-[#334155]";
    case "reviewed":
      return "bg-[#CCFBF1] text-[#115E59]";
  }
}

export default function PrivacyControlsSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Controls, with their evidence status
          </h2>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((control) => (
            <div
              key={control.title}
              className="group flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-[150px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={control.image}
                    alt={control.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Icon */}
                  <div className="mb-4 flex size-10 items-center justify-center rounded-[12px] bg-[#E0F2FE]">
                    <Image
                      src={control.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 shrink-0"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-manrope text-[17px] font-bold text-[#071426]">
                    {control.title}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                    {control.description}
                  </p>
                </div>
              </div>

              {/* Status Badge Footer */}
              <div className="border-t border-[#F1F5F9] px-5 py-3.5 sm:px-6">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider ${getBadgeClasses(
                    control.badgeType
                  )}`}
                >
                  {control.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
