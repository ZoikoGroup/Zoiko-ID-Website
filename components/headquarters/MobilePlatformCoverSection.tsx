import Image from "next/image";

const cards: {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  pill: string;
  src: string;
}[] = [
  {
    eyebrow: "Identity",
    title: "Who or what is acting",
    body: (
      <>
        Identity for people, organizations, services,
        <br />
        machines and AI agents.
      </>
    ),
    pill: "Platform overview pending",
    src: "/headquarters/mobile-platform-identity.webp",
  },
  {
    eyebrow: "Authority",
    title: "What may be done, and by whom",
    body: (
      <>
        Bounded delegated authority, with scope,
        <br />
        purpose and time limits.
      </>
    ),
    pill: "Route pending",
    src: "/headquarters/mobile-platform-authority.webp",
  },
  {
    eyebrow: "Evidence",
    title: "Reviewable records of decisions",
    body: (
      <>
        A descriptive record of important decisions.
        <br />
        Not an assurance guarantee.
      </>
    ),
    pill: "Route pending",
    src: "/headquarters/mobile-platform-evidence.webp",
  },
];

export default function MobilePlatformCoverSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16.9px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
            06 · What the platform covers
          </p>
        </div>
        <h2 className="font-dm-serif pb-[0.83px] text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          Three areas, one platform
        </h2>
        <p className="font-manrope max-w-[680px] pt-[1.1px] text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          Zoiko iD organises its work around identity,
          <br />
          authority and evidence. Each area has its
          <br />
          own product pages.
        </p>
        <ul className="flex flex-col gap-[22px] pt-[27.1px]">
          {cards.map((c) => (
            <li
              key={c.eyebrow}
              className="flex flex-col overflow-hidden rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[240px] w-full">
                <Image
                  src={c.src}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[10px] p-[28px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.44px] text-[#22b8d6]">
                  {c.eyebrow}
                </p>
                <h3 className="font-manrope h-[31.19px] whitespace-nowrap text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                  {c.title}
                </h3>
                <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                  {c.body}
                </p>
                <span className="font-manrope block w-full whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  {c.pill}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
