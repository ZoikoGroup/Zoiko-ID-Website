import React from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const testRows = [
  {
    test: "AT-01–AT-05",
    condition:
      "Exact label and breadcrumb; version and effective date from the approved record; publication blocked without legal approval; no invented provisions; publishing entity verified.",
  },
  {
    test: "AT-06–AT-10",
    condition:
      "Exact headings and clause order; stable unique anchors; skip link to main; TOC generated from approved hierarchy; 320 px reflow without horizontal scroll.",
  },
  {
    test: "AT-11–AT-15",
    condition:
      "Usable at 200% and 400% zoom; focus visible and not obscured; landmarks announced; AA contrast.",
  },
  {
    test: "AT-16–AT-20",
    condition:
      "Print retains metadata and clauses; no clipped text across pages; PDF button hidden unless it matches the version; archived versions marked and linked to current.",
  },
  {
    test: "AT-21–AT-25",
    condition:
      "Current and archive do not share a content ID; edits need re-approval; rollback to last approved snapshot; drafts hidden from indexers; canonical matches Route Registry.",
  },
  {
    test: "AT-26–AT-30",
    condition:
      "Crosslinks point only to published pages; unpublished notices omitted; Privacy Notice distinct; Cookie Notice and Cookie Settings distinct; no unsupported legal-advice claim.",
  },
  {
    test: "AT-31–AT-35",
    condition:
      "No fake dates, countries or jurisdictions; no fake contact or turnaround; enquiry routing to an approved destination; analytics free of enquiry text; no consent inferred from pageview.",
  },
  {
    test: "AT-36–AT-40",
    condition:
      "Public access without authentication; translation only from an approved record; CMS roles enforced; audit log of approver, version, timestamp and rollback; SEO and structured data contain approved facts only.",
  },
];

export default function TermsAcceptanceTestsSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Test matrix Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Test matrix
            </span>
          </div>

          {/* Section 13 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              13
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Engineering acceptance
                <br />
                tests
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Each test is pass or fail. The full set of forty must pass before publication. Tests are grouped by what they protect.
              </p>
            </div>

            {/* Mobile Table */}
            <div className="mt-6 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#D9E1EC] bg-[#0A1A33]">
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white w-[120px]">
                        Test
                      </th>
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                        Condition
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9E1EC]">
                    {testRows.map((row) => (
                      <tr key={row.test}>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] font-bold text-[#0B1B33] whitespace-nowrap">
                          {row.test}
                        </td>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] leading-[23.8px] text-[#334155]">
                          {row.condition}
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
              Test matrix
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Engineering acceptance tests
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Each test is pass or fail. The full set of forty must pass before publication. Tests are grouped by what they protect.
            </p>
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
            <div className="flex border-b border-[#D9E1EC] bg-[#0A1A33]">
              <div className="w-[150px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Test
              </div>
              <div className="w-[619px] px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Condition
              </div>
            </div>
            <div className="divide-y divide-[#D9E1EC]">
              {testRows.map((row) => (
                <div key={row.test} className="flex">
                  <div className="w-[150px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] font-bold text-[#0B1B33]">
                    {row.test}
                  </div>
                  <div className="w-[619px] px-[18px] py-3.5 font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {row.condition}
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
