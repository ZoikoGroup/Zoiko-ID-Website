"use client";

import React from "react";

interface DecisionRecordTableSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const tableRows = [
  {
    field: "sponsor_reference",
    description: "The accountable sponsor (synthetic in examples)",
  },
  {
    field: "policy_decision",
    description: "Allowed, denied, conditional or unknown",
  },
  {
    field: "decision_time",
    description: "When the decision was made, in UTC",
  },
  {
    field: "policy_version",
    description: "The rules that applied",
  },
  {
    field: "evidence_reference",
    description: "A pointer to the source, with restricted material redacted",
  },
];

export default function DecisionRecordTableSection({
  view = "all",
}: DecisionRecordTableSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="decision-record"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                A decision record answers why it was allowed
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82]">
                Each record names the sponsor, the decision, the time it was made, the policy version and
                the reason. Evidence is shown to authorized reviewers only, and personal data, prompts
                and secrets are removed.
              </p>
            </div>

            {/* Decision Record Table */}
            <div className="mt-12 w-full max-w-[1000px] overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0e2239] text-white">
                    <th className="py-4 px-6 font-['Manrope'] text-[13px] font-bold tracking-wider uppercase w-[35%]">
                      Field
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[13px] font-bold tracking-wider uppercase w-[65%]">
                      What it records
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf2f7]">
                  {tableRows.map((row) => (
                    <tr key={row.field} className="transition hover:bg-slate-50/70">
                      <td className="py-4 px-6 font-mono text-[13px] font-semibold text-[#0b1b33]">
                        {row.field}
                      </td>
                      <td className="py-4 px-6 font-['Manrope'] text-[13.5px] text-[#5b6b82]">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="decision-record-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-12 border-t border-[#edf2f7]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase mb-2">
            — 12 · EVIDENCE AND EXPLAINABILITY
          </p>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[29px] font-normal leading-[1.18] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            A decision record<br />
            answers<br />
            why it was allowed
          </h2>

          {/* Description */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#556987]">
            Each record names the sponsor, the decision, the time it was made, the policy version and the reason. Evidence is shown to authorized reviewers only, and personal data, prompts and secrets are removed.
          </p>

          {/* Decision Record Table */}
          <div className="mt-8 overflow-hidden rounded-[16px] border border-slate-200/80 bg-white shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafd] border-b border-slate-100">
                  <th className="py-3 px-3.5 font-['Manrope'] text-[11px] font-bold text-[#0b1b33] w-[42%]">
                    Field
                  </th>
                  <th className="py-3 px-3.5 font-['Manrope'] text-[11px] font-bold text-[#0b1b33] w-[58%]">
                    What it records
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableRows.map((row) => (
                  <tr key={row.field}>
                    <td className="py-3.5 px-3.5 font-mono text-[10.5px] font-bold text-[#0b1b33] align-top leading-snug">
                      {row.field}
                    </td>
                    <td className="py-3.5 px-3.5 font-['Manrope'] text-[11.5px] leading-relaxed text-[#556987] align-top">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
