import { Keyboard, Eye, ZoomIn, ShieldCheck, Key } from "lucide-react";

interface AccessibilityCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const accessibilityFeatures: AccessibilityCard[] = [
  {
    title: "Keyboard",
    description:
      "Every control is reachable and has a visible focus state. A skip link is the first step.",
    icon: Keyboard,
  },
  {
    title: "Screen readers",
    description:
      "Errors are tied to their labels, and results are announced without taking focus away.",
    icon: Eye,
  },
  {
    title: "Zoom and reflow",
    description:
      "Usable at 200% zoom and at 320 CSS px, with no horizontal scrolling for text.",
    icon: ZoomIn,
  },
  {
    title: "Privacy requests",
    description:
      "Route to the privacy specialist. Accessible alternatives are provided where approved.",
    icon: ShieldCheck,
  },
];

const mobileAccessibilityFeatures: AccessibilityCard[] = [
  {
    title: "Keyboard",
    description:
      "Every control is reachable and has a visible focus state. A skip link is the first stop.",
    icon: Key,
  },
  {
    title: "Screen readers",
    description:
      "Errors are tied to their labels, and results are announced without taking focus away.",
    icon: Eye,
  },
  {
    title: "Zoom and reflow",
    description:
      "Usable at 200% zoom and at 320 CSS px, with no horizontal scrolling for text.",
    icon: ZoomIn,
  },
  {
    title: "Privacy requests",
    description:
      "Routes to the privacy specialist. Accessible alternatives are provided where approved.",
    icon: ShieldCheck,
  },
];

interface HelpAccessibilitySectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HelpAccessibilitySection({
  view = "all",
}: HelpAccessibilitySectionProps = {}) {
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
              ACCESSIBILITY AND PRIVACY SUPPORT
            </span>
          </div>

          {/* Title & Subtitle */}
          <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.18] tracking-tight text-[#071324]">
            Help is designed to be usable by everyone
          </h2>
          <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
            This page is built to WCAG 2.2 AA. Privacy questions go to the privacy route, not to general support.
          </p>

          {/* 4 Cards - Vertical Stack */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileAccessibilityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="mt-3 font-manrope text-[15px] font-bold text-[#071324]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                    {feature.description}
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
              Help is designed to be usable by everyone
            </h2>
            <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              This page is built to WCAG 2.2 AA. Privacy questions go to the privacy route, not to general support.
            </p>
          </div>

          {/* 2x2 Feature Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {accessibilityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
                >
                  <div>
                    {/* Cyan Icon Container */}
                    <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="size-5" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      {feature.description}
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
