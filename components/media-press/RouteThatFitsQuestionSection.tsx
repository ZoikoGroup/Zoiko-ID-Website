import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function RouteThatFitsQuestionSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        {/* Banner Card with Background Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[440px] md:min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-16">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/18.png"
              alt="Person reading business newspaper and using phone"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#071426]/80 to-[#071426]/90" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Title */}
            <h2
              className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white mb-6`}
            >
              Use the route that fits your question.
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              If you are a journalist, an analyst or a member of a press team,
              the routes above will point you to the right place. Until the
              media intake is live, the contact route is the fastest way to
              reach the company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
