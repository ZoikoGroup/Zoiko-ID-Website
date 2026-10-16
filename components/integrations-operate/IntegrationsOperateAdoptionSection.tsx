import Image from "next/image";

interface AdoptionStep {
  icon: string;
  title: string;
  description: string;
}

const steps: AdoptionStep[] = [
  {
    icon: "/integrations-operate/icon-334_5058.svg",
    title: "Map your identity estate",
    description: "Inventory existing providers, applications, and policy consumers.",
  },
  {
    icon: "/integrations-operate/icon-334_5068.svg",
    title: "Select a pathway",
    description: "Choose the integration category that matches your goal.",
  },
  {
    icon: "/integrations-operate/icon-334_5078.svg",
    title: "Review security",
    description: "Confirm token, tenant, and revocation handling with your security team.",
  },
  {
    icon: "/integrations-operate/icon-334_5088.svg",
    title: "Validate authorized environment",
    description: "Evaluation access is arranged through an identity expert.",
  },
  {
    icon: "/integrations-operate/icon-334_5098.svg",
    title: "Operate and monitor",
    description: "Track change control, status updates, and evidence.",
  },
];

export default function IntegrationsOperateAdoptionSection() {
  return (
    <section className="bg-[#F1F5F9] px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[23px]">
        {/* Top Banner Image: Team collaborating at a whiteboard */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-[12px]">
          <Image
            src="/integrations-operate/img-f5949aaa18e68cacce279ddf9f9fc68eb54d58ec.png"
            alt="Team collaborating with laptop"
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Evaluation and migration
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Most organizations adopt Zoiko iD alongside what they already run. The five steps below are a conceptual path.
            <br className="hidden sm:block" />
            {" "}They do not imply a self-service sandbox or a released connector.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid w-full grid-cols-1 gap-4 pt-[2px] sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xs"
            >
              {/* Gradient Icon Badge */}
              <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src={step.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 min-h-[56px] font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-manrope text-[14.1px] font-normal leading-6 text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box (White solid with blue left accent) */}
        <div className="w-full rounded-[10px] border-l-4 border-[#2563EB] bg-white-solid px-[26px] pt-[26px] pb-[22px] shadow-2xs">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">No overnight replacement is required.</strong>{" "}
            Your existing identity provider can remain the source of sign-in while the trust layer is
            <br className="hidden sm:block" />
            {" "}introduced in stages.
          </p>
        </div>
      </div>
    </section>
  );
}
