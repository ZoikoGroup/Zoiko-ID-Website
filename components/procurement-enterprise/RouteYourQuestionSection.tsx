import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Send, ShieldCheck, Lock } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const ROUTES_DATA = [
  {
    imageSrc: "/pro/8.png",
    icon: Send,
    title: "Talk to Sales",
    description: "Commercial scope and enterprise evaluation.",
  },
  {
    imageSrc: "/pro/9.png",
    icon: ShieldCheck,
    title: "Security Contact",
    description: "Security concerns and account security.",
  },
  {
    imageSrc: "/pro/10.png",
    icon: Lock,
    title: "Privacy route",
    description: "Privacy questions and rights requests.",
  },
] as const;

export default function RouteYourQuestionSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-5xl leading-[1.15]`}
        >
          Route your question to its owner
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          Each type of question has one owner. Support requests, security
          reports and privacy requests are not handled by the procurement team,
          so please use the route that matches your question.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
          {ROUTES_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
