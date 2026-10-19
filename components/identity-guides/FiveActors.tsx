import React from "react";
import Image from "next/image";
import { User, FileText, Server, Cpu, Bot } from "lucide-react";

interface ActorCard {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const actors: ActorCard[] = [
  {
    imageSrc: "/identity/14.png",
    imageAlt: "Human in a suit smiling",
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Human",
    description: "A person who signs in and acts for themselves.",
  },
  {
    imageSrc: "/identity/9.png",
    imageAlt: "Modern office interior space",
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Organization",
    description: "An affiliation, recorded explicitly rather than inferred.",
  },
  {
    imageSrc: "/identity/10.png",
    imageAlt: "People working in an office environment",
    icon: <Server className="w-5 h-5 text-sky-700" />,
    title: "Service",
    description: "A workload with its own identity and a narrow role.",
  },
  {
    imageSrc: "/identity/11.png",
    imageAlt: "Automated machine assembly line",
    icon: <Cpu className="w-5 h-5 text-sky-700" />,
    title: "Machine",
    description: "A device or process acting within a bounded duty.",
  },
  {
    imageSrc: "/identity/12.png",
    imageAlt: "AI robot concept art",
    icon: <Bot className="w-5 h-5 text-sky-700" />,
    title: "AI agent",
    description: "Acts only under explicit, sponsored authority.",
  },
] as const;

export default function FiveActors() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-left mb-12 max-w-3xl">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Five kinds of actor, each with its own considerations
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Human, organization, service, machine and AI agent identities
            differ. They do not share identical verification methods, and the
            workflows available for each are not assumed to be the same.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {actors.map((actor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Image */}
              <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                <Image
                  src={actor.imageSrc}
                  alt={actor.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                    {actor.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {actor.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {actor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
