import Image from "next/image";

const actors = [
  {
    icon: "/sandbox/icons/icon_334_2326.svg",
    title: "Person",
    description: "A human who signs in and makes a\nrequest.",
    badge: "e.g. synthetic user",
  },
  {
    icon: "/sandbox/icons/icon_334_2337.svg",
    title: "Organization",
    description: "The tenant boundary the test runs\nwithin.",
    badge: "e.g. test organization A",
  },
  {
    icon: "/sandbox/icons/icon_334_2347.svg",
    title: "Service or machine",
    description: "A non-human principal with its own\nidentity.",
    badge: "e.g. synthetic service",
  },
  {
    icon: "/sandbox/icons/icon_334_2356.svg",
    title: "Agent",
    description: "An automated principal acting under a\nmandate.",
    badge: "e.g. synthetic agent",
  },
];

export default function SandboxActorsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <h2 className="pb-[30px] font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
          Who acts, and for whom
        </h2>

        {/* 4 Actors Grid with Top Border Line */}
        <div className="border-t-[3px] border-solid border-[#444444]/10 pt-[30px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {actors.map((actor, idx) => {
              // Exact Figma column paddings and divider borders
              const paddingClasses =
                idx === 0
                  ? "lg:pr-[26px] lg:border-r lg:border-solid lg:border-[#E2E8F0]"
                  : idx === 1
                  ? "lg:px-[26px] lg:border-r lg:border-solid lg:border-[#E2E8F0]"
                  : idx === 2
                  ? "lg:px-[26px] lg:border-r lg:border-solid lg:border-[#E2E8F0]"
                  : "lg:pl-[26px]";

              return (
                <div
                  key={actor.title}
                  className={`flex flex-col items-start gap-[5.3px] ${paddingClasses}`}
                >
                  <div className="flex shrink-0 items-center justify-center">
                    <Image
                      src={actor.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="shrink-0"
                    />
                  </div>

                  <h4 className="mt-[15px] font-manrope text-[17.6px] font-bold leading-[29px] text-[#0F1B2D]">
                    {actor.title}
                  </h4>

                  <p className="whitespace-pre-line pb-[8.7px] font-manrope text-[14.9px] font-normal leading-[24.55px] text-[#64748B]">
                    {actor.description}
                  </p>

                  <span className="inline-flex rounded-[8px] bg-[#F1F5F9] px-[12px] py-[8px] font-manrope text-[13.1px] font-normal leading-[21.65px] text-[#0F1B2D]">
                    {actor.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dark Callout Banner */}
        <div className="mt-[32px] flex flex-col items-start gap-[18px] rounded-[14px] bg-[#0F1B2D] p-6 sm:p-8 lg:flex-row lg:items-center lg:p-[30px_36px]">
          <div className="flex shrink-0 items-center justify-center">
            <Image
              src="/sandbox/icons/icon_334_2367.svg"
              alt=""
              width={36}
              height={36}
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-white-solid">
              Verification is not authority.
            </h4>
            <p className="font-manrope text-[16px] font-normal leading-[26.4px] text-[#CBD5E1]">
              A verified actor still needs a mandate and a current policy decision before any action is permitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
