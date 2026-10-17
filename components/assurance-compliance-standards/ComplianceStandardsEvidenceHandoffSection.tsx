import Image from "next/image";

interface HandoffStep {
  iconSrc: string;
  title: string;
  description: React.ReactNode;
}

const steps: HandoffStep[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6139.svg",
    title: "Find",
    description: (
      <>
        Open a standards card
        <br />
        and view evidence.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6149.svg",
    title: "Scope",
    description: (
      <>
        Title, edition, date and
        <br />
        visibility.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6159.svg",
    title: "Sign in",
    description: (
      <>
        Restricted items use an
        <br />
        authorized flow.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6169.svg",
    title: "Request",
    description: (
      <>
        Organization, email,
        <br />
        purpose and asset.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6178.svg",
    title: "Receipt",
    description: (
      <>
        Reference shown after
        <br />
        server confirmation.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6188.svg",
    title: "Decision",
    description: (
      <>
        Approved, denied, more
        <br />
        information, or revoked.
      </>
    ),
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6198.svg",
    title: "Access",
    description: (
      <>
        Time-limited and checked
        <br />
        at access.
      </>
    ),
  },
];

export default function ComplianceStandardsEvidenceHandoffSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            From a standards card to a reviewed request
          </h2>
          <p className="max-w-[1000px] pt-[1.3px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            <span className="lg:whitespace-nowrap">
              The Trust Center owns authoritative assurance records. This page offers a governed link or a request, never direct
            </span>
            <br className="hidden md:block" />
            {" "}access to a restricted file.
          </p>
        </div>

        {/* 7-Step Workflow Pipeline */}
        <div className="flex flex-col gap-6">
          <div className="relative py-7">
            {/* Horizontal Gradient Connecting Line */}
            <div className="pointer-events-none absolute left-8 right-8 top-[55px] hidden h-[3px] bg-[linear-gradient(90deg,rgba(34,184,214,1)_0%,rgba(37,99,235,1)_100%)] lg:block" />

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Step Circular Badge */}
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-[#2563EB] bg-[#FFFFFF] shadow-sm transition-transform hover:scale-105">
                    <Image
                      src={step.iconSrc}
                      alt=""
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                  </div>

                  {/* Step Title */}
                  <h4 className="mt-4 font-manrope text-[14px] font-bold text-[#0B1B33]">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="mt-1 font-manrope text-[12px] font-normal leading-[19.2px] text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notice Banner */}
          <div className="flex items-center gap-3.5 rounded-r-[12px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-[22px] py-[18px]">
            <Image
              src="/assurance-compliance-standards/icon-411_6207.svg"
              alt=""
              width={24}
              height={24}
              className="shrink-0"
            />
            <p className="font-manrope text-[15px] leading-[24px] text-[#0B1B33]">
              <span className="font-bold">A receipt is not an approval.</span>
              {" "}
              <span className="font-normal">
                Confidential documents are never placed in URLs, analytics, email, cache or source HTML.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
