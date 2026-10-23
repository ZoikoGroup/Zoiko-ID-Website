interface StateCard {
  title: string;
  description: string;
}

const states: StateCard[] = [
  {
    title: "Submitting",
    description: "Repeat submission is disabled while the request is pending.",
  },
  {
    title: "Confirmed",
    description:
      "Shown only after the server saves the request, with a visit reference if one exists.",
  },
  {
    title: "Timeout or offline",
    description:
      'Your text is kept in this session. No "received" message is shown; retry is safe.',
  },
];

const mobileStates: StateCard[] = [
  {
    title: "Submitting",
    description: "Repeat submission is disabled while the request is pending.",
  },
  {
    title: "Confirmed",
    description:
      "Shown only after the server marks the request, with a real reference if one exists.",
  },
  {
    title: "Timed out or offline",
    description:
      'Your text is kept in this session. No "received" message is shown; retry is safe.',
  },
];

interface ConfirmationPersistenceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function ConfirmationPersistenceSection({
  view = "all",
}: ConfirmationPersistenceSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              SUBMISSION AND FOLLOW-UP
            </span>
          </div>

        {/* Title without awkward line breaks */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
          A confirmation means the server saved it
        </h2>
        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Success is shown only after backend persistence. A reference appears only when the backend issued one. Timeouts never claim that a request was created.
        </p>

        {/* 3 State Cards - Vertical Stack */}
        <div className="mt-6 flex flex-col gap-3.5">
          {mobileStates.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <h3 className="font-manrope text-[15px] font-bold text-[#071324]">
                {card.title}
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1020px] px-6 sm:px-8">
          {/* Header */}
          <div className="max-w-[800px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
              A confirmation means the server saved it
            </h2>
            <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
              Success is shown only after backend persistence. A reference appears only when the backend issued one. Timeouts never claim that a request was created.
            </p>
          </div>

          {/* 3 State Cards Row */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {states.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
              >
                <div>
                  <h3 className="font-manrope text-sm font-bold text-[#071324] sm:text-[15px]">
                    {card.title}
                  </h3>
                  <div className="mt-3.5 border-t border-slate-100 pt-3.5">
                    <p className="font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
