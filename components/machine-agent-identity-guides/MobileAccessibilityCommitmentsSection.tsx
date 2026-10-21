import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  { icon: "gate-accessibility.svg", title: "Text first", text: "Every diagram has a full text equivalent in reading order." },
  { icon: "a11y-keyboard.svg", title: "Keyboard operable", text: "Filters, links and controls are reachable and visibly focused." },
  { icon: "provenance-source-references.svg", title: "Clear structure", text: "One H1, logical H2 and H3 headings, and labelled controls." },
  { icon: "icon-check-badge.svg", title: "Zoom and reflow", text: "Content reflows at 320px and remains usable at 400% zoom." },
];

export default function AccessibilityCommitmentsSection() {
  return (
    <section className="bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <Eyebrow>Accessibility commitments</Eyebrow>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Readable, navigable and usable without a mouse
        </h2>
        <p className="w-full max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#64748b]">
          These are design commitments that are tested before release. Each one applies to every section on this page.
        </p>
        <ul className="flex w-full flex-col gap-[18px] pt-[28px]">
          {items.map((i) => (
            <li
              key={i.title}
              className="flex flex-col items-start gap-[6px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]"
            >
              <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                <Image src={`/machine-agent-identity-guides/mobile-${i.icon}`} alt="" width={22} height={22} className="size-[22px]" />
              </div>
              <h3 className="w-full pt-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{i.title}</h3>
              <p className="w-full font-manrope text-[14px] font-normal leading-[22.4px] text-[color:#64748b]">{i.text}</p>
            </li>
          ))}
        </ul>
        <p className="w-full pt-[11.39px] font-manrope text-[14px] font-normal leading-[22.4px] text-[color:#64748b]">
          Target standard: WCAG 2.2 AA. Motion is reduced where the reader asks for it, and no meaning depends on colour alone.
        </p>
      </div>
    </section>
  );
}
