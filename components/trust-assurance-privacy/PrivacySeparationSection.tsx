import Image from "next/image";

interface SeparationCard {
  title: string;
  description: string;
  icon: string;
}

const concepts: SeparationCard[] = [
  {
    title: "Opt-in preference",
    description: "A person's stated choice about optional features.",
    icon: "/trust-assurance-privacy/separation-icon-1.svg",
  },
  {
    title: "Legal basis",
    description: "The statutory reason a processing activity is lawful. Set by Legal.",
    icon: "/trust-assurance-privacy/separation-icon-2.svg",
  },
  {
    title: "Business mandate",
    description: "An organization's explicit grant of authority to an actor.",
    icon: "/trust-assurance-privacy/separation-icon-3.svg",
  },
  {
    title: "Policy evaluation",
    description: "The decision made against current policy and context.",
    icon: "/trust-assurance-privacy/separation-icon-4.svg",
  },
];

export default function PrivacySeparationSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            Five concepts that are often confused
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            Each concept answers a different question. None of them can stand in
            for another. Legal basis examples require approval from Legal before
            publication.
          </p>
        </div>

        {/* 4 Cards Grid with Connected Borders */}
        <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] overflow-hidden rounded-[16px] border border-[#CBD5E1] bg-white shadow-xs sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {concepts.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between p-6 sm:p-7 transition-colors duration-200 hover:bg-[#F8FAFC]"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-5 flex size-12 items-center justify-center rounded-[14px] bg-[#E0F2FE]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="size-6 shrink-0"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 font-manrope text-[17px] font-bold text-[#071426]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
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
