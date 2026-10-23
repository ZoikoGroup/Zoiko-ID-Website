import Image from "next/image";
import Link from "next/link";

interface DocumentationCtaSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function DocumentationCtaSection({
  view = "all",
}: DocumentationCtaSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="relative min-h-[480px] w-full overflow-hidden rounded-[32px] shadow-xl">
              {/* Background Photo */}
              <Image
                src="/Support-Accessibility-02-help-support/sad5.png"
                alt="Working with documentation and enterprise tablet"
                fill
                sizes="(min-width: 1240px) 1160px, 100vw"
                className="object-cover object-center"
              />

              {/* High-Fidelity Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/92 via-[#0a1e36]/88 to-[#071426]/92 backdrop-blur-[1px]" />

              {/* Centered Content */}
              <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-center px-8 py-16 text-center">
                <h2 className="max-w-[700px] font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[46px]">
                  Browse, or get help with
                  <br />
                  your use case.
                </h2>

                <p className="mt-4 max-w-[540px] font-manrope text-xs sm:text-[13px] leading-relaxed text-[#cbd5e1]">
                  Start with the topic that fits your question. If documentation does not answer it,
                  <br />
                  Help &amp; Support takes account and product questions.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="#topics"
                    className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-7 py-3.5 font-manrope text-xs sm:text-[13px] font-bold text-white shadow-sm transition hover:bg-blue-600"
                  >
                    Browse documentation
                  </Link>
                  <Link
                    href="/apis-integrations"
                    className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-transparent px-7 py-3.5 font-manrope text-xs sm:text-[13px] font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore developer documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              NEXT STEP
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Browse, or get help with your use case.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Start with the topic that fits your question. If documentation does not answer it, Help &amp; Support takes account and product questions.
          </p>

          {/* Buttons Stack */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#topics"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#071426] py-3.5 font-manrope text-xs font-bold text-white shadow-xs transition hover:bg-[#0c2541]"
            >
              Browse documentation
            </Link>
            <Link
              href="/apis-integrations"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#edf2f7] py-3.5 font-manrope text-xs font-bold text-[#475569] transition hover:bg-slate-200"
            >
              Explore developer documentation
            </Link>
          </div>

          {/* Bottom 3D Graphic */}
          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-sm">
            <Image
              src="/Support-Accessibility-01-help-support/ahs18.jpg"
              alt="Connected secure identity network visual"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
