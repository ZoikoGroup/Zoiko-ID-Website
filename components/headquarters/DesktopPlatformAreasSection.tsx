import Image from "next/image";

const cards = [
  {
    eyebrow: "Identity",
    title: "Who or what is acting",
    body: (
      <>
        Identity for people, organizations, services,{" "}
        <br className="max-xl:hidden" />
        machines and AI agents.
      </>
    ),
    badge: "Platform overview pending",
    img: "/headquarters/desktop-platform-identity.webp",
    crop: true,
    alt: "Identity",
  },
  {
    eyebrow: "Authority",
    title: "What may be done, and by whom",
    body: (
      <>
        Bounded delegated authority, with scope,{" "}
        <br className="max-xl:hidden" />
        purpose and time limits.
      </>
    ),
    badge: "Route pending",
    img: "/headquarters/desktop-platform-authority.webp",
    crop: false,
    alt: "Authority",
  },
  {
    eyebrow: "Evidence",
    title: "Reviewable records of decisions",
    body: (
      <>
        A descriptive record of important decisions.{" "}
        <br className="max-xl:hidden" />
        Not an assurance guarantee.
      </>
    ),
    badge: "Route pending",
    img: "/headquarters/desktop-platform-evidence.webp",
    crop: false,
    alt: "Evidence",
  },
];

export default function DesktopPlatformAreasSection() {
  return (
    <section className="flex w-full flex-col gap-[60px] border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[160px] pb-[105px] pt-[112.31px]">
      <div className="flex w-full flex-col gap-[17px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          Three areas, one platform
        </h2>
        <p className="max-w-[680px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Zoiko iD organises its work around identity, authority and evidence. Each area has its{" "}
          <br className="max-xl:hidden" />
          own product pages.
        </p>
      </div>
      <ul className="flex w-full items-stretch justify-center gap-[22px]">
        {cards.map((c) => (
          <li
            key={c.eyebrow}
            className="relative flex min-w-px flex-1 flex-col overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[240px] w-full shrink-0 overflow-hidden">
              {c.crop ? (
                <div className="absolute left-0 top-[-85.83%] h-[222.92%] w-full">
                  <Image src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <Image src={c.img} alt={c.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              )}
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-between gap-[32px] p-[28px]">
              <div className="flex w-full flex-col gap-[10px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.44px] text-[#22b8d6]">
                  {c.eyebrow}
                </p>
                <div className="flex w-full flex-col">
                  <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                    {c.title}
                  </h3>
                  <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                    {c.body}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center justify-center whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] py-[6px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                {c.badge}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
