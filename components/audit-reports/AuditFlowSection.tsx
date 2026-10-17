import Image from "next/image";

interface FlowStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  isDark?: boolean;
}

const flowSteps: FlowStep[] = [
  {
    step: "Step 1",
    title: "Actor",
    description:
      "The person, organization, service, machine or agent making the request.",
    icon: "/audit-reports/flow-step-1.svg",
  },
  {
    step: "Step 2",
    title: "Verified claims",
    description: "Only the claims the decision needs are presented.",
    icon: "/audit-reports/flow-step-2.svg",
  },
  {
    step: "Step 3",
    title: "Mandate",
    description:
      "Any organizational affiliation or delegation, recorded explicitly.",
    icon: "/audit-reports/flow-step-3.svg",
  },
  {
    step: "Step 4",
    title: "Decision",
    description: "Purpose- and resource-scoped policy evaluation.",
    icon: "/audit-reports/flow-step-4.svg",
    isDark: true,
  },
  {
    step: "Step 5",
    title: "Permitted view",
    description: "Evidence shown to the authorized reviewer only.",
    icon: "/audit-reports/flow-step-5.svg",
  },
];

const branchCards = [
  {
    title: "Denial",
    description:
      "The request stops at the decision and the reason is recorded.",
    icon: "/audit-reports/flow-denial.svg",
  },
  {
    title: "Expiry",
    description:
      "A mandate that has ended no longer supports the decision.",
    icon: "/audit-reports/flow-expiry.svg",
  },
  {
    title: "Revocation",
    description:
      "A withdrawn mandate may need re-evaluation; timing is not claimed here.",
    icon: "/audit-reports/flow-revocation.svg",
  },
];

export default function AuditFlowSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-12 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[52px]">
            From actor to permitted view, one step at a time
          </h2>
          <p className="max-w-[820px] font-manrope text-base font-normal leading-relaxed text-[#64748B]">
            The flow shows how a request is limited at each stage. It is a
            conceptual model, not real user data, and it does not assert
            automatic processing or real-time revocation.
          </p>
        </div>

        {/* 5 Stages Flow Card */}
        <div className="overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:divide-y-0 lg:divide-x">
            {flowSteps.map((s) => (
              <div
                key={s.step}
                className={`flex flex-col justify-between p-6 lg:p-7 ${
                  s.isDark ? "bg-[#071426] text-white" : "bg-white text-[#0B1B33]"
                }`}
              >
                <div>
                  {/* Icon Tile */}
                  <div
                    className={`mb-5 flex size-10 items-center justify-center rounded-xl ${
                      s.isDark ? "bg-[rgba(34,184,214,0.18)]" : "bg-[#E0F2FE]"
                    }`}
                  >
                    <Image
                      src={s.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-2 font-manrope text-[17px] font-bold leading-snug ${
                      s.isDark ? "text-white" : "text-[#0B1B33]"
                    }`}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-manrope text-[14px] leading-relaxed ${
                      s.isDark ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>

                {/* Step Pill */}
                <div className="mt-6 pt-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 font-manrope text-[12px] font-extrabold uppercase tracking-[0.06em] ${
                      s.isDark
                        ? "bg-white/12 text-white"
                        : "bg-[#F1F5F9] text-[#0B1B33]"
                    }`}
                  >
                    {s.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Outcome Branches */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {branchCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-[14px] border border-[#E2E8F0] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <Image
                  src={card.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px]"
                />
                <h4 className="font-manrope text-[14px] font-bold text-[#0B1B33]">
                  {card.title}
                </h4>
              </div>
              <p className="font-manrope text-[14px] leading-relaxed text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Text Version Box */}
        <div className="rounded-[12px] bg-white p-6 sm:p-7 shadow-sm border border-[#E2E8F0]">
          <h4 className="mb-3 font-manrope text-[15px] font-bold text-[#0B1B33]">
            Text version
          </h4>
          <ol className="list-decimal space-y-2 pl-5 font-manrope text-[15px] leading-relaxed text-[#64748B]">
            <li>An actor makes a request.</li>
            <li>Only verified claims needed for the decision are presented.</li>
            <li>
              Any organizational mandate is checked against its explicit record.
            </li>
            <li>Policy is evaluated for the stated purpose and resource.</li>
            <li>
              A permitted, minimal evidence view is shown to an authorized
              reviewer. Denial, expiry or revocation ends the flow at the
              relevant point.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
