import Image from "next/image";

interface ScenarioCard {
  title: string;
  desc: string;
  image: string;
}

const scenarios: ScenarioCard[] = [
  {
    title: "Employee for employer",
    desc: "A delegate acts for their employer, within a defined mandate.",
    image: "/authority-explainers/scenario-employee.webp",
  },
  {
    title: "Supplier for customer",
    desc: "A partner acts for a customer organization for one purpose and period.",
    image: "/authority-explainers/scenario-supplier.webp",
  },
  {
    title: "Service in a workload",
    desc: "A service acts under a context assigned to its workload.",
    image: "/authority-explainers/scenario-agent.webp",
  },
  {
    title: "AI agent for a sponsor",
    desc: "An agent invokes one constrained action for an authorized sponsor.",
    image: "/authority-explainers/scenario-service.webp",
  },
];

export default function AuthorityScenariosSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            Four illustrative cases
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Each case is labelled illustrative. None confirms that a particular product or workflow is available.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white-solid shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Image banner */}
              <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 265px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-[22px]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-manrope text-base font-bold leading-6 text-[#0B1B33]">
                    {s.title}
                  </h3>
                  <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4">
                  <span className="inline-block rounded-lg bg-[#EDE9FE] px-2.5 py-1 font-manrope text-xs font-extrabold leading-[19.2px] text-[#5B21B6]">
                    Illustrative
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
