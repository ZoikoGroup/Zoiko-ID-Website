import Image from "next/image";

export default function SecurityReceiptTimeline() {
  const steps = [
    {
      title: "Submitted",
      description: "Request sent once.",
      icon: "/security-contact/timeline-icon-submitted.svg",
    },
    {
      title: "Received",
      description: "Reference shown only if returned.",
      icon: "/security-contact/timeline-icon-received.svg",
    },
    {
      title: "Triaged",
      description: "Owner reviews the request.",
      icon: "/security-contact/timeline-icon-triaged.svg",
    },
    {
      title: "In progress",
      description: "Work is under way.",
      icon: "/security-contact/timeline-icon-inprogress.svg",
    },
    {
      title: "Resolved",
      description: "Outcome recorded by the owner.",
      icon: "/security-contact/timeline-icon-resolved.svg",
    },
  ];

  return (
    <section className="relative w-full bg-[#F1F5F9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-12 xl:px-[160px] lg:py-[105px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
              <span className="block sm:whitespace-nowrap">Receiving a request is not the same as</span>
              <span className="block">resolving it</span>
            </h2>
            <div className="max-w-[950px] pt-[1.3px]">
              <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#64748B]">
                <span className="block sm:whitespace-nowrap">
                  A receipt confirms that a request was created. It does not confirm triage, action or resolution, and no response time
                </span>
                <span className="block">is promised.</span>
              </p>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting blue horizontal line for desktop */}
            <div className="absolute top-[27px] left-[10%] right-[10%] hidden h-[3px] bg-[#2563EB] md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-[#2563EB] bg-white shadow-sm">
                    <Image
                      src={step.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col items-center pt-[7px]">
                    <h4 className="font-[family-name:var(--font-manrope-family)] text-[15px] font-bold leading-[24px] text-[#0B1B33]">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-manrope-family)] text-[13px] font-normal leading-[20.8px] text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
