import Image from "next/image";

const cards = [
  { icon: "building", title: "Controller", desc: <>Exact legal entity per purpose.</> },
  {
    icon: "user",
    title: "Processor roles",
    desc: (
      <>
        Only confirmed processing <br className="max-xl:hidden" />
        roles.
      </>
    ),
  },
  {
    icon: "flow",
    title: "Services in scope",
    desc: (
      <>
        Website, platform and <br className="max-xl:hidden" />
        enterprise services, kept <br className="max-xl:hidden" />
        separate.
      </>
    ),
  },
];

export default function DesktopControllerSection() {
  return (
    <section
      id="controller"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-building.svg" width={24} height={24} alt="" />
          </div>
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Controller
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[48px]">
          <div>
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Controller and services
            </h2>
            <p className="mt-[21px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              The entity or entities responsible for each processing purpose, and the services in scope, will be listed only from the reviewed registry. Where a role is not yet confirmed, the row is withheld rather than guessed.
            </p>
          </div>
          <div>
            <div className="relative h-[301.01px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/privacy-notice/desktop-controller-office.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 820px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-stretch gap-[18px] pt-[24px]">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex h-[258.97px] min-w-px flex-1 flex-col rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[24px]"
                >
                  <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                    <Image src={`/privacy-notice/desktop-icon-${c.icon}.svg`} width={24} height={24} alt="" />
                  </div>
                  <h3 className="mt-[9px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                    {c.title}
                  </h3>
                  <p className="mt-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                    {c.desc}
                  </p>
                  <span className="mt-auto self-start whitespace-nowrap rounded-full bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                    Pending Legal
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
