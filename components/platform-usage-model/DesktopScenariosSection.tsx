import Image from "next/image";

const scenarios = [
  {
    title: "Workforce federation",
    image: "/platform-usage-model/desktop-usecase-workforce-federation.webp",
    alt: "Workforce identity federation across applications",
    questions: [
      "Which identity provider is authoritative?",
      "Which applications federate?",
    ],
    owner: "Owner: Identity architecture",
  },
  {
    title: "Third-party delegated access",
    image: "/platform-usage-model/desktop-usecase-third-party-access.webp",
    alt: "Third-party delegated access between a principal and a delegate",
    questions: [
      "Who is the principal, and who is the delegate?",
      "What purpose and timeframe apply?",
    ],
    owner: "Owner: Security and Legal",
  },
  {
    title: "Machine and agent tool access",
    image: "/platform-usage-model/desktop-usecase-machine-agent-access.webp",
    alt: "Machine and agent access to bounded tools and resources",
    questions: [
      "Which sponsor is accountable?",
      "Which tools and resources are bounded?",
    ],
    owner: "Owner: Platform engineering",
  },
];

export default function DesktopScenariosSection() {
  return (
    <section
      id="scenarios"
      className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <h2 className="font-dm-serif max-w-[879px] text-[52px] font-normal leading-[58.8px] tracking-[-0.38px] text-[#07111f]">
          Three anonymized, conceptual scenarios
        </h2>
        <p className="font-manrope max-w-[780px] pt-[12px] text-[15px] font-normal leading-[24px] text-[#64748b]">
          These illustrate questions to validate, not customer stories, ROI figures or contractual outcomes.
        </p>
      </div>
      <ul className="flex w-full items-start justify-center gap-[20px]">
        {scenarios.map((s) => (
          <li
            key={s.title}
            className="relative flex min-w-px flex-[1_0_0] flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#e2e8f0] bg-white"
          >
            <div className="relative h-[200px] w-full shrink-0">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-[8px] p-[26px]">
              <h3 className="font-manrope w-full pb-[6px] text-[16px] font-bold leading-[25.6px] text-[#07111f]">
                {s.title}
              </h3>
              <ul className="font-manrope flex w-full list-disc flex-col gap-[4px] pl-[18px] text-[14px] font-normal leading-[22.4px] text-[#334155]">
                {s.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
              <div className="relative w-full rounded-[10px] bg-[rgba(34,184,214,0.1)] px-[12px] pb-[9.19px] pt-[8px]">
                <p className="font-manrope text-[12px] font-normal leading-[19.2px] text-[#07111f]">
                  {s.owner}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
