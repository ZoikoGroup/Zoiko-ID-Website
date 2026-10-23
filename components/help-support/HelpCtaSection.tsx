import Image from "next/image";
import Link from "next/link";

interface HelpCtaSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function HelpCtaSection({
  view = "all",
}: HelpCtaSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#071324] px-5 py-12 text-white">
        {/* Category tag */}
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#38bdf8]">
            NEXT STEP
          </span>
        </div>

        {/* Title without awkward line breaks */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-white">
          Still need help? Choose the right supported path.
        </h2>

        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-slate-300">
          Start with the topic that fits your question. Security and privacy matters always go to their own specialist routes.
        </p>

        {/* Stacked Action Buttons */}
        <div className="mt-6 flex flex-col gap-3 w-full">
          <a
            href="#topics"
            className="w-full py-3.5 px-6 rounded-xl bg-white text-[#071324] font-manrope text-xs font-bold text-center transition hover:bg-slate-100"
          >
            Browse help topics
          </a>
          <Link
            href="/overview"
            className="w-full py-3.5 px-6 rounded-xl border border-slate-700 bg-transparent text-white font-manrope text-xs font-semibold text-center transition hover:border-slate-500"
          >
            View documentation
          </Link>
        </div>

        {/* 3D Isometric Connected Cubes Photo (ahs18.jpg) */}
        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-lg">
          <Image
            src="/Support-Accessibility-01-help-support/ahs18.jpg"
            alt="Cryptographic identity node network"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[24px] px-8 py-20 text-center text-white shadow-2xl sm:px-14 sm:py-24 lg:px-20 lg:py-28 sm:rounded-[36px]">
            {/* Background Image (ahs10.png) */}
            <Image
              src="/Support-Accessibility-01-help-support/ahs10.png"
              alt="Engineering colleagues collaborating and reviewing architecture on monitor"
              fill
              sizes="(min-width: 1200px) 1140px, 100vw"
              className="object-cover object-center"
            />

            {/* Dark Navy Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/90 via-[#071324]/80 to-[#071324]/90" />

            {/* Foreground Content */}
            <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center">
              <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[46px]">
                Still need help? Choose the right supported path.
              </h2>

              <p className="mt-4 max-w-[620px] font-manrope text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-relaxed">
                Start with the topic that fits your question. Security and privacy matters always go to their own specialist routes.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#topics"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[#2563eb] px-6 text-center font-manrope text-sm font-semibold text-white shadow-[0px_4px_14px_rgba(37,99,235,0.4)] transition hover:bg-blue-600"
                >
                  Browse help topics
                </a>
                <Link
                  href="/overview"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600/80 bg-[#0c1829]/60 px-6 text-center font-manrope text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-slate-400 hover:text-white"
                >
                  View documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
