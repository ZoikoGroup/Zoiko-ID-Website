import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import {
  Image as ImageIcon,
  Box,
  Network,
  Users,
  FileText,
} from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function ImagesAndAssetsSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-4xl`}
        >
          Images and assets, with their rights stated
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Each asset states its licence, attribution and permitted use. No
          download is offered until its rights are approved.
        </p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl mb-12">
          {/* Large Left Column (Imagery - /media/5.png) */}
          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
            <div className="relative w-full h-[460px] lg:h-full min-h-[420px]">
              <Image
                src="/media/5.png"
                alt="Imagery video editing software interface"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/60 flex items-center gap-2.5">
                <ImageIcon className="h-4 w-4 text-[#0E7490]" strokeWidth={2} />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Imagery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Row: 2 equal cards (/media/6.png and /media/7.png) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/media/6.png"
                    alt="Product setup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/60 flex items-center gap-2">
                    <Box
                      className="h-3.5 w-3.5 text-[#0E7490]"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-bold text-slate-900">
                      Product
                    </span>
                  </div>
                </div>
              </div>

              {/* Network Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/media/7.png"
                    alt="Network press conference"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/60 flex items-center gap-2">
                    <Network
                      className="h-3.5 w-3.5 text-[#0E7490]"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-bold text-slate-900">
                      Network
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Full width single card for /media/8.png */}
            <div className="w-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
                  <Image
                    src="/media/8.png"
                    alt="Agents media interview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/60 flex items-center gap-2">
                    <Users
                      className="h-3.5 w-3.5 text-[#0E7490]"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-bold text-slate-900">
                      Agents
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dashed Notice Box */}
        <div className="w-full bg-white rounded-3xl border border-dashed border-slate-300 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="bg-[#E4F3F8] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
              <FileText className="h-7 w-7 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                No media resources are available to download.
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Logos, images and fact documents appear here only when their
                rights and permitted uses are approved. Restricted assets are
                never shown as downloadable. Each approved asset will list its
                format, dimensions, credit line and last update.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
