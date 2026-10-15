import Image from "next/image";

const actionCards = [
  {
    icon: "/changelog/icons/icon_334_6809.svg",
    title: "Action required",
    description: "You should review and act before the stated date.",
  },
  {
    icon: "/changelog/icons/icon_334_6818.svg",
    title: "Review recommended",
    description: "Check whether the change applies to your integration.",
  },
  {
    icon: "/changelog/icons/icon_334_6827.svg",
    title: "No action required",
    description: "The change is recorded for awareness only.",
  },
];

export default function ChangelogBreakingChangeSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-[60px]">
          {/* Left Column: Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-[12px] sm:h-[360px]">
            <Image
              src="/changelog/developer-screen-1fb693.png"
              alt="Developer working through code on a screen"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start gap-[22px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
                Breaking changes
                <br />
                and migration
              </h2>

              <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
                Where a change may require you to act, the entry names the
                <br className="hidden sm:inline" />
                action and links to approved migration guidance. Migration steps
                <br className="hidden sm:inline" />
                and deadlines appear only when they are confirmed in the release
                <br className="hidden sm:inline" />
                record.
              </p>
            </div>

            {/* 3 Action Cards */}
            <div className="flex w-full flex-col gap-[14px]">
              {actionCards.map((card) => (
                <div
                  key={card.title}
                  className="flex w-full items-start gap-[14px] rounded-[10px] border border-[#E2E8F0] bg-white-solid p-[16px_18px]"
                >
                  <div className="flex shrink-0 items-center justify-center pt-0.5">
                    <Image
                      src={card.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                      {card.title}
                    </h4>
                    <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Callout */}
            <div className="flex w-full items-start gap-[14px] rounded-[12px] border-l-[4px] border-[#F59E0B] bg-[#FEFCE8] p-[24px_26px_22px]">
              <div className="flex shrink-0 items-center justify-center pt-0.5">
                <Image
                  src="/changelog/icons/icon_334_6836.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </div>
              <p className="font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#071426]">
                <strong className="font-bold">Compatibility not confirmed?</strong>{" "}
                If an entry does not state compatibility, the page says so. Do not
                assume a change is safe to upgrade. Contact support before you
                proceed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
