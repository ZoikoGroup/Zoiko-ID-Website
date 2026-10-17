import Image from "next/image";

interface RouteCard {
  id: string;
  image: string;
  icon: string;
  title: string;
  description: string;
}

const ROUTE_CARDS: RouteCard[] = [
  {
    id: "trust-center",
    image: "/security/img-821321bd05d3a3e84876523496bee3b288580d20.png",
    icon: "/security/icon-411_21048.svg",
    title: "Trust Center",
    description: "Approved assurance records\nand attestation status.",
  },
  {
    id: "security-advisories",
    image: "/security/img-70be44659a43ef7f03f2671221bd532f4d41e754.png",
    icon: "/security/icon-411_21063.svg",
    title: "Security Advisories",
    description: "Service advisories from their\nowning page.",
  },
  {
    id: "responsible-disclosure",
    image: "/security/img-609a189de1cc4fba4e4bcb1bc44fb3f775ba24ac.png",
    icon: "/security/icon-411_21078.svg",
    title: "Responsible Disclosure",
    description: "How to report a suspected\nvulnerability.",
  },
  {
    id: "privacy",
    image: "/security/img-901461bb1268f61ae09f5be921c2d77d4e76d279.png",
    icon: "/security/icon-411_21092.svg",
    title: "Privacy",
    description: "Personal-data disclosures and\nrights wording.",
  },
  {
    id: "availability-and-status",
    image: "/security/img-bd7b698c5e30ed4a518a8354d3303fd7f0f79335.png",
    icon: "/security/icon-411_21107.svg",
    title: "Availability and status",
    description: "Current operational state of\nservices.",
  },
  {
    id: "documentation",
    image: "/security/img-c6d90331a371db3fc46a0f5c4abdafe71152227c.png",
    icon: "/security/icon-411_21122.svg",
    title: "Documentation",
    description: "Technical references for\nintegration.",
  },
];

export default function SecurityOperationsRoutesSection() {
  return (
    <section className="w-full bg-[#F1F5F9] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[58.9px] text-[#0B1B33]">
            Operational assurance comes from its<br className="hidden sm:inline" /> owners
          </h2>
          <div className="max-w-[820px] pt-[1.8px]">
            <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B]">
              This page explains the architecture. Certifications, incident history, service status and vulnerability reporting<br className="hidden sm:inline" /> are held by their own authoritative pages.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROUTE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] p-[26px] flex flex-col gap-2.5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-[136px] rounded-[12px] overflow-hidden shrink-0 mb-1.5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Icon */}
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#E0F2FE] flex items-center justify-center shrink-0">
                <Image
                  src={card.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="w-[26px] h-[26px]"
                />
              </div>

              {/* Title */}
              <h4 className="font-manrope font-bold text-[17px] leading-[27.2px] text-[#0B1B33]">
                {card.title}
              </h4>

              {/* Description */}
              <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748B] whitespace-pre-line min-h-[44px]">
                {card.description}
              </p>

              {/* Button: Route pending registry */}
              <div className="w-full pt-1.5">
                <div className="w-full py-2 px-3 rounded-[8px] bg-[#F1F5F9] text-center font-manrope font-bold text-[13px] leading-[20.8px] text-[#0B1B33]">
                  Route pending registry
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
