import React from "react";
import Image from "next/image";
import { ShieldCheck, BarChart3, CornerDownRight } from "lucide-react";

interface CookieNoticeCategoriesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const verifiedCategories = [
  {
    image: "/Legal-Privacy-cookie-notice/cn4.png",
    alt: "Documents with stationery and person working on laptop",
    icon: ShieldCheck,
    title: "Strictly necessary",
    subtitle: "Confirmed entries only",
  },
  {
    image: "/Legal-Privacy-cookie-notice/cn5.png",
    alt: "Team analyzing analytics charts and device data on desk",
    icon: BarChart3,
    title: "Analytics",
    subtitle: "Shown only if present in the registry.",
  },
  {
    image: "/Legal-Privacy-cookie-notice/cn6.png",
    alt: "Professional setting preference choices on laptop keyboard",
    icon: CornerDownRight,
    title: "Preferences",
    subtitle: "Shown only with a working choice.",
  },
];

export default function CookieNoticeCategoriesSection({
  view = "all",
}: CookieNoticeCategoriesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Categories appear only when verified
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal text-[#5b6b82]">
                Empty categories are removed. Counts come from the registry,
                never from an estimate.
              </p>
            </div>

            {/* 3 Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {verifiedCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm transition hover:shadow-md hover:border-slate-300"
                  >
                    {/* Top Image */}
                    <div className="relative h-[180px] lg:h-[190px] w-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex size-[36px] items-center justify-center rounded-[8px] bg-[#e6f4f8] text-[#0891b2]">
                          <Icon className="size-[18px] stroke-[1.8]" />
                        </div>
                        <span className="rounded-full bg-[#fef3c7] px-2.5 py-0.5 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                          PENDING
                        </span>
                      </div>

                      <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white border-t border-[#edf2f7]">
          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] text-[#0b1b33]">
            Categories appear only
            <br />
            when verified
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Empty categories are removed. Counts come from the registry, never
            from an estimate.
          </p>

          <div className="mt-7 flex flex-col gap-5">
            {/* Card 1: Strictly necessary */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="relative h-[175px] w-full">
                <Image
                  src="/Legal-Privacy-cookie-notice/cn16.jpg"
                  alt="Code syntax highlighted on developer screen"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-5 flex flex-col items-start">
                <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <ShieldCheck className="size-[20px] stroke-[1.8]" />
                </div>

                <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Strictly necessary
                </h3>

                <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                  Confirmed entries only.
                </p>

                <span className="mt-3.5 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                  PENDING
                </span>
              </div>
            </div>

            {/* Card 2: Analytics */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="relative h-[175px] w-full">
                <Image
                  src="/Legal-Privacy-cookie-notice/cn17.jpg"
                  alt="Laptop displaying analytics graphs and charts dashboard"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-5 flex flex-col items-start">
                <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <BarChart3 className="size-[20px] stroke-[1.8]" />
                </div>

                <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Analytics
                </h3>

                <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                  Shown only if present in the registry.
                </p>

                <span className="mt-3.5 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                  PENDING
                </span>
              </div>
            </div>

            {/* Card 3: Preferences */}
            <div className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="relative h-[175px] w-full">
                <Image
                  src="/Legal-Privacy-cookie-notice/cn18.jpg"
                  alt="Holding phone in front of open laptop"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-5 flex flex-col items-start">
                <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <CornerDownRight className="size-[20px] stroke-[1.8]" />
                </div>

                <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                  Preferences
                </h3>

                <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                  Shown only with a working choice.
                </p>

                <span className="mt-3.5 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                  PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
