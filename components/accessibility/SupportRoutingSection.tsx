import Link from "next/link";
import Image from "next/image";
import {
  Accessibility,
  Lock,
  ShieldCheck,
  User,
} from "lucide-react";

interface SupportRoutingSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function SupportRoutingSection({
  view = "all",
}: SupportRoutingSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, 2x2 cards, badges and links
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  07
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    SUPPORT ROUTING
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Need help
                    <br />
                    accessing
                    <br />
                    something?
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-sm">
                    Choose the description that fits. Each card opens only an
                    approved destination.
                  </p>
                </div>
              </div>

              {/* Right Column: 2x2 Routing Cards */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-5">
                  {/* Card 1: Accessibility barrier */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between min-h-[190px] hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                        <Accessibility className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Accessibility barrier
                      </h3>
                      <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                        A page, feature or control prevents you from using the site.
                      </p>
                    </div>
                    <div className="mt-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                        INTAKE ROUTE NOT AVAILABLE
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Account or product help */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between min-h-[190px] hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                        <User className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Account or product help
                      </h3>
                      <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                        Sign-in, account and product questions.
                      </p>
                    </div>
                    <div className="mt-5 text-xs text-slate-600 font-medium">
                      Route:{" "}
                      <Link
                        href="/help-support"
                        className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                      >
                        Help &amp; Support
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Privacy request */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between min-h-[190px] hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                        <Lock className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Privacy request
                      </h3>
                      <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                        Questions about your personal data.
                      </p>
                    </div>
                    <div className="mt-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                        ROUTE PENDING
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Security concern */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between min-h-[190px] hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Security concern
                      </h3>
                      <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                        Suspected compromise or vulnerability. Correct as referenced.
                      </p>
                    </div>
                    <div className="mt-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                        ROUTE PENDING
                      </span>
                    </div>
                  </div>
                </div>
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
            08
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              SUPPORT ROUTING
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Need help accessing something?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Choose the description that fits. Each card opens only an approved
              destination.
            </p>
          </div>

          {/* Stacked Cards for Mobile */}
          <div className="mt-6 space-y-4">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Accessibility className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Accessibility barrier
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                A page, feature or control prevents you from using the site.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                  INTAKE ROUTE NOT VERIFIED
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <User className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Account or product help
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Sign-in, account and product questions.
              </p>
              <div className="mt-4 text-xs text-slate-600 font-medium">
                Route:{" "}
                <Link
                  href="/help-support"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                >
                  Help &amp; Support
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Privacy request
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Questions about your personal data.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                  ROUTE PENDING
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Security concern
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Suspected compromise or vulnerability. Do not send secrets.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200/80">
                  ROUTE PENDING
                </span>
              </div>
            </div>
          </div>

          {/* 3 Mobile Stacked Images */}
          <div className="mt-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa18.jpg"
                alt="Accessible device interaction"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa19.jpg"
                alt="Zoiko ID accessibility interface overview"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-100">
              <Image
                src="/Support-Accessibility-03-accessibility/aa20.jpg"
                alt="Collaborative workspace and assistive technology"
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
