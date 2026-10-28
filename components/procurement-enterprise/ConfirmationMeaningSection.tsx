import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { CheckCircle2, Clock, AlertTriangle, FileText } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function ConfirmationMeaningSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          What confirmation means
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          A confirmation is shown only after the server accepts your request.
          The page does not promise a reply time, and it does not create an
          account. If the request does not go through, you are told so and can
          try again.
        </p>

        {/* Divider */}
        <div className="w-full border-t-2 border-[#0B1B33] mb-12" />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl text-left">
          {/* Card 1: Accepted */}
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2
                  className="h-6 w-6 text-[#0E7490]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Accepted
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Shown only after the backend confirms receipt.
              </p>
            </div>
          </div>

          {/* Card 2: No timing promise */}
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No timing promise
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Responses depend on the request and the team handling it.
              </p>
            </div>
          </div>

          {/* Card 3: Not accepted */}
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle
                  className="h-6 w-6 text-[#0E7490]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Not accepted
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                You see a clear message, with a way to retry.
              </p>
            </div>
          </div>

          {/* Card 4: Duplicate */}
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Duplicate
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Repeat submissions are blocked, so one request is never recorded
                twice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
