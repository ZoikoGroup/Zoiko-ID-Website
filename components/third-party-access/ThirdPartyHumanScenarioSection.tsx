import Image from "next/image";

const mandateItems = [
  {
    label: "Recipient:",
    value: "Expert Consulting (org) + auditor@expertconsulting.com",
  },
  {
    label: "Resources:",
    value: "Compliance logs, audit reports (not financial data)",
  },
  {
    label: "Actions:",
    value: "Read, download, analyze (no delete, no export outside scope)",
  },
  {
    label: "Time:",
    value: "Jan 1–30, 2026 (30 days, not renewable)",
  },
  {
    label: "Purpose:",
    value: "Security audit per engagement SOW",
  },
  {
    label: "Delegator:",
    value: "Chief Compliance Officer signs off",
  },
];

export default function ThirdPartyHumanScenarioSection() {
  return (
    <section id="human-scenario" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Scenario 1: External consultant
        </h2>

        {/* 2-Column Grid */}
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Consultant Image */}
          <div className="relative flex items-center justify-center overflow-hidden rounded-[12px] border border-mystic bg-white-solid shadow-sm">
            <Image
              src="/third-party-access/human-scenario-consultant.webp"
              alt="External consultant scenario"
              width={560}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Right: Situation, Mandate & Result */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-dm-serif text-2xl font-normal text-azure-9 sm:text-[22.4px]">
                The situation
              </h3>
              <p className="font-manrope text-[15px] font-normal leading-relaxed text-[#475569] sm:text-[16px] sm:leading-[28px]">
                <strong className="font-bold text-azure-9">Jones, Inc.</strong>{" "}
                hires{" "}
                <strong className="font-bold text-azure-9">
                  Expert Consulting
                </strong>{" "}
                to run a security audit. The auditor needs to read logs and pull
                compliance reports—but only from compliance-related systems,
                only for 30 days.
              </p>
            </div>

            {/* Delegation Mandate Box */}
            <div className="rounded-[4px] border-l-4 border-cyan-49 bg-[#F1F5F9] p-5 sm:p-6">
              <h4 className="pb-3 font-manrope text-[15px] font-semibold text-azure-9 sm:text-[16px]">
                The delegation mandate:
              </h4>
              <ul className="flex flex-col gap-2.5">
                {mandateItems.map((item) => (
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

            {/* Result Box */}
            <div className="flex items-start gap-3.5 rounded-[8px] border border-mystic bg-white-solid p-5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-49/10">
                <Image
                  src="/third-party-access/human-scenario-icon.svg"
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
                  Auditor logs in with their credential. System verifies
                  identity, checks mandate, confirms scope. Jan 31, midnight:
                  access revoked automatically. No manual cleanup needed.
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
