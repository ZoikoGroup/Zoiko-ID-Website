import Image from "next/image";
import type { ReactNode } from "react";

interface PipelineStage {
  icon: string;
  label: string;
}

const pipelineStages: PipelineStage[] = [
  {
    icon: "/workforce-enterprise/integration-idp.svg",
    label: "Your IdP",
  },
  {
    icon: "/workforce-enterprise/integration-org-context.svg",
    label: "Org Context",
  },
  {
    icon: "/workforce-enterprise/integration-policy-decision.svg",
    label: "Policy Decision",
  },
  {
    icon: "/workforce-enterprise/integration-audit-evidence.svg",
    label: "Audit Evidence",
  },
];

interface IntegrationMethod {
  icon: string;
  title: string;
  description: ReactNode;
  status: string;
}

const integrationMethods: IntegrationMethod[] = [
  {
    icon: "/workforce-enterprise/integration-rest-api.svg",
    title: "REST API",
    description: (
      <>
        Query org context, evaluate access,
        <br />
        fetch evidence. Request status:
      </>
    ),
    status: "Available",
  },
  {
    icon: "/workforce-enterprise/integration-scim.svg",
    title: "SCIM Provisioning",
    description: (
      <>
        Sync users, groups, roles from IdP. Real-
        <br />
        time updates. Status:
      </>
    ),
    status: "Available",
  },
  {
    icon: "/workforce-enterprise/integration-webhooks.svg",
    title: "Webhooks",
    description: (
      <>
        Real-time notifications on role changes,
        <br />
        offboarding, access decisions. Status:
      </>
    ),
    status: "Available",
  },
];

export default function IntegrationPathSection() {
  return (
    <section id="integration-path" className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-12">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Integration evaluation path
        </h2>

        {/* Pipeline Diagram Box */}
        <div className="w-full overflow-x-auto rounded-xl border border-mystic bg-[#22B8D6]/[0.05] p-8 sm:p-10">
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
                  <span className="font-manrope text-[14.4px] font-semibold text-[#475569]">
                    {stage.label}
                  </span>
                </div>

                {idx < pipelineStages.length - 1 && (
                  <span className="shrink-0 font-manrope text-2xl font-normal text-cyan-49">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 Integration Method Cards */}
        <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[32px]">
          {integrationMethods.map((method) => (
            <div
              key={method.title}
              className="flex h-[293px] w-full lg:w-[352px] flex-col items-start justify-between rounded-xl border border-mystic bg-white-solid p-7 text-left shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)] transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col items-start text-left">
                <div className="mb-4 flex h-8 w-8 items-center justify-start">
                  <Image
                    src={method.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>

                <h4 className="mb-2 font-manrope text-[16.8px] font-bold leading-snug text-azure-9 text-left">
                  {method.title}
                </h4>

                <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-azure-47 text-left">
                  {method.description}
                </p>
              </div>

              <div className="self-start pt-2">
                <span className="inline-flex rounded-full bg-[rgba(22,163,74,0.15)] px-3 py-1 font-manrope text-xs font-bold uppercase tracking-[0.05em] text-[#16A34A]">
                  {method.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
