import Image from "next/image";
import React from "react";

interface LifecycleStage {
  id: string;
  badge: {
    text: string;
    bg: string;
    color: string;
  };
  icon: string;
  title: string;
  description: React.ReactNode;
}

const STAGES: LifecycleStage[] = [
  {
    id: "stage-1",
    badge: {
      text: "DESIGNED",
      bg: "#DBEAFE",
      color: "#1E40AF",
    },
    icon: "/security/icon-411_20468.svg",
    title: "Verify identity",
    description: "Confirm who is acting before anything else.",
  },
  {
    id: "stage-2",
    badge: {
      text: "DESIGNED",
      bg: "#DBEAFE",
      color: "#1E40AF",
    },
    icon: "/security/icon-411_20480.svg",
    title: "Bound authority",
    description: (
      <>
        Limit a grant by action, resource, purpose and
        <br />
        expiry.
      </>
    ),
  },
  {
    id: "stage-3",
    badge: {
      text: "DESIGNED",
      bg: "#DBEAFE",
      color: "#1E40AF",
    },
    icon: "/security/icon-411_20492.svg",
    title: "Evaluate policy",
    description: (
      <>
        Check the request against current
        <br />
        policy and context.
      </>
    ),
  },
  {
    id: "stage-4",
    badge: {
      text: "PLANNED COVERAGE",
      bg: "#FEF3C7",
      color: "#92400E",
    },
    icon: "/security/icon-411_20503.svg",
    title: "Read signals",
    description: (
      <>
        Note changes in trust context where
        <br />
        supported.
      </>
    ),
  },
  {
    id: "stage-5",
    badge: {
      text: "DESIGNED",
      bg: "#DBEAFE",
      color: "#1E40AF",
    },
    icon: "/security/icon-411_20515.svg",
    title: "Re-evaluate",
    description: (
      <>
        Re-check when authority or context
        <br />
        changes.
      </>
    ),
  },
  {
    id: "stage-6",
    badge: {
      text: "DESIGNED",
      bg: "#DBEAFE",
      color: "#1E40AF",
    },
    icon: "/security/icon-411_20526.svg",
    title: "Record evidence",
    description: "Keep the decision basis for review.",
  },
];

export default function SecurityLifecycleSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Heading Container */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[58.9px] text-[#0B1B33]">
            Six designed stages, each with its own owner
          </h2>
          <div className="w-full max-w-[820px] pt-[2px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              Every stage is a design intent. None is a claim that a stage is live for your environment.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] pt-7 pb-8">
          {STAGES.map((stage) => (
            <div
              key={stage.id}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] px-5 py-6 flex flex-col gap-[20.4px] min-h-[253px] hover:shadow-sm transition-shadow duration-200"
            >
              {/* Badge */}
              <div className="self-start">
                <span
                  className="inline-flex items-center px-[11px] py-[5px] rounded-full font-manrope font-extrabold text-[11px] leading-[17.6px] tracking-wider uppercase"
                  style={{
                    backgroundColor: stage.badge.bg,
                    color: stage.badge.color,
                  }}
                >
                  {stage.badge.text}
                </span>
              </div>

              {/* Icon & Content */}
              <div className="flex flex-col gap-[6px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center shrink-0">
                  <Image
                    src={stage.icon}
                    alt={stage.title}
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33] pt-[8px]">
                  {stage.title}
                </h4>
                <div className="font-manrope font-medium text-[15px] leading-[24px] text-[#64748B]">
                  {stage.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
