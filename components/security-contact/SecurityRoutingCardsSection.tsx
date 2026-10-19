import Image from "next/image";

interface RouteCard {
  title: string;
  description: string;
  owner: string;
  status: string;
  image: string;
  icon: string;
  alt: string;
}

export default function SecurityRoutingCardsSection() {
  const routes: RouteCard[] = [
    {
      title: "Responsible Disclosure",
      description: "Suspected product vulnerabilities and\ncoordinated researcher reporting.",
      owner: "Owner: AppSec / PSIRT",
      status: "Route pending registry",
      image: "/security-contact/route-disclosure.png",
      icon: "/security-contact/route-card-icon-disclosure.svg",
      alt: "Responsible Disclosure review",
    },
    {
      title: "Security Advisories",
      description: "Published security notices, remediation and\ndisclosure history.",
      owner: "Owner: Security Response",
      status: "Route pending registry",
      image: "/security-contact/route-advisories.png",
      icon: "/security-contact/route-card-icon-advisories.svg",
      alt: "Security Advisories documentation",
    },
    {
      title: "Availability / Status",
      description: "Service health, maintenance and incident status.",
      owner: "Owner: Security Operations",
      status: "Route pending registry",
      image: "/security-contact/route-status.png",
      icon: "/security-contact/route-card-icon-status.svg",
      alt: "Availability and status tracking",
    },
    {
      title: "Trust Center",
      description: "Security, privacy and assurance evidence, with\nrestricted access.",
      owner: "Owner: GRC",
      status: "Route pending registry",
      image: "/security-contact/route-trust-783ca0.png",
      icon: "/security-contact/route-card-icon-trust.svg",
      alt: "Trust Center compliance",
    },
    {
      title: "Privacy",
      description: "Privacy architecture, data rights and approved\nprivacy enquiries.",
      owner: "Owner: Privacy and Legal",
      status: "Route pending registry",
      image: "/security-contact/route-privacy.png",
      icon: "/security-contact/route-card-icon-privacy.svg",
      alt: "Privacy architecture and data rights",
    },
    {
      title: "Sales and Support",
      description: "Commercial enquiries and standard account\nsupport, without sensitive incident data.",
      owner: "Owner: Sales and Support",
      status: "Route pending registry",
      image: "/security-contact/route-sales-6022e4.png",
      icon: "/security-contact/route-card-icon-sales.svg",
      alt: "Sales and enterprise support",
    },
  ];

  return (
    <section id="routing-cards" className="relative w-full bg-[#F1F5F9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-12 sm:py-20 lg:px-[160px] lg:py-[105px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <h2 className="font-[family-name:var(--font-dm-serif-display-family)] text-3xl sm:text-4xl lg:text-[52px] font-normal lg:leading-[57.8px] text-[#0B1B33]">
              Where each route goes, and who owns it
            </h2>
            <div className="max-w-[920px] pt-[1.3px]">
              <p className="font-[family-name:var(--font-manrope-family)] text-[16px] font-normal leading-[25.6px] text-[#64748B]">
                <span className="block sm:whitespace-nowrap">
                  These destinations are separate on purpose. Each owns its own work, so a question about one is never handled as
                </span>
                <span className="block">if it were another.</span>
              </p>
            </div>
          </div>

          {/* 6 Routing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {routes.map((route, idx) => (
              <div
                key={idx}
                className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white transition-all duration-200 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Content Box */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex flex-col gap-3">
                    {/* Icon Badge */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#E0F2FE]">
                      <Image
                        src={route.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 pt-1">
                      <h4 className="font-[family-name:var(--font-manrope-family)] text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                        {route.title}
                      </h4>
                      <p className="font-[family-name:var(--font-manrope-family)] text-[14px] font-normal leading-[22.4px] text-[#64748B] whitespace-pre-line">
                        {route.description}
                      </p>
                    </div>
                  </div>

                  {/* Owner & Status Badges */}
                  <div className="mt-5 flex flex-col gap-2">
                    <div className="rounded-[8px] bg-[#F1F5F9] px-[10px] py-2">
                      <span className="font-[family-name:var(--font-manrope-family)] text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                        {route.owner}
                      </span>
                    </div>
                    <div className="flex items-center rounded-full bg-[#FEF3C7] px-[11px] py-[5px]">
                      <span className="font-[family-name:var(--font-manrope-family)] text-[11px] font-extrabold uppercase tracking-[0.08em] leading-[17.6px] text-[#92400E]">
                        {route.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
