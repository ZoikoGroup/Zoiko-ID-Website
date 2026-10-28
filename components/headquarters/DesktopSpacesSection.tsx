import Image from "next/image";

const cards = [
  { img: "office", icon: "building-1", label: "Working spaces", alt: "A working office space" },
  { img: "whiteboard", icon: "layers-1", label: "Planning and review", alt: "A whiteboard used for planning and review" },
  { img: "meeting", icon: "user", label: "Working together", alt: "Colleagues working together in a meeting" },
];

export default function DesktopSpacesSection() {
  return (
    <section className="flex flex-col items-start gap-[60px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] pb-[105px] pt-[112.31px]">
      <div className="flex w-full flex-col items-start gap-[17px]">
        <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33] [word-break:break-word]">
          A headquarters in Sacramento, and a listed office in London
        </h2>
        <p className="max-w-[680px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] [word-break:break-word] xl:whitespace-nowrap">
          Zoiko Tech Inc. is based in California. Its European office is listed separately. The<br className="max-xl:hidden" />{" "}
          photographs below show working environments, not specific rooms or staff.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center gap-[18px]">
        {cards.map((c) => (
          <li
            key={c.img}
            className="flex min-w-px flex-1 flex-col items-start overflow-hidden rounded-[20px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[300px] w-full shrink-0">
              <Image
                src={`/headquarters/desktop-spaces-${c.img}.webp`}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex h-[60px] w-full shrink-0 items-center gap-[10px] px-[20px]">
              <Image src={`/headquarters/desktop-icon-${c.icon}.svg`} alt="" width={18} height={18} className="mx-[5px]" />
              <span className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">{c.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
