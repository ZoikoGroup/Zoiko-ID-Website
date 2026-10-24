import Image from "next/image";

interface PracticalGuidanceSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface GuidanceCard {
  title: string;
  description: string;
}

const guidanceCards: GuidanceCard[] = [
  {
    title: "Keyboard navigation",
    description:
      "Use Tab and Shift+Tab to move between controls. Enter and Space activate buttons and links.",
  },
  {
    title: "Headings and landmarks",
    description:
      "Pages have one main heading, followed by ordered sections, and use landmark roles: header, navigation, main and footer.",
  },
  {
    title: "Zoom and reflow",
    description:
      "Content is designed to remain usable at large text sizes and at narrow widths, without horizontal scrolling for reading.",
  },
  {
    title: "Forms and errors",
    description:
      "Fields have visible labels. Errors are described in text and linked to the field that needs attention.",
  },
  {
    title: "Reduced motion",
    description:
      "Animation is omitted where you ask for reduced motion, and no information depends on motion alone.",
  },
];

export default function PracticalGuidanceSection({
  view = "all",
}: PracticalGuidanceSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#F8FAFC]">
      {/* =========================================================================
          DESKTOP VERSION (hidden sm:block)
          Matches layout, margins, card dimensions, and image placement
          ========================================================================= */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28 border-t border-slate-200/70">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Number, Eyebrow, Heading & Copy */}
              <div className="lg:col-span-5">
                <span className="font-dm-serif text-[72px] lg:text-[88px] font-normal leading-none text-[#dbeafe] select-none block">
                  04
                </span>

                <div className="mt-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    USING ZOIKO ID IN MODERN WEB
                  </p>
                  <h2 className="mt-3 font-dm-serif text-3xl lg:text-[40px] font-normal leading-tight text-slate-900">
                    Practical
                    <br />
                    guidance
                  </h2>
                  <p className="mt-4 text-sm lg:text-base leading-relaxed text-slate-600 max-w-md">
                    Sections are anchored so you can jump straight to what you need.
                    Each describes the behaviour the platform is designed to support.
                  </p>
                </div>
              </div>

              {/* Right Column: 2-Column Grid of 5 Cards + 1 Image Card */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-5">
                  {/* Cards 1 to 5 */}
                  {guidanceCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-base font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs lg:text-sm leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  ))}

                  {/* 6th Slot: Visual Team Photo */}
                  <div className="relative rounded-2xl overflow-hidden shadow-sm min-h-[160px] bg-slate-100 border border-slate-200/80">
                    <Image
                      src="/Support-Accessibility-03-accessibility/aa7.png"
                      alt="Team discussing accessibility solutions in office meeting"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
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
        <div className="sm:hidden px-4 py-12 border-t border-slate-200/70">
          <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
            05
          </span>

          <div className="mt-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              USING ZOIKO ID ACCESSIBLY
            </p>
            <h2 className="mt-2 font-dm-serif text-2xl font-normal leading-snug text-slate-900">
              Practical guidance
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Sections are anchored so you can jump straight to what you need.
              Each describes the behaviour the platform is designed to support.
            </p>
          </div>

          {/* Stacked Cards for Mobile */}
          <div className="mt-6 space-y-3.5">
            {guidanceCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}

            {/* 3 Visual Photo Cards for Mobile */}
            <div className="pt-2 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-200/80">
                <Image
                  src="/Support-Accessibility-03-accessibility/aa12.jpg"
                  alt="Inclusive team member smiling in workspace"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-200/80">
                <Image
                  src="/Support-Accessibility-03-accessibility/aa13.jpg"
                  alt="Team collaboration around table in accessible meeting room"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/10] bg-slate-100 border border-slate-200/80">
                <Image
                  src="/Support-Accessibility-03-accessibility/aa20.jpg"
                  alt="Modern accessible office environment"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
