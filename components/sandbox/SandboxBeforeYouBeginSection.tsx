import Image from "next/image";

const checklistItems = [
  {
    icon: "/sandbox/icons/icon_334_2198.svg",
    label: "Sandbox availability to your account",
  },
  {
    icon: "/sandbox/icons/icon_334_2208.svg",
    label: "Approved access for your organization",
  },
  {
    icon: "/sandbox/icons/icon_334_2216.svg",
    label: "Integration scope to test",
  },
  {
    icon: "/sandbox/icons/icon_334_2224.svg",
    label: "Supported API or SDK version",
  },
  {
    icon: "/sandbox/icons/icon_334_2232.svg",
    label: "Testing data restrictions",
  },
];

export default function SandboxBeforeYouBeginSection() {
  return (
    <section className="bg-white-solid px-6 pt-[125px] pb-24 sm:px-10 lg:px-[120px] lg:pt-[140px] lg:pb-[105px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.30fr)] lg:gap-[60px]">
          {/* Left Column: Heading + Subtitle + Checklist */}
          <div className="flex flex-col items-start">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
              Confirm five things first
            </h2>

            <p className="mt-[11px] font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
              None of these is checked for you. Each stays Unknown until you
              <br className="hidden sm:inline" />
              confirm it against current documentation or with your account
              <br className="hidden sm:inline" />
              team.
            </p>

            {/* Checklist */}
            <div className="mt-[24px] flex w-full flex-col gap-[12px]">
              {checklistItems.map((item) => (
                <div
                  key={item.label}
                  className="flex w-full items-center justify-between gap-[14px] rounded-[12px] border border-[#E2E8F0] bg-white-solid px-[18px] py-[14px]"
                >
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <span className="font-manrope text-[15px] font-semibold leading-[24px] text-[#071426] sm:text-[16px] sm:leading-[26.4px]">
                      {item.label}
                    </span>
                  </div>

                  <span className="shrink-0 rounded-full border border-dashed border-[#94A3B8] bg-white-solid px-[10px] py-[3px] font-manrope text-[11.2px] font-extrabold uppercase leading-[18.48px] tracking-[0.05em] text-[#334155]">
                    Unknown
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[360px] w-full overflow-hidden rounded-[16px] sm:h-[460px] lg:h-[520px]">
            <Image
              src="/sandbox/team-planning-45634c.png"
              alt="Team planning at a whiteboard"
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
