import Image from "next/image";

export default function SecurityContextualAssistance() {
  const checklist = [
    {
      icon: "/security-contact/gather-check-1.svg",
      text: "Which Zoiko iD product or integration is involved.",
    },
    {
      icon: "/security-contact/gather-check-2.svg",
      text: "When you first noticed the issue, in your own timezone.",
    },
    {
      icon: "/security-contact/gather-check-3.svg",
      text: "What you observed, described in your own words.",
    },
    {
      icon: "/security-contact/gather-check-4.svg",
      text: "Whether you have already taken protective steps.",
    },
  ];

  return (
    <section className="relative w-full bg-[#F1F5F9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:px-[160px] lg:py-[105px]">
        <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-2">
          {/* Left Column: Visual */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[420px] shadow-sm">
            <Image
              src="/security-contact/gather-monitor.png"
              alt="Developer checking a configuration on a monitor"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          {/* Right Column: Checklist */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
                Gather these details first
              </h2>
              <div className="pt-[1.3px]">
                <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#64748B]">
                  Having the right information ready helps the owning team respond. None of it should include secrets.
                </p>
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3 pt-[10px]">
              {checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-[12px] bg-white px-[18px] py-[14px] shadow-sm"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="shrink-0"
                  />
                  <span className="font-[family-name:var(--font-manrope-family)] text-[15px] font-normal leading-[24px] text-[#334155]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
