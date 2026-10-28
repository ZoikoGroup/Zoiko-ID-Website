import Image from "next/image";

const items = [
  { icon: "/headquarters/desktop-icon-key.svg", text: "Keyboard: skip link first, every control reachable and visible." },
  { icon: "/headquarters/desktop-icon-eye.svg", text: "Screen readers: one H1, a semantic address, clear link names." },
  { icon: "/headquarters/desktop-icon-search.svg", text: "Zoom: usable at 200% and 400% with reflow." },
  { icon: "/headquarters/desktop-icon-doc-1.svg", text: "Print: the address and link labels print; navigation does not." },
];

export default function DesktopReadableSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] py-[105px]">
      <div className="flex w-full items-center justify-center gap-[80px]">
        <div className="flex min-w-px flex-1 flex-col gap-[36px] pt-[7.32px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Readable on screen and on paper
          </h2>
          <ul className="flex w-full flex-col gap-[14px] pt-[9px]">
            {items.map((item) => (
              <li key={item.text} className="flex w-full items-start gap-[14px] rounded-[8px] bg-white px-[24px] py-[8px]">
                <span className="flex size-[22px] shrink-0 items-center justify-center pt-[3px]">
                  <Image src={item.icon} width={20} height={20} alt="" className="size-[20px]" />
                </span>
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[540px] min-w-px flex-1 rounded-[24px]">
          <Image
            src="/headquarters/desktop-analytics-code.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 50vw"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
