import React from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const placeholderClauses = [
  { id: "Clause 1", title: "heading from Legal", body: "Clause text from Legal. Not supplied." },
  { id: "Clause 2", title: "heading from Legal", body: "Clause text from Legal. Not supplied." },
  { id: "Clause n", title: "heading from Legal", body: "Clause text from Legal. Not supplied." },
];

export default function TermsClausesSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section id="clauses" className="w-full border-b border-[#D9E1EC] bg-white px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Clause index Card */}
          <div className="flex flex-col gap-[13px] rounded-[14px] border border-[#64748B]/15 bg-white p-[22px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Clause index
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Generated from Legal’s approved headings. No headings are invented here.
            </p>
            <div className="w-fit rounded-full bg-[#FEF3C7] px-3 py-1">
              <span className="font-['Manrope'] text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#92400E] whitespace-nowrap">
                Awaiting approved text
              </span>
            </div>
          </div>

          {/* Legal body content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              03
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Legal body
              </h2>
            </div>
            <div className="pt-[17px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                The operative clauses appear here exactly
                <br />
                as Legal approves them, with their
                <br />
                numbering, definitions and cross-
                <br />
                references preserved. Nothing is
                <br />
                paraphrased or summarised by the site.
              </p>
            </div>

            {/* Vertical Border Clause Items */}
            <div className="my-[27px] flex flex-col gap-[28px]">
              {placeholderClauses.map((clause) => (
                <div
                  key={clause.id}
                  className="flex flex-col gap-1.5 border-l-[3px] border-[#D9E1EC] py-1 pl-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-['Manrope'] text-[17px] font-bold leading-[28.9px] text-[#0B1B33]">
                      {clause.id}
                    </span>
                    <div className="rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                      <span className="font-['Manrope'] text-[14px] font-normal text-[#64748B]">
                        {clause.title}
                      </span>
                    </div>
                  </div>
                  <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                    {clause.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Index hidden Card */}
            <div className="flex flex-col gap-3 rounded-[16px] border border-[#D9E1EC] bg-[rgba(34,184,214,0.05)] p-[22px]">
              <div className="w-fit rounded-full border border-[#22B8D6] bg-white px-3 py-1">
                <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#3B4A63]">
                  Index hidden
                </span>
              </div>
              <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#64748B]">
                A table of contents appears only when the approved text has multiple sections. No index is shown while the body is empty.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section id="clauses" className="w-full bg-white px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside - Clause index (width: 260px) */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col gap-[13px] rounded-[14px] border border-[#64748B]/15 px-6 py-8">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Clause index
            </span>
            <p className="font-['Manrope'] text-[14px] leading-[23.8px] text-[#5B6B82]">
              Generated from Legal’s approved headings. No headings are invented here.
            </p>
            <div className="pt-1">
              <div className="w-fit rounded-full bg-[#FEF3C7] px-3 py-1">
                <span className="font-['Manrope'] text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#92400E] whitespace-nowrap">
                  Awaiting approved text
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Content (width: 770px) */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Legal body
          </h2>
          <div className="pt-[16px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              The operative clauses appear here exactly as Legal approves them, with their numbering,
              <br />
              definitions and cross-references preserved. Nothing is paraphrased or summarised by the site.
            </p>
          </div>

          {/* Vertical Border Clause Items */}
          <div className="my-[27px] flex flex-col gap-[28px]">
            {placeholderClauses.map((clause) => (
              <div
                key={clause.id}
                className="flex flex-col gap-1.5 border-l-[3px] border-[#D9E1EC] py-1 pl-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-['Manrope'] text-[17px] font-bold leading-[28.9px] text-[#0B1B33]">
                    {clause.id}
                  </span>
                  <div className="rounded-[6px] bg-[#EEF2F7] px-2 py-0.5">
                    <span className="font-['Manrope'] text-[14px] font-normal text-[#64748B]">
                      {clause.title}
                    </span>
                  </div>
                </div>
                <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#5B6B82]">
                  {clause.body}
                </p>
              </div>
            ))}
          </div>

          {/* Index hidden Card */}
          <div className="flex flex-col gap-3 rounded-[16px] border border-[#D9E1EC] bg-[rgba(34,184,214,0.05)] p-[28px_30px]">
            <div className="w-fit rounded-full border border-[#22B8D6] bg-white px-3 py-1">
              <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#3B4A63]">
                Index hidden
              </span>
            </div>
            <p className="font-['Manrope'] text-[15px] leading-[25.5px] text-[#64748B]">
              A table of contents appears only when the approved text has multiple sections. No index is shown while the body is empty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
