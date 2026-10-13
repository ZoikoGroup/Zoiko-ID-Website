import Image from "next/image";

const includesItems = [
  "Actor identity (who requested)",
  "Requested action and resource",
  "Active organization context",
  "Applied policy & version",
  "Authority/mandate status",
  "Risk signals considered",
  "Timestamp of decision",
  "Outcome and reason",
];

const dontShowItems = [
  "Fraud detection rules (avoid teaching attackers)",
  "Internal risk scoring algorithms",
  "Other users' access decisions",
  "Unrelated organization data",
  "Raw authentication factors",
  "Sensitive backend system details",
];

export default function EvidenceExplainabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <Image
        src="/b2b-saas/Section - 5. STATISTICS (Light Background) (1).png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[56px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Evidence &amp; explainability
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[60px]">
          {/* Left card: Decision Evidence Includes */}
          <div className="flex flex-col gap-5 rounded-xl border border-grey-91 bg-white-solid p-7 sm:p-8">
            <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
              Decision Evidence Includes
            </h3>

            <ul className="flex flex-col gap-2.5">
              {includesItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-manrope text-base font-normal leading-7 text-azure-47"
                >
                  <span className="select-none text-azure-47">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card: What We Don't Show */}
          <div className="flex flex-col gap-5 rounded-xl border border-cyan-49 bg-linear-to-br from-cyan-49/[0.05] to-azure-48/[0.03] p-7 sm:p-8 backdrop-blur-sm">
            <h3 className="font-manrope text-[16.8px] font-bold text-cyan-49">
              What We Don't Show
            </h3>

            <ul className="flex flex-col gap-2.5">
              {dontShowItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 font-manrope text-base font-normal leading-7 text-white-solid/90"
                >
                  <span className="select-none text-cyan-49">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
