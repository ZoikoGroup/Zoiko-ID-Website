import Image from "next/image";

const cells = [
  ["Title and one-sentence answer", "The question the guide answers"],
  ["Concept topic and depth", "Editorial tags, reviewed"],
  ["Question-led headings", "Each section answers one question"],
  ["Steps and caveats", "What holds, and what does not"],
  ["Related documentation", "Approved routes only"],
  ["Owner, reviewer and review date", "Shown only when verified"],
  ["Withdrawn or superseded notice", "Points to a supported replacement"],
  ["Content type and link", "Editorial type, resolved route"],
];

export default function GuideStructureSection() {
  return (
    <section className="w-full bg-[#f1f5f9] py-[105px] px-[160px]">
      <div className="mx-auto flex w-full flex-col gap-[60px]">
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            How every guide in this library is structured
          </h2>
          <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            This is the layout each guide follows. It is a template, not a guide.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <div className="relative h-[380px] w-full rounded-[32px]">
            <Image
              src="/machine-agent-identity-guides/desktop-guide-structure.webp"
              alt=""
              fill
              sizes="(min-width: 1440px) 1120px, 90vw"
              className="rounded-[32px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-[22px] rounded-[22px] border border-dashed border-[#94a3b8] bg-white p-9">
            <span className="rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#334155]">
              Template · no guide shown
            </span>
            <ul className="grid w-full grid-cols-2 overflow-hidden rounded-[14px] border border-[#e2e8f0]">
              {cells.map(([t, d], i) => (
                <li
                  key={t}
                  className={`flex flex-col gap-[2.5px] border-b border-[#e2e8f0] px-5 pb-[15.9px] pt-[15px] ${i % 2 === 0 ? "border-r" : ""}`}
                >
                  <h3 className="font-manrope text-[12px] font-bold uppercase leading-[19.2px] tracking-[0.72px] text-[#07111f]">{t}</h3>
                  <p className="font-manrope text-[14px] leading-[22.4px] text-[#64748b]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
