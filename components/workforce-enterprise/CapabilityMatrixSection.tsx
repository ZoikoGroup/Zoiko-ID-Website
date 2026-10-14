import Image from "next/image";

interface MatrixRow {
  capability: string;
  status: "Available" | "Planned";
  notes: string;
}

const matrixRows: MatrixRow[] = [
  {
    capability: "SAML / OIDC Federation",
    status: "Available",
    notes: "Connect to customer IdP. Authenticate via their provider.",
  },
  {
    capability: "OAuth 2.0 Support",
    status: "Available",
    notes: "Third-party app integration. Token-based authorization.",
  },
  {
    capability: "SCIM 2.0 Provisioning",
    status: "Available",
    notes: "Auto-sync users, groups, roles from customer IdP.",
  },
  {
    capability: "Policy-Based Access",
    status: "Available",
    notes: "Define and enforce rules per role, org, time, location.",
  },
  {
    capability: "Audit & Evidence Logging",
    status: "Available",
    notes: "Immutable logs of all access decisions and policy changes.",
  },
  {
    capability: "Delegation & Escalation",
    status: "Available",
    notes: "Bounded, time-limited delegation with full audit trail.",
  },
  {
    capability: "Continuous Re-evaluation",
    status: "Available",
    notes: "Monitor role changes, offboarding, and policy updates.",
  },
  {
    capability: "Device Posture Checks",
    status: "Planned",
    notes: "Validate device compliance before granting access. Q2 2027.",
  },
  {
    capability: "Real-Time Risk Scoring",
    status: "Planned",
    notes: "ML-based anomaly detection. Requires partner integration. Status TBD.",
  },
];

export default function CapabilityMatrixSection() {
  return (
    <section id="capability-matrix" className="relative overflow-hidden bg-[#030712] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <Image
          src="/workforce-enterprise/statistics-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-14">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Capability & boundary matrix
        </h2>

        {/* Matrix Table */}
        <div className="w-full overflow-x-auto rounded-xl border border-mystic bg-white-solid shadow-xl">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-mystic bg-azure-9 text-white-solid">
                <th className="px-6 py-4 font-manrope text-[14.4px] font-bold">
                  Capability
                </th>
                <th className="px-6 py-4 font-manrope text-[14.4px] font-bold">
                  Status
                </th>
                <th className="px-6 py-4 font-manrope text-[14.4px] font-bold">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row, index) => (
                <tr
                  key={row.capability}
                  className={`border-b border-mystic/80 transition-colors duration-150 hover:bg-slate-50/80 ${
                    index === matrixRows.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="px-6 py-5 font-manrope text-[14.4px] font-bold text-[#475569]">
                    {row.capability}
                  </td>
                  <td className="px-6 py-5">
                    {row.status === "Available" ? (
                      <span className="inline-flex rounded-full bg-[rgba(22,163,74,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#16A34A]">
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-[rgba(245,158,11,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                        Planned
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 font-manrope text-[14.4px] font-normal leading-relaxed text-[#475569]">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
