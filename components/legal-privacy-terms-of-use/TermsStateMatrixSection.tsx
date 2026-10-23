import React from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const stateRows = [
  {
    state: "Published, current",
    readerSees: "The current approved document with its metadata.",
  },
  {
    state: "Draft or pending approval",
    readerSees: "Not public. Preview is limited to authorised editors.",
  },
  {
    state: "Superseded",
    readerSees:
      "Archived link, labelled “Historical version”, with its effective range and a link to the current version.",
  },
  {
    state: "Content missing or corrupted",
    readerSees: "Fails closed. No summary is invented; the owner is alerted.",
  },
  {
    state: "Legal source unavailable",
    readerSees:
      "Last verified approved snapshot, if governance allows it. No unverified cache.",
  },
  {
    state: "No archive available",
    readerSees: "Archive block hidden. No entries are manufactured.",
  },
  {
    state: "Related link unavailable",
    readerSees: "Suppressed, or marked unavailable. Never redirected to an unrelated page.",
  },
  {
    state: "Translation not approved",
    readerSees:
      "Approved language is shown with an accurate label. Binding text is never auto-translated.",
  },
  {
    state: "Print or download failure",
    readerSees: "Readable HTML stays available, with an accessible retry message.",
  },
  {
    state: "CMS permission denied",
    readerSees:
      "No draft content is exposed. An accessible notice is shown, and an audit event is logged.",
  },
];

export default function TermsStateMatrixSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - State matrix Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              State matrix
            </span>
          </div>

          {/* Section 14 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              14
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                State and exception
                <br />
                matrix
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Each state has one defined outcome. None of them shows fabricated content.
              </p>
            </div>

            {/* Mobile Table */}
            <div className="mt-6 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#D9E1EC] bg-[#0A1A33]">
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white w-[130px]">
                        State
                      </th>
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                        What the reader sees
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9E1EC]">
                    {stateRows.map((row) => (
                      <tr key={row.state}>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] font-bold text-[#0B1B33]">
                          {row.state}
                        </td>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] leading-[23.8px] text-[#334155]">
                          {row.readerSees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section className="w-full bg-[#F8FAFC] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              State matrix
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            State and exception matrix
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Each state has one defined outcome. None of them shows fabricated content.
            </p>
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
            <div className="flex border-b border-[#D9E1EC] bg-[#0A1A33]">
              <div className="w-[217.34px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                State
              </div>
              <div className="w-[551.66px] px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                What the reader sees
              </div>
            </div>
            <div className="divide-y divide-[#D9E1EC]">
              {stateRows.map((row) => (
                <div key={row.state} className="flex">
                  <div className="w-[217.34px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] font-bold text-[#0B1B33]">
                    {row.state}
                  </div>
                  <div className="w-[551.66px] px-[18px] py-3.5 font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {row.readerSees}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
