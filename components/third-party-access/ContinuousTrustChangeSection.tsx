import Image from "next/image";

const trustCards = [
  {
    icon: "/third-party-access/continuous-trust-card1.svg",
    title: "Credential Refresh",
    description:
      "Every request, verify recipient credential is still valid. Revoked? Expired? Deny immediately.",
  },
  {
    icon: "/third-party-access/continuous-trust-card2.svg",
    title: "Mandate Expiry",
    description:
      "Time boundary reached. Access revoked automatically. No extension without new mandate.",
  },
  {
    icon: "/third-party-access/continuous-trust-card3.svg",
    title: "Policy Change",
    description:
      "Principal's policy updated. All delegated recipients re-evaluated. Can deny mid-workflow.",
  },
  {
    icon: "/third-party-access/continuous-trust-card4.svg",
    title: "Risk Signal",
    description:
      "Anomaly detected in recipient's behavior. Policy engine can throttle or block.",
  },
];

export default function ContinuousTrustChangeSection() {
  return (
    <section id="continuous-trust" className="bg-white-solid px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Continuous trust and change propagation
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-[12px] border border-mystic bg-white-solid p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-49/10">
                <Image
                  src={card.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>

              <h3 className="font-manrope text-[16px] font-bold text-azure-9 sm:text-[17px]">
                {card.title}
              </h3>

              <p className="font-manrope text-[13.5px] font-normal leading-[24px] text-azure-47 sm:text-[14.4px] sm:leading-[25.2px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-mystic pt-2" />
      </div>
    </section>
  );
}
