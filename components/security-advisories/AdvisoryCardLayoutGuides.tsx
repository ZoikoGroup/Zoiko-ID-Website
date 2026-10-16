import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cardsData = [
  {
    image: "/security/6.png",
    alt: "Professional working at a desk",
    badge: "LAYOUT GUIDE",
    title: "Advisory ID and title",
    description: "Opaque stable ID, then the approved title.",
    tagText: "Published and updated dates, with timezone",
    linkText: "Read advisory",
    linkHref: "#",
  },
  {
    image: "/security/7.png",
    alt: "Papers and stationery on a desk",
    badge: "LAYOUT GUIDE",
    title: "Scope and tags",
    description:
      "Affected scope only where verified. Unknown stays labelled unknown.",
    tagText: 'Never "all products unaffected"',
    linkText: "Read advisory",
    linkHref: "#",
  },
  {
    image: "/security/8.png",
    alt: "Professional sitting at a desk smiling",
    badge: "LAYOUT GUIDE",
    title: "Lifecycle",
    description:
      "Current, Updated, Superseded or Withdrawn, as the record states.",
    tagText: 'No "resolved" label without confirmation',
    linkText: "Read advisory",
    linkHref: "#",
  },
];

export default function AdvisoryCardLayoutGuides() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F5F9] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            What each card shows, with no placeholder notices
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
            Each card carries an advisory ID, a title, approved tags, the
            published and updated dates in the visible timezone, and one text
            action. Cards below are layout guides only.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-8"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-[200px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Badge */}
                <div className="mt-6 inline-block rounded-full border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#475569]">
                  {card.badge}
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-[20px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {card.description}
                </p>

                {/* Inner Tag Box */}
                <div className="mt-6 rounded-xl bg-[#F8FAFC] px-4 py-3 text-[13px] text-[#334155] border border-[#F1F5F9]">
                  {card.tagText}
                </div>
              </div>

              {/* Bottom Link */}
              <div className="mt-8 pt-4">
                <Link
                  href={card.linkHref}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                >
                  {card.linkText}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
