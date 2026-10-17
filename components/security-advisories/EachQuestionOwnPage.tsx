import Image from "next/image";
import { Activity, Mail, ShieldCheck, FileText } from "lucide-react";

const cardsData = [
  {
    image: "/security/13.png",
    alt: "Availability status team collaboration",
    icon: Activity,
    title: "Availability status",
    description: "Current service health.",
  },
  {
    image: "/security/14.png",
    alt: "Security contact discussion",
    icon: Mail,
    title: "Security contact",
    description: "Questions about an advisory.",
  },
  {
    image: "/security/15.png",
    alt: "Trust Center review",
    icon: ShieldCheck,
    title: "Trust Center",
    description: "Approved assurance information.",
  },
  {
    image: "/security/16.png",
    alt: "Changelog planning session",
    icon: FileText,
    title: "Changelog",
    description: "Product and SDK changes.",
  },
];

export default function EachQuestionOwnPage() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            Each question has its own page
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Icon */}
                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0F2FE] text-[#0284C7]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-[18px] font-bold tracking-[-0.02em] text-[#0F172A]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
