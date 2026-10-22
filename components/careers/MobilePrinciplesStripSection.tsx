import Image from "next/image";

const items = [
  { icon: "/careers/mobile-icon-shield-1.svg", title: "Identity", text: "Who or what is represented" },
  { icon: "/careers/mobile-icon-key.svg", title: "Authority", text: "What may be done, and by whom" },
  { icon: "/careers/mobile-icon-doc.svg", title: "Evidence", text: "A reviewable record of decisions" },
  { icon: "/careers/mobile-icon-bot.svg", title: "AI agents", text: "Non-human actors under a sponsor" },
];

export default function MobilePrinciplesStripSection() {
  return (
    <section className="w-full border-y border-solid border-[#dce3ee]">
      <ul className="mx-auto flex w-full max-w-[560px] flex-col">
        {items.map((it) => (
          <li
            key={it.title}
            className="flex w-full items-center gap-[16px] border-b border-solid border-[#dce3ee] px-[28px] py-[34px]"
          >
            <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src={it.icon} width={26} height={26} alt="" />
            </div>
            <div className="min-w-0">
              <p className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#0b1b33]">{it.title}</p>
              <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">{it.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
