import Image from "next/image";

const glossaryTerms = [
  {
    image: "/webhooks-events/glossary-event.webp",
    alt: "Abstract visualization of a state change event",
    term: "Event",
    definition: "A recorded change in an identity, authority or trust state.",
  },
  {
    image: "/webhooks-events/glossary-notification.webp",
    alt: "Secure notification transmission illustration",
    term: "Notification",
    definition:
      "A message that tells a subscriber a change occurred. It is not proof.",
  },
  {
    image: "/webhooks-events/glossary-subscriber.webp",
    alt: "Subscriber system receiving and evaluating signals",
    term: "Subscriber",
    definition:
      "The system that receives notifications & decides its own action.",
  },
  {
    image: "/webhooks-events/glossary-evidence.webp",
    alt: "Cryptographic evidence and immutable audit record",
    term: "Evidence",
    definition:
      "The authoritative record, held by the service that made the decision.",
  },
];

export default function WebhooksGlossarySection() {
  return (
    <section className="bg-grey-98 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div>
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl md:text-[46px]">
            Terms used on this page
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {glossaryTerms.map((item) => (
            <article
              key={item.term}
              className="group relative h-[300px] w-full overflow-hidden rounded-2xl bg-azure-9 shadow-xs"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azure-9 via-azure-9/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-6">
                <h3 className="font-manrope text-lg font-bold text-white-solid">
                  {item.term}
                </h3>
                <p className="font-manrope text-sm font-normal leading-relaxed text-geyser">
                  {item.definition}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
