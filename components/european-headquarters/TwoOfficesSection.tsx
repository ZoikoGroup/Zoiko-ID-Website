import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function TwoOfficesSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          Two listed offices, two different purposes
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl text-left">
          {/* Global Headquarters Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src="/eu/7.png"
                alt="Global Headquarters"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Global Headquarters
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                The listed headquarters in Sacramento, California. Shown on its
                own page.
              </p>
            </div>
          </div>

          {/* European Headquarters Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src="/eu/8.png"
                alt="European Headquarters"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                European Headquarters
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                The listed London office on this page. It is not a separate
                regional entity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
