import React from "react";
import Image from "next/image";

interface CardCell {
  label: string;
  value: string;
}

const cardData: CardCell[][] = [
  [
    { label: "TITLE", value: "Approved public title" },
    { label: "SUMMARY", value: "One to two sentences" },
  ],
  [
    { label: "TOPIC AND ACTOR", value: "Controlled categories" },
    { label: "LAST REVIEWED", value: "Shown only when verified" },
  ],
] as const;

export default function GuideCards() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & Card Mockup */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Guide cards appear once they are approved
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
            Each card will show its title, a short direct answer, topic, actor
            class, level and the date it was last reviewed. Only published
            guides appear here.
          </p>

          {/* Guide Card Mockup Box */}
          <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-6">
              {cardData.flat().map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="inline-block bg-slate-100 text-slate-500 text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full border border-slate-200/60 uppercase">
                NO PUBLISHED GUIDES YET
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] h-[360px] md:h-[400px] overflow-hidden">
            <Image
              src="/identity/7.png"
              alt="Person coding on a laptop with green terminal output"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
