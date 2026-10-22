import Image from "next/image";

const photos = [
  { src: "/contact/desktop-route-documents.webp", alt: "Documents laid out on a desk" },
  { src: "/contact/desktop-route-office.webp", alt: "Zoiko office interior" },
  { src: "/contact/desktop-route-team.webp", alt: "Team collaborating at work" },
];

export default function DesktopRoutesPhotosSection() {
  return (
    <div className="flex w-full items-start justify-center gap-[24px]">
      {photos.map((p) => (
        <div key={p.src} className="relative h-[200px] min-w-px flex-1 rounded-[14px]">
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="rounded-[14px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
