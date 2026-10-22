import Image from "next/image";

const IMAGES = [
  "/careers/mobile-empty-office.webp",
  "/careers/mobile-empty-ai.webp",
  "/careers/mobile-empty-documents.webp",
  "/careers/mobile-empty-team.webp",
];

export default function MobileEmptyGallerySection() {
  return (
    <section className="bg-white px-[22px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[16px]">
        {IMAGES.map((src) => (
          <div
            key={src}
            className="relative h-[240px] w-full overflow-hidden rounded-[16px]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
