import Image from "next/image";

export default function DesktopWhatIsSection() {
  return (
    <section className="hidden w-full flex-col gap-[12px] bg-[#f7f8fa] px-[160px] pb-[70px] pt-[69px] lg:flex">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-[70px]">
        <h2 className="self-start font-dm-serif text-[52px] font-normal capitalize leading-[57.8px] tracking-[1.92px] text-black">
          What is Zoiko Tech Inc.?
        </h2>
        <div className="self-start border-l-4 border-solid border-[#22b8d6] pl-[24px]">
          <p className="max-w-[668px] font-manrope text-[24px] font-normal leading-[43.2px] text-[#07111f]">
            Zoiko Tech Inc. is the company identified in Zoiko iD’s public materials as the entity behind the Zoiko iD platform. Explore the platform to understand its identity and delegated-authority capabilities.
          </p>
        </div>
      </div>
      <div className="grid h-[340px] w-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-x-[16px]">
        <div className="relative h-[340px] overflow-hidden rounded-[6px]">
          <Image
            src="/zoiko-tech-inc/desktop-entity-office.webp"
            alt="People working at desks in an open office"
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-[6px]">
          <Image
            src="/zoiko-tech-inc/desktop-entity-team.webp"
            alt="A team planning together at a whiteboard"
            fill
            sizes="(min-width: 1024px) 350px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
