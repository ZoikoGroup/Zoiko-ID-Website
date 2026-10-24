import {
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";

interface ConfirmationUpdatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface OutcomeCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const outcomeCards: OutcomeCard[] = [
  {
    title: "Acknowledged",
    description:
      '"Your report has been received." Focus moves to the heading.',
    icon: CheckCircle2,
  },
  {
    title: "Unavailable",
    description:
      "An error is shown, your input is kept, and retry is safe.",
    icon: Clock,
  },
  {
    title: "Unknown",
    description:
      "No outcome is claimed. You are told how to check before retrying.",
    icon: HelpCircle,
  },
];

export default function ConfirmationUpdatesSection({
  view = "all",
}: ConfirmationUpdatesSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, typography, 3-column cards and icons
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-100">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  09
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    CONFIRMATION AND UPDATES
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    What happens
                    <br />
                    after you submit
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-sm">
                    Success is shown only after the server acknowledges the report.
                    A case reference appears only when the system provides one.
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Outcome Cards */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-3 gap-5">
                  {outcomeCards.map((card, idx) => {
                    const IconComponent = card.icon;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-start min-h-[200px] hover:shadow-md transition-shadow"
                      >
                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                          {card.description}
                        </p>
                      </div>
                    );
                  })}
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
        <div className="sm:hidden px-4 py-12 border-t border-slate-100 bg-white">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            10
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              CONFIRMATION AND UPDATES
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              What happens after you submit
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Success is shown only after the server acknowledges the report.
              A case reference appears only when the system provides one.
            </p>
          </div>

          {/* Stacked Outcome Cards for Mobile */}
          <div className="mt-6 space-y-4">
            {/* Card 1: Acknowledged */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Acknowledged
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                &ldquo;Your report has been received.&rdquo; Focus moves to this heading.
              </p>
            </div>

            {/* Card 2: Unavailable */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Unavailable
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                An error is shown, your input is kept, and retry is safe.
              </p>
            </div>

            {/* Card 3: Unknown */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Unknown
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                No success is claimed. You are told how to check before retrying.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
