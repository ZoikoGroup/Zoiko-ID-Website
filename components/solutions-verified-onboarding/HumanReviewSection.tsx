import Image from "next/image";
import {
  EyeReviewIcon,
  ResubmitArrowIcon,
  DenialCircleIcon,
  AppealIcon,
  PhoneHandsetIcon,
  DecisionAuditIcon,
} from "./icons";

interface ReviewItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const reviewWorkflows: ReviewItem[] = [
  {
    title: "Manual Review Workflows",
    description:
      "Team can review inconclusive verifications. See evidence, ask questions, request additional info or docs.",
    icon: EyeReviewIcon,
  },
  {
    title: "Resubmission & Remediation",
    description:
      "If verification fails, applicant can address issues and resubmit. Clear explanation of what was needed.",
    icon: ResubmitArrowIcon,
  },
  {
    title: "Denial Explanations",
    description:
      "If rejected, applicant receives reason (without revealing fraud detection rules). Path to appeal or escalate.",
    icon: DenialCircleIcon,
  },
  {
    title: "Appeal & Escalation",
    description:
      "Applicant can request human review of decision. Your team can appeal to verification partner if evidence incorrect.",
    icon: AppealIcon,
  },
  {
    title: "Accessible Alternatives",
    description:
      "If automated method fails, accessible alternative (phone call, video, in-person) available. No one locked out permanently.",
    icon: PhoneHandsetIcon,
  },
  {
    title: "Decision Audit Trail",
    description:
      "Every decision logged: who decided, when, based on what evidence, and why. Immutable record for compliance.",
    icon: DecisionAuditIcon,
  },
];

export default function HumanReviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f5f9] px-6 py-14 sm:px-10 sm:py-16 lg:bg-transparent lg:px-16 lg:py-28 xl:px-20">
      {/* Desktop Background Image & Overlay */}
      <div className="hidden lg:block">
        <Image
          src="/solutions-verified-onboarding/svo5.png"
          alt="Team discussing in meeting room"
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
            Human review &amp;
            <br />
            remediation
          </span>

          {/* Desktop Heading */}
          <span className="hidden lg:inline">Human review &amp; remediation</span>
        </h2>

        {/* 6 Workflow Cards Stack */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {reviewWorkflows.map((item) => {
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
