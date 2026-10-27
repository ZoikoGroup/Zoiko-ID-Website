import React from "react";
import { KeyRound, Eye, ZoomIn, CheckCircle2 } from "lucide-react";

export default function AccessibilitySection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          Works without a mouse, a map or a screen
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl text-left">
          {/* Card 1: Keyboard */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <KeyRound className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Keyboard
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Focus order follows the reading order, with visible focus.
              </p>
            </div>
          </div>

          {/* Card 2: Screen readers */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Screen readers
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The address is read in order, with clear link names.
              </p>
            </div>
          </div>

          {/* Card 3: Zoom and reflow */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ZoomIn className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Zoom and reflow
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                No horizontal scrolling at 320 px; controls stay at 200%.
              </p>
            </div>
          </div>

          {/* Card 4: No map dependency */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2
                  className="h-6 w-6 text-[#0EA5E9]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                No map dependency
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The address is complete as plain text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
