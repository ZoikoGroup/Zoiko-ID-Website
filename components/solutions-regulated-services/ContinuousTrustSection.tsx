import {
  MandateExpiryClockIcon,
  PolicyChangeDocOutlineIcon,
  RiskSignalAlertCircleIcon,
  RevocationSlashCircleIcon,
  DarkPulseHeaderIcon,
} from "./icons";

const trustTriggers = [
  {
    title: "Mandate Expiry",
    description:
      "Time boundary reached. Access automatically revoked. No renewal without new approval.",
    icon: MandateExpiryClockIcon,
  },
  {
    title: "Policy Change",
    description:
      "Organization policy updated. All actors re-evaluated. Access denied if no longer compliant.",
    icon: PolicyChangeDocOutlineIcon,
  },
  {
    title: "Risk Signal",
    description:
      "Unusual activity detected. Actor flagged for immediate review or access blocked.",
    icon: RiskSignalAlertCircleIcon,
  },
  {
    title: "Revocation",
    description:
      "Sponsor or org withdraws access immediately. Sessions terminated. No grace period.",
    icon: RevocationSlashCircleIcon,
  },
];

export default function ContinuousTrustSection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Pulse Icon */}
        <div className="mb-8 flex items-center gap-3 sm:hidden">
          <DarkPulseHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Continuous trust
            <br />
            evaluation
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Continuous trust evaluation
        </h2>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trustTriggers.map((item) => {
            const Icon = item.icon;
            const hasMobileIcon = item.title !== "Policy Change";
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-7"
              >
                {/* Centered Icon */}
                {hasMobileIcon ? (
                  <div className="mb-3.5 flex size-8 items-center justify-center sm:mb-4 sm:size-10">
                    <Icon className="size-6 text-[#22B8D6]" />
                  </div>
                ) : (
                  <div className="mb-4 hidden size-10 items-center justify-center sm:flex">
                    <Icon className="size-6 text-[#22B8D6]" />
                  </div>
                )}

                {/* Title */}
                <h3 className="font-manrope text-[14.5px] font-bold text-azure-9 sm:text-base">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
