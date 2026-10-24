import { AlertTriangle } from "lucide-react";

interface ReleaseGatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface GateRequirement {
  owner: string;
  requirement: string;
}

const gateRequirements: GateRequirement[] = [
  {
    owner: "Accessibility and QA",
    requirement:
      "Keyboard, screen-reader, zoom and forced-colours evidence",
  },
  {
    owner: "Legal",
    requirement:
      "Scope-specific statement wording and canary retention",
  },
  {
    owner: "Support Engineering",
    requirement:
      "Working intake, acknowledgement and retry behaviour",
  },
  {
    owner: "Web Operations",
    requirement:
      "Clear rollout route and scheduled review ticket",
  },
];

export default function ReleaseGatesSection({
  view = "all",
}: ReleaseGatesSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, hard blockers banner & navy table
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  10
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    RELEASE GATES
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    What must be
                    <br />
                    true before this
                    <br />
                    page is published
                  </h2>
                </div>
              </div>

              {/* Right Column: Hard Blockers Banner + Release Gates Table */}
              <div className="lg:col-span-7 space-y-6">
                {/* Hard Blockers Callout */}
                <div className="rounded-2xl border border-rose-200/90 bg-rose-50/60 p-5 shadow-sm flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-rose-800">
                    <span className="font-bold text-rose-900">Hard blockers:</span>{" "}
                    Fabricated conformance, an unsupported contact channel, an
                    inaccessible frontend workflow, unresolved critical keyboard or
                    screen-reader defects, unapproved privacy wording, expired
                    review date, untested high-volume navigation.
                  </p>
                </div>

                {/* Release Gates Table */}
                <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0B192C] text-white">
                        <th className="py-4 px-6 font-mono text-[11px] font-bold uppercase tracking-wider w-2/5">
                          Owner
                        </th>
                        <th className="py-4 px-6 font-mono text-[11px] font-bold uppercase tracking-wider w-3/5">
                          Requirement before release
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {gateRequirements.map((gate, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="py-4 px-6 text-sm font-semibold text-slate-900 align-top">
                            {gate.owner}
                          </td>
                          <td className="py-4 px-6 text-xs lg:text-sm text-slate-600 leading-relaxed align-top">
                            {gate.requirement}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
        <div className="sm:hidden px-4 py-12 bg-[#F3F6FA] border-t border-slate-100">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            11
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              RELEASE GATES
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              What must be true before this page is published
            </h2>
          </div>

          {/* Hard Blockers for Mobile */}
          <div className="mt-6 rounded-2xl border border-rose-200/90 bg-rose-50/60 p-4 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs leading-relaxed text-rose-800">
              <span className="font-bold text-rose-900">Hard blockers.</span>{" "}
              Fabricated conformance, an unsupported contact channel, an inaccessible
              feedback workflow, unresolved critical keyboard or screen-reader defects,
              unapproved privacy wording, expired review date, or broken high-volume
              navigation.
            </p>
          </div>

          {/* Release Gates Table Card for Mobile */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-3 px-4 py-3 bg-[#F1F5F9] border-b border-slate-200/60">
              <span className="col-span-5 text-[11px] font-bold text-slate-700">
                Owner
              </span>
              <span className="col-span-7 text-[11px] font-bold text-slate-700">
                Required before release
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-12 gap-3 p-4 items-start">
                <div className="col-span-5 text-xs font-semibold text-slate-900">
                  Accessibility and QA
                </div>
                <div className="col-span-7 text-xs text-slate-600 leading-relaxed">
                  Keyboard, screen reader, zoom and forced-colours evidence
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 p-4 items-start">
                <div className="col-span-5 text-xs font-semibold text-slate-900">
                  Legal
                </div>
                <div className="col-span-7 text-xs text-slate-600 leading-relaxed">
                  Scope-specific statement wording and privacy retention
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 p-4 items-start">
                <div className="col-span-5 text-xs font-semibold text-slate-900">
                  Support Engineering
                </div>
                <div className="col-span-7 text-xs text-slate-600 leading-relaxed">
                  Working intake, acknowledgement and retry behaviour
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 p-4 items-start">
                <div className="col-span-5 text-xs font-semibold text-slate-900">
                  Web Operations
                </div>
                <div className="col-span-7 text-xs text-slate-600 leading-relaxed">
                  Canonical route and checked footer links
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
