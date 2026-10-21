import Image from "next/image";

const actors = [
  { src: "/pricing-overview/desktop-actors-people.webp", label: "People and organizations" },
  { src: "/pricing-overview/desktop-actors-services.webp", label: "Services and machines" },
  { src: "/pricing-overview/desktop-actors-ai-agents.webp", label: "AI agents" },
];

export default function DesktopActorsSection() {
  return (
    <section
      id="section-03"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="w-full font-dm-serif font-normal text-[96px] leading-[96px] text-[#e0f2fe]">03</p>
        <h2 className="w-full pb-[0.89px] font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
          Actors and usage dimensions
        </h2>
        <p className="max-w-[720px] font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
          Actor type does not set a price unit. Humans, organizations, services, machines and AI agents are governed differently, and naming one does not define how a proposal is structured.
        </p>
      </div>
      <ul className="flex w-full items-start justify-center gap-[18px]">
        {actors.map((a) => (
          <li key={a.label} className="flex min-w-px flex-1 flex-col items-start gap-[8px]">
            <div className="relative h-[200px] w-full">
              <Image src={a.src} alt={a.label} fill sizes="(min-width: 1440px) 245px, 25vw" className="object-cover" />
            </div>
            <p className="w-full font-manrope font-normal text-[13px] leading-[21.45px] text-[#64748b]">{a.label}</p>
          </li>
        ))}
      </ul>
      <p className="w-full font-manrope font-bold text-[15px] leading-[24.75px] text-[#07111f]">
        Commercial questions, not counters. No totals, counters or quoted figures appear on this page.
      </p>
    </section>
  );
}
