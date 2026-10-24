import Link from "next/link";
import {
  ArrowRight,
  Eye,
  LayoutTemplate,
  Maximize2,
  Sliders,
} from "lucide-react";

interface AccessibleSiteShellSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface ShellFeature {
  title: string;
  description: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
}

const shellFeatures: ShellFeature[] = [
  {
    title: "Skip link",
    description:
      "Takes to main content on the first keyboard step and moves focus to the main region.",
    meta: "Visible on focus",
    icon: ArrowRight,
  },
  {
    title: "Landmark sequence",
    description:
      "Header, navigation, main and footer, in that order, once per page.",
    meta: "Breadcrumbs: Home / Support & Accessibility / Accessibility",
    icon: LayoutTemplate,
  },
  {
    title: "Menu and focus",
    description:
      "On mobile sizes the menu collapses without losing keyboard access, and focus returns to the menu button on close.",
    meta: "Tested on 320–1920 px",
    icon: Maximize2,
  },
  {
    title: "Display preferences",
    description:
      "Forced colours, high contrast and reduced motion are respected by the shell.",
    meta: "Organised by: Front-end and Design System",
    icon: Sliders,
  },
];

export default function AccessibleSiteShellSection({
  view = "all",
}: AccessibleSiteShellSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Big Number, Eyebrow, Heading & Subtitle */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  01
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    ACCESSIBLE SITE SHELL
                  </p>
                  <div className="mt-2 h-[2px] w-12 bg-[#0ea5e9]" />
                </div>

                <h2 className="mt-6 font-dm-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] tracking-tight text-[#071324]">
                  Entry, landmarks
                  <br />
                  and focus
                </h2>

                <p className="mt-4 max-w-[360px] font-manrope text-xs sm:text-[13px] leading-relaxed text-[#64748b]">
                  The shell is shared across the site. These are the behaviours this page depends on.
                </p>
              </div>

              {/* Right Column: 2x2 Grid of Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
                {shellFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:shadow-md"
                    >
                      <div>
                        {/* Cyan Icon Box */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324]">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                          {item.description}
                        </p>
                      </div>

                      {/* Meta Footer */}
                      <div className="mt-6 border-t border-slate-100 pt-3">
                        <span className="font-manrope text-[11.5px] font-medium text-slate-500">
                          {item.meta}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div id="site-shell" className="sm:hidden w-full">
          {/* Top Breadcrumb Bar */}
          <div className="bg-white border-b border-slate-100 px-4 py-3">
            <nav className="flex items-center space-x-1.5 text-[11px] text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">Support &amp; Accessibility</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900 font-semibold">Accessibility</span>
            </nav>
          </div>

          {/* Section 01 Body */}
          <div className="bg-[#F3F6FA] px-4 py-8">
            <span className="font-dm-serif text-[60px] font-normal leading-none text-[#dbeafe] select-none block">
              01
            </span>

            <div className="mt-2">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                ACCESSIBLE SITE SHELL
              </p>
              <h2 className="mt-2 font-dm-serif text-[26px] font-normal leading-tight text-[#071324]">
                Entry, landmarks and
                <br />
                focus
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#64748b]">
                The shell is shared across the site. These are the behaviours this page
                depends on.
              </p>
            </div>

            {/* 4 Cards */}
            <div className="mt-6 space-y-3.5">
              {/* Card 1: Skip link */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-3">
                  <ArrowRight className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-[#071324]">
                  Skip link
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                  &ldquo;Skip to main content&rdquo; is the first keyboard step and moves focus to the main region.
                </p>
                <div className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800">Visible</span> on focus
                </div>
              </div>

              {/* Card 2: Landmark sequence */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-3">
                  <LayoutTemplate className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-[#071324]">
                  Landmark sequence
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                  Header, navigation, main and footer, in that order. One hit per page.
                </p>
                <div className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800">Breadcrumbs:</span> Home / Support &amp; Accessibility / Accessibility
                </div>
              </div>

              {/* Card 3: Menu and focus */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-3">
                  <Sliders className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-[#071324]">
                  Menu and focus
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                  On small screens the menu collapses without losing keyboard access, and focus returns to the menu button on close.
                </p>
                <div className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800">Tested at:</span> 320–1920 px
                </div>
              </div>

              {/* Card 4: Display preferences */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-3">
                  <Eye className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-[#071324]">
                  Display preferences
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                  Forced colours, high contrast and reduced motion are respected by the shell.
                </p>
                <div className="mt-4 border-t border-slate-100 pt-2.5 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-800">Dependency:</span> Front-end and Design System
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
