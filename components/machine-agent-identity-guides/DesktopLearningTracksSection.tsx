import Image from "next/image";

const TRACKS = [
  { title: "Architect", desc: "Trust boundaries and where decisions are made.", img: "track-architect", pos: "object-center", steps: ["Actor taxonomy", "Identity vs authority", "Overlay model"] },
  { title: "Developer", desc: "How an integration path connects to documentation.", img: "track-developer", pos: "object-top", steps: ["Machine lifecycle", "Credential boundaries", "API Reference"] },
  { title: "Security", desc: "Policy, lifecycle and what happens on change.", img: "track-security", pos: "object-top", steps: ["Continuous trust", "Revocation patterns", "Evidence model"] },
  { title: "AI teams", desc: "Sponsorship, mandates and tool access.", img: "track-ai-teams", pos: "object-center", steps: ["Agent sponsorship", "Mandate bounds", "Delegated authority"] },
];

export default function LearningTracksSection() {
  return (
    <section
      id="learning-tracks"
      className="w-full bg-white py-[105px] px-[160px]"
    >
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            Choose a track by your role
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            Each track is an editorial reading order. Tracks do not record completion, and steps are not certifications.
          </p>
        </div>
        <ul className="grid grid-cols-4 items-start gap-[18px]">
          {TRACKS.map((t) => (
            <li
              key={t.title}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white"
            >
              <div className="relative h-[140px] w-full shrink-0">
                <Image
                  src={`/machine-agent-identity-guides/desktop-${t.img}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 267px, 25vw"
                  className={`object-cover ${t.pos}`}
                />
              </div>
              <div className="flex flex-col gap-[8px] p-[22px]">
                <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">
                  {t.title}
                </h3>
                <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                  {t.desc}
                </p>
                <ol className="list-decimal pl-[18px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155] [&>li+li]:mt-[4px]">
                  {t.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
