import Image from "next/image";

export default function SecurityPrinciplesSection() {
  const principles = [
    {
      title: "Routes are verified",
      lines: [
        "Each destination is checked before it appears.",
        "Unverified routes are shown as pending, never as",
        "links.",
      ],
      icon: "/security-contact/principle-icon-1.svg",
    },
    {
      title: "No severity claims here",
      lines: [
        "This page does not decide how serious an issue",
        "is. The owning team classifies it after review.",
      ],
      icon: "/security-contact/principle-icon-2.svg",
    },
    {
      title: "Minimal data collected",
      lines: [
        "Only what the owning team needs. Analytics",
        "record categories, never your message or your",
        "identity.",
      ],
      icon: "/security-contact/principle-icon-3.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-12 xl:px-[160px] lg:py-[105px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
              <span className="block sm:whitespace-nowrap">What this page does and does not</span>
              <span className="block">promise</span>
            </h2>
          </div>

          {/* 3 Principle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 rounded-[18px] border border-[#E2E8F0] bg-white p-5 xl:p-6 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {/* Icon Box */}
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#E0F2FE]">
                  <Image
                    src={pr.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="font-[family-name:var(--font-manrope-family)] text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                    {pr.title}
                  </h4>
                  <p className="font-[family-name:var(--font-manrope-family)] text-[13px] sm:text-[13.5px] xl:text-[14px] leading-[22.4px] text-[#64748B] tracking-[-0.015em]">
                    {pr.lines.map((line, lIdx) => (
                      <span
                        key={lIdx}
                        className={`block ${lIdx === 1 ? "sm:whitespace-nowrap" : ""}`}
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
