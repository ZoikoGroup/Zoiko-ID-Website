import Image from "next/image";
import Link from "next/link";
import { Search, ShieldAlert } from "lucide-react";

interface HelpSupportHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HelpSupportHeroSection({
  view = "all",
}: HelpSupportHeroSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  const quickTags = [
    "SSO access",
    "Delegated authority",
    "Verification",
    "API integrations",
  ];

  return (
    <section className="relative w-full bg-white">
      {/* Desktop Hero Layout (hidden on mobile, visible on sm+) */}
      {showDesktop && (
        <div className="hidden sm:block">
        {/* Dark Slate Hero Header with Clear Team Background */}
        <div className="relative w-full overflow-hidden bg-[#0c1626] px-6 pt-20 pb-16 text-center text-white sm:px-8 sm:pt-24 sm:pb-20 lg:px-12 lg:pt-28 lg:pb-24">
          {/* Ambient background photo of the team (clearly visible behind dark tint overlay) */}
          <div className="absolute inset-0">
            <Image
              src="/Support-Accessibility-01-help-support/ahs1.png"
              alt="Zoiko iD support team background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Tint overlay preserving team visibility while ensuring text contrast */}
            <div className="absolute inset-0 bg-[#0e1826]/75 bg-gradient-to-b from-[#0b1420]/80 via-[#0e1928]/70 to-[#0c1626]/85" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto flex max-w-[840px] flex-col items-center">
            {/* Main Title */}
            <h1 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Find the right help for
              <br />
              Zoiko iD
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[680px] font-manrope text-xs leading-relaxed text-slate-200 sm:text-sm sm:leading-relaxed">
              Explore guidance for accounts, authentication, credentials, delegated access and integrations. For security, privacy, service status or commercial requests, use the appropriate specialist channel.
            </p>

            {/* Action CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#routes"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-center font-manrope text-xs font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600 sm:text-sm"
              >
                Browse help topics
              </a>
              <Link
                href="/overview"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-500/80 bg-[#0f1d32]/70 px-6 text-center font-manrope text-xs font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-300 hover:text-white sm:text-sm"
              >
                View documentation
              </Link>
            </div>

            {/* Safety Micro-Notice */}
            <p className="mt-4 font-manrope text-[11px] leading-relaxed text-slate-300/90 sm:text-xs">
              Documentation link pending verification. A request form appears only when an approved intake is live.
            </p>

            {/* Search Bar Input Container */}
            <div className="mt-7 w-full max-w-[740px]">
              <div className="flex items-center rounded-xl border border-slate-600/70 bg-[#142338]/85 p-1.5 shadow-2xl backdrop-blur-md">
                <div className="flex flex-1 items-center gap-3 pl-3.5">
                  <Search className="size-4 shrink-0 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search help articles"
                    className="w-full bg-transparent font-manrope text-xs text-white placeholder-slate-400 outline-none sm:text-sm"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-slate-600/70 bg-[#0f2338] px-5 py-2 font-manrope text-xs font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
                >
                  Search
                </button>
              </div>

              {/* Quick Filter Tag Pills */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
                {quickTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="rounded-full border border-slate-600/70 bg-[#16273e]/70 px-3.5 py-1 font-manrope text-[11px] text-slate-300 backdrop-blur-sm transition hover:border-slate-400 hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Foreground High-Resolution Team Photograph Card */}
          <div className="relative z-10 mx-auto mt-10 max-w-[960px] px-2 sm:mt-12 sm:px-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[28px] border-t border-r border-l border-white/20 bg-slate-900 shadow-2xl sm:rounded-t-[36px]">
              <Image
                src="/Support-Accessibility-01-help-support/ahs1.png"
                alt="Zoiko iD global support, identity and engineering colleagues"
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Security Alert Bar (Suspect account compromise or security issue?) */}
        <div className="relative z-20 mx-auto -mt-6 max-w-[960px] px-6 sm:-mt-8 sm:px-8">
          <div className="flex flex-col justify-between gap-5 rounded-xl border border-slate-200/90 border-l-[6px] border-l-[#071324] bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <ShieldAlert className="size-5" />
              </div>
              <div>
                <h2 className="font-manrope text-sm font-bold text-[#071324] sm:text-[14.5px]">
                  Suspect account compromise or a security issue?
                </h2>
                <p className="mt-0.5 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                  Use the security reporting path. Never send passwords, recovery codes or private keys in a help request.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2.5">
              <Link
                href="/security-contact"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-blue-200 bg-white px-4 font-manrope text-xs font-semibold text-[#2563eb] transition hover:bg-blue-50"
              >
                Security Contact
              </Link>
              <Link
                href="/security-contact"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-blue-200 bg-white px-4 font-manrope text-xs font-semibold text-[#2563eb] transition hover:bg-blue-50"
              >
                Responsible Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Mobile Hero Layout (strictly visible on mobile: sm:hidden) */}
      {showMobile && (
        <div className="flex flex-col px-5 pt-6 pb-12 sm:hidden">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-1.5 text-[11px] font-manrope text-slate-500">
          <Link href="/" className="transition hover:text-slate-800">
            Home
          </Link>
          <span>›</span>
          <span>Support & Accessibility</span>
          <span>›</span>
          <span className="font-semibold text-[#071324]">Help & Support</span>
        </nav>

        {/* Category Pill with horizontal line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[9px] font-bold tracking-wider text-[#0284c7] uppercase">
            SUPPORT & ACCESSIBILITY / HELP & SUPPORT
          </span>
        </div>

        {/* Mobile Heading */}
        <h1 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#071324]">
          Find the right help
          <br />
          for Zoiko iD
        </h1>

        {/* Mobile Subtitle */}
        <p className="mt-4 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Explore guidance for accounts, authentication, credentials, delegated access and integrations. For security, privacy, service status or commercial requests, use the appropriate specialist channel.
        </p>

        {/* Mobile Action Buttons (stacked vertically) */}
        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href="#topics"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#071324] px-6 text-center font-manrope text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Browse help topics <span className="text-sm">→</span>
          </a>
          <Link
            href="/overview"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-center font-manrope text-xs font-semibold text-[#071324] shadow-sm transition hover:bg-slate-50"
          >
            View documentation
          </Link>
        </div>

        {/* Micro Notice */}
        <p className="mt-4 text-center font-manrope text-[11px] leading-relaxed text-[#64748b]">
          Documentation link pending verification. A request form appears only when an approved intake is live.
        </p>

        {/* Search Box Card */}
        <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2.5 px-1 py-1 text-slate-400">
            <Search className="size-4 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search help articles"
              className="w-full bg-transparent font-manrope text-xs text-[#071324] placeholder-slate-400 outline-none"
            />
          </div>
          <button
            type="button"
            className="mt-3 w-full rounded-lg bg-[#071324] py-2.5 font-manrope text-xs font-bold text-white shadow-sm transition hover:bg-slate-800"
          >
            Search
          </button>
        </div>

        {/* Filter tags below search */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1 font-manrope text-[11px] text-[#475569] shadow-2xs"
            >
              SSO access
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1 font-manrope text-[11px] text-[#475569] shadow-2xs"
            >
              Delegated authority
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1 font-manrope text-[11px] text-[#475569] shadow-2xs"
            >
              Verification
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1 font-manrope text-[11px] text-[#475569] shadow-2xs"
            >
              API integrations
            </button>
          </div>
        </div>

        <p className="mt-3 text-center font-manrope text-[10.5px] leading-relaxed text-[#94a3b8]">
          Search covers approved, public articles only. Queries are limited to 200 characters.
        </p>

        {/* Mobile Photo (ahs11.jpg) */}
        <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
          <Image
            src="/Support-Accessibility-01-help-support/ahs11.jpg"
            alt="Colleagues learning and collaborating around laptops in office workspace"
            fill
            sizes="100vw"
            className="object-cover object-[65%_center]"
          />
        </div>

        {/* Mobile Security Alert Container */}
        <div className="mt-12 rounded-2xl border-2 border-blue-200/90 bg-white p-5 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
            <ShieldAlert className="size-5" />
          </div>

          <h2 className="mt-4 font-manrope text-xs font-bold leading-snug text-[#071324]">
            Suspect account compromise or a security issue?{" "}
            <span className="font-normal text-[#4b5563]">
              Use the security reporting path. Never send passwords, recovery codes or private keys in a help request.
            </span>
          </h2>

          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="/security-contact"
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-manrope text-xs font-bold text-[#2563eb] transition hover:bg-slate-50"
            >
              <span>Security Contact</span>
              <span className="font-manrope text-[11px] font-normal text-amber-700">
                verification pending
              </span>
            </Link>
            <Link
              href="/security-contact"
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-manrope text-xs font-bold text-[#2563eb] transition hover:bg-slate-50"
            >
              <span>Responsible Disclosure</span>
              <span className="font-manrope text-[11px] font-normal text-amber-700">
                verification pending
              </span>
            </Link>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
