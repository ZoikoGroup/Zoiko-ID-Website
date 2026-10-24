import Image from "next/image";

interface KnownLimitationsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function KnownLimitationsSection({
  view = "all",
}: KnownLimitationsSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, notice card and hero-width image
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            {/* Top Row: Left Header & Right Limitation Card */}
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-6">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  06
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    KNOWN LIMITATIONS
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Open issues, as
                    <br />
                    they are approved
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-md">
                    Each entry shows its surface, impact, workaround where verified,
                    update date and owner. Sensitive ticket detail is never published.
                  </p>
                </div>
              </div>

              {/* Right Column: No Notices Published Card */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80 mb-4">
                    NO NOTICES PUBLISHED
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    There are no published limitation notices here.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    This does not mean there are no known issues; it means no limitation
                    has been approved for publication.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Celebration / Team Image */}
            <div className="mt-12 relative rounded-2xl overflow-hidden shadow-sm aspect-[21/9] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa2.png"
                alt="Inclusive team celebrating accessibility milestone together in office"
                fill
                sizes="(min-width: 1024px) 1240px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE VERSION (sm:hidden)
          Completely isolated to guarantee zero layout regression on desktop
          ========================================================================= */}
      {showMobile && (
        <div className="sm:hidden px-4 py-12 border-t border-slate-100">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            07
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              KNOWN LIMITATIONS
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Open issues, as they are approved
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Each entry shows its surface, impact, workaround where verified,
              update date and owner. Sensitive ticket detail is never published.
            </p>
          </div>

          {/* Limitation Card for Mobile */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80 mb-3">
              NO NOTICES PUBLISHED
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              There are no published limitation notices here.
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              This does not mean there are no known issues; it means no limitation
              has been approved for publication.
            </p>
          </div>

          {/* 3 Stacked Images for Mobile */}
          <div className="mt-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa15.jpg"
                alt="Code review on digital screen"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa16.jpg"
                alt="Global connected systems view"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa17.jpg"
                alt="User interacting with laptop and mobile display"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
