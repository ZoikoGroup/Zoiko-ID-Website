import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DestinationItem {
  image: string;
  alt: string;
  icon: string;
  title: string;
  description: React.ReactNode;
  href: string;
}

const destinations: DestinationItem[] = [
  {
    image: "/changelog/circuit-board-1206a1.png",
    alt: "Abstract circuit board",
    icon: "/changelog/icons/icon_334_6853.svg",
    title: "API Reference",
    description: (
      <>
        Operations, schemas, and
        <br />
        error definitions.
      </>
    ),
    href: "/apis-integrations",
  },
  {
    image: "/changelog/developer-working-1206a1.png",
    alt: "Developer working in code",
    icon: "/changelog/icons/icon_334_6865.svg",
    title: "SDKs",
    description: (
      <>
        Language packages and
        <br />
        their published status.
      </>
    ),
    href: "#sdks",
  },
  {
    image: "/changelog/developer-working-2-1206a1.png",
    alt: "Developer working in code",
    icon: "/changelog/icons/icon_334_6876.svg",
    title: "Webhooks & Events",
    description: (
      <>
        Notifications about trust-
        <br />
        state changes.
      </>
    ),
    href: "#webhooks",
  },
  {
    image: "/changelog/business-meeting-1206a1.png",
    alt: "Business meeting",
    icon: "/changelog/icons/icon_334_6888.svg",
    title: "Integrations",
    description: (
      <>
        Interoperability patterns
        <br />
        and their status.
      </>
    ),
    href: "/apis-integrations",
  },
];

export default function ChangelogDestinationsSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[1120px] flex flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-[16px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Related technical destinations
          </h2>
          <p className="max-w-[860px] font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Changes link back to the authoritative pages that define the contracts they affect.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Link
              key={dest.title}
              href={dest.href}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Card Image - Flush to edges */}
              <div className="relative h-[150px] w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-[16px] p-[28px]">
                {/* Icon Container */}
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                  <Image
                    src={dest.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="shrink-0"
                  />
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-[6px]">
                  <h4 className="font-manrope text-[16.3px] font-bold leading-[27.74px] text-[#071426]">
                    {dest.title}
                  </h4>
                  <p className="font-manrope text-[14.4px] font-normal leading-[24.48px] text-[#64748B]">
                    {dest.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
