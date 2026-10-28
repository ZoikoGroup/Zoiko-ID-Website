import React from "react";
import { DM_Serif_Display } from "next/font/google";
import {
  Building2,
  Layers,
  KeyRound,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const ATTRIBUTION_DATA = [
  {
    icon: Building2,
    title: "Company",
    description:
      "Zoiko Tech Inc. is the company that provides Zoiko iD. Company-level statements are attributed to it.",
    footerText: "Corporate record",
    hasIconInFooter: true,
  },
  {
    icon: Layers,
    title: "Platform",
    description:
      "Zoiko iD, a Zoiko Tech Inc. platform. Product statements describe the platform, not the company's wider activities.",
    footerText: "Corporate record",
    hasIconInFooter: false,
  },
  {
    icon: KeyRound,
    title: "Focus",
    description:
      "Identity, credentials and delegated authority for people, organizations, machines and AI agents. Each area is described on its own product page.",
    footerText: "Product positioning",
    hasIconInFooter: false,
  },
  {
    icon: MapPin,
    title: "Headquarters",
    description:
      "Sacramento, California. The Headquarters page gives the verified street address and the corporate contact routes.",
    footerText: "Corporate record",
    hasIconInFooter: false,
  },
] as const;

export default function WhoIsSpeakingSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Section Heading */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          Who is speaking, and for which company
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Zoiko Tech Inc. is the company. Zoiko iD is the identity, credentials
          and delegated authority platform it provides. Each statement on this
          page is attributed to one of the two, so readers can tell which one is
          being described.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl text-left">
          {ATTRIBUTION_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Attribution Tag */}
                <div className="flex items-center gap-1.5 pt-4 border-t border-slate-100">
                  {item.hasIconInFooter && (
                    <CheckCircle2
                      className="h-4 w-4 text-[#0E7490] shrink-0"
                      strokeWidth={2}
                    />
                  )}
                  <span className="text-xs font-semibold text-[#0E7490]">
                    {item.footerText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
