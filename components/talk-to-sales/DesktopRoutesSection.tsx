import Image from "next/image";
import Link from "next/link";

const routes = [
  { title: "Identity", body: "Establish who or what is acting.", cta: "Enterprise →", href: "/identity-guides", img: "/talk-to-sales/desktop-hero-portrait.webp" },
  { title: "Delegated authority", body: "Scope what an actor may do, and for whom.", cta: "Platform & Usage Model →", href: "/authority-explainers", img: "/talk-to-sales/desktop-route-delegated-authority.webp" },
  { title: "Evidence", body: "Explain the decision and its relevant changes.", cta: "Trust Center →", href: "/trust-center", img: "/talk-to-sales/desktop-route-evidence.webp" },
  { title: "Integrations", body: "Federation, APIs and event integration.", cta: "API Reference →", href: "/api-reference", img: "/talk-to-sales/desktop-route-integrations.webp" },
  { title: "AI agents", body: "Sponsorship and bounded action for agents.", cta: "AI Agent Security →", href: "/machine-agent-identity-guides", img: "/talk-to-sales/desktop-route-ai-agents.webp" },
  { title: "Architecture", body: "How the platform sits beside your estate.", cta: "Architecture Overview →", href: "/architecture-guides", img: "/talk-to-sales/desktop-route-architecture.webp" },
];

export default function DesktopRoutesSection() {
  return (
    <section id="enquiry-types" className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]">
      <h2 className="max-w-[986px] font-dm-serif text-[52px] font-normal leading-[57.2px] text-[#07111f]">
        Identity, authority, evidence, integrations and agents
      </h2>
      <ul className="grid w-full grid-cols-3 gap-x-[32px] gap-y-[32px]">
        {routes.map((r) => (
          <li key={r.title} className="flex flex-col items-start gap-[6px] pb-[1.1px] pr-[24px] pt-[28px]">
            <div className="relative h-[150px] w-full overflow-hidden rounded-[14px]">
              <Image src={r.img} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <h3 className="w-full pt-[10px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
              {r.title}
            </h3>
            <p className="w-full pb-[3.5px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
              {r.body}
            </p>
            <Link
              href={r.href}
              className="whitespace-nowrap font-manrope text-[14px] font-bold leading-[22.4px] text-[#1d4ed8] transition-colors hover:text-[#07111f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              {r.cta}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
