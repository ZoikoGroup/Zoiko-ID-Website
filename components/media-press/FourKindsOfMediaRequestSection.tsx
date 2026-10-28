import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { FileText, Mic, Image as ImageIcon, Layers } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const MEDIA_REQUESTS = [
  {
    icon: FileText,
    title: "Editorial question",
    description:
      "A question for a story or article. Ask about facts, background or the company's position on a topic.",
  },
  {
    icon: Mic,
    title: "Interview request",
    description:
      "A request to speak with a company representative. Include the subject, the outlet and your deadline if you have one. Interview availability is not guaranteed.",
  },
  {
    icon: ImageIcon,
    title: "Imagery and permissions",
    description:
      "Questions about asset use, licensing and credit lines. Tell us which asset you mean and how you intend to use it.",
  },
  {
    icon: Layers,
    title: "Other media",
    description:
      "Anything that does not fit the three above, such as podcast, broadcast or event requests. We will point you to the right place.",
  },
] as const;

export default function FourKindsOfMediaRequestSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-slate-900 mb-6 max-w-6xl`}
        >
          Four kinds of media request, four routes
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Choose the category that matches your request. Each category goes to a
          different owner, so a question about imagery is not handled as an
          interview request. Requests outside these four categories are directed
          to the most suitable specialist route.
        </p>

        {/* 4-Column Responsive Card Container */}
        <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {MEDIA_REQUESTS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-start text-left ${
                    index !== 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
