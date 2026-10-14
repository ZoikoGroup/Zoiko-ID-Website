import {
  NonRepudiationLockIcon,
  EyeSlashCyanIcon,
  RevocationSlashCircleIcon,
  ShieldCheckCyanIcon,
  DarkSecurityShieldHeaderIcon,
} from "./icons";

const pillars = [
  {
    title: "Data Minimization",
    description:
      "Only required data collected. No PII in audit logs. Encrypted at rest and in transit.",
    icon: NonRepudiationLockIcon,
  },
  {
    title: "No Secrets in Logs",
    description:
      "Credentials, tokens, API keys never logged. Only references and outcomes recorded.",
    icon: EyeSlashCyanIcon,
  },
  {
    title: "Immediate Revocation",
    description:
      "No delay. No grace period. When authority is withdrawn, it's gone instantly.",
    icon: RevocationSlashCircleIcon,
  },
  {
    title: "Compliance-Ready",
    description:
      "Supports SOX, HIPAA, FedRAMP, NERC, and sector-specific audit requirements.",
    icon: ShieldCheckCyanIcon,
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Security Shield Icon */}
        <div className="mb-8 flex items-center gap-3 sm:hidden">
          <DarkSecurityShieldHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Security, privacy
            <br />
            &amp; assurance
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Security, privacy &amp; assurance
        </h2>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-7"
              >
                {/* Centered Icon */}
                <div className="mb-3.5 flex size-8 items-center justify-center sm:mb-4 sm:size-10">
                  <Icon className="size-6 text-[#22B8D6]" />
                </div>

                {/* Title */}
                <h3 className="font-manrope text-[14px] font-bold text-azure-9 sm:text-base">
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
