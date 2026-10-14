import {
  RedSlashCircleIcon,
  AmberCalendarClockIcon,
  RedQuestionCircleIcon,
  DarkRevocationHeaderIcon,
} from "./icons";

const exceptions = [
  {
    title: "Revocation",
    subtitle:
      "Sponsor or org withdraws mandate immediately. Active sessions terminated. New requests denied. No delay.",
    icon: RedSlashCircleIcon,
    cardStyles:
      "border border-red-200/80 bg-red-50/35 sm:border-l-4 sm:border-l-red-500 sm:border-t-red-200/60 sm:border-r-red-200/60 sm:border-b-red-200/60 sm:bg-gradient-to-br sm:from-red-50/50 sm:via-white sm:to-white",
    titleColor: "text-red-600",
  },
  {
    title: "Expiry",
    subtitle:
      "Mandate time boundary reached. Automatic enforcement. No extension without new approval. Audit event logged.",
    icon: AmberCalendarClockIcon,
    cardStyles:
      "border border-amber-200/80 bg-amber-50/35 sm:border-l-4 sm:border-l-amber-500 sm:border-t-amber-200/60 sm:border-r-amber-200/60 sm:border-b-amber-200/60 sm:bg-gradient-to-br sm:from-amber-50/50 sm:via-white sm:to-white",
    titleColor: "text-amber-600",
  },
  {
    title: "Indeterminate",
    subtitle:
      "Mandate status cannot be verified (service down, stale record). Default: deny. Actor can retry or escalate.",
    icon: RedQuestionCircleIcon,
    cardStyles:
      "border border-red-200/80 bg-red-50/35 sm:border-l-4 sm:border-l-red-500 sm:border-t-red-200/60 sm:border-r-red-200/60 sm:border-b-red-200/60 sm:bg-gradient-to-br sm:from-red-50/50 sm:via-white sm:to-white",
    titleColor: "text-red-600",
  },
];

export default function RevocationSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1140px]">
        {/* Mobile Section Heading with Slashed Shield Icon */}
        <div className="mb-6 flex items-center gap-3 sm:hidden">
          <DarkRevocationHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Revocation &amp;
            <br />
            exception handling
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Revocation &amp; exception handling
        </h2>

        {/* 3 Callout Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {exceptions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 sm:p-7 ${item.cardStyles}`}
              >
                {/* Title Row with Left Icon */}
                <div className="flex items-center gap-2.5">
                  <Icon className="size-4.5 shrink-0" />
                  <h3
                    className={`font-manrope text-[14px] font-bold sm:text-base ${item.titleColor}`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p className="mt-2 font-manrope text-[12px] leading-relaxed text-azure-47 sm:mt-3 sm:text-[13px]">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
