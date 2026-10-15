import Image from "next/image";
import Link from "next/link";

const ribbonItems = [
  {
    icon: "/sandbox/icons/icon_334_2386.svg",
    title: "Quickstarts",
    description: "Guided setup paths and their\nversion.",
    href: "#quickstarts",
    arrowIcon: "/sandbox/icons/icon_334_2397.svg",
  },
  {
    icon: "/sandbox/icons/icon_334_2401.svg",
    title: "API Reference",
    description: "Operations, schemas, and status\ncodes.",
    href: "#api-reference",
    arrowIcon: "/sandbox/icons/icon_334_2411.svg",
  },
  {
    icon: "/sandbox/icons/icon_334_2415.svg",
    title: "SDKs",
    description: "Language packages and their status.",
    href: "#sdks",
    arrowIcon: "/sandbox/icons/icon_334_2427.svg",
  },
  {
    icon: "/sandbox/icons/icon_334_2431.svg",
    title: "Webhooks & Events",
    description: "Notifications about trust-state\nchanges.",
    href: "#webhooks-events",
    arrowIcon: "/sandbox/icons/icon_334_2441.svg",
  },
];

export default function SandboxTechnicalReferenceRibbonSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <h2 className="pb-[40px] font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:pb-[60px] lg:text-[46px] lg:leading-[52.9px]">
          Exact details live in versioned docs
        </h2>

        {/* 4-Column Reference Ribbon */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white-solid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E2E8F0]">
          {ribbonItems.map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex min-h-[238px] flex-col justify-between p-[30px_26px] transition-colors duration-200 hover:bg-slate-50/60 ${
                idx > 0 ? "border-t border-[#E2E8F0] sm:border-t-0" : ""
              } ${idx % 2 === 1 ? "sm:border-l sm:border-[#E2E8F0] lg:border-l-0" : ""} ${
                idx >= 2 ? "sm:border-t sm:border-[#E2E8F0] lg:border-t-0" : ""
              }`}
            >
              <div>
                <Image
                  src={item.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="shrink-0"
                />

                <h4 className="mt-4 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426] group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h4>

                <p className="mt-1 whitespace-pre-line font-manrope text-[14.4px] font-normal leading-[23.76px] text-[#64748B]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-[6px]">
                <span className="font-manrope text-[14.4px] font-bold leading-[23.76px] text-[#2563EB]">
                  Open
                </span>
                <Image
                  src={item.arrowIcon}
                  alt=""
                  width={34}
                  height={34}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
