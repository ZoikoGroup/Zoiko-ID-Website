interface StatusCard {
  badge: string;
  badgeBg: string;
  badgeColor: string;
  borderColor: string;
  title: string;
  description: string;
}

const statusCards: StatusCard[] = [
  {
    badge: "v1",
    badgeBg: "bg-[rgba(22,163,74,0.15)]",
    badgeColor: "text-[#16A34A]",
    borderColor: "border-[#16A34A]",
    title: "Stable",
    description: "Production ready. No breaking changes.\nSafe to use.",
  },
  {
    badge: "beta",
    badgeBg: "bg-[rgba(245,158,11,0.15)]",
    badgeColor: "text-[#F59E0B]",
    borderColor: "border-[#F59E0B]",
    title: "Beta",
    description: "Testing phase. May change. Feedback\nwelcome.",
  },
  {
    badge: "deprecated",
    badgeBg: "bg-[rgba(220,38,38,0.15)]",
    badgeColor: "text-[#DC2626]",
    borderColor: "border-[#DC2626]",
    title: "Deprecated",
    description: "Will be removed. Migrate to new version\nnow.",
  },
];

const policyItems = [
  {
    label: "Stable (v1, v2, ...):",
    desc: " No breaking changes. Backward compatible. Safe for production.",
  },
  {
    label: "Beta:",
    desc: " Features may change. Use for testing, not production. Feedback helps us improve.",
  },
  {
    label: "Deprecated:",
    desc: " Exists for 12 months after deprecation date. Migrate to new version before sunset date.",
  },
  {
    label: "Sunset:",
    desc: " Removed entirely. Old version stops responding. No further support.",
  },
];

export default function ApiReferenceVersioningSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-6">
        {/* Section Heading */}
        <div className="flex w-full justify-center">
          <h2 className="w-full max-w-[643.12px] text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-5xl lg:text-[52px] lg:leading-[71.3px]">
            Versioning and deprecation
          </h2>
        </div>

        {/* 3 Status Cards Row */}
        <div className="self-stretch pt-9 flex flex-wrap lg:flex-nowrap justify-center items-center gap-8">
          {statusCards.map((card, idx) => (
            <div
              key={idx}
              className={`w-full max-w-[352px] lg:w-80 flex flex-col justify-start items-center gap-[15px] rounded-xl border-2 ${card.borderColor} bg-white-solid px-[30px] py-[29px] text-center shadow-xs transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className={`inline-flex justify-center items-center px-3 py-1 rounded-[20px] ${card.badgeBg}`}>
                <span
                  className={`text-center justify-center ${card.badgeColor} font-manrope text-xs font-bold uppercase tracking-[0.05em]`}
                >
                  {card.badge}
                </span>
              </div>

              <div className="self-stretch flex flex-col justify-start items-center gap-1">
                <h3 className="text-center font-manrope text-[16.8px] font-bold leading-[22.95px] text-[#071426]">
                  {card.title}
                </h3>
              </div>

              <div className="self-stretch flex flex-col justify-start items-center gap-1">
                <p className="text-center font-manrope text-[14.4px] font-normal leading-[25.2px] text-[#64748B] whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Box */}
        <div className="self-stretch mt-4 flex w-full flex-col gap-5 rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] px-6 py-8 sm:px-12">
          <div className="self-stretch flex flex-col justify-start items-start">
            <h3 className="font-dm-serif text-[22.4px] font-normal leading-[30.71px] text-[#071426]">
              Our versioning policy
            </h3>
          </div>

          <ul className="self-stretch flex flex-col pl-5">
            {policyItems.map((item, idx) => (
              <li
                key={idx}
                className="list-disc font-manrope text-base leading-8 text-[#64748B]"
              >
                <span className="font-bold text-[#64748B]">{item.label}</span>
                <span className="font-normal text-[#64748B]">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notice Box */}
        <div className="self-stretch w-full rounded-xl border border-[#22B8D6] bg-[linear-gradient(175deg,rgba(34,184,214,0.1)_0%,rgba(37,99,235,0.05)_100%)] p-7">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <span className="font-bold text-[#475569]">Breaking changes:</span>
            {" "}Published in a changelog at least 90 days in advance. Subscribe to our changelog feed for notification.
          </p>
        </div>
      </div>
    </section>
  );
}
