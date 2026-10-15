import Image from "next/image";

interface StatusCard {
  status: string;
  borderColor: string;
  textColor: string;
  icon: string;
  description: string;
}

const statusCards: StatusCard[] = [
  {
    status: "VERIFIED",
    borderColor: "border-[#16A34A]",
    textColor: "text-[#16A34A]",
    icon: "/quickstarts/status-verified.svg",
    description:
      "Code samples tested and working. Safe to copy and run. Maintained with every release.",
  },
  {
    status: "CONCEPTUAL",
    borderColor: "border-[#F59E0B]",
    textColor: "text-[#F59E0B]",
    icon: "/quickstarts/status-conceptual.svg",
    description:
      "Pseudocode or architecture guide. Illustrates patterns. Not ready to run as-is.",
  },
  {
    status: "PLANNED",
    borderColor: "border-[#64748B]",
    textColor: "text-[#64748B]",
    icon: "/quickstarts/status-planned.svg",
    description:
      "Coming soon. Sign up to be notified when this path launches.",
  },
  {
    status: "UNSUPPORTED",
    borderColor: "border-[#DC2626]",
    textColor: "text-[#DC2626]",
    icon: "/quickstarts/status-unsupported.svg",
    description:
      "Not in scope for now. Talk to our team for a custom solution.",
  },
];

export default function StatusLegendSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#071426] sm:text-5xl lg:text-[52px]">
            Understand quickstart status
          </h2>
        </div>

        {/* Status Legend Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {statusCards.map((card) => (
            <div
              key={card.status}
              className={`flex h-full flex-col items-center rounded-[12px] border-2 ${card.borderColor} bg-white-solid p-7 text-center transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="mb-4 flex size-12 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0"
                />
              </div>

              <h4
                className={`font-manrope text-[16.8px] font-bold tracking-wide ${card.textColor}`}
              >
                {card.status}
              </h4>

              <p className="mt-3 font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
