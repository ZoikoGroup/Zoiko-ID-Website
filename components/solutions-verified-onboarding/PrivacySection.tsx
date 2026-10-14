import Image from "next/image";
import {
  MinimalLockIcon,
  EyeOffWebIcon,
  PrivilegeCheckIcon,
  BiasInfoIcon,
  DataRightsIcon,
  AutoPurgeIcon,
  PrivacyShieldLockHeaderIcon,
} from "./icons";

interface PrivacyItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const privacyItems: PrivacyItem[] = [
  {
    title: "Minimal Data Collection",
    description:
      "Only essential fields gathered. No unnecessary personal data. Verification data segregated from CRM data.",
    icon: MinimalLockIcon,
  },
  {
    title: "No Identity Documents on Web",
    description:
      "Government IDs, passports, selfies never transmitted or displayed. Verified in secure backend. Never stored on public page.",
    icon: EyeOffWebIcon,
  },
  {
    title: "Least Privilege Access",
    description:
      "Verification result shared only with decision-makers. Analytics exclude PII and verification details.",
    icon: PrivilegeCheckIcon,
  },
  {
    title: "Bias & Fairness Review",
    description:
      "Verification outcomes monitored for demographic bias. Manual review process transparent and auditable.",
    icon: BiasInfoIcon,
  },
  {
    title: "Data Subject Rights",
    description:
      "Applicants can request data access, correction, or deletion. Right to appeal decisions. Compliant with regulations.",
    icon: DataRightsIcon,
  },
  {
    title: "Automatic Purge",
    description:
      "Verification data deleted after retention period unless approval granted. Clear data retention policy.",
    icon: AutoPurgeIcon,
  },
];

export default function PrivacySection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f5f9] px-6 py-14 sm:px-10 sm:py-16 lg:bg-transparent lg:px-16 lg:py-28 xl:px-20">
      {/* Desktop Background Image & Overlay */}
      <div className="hidden lg:block">
        <Image
          src="/solutions-verified-onboarding/svo7.png"
          alt="Enterprise governance and compliance review session"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#071426]/85" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[960px]">
        {/* Section Heading */}
        <h2 className="mb-8 text-center font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-azure-9 sm:text-4xl lg:mb-12 lg:text-[44px] lg:text-white">
          {/* Mobile Heading */}
          <span className="lg:hidden">
            <span className="inline-flex items-center justify-center gap-2.5">
              <PrivacyShieldLockHeaderIcon className="size-[22px] shrink-0 text-azure-9" />
              <span>Privacy, security</span>
            </span>
            <br />
            <span>&amp; fairness</span>
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Privacy, security &amp; fairness</span>
        </h2>

        {/* 6 Privacy & Security Cards Stack */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {privacyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-[18px] border border-slate-200/80 bg-white p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-md sm:p-5 lg:rounded-2xl lg:border-0 lg:shadow-lg lg:hover:shadow-xl"
              >
                {/* Cyan Accent Icon Box */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 lg:size-12">
                  <Icon className="size-5 text-cyan-49 lg:size-6" />
                </div>

                {/* Title & Copy */}
                <div>
                  <h3 className="font-manrope text-[14.5px] font-bold text-azure-9 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-manrope text-xs leading-relaxed text-azure-47 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
