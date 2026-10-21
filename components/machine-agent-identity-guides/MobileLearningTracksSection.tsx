import Image from "next/image";

const tracks = [
  { name: "Architect", img: "track-architect", desc: "Trust boundaries and where decisions are made.", steps: ["Actor taxonomy", "Identity vs authority", "Overlay model"] },
  { name: "Developer", img: "track-developer", desc: "How an integration path connects to documentation.", steps: ["Machine lifecycle", "Credential boundaries", "API Reference"] },
  { name: "Security", img: "track-security", desc: "Policy, lifecycle and what happens on change.", steps: ["Continuous trust", "Revocation patterns", "Evidence model"] },
  { name: "AI teams", img: "track-ai-teams", desc: "Sponsorship, mandates and tool access.", steps: ["Agent sponsorship", "Mandate bounds", "Delegated authority"] },
];

export default function LearningTracksSection() {
  return (
    <section id="learning-tracks" className="px-[22px] py-[60px] font-manrope">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-3">
        <div className="flex items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">Learning tracks</span>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">Choose a track by your role</h2>
        <p className="max-w-[820px] pt-[2px] text-[16px] leading-[25.6px] text-[#64748b]">
          Each track is an editorial reading order. Tracks do not record completion, and steps are not certifications.
        </p>

        <ul className="flex w-full flex-col gap-[18px] pt-[28px]">
          {tracks.map((t) => (
            <li key={t.name} className="overflow-hidden rounded-[18px] border border-solid border-[#e2e8f0] bg-white">
              <div className="relative h-[140px] w-full">
                <Image src={`/machine-agent-identity-guides/mobile-${t.img}.webp`} alt={`${t.name} learning track`} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="flex flex-col items-start gap-2 p-[22px]">
                <h3 className="pb-[6px] text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{t.name}</h3>
                <p className="text-[14px] leading-[22.4px] text-[#64748b]">{t.desc}</p>
                <ol className="flex list-decimal flex-col gap-1 pl-[18px] text-[14px] leading-[22.4px] text-[#334155]">
                  {t.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                <span className="rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8.19px] pt-[7px] text-[12px] leading-[19.2px] text-[#2563eb]">
                  Destinations pending approval
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
