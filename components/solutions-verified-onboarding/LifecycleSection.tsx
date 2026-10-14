import {
  InitialGrantIcon,
  MonitoringCalIcon,
  ReverificationArrowIcon,
  RevokedSlashIcon,
  PulseHeartbeatHeaderIcon,
} from "./icons";

interface LifecycleStage {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const lifecycleStages: LifecycleStage[] = [
  {
    title: "Initial Grant",
    description:
      "Verification approved, access granted with scope, role, and expiry set.",
    icon: InitialGrantIcon,
  },
  {
    title: "Monitoring",
    description:
      "Ongoing checks: membership, organization status, verification freshness, anomalies.",
    icon: MonitoringCalIcon,
  },
  {
    title: "Re-verification",
    description:
      "Periodic or event-driven re-verification. Update evidence. Extend or deny access.",
    icon: ReverificationArrowIcon,
  },
  {
    title: "Revocation",
    description:
      "Organization or your team can revoke immediately. Sessions terminated. Logged.",
    icon: RevokedSlashIcon,
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-14 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <PulseHeartbeatHeaderIcon className="size-[22px] shrink-0 text-azure-9" />
              <span>Lifecycle &amp;</span>
            </span>
            <br />
            <span>continuous trust</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Lifecycle &amp; continuous trust</span>
        </h2>

        {/* 4 Cards Grid */}
        <div className="mx-auto grid max-w-[380px] grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {lifecycleStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="flex flex-col items-center rounded-[18px] border border-slate-200/80 bg-white p-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:p-7 lg:rounded-2xl"
              >
                {/* Stage Icon */}
                <div className="flex size-10 items-center justify-center">
                  <Icon className="size-6" />
                </div>

                {/* Stage Title */}
                <h3 className="mt-3.5 font-manrope text-[14.5px] font-bold text-azure-9 sm:text-[15px] lg:mt-4">
                  {stage.title}
                </h3>

                {/* Stage Description */}
                <p className="mt-2 font-manrope text-xs leading-relaxed text-azure-47 sm:text-[12.5px]">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
