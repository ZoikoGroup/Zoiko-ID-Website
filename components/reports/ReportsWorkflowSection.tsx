import Image from "next/image";

interface WorkflowStep {
  number: string;
  title: string;
  icon: string;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    number: "1",
    title: "1. Plan",
    icon: "/reports/workflow-plan.svg",
    description: "Annual audit scheduled. Scope and objectives defined.",
  },
  {
    number: "2",
    title: "2. Assess",
    icon: "/reports/workflow-assess.svg",
    description:
      "Auditor examines controls and processes. Interviews and testing conducted.",
  },
  {
    number: "3",
    title: "3. Report",
    icon: "/reports/workflow-report.svg",
    description: "Formal findings and opinions issued. Remediation noted.",
  },
  {
    number: "4",
    title: "4. Registry",
    icon: "/reports/workflow-registry.svg",
    description: "Report listed with metadata. Access controlled per policy.",
  },
  {
    number: "5",
    title: "5. Share",
    icon: "/reports/workflow-share.svg",
    description: "Authorized users can access. Requests logged and reviewed.",
  },
];

export default function ReportsWorkflowSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          How audit reports are managed
        </h2>

        {/* 5 Step Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[294px] flex-col items-center gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              {/* Icon Badge */}
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#22B8D6_0%,#2563EB_100%)] shadow-sm">
                <Image
                  src={step.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="brightness-0 invert"
                />
              </div>

              {/* Title */}
              <h3 className="pt-1 font-manrope text-base font-bold text-[#071426]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
