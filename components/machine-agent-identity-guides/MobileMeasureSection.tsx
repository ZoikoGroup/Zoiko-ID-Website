import Image from "next/image";

const collected = [
  "Which guide category was opened",
  "Which filter category was changed",
  "That a search was submitted, and how many results appeared",
  "Which documentation link was followed",
];
const notCollected = [
  "Raw search text",
  "User or account identifiers",
  "Credentials, keys or tokens",
  "Tenant or customer data",
];

function List({ items, icon }: { items: string[]; icon: string }) {
  return (
    <ul className="flex flex-col gap-[8px]">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-[10px]">
          <span className="mt-[3px] shrink-0">
            <Image src={`/machine-agent-identity-guides/mobile-${icon}.svg`} alt="" width={18} height={18} />
          </span>
          <span className="font-manrope text-[14px] leading-[22.4px] text-[color:#334155]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MeasureSection() {
  return (
    <section id="what-we-measure" className="w-full bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <div className="flex items-center gap-[10px]">
          <span className="h-[2px] w-[22.53px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
            What we measure, and what we never collect
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Categories only, never content
        </h2>
        <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          Analytics record which kinds of guide were opened, not what a reader typed or who they are. The lists below are the rule.
        </p>
        <div className="flex flex-col gap-[28px] pt-[28px]">
          <div className="flex flex-col gap-[10px] rounded-[18px] border border-solid border-[#e2e8f0] bg-white p-[26px]">
            <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">We may record</h3>
            <List items={collected} icon="analytics-collected" />
          </div>
          <div className="flex flex-col gap-[8px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]">
            <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">We never record</h3>
            <div className="pt-[10px]">
              <List items={notCollected} icon="analytics-not-collected" />
            </div>
          </div>
        </div>
        <p className="pt-[10px] font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">
          Collection depends on the approved consent configuration and retention policy. Where consent is not configured, nothing is collected beyond what the site needs to function.
        </p>
      </div>
    </section>
  );
}
