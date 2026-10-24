interface DesignApproachSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface ApproachCard {
  title: string;
  description: string;
}

interface ApproachSubSection {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  footnote: string;
  cards: ApproachCard[];
}

const subsections: ApproachSubSection[] = [
  {
    number: "02.1",
    eyebrow: "APPROACH POINT 1",
    title: "Perceivable content",
    description:
      "Information is presented so it can be perceived by every visitor, not only by those who see colour or hear sound.",
    footnote: "Example: a destination is never red-text alone.",
    cards: [
      {
        title: "Text alternatives",
        description:
          "Images carry textual alternatives that describe their purpose; decorative images are hidden from assistive technology.",
      },
      {
        title: "Colour and contrast",
        description:
          "Meaning is never conveyed by colour alone, and text and interface contrasts are tested against AA targets.",
      },
      {
        title: "Text resizing",
        description:
          "Content keeps its meaning when text is enlarged, without clipped or overlapping elements.",
      },
      {
        title: "Time-bound media",
        description:
          "Media that depends on sound or motion provides an equivalent text alternative.",
      },
    ],
  },
  {
    number: "02.2",
    eyebrow: "APPROACH POINT 2",
    title: "Operable Controls",
    description:
      "Every control and navigation path can be used from the keyboard, with a visible indication of where focus is.",
    footnote: "Example: tabbing from the header to the main content.",
    cards: [
      {
        title: "Keyboard reachable",
        description:
          "All interactive elements can be reached and activated without a pointing device.",
      },
      {
        title: "Visible focus",
        description:
          "The focus indicator stays visible on every focused element, meeting the approved contrast criteria.",
      },
      {
        title: "No keyboard traps",
        description:
          "Focus can always move away from a control, including dialogs and menus.",
      },
      {
        title: "Enough time",
        description:
          "Interactions do not expire without warning, and motion can be paused where it is not essential.",
      },
    ],
  },
  {
    number: "02.3",
    eyebrow: "APPROACH POINT 3",
    title: "Understandable interactions",
    description:
      "Labels, instructions and error messages are clear, and pages behave in predictable ways.",
    footnote: "Example: a form error announces relevance to field.",
    cards: [
      {
        title: "Clear labels",
        description:
          "Form fields have visible labels and descriptions that stay with the input.",
      },
      {
        title: "Errors explained",
        description:
          "Errors name the field, explain what went wrong and describe how to fix it.",
      },
      {
        title: "Predictable pages",
        description:
          "Navigation stays in the same place and does not change context unexpectedly.",
      },
      {
        title: "Plain language",
        description:
          "Short sentences, familiar terms and a clear structure of headings.",
      },
    ],
  },
  {
    number: "02.4",
    eyebrow: "APPROACH POINT 4",
    title: "Robust compatibility",
    description:
      "Pages use semantic structure so that current and future assistive technologies can read and interpret them.",
    footnote: "Example: landmark labels to a screen reader.",
    cards: [
      {
        title: "Semantic structure",
        description:
          "Headings, lists, landmarks and buttons are used for their meaning.",
      },
      {
        title: "Valid markup",
        description:
          "Markup is complete and uses names and roles that assistive technologies understand.",
      },
      {
        title: "Status messages",
        description:
          "Updates such as search results or confirmations are announced without taking focus away.",
      },
      {
        title: "Tested, not assumed",
        description:
          "Compatibility is judged by testing, and no specific assistive technology is promised.",
      },
    ],
  },
];

