import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Hand, Layers, MapPin, Eye } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const QUICK_LINKS = [
  {
    icon: Hand,
    title: "Skip to main content",
    description: "First stop on the keyboard",
  },
  {
    icon: Layers,
    title: "Global navigation",
    description: "Approved header",
  },
  {
    icon: MapPin,
    title: "Locations & Connect",
    description: "Breadcrumb path",
  },
  {
    icon: Eye,
    title: "Visible focus",
    description: "On every control",
  },
] as const;

export default function MediaPressHero() {
  return (
    <section className="relative w-full min-h-[640px] bg-gradient-to-r from-[#071426E5] to-[#071426F2] text-white py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden flex flex-col justify-center items-start">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/1.png"
          alt="Media & Press Hero Background"
          fill
          priority
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
        {/* Dark Gradient Overlay */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start text-left">
        {/* Title */}
        <h1
          className={`${dmSerif.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white max-w-4xl mb-6`}
        >
          Media &amp; Press
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-16 font-normal">
          For editorial and media enquiries about Zoiko iD and the technology
          behind identity, credentials, and delegated authority, use the media
          enquiry route provided here when available.
        </p>

        {/* Bottom Floating Bar */}
        <div className="w-full max-w-6xl bg-white rounded-3xl p-4 sm:p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {QUICK_LINKS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-50 ${
                  index !== 0 ? "lg:border-l lg:border-slate-100 lg:pl-6" : ""
                }`}
              >
                <div className="bg-[#E4F3F8] p-3 rounded-xl flex items-center justify-center shrink-0">
                  <IconComponent
                    className="h-6 w-6 text-[#0E7490]"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
