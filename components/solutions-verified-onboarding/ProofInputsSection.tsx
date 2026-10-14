import {
  IdCardIcon,
  BiometricFaceIcon,
  CompanyRegistryIcon,
  EmailEnvelopeIcon,
  PhoneHandsetIcon,
  BankLandmarkIcon,
  WarningTriangleIcon,
  MagnifyingGlassHeaderIcon,
} from "./icons";

interface ProofInputItem {
  title: string;
  description: string;
  badge: string;
  badgeVariant: "cyan" | "green" | "amber";
  icon: React.ComponentType<{ className?: string }>;
}

const proofInputs: ProofInputItem[] = [
  {
    title: "Government ID Verification",
    description:
      "Government-issued ID matched against national registry. Scope varies by country.",
    badge: "VALIDATED (SELECT REGIONS)",
    badgeVariant: "cyan",
    icon: IdCardIcon,
  },
  {
    title: "Biometric Verification",
    description: "Facial recognition or liveness check... Not yet available.",
    badge: "PLANNED",
    badgeVariant: "amber",
    icon: BiometricFaceIcon,
  },
  {
    title: "Business Registry Lookup",
    description:
      "Company verified against official business registry. Covers major jurisdictions.",
    badge: "AVAILABLE",
    badgeVariant: "green",
    icon: CompanyRegistryIcon,
  },
  {
    title: "Email Domain Verification",
    description:
      "Confirms corporate email or domain ownership... Instant verification.",
    badge: "AVAILABLE",
    badgeVariant: "green",
    icon: EmailEnvelopeIcon,
  },
  {
    title: "Phone Number Verification",
    description: "SMS or voice code verification... Supports most regions.",
    badge: "AVAILABLE",
    badgeVariant: "green",
    icon: PhoneHandsetIcon,
  },
  {
    title: "Financial Account Verification",
    description:
      "Bank account or payment details verified. Subject to banking partner availability.",
    badge: "PLANNED",
    badgeVariant: "amber",
    icon: BankLandmarkIcon,
  },
];

const badgeStyles: Record<ProofInputItem["badgeVariant"], string> = {
  cyan: "bg-sky-100/70 text-[#0284c7]",
  green: "bg-emerald-100/70 text-[#059669]",
  amber: "bg-amber-100/70 text-[#d97706]",
};

export default function ProofInputsSection() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1000px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-14 lg:text-[44px]">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <MagnifyingGlassHeaderIcon className="size-[22px] shrink-0 text-azure-9" />
              <span>Proof inputs &amp;</span>
            </span>
            <br />
            <span>evidence types</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Proof inputs &amp; evidence types</span>
        </h2>

        {/* 6 Proof Inputs Rows/Cards */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {proofInputs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[18px] border border-slate-200/80 bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] lg:rounded-2xl lg:p-5 lg:px-6"
              >
                {/* Mobile Card Layout */}
                <div className="flex flex-col lg:hidden">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                      <Icon className="size-5 text-cyan-49" />
                    </div>
                    <h3 className="font-manrope text-[14.5px] font-bold text-azure-9">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 font-manrope text-xs leading-relaxed text-azure-47">
                    {item.description}
                  </p>

                  <div className="mt-2.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 font-manrope text-[10px] font-bold tracking-wider uppercase ${
                        badgeStyles[item.badgeVariant]
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Desktop Row Layout */}
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-sky-50">
                      <Icon className="size-6 text-cyan-49" />
                    </div>

                    <div>
                      <h3 className="font-manrope text-[15px] font-bold text-azure-9 sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-manrope text-xs leading-relaxed text-azure-47 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex shrink-0 self-center rounded-full px-3 py-1 font-manrope text-[11px] font-bold tracking-wider uppercase ${
                      badgeStyles[item.badgeVariant]
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Regional Warning Callout */}
        <div className="mt-6 flex items-start gap-2.5 rounded-[16px] border border-red-300 bg-white p-4 shadow-xs sm:rounded-xl sm:border-red-200/90 sm:bg-[#FFF5F5]/60 sm:p-5 lg:gap-3">
          <WarningTriangleIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
          <p className="font-manrope text-xs leading-relaxed text-azure-47 sm:text-[13px]">
            <strong className="font-bold text-red-600 sm:text-red-700">
              Regional &amp; method variability:
            </strong>{" "}
            Not all methods are available in all regions. Coverage depends on
            local regulations, registry availability, and platform integrations.
            Check capability status before designing flows.
          </p>
        </div>
      </div>
    </section>
  );
}
