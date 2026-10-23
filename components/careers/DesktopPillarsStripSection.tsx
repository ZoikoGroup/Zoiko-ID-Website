import Image from "next/image";

const items = [
  { icon: "shield", title: "Identity", text: "Who or what is represented", w: 329 },
  { icon: "key", title: "Authority", text: "What may be done, and by whom", w: 369 },
  { icon: "doc", title: "Evidence", text: "A reviewable record of decisions", w: 361 },
  { icon: "bot", title: "AI agents", text: "Non-human actors under a sponsor", w: 381 },
];

export default function DesktopPillarsStripSection() {
  return (
    <section className="hidden w-full border-y border-solid border-[#dce3ee] bg-white px-[56px] lg:block">
      <ul
        className="grid"
        style={{ gridTemplateColumns: items.map((i) => `${i.w}fr`).join(" ") }}
      >
        {items.map((item, idx) => (
          <li
            key={item.title}
            className={`flex items-center justify-center gap-[16px] px-[28px] py-[34px] ${
              idx < items.length - 1 ? "border-r border-solid border-[#dce3ee]" : ""
            }`}
          >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src={`/careers/desktop-icon-${item.icon}.svg`} width={26} height={26} alt="" />
            </div>
            <div className="font-manrope">
              <p className="whitespace-nowrap text-[16px] font-bold leading-[26.4px] text-[#0b1b33]">{item.title}</p>
              <p className="text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
