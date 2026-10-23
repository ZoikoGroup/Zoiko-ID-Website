import Image from "next/image";

const steps = [
  { title: "Explore the platform", body: "Understand the capabilities and how they fit together." },
  { title: "Validate architecture and assurance", body: "Review architecture, security and privacy material with your team." },
  { title: "Discuss commercial fit", body: "Describe your scope and let sales review what applies to you." },
];

export default function DesktopEvaluateSection() {
  return (
    <section
      id="section-06"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-dm-serif text-[96px] font-normal leading-[96px] text-[#e0f2fe]">06</p>
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
          Three ways to evaluate: buyer steps, not plans
        </h2>
        <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#64748b]">
          These are orientation steps for an enterprise conversation. They are not licensed tiers, packages or editions.
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-[34px]">
        <div className="relative h-[389px] w-full">
          <Image
            src="/pricing-overview/desktop-explore-platform.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 770px, 60vw"
            className="object-cover"
          />
        </div>
        <ul className="flex w-full items-start border-t-2 border-solid border-[#07111f]">
          {steps.map((s) => (
            <li key={s.title} className="flex min-w-px flex-1 flex-col items-start gap-[5px] pb-[28px] pr-[24px] pt-[23px]">
              <h3 className="w-full font-manrope text-[17px] font-bold leading-[28px] text-[#07111f]">{s.title}</h3>
              <p className="w-full font-manrope text-[14px] font-normal leading-[23.1px] text-[#64748b]">{s.body}</p>
              <p className="w-full pt-[6px] font-manrope text-[12px] font-bold leading-[19.8px] text-[#92400e]">
                Route pending registry
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
