"use client";

import Image from "next/image";
import { useState } from "react";

export default function SecurityReviewEngagementSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="w-full bg-[#FFFFFF] py-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
        {/* Left Column: Heading + Team Image */}
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-dm-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.13] text-[#0B1B33]">
              Request a security<br className="hidden sm:inline" /> briefing
            </h2>
            <div className="pt-[2px]">
              <p className="font-manrope text-[16px] leading-[25.6px] text-[#64748B] whitespace-pre-line">
                Discuss your identity, delegation and evidence{"\n"}requirements with a Zoiko iD specialist. Please{"\n"}do not include passwords, tokens or incident{"\n"}details in this form.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[360px] sm:h-[455px] rounded-[20px] overflow-hidden shadow-sm">
            <Image
              src="/security/img-cb66ef625afad0917cbf97935f2fedabfecbb825.png"
              alt="Team meeting around a table"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full max-w-[520px] mx-auto lg:ml-auto">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[20px] p-6 sm:p-9 flex flex-col gap-[14px] shadow-sm">
            {/* Field 1: Work email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                Work email
              </label>
              <input
                type="email"
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-[8px] font-manrope text-[15px] leading-[24px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Field 2: Organization */}
            <div className="flex flex-col gap-1.5">
              <label className="font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                Organization
              </label>
              <input
                type="text"
                placeholder="Organization name"
                className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-[8px] font-manrope text-[15px] leading-[24px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Field 3: Role */}
            <div className="flex flex-col gap-1.5">
              <label className="font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                Role
              </label>
              <input
                type="text"
                placeholder="Your role"
                className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-[8px] font-manrope text-[15px] leading-[24px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Field 4: Use case */}
            <div className="flex flex-col gap-1.5">
              <label className="font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                Use case
              </label>
              <input
                type="text"
                placeholder="Select one"
                className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-[8px] font-manrope text-[15px] leading-[24px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB]"
              />
            </div>

            {/* Field 5: Integration needs */}
            <div className="flex flex-col gap-1.5">
              <label className="font-manrope font-extrabold text-[12px] leading-[19.2px] text-[#0B1B33]">
                Integration needs
              </label>
              <textarea
                rows={2}
                placeholder="Describe briefly, without secrets"
                className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-[8px] font-manrope text-[15px] leading-[24px] text-[#0B1B33] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] resize-none"
              />
            </div>

            {/* Checkbox agreement */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="contact-agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[#94A3B8] text-[#2563EB] focus:ring-0 cursor-pointer"
              />
              <label
                htmlFor="contact-agree"
                className="font-manrope text-[15px] leading-[24px] text-[#64748B] cursor-pointer whitespace-pre-line"
              >
                I agree to be contacted about this request{"\n"}under the privacy notice.
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[8px] bg-[#CBD5E1] font-manrope font-bold text-[15px] leading-[24px] text-[#0B1B33] hover:bg-[#94A3B8] transition-colors cursor-pointer"
              >
                Submit request
              </button>
            </div>

            {/* Notice / Qualifier text */}
            <div className="pt-1">
              <p className="font-manrope text-[13px] leading-[20.8px] text-[#64748B] whitespace-pre-line">
                Confirmation means we have received your request.{"\n"}It does not mean the request is accepted or{"\n"}scheduled. Submission is not connected in this{"\n"}layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
