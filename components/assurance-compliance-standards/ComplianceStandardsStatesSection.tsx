import Image from "next/image";

interface StateCardProps {
  iconSrc: string;
  title: string;
  description: React.ReactNode;
  badge: string;
  badgeBg: string;
  badgeTextColor: string;
}

const stateCards: StateCardProps[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6283.svg",
    title: "Source unavailable",
    description: (
      <>
        Standards information is
        <br />
        temporarily unavailable. Public
        <br />
        links remain.
      </>
    ),
    badge: "UNAVAILABLE",
    badgeBg: "bg-[#FFEDD5]",
    badgeTextColor: "text-[#9A3412]",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6296.svg",
    title: "Withdrawn",
    description: (
      <>
        The claim is withdrawn. No
        <br />
        download, and no stale status is
        <br />
        shown.
      </>
    ),
    badge: "WITHDRAWN",
    badgeBg: "bg-[#E2E8F0]",
    badgeTextColor: "text-[#1E293B]",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6309.svg",
    title: "Restricted",
    description: "Access requires an authorizedrequest. No preview is shown.",
    badge: "RESTRICTED",
    badgeBg: "bg-[#E2E8F0]",
    badgeTextColor: "text-[#1E293B]",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6322.svg",
    title: "Under review",
    description: (
      <>
        The claim is not approved for
        <br />
        publication and is flagged as such.
      </>
    ),
    badge: "UNDER REVIEW",
    badgeBg: "bg-[#FFEDD5]",
    badgeTextColor: "text-[#9A3412]",
  },
];

export default function ComplianceStandardsStatesSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Every state is shown in plain language
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            A missing or unavailable record is never presented as a current, complete picture.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {stateCards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[250px] flex-col justify-between rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F2FE]">
                  <Image
                    src={card.iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                </div>

                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  {card.title}
                </h3>

                <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748B]">
                  {card.description}
                </p>
              </div>

              <div className="pt-5">
                <span
                  className={`inline-flex w-fit items-center justify-center rounded-full px-3 py-1 font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] ${card.badgeBg} ${card.badgeTextColor}`}
                >
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
