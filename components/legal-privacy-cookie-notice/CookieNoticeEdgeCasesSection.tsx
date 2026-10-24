import React from "react";
import {
  AlertTriangle,
  Clock,
  Smartphone,
  SlidersHorizontal,
  Box,
  Globe,
} from "lucide-react";

interface CookieNoticeEdgeCasesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const edgeCases = [
  {
    icon: AlertTriangle,
    title: "Registry unavailable",
    description: "Never shown as 'no cookies used'.",
  },
  {
    icon: Clock,
    title: "Loading",
    description: "Announced accessibly, with no stale list.",
  },
  {
    icon: Smartphone,
    title: "No optional cookies",
    description: "Explained only with published evidence.",
  },
  {
    icon: SlidersHorizontal,
    title: "Settings unavailable",
    description: "Release is blocked; no decorative button.",
  },
  {
    icon: Box,
    title: "Superseded notice",
    description: "Marked historic, with a link to the current notice.",
  },
  {
    icon: Globe,
    title: "Unsupported locale",
    description: "Neutral-approved language; no invented local-law text.",
  },
];

export default function CookieNoticeEdgeCasesSection({
  view = "all",
}: CookieNoticeEdgeCasesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-[#f8fafc] border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                What the page shows in each case
              </h2>
            </div>

            {/* 3x2 Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {edgeCases.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[16px] border border-[#e2e8f0] bg-white p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                      <Icon className="size-[19px] stroke-[1.8]" />
                    </div>

                    <h3 className="mt-4 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>

                    <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-[#f8fafc]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              15 · STATUS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            What the page shows in<br />each case
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {edgeCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#edf2f7] bg-white p-6 shadow-sm"
                >
                  <div className="flex size-[44px] items-center justify-center rounded-[12px] bg-[#e6f4f8] text-[#0891b2]">
                    <Icon className="size-[20px] stroke-[1.8]" />
                  </div>

                  <h3 className="mt-4 font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
