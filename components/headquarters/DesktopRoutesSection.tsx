import Image from "next/image";

const routes = [
  { title: "Corporate enquiries", body: "General questions about Zoiko Tech Inc.", img: "documents", icon: "building-2" },
  { title: "Media / Press", body: "Press and media enquiries, handled separately.", img: "laptop", icon: "doc" },
  { title: "Procurement / Enterprise", body: "Enterprise and procurement enquiries.", img: "meeting", icon: "send" },
  { title: "Security contact", body: "Security concerns go here, not to this page.", img: "lock", icon: "shield" },
];

export default function DesktopRoutesSection() {
  return (
    <section className="hidden w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] pb-[105.01px] pt-[112.31px] lg:block">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[17px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Choose the team that fits your question
          </h2>
          <p className="max-w-[680px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
            This page has no general enquiry form. Each route goes to a named destination that <br className="max-xl:hidden" />
            owns its topic.
          </p>
        </div>
        <ul className="grid grid-cols-2 items-stretch gap-[22px]">
          {routes.map((r) => (
            <li
              key={r.title}
              className="relative flex h-[221.38px] overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-full w-[200px] shrink-0">
                <Image
                  src={`/headquarters/desktop-route-${r.img}.webp`}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between p-[26px]">
                <div className="flex flex-col gap-[9px]">
                  <div className="flex h-[51px] w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] pb-px">
                    <Image src={`/headquarters/desktop-icon-${r.icon}.svg`} width={24} height={24} alt="" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <h3 className="h-[24px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                      <span className="relative -top-px">{r.title}</span>
                    </h3>
                    <p className="pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                      {r.body}
                    </p>
                  </div>
                </div>
                <div className="flex pt-px">
                  <span className="rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                    Route pending
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
