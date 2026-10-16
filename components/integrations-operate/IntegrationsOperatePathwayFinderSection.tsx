import Image from "next/image";
import Link from "next/link";

interface PathwayCard {
  image: string;
  icon: string;
  title: string;
  descLines: string[];
  badge: string;
  linkText: string;
  href: string;
}

const pathwayCards: PathwayCard[] = [
  {
    image: "/integrations-operate/img-036719730e2fece26ff0bb5b493d41fb4080a125.png",
    icon: "/integrations-operate/icon-334_4252.svg",
    title: "Enterprise SSO and federation",
    descLines: [
      "For: IAM and security leaders. Connect",
      "sign-in to your existing identity",
      "provider.",
    ],
    badge: "Architecture concept",
    linkText: "Authentication & SSO →",
    href: "/authentication-sso",
  },
  {
    image: "/integrations-operate/img-4faa84a350d307b1fd9e40fa16b552bb7d938c4f.png",
    icon: "/integrations-operate/icon-334_4269.svg",
    title: "Applications and policy",
    descLines: [
      "For: platform engineers. Request a",
      "bounded access decision from an",
      "application.",
    ],
    badge: "Architecture concept",
    linkText: "API Reference →",
    href: "/api-reference",
  },
  {
    image: "/integrations-operate/img-915ccd43aae6d5b5e497f4fd9494b2209026e73c.png",
    icon: "/integrations-operate/icon-334_4286.svg",
    title: "B2B organizations",
    descLines: [
      "For: SaaS product and customer-",
      "success teams. Represent",
      "organization affiliation clearly.",
    ],
    badge: "Architecture concept",
    linkText: "Organization Identity →",
    href: "/organization-identity",
  },
  {
    image: "/integrations-operate/img-0b91ddd95e087dbb314bb466490ff1d0076758d9.png",
    icon: "/integrations-operate/icon-334_4303.svg",
    title: "Machine and AI agents",
    descLines: [
      "For: automation and AI-agent",
      "architects. Sponsor, mandate, and",
      "scope come first.",
    ],
    badge: "Architecture concept",
    linkText: "AI Agent Security →",
    href: "/ai-agent-security",
  },
  {
    image: "/integrations-operate/img-45a5f6e93fc04bc827815139f4a1a87c6ad45ab8.png",
    icon: "/integrations-operate/icon-334_4319.svg",
    title: "Verifiable credentials",
    descLines: [
      "For: identity and compliance teams.",
      "Issue, hold, and verify ",
      "credentials.",
    ],
    badge: "Architecture concept",
    linkText: "Credentials →",
    href: "/authentication-sso",
  },
  {
    image: "/integrations-operate/img-cc7efd7bd3fbb38984055b3ffd74444f38781d0e.png",
    icon: "/integrations-operate/icon-334_4334.svg",
    title: "Webhooks and events",
    descLines: [
      "For: developers. Receive ",
      "notifications about trust-",
      "state changes.",
    ],
    badge: "Architecture concept",
    linkText: "Webhooks & Events →",
    href: "/changelog",
  },
];

export default function IntegrationsOperatePathwayFinderSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[60px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Find an integration path
          </h2>

          <p className="max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Choose the description closest to your goal. Each path points to the approved documentation destination for
            <br className="hidden sm:block" />
            {" "}that work.
          </p>
        </div>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {pathwayCards.map((card, idx) => (
            <div
              key={idx}
              className="flex h-full min-h-[540px] flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-xs transition-shadow duration-200 hover:shadow-lg"
            >
              {/* Card Photo Header - Flush edge-to-edge */}
              <div className="relative h-[170px] w-full shrink-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-7">
                {/* Icon Badge */}
                <div className="flex size-[52px] h-[54px] shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                </div>

                {/* Card Title - Unified 1-line scale */}
                <h3 className="mt-4 flex h-[38px] items-center font-dm-serif text-[20px] font-normal leading-[38px] tracking-tight text-[#071426] sm:text-[21px] xl:text-[22.4px]">
                  <span className="truncate">{card.title}</span>
                </h3>

                {/* Card Description - Unified 3-line scale */}
                <p className="mt-3 h-[76px] font-manrope text-[14.9px] font-bold leading-[25.3px] text-[#64748B]">
                  {card.descLines[0]}
                  <br className="hidden sm:block" />
                  {card.descLines[1]}
                  <br className="hidden sm:block" />
                  {card.descLines[2]}
                </p>

                {/* Architecture concept badge */}
                <div className="mt-4">
                  <span className="inline-flex h-[35px] items-center rounded-[20px] bg-[#E2E8F0] px-6 py-2 font-manrope text-[11.2px] font-bold uppercase tracking-[0.56px] text-[#334155]">
                    {card.badge}
                  </span>
                </div>

                {/* Bottom Link */}
                <div className="mt-auto pt-8">
                  <Link
                    href={card.href}
                    className="inline-flex h-[28px] items-center font-manrope text-base font-normal text-[#2563EB] hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
