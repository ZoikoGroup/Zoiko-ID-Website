"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export default function AuditEnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    role: "",
    topic: "",
    description: "",
    newsletter: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry-section"
      className="bg-[#0A1729] px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40"
    >
      <div className="mx-auto grid w-full max-w-[1230px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Context & Information */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-slate-800 shadow-md sm:h-[260px]">
            <Image
              src="/audit-reports/enquiry-team.webp"
              alt="Team planning at a whiteboard"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3.5">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[52px]">
              Ask a privacy expert a question
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-[#CBD5E1]">
              Share a business contact and the topic. Please do not include
              personal data, credentials, identity documents, payment details or
              medical information.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="flex items-center gap-3 rounded-[8px] bg-[#FFFBEB] p-3.5">
            <Image
              src="/audit-reports/enquiry-warning.svg"
              alt=""
              width={18}
              height={18}
              className="size-[18px] shrink-0"
            />
            <p className="font-manrope text-[13px] font-medium text-[#92400E]">
              Rights requests use the separate route above, not this form.
            </p>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="lg:col-span-7">
          <div className="rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-xl sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    className="size-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-dm-serif text-2xl text-[#0B1B33]">
                  Enquiry Received
                </h3>
                <p className="mt-2 max-w-md font-manrope text-sm text-[#64748B]">
                  Thank you for reaching out. We have logged your request and our
                  privacy governance team will review your enquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg bg-[#2563EB] px-6 py-2.5 font-manrope text-sm font-semibold text-white hover:bg-blue-600"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Field 1: Business Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B1B33]">
                    Business name{" "}
                    <span className="font-normal text-[#64748B]">
                      (enterprise enquiries)
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Organization name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-3 font-manrope text-[14px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                {/* Field 2: Work Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B1B33]">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-3 font-manrope text-[14px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                {/* Field 3: Role */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B1B33]">
                    Role{" "}
                    <span className="font-normal text-[#64748B]">(optional)</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-3 font-manrope text-[14px] text-[#0B1B33] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option value="">Select a category</option>
                    <option value="Security / CISO">Security / CISO</option>
                    <option value="Privacy / Legal Counsel">
                      Privacy / Legal Counsel
                    </option>
                    <option value="Procurement / Sourcing">
                      Procurement / Sourcing
                    </option>
                    <option value="Architect / Engineering">
                      Architect / Engineering
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Field 4: Topic */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B1B33]">
                    Topic
                  </label>
                  <select
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-3 font-manrope text-[14px] text-[#0B1B33] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  >
                    <option value="">
                      Select one: evaluation, documentation, technical, general
                      privacy question
                    </option>
                    <option value="evaluation">Evaluation</option>
                    <option value="documentation">Documentation</option>
                    <option value="technical">Technical architecture</option>
                    <option value="general">General privacy question</option>
                  </select>
                </div>

                {/* Field 5: Short Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-manrope text-[13px] font-bold uppercase tracking-[0.06em] text-[#0B1B33]">
                    Short description{" "}
                    <span className="font-normal text-[#64748B]">
                      (optional, up to 1000 characters)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    maxLength={1000}
                    placeholder="Describe the question, without personal data"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full resize-none rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-3 font-manrope text-[14px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
                  />
                </div>

                {/* Field 6: Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData({ ...formData, newsletter: e.target.checked })
                    }
                    className="mt-1 size-4 rounded border-[#94A3B8] text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label
                    htmlFor="newsletter"
                    className="font-manrope text-[13px] leading-relaxed text-[#64748B]"
                  >
                    Optional: I would like occasional product updates. Unchecked by
                    default.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#2563EB] px-8 py-3.5 font-manrope text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg active:scale-95"
                  >
                    Send enquiry
                  </button>
                </div>

                {/* Disclaimer Footnote */}
                <p className="border-t border-[#E2E8F0] pt-4 font-manrope text-[12px] leading-relaxed text-[#64748B]">
                  Confirmation means we received your message. It does not mean a
                  response date nor a scheduled call. Submission is not
                  connected in this layout.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
