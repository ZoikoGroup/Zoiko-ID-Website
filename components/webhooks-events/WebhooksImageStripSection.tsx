import Image from "next/image";

const stripItems = [
  {
    image: "/webhooks-events/strip-connected-systems.webp",
    alt: "Abstract circuit board representing connected systems",
    caption: "Connected systems",
  },
  {
    image: "/webhooks-events/strip-infrastructure.webp",
    alt: "Data center server racks representing your infrastructure",
    caption: "Your infrastructure",
  },
  {
    image: "/webhooks-events/strip-evidence.webp",
    alt: "Analytics dashboard representing reviewable evidence",
    caption: "Reviewable evidence",
  },
  {
    image: "/webhooks-events/strip-ownership.webp",
    alt: "Team reviewing plans representing shared ownership",
    caption: "Shared ownership",
  },
];

export default function WebhooksImageStripSection() {
  return (
    <section className="w-full bg-azure-9" aria-label="Key concepts image strip">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stripItems.map((item) => (
          <figure
            key={item.caption}
            className="group relative h-[220px] w-full overflow-hidden sm:h-[260px]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azure-9/90 via-azure-9/30 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 font-manrope text-sm font-bold text-white-solid sm:p-6">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
