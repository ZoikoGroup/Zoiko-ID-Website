"use client";

import React from "react";

interface PatternTouchpointsMatrixSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const matrixData = [
  {
    pattern: "Application authentication",
    idp: "Yes",
    app: "Yes",
    gateway: "Optional",
    orch: "No",
  },
  {
    pattern: "Enterprise federation",
    idp: "Yes",
    app: "Yes",
    gateway: "Optional",
    orch: "No",
  },
  {
    pattern: "Delegated third-party access",
    idp: "Optional",
    app: "Yes",
    gateway: "Yes",
    orch: "No",
  },
  {
    pattern: "Machine and workload identity",
    idp: "Optional",
    app: "Yes",
    gateway: "Yes",
    orch: "No",
  },
  {
    pattern: "AI-agent identity",
    idp: "Optional",
    app: "Yes",
    gateway: "Yes",
    orch: "Yes",
  },
  {
    pattern: "Verifiable credentials",
    idp: "Optional",
    app: "Yes",
    gateway: "No",
    orch: "No",
  },
  {
    pattern: "Continuous access",
    idp: "Yes",
    app: "Yes",
    gateway: "Optional",
    orch: "No",
  },
  {
    pattern: "Evidence and audit",
    idp: "Optional",
    app: "Yes",
    gateway: "Optional",
    orch: "Optional",
  },
];

export default function PatternTouchpointsMatrixSection({
  view = "all",
}: PatternTouchpointsMatrixSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION (UNTOUCHED) ================= */}
      {showDesktop && (
        <section
          id="pattern-touchpoints"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-16 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <h2
              className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Which touchpoints each pattern uses
            </h2>

            <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[720px]">
              The matrix maps each pattern to the touchpoints it involves: your identity provider, your
              application, an API gateway, and any orchestration layer. Entries are conceptual until
              confirmed for your stack.
            </p>

            {/* Matrix Table */}
            <div className="mt-10 w-full overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b1c34] text-white">
                    <th className="py-4 px-6 font-['Manrope'] text-[12.5px] font-semibold tracking-wider text-slate-200">
                      Pattern
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12.5px] font-semibold tracking-wider text-slate-200">
                      Identity provider
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12.5px] font-semibold tracking-wider text-slate-200">
                      Application
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12.5px] font-semibold tracking-wider text-slate-200">
                      API gateway
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12.5px] font-semibold tracking-wider text-slate-200">
                      Orchestration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-['Manrope'] text-[13.5px]">
                  {matrixData.map((row, idx) => (
                    <tr
                      key={row.pattern}
                      className={idx % 2 === 0 ? "bg-white hover:bg-slate-50/70" : "bg-[#fbfcfd] hover:bg-slate-50/70"}
                    >
                      <td className="py-3.5 px-6 font-bold text-[#0b1b33]">
                        {row.pattern}
                      </td>
                      <td className="py-3.5 px-6 text-[#5b6b82]">
                        {row.idp}
                      </td>
                      <td className="py-3.5 px-6 text-[#5b6b82]">
                        {row.app}
                      </td>
                      <td className="py-3.5 px-6 text-[#5b6b82]">
                        {row.gateway}
                      </td>
                      <td className="py-3.5 px-6 text-[#5b6b82]">
                        {row.orch}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION (ONLY SHOWN ON MOBILE) ================= */}
      {showMobile && (
        <section
          id="pattern-touchpoints-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-10 border-t border-slate-200/80"
        >
          {/* Top Label */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#0088cc]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#0088cc] uppercase">
              AP-14 · Selection Matrix
            </span>
          </div>

          <h2
            className="mt-4 font-dm-serif font-['DM_Serif_Display'] text-[28px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Which touchpoints each pattern uses
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            The matrix maps each pattern to the touchpoints it involves: your identity provider, your application, an API gateway, and any orchestration layer. Entries are conceptual until confirmed for your stack.
          </p>

          {/* Horizontally scrollable Table for mobile */}
          <div className="mt-6 w-full overflow-x-auto rounded-[16px] border border-slate-200/90 bg-white shadow-2xs">
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead>
                <tr className="bg-[#edf2f7] text-[#0b1b33]">
                  <th className="py-3 px-4 font-['Manrope'] text-[11px] font-bold text-[#0b1b33]">
                    Pattern
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold text-[#0b1b33]">
                    Identity<br />provider
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold text-[#0b1b33]">
                    Application
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold text-[#0b1b33]">
                    API Gateway
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold text-[#0b1b33]">
                    Orchestration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-['Manrope'] text-[12px]">
                {matrixData.map((row) => (
                  <tr key={row.pattern} className="bg-white hover:bg-slate-50/50">
                    <td className="py-2.5 px-4 font-bold text-[#0b1b33] leading-snug">
                      {row.pattern}
                    </td>
                    <td className="py-2.5 px-3 text-[#5b6b82]">
                      {row.idp}
                    </td>
                    <td className="py-2.5 px-3 text-[#5b6b82]">
                      {row.app}
                    </td>
                    <td className="py-2.5 px-3 text-[#5b6b82]">
                      {row.gateway}
                    </td>
                    <td className="py-2.5 px-3 text-[#5b6b82]">
                      {row.orch}
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
