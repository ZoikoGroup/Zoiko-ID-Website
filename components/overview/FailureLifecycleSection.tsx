import Image from "next/image";

const failureOutcomes = [
  {
    status: "ALLOWED",
    borderClass: "border-emerald-500/40 hover:border-emerald-500",
    iconBgClass: "bg-emerald-50",
    icon: "/overview/failure-allowed.svg",
    description: "Action approved. Request proceeds. Evidence logged.",
  },
  {
    status: "DENIED",
    borderClass: "border-red-500/40 hover:border-red-500",
    iconBgClass: "bg-red-50",
    icon: "/overview/failure-denied.svg",
    description: "Action blocked by policy. Return 403 Forbidden. Log reason.",
  },
  {
    status: "EXPIRED",
    borderClass: "border-amber-500/40 hover:border-amber-500",
    iconBgClass: "bg-amber-50",
    icon: "/overview/failure-expired.svg",
    description: "Credential or mandate expired. Revoke immediately. Prompt re-auth.",
  },
  {
    status: "REVOKED",
    borderClass: "border-amber-500/40 hover:border-amber-500",
    iconBgClass: "bg-amber-50",
    icon: "/overview/failure-revoked.svg",
    description: "Delegator or policy withdrew. Return error. Alert upstream system.",
  },
  {
    status: "SOURCE UNAVAILABLE",
    borderClass: "border-blue-500/40 hover:border-blue-500",
    iconBgClass: "bg-blue-50",
    icon: "/overview/failure-unavailable.svg",
    description: "Can't reach IdP or policy engine. Return 503. Implement fallback.",
  },
  {
    status: "RATE LIMITED",
    borderClass: "border-amber-500/40 hover:border-amber-500",
    iconBgClass: "bg-amber-50",
    icon: "/overview/failure-ratelimited.svg",
    description: "Too many requests. Return 429. Implement backoff and retry.",
  },
  {
    status: "TIMEOUT",
    borderClass: "border-blue-500/40 hover:border-blue-500",
    iconBgClass: "bg-blue-50",
    icon: "/overview/failure-timeout.svg",
    description: "Decision took too long. Return timeout error. Log context.",
  },
  {
    status: "UNKNOWN",
    borderClass: "border-blue-500/40 hover:border-blue-500",
    iconBgClass: "bg-blue-50",
    icon: "/overview/failure-unknown.svg",
    description: "Can't determine outcome. Fail safely. Require manual review.",
  },
];

export default function FailureLifecycleSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
            Failure modes and lifecycle
          </h2>
          <p className="max-w-[650px] font-manrope text-base font-normal leading-7 text-slate-500">
            Every decision outcome. Every failure state. Every safe next step.
          </p>
        </div>

        {/* 8 Status Cards Grid (4x2) */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {failureOutcomes.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-xl border-2 bg-white-solid p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${item.borderClass}`}
            >
              <div className={`mb-3.5 flex h-14 w-14 items-center justify-center rounded-xl p-2.5 ${item.iconBgClass}`}>
                <Image
                  src={item.icon}
                  alt={item.status}
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="font-manrope text-[15.2px] font-bold text-azure-9">
                {item.status}
              </h3>

              <p className="mt-2 font-manrope text-[13.6px] font-normal leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
