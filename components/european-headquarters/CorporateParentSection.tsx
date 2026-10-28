import React from "react";
import { Layers, Building2, MapPin, ArrowRight } from "lucide-react";

export default function CorporateParentSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
          One platform, one corporate parent
        </h2>

        {/* Description Text */}
        <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          The London listing is corporate location information. It does not
          indicate a separately incorporated Zoiko iD entity in Europe.
        </p>

        {/* Cards & Arrows Grid / Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-5xl mb-12">
          {/* Card 1: Zoiko iD */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 text-left shadow-md w-full lg:w-1/3 flex flex-col justify-between border border-slate-200">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2">Zoiko iD</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The identity infrastructure platform.
              </p>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center justify-center text-[#0EA5E9]">
            <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
          </div>

          {/* Card 2: Zoiko Tech Inc. */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 text-left shadow-md w-full lg:w-1/3 flex flex-col justify-between border border-slate-200">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2">Zoiko Tech Inc.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The company that operates the platform.
              </p>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center justify-center text-[#0EA5E9]">
            <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
          </div>

          {/* Card 3: This listing */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 text-left shadow-md w-full lg:w-1/3 flex flex-col justify-between border border-slate-200">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-2">This listing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A corporate office location for Zoiko Tech.
              </p>
            </div>
          </div>
        </div>

        {/* Text Version Footer Box */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl px-6 py-4 max-w-5xl w-full text-center">
          <p className="text-slate-600 text-sm">
            Text version: Zoiko ID is a platform. Zoiko Tech Inc. operates it.
            This listing gives the corporate location; it does not add a
            regional entity.
          </p>
        </div>
      </div>
    </section>
  );
}
