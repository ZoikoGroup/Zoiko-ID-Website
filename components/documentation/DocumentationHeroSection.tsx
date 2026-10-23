import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DocumentationHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function DocumentationHeroSection({
  view = "all",
}: DocumentationHeroSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full">
      {/* DESKTOP HERO (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block relative w-full bg-[#0a1526] overflow-hidden px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          {/* Ambient Background Image (sad1.png) */}
          <div className="absolute inset-0">
            <Image
              src="/Support-Accessibility-02-help-support/sad1.png"
              alt="Zoiko iD documentation background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Navy / Slate Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/90 via-[#081528]/60 to-[#0a172c]/30" />
          </div>

          {/* Foreground 2-Column Content */}
          <div className="relative z-10 mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Title, Subtitle, Buttons */}
              <div className="lg:col-span-7">
                <h1 className="font-dm-serif text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px]">
                  Documentation for
                  <br />
                  identity, authority
                  <br />
                  and evidence.
                </h1>

                <p className="mt-5 max-w-[620px] font-manrope text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-relaxed">
                  Explore Zoiko iD concepts, architecture and implementation guidance. Understand the difference between identity, delegated authority, continuous trust and evidence, then follow verified technical references when available.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <a
                    href="#search"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-center font-manrope text-xs font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600 sm:text-sm"
                  >
                    Browse documentation
                  </a>
                  <Link
                    href="/overview"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-500/80 bg-[#0e1828]/60 px-6 text-center font-manrope text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-300 hover:text-white sm:text-sm"
                  >
                    Explore developer documentation
                  </Link>
                </div>
              </div>

              {/* Right Column: Rounded Documentation Review Card (sad2.png) */}
              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <div className="relative aspect-[4/3.4] w-full max-w-[460px] overflow-hidden rounded-[28px] border border-slate-600/30 shadow-2xl">
                  <Image
                    src="/Support-Accessibility-02-help-support/sad2.png"
                    alt="Hands reviewing Zoiko iD technical specification document"
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE HERO (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full bg-white text-[#071324]">
          {/* Breadcrumbs Header */}
          <div className="border-b border-slate-100 px-5 py-3.5">
            <nav className="flex items-center gap-1.5 font-manrope text-[11px] text-[#64748b]">
              <Link href="/" className="transition hover:text-[#071324]">
                Home
              </Link>
              <span className="text-slate-300">›</span>
              <Link
                href="/help-support"
                className="transition hover:text-[#071324]"
              >
                Support &amp; Accessibility
              </Link>
              <span className="text-slate-300">›</span>
              <span className="font-semibold text-[#071324]">
                Documentation
              </span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center px-5 pt-8 pb-10 text-center">
            {/* Category Eyebrow */}
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0284c7]">
              SUPPORT &amp; ACCESSIBILITY / DOCUMENTATION
            </p>

            {/* Heading */}
            <h1 className="mt-3.5 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#0c192c]">
              Documentation for identity, authority and evidence.
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 max-w-[340px] font-manrope text-[13px] leading-[1.6] text-[#64748b]">
              Explore Zoiko ID concepts, architecture and implementation guidance. Understand the difference between identity, delegated authority, continuous trust and evidence, then follow verified technical references when available.
            </p>

            {/* Centered CTAs */}
            <div className="mt-6 flex w-full flex-col items-center gap-3">
              <a
                href="#search"
                className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[8px] bg-[#0c192c] px-6 py-3.5 font-manrope text-[13px] font-bold text-white shadow-sm transition hover:bg-[#132742]"
              >
                <span>Browse documentation</span>
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </a>
              <Link
                href="/apis-integrations"
                className="inline-flex w-full max-w-[280px] items-center justify-center rounded-[8px] border border-slate-300 bg-white px-6 py-3.5 font-manrope text-[13px] font-semibold text-[#0c192c] transition hover:bg-slate-50"
              >
                Explore developer documentation
              </Link>
            </div>

            {/* Microcopy disclaimer */}
            <p className="mt-3 max-w-[320px] font-manrope text-[10.5px] leading-relaxed text-[#94a3b8]">
              The developer documentation link appears only once its destination is approved.
            </p>

            {/* 3 Stacked Images */}
            <div className="mt-8 flex w-full flex-col gap-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-slate-200/80 bg-slate-100 shadow-xs">
                <Image
                  src="/Support-Accessibility-02-help-support/sad6.jpg"
                  alt="Documentation workspace with resume clipboard and laptop"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-slate-200/80 bg-slate-100 shadow-xs">
                <Image
                  src="/Support-Accessibility-02-help-support/sad7.jpg"
                  alt="Laptop displaying analytics graphs and charts"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-slate-200/80 bg-slate-100 shadow-xs">
                <Image
                  src="/Support-Accessibility-02-help-support/sad8.jpg"
                  alt="Monitoring console showing telemetry and metrics"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
