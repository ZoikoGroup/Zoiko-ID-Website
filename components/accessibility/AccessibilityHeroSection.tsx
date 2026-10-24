import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  MousePointerClick,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Info,
} from "lucide-react";

interface AccessibilityHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const pillarCards = [
  {
    title: "Perceivable",
    description: "Readable text, required contrast",
    icon: Eye,
  },
  {
    title: "Operable",
    description: "Keyboard use, visible focus",
    icon: MousePointerClick,
  },
  {
    title: "Understandable",
    description: "Clear labels and errors",
    icon: FileText,
  },
  {
    title: "Robust",
    description: "Semantic structure",
    icon: ShieldCheck,
  },
];

export default function AccessibilityHeroSection({
  view = "all",
}: AccessibilityHeroSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full">
      {/* DESKTOP HERO (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block relative w-full bg-[#071324] overflow-hidden px-6 pt-20 pb-24 sm:px-8 sm:pt-24 sm:pb-28 lg:px-12">
          {/* Ambient Background Image (aa6.png) */}
          <div className="absolute inset-0">
            <Image
              src="/Support-Accessibility-03-accessibility/aa6.png"
              alt="Colleagues collaborating in an accessible office"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Navy / Slate Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/85 via-[#071324]/75 to-[#071324]/95" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto max-w-[1240px]">
            {/* Centered Hero Header */}
            <div className="text-center max-w-[760px] mx-auto">
              <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] tracking-tight text-white">
                Accessibility at Zoiko iD
              </h1>

              <p className="mt-4 font-manrope text-xs sm:text-sm leading-relaxed text-slate-300 max-w-[640px] mx-auto">
                We aim to make information and product experiences usable for people with different accessibility needs. Find guidance here and tell us if something prevents access.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="#report"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2563eb] px-6 font-manrope text-xs sm:text-sm font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600"
                >
                  Report an accessibility issue
                </a>
                <Link
                  href="/help-support"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-500/80 bg-[#0e1828]/60 px-6 font-manrope text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-300 hover:text-white"
                >
                  Get help
                </Link>
              </div>

              {/* Scope note */}
              <p className="mt-3.5 font-manrope text-[11px] text-slate-400">
                This page&apos;s scope is our own verified practice, lineage and truthful verified help. It is never invented.
              </p>
            </div>

            {/* 4 White Pillar Cards */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillarCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5.5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="size-4.5" />
                    </div>
                    <h2 className="mt-3.5 font-manrope text-[15px] font-bold text-[#071324]">
                      {card.title}
                    </h2>
                    <p className="mt-1 font-manrope text-xs text-[#64748b] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Large Office Photo Card with Floating Badge (aa1.png) */}
            <div className="relative mt-6 aspect-[16/8.2] w-full overflow-hidden rounded-[28px] border border-slate-600/30 shadow-2xl bg-slate-900">
              <Image
                src="/Support-Accessibility-03-accessibility/aa1.png"
                alt="Colleagues working around a table with laptops in an accessible office"
                fill
                priority
                sizes="(min-width: 1240px) 1240px, 100vw"
                className="object-cover object-center"
              />

              {/* Floating Badge in bottom-left */}
              <div className="absolute bottom-6 left-6 max-w-[360px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0284c7]">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-manrope text-[13px] font-bold text-[#071324]">
                      No certification is claimed
                    </h3>
                    <p className="mt-0.5 font-manrope text-[11px] text-[#64748b] leading-snug">
                      Our pages conform to WCAG 2.2 Level AA.
                    </p>
                    <p className="mt-0.5 font-manrope text-[10.5px] text-slate-400 leading-snug">
                      This is a goal, not a past formal audit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE HERO (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full bg-white px-4 pt-8 pb-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#0ea5e9]"></span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              02 · HERO AND DIRECT ANSWER
            </span>
          </div>

          <h1 className="mt-3 font-dm-serif text-[28px] sm:text-[32px] font-normal leading-[1.18] tracking-tight text-[#071324] text-center">
            Accessibility at
            <br />
            Zoiko iD
          </h1>

          <p className="mt-3 text-xs leading-relaxed text-[#64748b] text-center max-w-sm mx-auto">
            We aim to make information and product experiences usable for people
            with different accessibility needs. Find guidance here and tell us if
            something prevents access.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-2.5 max-w-xs mx-auto w-full">
            <button
              type="button"
              disabled
              className="w-full rounded-xl bg-[#E2E8F0]/80 py-3 text-xs font-semibold text-slate-500 cursor-not-allowed text-center"
            >
              Report an accessibility issue
            </button>
            <a
              href="#site-shell"
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-3 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors"
            >
              <span>Get help</span>
              <span className="text-sm">↓</span>
            </a>
          </div>

          <p className="mt-3 text-[10.5px] leading-relaxed text-slate-400 text-center max-w-xs mx-auto">
            The report route is not yet verified. Until it is, this page points to
            verified Help &amp; Support instead.
          </p>

          {/* 4 Cards */}
          <div className="mt-7 flex flex-col gap-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm text-left">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-2.5">
                <Eye className="size-4" />
              </div>
              <h3 className="text-xs font-bold text-[#071324]">Perceivable</h3>
              <p className="mt-1 text-[11px] text-[#64748b]">
                Readable font, text alternatives
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm text-left">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-2.5">
                <MousePointerClick className="size-4" />
              </div>
              <h3 className="text-xs font-bold text-[#071324]">Operable</h3>
              <p className="mt-1 text-[11px] text-[#64748b]">
                Keyboard use, visible focus
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm text-left">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-2.5">
                <FileText className="size-4" />
              </div>
              <h3 className="text-xs font-bold text-[#071324]">Understandable</h3>
              <p className="mt-1 text-[11px] text-[#64748b]">
                Clear labels and errors
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm text-left">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-2.5">
                <Sliders className="size-4" />
              </div>
              <h3 className="text-xs font-bold text-[#071324]">Robust</h3>
              <p className="mt-1 text-[11px] text-[#64748b]">
                Semantic structure
              </p>
            </div>
          </div>

          {/* Close-up Smiling Face Photo */}
          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-100">
            <Image
              src="/Support-Accessibility-03-accessibility/aa12.jpg"
              alt="Team member smiling in accessible workspace"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating Disclaimer Card */}
          <div className="mt-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm flex items-start gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 mt-0.5">
              <Info className="size-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#071324]">
                No certification is claimed
              </h4>
              <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
                Our target is WCAG 2.1 Level AA. That is a goal, not a verified
                result.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
