import Image from "next/image";
import Link from "next/link";

interface SupportCard {
  image: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const supportCards: SupportCard[] = [
  {
    image: "/integrations-operate/img-e5b09e73b3dd5a0e6f2626f97402b8a8fbe3a8c2.png",
    icon: "/integrations-operate/icon-334_5117.svg",
    iconWidth: 24,
    iconHeight: 24,
    title: "Source identity provider",
    description:
      "Sign-in failures, assertion issues, and directory sync are managed in your provider.",
  },
  {
    image: "/integrations-operate/img-87239cac7b4926b68b55087a96aca19c99d3e723.png",
    icon: "/integrations-operate/icon-334_5128.svg",
    iconWidth: 29,
    iconHeight: 27,
    title: "Your application",
    description:
      "Request construction, error handling, and downstream actions are owned by your team.",
  },
  {
    image: "/integrations-operate/img-41318b7ba530a53368b8e11a07eaad1707c8df6d.png",
    icon: "/integrations-operate/icon-334_5139.svg",
    iconWidth: 24,
    iconHeight: 29,
    title: "Zoiko iD interface",
    description: "Decision and status questions go to Zoiko iD support. ",
    linkText: "Status and support routes",
    linkHref: "/quickstarts",
  },
  {
    image: "/integrations-operate/img-47aba0f6d989af38c005ee278ea8ff72fc22b7d4.png",
    icon: "/integrations-operate/icon-334_5153.svg",
    iconWidth: 24,
    iconHeight: 29,
    title: "Your security team",
    description:
      "Suspected compromise, secret exposure, and access reviews are escalated internally first.",
  },
];

export default function IntegrationsOperateSupportSection() {
  return (
    <section className="bg-white-solid px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[30px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Troubleshooting and ownership
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            When something breaks, the right owner handles it. Start with the system that produced the symptom.
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid w-full grid-cols-1 gap-7 pt-[2px] md:grid-cols-2">
          {supportCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-xs"
            >
              {/* Photo Header: flush edge-to-edge */}
              <div className="relative h-[170px] w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Clean Blue SVG Icon */}
                <div className="flex size-8 items-center">
                  <Image
                    src={card.icon}
                    alt=""
                    width={card.iconWidth}
                    height={card.iconHeight}
                    className="shrink-0"
                  />
                </div>

                <h3 className="mt-3 font-manrope text-[16.3px] font-bold leading-7 text-[#071426]">
                  {card.title}
                </h3>

                <p className="mt-2 font-manrope text-[14.4px] font-normal leading-6 text-[#64748B]">
                  {card.description}
                  {card.linkText && card.linkHref && (
                    <Link
                      href={card.linkHref}
                      className="text-[#2563EB] underline hover:text-blue-700"
                    >
                      {card.linkText}
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Box (Buttery White with amber accent) */}
        <div className="w-full rounded-[10px] border-l-4 border-[#F59E0B] bg-[#FFFBEB] px-[26px] pt-[26px] pb-[22px] shadow-2xs">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">Support terms are registry-controlled.</strong>{" "}
            Contacts, hours, and severity policy are confirmed in your agreement and published support
            <br className="hidden sm:block" />
            {" "}documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
