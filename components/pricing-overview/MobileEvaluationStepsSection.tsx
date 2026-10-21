import Image from "next/image";

const steps = [
  { title: "Explore the platform", body: "Understand the capabilities and how they fit together." },
  { title: "Validate architecture and assurance", body: "Review architecture, security and privacy material with your team." },
  { title: "Discuss commercial fit", body: "Describe your scope and let sales review what applies to you." },
];

export default function MobileEvaluationStepsSection() {
  return (
    <section id="section-06" className="w-full px-[11px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="mb-[-8.7px] font-dm-serif font-normal text-[64px] leading-[64px] text-[#e0f2fe]">06</p>
        <h2 className="mb-[-8.7px] pb-[0.75px] font-dm-serif font-normal text-[30px] leading-[34.5px] text-[#2563eb]">
          Three ways to evaluate: buyer steps, not plans
        </h2>
        <div className="mb-[-8.7px] max-w-[720px] pt-[21.75px]">
          <p className="font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
            These are orientation steps for an enterprise conversation. They are not licensed tiers, packages or editions.
          </p>
        </div>
        <div className="relative h-[268.7px] w-full overflow-hidden">
          <Image
            src="/pricing-overview/mobile-explore-platform.webp"
            alt=""
            fill
            sizes="(min-width: 560px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-[34px] border-t-2 border-solid border-[#2563eb]">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-start gap-[5px] pr-[24px] pt-[23px]">
              <h3 className="w-full font-manrope font-bold text-[17px] leading-[28px] text-[#2563eb]">{s.title}</h3>
              <p className="w-full font-manrope font-normal text-[14px] leading-[23.1px] text-[#64748b]">{s.body}</p>
              <p className="w-full pb-[0.8px] pt-[6px] font-manrope font-bold text-[12px] leading-[19.8px] text-[#92400e]">
                Route pending registry
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
