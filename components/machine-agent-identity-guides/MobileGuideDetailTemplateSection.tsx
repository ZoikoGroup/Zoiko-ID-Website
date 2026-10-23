import Eyebrow from "./MobileEyebrow";

const rows: [string, string][] = [
  ["Title and one-sentence answer", "The question the guide answers"],
  ["Concept topic and depth", "Editorial tags, reviewed"],
  ["Question-led headings", "Each section answers one question"],
  ["Steps and caveats", "What holds, and what does not"],
  ["Related documentation", "Approved routes only"],
  ["Owner, reviewer and review date", "Shown only when verified"],
  ["Withdrawn or superseded notice", "Points to a supported replacement"],
  ["Content type and link", "Editorial type, resolved route"],
];

export default function GuideDetailTemplateSection() {
  return (
    <section className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <Eyebrow>Guide detail template</Eyebrow>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          How every guide in this
          <br />
          library is structured
        </h2>
        <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          This is the layout each guide follows. It is a template, not a guide.
        </p>
        <div className="flex flex-col items-start gap-[22.01px] rounded-[22px] border border-dashed border-[#94a3b8] bg-white px-[36px] pb-[36px] pt-[60px]">
          <span className="rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[color:#334155]">
            Template · no guide shown
          </span>
          <ul className="w-full overflow-clip rounded-[14px] border border-solid border-[#e2e8f0]">
            {rows.map(([title, text], i) => (
              <li
                key={title}
                className={`flex flex-col gap-[2.5px] border-b border-solid border-[#e2e8f0] px-[20px] pb-[15.9px] pt-[15px] ${i % 2 === 0 ? "border-r" : ""}`}
              >
                <h3 className="font-manrope text-[12px] font-bold uppercase leading-[19.2px] tracking-[0.72px] text-[#2563eb]">{title}</h3>
                <p className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
