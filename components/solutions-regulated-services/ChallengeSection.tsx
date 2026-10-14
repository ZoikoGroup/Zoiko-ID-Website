import {
  AuditGapsIcon,
  AuthorityAmbiguityIcon,
  PolicyLagIcon,
  ExclamationBadgeIcon,
} from "./icons";

const challenges = [
  {
    title: "Audit Gaps",
    description:
      "Who did what, when, and under what authority? Traditional systems log events but hide the decision context. Regulators need evidence.",
    icon: AuditGapsIcon,
  },
  {
    title: "Authority Ambiguity",
    description:
      "Role-based access (RBAC) grants permission. But who authorized the role? Can it be revoked instantly? Is there a time limit?",
    icon: AuthorityAmbiguityIcon,
  },
  {
    title: "Policy Lag",
    description:
      "Policies change (new regs, employee leaves). How do you revoke authority across all systems instantly, without breaking workflows?",
    icon: PolicyLagIcon,
  },
];

export default function ChallengeSection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <div className="mb-3.5 lg:hidden">
            <ExclamationBadgeIcon className="size-8" />
          </div>
          <h2 className="font-dm-serif text-[28px] font-normal leading-tight tracking-tight text-azure-9 sm:text-4xl lg:text-[44px]">
            <span className="lg:hidden">
              The regulated
              <br />
              sector challenge
            </span>
            <span className="hidden lg:inline">
              The regulated sector challenge
            </span>
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-8"
              >
                {/* Icon (Red on mobile, Cyan on desktop) */}
                <div className="mb-4 flex size-10 items-center justify-start sm:mb-5 sm:justify-center">
                  <Icon className="size-6 text-red-600 lg:text-[#22B8D6]" />
                </div>

                {/* Title */}
                <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 font-manrope text-[13px] leading-relaxed text-azure-47 sm:text-[13.5px]">
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
