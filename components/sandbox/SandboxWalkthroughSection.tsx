import Image from "next/image";

const walkthroughSteps = [
  {
    icon: "/sandbox/icons/icon_334_2494.svg",
    title: "Prerequisites",
    status: "Not started",
  },
  {
    icon: "/sandbox/icons/icon_334_2505.svg",
    title: "Configure subject",
    status: "Not started",
  },
  {
    icon: "/sandbox/icons/icon_334_2513.svg",
    title: "Permitted request",
    status: "Not started",
  },
  {
    icon: "/sandbox/icons/icon_334_2521.svg",
    title: "Inspect decision",
    status: "Not started",
  },
  {
    icon: "/sandbox/icons/icon_334_2529.svg",
    title: "Test revocation",
    status: "Not started",
  },
  {
    icon: "/sandbox/icons/icon_334_2537.svg",
    title: "Review evidence",
    status: "Not started",
  },
];

const blockedChecks = [
  {
    label: "Entitlement for your account",
    icon: null,
  },
  {
    label: "Protocol support",
    icon: "/sandbox/icons/icon_334_2558.svg",
  },
  {
    label: "Environment availability",
    icon: "/sandbox/icons/icon_334_2563.svg",
  },
  {
    label: "Credential scope and version",
    icon: "/sandbox/icons/icon_334_2568.svg",
  },
];

const availabilityStates = [
  {
    state: "Not confirmed",
    pillClass: "border border-dashed border-[#94A3B8] bg-white-solid text-[#334155]",
    description: "Read the docs and ask about evaluation options. No access\nbutton is shown.",
  },
  {
    state: "Available",
    pillClass: "bg-[#DCFCE7] text-[#166534]",
    description: "Shown only when the approved service confirms access for your\naccount.",
  },
  {
    state: "Sign-in required",
    pillClass: "bg-[#E0F2FE] text-[#075985]",
    description: "Sign in to check eligibility. Your place on this page is kept.",
  },
  {
    state: "Restricted",
    pillClass: "bg-[#FEF3C7] text-[#92400E]",
    description: "Contact your account team through the approved route.",
  },
  {
    state: "Unavailable",
    pillClass: "bg-[#FEE2E2] text-[#991B1B]",
    description: "The documentation remains available. No recovery time is\npromised.",
  },
  {
    state: "Expired / suspended",
    pillClass: "bg-[#FEE2E2] text-[#991B1B]",
    description: "Request renewal through a supported route. No bypass is\noffered.",
  },
];

export default function SandboxWalkthroughSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-[11px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
            Progress is recorded from real runs only
          </h2>

          <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px] lg:whitespace-nowrap">
            Until a test runner is connected, every step shows Not started. A blocked test is reported as blocked, never as passed.
          </p>
        </div>

        {/* 6 Step Cards */}
        <div className="mt-[40px] grid grid-cols-2 overflow-hidden rounded-[12px] border border-[#E2E8F0] sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-[#E2E8F0]">
          {walkthroughSteps.map((step, idx) => (
            <div
              key={step.title}
              className={`flex flex-col items-center gap-[10px] bg-white-solid p-[22px_16px] text-center ${
                idx === 0 ? "border-t-4 border-t-[#CBD5E1]" : "border-t-4 border-t-transparent"
              } ${idx > 0 && idx % 2 === 0 ? "border-t border-[#E2E8F0] sm:border-t-0" : ""}`}
            >
              <Image
                src={step.icon}
                alt=""
                width={30}
                height={30}
                className="shrink-0"
              />

              <h4 className="font-manrope text-[14.7px] font-bold leading-[24.29px] text-[#071426]">
                {step.title}
              </h4>

              <span className="rounded-full border border-dashed border-[#94A3B8] bg-[#F1F5F9] px-[10px] py-[3px] font-manrope text-[11.2px] font-extrabold uppercase leading-[18.48px] tracking-[0.05em] text-[#334155]">
                {step.status}
              </span>
            </div>
          ))}
        </div>

        {/* States Note */}
        <div className="mt-[14px] flex items-center gap-[10px]">
          <Image
            src="/sandbox/icons/icon_334_2545.svg"
            alt=""
            width={14}
            height={14}
            className="shrink-0"
          />
          <span className="font-manrope text-[13.6px] font-normal leading-[22.44px] text-[#64748B]">
            States: Not started · In progress · Passed · Needs action · Blocked
          </span>
        </div>

        {/* Two-Column Detail Section */}
        <div className="mt-[59px] grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.30fr)] lg:gap-[60px]">
          {/* Left Column: Blocked checks */}
          <div className="flex flex-col items-start gap-[20px]">
            <h3 className="font-dm-serif text-[24px] font-normal leading-[39.6px] text-[#071426]">
              When a test is blocked, check these in order
            </h3>

            <div className="flex w-full flex-col gap-[12px]">
              {blockedChecks.map((item) => (
                <div
                  key={item.label}
                  className={`flex w-full items-center justify-start rounded-[12px] border border-[#E2E8F0] bg-white-solid text-left ${
                    item.icon ? "gap-[14px] p-[14px_18px]" : "p-[14px_32px]"
                  }`}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                  )}
                  <span className="font-manrope text-[16px] font-semibold leading-[26.4px] text-[#071426] text-left">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Availability States Table */}
          <div className="flex w-full flex-col overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white-solid divide-y divide-[#E2E8F0]">
            {availabilityStates.map((row) => (
              <div
                key={row.state}
                className="flex flex-col gap-3 p-[18px_22px] sm:flex-row sm:items-center sm:gap-[16px]"
              >
                <div className="w-[160px] shrink-0">
                  <span
                    className={`inline-flex min-w-[154px] items-center justify-center rounded-full px-[10px] py-[3px] font-manrope text-[11.2px] font-extrabold uppercase leading-[18.48px] tracking-[0.05em] whitespace-nowrap ${row.pillClass}`}
                  >
                    {row.state}
                  </span>
                </div>
                <p className="whitespace-pre-line font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
