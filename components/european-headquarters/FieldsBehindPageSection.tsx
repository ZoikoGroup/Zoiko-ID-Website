import React from "react";
import Image from "next/image";
import {
  FileText,
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function FieldsBehindPageSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">
          The fields behind this page
        </h2>

        {/* Hero Image */}
        <div className="w-full max-w-7xl h-[350px] sm:h-[450px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-16">
          <Image
            src="/eu/10.png"
            alt="The fields behind this page"
            fill
            className="object-cover"
          />
        </div>

        {/* 2x3 Grid of Field Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
          {/* Card 1: display_name */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                display_name
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                European Headquarters. Owner: Brand and Corporate.
              </p>
            </div>
          </div>

          {/* Card 2: parent_entity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                parent_entity
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Zoiko Tech Inc. Owner: Legal.
              </p>
            </div>
          </div>

          {/* Card 3: postal_address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                postal_address
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Street, floor, locality, postcode, country. Owner: Corporate
                Operations.
              </p>
            </div>
          </div>

          {/* Card 4: verified_at */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                verified_at
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Internal timestamp/date. Owner: CISO and Operations.
              </p>
            </div>
          </div>

          {/* Card 5: lifecycle_status */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                lifecycle_status
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Draft, reviewed, approved, published, or withdrawn.
              </p>
            </div>
          </div>

          {/* Card 6: visitor_policy */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
            <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
              <Globe className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-slate-900 text-base mb-1">
                visitor_policy
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Off/unapproved. Owner: Legal and Facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
