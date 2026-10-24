import React from "react";
import Image from "next/image";
import { Layers, KeyRound, FileText, CheckCircle2 } from "lucide-react";

interface CookieNoticeDistinctionsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const distinctionCards = [
  {
    icon: Layers,
    title: "Device storage",
    description: "Information kept on your device by a website or app.",
  },
  {
    icon: KeyRound,
    title: "Browser identifiers",
    description: "Values a browser presents to a site.",
  },
  {
    icon: FileText,
    title: "Server logs",
    description: "Records kept by servers, outside cookie scope.",
  },
  {
    icon: CheckCircle2,
    title: "Strictly necessary",
    description:
      "Functions the site needs to work, described only once confirmed.",
  },
];

export default function CookieNoticeDistinctionsSection({
  view = "all",
}: CookieNoticeDistinctionsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Title, Subtitle, 4 Cards */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-['DM_Serif_Display'] text-[38px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]">
                  Four different
                  <br />
                  things that are easy
                  <br />
                  to mix up
                </h2>

                <p className="mt-5 max-w-[490px] font-['Manrope'] text-[14px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                  Device storage, browser identifiers, server logs and strictly
                  necessary processing are not the same. Each is described
                  separately, only once it is verified.
                </p>

                {/* 4 Cards Stacked */}
                <div className="mt-8 flex flex-col gap-3.5 max-w-[490px]">
                  {distinctionCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-[16px] border border-[#e2e8f0] bg-white px-4 py-3.5 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300"
                      >
                        <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                          <Icon className="size-[20px] stroke-[1.8]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[14px] font-bold leading-tight text-[#0b1b33]">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[12px] font-normal leading-tight text-[#64748b]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: cn2.png image with rounded corners */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[510px] h-[480px] lg:h-[520px] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-sm">
                  <Image
                    src="/Legal-Privacy-cookie-notice/cn2.png"
                    alt="Reviewing verified notice records on laptop"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 510px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              03 · PLAIN-LANGUAGE ESSENTIALS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Four different things
            <br />
            that
            <br />
            are easy to mix up
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Device storage, browser identifiers, server logs and strictly
            necessary processing are not the same. Each is described
            separately, only once it is verified.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-7 flex flex-col gap-3.5">
            {distinctionCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-[16px] border border-[#e2e8f0] bg-white p-4 shadow-[0px_2px_4px_rgba(11,27,51,0.02)]"
                >
                  <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e6f4f8] text-[#0891b2]">
                    <Icon className="size-[20px] stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[12px] leading-snug text-[#64748b]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Image: cn10.jpg with rounded corners */}
          <div className="relative mt-8 w-full h-[340px] rounded-[24px] overflow-hidden shadow-sm">
            <Image
              src="/Legal-Privacy-cookie-notice/cn10.jpg"
              alt="Person using modern blue touchscreen tablet laptop"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
    </section>
  );
}
