"use client";

import React from "react";

interface ClaimStatusMatrixSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const matrixRows = [
  {
    family: "Authentication",
    protocol: "OAuth 2.0",
    scope: "Authorization flows",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
  {
    family: "Authentication",
    protocol: "OpenID Connect",
    scope: "Sign-in and identity claims",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
  {
    family: "Federation",
    protocol: "SAML 2.0",
    scope: "Enterprise federation",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
  {
    family: "Authentication",
    protocol: "WebAuthn / FIDO2",
    scope: "Passkey-based sign-in",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
  {
    family: "Provisioning",
    protocol: "SCIM",
    scope: "User and group lifecycle",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
  {
    family: "Events",
    protocol: "SSF / CAEP / RISC",
    scope: "Security event signals",
    status: "NOT EVALUATED",
    evidence: "Registry pending",
  },
];

export default function ClaimStatusMatrixSection({
  view = "all",
}: ClaimStatusMatrixSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="claim-status-matrix-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-24 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Each row is a claim, and each claim has a status
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                The matrix lists each protocol or profile with its scope and its evidence.
                Every row currently reads &apos;not evaluated&apos;, because the capability
                registry has not yet been confirmed for publication. Rows will be filled
                only from owner-approved evidence.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="mt-12 w-full max-w-[1100px] overflow-hidden rounded-[18px] border border-slate-200/80 bg-white shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b1c33] text-white">
                    <th className="py-4 px-6 font-['Manrope'] text-[12px] font-bold tracking-wider uppercase w-[18%]">
                      Family
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12px] font-bold tracking-wider uppercase w-[22%]">
                      Protocol or profile
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12px] font-bold tracking-wider uppercase w-[28%]">
                      Scope
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12px] font-bold tracking-wider uppercase w-[17%]">
                      Status
                    </th>
                    <th className="py-4 px-6 font-['Manrope'] text-[12px] font-bold tracking-wider uppercase w-[15%]">
                      Evidence
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edf2f7]">
                  {matrixRows.map((row) => (
                    <tr key={row.protocol} className="transition hover:bg-slate-50/70">
                      <td className="py-4 px-6 font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                        {row.family}
                      </td>
                      <td className="py-4 px-6 font-['Manrope'] text-[13.5px] font-medium text-[#0b1b33]">
                        {row.protocol}
                      </td>
                      <td className="py-4 px-6 font-['Manrope'] text-[13px] text-[#5b6b82]">
                        {row.scope}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#475569] shadow-2xs">
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-['Manrope'] text-[13px] text-[#5b6b82]">
                        {row.evidence}
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
          id="claim-status-matrix-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              04 · CAPABILITY MATRIX
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Each row is a claim, and each claim has a status
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            The matrix lists each protocol or profile with its scope and its
            evidence. Every row currently reads &apos;not evaluated&apos;,
            because the capability registry has not yet been confirmed for
            publication. Rows will be filled only from owner-approved evidence.
          </p>

          {/* Mobile Table */}
          <div className="mt-7 w-full overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f1f5f9] border-b border-slate-200/90 text-[#0b1b33]">
                  <th className="py-3 px-3.5 font-['Manrope'] text-[11px] font-bold tracking-wider uppercase w-[30%]">
                    Family
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold tracking-wider uppercase w-[35%]">
                    Protocol or profile
                  </th>
                  <th className="py-3 px-3 font-['Manrope'] text-[11px] font-bold tracking-wider uppercase w-[35%]">
                    Scope
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {matrixRows.map((row) => (
                  <tr key={row.protocol} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3.5 font-['Manrope'] text-[12px] font-bold text-[#0b1b33]">
                      {row.family}
                    </td>
                    <td className="py-3 px-3 font-['Manrope'] text-[11.5px] text-[#475569]">
                      {row.protocol}
                    </td>
                    <td className="py-3 px-3 font-['Manrope'] text-[11px] text-[#5b6b82] leading-snug">
                      {row.scope}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Filter Notice Banner */}
          <div className="mt-6 w-full rounded-full bg-[#fef3c7]/80 border border-[#fde68a] py-2 px-3 text-center">
            <span className="font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#92400e] uppercase">
              FILTERS AVAILABLE ONCE THE REGISTRY IS POPULATED
            </span>
          </div>
        </section>
      )}
    </>
  );
}
