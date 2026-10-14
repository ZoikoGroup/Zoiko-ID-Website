import {
  VerifiedFaceScanIcon,
  SessionContextClockIcon,
  NonRepudiationLockIcon,
  DarkUserCheckHeaderIcon,
} from "./icons";

const actorCapabilities = [
  {
    title: "Verified Credentials",
    description:
      "Human identity verified through multiple factors (biometric, certificate, MFA). Non-repudiation required.",
    icon: VerifiedFaceScanIcon,
  },
  {
    title: "Session Context",
    description:
      "When did authentication occur? From which location/device? Any anomalies? All tracked.",
    icon: SessionContextClockIcon,
  },
  {
    title: "Non-Repudiation",
    description:
      "Cryptographic proof links actor to action. Actor cannot later deny they performed it.",
    icon: NonRepudiationLockIcon,
  },
];

export default function ActorIdentitySection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Mobile Section Heading with User Check Icon */}
        <div className="mb-8 flex items-center gap-3 sm:hidden">
          <DarkUserCheckHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Actor identity &amp;
            <br />
            verification
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Actor identity &amp; verification
        </h2>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {actorCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-8"
              >
                {/* Icon */}
                <div className="mb-4 flex size-10 items-center justify-start sm:mb-5 sm:justify-center">
                  <Icon className="size-6.5 text-[#22B8D6]" />
                </div>

                {/* Title */}
                <h3 className="font-manrope text-base font-bold text-azure-9 sm:text-[17px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-manrope text-[12.5px] leading-relaxed text-azure-47 sm:mt-2.5 sm:text-[13.5px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
