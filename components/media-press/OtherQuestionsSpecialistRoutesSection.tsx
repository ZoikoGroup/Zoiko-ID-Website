import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Mail, ShieldCheck, Send } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const SPECIALIST_ROUTES = [
  {
    imageSrc: "/media/14.png",
    icon: Mail,
    title: "Contact",
    description:
      "General corporate questions that do not fit a press or specialist route. Please include your name and the subject of your question.",
  },
  {
    imageSrc: "/media/15.png",
    icon: ShieldCheck,
    title: "Security Contact",
    description:
      "Security concerns and vulnerability reports. Do not send exploit details or sensitive data through any press route.",
  },
  {
    imageSrc: "/media/16.png",
    icon: Send,
    title: "Talk to Sales",
    description:
      "Enterprise evaluation, procurement and commercial questions. Sales is not a press contact, so please use this route for purchasing enquiries.",
  },
] as const;

export default function OtherQuestionsSpecialistRoutesSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-slate-900 mb-6 max-w-5xl leading-[1.15]`}
        >
          Other questions go to specialist routes
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          Customer support, security reports and sales questions are not handled
          by the press team. Use these routes instead.
        </p>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
          {SPECIALIST_ROUTES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col"
              >
                <div className="relative h-56 w-full">
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
