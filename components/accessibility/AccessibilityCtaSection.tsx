import Image from "next/image";
import Link from "next/link";
import { LifeBuoy, FileText, Shield, Lock } from "lucide-react";

interface AccessibilityCtaSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function AccessibilityCtaSection({
  view = "all",
}: AccessibilityCtaSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#071324] sm:bg-white pb-0 sm:pb-20 lg:sm:pb-28 pt-0 sm:pt-6">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches full-width card, background photo, centered typography and buttons
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[360px] flex items-center justify-center text-center px-8 py-16">
            {/* Background Office Photo with Dark Atmosphere Overlay */}
            <Image
              src="/Support-Accessibility-03-accessibility/aa14.jpg"
              alt="Team collaborating on accessible solutions in workspace"
              fill
              sizes="(min-width: 1024px) 1240px, 100vw"
              className="object-cover object-center"
            />
            {/* Multi-tone Deep Slate / Navy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/92 via-[#0f172a]/88 to-[#0B192C]/92 backdrop-blur-[1px]" />

            {/* Content Foreground */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-white tracking-tight">
                Tell us what is getting in
                <br />
                the way.
              </h2>
              <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-200/90 max-w-xl mx-auto">
                Use the routes below for your question. Each one is marked with
                its status, and none is shown active until it is verified.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <Link
                  href="/help-support"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-md transition-all duration-200"
                >
                  Find the right help
                </Link>
                <Link
                  href="/documentation"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  Read documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE VERSION (sm:hidden)
          Completely isolated to guarantee zero layout regression on desktop
          ========================================================================= */}
      {showMobile && (
        <div className="sm:hidden px-4 py-12 bg-[#071324]">
          {/* Eyebrow with cyan accent bar */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#0ea5e9]" />
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              FIND THE RIGHT HELP
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-3 font-dm-serif text-3xl font-normal leading-tight text-white">
            Tell us what is getting in the way.
          </h2>

          {/* Description */}
          <p className="mt-3 text-xs leading-relaxed text-slate-300 max-w-sm">
            Use the routes below for your question. Each one is marked with its status,
            and none is shown as live until it is verified.
          </p>

          {/* Route Badges / Pills */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link
              href="/help-support"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 border border-slate-700/80 bg-[#0F223A]/70 hover:border-sky-500/50 transition-colors"
            >
              <LifeBuoy className="w-3.5 h-3.5 text-sky-400" />
              <span>Help &amp; Support</span>
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 border border-slate-700/80 bg-[#0F223A]/70 hover:border-sky-500/50 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Documentation</span>
            </Link>
            <Link
              href="/security-contact"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 border border-slate-700/80 bg-[#0F223A]/70 hover:border-sky-500/50 transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Security Contact</span>
            </Link>
            <Link
              href="/privacy-notice"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 border border-slate-700/80 bg-[#0F223A]/70 hover:border-sky-500/50 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              <span>Privacy</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <Link
              href="/help-support"
              className="block w-full py-3 px-5 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              Find the right help
            </Link>
            <Link
              href="/documentation"
              className="block w-full py-3 px-5 rounded-xl text-center text-xs sm:text-sm font-semibold text-white bg-[#0B1E36] border border-slate-700 hover:bg-[#132c4d] shadow-sm transition-all"
            >
              Read documentation
            </Link>
          </div>

          {/* 3D Cubes Image Card */}
          <div className="relative mt-8 rounded-3xl overflow-hidden aspect-[4/3] w-full border border-slate-800 shadow-2xl">
            <Image
              src="/Support-Accessibility-03-accessibility/aa21.jpg"
              alt="Connected network infrastructure"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
    </section>
  );
}
