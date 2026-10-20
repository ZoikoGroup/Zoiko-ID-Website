import Image from "next/image";

interface HandoffCard {
  image: string;
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

const handoffs: HandoffCard[] = [
  {
    image: "/authority-explainers/handoff-architecture.webp",
    icon: "/authority-explainers/handoff-arrow-1.svg",
    title: "Architecture Guides",
    desc: "How the trust layer fits your systems.",
    badge: "Destination pending approval",
  },
  {
    image: "/authority-explainers/handoff-api.webp",
    icon: "/authority-explainers/handoff-arrow-2.svg",
    title: "API Reference",
    desc: "Exact interfaces, from the developer documentation.",
    badge: "Destination pending approval",
  },
  {
    image: "/authority-explainers/handoff-release-notes.webp",
    icon: "/authority-explainers/handoff-arrow-3.svg",
    title: "Talk to an identity expert",
    desc: "Discuss your use case with a specialist.",
    badge: "Sales route pending approval",
  },
];

export default function AuthorityHandoffsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-4xl lg:text-[44px] lg:leading-[51.92px]">
            Exact details live in the authoritative sources
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            This page explains concepts. Interfaces, tested steps and release changes live in their own destinations.
          </p>
        </div>

        {/* 3 Handoff Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {handoffs.map((h) => (
            <div
              key={h.title}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white-solid shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {/* Image Banner */}
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={h.image}
                  alt={h.title}
                  fill
                  sizes="(min-width: 1024px) 357px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#E0F2FE]">
                      <Image
                        src={h.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="size-4"
                      />
                    </div>
                    <h3 className="font-manrope text-[17px] font-bold leading-6 text-[#0B1B33]">
                      {h.title}
                    </h3>
                  </div>

                  <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                    {h.desc}
                  </p>
                </div>

                <div className="mt-5 self-start rounded-lg bg-[#F1F5F9] px-2.5 py-1.5">
                  <span className="font-manrope text-xs font-normal leading-tight text-[#0B1B33]">
                    {h.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
