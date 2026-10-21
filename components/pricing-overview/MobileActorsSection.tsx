import Image from "next/image";

const actors = [
  { src: "/pricing-overview/mobile-actors-people.webp", label: "People and organizations" },
  { src: "/pricing-overview/mobile-actors-services.webp", label: "Services and machines" },
  { src: "/pricing-overview/mobile-actors-ai-agents.webp", label: "AI agents" },
];

export default function MobileActorsSection() {
  return (
    <section id="section-03" className="w-full px-[11px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="mb-[-9px] font-dm-serif font-normal text-[64px] leading-[64px] text-[#e0f2fe]">03</p>
        <h2 className="mb-[-9px] font-dm-serif font-normal text-[30px] leading-[34.5px] text-[#2563eb]">
          Actors and usage dimensions
        </h2>
        <div className="mb-[-9px] max-w-[720px] pt-[22.07px]">
          <p className="font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
            Actor type does not set a price unit. Humans, organizations, services, machines and AI agents are governed differently, and naming one does not define how a proposal is structured.
          </p>
        </div>
        <ul className="mb-[-9px] flex flex-col gap-[18px] pt-[43px]">
          {actors.map((a) => (
            <li key={a.src} className="flex flex-col gap-[8px]">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image src={a.src} alt={a.label} fill sizes="(min-width: 560px) 560px, 100vw" className="object-cover" />
              </div>
              <p className="font-manrope font-normal text-[13px] leading-[21.45px] text-[#64748b]">{a.label}</p>
            </li>
          ))}
        </ul>
        <p className="pb-[0.625px] pt-[33.875px] font-manrope font-bold text-[15px] leading-[24.75px] text-[#2563eb]">
          Commercial questions, not counters. No totals, counters or quoted figures appear on this page.
        </p>
      </div>
    </section>
  );
}
