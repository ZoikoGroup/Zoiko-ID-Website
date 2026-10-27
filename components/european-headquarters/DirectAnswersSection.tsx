import React from "react";
import { Info } from "lucide-react";

export default function DirectAnswersSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          Direct answers
        </h2>

        {/* FAQ Items Stack / List */}
        <div className="flex flex-col gap-4 w-full max-w-7xl text-left">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Where is Zoiko iD&apos;s European headquarters listed?
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Zoiko Tech&apos;s European headquarters address is 167-169 Great
                Portland Street, 5th Floor, London W1W 5PF, United Kingdom.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Can I visit the office?
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                No visiting arrangement is published. Visits are not offered
                unless the corporate office policy is approved.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                How do I reach enterprise sales?
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Use the enterprise enquiry route in section 06, once its
                destination is approved.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Info className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                How do I reach the press team?
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Use Media / Press. General corporate questions go to Contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
