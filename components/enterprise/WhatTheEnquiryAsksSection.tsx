import Image from "next/image";

interface EnquiryRow {
  field: string;
  requirement: string;
}

const enquiryFields: EnquiryRow[] = [
  {
    field: "Work email",
    requirement: "Required; syntax-checked",
  },
  {
    field: "Full name",
    requirement: "Required",
  },
  {
    field: "Organisation",
    requirement: "Required; not verified",
  },
  {
    field: "Role",
    requirement: "Optional; CIO/CTO, Security/IAM, Engineering, Procurement, Other",
  },
  {
    field: "Evaluation area",
    requirement:
      "Required; enterprise access, delegated authority, AI agent access, credentials, other",
  },
  {
    field: "Country or region",
    requirement: "Optional; used for routing only",
  },
  {
    field: "Message",
    requirement: "Optional; no credentials, secret or personal records",
  },
  {
    field: "Privacy acknowledgment",
    requirement: "Required; links to the privacy policy",
  },
];

export default function WhatTheEnquiryAsksSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        {/* Title & Description */}
        <div className="max-w-[800px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
            What the enquiry asks
          </h2>
          <p className="mt-4 font-manrope text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            Submitting starts a review; it is not a booking, a quote, an offer or a commitment. The receipt confirms only that the request was received.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Rounded Image (ee6.png) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
            <Image
              src="/Enterprise-02-enterprise/ee6.png"
              alt="Colleagues reviewing document portfolio and specification sheet"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Specification Card / Table */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-8">
            <div className="divide-y divide-slate-100 font-manrope">
              {enquiryFields.map((item) => (
                <div
                  key={item.field}
                  className="grid grid-cols-1 gap-1 py-3 text-xs first:pt-0 last:pb-0 sm:grid-cols-3 sm:gap-4 sm:py-3.5 sm:text-[13px]"
                >
                  <span className="font-bold text-[#071324]">
                    {item.field}
                  </span>
                  <span className="text-[#64748b] sm:col-span-2">
                    {item.requirement}
                  </span>
                </div>
              ))}
            </div>

            {/* Micro disclaimer footer */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <p className="font-manrope text-[11px] leading-relaxed text-slate-400">
                Submit controls not shown. States covered: submitting, received, extension outcome, route unavailable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal cyan line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
            REQUEST A REVIEW
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          What the enquiry asks
        </h2>

        {/* Mobile Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-[#4b5563]">
          Submitting starts a review. It is not a booking, a quote, an offer or a commitment. The receipt confirms only that the request was received.
        </p>

        {/* White Rounded Specification Card */}
        <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          {/* FORM NOT YET ENABLED pill */}
          <div className="mb-5 inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1">
            <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
              FORM NOT YET ENABLED
            </span>
          </div>

          {/* 8 Field Rows with dividers */}
          <div className="divide-y divide-slate-100">
            <div className="py-3 first:pt-0">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Work email
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Required; syntax-checked
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Full name
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Required
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Organization
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Required; not verified
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Role
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Optional; CIO/CTO, Security/IAM, Engineering, Procurement, Other
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Evaluation area
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Required; enterprise access, delegated authority, AI-agent access, credentials, other
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Country or region
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Optional; used for routing only
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Message
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Optional; no credentials, secrets or personal records
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-manrope text-xs font-bold text-[#2563eb]">
                Privacy acknowledgment
              </h3>
              <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-[#64748b]">
                Required; links to the privacy policy
              </p>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="font-manrope text-[11px] leading-relaxed text-slate-400">
              Submit control is not shown. States covered: submitting, received, unknown outcome, route unavailable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
