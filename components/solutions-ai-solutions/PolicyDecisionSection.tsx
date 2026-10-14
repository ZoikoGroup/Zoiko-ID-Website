import Image from "next/image";

const steps = [
  {
    title: "Agent Requests Action",
    description: '"I want to approve a $50k payment."',
  },
  {
    title: "Verify Identity",
    description: "Credential valid? Not revoked? Session anomaly?",
  },
  {
    title: "Check Mandate",
    description:
      "Does agent have valid delegation for this action? In scope?\nActive time?",
  },
  {
    title: "Apply Policy",
    description: "Organization rules. Risk signals. Rate limits. Dollar caps.",
  },
  {
    title: "Render Decision",
    description: "ALLOW or DENY. Log with full context. Return to agent.",
  },
];

export default function PolicyDecisionSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto w-full max-w-[1120px]">
        <h2 className="mb-14 text-center font-dm-serif text-3xl font-normal leading-[1.2] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Policy decision flow
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[530px_530px] lg:gap-[60px] justify-between">
          {/* Steps List - Clean transparent layout with divider lines matching Figma */}
          <div className="flex flex-col py-2 lg:py-6">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col ${
                  index !== 0 ? "border-t border-[#E2E8F0] pt-5 mt-5" : ""
                }`}
              >
                <h4 className="font-manrope text-[16.8px] font-bold leading-snug text-[#071426]">
                  {item.title}
                </h4>
                <p className="mt-1.5 whitespace-pre-line font-manrope text-[15.2px] font-normal leading-[26.6px] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Graphic Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-[12px] bg-slate-200 shadow-sm">
            <Image
              src="/solutions-ai-solutions/policy-decision.webp"
              alt="Policy decision flow graphic"
              fill
              sizes="(min-width: 1024px) 530px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
