import Image from "next/image";

const ITEMS: { icon: string; text: React.ReactNode }[] = [
  { icon: "key", text: (<>Keyboard: skip link first, every control<br />reachable and visible.</>) },
  { icon: "eye-1", text: (<>Screen readers: one H1, a semantic address,<br />clear link names.</>) },
  { icon: "search", text: (<>Zoom: usable at 200% and 400% with reflow.</>) },
  { icon: "doc-1", text: (<>Print: the address and link labels print;<br />navigation does not.</>) },
];

export default function MobileAccessibilityPrintSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="flex w-full flex-col gap-[16.8px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              14 · Accessibility and print
            </p>
          </div>
          <h2 className="pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Readable on screen and on<br />paper
          </h2>
          <ul className="flex w-full flex-col gap-[14px] pt-[9.2px]">
            {ITEMS.map((it) => (
              <li key={it.icon} className="flex w-full items-start gap-[14px]">
                <span className="flex size-[22px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src={`/headquarters/mobile-icon-${it.icon}.svg`} width={20} height={20} alt="" />
                </span>
                <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] whitespace-nowrap">
                  {it.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/headquarters/mobile-analytics-code.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
