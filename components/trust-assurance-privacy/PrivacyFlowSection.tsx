import Image from "next/image";

interface FlowStep {
  step: string;
  icon: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

const steps: FlowStep[] = [
  {
    step: "Step 1",
    icon: "/trust-assurance-privacy/flow-step-1.svg",
    title: "Actor",
    description: "The person, organization, service, machine or agent making the request.",
  },
  {
    step: "Step 2",
    icon: "/trust-assurance-privacy/flow-step-2.svg",
    title: "Verified claims",
    description: "Only the claims the decision needs are presented.",
  },
  {
    step: "Step 3",
    icon: "/trust-assurance-privacy/flow-step-3.svg",
    title: "Mandate",
    description: "Any organizational affiliation or delegation, recorded explicitly.",
  },
  {
    step: "Step 4",
    icon: "/trust-assurance-privacy/flow-step-4.svg",
    title: "Decision",
    description: "Purpose- and resource- scoped policy evaluation.",
    isHighlight: true,
  },
  {
    step: "Step 5",
    icon: "/trust-assurance-privacy/flow-step-5.svg",
    title: "Permitted view",
    description: "Evidence shown to the authorized reviewer only.",
  },
];

const branches = [
  {
    icon: "/trust-assurance-privacy/flow-denial.svg",
    title: "Denial",
    description: "The request stops at the decision and the reason is recorded.",
  },
  {
    icon: "/trust-assurance-privacy/flow-expiry.svg",
    title: "Expiry",
    description: "A mandate that has ended no longer supports the decision.",
  },
  {
    icon: "/trust-assurance-privacy/flow-revocation.svg",
    title: "Revocation",
    description: "A withdrawn mandate may need re-evaluation; timing is not claimed here.",
  },
];

export default function PrivacyFlowSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 sm:gap-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[57.8px]">
            From actor to permitted view, one step at a time
          </h2>
          <p className="max-w-[850px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            The flow shows how a request is limited at each stage. It is a
            conceptual model, not real user data, and it does not assert
            automatic processing or real-time revocation.
          </p>
        </div>

        {/* 5-Step Process Flow Pipeline Container */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] overflow-hidden rounded-[20px] border border-[#CBD5E1] bg-white shadow-xs md:grid-cols-5 md:divide-x md:divide-y-0">
            {steps.map((item) => (
              <div
                key={item.step}
                className={`flex flex-col justify-between p-6 transition-colors duration-200 ${
                  item.isHighlight ? "bg-[#071426]" : "bg-white"
                }`}
              >
                <div className="flex flex-col">
                  {/* Step Icon at Top */}
                  <div
                    className={`mb-5 flex size-10 items-center justify-center rounded-[12px] ${
                      item.isHighlight
                        ? "bg-[#22B8D6]/15"
                        : "bg-[#E0F2FE]"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 shrink-0"
                    />
                  </div>

                  {/* Title in Middle */}
                  <h3
                    className={`mb-2 font-manrope text-[17px] font-bold ${
                      item.isHighlight ? "text-white" : "text-[#071426]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-manrope text-[13.5px] leading-relaxed ${
                      item.isHighlight ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Step Pill Badge at Bottom */}
                <div className="mt-8">
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider ${
                      item.isHighlight
                        ? "bg-white/12 text-white"
                        : "bg-[#F1F5F9] text-[#071426]"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Decision Exit Branches (Denial, Expiry, Revocation) */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-2 rounded-[14px] border border-[#CBD5E1] bg-white p-5 shadow-xs transition-colors duration-200 hover:border-slate-300"
              >
                <div className="flex items-center gap-2.5">
                  <Image
                    src={b.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                  <h4 className="font-manrope text-[15px] font-bold text-[#071426]">
                    {b.title}
                  </h4>
                </div>
                <p className="font-manrope text-[13.5px] leading-relaxed text-[#334155]">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
