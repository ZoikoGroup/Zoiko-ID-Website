import React from "react";
import Image from "next/image";

export default function EnterpriseStepsSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          Three steps to the right enterprise contact
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
          {/* Step 01 Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between">
            <div className="relative h-56 w-full">
              <Image
                src="/eu/3.png"
                alt="Choose enterprise enquiry"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-cyan-600 font-bold text-2xl tracking-wide mb-2 block">
                01
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Choose enterprise enquiry
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Routes to the approved Procurement or Talk to Sales destination.
              </p>
            </div>
          </div>

          {/* Step 02 Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between">
            <div className="relative h-56 w-full">
              <Image
                src="/eu/4.png"
                alt="Describe your scope"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-cyan-600 font-bold text-2xl tracking-wide mb-2 block">
                02
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Describe your scope
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Share the enquiry in the destination&apos;s own form, not on
                this page.
              </p>
            </div>
          </div>

          {/* Step 03 Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between">
            <div className="relative h-56 w-full">
              <Image
                src="/eu/5.png"
                alt="Receive a response"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-cyan-600 font-bold text-2xl tracking-wide mb-2 block">
                03
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Receive a response
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Timing is not promised here. Each destination states its own
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
