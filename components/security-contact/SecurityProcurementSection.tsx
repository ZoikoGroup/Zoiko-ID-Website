import Image from "next/image";

export default function SecurityProcurementSection() {
  const steps = [
    {
      icon: "/security-contact/procurement-check-1.svg",
      text: "Review the public security and privacy information.",
    },
    {
      icon: "/security-contact/procurement-check-2.svg",
      text: "Request a specific, approved document.",
    },
    {
      icon: "/security-contact/procurement-check-3.svg",
      text: "Access is granted only after review.",
    },
  ];

  return (
    <section className="relative w-full bg-[#071426]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:px-[160px] lg:py-[105px]">
        <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-2">
          {/* Left Column: Evidence Intake Guidance */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-white max-w-[451px]">
                Security evidence<br />
                goes through the<br />
                Trust Center
              </h2>
              <div className="pt-[2.5px]">
                <p className="max-w-[480px] font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#CBD5E1]">
                  Enterprise reviewers can find controls and request approved<br />
                  evidence through the Trust Center. Access is authorized, and no<br />
                  document is downloadable by default.
                </p>
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col gap-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-[12px] border border-white/10 bg-white/[0.06] px-4 py-[14px]"
                >
                  <Image
                    src={step.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#CBD5E1]">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-[16px] sm:h-[350px] lg:h-[384px] shadow-sm">
            <Image
              src="/security-contact/procurement-team.png"
              alt="Team meeting around a table"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
