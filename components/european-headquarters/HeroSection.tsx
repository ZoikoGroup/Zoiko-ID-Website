import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#0A1A2F] text-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          European Headquarters
        </h1>

        {/* Description Text */}
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          Zoiko iD is a Zoiko Tech Inc. platform. Find our listed European
          headquarters location and the appropriate route for enterprise,
          corporate and specialist enquiries.
        </p>

        {/* Info Badge */}
        <div className="bg-white text-slate-900 rounded-full inline-flex items-center gap-4 pl-4 pr-10 py-4 shadow-xl mb-24">
          <div className="bg-[#E0F2FE] p-3 rounded-full flex items-center justify-center">
            <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2.5} />
          </div>
          <p className="font-semibold text-lg whitespace-nowrap">
            Listed address below. No visiting arrangement is implied.
          </p>
        </div>

        {/* Office Image */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <Image
            src="/eu/1.png"
            alt="Zoiko Tech Inc. European Headquarters Office Interior"
            width={1600}
            height={900}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
