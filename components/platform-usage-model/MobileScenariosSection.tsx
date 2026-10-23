import Image from "next/image";

const scenarios = [
  {
    img: "/platform-usage-model/mobile-usecase-workforce-federation.webp",
    alt: "Workforce identity federation across applications",
    title: "Workforce federation",
    questions: ["Which identity provider is authoritative?", "Which applications federate?"],
    owner: "Owner: Identity architecture",
  },
  {
    img: "/platform-usage-model/mobile-usecase-third-party-access.webp",
    alt: "Third-party delegated access",
    title: "Third-party delegated access",
    questions: ["Who is the principal, and who is the delegate?", "What purpose and timeframe apply?"],
    owner: "Owner: Security and Legal",
  },
  {
    img: "/platform-usage-model/mobile-usecase-machine-agent-access.webp",
    alt: "Machine and agent tool access",
    title: "Machine and agent tool access",
    questions: ["Which sponsor is accountable?", "Which tools and resources are bounded?"],
    owner: "Owner: Platform engineering",
  },
];

export default function MobileScenariosSection() {
  return (
    <section id="scenarios" className="w-full px-[22px] pb-[60px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          Enterprise evaluation scenarios
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Three anonymized, conceptual scenarios
        </h2>
        <p className="max-w-[780px] pt-[12px] font-manrope text-[15px] leading-[24px] text-[#64748b]">
          These illustrate questions to validate, not customer stories, ROI figures or contractual outcomes.
        </p>
        <div className="flex flex-col gap-[20px] pt-[44px]">
          {scenarios.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white">
              <div className="relative h-[200px] w-full">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[8px] p-[26px]">
                <h3 className="pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                  {s.title}
                </h3>
                <ul className="flex flex-col gap-[4px] text-[#334155]">
                  {s.questions.map((q) => (
                    <li key={q} className="relative pl-[18px] font-manrope text-[14px] leading-[22.4px]">
                      <span aria-hidden="true" className="absolute left-[4px] top-0">•</span>
                      {q}
                    </li>
                  ))}
                </ul>
                <div className="rounded-[10px] bg-[#f5f7fa] px-[12px] pb-[9.19px] pt-[8px]">
                  <p className="font-manrope text-[12px] leading-[19.2px] text-[#2563eb]">{s.owner}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
