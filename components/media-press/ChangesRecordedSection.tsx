import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { CheckCircle2, AlertTriangle, Layers } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const TIMELINE_STEPS = [
  {
    icon: CheckCircle2,
    title: "Original statement",
    description:
      "Published with its date and a permanent reference. The original wording stays available on the record.",
  },
  {
    icon: AlertTriangle,
    title: "Correction",
    description:
      "Added as a dated note under the statement it corrects. The original text is kept and visible to readers.",
  },
  {
    icon: Layers,
    title: "Superseded",
    description:
      "Marked as superseded, with a link to the current version and the date it replaced the earlier one.",
  },
] as const;

export default function ChangesRecordedSection() {
  return (
    <section className="bg-[#F1F5F9] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content & Timeline */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6`}
          >
            Changes are recorded, not rewritten
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10">
            Corrections and changes are part of the record. A correction is
            added as a dated note beside the original statement, and superseded
            statements link to the version that replaces them.
          </p>

          {/* Timeline / Steps Container */}
          <div className="relative flex flex-col gap-8 w-full pl-2">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-slate-200" />

            {TIMELINE_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative flex items-start gap-5">
                  {/* Icon Node */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1D4ED8] shadow-sm flex items-center justify-center shrink-0 z-10">
                    <IconComponent
                      className="h-5 w-5 text-[#1D4ED8]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Step Content */}
                  <div className="pt-2">
                    <h3 className="text-slate-900 font-bold text-base md:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image
            src="/media/13.png"
            alt="Economic news stack and historical records"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
