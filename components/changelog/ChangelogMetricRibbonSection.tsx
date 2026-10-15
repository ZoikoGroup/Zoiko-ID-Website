import Image from "next/image";

const metrics = [
  {
    image: "/changelog/source-code-monitor-56586a.png",
    alt: "Source code on a monitor",
    icon: "/changelog/icons/icon_334_6580.svg",
    label: "Versioned changes",
  },
  {
    image: "/changelog/notification-icons-56586a.png",
    alt: "Notification icons on a screen",
    icon: "/changelog/icons/icon_334_6587.svg",
    label: "Impact visible",
  },
  {
    image: "/changelog/documents-desk-56586a.png",
    alt: "Documents on a desk",
    icon: "/changelog/icons/icon_334_6594.svg",
    label: "Authoritative links",
  },
  {
    image: "/changelog/team-reviewing-56586a.png",
    alt: "Team reviewing changes together",
    icon: "/changelog/icons/icon_334_6601.svg",
    label: "Reviewed before publication",
  },
];

export default function ChangelogMetricRibbonSection() {
  return (
    <section className="w-full bg-white p-[4px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4px]">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="group relative h-[240px] w-full overflow-hidden"
          >
            <Image
              src={metric.image}
              alt={metric.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            {/* Figcaption gradient banner */}
            <div className="absolute inset-x-0 bottom-0 flex h-[52.5px] items-center gap-[10px] bg-[linear-gradient(180deg,rgba(7,20,38,0)_0%,rgba(7,20,38,0.9)_100%)] px-[20px]">
              <Image
                src={metric.icon}
                alt=""
                width={15}
                height={15}
                className="shrink-0 brightness-0 invert"
              />
              <span className="font-manrope text-[14.4px] font-bold leading-[24.48px] text-white-solid">
                {metric.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
