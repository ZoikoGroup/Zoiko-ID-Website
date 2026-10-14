import Image from "next/image";
import type { ReactNode } from "react";

interface UseCaseCard {
  image: string;
  title: string;
  description: ReactNode;
}

const useCases: UseCaseCard[] = [
  {
    image: "/ai-agent-security/usecase-finance-automation.png",
    title: "Finance Automation",
    description: (
      <>
        AI agent processes invoices,
        <br />
        initiates payments, updates
        <br />
        ledgers. Mandate limits it to
        <br />
        approved vendors and amounts.
        <br />
        Sponsor is Finance Manager.
      </>
    ),
  },
  {
    image: "/ai-agent-security/usecase-content-moderation.png",
    title: "Content Moderation",
    description: (
      <>
        AI agent reviews user-generated
        <br />
        content, tags violations, escalates
        <br />
        cases. Mandate defines review
        <br />
        scope and escalation thresholds.
        <br />
        Time-limited.
      </>
    ),
  },
  {
    image: "/ai-agent-security/usecase-data-pipeline.png",
    title: "Data Pipeline",
    description: (
      <>
        AI agent extracts data from source
        <br />
        systems, transforms, and loads
        <br />
        into warehouse. Mandate specifies
        <br />
        datasets, transformation rules,
        <br />
        and retention policy.
      </>
    ),
  },
];

export default function AgentUseCasesSection() {
  return (
    <section
      id="common-patterns"
      className="bg-[#F1F5F9] px-6 py-[105px] sm:px-10 lg:px-[160px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Common AI agent patterns
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white transition-all duration-200 hover:shadow-md"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 352px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col bg-white p-[32px]">
                <h3 className="mb-3 font-dm-serif text-[19.2px] font-normal leading-normal text-[#071426]">
                  {item.title}
                </h3>
                <p className="pb-5 font-manrope text-[16px] font-normal leading-[28px] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

