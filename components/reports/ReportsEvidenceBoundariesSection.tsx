import Image from "next/image";

interface BoundaryCard {
  title: string;
  description: string;
}

const doShowItems: BoundaryCard[] = [
  {
    title: "Control existence & design",
    description: "Whether controls are documented and implemented",
  },
  {
    title: "Compliance status",
    description: "Adherence to stated standards and frameworks",
  },
  {
    title: "Identified weaknesses",
    description: "Gaps and areas requiring remediation",
  },
  {
    title: "Historical evidence",
    description: "Proof of controls during the audit period",
  },
];

const dontShowItems: BoundaryCard[] = [
  {
    title: "Current state guarantee",
    description: "Systems may have changed since the audit date",
  },
  {
    title: "Fiscal accuracy or legal responsibility",
    description: "Audits do not verify financial claims or legal liability",
  },
  {
    title: "Complete jurisdiction coverage",
    description: "May only cover specific regions or data centers",
  },
  {
    title: "Evidentiary admissibility",
    description: "Legal weight depends on your jurisdiction and case",
  },
];

export default function ReportsEvidenceBoundariesSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          What audit reports do & don&apos;t tell you
        </h2>

        {/* 2 Columns: What they DO show vs. What they DON'T show */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {/* Column 1: DO show */}
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <Image
                  src="/reports/evidence-do-show.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="font-dm-serif text-[20.8px] font-normal text-[#16A34A]">
                What they DO show
              </h3>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">
              {doShowItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 rounded-[6px] border-l-4 border-l-[#16A34A] bg-[rgba(22,163,74,0.05)] p-4 shadow-2xs"
                >
                  <h4 className="font-manrope text-[15.2px] font-semibold leading-[26.6px] text-[#071426]">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: DON'T show */}
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <Image
                  src="/reports/evidence-dont-show.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="font-dm-serif text-[20.8px] font-normal text-[#F59E0B]">
                What they DON&apos;T show
              </h3>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">
              {dontShowItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 rounded-[6px] border-l-4 border-l-[#F59E0B] bg-[rgba(245,158,11,0.05)] p-4 shadow-2xs"
                >
                  <h4 className="font-manrope text-[15.2px] font-semibold leading-[26.6px] text-[#071426]">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-[14.4px] font-normal leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
