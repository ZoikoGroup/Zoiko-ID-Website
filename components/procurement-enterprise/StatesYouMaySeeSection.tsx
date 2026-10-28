import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { Clock, AlertTriangle, XCircle, Lock } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const STATES_DATA = [
  {
    icon: Clock,
    title: "Connection timed out",
    description:
      "Your request may or may not have arrived. Check before retrying, and use the Contact route if in doubt.",
  },
  {
    icon: AlertTriangle,
    title: "Route unavailable",
    description:
      "The procurement queue is not open to requests right now. The Contact route stays available.",
  },
  {
    icon: XCircle,
    title: "Form error",
    description:
      "Fields with problems are marked, and the reason is given beside each one. Valid entries are kept.",
  },
  {
    icon: Lock,
    title: "Permission denied",
    description:
      "A document you asked for is not open to your account. The message does not reveal internal permissions.",
  },
] as const;

export default function StatesYouMaySeeSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          States you may see, and what to do
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Errors and outages are explained in plain language. Your entries are
          kept, and you are offered a safe alternative. The page never reports a
          success it cannot confirm.
        </p>

        {/* 2x2 Grid of Cards with Scalable Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl text-left">
          {STATES_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
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
