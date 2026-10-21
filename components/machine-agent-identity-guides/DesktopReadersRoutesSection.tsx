import Image from "next/image";

const readers = [
  ["reader-security-lead.webp", "Security lead", "Reads the actor comparison, then the lifecycle, then evidence.", "Next: Trust Center"],
  ["reader-developer.webp", "Developer", "Reads the workload concepts, then goes to exact interfaces.", "Next: API Reference"],
  ["reader-ai-engineer.webp", "AI engineer", "Reads sponsorship and mandate bounds before anything else.", "Next: Delegated Authority"],
  ["reader-enterprise-architect.webp", "Enterprise architect", "Reads the overlay map and the integration boundaries.", "Next: Architecture Guides"],
  ["reader-screen-reader-user.webp", "Screen-reader user", "Moves from the filters to the diagram text equivalent.", "Next: any guide, full text"],
];

export default function ReadersRoutesSection() {
  return (
    <section className="w-full bg-white py-[105px] px-[160px]">
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Five readers, five routes through this guide
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            Each reader arrives with a different decision. The routes below show where to start and where each one leads next.
          </p>
        </div>
        <ul className="flex items-stretch gap-4">
          {readers.map(([img, title, desc, next]) => (
            <li key={title} className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white">
              <div className="relative h-[130px] w-full shrink-0">
                <Image
                  src={`/machine-agent-identity-guides/desktop-${img}`}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 216px, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[6.9px] p-5">
                <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{title}</h3>
                <p className="pb-[0.6px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]">{desc}</p>
                <p className="mt-auto rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8.2px] pt-[7px] font-manrope text-[12px] leading-[19.2px] text-[#07111f]">
                  {next}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
