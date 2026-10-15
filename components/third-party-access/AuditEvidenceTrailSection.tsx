import Image from "next/image";

const evidenceItems = [
  {
    title: "Recipient Identity",
    description: "Who made the request (verified credential + org)",
  },
  {
    title: "Mandate Reference",
    description: "Which delegation was checked and its status",
  },
  {
    title: "Delegator & Approval",
    description: "Who authorized the delegation and when",
  },
  {
    title: "Action & Resource",
    description: "What was requested on what resource",
  },
  {
    title: "Scope & Evaluation",
    description: "Does action fit mandate scope? Policy applied?",
  },
  {
    title: "Decision & Timestamp",
    description:
      "Allow or deny, when, with cryptographic signature (non-repudiation)",
  },
];

export default function AuditEvidenceTrailSection() {
  return (
    <section
      id="evidence-trail"
      className="relative overflow-hidden bg-azure-9 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-[105px]"
    >
      {/* Background Graphic matching Figma */}
      <Image
        src="/third-party-access/evidence-trail-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[#071426]/75" />

      <div className="relative mx-auto flex w-full max-w-[1144px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Complete audit evidence
        </h2>

        {/* White Audit Evidence Card */}
        <div className="flex w-full flex-col gap-6 rounded-[12px] border border-mystic bg-white-solid p-6 shadow-xl sm:p-9 lg:px-[58px] lg:py-8">
          <p className="font-manrope text-base font-semibold text-[#475569] sm:text-[16px]">
            Every delegated action is logged with full context:
          </p>

          {/* 6 Full-Width Stacked Items matching Figma */}
          <div className="flex w-full flex-col gap-3.5 sm:gap-4">
            {evidenceItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3.5 rounded-[6px] bg-[#F1F5F9] px-4 py-3 sm:px-5 sm:py-3.5"
              >
                {/* 20x20 Green Check SVG Circle directly, matching Figma */}
                <Image
                  src="/third-party-access/evidence-item-1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0"
                />

                <div className="flex flex-col">
                  <h3 className="font-manrope text-[14px] font-semibold text-[#475569] sm:text-[14.5px]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-[13px] font-normal text-azure-47 sm:text-[13.6px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export-Ready Callout Banner matching Figma */}
        <div className="w-full rounded-[12px] border border-white/35 bg-white/[0.16] p-6 backdrop-blur-md sm:p-7">
          <p className="font-manrope text-base leading-relaxed text-white-solid sm:text-[16px] sm:leading-[28px]">
            <strong className="font-extrabold text-white-solid">
              Export-Ready:
            </strong>{" "}
            <span className="font-normal text-white-solid/90">
              Evidence can be extracted in compliance formats (SOC 2, ISO 27001,
              HIPAA). Regulators can inspect who did what, when, and under whose
              delegation.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
