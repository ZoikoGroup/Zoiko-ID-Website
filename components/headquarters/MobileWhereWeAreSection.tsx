import Image from "next/image";

const spaces = [
  { src: "/headquarters/mobile-spaces-office.webp", icon: "/headquarters/mobile-icon-building-1.svg", label: "Working spaces", alt: "A modern working space with desks and natural light" },
  { src: "/headquarters/mobile-spaces-whiteboard.webp", icon: "/headquarters/mobile-icon-layers-2.svg", label: "Planning and review", alt: "A whiteboard used for planning and review" },
  { src: "/headquarters/mobile-spaces-meeting.webp", icon: "/headquarters/mobile-icon-user.svg", label: "Working together", alt: "People working together in a meeting space" },
];

export default function MobileWhereWeAreSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] px-[22px] pb-[60px] pt-[67.31px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.7px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              03 · Where we are
            </p>
          </div>
          <h2 className="font-dm-serif w-full pb-[0.655px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            A headquarters in<br />
            Sacramento, and a listed<br />
            office in London
          </h2>
          <p className="font-manrope w-full max-w-[680px] pt-[0.69px] text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Zoiko Tech Inc. is based in California. Its<br />
            European office is listed separately. The<br />
            photographs below show working<br />
            environments, not specific rooms or staff.
          </p>
          <ul className="flex w-full flex-col items-start gap-[18px] pt-[27.29px]">
            {spaces.map((s) => (
              <li key={s.src} className="relative flex w-full flex-col overflow-clip rounded-[20px] border border-solid border-[#d9e1ec] bg-white">
                <div className="relative h-[300px] w-full">
                  <Image src={s.src} alt={s.alt} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
                </div>
                <div className="flex h-[60px] w-full items-center gap-[10px] px-[20px]">
                  <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[14px]">
                    <Image src={s.icon} alt="" width={18} height={18} />
                  </div>
                  <p className="font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">{s.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
