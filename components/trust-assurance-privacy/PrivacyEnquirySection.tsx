"use client";

import { useState } from "react";
import Image from "next/image";

export default function PrivacyEnquirySection() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    role: "",
    topic: "",
    description: "",
    productUpdates: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry-section"
      className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-36"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Left Side: Information, Image & Warning */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Team image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] border border-[#E2E8F0] sm:h-[260px]">
            <Image
              src="/trust-assurance-privacy/enquiry-team.webp"
              alt="Team planning at a whiteboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              Ask a privacy expert a question
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-[#64748B]">
              Share a business contact and the topic. Please do not include
              personal data, credentials, identity documents, payment details or
              medical information.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="flex items-center gap-3 rounded-[12px] border border-[#FDE68A] bg-[#FFFBEB] p-4 text-[#92400E]">
            <Image
              src="/trust-assurance-privacy/enquiry-warning.svg"
              alt=""
              width={18}
              height={18}
              className="size-4.5 shrink-0"
            />
            <p className="font-manrope text-[13.5px] font-semibold leading-normal">
              Rights requests use the separate route above, not this form.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Enquiry Form */}
        <div className="flex flex-1 flex-col rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                <svg
                  className="size-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-dm-serif text-2xl text-[#071426]">
                Enquiry Received
              </h3>
              <p className="max-w-[400px] font-manrope text-[14px] text-[#64748B]">
                Thank you for your question. A privacy representative will
                review your submission.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Business Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="businessName"
                  className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#334155]"
                >
                  Business name (enterprise enquiries)
                </label>
                <input
                  id="businessName"
                  type="text"
                  required
                  placeholder="Organization name"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-2.5 font-manrope text-[15px] text-[#071426] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#334155]"
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-2.5 font-manrope text-[15px] text-[#071426] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              {/* Role Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="role"
                  className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#334155]"
                >
                  Role (optional)
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-2.5 font-manrope text-[15px] text-[#071426] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                >
                  <option value="">Select a category</option>
                  <option value="security">Security / Privacy</option>
                  <option value="engineering">Engineering / Architecture</option>
                  <option value="legal">Legal / Compliance</option>
                  <option value="procurement">Procurement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Topic Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="topic"
                  className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#334155]"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  required
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-2.5 font-manrope text-[15px] text-[#071426] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
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

              {/* Description Textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="description"
                  className="font-manrope text-[12px] font-extrabold uppercase tracking-wider text-[#334155]"
                >
                  Short description (optional, up to 1000 characters)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  maxLength={1000}
                  placeholder="Describe the question, without personal data"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="resize-none rounded-[8px] border border-[#CBD5E1] bg-white px-4 py-2.5 font-manrope text-[15px] text-[#071426] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="productUpdates"
                  checked={formData.productUpdates}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productUpdates: e.target.checked,
                    })
                  }
                  className="mt-1 size-4 rounded border-[#CBD5E1] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <label
                  htmlFor="productUpdates"
                  className="font-manrope text-[13.5px] leading-relaxed text-[#475569]"
                >
                  Optional: I would like occasional product updates. Unchecked
                  by default.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-[8px] bg-[#2563EB] py-3.5 font-manrope text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg active:scale-[0.99]"
              >
                Send enquiry
              </button>

              {/* Disclaimer */}
              <p className="font-manrope text-[12.5px] leading-relaxed text-[#94A3B8]">
                Confirmation means we received your message. It does not mean a
                response date or a scheduled call. Submission is not connected
                in this layout.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
