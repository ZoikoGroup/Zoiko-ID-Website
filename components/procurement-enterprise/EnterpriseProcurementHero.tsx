import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Hand, Layers, MapPin, Eye } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function EnterpriseProcurementHero() {
  return (
    <section className="relative w-full min-h-[680px] bg-gradient-to-r from-[#071426E5] to-[#071426F2] text-white py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pro/1.png"
          alt="Enterprise Procurement Hero Background"
          fill
          priority
          className="object-cover object-center opacity-20 mix-blend-overlay"
        />
        {/* Gradient Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Title */}
        <h1
          className={`${dmSerif.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white max-w-5xl mb-6`}
        >
          Enterprise procurement, with identity and evidence in view.
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-16 font-normal">
          Evaluate Zoiko iD across identity, delegated authority, security,
          privacy and integration considerations. Find the right documentation
          and contact path for your organization&apos;s review.
        </p>

        {/* Bottom Floating Bar */}
        <div className="w-full max-w-6xl bg-white rounded-3xl p-4 sm:p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Item 1 */}
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-50"
          >
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Hand className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Skip to main content
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                First stop on the keyboard
              </p>
            </div>
          </a>

          {/* Item 2 */}
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-50 lg:border-l lg:border-slate-100 lg:pl-6"
          >
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Global navigation
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">Approved header</p>
            </div>
          </a>

          {/* Item 3 */}
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-50 lg:border-l lg:border-slate-100 lg:pl-6"
          >
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Locations & Connect
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">Breadcrumb path</p>
            </div>
          </a>

          {/* Item 4 */}
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-2xl transition-colors hover:bg-slate-50 lg:border-l lg:border-slate-100 lg:pl-6"
          >
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Eye className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Visible focus
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">On every control</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
