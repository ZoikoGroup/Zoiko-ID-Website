import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { FileText, Clock, Layers } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const ACCURACY_CARDS = [
  {
    icon: FileText,
    title: "Sources",
    description:
      "Every fact names its source document. Readers can see the document's owner and the date of the last review.",
  },
  {
    icon: Clock,
    title: "Dates",
    description:
      "Shown only when recorded from the approved source. A date is never estimated or filled in from the current day.",
  },
  {
    icon: Layers,
    title: "Changes",
    description:
      "Corrections are dated and kept in the record. Earlier versions remain accessible through their reference.",
  },
] as const;

export default function HowThisPageIsKeptAccurateSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-4xl`}
        >
          How this page is kept accurate
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          This section explains how the page is kept accurate. Information is
          taken from approved sources, dates appear only when they are recorded,
          and changes are logged.
        </p>

        {/* Featured Image Banner */}
        <div className="w-full relative h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-12">
          <Image
            src="/media/17.png"
            alt="Workspace with laptop and newspaper representing accurate research"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 3-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
          {ACCURACY_CARDS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F4F6FA] rounded-3xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
