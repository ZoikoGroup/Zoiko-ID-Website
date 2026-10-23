import React from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

const ownerRows = [
  {
    id: "operative",
    decision: (
      <>
        Operative Terms, scope,
        <br />
        governing law
      </>
    ),
    owner: "Legal Counsel",
    gate: (
      <>
        Authoritative version before
        <br />
        launch
      </>
    ),
  },
  {
    id: "contracting",
    decision: "Contracting party and entity",
    owner: "Corporate Legal",
    gate: "Exact identity verified",
  },
  {
    id: "privacy",
    decision: "Privacy and cookie boundaries",
    owner: "Privacy Counsel",
    gate: "Links and scope verified",
  },
  {
    id: "cms",
    decision: (
      <>
        CMS edition and archive
        <br />
        guarantees
      </>
    ),
    owner: "Platform and Legal Ops",
    gate: "Immutable published versions",
  },
  {
    id: "interaction",
    decision: "Interaction and accessibility",
    owner: "Design and Accessibility QA",
    gate: "WCAG 2.2 AA tested",
  },
  {
    id: "canonical",
    decision: "Canonical route and indexation",
    owner: "Web and SEO",
    gate: "Route and robots checks passed",
  },
  {
    id: "publication",
    decision: "Publication and rollback",
    owner: (
      <>
        Web Release Manager and
        <br />
        Legal
      </>
    ),
    gate: (
      <>
        Sign-off and rollback rehearsal
        <br />
        recorded
      </>
    ),
  },
];

export default function TermsOwnershipRegisterSection({ view }: SectionProps) {
  if (view === "mobile") {
    return (
      <section className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Owners Card */}
          <div className="flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Owners
            </span>
          </div>

          {/* Section 15 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              15
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Ownership and release
                <br />
                register
              </h2>
            </div>
            <div className="pt-[16.3px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                Each decision has one accountable owner and one release gate. No gate can be closed by the
                <br />
                page author alone.
              </p>
            </div>

            {/* Mobile Table */}
            <div className="mt-6 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#D9E1EC] bg-[#0A1A33]">
                      <th className="px-4 py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white whitespace-nowrap">
                        Decision or control
                      </th>
                      <th className="px-4 py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white whitespace-nowrap">
                        Accountable owner
                      </th>
                      <th className="px-4 py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white whitespace-nowrap">
                        Release gate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9E1EC]">
                    {ownerRows.map((row) => (
                      <tr key={row.id}>
                        <td className="px-4 py-3.5 align-top font-['Manrope'] text-[14px] font-bold text-[#0B1B33]">
                          {row.decision}
                        </td>
                        <td className="px-4 py-3.5 align-top font-['Manrope'] text-[14px] text-[#334155] whitespace-nowrap">
                          {row.owner}
                        </td>
                        <td className="px-4 py-3.5 align-top font-['Manrope'] text-[14px] text-[#334155]">
                          {row.gate}
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
              Owners
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Ownership and release register
          </h2>
          <div className="pt-[16.3px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              Each decision has one accountable owner and one release gate. No gate can be closed by the
              <br />
              page author alone.
            </p>
          </div>

          {/* Table with Figma exact column widths 275px / 230px / 265px */}
          <div className="mt-4 overflow-hidden rounded-[14px] border border-[#D9E1EC] bg-white">
            <div className="flex border-b border-[#D9E1EC] bg-[#0A1A33]">
              <div className="w-[275px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Decision or control
              </div>
              <div className="w-[230px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Accountable owner
              </div>
              <div className="w-[265px] shrink-0 px-[18px] py-[13.5px] font-['Manrope'] text-[13px] font-bold text-white">
                Release gate
              </div>
            </div>
            <div className="divide-y divide-[#D9E1EC]">
              {ownerRows.map((row) => (
                <div key={row.id} className="flex">
                  <div className="w-[275px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] font-bold text-[#0B1B33]">
                    {row.decision}
                  </div>
                  <div className="w-[230px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {row.owner}
                  </div>
                  <div className="w-[265px] shrink-0 px-[18px] py-3.5 font-['Manrope'] text-[15px] leading-[25.5px] text-[#334155]">
                    {row.gate}
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
