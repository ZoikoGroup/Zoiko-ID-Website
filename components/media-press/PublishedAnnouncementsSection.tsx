import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { FileText } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function PublishedAnnouncementsSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Section Heading */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          Published announcements
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Only approved, published announcements appear here, newest first.
          Corrections are shown with their dates.
        </p>

        {/* Dashed Container Box */}
        <div className="w-full bg-white rounded-3xl border border-dashed border-slate-300 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Left Icon Badge */}
            <div className="bg-[#E4F3F8] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
              <FileText className="h-7 w-7 text-[#0E7490]" strokeWidth={2} />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                There are no published announcements available here yet.
              </h3>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                No press releases are listed. When an announcement is approved,
                it appears here with its title, publication date, source and
                summary. Older releases stay in the list and are never removed
                without a note.
              </p>

              {/* Action Buttons / Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-700 font-semibold text-xs md:text-sm hover:bg-slate-100 transition-colors shadow-sm"
                >
                  About Zoiko iD
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-700 font-semibold text-xs md:text-sm hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
