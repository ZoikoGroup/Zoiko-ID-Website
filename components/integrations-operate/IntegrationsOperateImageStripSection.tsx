import Image from "next/image";

interface ImageStripCard {
  image: string;
  icon: string;
  title: string;
}

const cards: ImageStripCard[] = [
  {
    image: "/integrations-operate/img-8298b775cb7e3dbb2d6a5bd439c41a517a873257.png",
    icon: "/integrations-operate/icon-334_4161.svg",
    title: "Connected systems",
  },
  {
    image: "/integrations-operate/img-68a227940e0f6e97f6c19b72f9b06483b6232eca.png",
    icon: "/integrations-operate/icon-334_4168.svg",
    title: "Your infrastructure",
  },
  {
    image: "/integrations-operate/img-0bd324acccb26b69b193f0d6dee9ded43f66e3b8.png",
    icon: "/integrations-operate/icon-334_4175.svg",
    title: "Reviewable evidence",
  },
  {
    image: "/integrations-operate/img-cad36bef7a8dc1b823255424d0910c8df090dcf3.png",
    icon: "/integrations-operate/icon-334_4182.svg",
    title: "Shared ownership",
  },
];

export default function IntegrationsOperateImageStripSection() {
  return (
    <section className="w-full bg-white-solid">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <figure
            key={idx}
            className="group relative h-[260px] w-full box-border overflow-hidden border-t-[8px] border-r-[4px] border-b-[4px] border-l-[4px] border-white-solid bg-white-solid"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Bottom Gradient Overlay & Caption */}
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-[linear-gradient(180deg,rgba(7,20,38,0)_0%,rgba(7,20,38,0.90)_100%)] px-6 py-4">
              <Image
                src={card.icon}
                alt=""
                width={15}
                height={15}
                className="shrink-0 brightness-0 invert"
              />
              <span className="font-manrope text-[14.4px] font-bold leading-6 text-white-solid">
                {card.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
