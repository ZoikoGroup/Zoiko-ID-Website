import Image from "next/image";

interface StepItem {
  icon: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    icon: "/integrations-operate/icon-334_4536.svg",
    title: "Source identity",
    description: "Your IdP asserts who\nis requesting.",
  },
  {
    icon: "/integrations-operate/icon-334_4546.svg",
    title: "Requester, context",
    description: "The application\nnames the resource\nand action requested.",
  },
  {
    icon: "/integrations-operate/icon-334_4556.svg",
    title: "Policy evaluation",
    description: "Current policy is\napplied to the\nrequest.",
  },
  {
    icon: "/integrations-operate/icon-334_4566.svg",
    title: "Bounded decision",
    description: "Allow or deny, limited\nto scope and time.",
  },
  {
    icon: "/integrations-operate/icon-334_4576.svg",
    title: "Evidence",
    description: "The decision and its\nbasis are recorded for\nreview.",
  },
];

interface EdgeCaseCard {
  icon: string;
  title: string;
  description: string;
}

const edgeCases: EdgeCaseCard[] = [
  {
    icon: "/integrations-operate/icon-334_4586.svg",
    title: "Denial",
    description:
      "The application stops and shows a neutral, safe message. No access is inferred.",
  },
  {
    icon: "/integrations-operate/icon-334_4593.svg",
    title: "Stale policy",
    description:
      "If current policy cannot be confirmed, the application should re-check before acting.",
  },
  {
    icon: "/integrations-operate/icon-334_4600.svg",
    title: "Loss of authority",
    description:
      "If authority is revoked or expires, subsequent requests must not succeed on cached data.",
  },
  {
    icon: "/integrations-operate/icon-334_4607.svg",
    title: "Timeout",
    description:
      "If the decision is unavailable, the application should fail closed for consequential actions.",
  },
];

export default function IntegrationsOperateAppAccessSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Top Banner Image */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[403px]">
          <Image
            src="/integrations-operate/img-7597480c16ee55e4d5f6290452899a91c3bea237.png"
            alt="Engineers working in open tech office"
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Connect access decisions to applications
          </h2>

          <p className="max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            An application asks for a decision; it does not hand over its authority. Each step below is a point where the
            <br className="hidden sm:block" />
            {" "}consuming system must check current state.
          </p>
        </div>

        {/* 5 Steps Row */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xs transition-shadow hover:shadow-md"
            >
              <div className="flex size-[52px] h-[57px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                <Image
                  src={step.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="shrink-0"
                />
              </div>

              <h3 className="mt-4 font-manrope text-[16px] font-bold leading-6 text-[#071426]">
                {step.title}
              </h3>

              <p className="mt-2 whitespace-pre-line font-manrope text-[14px] font-normal leading-6 text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Edge-Case Cards (2x2 Grid) */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {edgeCases.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[12px] border border-[#E2E8F0] bg-white-solid p-6 shadow-xs"
            >
              <div className="flex size-[26px] items-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="size-[26px] shrink-0"
                />
              </div>

              <h4 className="mt-3 font-manrope text-base font-bold text-[#071426]">
                {card.title}
              </h4>

              <p className="mt-2 font-manrope text-[14.4px] font-normal leading-6 text-[#64748B]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box */}
        <div className="w-full rounded-r-[8px] border-l-4 border-[#2563EB] bg-white-solid p-5 shadow-xs sm:p-6">
          <p className="font-manrope text-base font-normal leading-7 text-[#475569]">
            <strong className="font-bold text-[#071426]">Downstream re-check.</strong>{" "}
            Before any consequential action, the application re-checks current authority. Webhook receipt alone does
            <br className="hidden sm:block" />
            {" "}not replace this check.
          </p>
        </div>
      </div>
    </section>
  );
}
