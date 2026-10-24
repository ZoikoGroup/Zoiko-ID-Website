import React from "react";
import { CheckCircle2, Clock, SlidersHorizontal, Shield } from "lucide-react";

interface CookieNoticeChoiceChangeSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const choiceRules = [
  {
    icon: CheckCircle2,
    title: "Accept or reject with equal ease",
    description: "Both options appear with the same prominence.",
  },
  {
    icon: Clock,
    title: "Prospective effect",
    description: "A change applies from the moment it is made.",
  },
  {
    icon: SlidersHorizontal,
    title: "Settings confirmation",
    description: "The preference flow confirms the new state.",
  },
  {
    icon: Shield,
    title: "No coercion",
    description: "No pressure notice or hidden default.",
  },
];

export default function CookieNoticeChoiceChangeSection({
  view = "all",
}: CookieNoticeChoiceChangeSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                How a choice can change
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                These descriptions are written only once the preference flow has
                been tested. Until then they show as pending.
              </p>
            </div>

            {/* 2x2 Grid of Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {choiceRules.map((rule) => {
                const Icon = rule.icon;
                return (
                  <div
                    key={rule.title}
                    className="flex items-center gap-4 rounded-[16px] border border-[#e2e8f0] bg-white px-5 py-4 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300"
                  >
                    <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                      <Icon className="size-[20px] stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                        {rule.title}
                      </h3>
                      <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              10 · CHANGING OR WITHDRAWING A CHOICE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            How a choice can
            <br />
            change
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            These descriptions are written only once the preference flow has
            been tested. Until then they show as pending.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-7 flex flex-col gap-3.5">
            {choiceRules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div
                  key={rule.title}
                  className="flex items-start gap-4 rounded-[16px] border border-[#e2e8f0] bg-white p-4.5 shadow-[0px_2px_4px_rgba(11,27,51,0.02)]"
                >
                  <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Icon className="size-[20px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                      {rule.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[12px] leading-snug text-[#64748b]">
                      {rule.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
