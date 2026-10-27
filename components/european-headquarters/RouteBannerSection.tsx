import React from "react";
import Image from "next/image";
import { Send, FileText, Mail } from "lucide-react";

export default function RouteBannerSection() {
  return (
    <section className="bg-white text-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-[32px] min-h-[480px] flex flex-col items-center justify-center text-center p-8 md:p-16 shadow-2xl">
          {/* Background Image */}
          <Image
            src="/eu/12.png"
            alt="Office background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay with subtle teal tint on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#0D1F35]/85 to-[#0F4C5C]/80" />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Use the route that fits your enquiry.
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Enterprise, press, privacy and security enquiries each have their
              own destination. Use the one that matches your question.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Talk to Sales */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan-400/50 text-cyan-300 font-medium text-sm backdrop-blur-md transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white"
              >
                <Send className="h-4 w-4 text-cyan-400" />
                <span>Talk to Sales</span>
              </a>

              {/* Media / Press */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan-400/50 text-cyan-300 font-medium text-sm backdrop-blur-md transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                <span>Media / Press</span>
              </a>

              {/* Contact */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-cyan-400/50 text-cyan-300 font-medium text-sm backdrop-blur-md transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
