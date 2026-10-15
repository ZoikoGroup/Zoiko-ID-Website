import Image from "next/image";

const distinguishingPoints = [
  {
    boldText: "Who is acting",
    detail: "— verified principal, service account, or AI agent",
  },
  {
    boldText: "What scope has been delegated",
    detail: "— bounded, time-limited mandate",
  },
  {
    boldText: "What policy governs an action",
    detail: "— organization rules and risk evaluation",
  },
  {
    boldText: "What evidence explains the decision",
    detail: "— immutable audit trail",
  },
];

const pillars = [
  {
    icon: "/overview/direct-answer-identity.svg",
    title: "Identity",
    description: "Verified actor with credentials. Who is making the request?",
  },
  {
    icon: "/overview/direct-answer-authority.svg",
    title: "Authority",
    description: "Bounded mandate with scope and time. What can they do?",
  },
  {
    icon: "/overview/direct-answer-evidence.svg",
    title: "Evidence",
    description: "Immutable audit trail. Why was the decision made?",
  },
  {
    icon: "/overview/direct-answer-policy.svg",
    title: "Policy",
    description: "Continuous evaluation and revocation. Real-time trust.",
  },
];

export default function WhatIsZoikoIdSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-28 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl sm:leading-[59.8px]">
          What is Zoiko ID?
        </h2>

        {/* Feature Callout Banner */}
        <div className="relative w-full rounded-xl border border-mystic border-l-[5px] border-l-scooter-48 bg-[linear-gradient(165deg,rgba(34,184,214,0.05)_0%,rgba(37,99,235,0.05)_100%)] p-6 shadow-[0px_8px_24px_0px_rgba(34,184,214,0.08)] sm:p-8 lg:p-10">
          <p className="font-manrope text-base font-normal leading-relaxed text-[#475569] sm:text-[17.6px] sm:leading-[30.8px]">
            <span className="font-bold text-azure-9">Zoiko iD</span> is programmable identity infrastructure for people, organizations, services, machines and AI agents. Its architecture connects <span className="font-bold text-azure-48">identity</span>, <span className="font-bold text-azure-48">authority</span> and <span className="font-bold text-azure-48">evidence</span> so integrating systems can distinguish:
          </p>

          {/* Distinguishing Bullet Items */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7">
            {distinguishingPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-scooter-48" />
                <p className="font-manrope text-sm leading-relaxed text-[#475569] sm:text-[15.2px]">
                  <strong className="font-bold text-azure-9">{pt.boldText}</strong> {pt.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Subtext Note */}
          <div className="mt-8 border-t border-mystic pt-5">
            <p className="font-manrope text-xs leading-normal text-slate-500 sm:text-[14.4px]">
              Specific implemented interfaces and availability must be confirmed in the current documentation.
            </p>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 rounded-xl border border-mystic bg-white-solid p-7 transition-all duration-200 hover:border-scooter-48/40 hover:shadow-[0px_8px_20px_0px_rgba(34,184,214,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#22B8D6]/10 p-2.5">
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-manrope text-[16.8px] font-bold text-azure-9">
                  {pillar.title}
                </h3>
                <p className="font-manrope text-sm font-normal leading-relaxed text-slate-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
