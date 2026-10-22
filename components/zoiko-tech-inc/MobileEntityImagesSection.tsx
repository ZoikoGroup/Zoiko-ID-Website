import Image from "next/image";

const images = [
  { src: "/zoiko-tech-inc/mobile-entity-office.webp", h: "h-[340px]", alt: "Zoiko Tech Inc. office" },
  { src: "/zoiko-tech-inc/mobile-entity-team.webp", h: "h-[320px]", alt: "The Zoiko Tech Inc. team at work" },
  { src: "/zoiko-tech-inc/mobile-entity-person.webp", h: "h-[320px]", alt: "A Zoiko Tech Inc. team member" },
];

export default function MobileEntityImagesSection() {
  return (
    <section className="lg:hidden w-full bg-[#f7f8fa] px-[11px] pt-px">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16px]">
        {images.map((img) => (
          <div key={img.src} className={`relative w-full overflow-hidden rounded-[6px] ${img.h}`}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
