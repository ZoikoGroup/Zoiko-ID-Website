import Image from "next/image";

interface PrerequisiteItem {
  icon: string;
  title: string;
  description: string;
}

const prerequisites: PrerequisiteItem[] = [
  {
    icon: "/quickstarts/prereq-sandbox.svg",
    title: "Zoiko iD sandbox account",
    description:
      "Request sandbox access. We'll provision an isolated test environment and give you API keys.",
  },
  {
    icon: "/quickstarts/prereq-sdk.svg",
    title: "SDK or CLI installed",
    description:
      "Install the SDK for your language. Or use the CLI tool. Both are optional but make things faster.",
  },
  {
    icon: "/quickstarts/prereq-docs.svg",
    title: "API reference open",
    description:
      "Have our API Reference handy. Quickstarts point to specific endpoints. Reference has all the details.",
  },
];

export default function BeforeYouStartSection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      {/* Background image with exact dark overlay matching Figma */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/quickstarts/before-you-start-bg.webp')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-5xl lg:text-[52px]">
            Before you start
          </h2>
        </div>

        {/* 3 Prerequisite Cards */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {prerequisites.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-[12px] border border-[#E2E8F0] bg-white-solid p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 flex size-10 items-center justify-start">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="shrink-0"
                  />
                </div>
                <h4 className="mb-3 font-manrope text-[16.8px] font-bold text-[#071426]">
                  {item.title}
                </h4>
                <p className="font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B]">
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
