import Image from "next/image";
import Link from "next/link";

interface InterfaceCard {
  image: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

const interfaces: InterfaceCard[] = [
  {
    image: "/integrations-operate/img-84a8babd041476ae3f07fcdbd2d15cbe80f214fa.png",
    icon: "/integrations-operate/icon-334_4791.svg",
    title: "API Reference",
    description: "Operations, schemas, and errors.",
    href: "/api-reference",
  },
  {
    image: "/integrations-operate/img-fdac7b7984dec469b0de1066f0aa76e7a535a1f8.png",
    icon: "/integrations-operate/icon-334_4803.svg",
    title: "Quickstarts",
    description: "Guided setup paths.",
    href: "/quickstarts",
  },
  {
    image: "/integrations-operate/img-8e140bc493203ea219027160e905d1b957a48562.png",
    icon: "/integrations-operate/icon-334_4815.svg",
    title: "SDKs",
    description: "Language packages and their status.",
    href: "/quickstarts",
  },
  {
    image: "/integrations-operate/img-3d32e1aa23851dd62b9df88075c397b0590d6f7b.png",
    icon: "/integrations-operate/icon-334_4826.svg",
    title: "Webhooks & Events",
    description: "Notifications about trust-state changes.",
    href: "/changelog",
  },
];

export default function IntegrationsOperateDevInterfacesSection() {
  return (
    <section className="bg-white-solid px-4 py-16 sm:px-8 lg:px-12 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-[23px]">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center pt-[2px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[62.4px]">
            Developer interfaces
          </h2>

          <p className="mt-[23px] max-w-[860px] font-manrope text-base font-normal leading-7 text-[#64748B] sm:text-[16.8px] sm:leading-[28.56px]">
            Authoritative contracts live in developer documentation. This page points you there and does not reproduce
            <br className="hidden sm:block" />
            {" "}endpoints, grants, or payloads.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-5 pt-[2px] sm:grid-cols-2 lg:grid-cols-4">
          {interfaces.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white-solid shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB] hover:shadow-lg"
            >
              {/* Photo Header: flush edge-to-edge */}
              <div className="relative h-[160px] w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Icon Badge */}
                <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,rgba(34,184,214,0.18)_0%,rgba(37,99,235,0.14)_100%)]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                </div>

                <h3 className="mt-4 font-manrope text-[16.3px] font-bold leading-7 text-[#071426] group-hover:text-[#2563EB]">
                  {item.title}
                </h3>

                <p className="mt-2 font-manrope text-[14.1px] font-normal leading-6 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Callout Box (White solid with blue left accent) */}
        <div className="w-full rounded-[12px] border-l-4 border-[#2563EB] bg-white-solid px-[26px] pt-[26px] pb-[22px] shadow-xs">
          <p className="font-manrope text-base font-normal leading-[27.2px] text-[#475569]">
            <strong className="font-bold text-[#071426]">Examples are gated.</strong>{" "}
            Code and sample payloads appear here only after technical approval. Unverified base URLs, package names, and
            <br className="hidden sm:block" />
            {" "}sample contracts are never shown on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
