import React from "react";

export default function IdentityHero() {
  return (
    <section className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#101827]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/identity/1.png"
          alt="Background"
          className="h-full w-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[68px] font-serif font-semibold text-white tracking-tight leading-[1.15] max-w-4xl">
          Identity guides for people, organizations, machines, and AI agents.
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mt-6 text-base md:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
          Learn how identity, verification, credentials, authorization,
          delegated authority and audit evidence work together, and where each
          control begins and ends.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#"
            className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium transition-colors duration-200 shadow-md text-center"
          >
            Explore identity guides
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-7 py-3.5 rounded-md hover:bg-slate-700/60 text-white text-sm font-medium border border-slate-400/30 backdrop-blur-sm transition-colors duration-200 text-center"
          >
            Start with the fundamentals
          </a>
        </div>
      </div>
    </section>
  );
}
