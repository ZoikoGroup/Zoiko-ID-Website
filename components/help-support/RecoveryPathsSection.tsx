import { SearchX, CloudOff, ShieldBan, Eye, Lock } from "lucide-react";

interface RecoveryPathCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const recoveryCards: RecoveryPathCard[] = [
  {
    title: "No search results",
    description:
      "Try a broader term, or browse the topics above. Results never come from a guess.",
    icon: SearchX,
  },
  {
    title: "Search unavailable",
    description:
      "The topic list still works. Search returns when the article registry is reachable.",
    icon: CloudOff,
  },
  {
    title: "Access not permitted",
    description:
      "You see a neutral message and the authorized support route, not account details.",
    icon: ShieldBan,
  },
];

const mobileRecoveryCards: RecoveryPathCard[] = [
  {
    title: "No search results",
    description:
      "Try a broader term or browse the topics above. Results never come from a guess.",
    icon: Eye,
  },
  {
    title: "Search unavailable",
    description:
      "The topics list still works. Search returns when the article registry is reachable.",
    icon: CloudOff,
  },
  {
    title: "Access not permitted",
    description:
      "You see a neutral message and the authorized support route, not account details.",
    icon: Lock,
  },
];

interface RecoveryPathsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function RecoveryPathsSection({
  view = "all",
}: RecoveryPathsSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              TROUBLESHOOTING STATES
            </span>
          </div>

          {/* Title & Subtitle */}
          <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-[#071324]">
            Recovery paths for common situations
          </h2>
          <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
            Each state tells you what happened and what to do next. None invents a result.
          </p>

          {/* 3 Situational Cards - Vertical Stack */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileRecoveryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3 font-manrope text-[15px] font-bold text-[#071324]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block bg-[#f8fafc] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1020px] px-6 sm:px-8">
          {/* Section Header */}
          <div className="max-w-[800px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              Recovery paths for common situations
            </h2>
            <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              Each state tells you what happened and what to do next. None invents a result.
            </p>
          </div>

          {/* 3 Situational Cards Row */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recoveryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
                >
                  <div>
                    {/* Cyan Icon Container */}
                    <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="size-5" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
