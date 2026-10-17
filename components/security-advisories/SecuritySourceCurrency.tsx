import Image from "next/image";
import { Clock } from "lucide-react";

const content = {
  badge: "SOURCE CURRENCY",
  title:
    "Last verified time appears here only when a verified source timestamp exists.",
  description:
    "Times are shown with their timezone. A cached result is never shown as current.",
  badgeStatus: "VERIFICATION PENDING",
  images: [
    {
      src: "/security/2.png",
      alt: "Monitored components",
      label: "Monitored components",
    },
    {
      src: "/security/3.png",
      alt: "Timestamps shown",
      label: "Timestamps shown",
    },
    {
      src: "/security/4.png",
      alt: "Support routes",
      label: "Support routes",
    },
    {
      src: "/security/5.png",
      alt: "Planned maintenance",
      label: "Planned maintenance",
    },
  ],
};

export default function SecuritySourceCurrency() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Main Card Container */}
        <div className="flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
          {/* Top 4 Connected Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl">
            {content.images.map((item, index) => (
              <div
                key={index}
                className="relative h-[220px] w-full overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[14px] font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#4267D5]">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
                    aria-hidden="true"
                  />
                  {content.badge}
                </div>
                <h3 className="mt-1 text-[18px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[20px]">
                  {content.title}
                </h3>
                <p className="mt-1 text-[14px] text-[#4B5563]">
                  {content.description}
                </p>
              </div>
            </div>

            {/* Verification Pending Badge */}
            <div className="shrink-0 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-[12px] font-semibold tracking-wider text-[#4B5563]">
              {content.badgeStatus}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