export default function DesignApproachSection({
  view = "all",
}: DesignApproachSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-white border-t border-slate-100">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            {/* Main Section Header */}
            <div className="max-w-[780px]">
              <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] tracking-tight text-[#071324]">
                Accessibility is part of how we design
              </h2>
              <p className="mt-4 font-manrope text-xs sm:text-[13px] leading-relaxed text-[#64748b]">
                Four points guide this design work. Each has a subsection below, with the practices behind it.
              </p>
            </div>

            {/* Subsections List (02.1, 02.2) */}
            <div className="mt-16 sm:mt-20 flex flex-col gap-20 lg:gap-24">
              {subsections.map((sub) => (
                <div
                  key={sub.number}
                  className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 pt-8 border-t border-slate-100 first:border-t-0 first:pt-0"
                >
                  {/* Left Column: Number, Eyebrow, Heading, Description, Footnote */}
                  <div className="lg:col-span-5">
                    <span className="font-dm-serif text-[68px] lg:text-[80px] font-normal leading-none text-[#dbeafe] select-none block">
                      {sub.number}
                    </span>

                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                        {sub.eyebrow}
                      </p>
                      <div className="mt-2 h-[2px] w-12 bg-[#0ea5e9]" />
                    </div>

                    <h3 className="mt-6 font-dm-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.18] tracking-tight text-[#071324]">
                      {sub.title}
                    </h3>

                    <p className="mt-4 max-w-[360px] font-manrope text-xs sm:text-[13px] leading-relaxed text-[#64748b]">
                      {sub.description}
                    </p>

                    <p className="mt-6 font-manrope text-[11.5px] text-[#94a3b8]">
                      {sub.footnote}
                    </p>
                  </div>

                  {/* Right Column: 2x2 Grid of Cards */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
                    {sub.cards.map((card) => (
                      <div
                        key={card.title}
                        className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:shadow-md"
                      >
                        <div>
                          <h4 className="font-manrope text-[14.5px] font-bold text-[#071324]">
                            {card.title}
                          </h4>
                          <p className="mt-2.5 font-manrope text-xs leading-relaxed text-[#64748b]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full">
          {/* Main Section Header */}
          <div className="bg-white px-4 pt-8 pb-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0ea5e9]"></span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                03 · ACCESSIBILITY APPROACH
              </span>
            </div>

            <h2 className="mt-3 font-dm-serif text-[26px] font-normal leading-tight text-[#071324]">
              Accessibility is part of
              <br />
              how we design
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-[#64748b]">
              Four points guide the design work. Each has its own section below,
              with the practices behind it.
            </p>
          </div>

          {/* Subsections List */}
          <div className="bg-[#F3F6FA]">
            {[
              {
                number: "03.1",
                eyebrow: "APPROACH POINT 1",
                title: "Perceivable content",
                description:
                  "Information is presented so it can be perceived by every visitor, not only by those who see colour or hear sound.",
                footnote: "Example: all styled text with a text equivalent.",
                cards: [
                  {
                    title: "Text alternatives",
                    description:
                      "Images carry text alternatives that describe their purpose; decorative images are hidden from assistive technology.",
                  },
                  {
                    title: "Colour and contrast",
                    description:
                      "Meaning is never conveyed by colour alone, and text and interface contrast are checked against the target.",
                  },
                  {
                    title: "Text resizing",
                    description:
                      "Content respects meaning when text is enlarged, without clipped or overlapping content.",
                  },
                  {
                    title: "Time-based media",
                    description:
                      "Media that depends on sound or motion provides an equivalent text alternative.",
                  },
                ],
              },
              {
                number: "03.2",
                eyebrow: "APPROACH POINT 2",
                title: "Operable controls",
                description:
                  "Every control and navigation path can be used from the keyboard, with a visible indicator of where focus is.",
                footnote: "Example: tabbing from the header to the main content",
                cards: [
                  {
                    title: "Keyboard reachable",
                    description:
                      "All interactive elements can be reached and activated without a pointing device.",
                  },
                  {
                    title: "Visible focus",
                    description:
                      "The focus indicator stays visible on every control, meeting the approved contrast criteria.",
                  },
                  {
                    title: "No keyboard trap",
                    description:
                      "Focus can always move away from a control, including dialogs and menus.",
                  },
                  {
                    title: "Enough time",
                    description:
                      "Interactions do not expire without warning, and motion can be paused where it is not essential.",
                  },
                ],
              },
              {
                number: "03.3",
                eyebrow: "APPROACH POINT 3",
                title: "Understandable interactions",
                description:
                  "Labels, instructions and error messages are clear, and pages behave in predictable ways.",
                footnote: "Example: a form error announced beside its field",
                cards: [
                  {
                    title: "Clear labels",
                    description:
                      "Form fields have visible labels and descriptions that stay with the field.",
                  },
                  {
                    title: "Errors explained",
                    description:
                      "Errors name the field, say what went wrong and describe how to fix it.",
                  },
                  {
                    title: "Predictable pages",
                    description:
                      "Navigation stays in the same place and does not change context unexpectedly.",
                  },
                  {
                    title: "Plain language",
                    description:
                      "Short sentences, familiar terms and a clear structure of headings.",
                  },
                ],
              },
              {
                number: "03.4",
                eyebrow: "APPROACH POINT 4",
                title: "Robust compatibility",
                description:
                  "Content is compatible with current and future user tools, including assistive technologies.",
                footnote: "Example: verified against standard HTML parsers",
                cards: [
                  {
                    title: "Semantic structure",
                    description:
                      "Headings, lists, tables and form controls use appropriate HTML elements.",
                  },
                  {
                    title: "Valid markup",
                    description:
                      "Clean, valid markup prevents parsing errors and ensures reliable screen-reader output.",
                  },
                  {
                    title: "Status messages",
                    description:
                      "Dynamic updates and state changes are surfaced without moving focus unexpectedly.",
                  },
                  {
                    title: "Tested, not assumed",
                    description:
                      "Compatibility is verified against real assistive technology configurations.",
                  },
                ],
              },
            ].map((sub) => (
              <div key={sub.number} className="bg-[#F3F6FA] px-4 py-8">
                <span className="font-dm-serif text-[56px] font-normal leading-none text-[#dbeafe] select-none block">
                  {sub.number}
                </span>

                <div className="mt-2">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
                    {sub.eyebrow}
                  </p>
                  <h3 className="mt-2 font-dm-serif text-[24px] font-normal leading-tight text-[#071324]">
                    {sub.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#64748b]">
                    {sub.description}
                  </p>
                  {sub.footnote && (
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                      {sub.footnote}
                    </p>
                  )}
                </div>

                {/* 4 Cards */}
                <div className="mt-6 space-y-3.5">
                  {sub.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
                    >
                      <h4 className="text-sm font-bold text-[#071324]">
                        {card.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
