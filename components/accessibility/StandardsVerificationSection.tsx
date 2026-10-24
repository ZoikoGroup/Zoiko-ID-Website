import Image from "next/image";

interface StandardsVerificationSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface SpecItem {
  label: string;
  value?: string;
  badge?: string;
}

const specColumn1: SpecItem[] = [
  {
    label: "IMPLEMENTATION TARGET",
    badge: "WCAG 2.1 LEVEL AA",
  },
  {
    label: "EVALUATED PRODUCT OR SURFACE",
    value: "Not published",
  },
  {
    label: "TEST DATES AND ENVIRONMENTS",
    value: "Not published",
  },
];

const specColumn2: SpecItem[] = [
  {
    label: "ASSESSOR",
    value: "Not published",
  },
  {
    label: "KNOWN LIMITATIONS",
    value: "See section 07",
  },
  {
    label: "LAST REVIEW",
    value: "Shared review recorded",
  },
];

export default function StandardsVerificationSection({
  view = "all",
}: StandardsVerificationSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Strictly preserves mockup layout, margins, card styles and image aspects
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            {/* Top Row: Left Header & Right Table Card */}
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  03
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    STANDARDS AND VERIFICATION
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Target and verified status are kept apart
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600">
                    This target is stated plainly. A verified status is published
                    only after assessment and sign-off.
                  </p>
                </div>
              </div>

              {/* Right Column: Specification Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      {specColumn1.map((item, idx) => (
                        <div key={idx}>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            {item.label}
                          </span>
                          {item.badge ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                              {item.badge}
                            </span>
                          ) : (
                            <span className="text-sm font-semibold text-slate-900 block">
                              {item.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                      {specColumn2.map((item, idx) => (
                        <div key={idx}>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            {item.label}
                          </span>
                          <span className="text-sm font-semibold text-slate-900 block">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Disclaimer Notice Box */}
            <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-600 shadow-sm">
              <span className="font-semibold text-slate-900">
                Assessment details not currently published.
              </span>{" "}
              A target is not a conformance result. This page does not state that the live site conforms.
            </div>

            {/* Two Side-by-Side Images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
                <Image
                  src="/Support-Accessibility-03-accessibility/aa3.png"
                  alt="Inclusive workspace collaboration with team members"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
                <Image
                  src="/Support-Accessibility-03-accessibility/aa4.png"
                  alt="Inclusive team discussions in an accessible office environment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
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
        <div className="sm:hidden px-4 py-12 border-t border-slate-100">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            04
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              STANDARDS AND VERIFICATION
            </p>
            <h2 className="mt-2 font-dm-serif text-[26px] font-normal leading-snug text-slate-900">
              Target and verified
              <br />
              status
              <br />
              are kept apart
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              The target is stated plainly. A verified status is published only
              after assessment and legal sign-off.
            </p>
          </div>

          {/* Specification Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-5">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  IMPLEMENTATION TARGET
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                  WCAG 2.1 LEVEL AA
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  EVALUATED PRODUCT OR SURFACE
                </span>
                <span className="text-xs font-semibold text-slate-900 block">
                  Not published
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  TEST DATE AND ENVIRONMENTS
                </span>
                <span className="text-xs font-semibold text-slate-900 block">
                  Not published
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-4">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  ASSESSOR
                </span>
                <span className="text-xs font-semibold text-slate-900 block">
                  Not published
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  KNOWN LIMITATIONS
                </span>
                <span className="text-xs font-semibold text-slate-900 block">
                  See section 07
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  LAST REVIEW
                </span>
                <span className="text-xs font-semibold text-slate-900 block">
                  Shown once recorded
                </span>
              </div>
            </div>
          </div>

          {/* Assessment Disclaimer Notice Box */}
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-left text-xs leading-relaxed text-slate-600 shadow-sm">
            <span className="font-semibold text-slate-900">
              Assessment details not currently published.
            </span>{" "}
            A target is not a conformance result. This page does not state that the live site conforms.
          </div>

          {/* 3 Stacked Images for Mobile */}
          <div className="mt-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa9.jpg"
                alt="Digital product interfaces and metrics"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa10.jpg"
                alt="Workspace laptop with dashboard review"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa20.jpg"
                alt="Mobile device accessibility review"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
