import Image from "next/image";

interface StateCard {
  title: string;
  lines: [string, string];
  badge: string;
  icon: string;
}

export default function SecurityStatesSection() {
  const states: StateCard[] = [
    {
      title: "Submitting",
      lines: [
        "The form stays filled. The button is busy and",
        "cannot be pressed twice.",
      ],
      badge: "One request per submission",
      icon: "/security-contact/state-icon-submitting.svg",
    },
    {
      title: "Outcome unknown",
      lines: [
        "Do not resubmit. Check the status of your earlier",
        "request first.",
      ],
      badge: "No duplicate case",
      icon: "/security-contact/state-icon-unknown.svg",
    },
    {
      title: "Attachment rejected",
      lines: [
        "Other fields are kept. The reason is shown in plain",
        "language.",
      ],
      badge: "No insecure email fallback",
      icon: "/security-contact/state-icon-rejected.svg",
    },
    {
      title: "Service unavailable",
      lines: [
        "A readable fallback explains what to do. No",
        "support address is invented.",
      ],
      badge: "Use the verified routes above",
      icon: "/security-contact/state-icon-unavailable.svg",
    },
    {
      title: "Permission denied",
      lines: [
        "Sensitive context is removed. A generic route",
        "remains.",
      ],
      badge: "No account details shown",
      icon: "/security-contact/state-icon-denied.svg",
    },
    {
      title: "Rate limited",
      lines: [
        "A neutral message appears with retry guidance",
        "from the service.",
      ],
      badge: "No account enumeration",
      icon: "/security-contact/state-icon-ratelimited.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-12 xl:px-[160px] lg:py-[105px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
              Every state has a clear next step
            </h2>
          </div>

          {/* 6 States Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {states.map((st, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[18px] border border-[#E2E8F0] bg-white p-5 xl:p-6 shadow-sm transition-all duration-200 hover:shadow-md min-h-[246px]"
              >
                <div className="flex flex-col gap-2.5">
                  {/* Icon Box */}
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#E0F2FE]">
                    <Image
                      src={st.icon}
                      alt=""
                      width={26}
                      height={26}
                      className="shrink-0"
                    />
                  </div>

                  {/* Title & Description: Strictly 2 lines only */}
                  <div className="flex flex-col gap-1 pt-1">
                    <h4 className="font-[family-name:var(--font-manrope-family)] text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                      {st.title}
                    </h4>
                    <p className="font-[family-name:var(--font-manrope-family)] text-[12.8px] sm:text-[13.5px] xl:text-[14px] leading-[22.4px] text-[#64748B] tracking-[-0.015em]">
                      <span className="block sm:whitespace-nowrap">{st.lines[0]}</span>
                      <span className="block">{st.lines[1]}</span>
                    </p>
                  </div>
                </div>

                {/* State Badge */}
                <div className="mt-4 rounded-[8px] bg-[#F1F5F9] px-[10px] py-2">
                  <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                    {st.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
