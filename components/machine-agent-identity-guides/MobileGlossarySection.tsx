import Image from "next/image";

const terms = [
  { icon: "actor-non-human", term: "Non-human actor", def: "Any actor that is not a person, such as a service, workload, machine or agent." },
  { icon: "actor-principal", term: "Principal", def: "The identity that presents a request." },
  { icon: "actor-sponsor", term: "Sponsor", def: "The accountable human or organization behind a non-human actor." },
  { icon: "actor-mandate", term: "Mandate", def: "A bounded statement of what an actor may do, on what, for what purpose and for how long." },
  { icon: "actor-overlay", term: "Overlay", def: "A design where a new layer sits beside existing systems, not in place of them." },
  { icon: "actor-re-evaluation", term: "Re-evaluation", def: "Checking a permission again against the context that exists at that moment." },
  { icon: "actor-decision-record", term: "Decision record", def: "The explanation of an outcome, kept under privacy controls." },
  { icon: "actor-currency", term: "Currency", def: "Whether a statement is still current, shown only when its review is recorded." },
];

export default function GlossarySection() {
  return (
    <section id="glossary" className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <div className="flex h-[19.19px] items-center gap-[10px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
            Glossary
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Terms used on this page
        </h2>
        <dl className="flex flex-col pt-[24px]">
          {terms.map((t) => (
            <div
              key={t.term}
              className="flex items-start gap-[16px] border-t border-solid border-[#e2e8f0] py-[20px]"
            >
              <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#e0f2fe]">
                <Image
                  src={`/machine-agent-identity-guides/mobile-${t.icon}.svg`}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-[4px]">
                <dt className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                  {t.term}
                </dt>
                <dd className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">
                  {t.def}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
