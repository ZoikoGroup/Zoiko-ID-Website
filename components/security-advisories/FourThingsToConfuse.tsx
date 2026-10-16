import { ShieldCheck, Activity, Flag, FileCode } from "lucide-react";

const confusedItems = [
  {
    icon: ShieldCheck,
    title: "Security advisory",
    description:
      "A source-reviewed notice about a security issue, its scope and actions.",
    badgeText: "This page",
  },
  {
    icon: Activity,
    title: "Service status",
    description:
      "Current operational health of services. Not a security bulletin.",
    badgeText: "Availability and status page",
  },
  {
    icon: Flag,
    title: "Vulnerability report",
    description: "A report you submit about a suspected issue.",
    badgeText: "Responsible Disclosure route",
  },
  {
    icon: FileCode,
    title: "Release change",
    description: "What changed in a product or SDK version.",
    badgeText: "Changelog",
  },
];

export default function FourThingsToConfuse() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F5F9] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            Four things that are easy to confuse
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
            Each record type has its own owner, its own page and its own
            meaning. Use the link that matches your question.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {confusedItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  {/* Icon Container */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-[#475569]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag / Badge */}
                <div className="mt-8">
                  <span className="inline-block rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-[12px] font-semibold text-[#334155]">
                    {item.badgeText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
