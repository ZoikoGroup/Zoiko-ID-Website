import Image from "next/image";

const images = [
  "/contact/mobile-route-documents.webp",
  "/contact/mobile-route-developer.webp",
  "/contact/mobile-route-office.webp",
  "/contact/mobile-route-team.webp",
];

export default function MobileRouteImagesSection() {
  return (
    <div className="flex w-full flex-col items-start gap-[24px] pt-[19.99px]">
      {images.map((src) => (
        <div key={src} className="relative h-[200px] w-full overflow-hidden rounded-[14px]">
          <Image src={src} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
