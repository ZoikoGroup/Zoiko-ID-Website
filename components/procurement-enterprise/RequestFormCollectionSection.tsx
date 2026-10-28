import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { AlertTriangle } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const FORM_FIELDS = [
  {
    field: "Enquiry intent",
    description:
      'Required. One choice from the approved list, including "Other procurement question".',
  },
  {
    field: "Work email",
    description:
      "Required. Checked for format only. Not used to verify your domain.",
  },
  {
    field: "Full name",
    description: "Required, up to 120 characters.",
  },
  {
    field: "Organization",
    description: "Required, up to 160 characters.",
  },
  {
    field: "Role or function",
    description: "Optional, up to 100 characters. Does not block progress.",
  },
  {
    field: "Evaluation objective",
    description:
      "Optional, up to 1,000 characters. Do not include secrets or sensitive identity evidence.",
  },
  {
    field: "Privacy Notice",
    description:
      "Acknowledgement where legally required. Read the notice before you submit.",
  },
  {
    field: "Marketing opt-in",
    description:
      "Optional and unchecked by default. Kept separate from the request.",
  },
  {
    field: "Attachments",
    description: "Not accepted in this form.",
  },
] as const;

export default function RequestFormCollectionSection() {
  return (
    <section className="bg-[#F8FAFC] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Section Header */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          What the request form will collect
        </h2>

        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          The form is kept short. It asks for what is needed to route your
          request, and it refuses credentials, secrets and confidential
          documents. Nothing is submitted from this specification.
        </p>

        {/* Form Fields Specification Table Container */}
        <div className="w-full bg-white rounded-3xl border border-dashed border-slate-300 p-6 sm:p-8 shadow-sm mb-8">
          <div className="divide-y divide-slate-100">
            {FORM_FIELDS.map((item, index) => (
              <div
                key={index}
                className="py-4 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
              >
                <div className="md:col-span-4 lg:col-span-3 font-bold text-slate-900 text-sm md:text-base">
                  {item.field}
                </div>
                <div className="md:col-span-8 lg:col-span-9 text-slate-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Callout Banner */}
        <div className="w-full bg-[#FEF2F2] border border-[#FCA5A5]/50 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="bg-[#FEE2E2] p-2.5 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle
              className="h-5 w-5 text-[#B91C1C]"
              strokeWidth={2.5}
            />
          </div>
          <p className="text-[#991B1B] text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">Form not yet live.</span> No submit
            control is shown until a verified procurement queue and secure
            backend are approved.
          </p>
        </div>
      </div>
    </section>
  );
}
