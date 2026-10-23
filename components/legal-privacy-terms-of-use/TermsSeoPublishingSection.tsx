import React from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const seoRows = [
  {
    element: "Title",
    rule: "“Terms of Use | Zoiko iD”, pending Legal and Content approval.",
  },
  {
    element: "Description",
    rule: "Pending Legal and Content approval. No legal-regulatory claim.",
  },
  {
    element: "Heading structure",
    rule: "One H1 “Terms of Use”; H2 headings taken from operative clauses only.",
  },
  {
    element: "Canonical",
    rule: "The approved canonical URL from the Route Registry; no URL is invented here.",
  },
  {
    element: "Indexation",
    rule: "Normal indexation only for the published current version. Drafts and previews are noindex.",
  },
  {
    element: "Structured data",
    rule: "WebPage or Organization only where required properties are verified. No FAQPage. No claim of lawyer approval in markup.",
  },
];

export default function TermsSeoPublishingSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-white px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Metadata Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Metadata
            </span>
          </div>

          {/* Section 12 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              12
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                SEO, AEO and canonical
                <br />
                publishing
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Metadata uses only approved facts. Legal and SEO approval is needed for the wording and for the indexing decision.
              </p>
            </div>

            {/* Mobile Table */}
            <div className="mt-6 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#D9E1EC] bg-[#0A1A33]">
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white w-[120px]">
                        Element
                      </th>
                      <th className="px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                        Rule
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9E1EC]">
                    {seoRows.map((row) => (
                      <tr key={row.element}>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] font-bold text-[#0B1B33]">
                          {row.element}
                        </td>
                        <td className="px-[18px] py-3.5 align-top font-['Manrope'] text-[14px] leading-[23.8px] text-[#334155]">
                          {row.rule}
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
    <section className="w-full border-b border-[#D9E1EC] bg-white px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Metadata
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            SEO, AEO and canonical publishing
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Metadata uses only approved facts. Legal and SEO approval is needed for the wording and for
              <br />
              the indexing decision.
            </p>
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
            <div className="flex border-b border-[#D9E1EC] bg-[#0A1A33]">
              <div className="w-[150px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Element
              </div>
              <div className="w-[619px] px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Rule
              </div>
            </div>
            <div className="divide-y divide-[#D9E1EC]">
              {seoRows.map((row) => (
                <div key={row.element} className="flex">
                  <div className="w-[150px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] font-bold text-[#0B1B33]">
                    {row.element}
                  </div>
                  <div className="w-[619px] px-[18px] py-3.5 font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {row.rule}
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
