import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Sliders, Eye, CheckCircle2, AlertTriangle } from "lucide-react";

interface CookieNoticeHeroSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const heroCards = [
  {
    icon: FileText,
    title: "Notice",
    description: "Legal-approved text only",
  },
  {
    icon: Sliders,
    title: "Settings",
    description: "Choice is handled separately",
  },
  {
    icon: Eye,
    title: "Transparent",
    description: "Verified entries only",
  },
  {
    icon: CheckCircle2,
    title: "No assumptions",
    description: "No inferred consent",
  },
];

export default function CookieNoticeHeroSection({
  view = "all",
}: CookieNoticeHeroSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full overflow-hidden">
      {/* DESKTOP HERO (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block relative w-full min-h-[380px] lg:min-h-[420px] bg-[#0a1526] px-6 pt-16 pb-16 lg:px-[120px] lg:pt-20 lg:pb-20 flex flex-col justify-between">
          {/* Background image cn1.png with dark overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Legal-Privacy-cookie-notice/cn1.png"
              alt="Cookie Notice Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Linear overlay matching design: dark on left for text legibility, transparent enough on right to show papers */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(8, 20, 36, 0.82) 0%, rgba(8, 20, 36, 0.68) 55%, rgba(8, 20, 36, 0.5) 100%)",
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1140px]">
            {/* Title & Description */}
            <div className="max-w-[580px]">
              <h1 className="font-['DM_Serif_Display'] text-[46px] lg:text-[54px] font-normal leading-[1.12] tracking-normal text-white">
                Cookie Notice
              </h1>
              <p className="mt-4 font-['Manrope'] text-[14px] lg:text-[15px] font-normal leading-[1.65] text-[#d4dde8]">
                This notice explains how Zoiko iD uses cookies and similar
                technologies, where applicable, and how you can review
                your choices.
              </p>
            </div>

            {/* 4 Feature Cards Floating Pill */}
            <div className="mt-12 w-full rounded-[20px] border border-white/20 bg-white p-3 lg:p-4 shadow-[0px_14px_30px_rgba(7,20,38,0.18)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {heroCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="flex items-center gap-3.5 px-4 py-3 sm:py-2.5 first:pl-2 last:pr-2"
                    >
                      <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e6f4f8] text-[#0891b2]">
                        <Icon className="size-[20px] stroke-[1.8]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-['Manrope'] text-[14px] font-bold leading-tight text-[#0b1b33]">
                          {card.title}
                        </h2>
                        <p className="mt-1 font-['Manrope'] text-[12px] font-normal leading-tight text-[#64748b]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE HERO (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full bg-white">
          {/* Mobile Breadcrumb */}
          <div className="flex w-full items-center gap-2 border-b border-[#D9E1EC] bg-white px-5 py-3">
            <Link
              href="/"
              className="font-['Manrope'] text-[12px] leading-normal text-[#5B6B82]"
            >
              Home
            </Link>
            <span className="font-['Manrope'] text-[12px] leading-normal text-[#5B6B82]">
              /
            </span>
            <span className="font-['Manrope'] text-[12px] leading-normal text-[#5B6B82]">
              Legal & Privacy
            </span>
            <span className="font-['Manrope'] text-[12px] leading-normal text-[#5B6B82]">
              /
            </span>
            <span className="font-['Manrope'] text-[12px] font-bold leading-normal text-[#0B1B33]">
              Cookie Notice
            </span>
          </div>

          {/* Mobile Hero Visual Banner */}
          <div className="relative w-full min-h-[460px] overflow-hidden px-5 pt-36 pb-8 flex flex-col justify-end">
            {/* Background image cn13.jpg (white pen & clipboard) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Legal-Privacy-cookie-notice/cn9.jpg"
                alt="Cookie Notice Background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-top"
              />
              {/* Gradient overlay: lighter at top, rich deep dark blue from middle to bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(240, 244, 248, 0.25) 0%, rgba(8, 20, 36, 0.65) 42%, rgba(7, 18, 34, 0.96) 85%)",
                }}
              />
            </div>

            {/* Mobile Hero Content */}
            <div className="relative z-10 flex flex-col gap-3">
              {/* Eyebrow indicator */}
              <div className="flex items-center gap-2.5">
                <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
                <span className="font-['Manrope'] text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
                  Legal & Privacy · 03
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-['DM_Serif_Display'] text-[34px] font-normal leading-[1.12] text-[#0b1b33]">
                Cookie Notice
              </h1>

              {/* Subtitle */}
              <p className="font-['Manrope'] text-[13px] font-normal leading-[1.65] text-[#d4dde8]">
                This notice explains how Zoiko iD uses cookies and similar
                technologies, where applicable, and how you can review your
                choices.
              </p>

              {/* Blocked Status Box */}
              <div className="mt-2 flex items-start gap-3 rounded-[12px] border border-slate-700/60 bg-[#16253b]/85 p-3.5 backdrop-blur-sm">
                <AlertTriangle className="size-4 shrink-0 text-[#f87171] mt-0.5" />
                <p className="font-['Manrope'] text-[11.5px] leading-snug text-[#cbd5e1]">
                  Publication blocked: the cookie inventory and Legal-approved
                  text are not yet verified.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards (Vertical List below Hero) */}
          <div className="w-full bg-white divide-y divide-[#edf2f7] border-b border-[#edf2f7]">
            {heroCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Icon className="size-[19px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h2 className="font-['Manrope'] text-[13.5px] font-bold leading-tight text-[#0b1b33]">
                      {card.title}
                    </h2>
                    <p className="mt-0.5 font-['Manrope'] text-[11.5px] leading-tight text-[#64748b]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
