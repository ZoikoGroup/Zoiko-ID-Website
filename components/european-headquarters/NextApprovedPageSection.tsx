import React from "react";
import Image from "next/image";
import { Building2, Globe, Send, Mail } from "lucide-react";

export default function NextApprovedPageSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          Continue to the next approved page
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl">
          {/* Left Column - Image */}
          <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[640px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/eu/9.png"
              alt="Continue to the next approved page"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - 2x2 Grid of Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Global Headquarters */}
            <a
              href="#"
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-cyan-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Building2
                    className="h-6 w-6 text-[#0EA5E9]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Global Headquarters
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Listed Sacramento headquarters.
                </p>
              </div>
            </a>

            {/* Card 2: Zoiko Tech Inc. */}
            <a
              href="#"
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-cyan-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Zoiko Tech Inc.
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The company behind the platform.
                </p>
              </div>
            </a>

            {/* Card 3: Talk to Sales */}
            <a
              href="#"
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-cyan-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Send className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Talk to Sales
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Enterprise evaluation route.
                </p>
              </div>
            </a>

            {/* Card 4: Contact */}
            <a
              href="#"
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-cyan-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  Contact
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  General route for other questions.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
