import Image from "next/image";

const pipelineMandate = [
  {
    label: "Recipient:",
    value: "DataFlow Inc. (service account, API key)",
  },
  {
    label: "Resources:",
    value: "Sales DB (read only) + staging warehouse (write only)",
  },
  {
    label: "Actions:",
    value:
      "Extract data, load transformed data (no delete, no access to other DBs)",
  },
  {
    label: "Time:",
    value: "Jan 1, 2026 – Dec 31, 2027 (2 years, auto-review at 12 months)",
  },
  {
    label: "Purpose:",
    value: "Daily ETL pipeline per data partnership agreement",
  },
  {
    label: "Delegator:",
    value: "VP Data signed off",
  },
];

export default function ServiceAgentScenarioSection() {
  return (
    <section id="service-scenario" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Scenario 2: Third-party data pipeline service
        </h2>

        {/* 2-Column Grid */}
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Situation & Mandate */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-dm-serif text-2xl font-normal text-azure-9 sm:text-[22.4px]">
                The situation
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-relaxed text-[#475569] sm:text-[16px] sm:leading-[28px]">
                <strong className="font-bold text-azure-9">Retailer Corp</strong>{" "}
                uses{" "}
                <strong className="font-bold text-azure-9">
                  DataFlow Inc.&apos;s
                </strong>{" "}
                cloud ETL service to pull daily sales data, transform it, and
                load it into BI platform. DataFlow&apos;s service needs read
                access to sales database and write access to the staging
                warehouse.
              </p>
            </div>

            {/* Delegation Mandate Box */}
            <div className="rounded-[4px] border-l-4 border-cyan-49 bg-[#F1F5F9] p-5 sm:p-6">
              <h4 className="border-b border-[#444444]/10 pb-3 font-manrope text-[15px] font-semibold text-cyan-49 sm:text-[16px]">
                The delegation mandate:
              </h4>
              <ul className="flex flex-col gap-2.5 pt-3">
                {pipelineMandate.map((item) => (
                  <li
                    key={item.label}
                    className="font-manrope text-[13.5px] leading-relaxed sm:text-[14.4px] sm:leading-[23px]"
                  >
                    <strong className="font-bold text-azure-9">
                      {item.label}
                    </strong>{" "}
                    <span className="font-normal text-azure-47">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Scenario Graphic & Result */}
          <div className="flex flex-col gap-6">
            <div className="relative flex items-center justify-center overflow-hidden rounded-[12px] border border-mystic bg-white-solid shadow-sm">
              <Image
                src="/third-party-access/service-agent-scenario.webp"
                alt="Service & Agent Scenario Interface"
                width={560}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Result Box (Green themed per Figma) */}
            <div className="flex items-start gap-3.5 rounded-[8px] border border-[#16A34A] bg-[#16A34A]/[0.08] p-5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#16A34A]/15">
                <Image
                  src="/third-party-access/service-scenario-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-manrope text-[15px] font-semibold text-azure-9 sm:text-[16px]">
                  Result:
                </span>
                <p className="font-manrope text-[14px] font-normal leading-relaxed text-azure-47 sm:text-[15px]">
                  DataFlow&apos;s service authenticates each morning. System
                  verifies service credential, checks mandate (still active,
                  scope matches). Runs pipeline. Logs each data read/write. If
                  DataFlow&apos;s mandate is revoked (e.g., contract ends
                  early), next run fails with 403 Forbidden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
