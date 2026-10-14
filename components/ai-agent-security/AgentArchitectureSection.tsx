import Image from "next/image";

interface PipelineStage {
  icon: string;
  label: string;
}

const pipelineStages: PipelineStage[] = [
  {
    icon: "/ai-agent-security/arch-ai-agent.svg",
    label: "AI Agent",
  },
  {
    icon: "/ai-agent-security/arch-identity-auth.svg",
    label: "Identity & Auth",
  },
  {
    icon: "/ai-agent-security/arch-mandate-policy.svg",
    label: "Mandate & Policy",
  },
  {
    icon: "/ai-agent-security/arch-audit-evidence.svg",
    label: "Audit & Evidence",
  },
];

export default function AgentArchitectureSection() {
  return (
    <section
      id="architecture"
      className="bg-[rgba(255,255,255,1)] px-6 py-[105px] sm:px-10 lg:px-[160px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Architecture & integration
          </h2>
          <p className="pt-5 text-center font-manrope text-base font-normal leading-[28px] text-[#64748B] lg:whitespace-nowrap">
            AI agent security sits at the intersection of identity infrastructure, policy engines, and application authorization layers.
          </p>
        </div>

        {/* Pipeline Diagram Box */}
        <div className="w-full overflow-x-auto rounded-[12px] border border-[#22B8D6] bg-[rgba(34,184,214,0.05)] p-6 sm:p-10">
          <div className="mx-auto flex min-w-[700px] items-center justify-between gap-5">
            {pipelineStages.map((stage, idx) => (
              <div key={stage.label} className="contents">
                <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <Image
                      src={stage.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <span className="font-manrope text-[14.4px] font-semibold leading-[25.2px] text-[#475569]">
                    {stage.label}
                  </span>
                </div>

                {idx < pipelineStages.length - 1 && (
                  <span className="shrink-0 font-manrope text-[24px] font-normal leading-none text-[#22B8D6]">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Architecture Cards */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Mandate API */}
          <div className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-[28px] text-left transition-all duration-200 hover:shadow-md">
            <div className="pt-[9.36px] pb-[18.64px]">
              <Image
                src="/ai-agent-security/arch-mandate-api.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>

            <div className="pb-3">
              <h3 className="font-manrope text-[16.8px] font-bold leading-normal text-[#071426]">
                Mandate API
              </h3>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                Create, revoke, and query AI agent
                <br />
                mandates. Real-time updates. Status:
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center rounded-full bg-[rgba(245,158,11,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                  Available subject to validation
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Authorization Sync */}
          <div className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-[28px] text-left transition-all duration-200 hover:shadow-md">
            <div className="pt-[9.36px] pb-[18.64px]">
              <Image
                src="/ai-agent-security/arch-authz-sync.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>

            <div className="pb-3">
              <h3 className="font-manrope text-[16.8px] font-bold leading-normal text-[#071426]">
                Authorization Sync
              </h3>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                Sync mandate state with identity
                <br />
                systems and policy engines. Cascading
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                  revocation. Status:
                </span>
                <span className="inline-flex items-center rounded-full bg-[rgba(245,158,11,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                  Planned
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Event Webhooks */}
          <div className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white p-[28px] text-left transition-all duration-200 hover:shadow-md">
            <div className="pt-[9.36px] pb-[18.64px]">
              <Image
                src="/ai-agent-security/arch-event-webhooks.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>

            <div className="pb-3">
              <h3 className="font-manrope text-[16.8px] font-bold leading-normal text-[#071426]">
                Event Webhooks
              </h3>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                Real-time notifications on mandate
                <br />
                changes, revocations, and policy
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                  updates. Status:
                </span>
                <span className="inline-flex items-center rounded-full bg-[rgba(245,158,11,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#F59E0B]">
                  Planned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

