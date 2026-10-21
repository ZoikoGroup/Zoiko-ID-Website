import Image from "next/image";
import Link from "next/link";

const pathways = [
  { img: "mobile-hero-portrait.webp", title: "Identity", body: "Establish who or what is acting.", link: "Enterprise →", href: "/identity-guides" },
  { img: "mobile-route-delegated-authority.webp", title: "Delegated authority", body: "Scope what an actor may do, and for whom.", link: "Platform & Usage Model →", href: "/pricing-overview" },
  { img: "mobile-route-evidence.webp", title: "Evidence", body: "Explain the decision and its relevant changes.", link: "Trust Center →", href: "/trust-center" },
  { img: "mobile-route-integrations.webp", title: "Integrations", body: "Federation, APIs and event integration.", link: "API Reference →", href: "/api-reference" },
  { img: "mobile-route-ai-agents.webp", title: "AI agents", body: "Sponsorship and bounded action for agents.", link: "AI Agent Security →", href: "/machine-agent-identity-guides" },
  { img: "mobile-route-architecture.webp", title: "Architecture", body: "How the platform sits beside your estate.", link: "Architecture Overview →", href: "/architecture-guides" },
];

export default function MobileEvaluationPathwaysSection() {
  return (
    <section id="evaluation-pathways" className="lg:hidden w-full px-[22px] pb-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
          Evaluation pathways
        </p>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Identity, authority, evidence, integrations and agents
        </h2>
        <ul className="flex w-full flex-col border-t-2 border-solid border-[#2563eb] pt-[28px]">
          {pathways.map((p) => (
            <li key={p.title} className="flex w-full flex-col items-start gap-[6px] pb-[1.1px] pr-[24px] pt-[28px]">
              <div className="relative h-[150px] w-full overflow-hidden rounded-[14px]">
                <Image src={`/talk-to-sales/${p.img}`} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <h3 className="pt-[10px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">{p.title}</h3>
              <p className="pb-[3.5px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{p.body}</p>
              <Link
                href={p.href}
                className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#1d4ed8] transition-transform hover:-translate-y-0.5 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              >
                {p.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
