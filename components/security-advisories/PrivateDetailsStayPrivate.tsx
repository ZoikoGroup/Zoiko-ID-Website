import Link from "next/link";
import { Lock, Key, Eye } from "lucide-react";

const content = {
  leftCard: {
    title: "Organization-specific details need sign in",
    description:
      "Account-specific information is available only to entitled, signed-in organization members through an approved secure route. It is never shown on this public page.",
    buttonText: "Sign in for entitled details",
    buttonHref: "#",
  },
  rightContent: {
    title: "Private details stay private",
    description:
      "Customer-specific evidence is never published. Public advisories describe the issue; the entitled annex, where implemented, describes its effect on your organization.",
    features: [
      {
        icon: Key,
        text: "Server-side entitlement checks.",
      },
      {
        icon: Eye,
        text: "No existence leakage to unauthorized visitors.",
      },
    ],
  },
};

export default function PrivateDetailsStayPrivate() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F5F9] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Dashed Sign-in Card */}
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#CBD5E1] bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0284C7]">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-[#0F172A] sm:text-[24px]">
              {content.leftCard.title}
            </h3>

            <p className="mt-3 text-[14px] leading-[1.6] text-[#64748B] sm:text-[15px]">
              {content.leftCard.description}
            </p>

            <Link
              href={content.leftCard.buttonHref}
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#2563EB] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2563EB] shadow-sm transition-colors hover:bg-[#F8FAFC]"
            >
              {content.leftCard.buttonText}
            </Link>
          </div>

          {/* Right Column - Text & Feature Pills */}
          <div className="flex flex-col">
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
              {content.rightContent.title}
            </h2>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#475569] sm:text-[16px]">
              {content.rightContent.description}
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-col space-y-3">
              {content.rightContent.features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-4 text-[14px] font-medium text-[#334155] shadow-sm"
                  >
                    <IconComponent
                      className="h-5 w-5 shrink-0 text-[#0284C7]"
                      aria-hidden="true"
                    />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
