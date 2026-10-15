import Image from "next/image";

const sandboxItems = [
  {
    icon: "/sandbox/icons/icon_334_2961.svg",
    text: "Isolated test context",
  },
  {
    icon: "/sandbox/icons/icon_334_2965.svg",
    text: "Synthetic or authorized data",
  },
  {
    icon: "/sandbox/icons/icon_334_2969.svg",
    text: "Scoped test credentials",
  },
];

const productionItems = [
  {
    icon: "/sandbox/icons/icon_334_2982.svg",
    text: "Live customer identities and data",
  },
  {
    icon: "/sandbox/icons/icon_334_2986.svg",
    text: "Governed entitlements and contracts",
  },
  {
    icon: "/sandbox/icons/icon_334_2990.svg",
    text: "Operational support and change control",
  },
];

const processCards = [
  {
    icon: "/sandbox/icons/icon_334_2996.svg",
    title: "Security review",
    description: "Production credentials require signed authorization.",
  },
  {
    icon: "/sandbox/icons/icon_334_3005.svg",
    title: "Entitlements",
    description: "Confirmed in writing, not inferred from\na test.",
  },
  {
    icon: "/sandbox/icons/icon_334_3014.svg",
    title: "Integration review",
    description: "Your architecture reviewed end to\nend.",
  },
  {
    icon: "/sandbox/icons/icon_334_3023.svg",
    title: "Governance sign-off",
    description: "Operational owners approve the\nrollout.",
  },
];

export default function SandboxVsProductionSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
          Sandbox and production are different systems
        </h2>

        {/* Big Banner Graphic */}
        <div className="relative mt-[60px] h-[300px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[466px] lg:rounded-[32px]">
          <Image
            src="/sandbox/sandbox-vs-production-banner.png"
            alt="Sandbox and production infrastructure"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Comparison: Sandbox vs Production */}
        <div className="mt-[24px] grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_60px_minmax(0,1fr)] lg:gap-0">
          {/* Left Card: Sandbox */}
          <div className="flex flex-col gap-[20px] rounded-[16px] border border-[#BBF7D0] bg-[#F0FDF4] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Image
                src="/sandbox/icons/icon_334_2955.svg"
                alt=""
                width={30}
                height={30}
                className="shrink-0"
              />
              <h3 className="font-dm-serif text-[24px] font-normal leading-[39.6px] text-[#071426]">
                Sandbox
              </h3>
            </div>

            <div className="flex flex-col gap-[10px]">
              {sandboxItems.map((item) => (
                <div key={item.text} className="flex items-center gap-[10px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="font-manrope text-[15px] font-normal leading-[26.4px] text-[#475569] sm:text-[16px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: "vs" Label */}
          <div className="flex items-center justify-center py-2 lg:py-0">
            <span className="font-dm-serif text-[22.4px] font-normal leading-[36.96px] text-[#64748B]">
              vs
            </span>
          </div>

          {/* Right Card: Production */}
          <div className="flex flex-col gap-[20px] rounded-[16px] border border-[#071426] bg-[#071426] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Image
                src="/sandbox/icons/icon_334_2977.svg"
                alt=""
                width={30}
                height={30}
                className="shrink-0"
              />
              <h3 className="font-dm-serif text-[24px] font-normal leading-[39.6px] text-white-solid">
                Production
              </h3>
            </div>

            <div className="flex flex-col gap-[10px]">
              {productionItems.map((item) => (
                <div key={item.text} className="flex items-center gap-[10px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="font-manrope text-[15px] font-normal leading-[26.4px] text-[#CBD5E1] sm:text-[16px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Process / Review Step Cards */}
        <div className="mt-[24px] grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {processCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[8px] rounded-[12px] bg-[#F1F5F9] p-[20px]"
            >
              <div className="flex shrink-0 items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="shrink-0"
                />
              </div>

              <h4 className="mt-2 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                {card.title}
              </h4>

              <p className="whitespace-pre-line font-manrope text-[14.1px] font-normal leading-[23.23px] text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
