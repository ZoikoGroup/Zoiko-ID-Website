import Image from "next/image";

interface AnatomyRow {
  label: string;
  value: string;
}

const ANATOMY_ROWS: AnatomyRow[] = [
  { label: "Actor", value: "Verified identity reference" },
  { label: "Authority", value: "Grant reference, scope and expiry" },
  { label: "Decision basis", value: "Policy version and inputs considered" },
  { label: "Context", value: "Relevant trust signal, if any" },
  { label: "Source", value: "Originating service" },
  { label: "Timestamp", value: "Time of decision" },
];

export default function SecurityEvidenceSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[50px]">
        {/* Header: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
              Reviewable without<br className="hidden sm:inline" /> over-collecting
            </h2>
          </div>
          <div className="pt-[2px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              Evidence is useful when a reviewer can identify the actor, the decision basis, the policy context and the relevant changes. Only minimal fields are described here, and access is controlled.
            </p>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          {/* Left Column: Image + Scope Callout */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[331px] rounded-[18px] overflow-hidden shadow-sm">
              <Image
                src="/security/img-a12afe6df5cf7140950e129a48fbf01fdfa9e105.png"
                alt="Analytics charts on a laptop"
                fill
                className="object-cover"
              />
            </div>

            {/* Scope and Retention Box */}
            <div className="p-4 sm:p-5 sm:px-6 rounded-r-[12px] bg-[#FFFBEB] border-l-4 border-[#F59E0B]">
              <p className="font-manrope text-[15px] leading-[24px] text-[#92400E]">
                <strong className="font-bold text-[#0B1B33]">Scope and retention.</strong>{" "}
                No tamper-proof, indefinite-retention or export claim is made. Retention is set by the approved privacy policy.
              </p>
            </div>
          </div>

          {/* Right Column: Decision Record Anatomy Card */}
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] overflow-hidden shadow-sm">
            {/* Card Header */}
            <div className="bg-[#F1F5F9] px-[22px] py-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <h4 className="font-manrope font-bold text-[16px] leading-[25.6px] text-[#0B1B33]">
                Decision record anatomy
              </h4>
              <span className="px-[11px] py-[4px] rounded-full bg-[#EDE9FE] font-manrope font-extrabold text-[11px] leading-[17.6px] text-[#5B21B6]">
                Illustrative schema
              </span>
            </div>

            {/* Card Rows */}
            <div className="divide-y divide-[#E2E8F0]">
              {ANATOMY_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="px-[22px] py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] sm:w-[180px] shrink-0">
                    {row.label}
                  </span>
                  <span className="font-manrope text-[15px] leading-[24px] text-[#64748B] flex-1">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
