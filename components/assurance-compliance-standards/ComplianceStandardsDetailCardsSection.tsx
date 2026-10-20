import Image from "next/image";

interface DetailCardProps {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  title: string;
  description: React.ReactNode;
  badge: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeBorder?: string;
  bottomBoxText: string;
}

const detailCards: DetailCardProps[] = [
  {
    imageSrc: "/assurance-compliance-standards/img-b89bc6f50561a6460abbba4e6b836c6215e1385e.png",
    imageAlt: "Protocol engineering visualization",
    iconSrc: "/assurance-compliance-standards/icon-411_5849.svg",
    title: "Protocol entry",
    description: "Scope, component, actor type, edition, limitations and the owning documentation.",
    badge: "NOT PUBLICLY CONFIRMED",
    badgeBg: "bg-[#F1F5F9]",
    badgeTextColor: "text-[#334155]",
    badgeBorder: "border border-dashed border-[#94A3B8]",
    bottomBoxText: "Version: not publicly confirmed",
  },
  {
    imageSrc: "/assurance-compliance-standards/img-2fdbfefcaea83891715fe8d4f19db011261af6bc.png",
    imageAlt: "Credential verification concept",
    iconSrc: "/assurance-compliance-standards/icon-411_5866.svg",
    title: "Credential entry",
    description: (
      <>
        Issuer, verifier and assurance-level terminology,
        <br />
        with its boundaries.
      </>
    ),
    badge: "NOT PUBLICLY CONFIRMED",
    badgeBg: "bg-[#F1F5F9]",
    badgeTextColor: "text-[#334155]",
    badgeBorder: "border border-dashed border-[#94A3B8]",
    bottomBoxText: "Boundary: presence is not proof of identity",
  },
  {
    imageSrc: "/assurance-compliance-standards/img-30f46f407f09ee1eaf69eea89d0cd19714b78bd9.png",
    imageAlt: "Agent identity concept",
    iconSrc: "/assurance-compliance-standards/icon-411_5882.svg",
    title: "Agent entry",
    description: (
      <>
        Principal, sponsor, mandate and revocation
        <br />
        concepts for non-human actors.
      </>
    ),
    badge: "DESIGNED FOR",
    badgeBg: "bg-[#DBEAFE]",
    badgeTextColor: "text-[#1E40AF]",
    bottomBoxText: "Boundary: agent identity is not authority",
  },
];

export default function ComplianceStandardsDetailCardsSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Every entry carries the same fields
          </h2>
          <p className="max-w-[820px] pt-[1.3px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            Each entry below shows the fields it must display. Until a verified record exists, its status reads as not publicly
            <br className="hidden md:block" />
            {" "}confirmed.
          </p>
        </div>

        {/* 3 Detail Cards Grid */}
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {detailCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm"
            >
              {/* Card Image */}
              <div className="relative h-[165px] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 350px, 100vw"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex flex-col gap-2.5">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E0F2FE]">
                    <Image
                      src={card.iconSrc}
                      alt=""
                      width={22}
                      height={22}
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

                <div className="mt-6 flex flex-col gap-2">
                  <span
                    className={`inline-flex w-fit items-center justify-center rounded-full px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.08em] ${card.badgeBg} ${card.badgeTextColor} ${card.badgeBorder || ""}`}
                  >
                    {card.badge}
                  </span>

                  <div className="flex items-center rounded-[8px] bg-[#F1F5F9] px-2.5 py-2">
                    <span className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                      {card.bottomBoxText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
