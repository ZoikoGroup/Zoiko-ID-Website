import Image from "next/image";

const cards = [
  { icon: "building", title: "Controller", desc: <>Exact legal entity per purpose.</>, h: "h-[211.38px]" },
  { icon: "user", title: "Processor roles", desc: <>Only confirmed processing roles.</>, h: "h-[211.38px]" },
  {
    icon: "flow",
    title: "Services in scope",
    desc: (
      <>
        Website, platform and enterprise services, kept
        <br />
        separate.
      </>
    ),
    h: "h-[235.17px]",
  },
];

export default function MobileControllerSection() {
  return (
    <section
      id="controller"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Controller
          </p>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/mobile-icon-building.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            04
          </p>
          <h2 className="pb-[21.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Controller and services
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-controller-office.webp"
              alt="Office meeting room"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="pt-[29px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            The entity or entities responsible for each
            <br />
            processing purpose, and the services in
            <br />
            scope, will be listed only from the reviewed
            <br />
            registry. Where a role is not yet confirmed,
            <br />
            the row is withheld rather than guessed.
          </p>
          <div className="flex w-full flex-col gap-[18px] pt-[29px]">
            {cards.map((c) => (
              <div
                key={c.title}
                className={`flex w-full flex-col items-start rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px] ${c.h}`}
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src={`/privacy-notice/mobile-icon-${c.icon}.svg`} width={24} height={24} alt="" />
                </div>
                <h3 className="mt-[9px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                  {c.title}
                </h3>
                <p className="mt-[10px] whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {c.desc}
                </p>
                <span className="mt-auto rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                  Pending Legal
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
