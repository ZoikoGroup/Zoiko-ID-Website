"use client";

import Image from "next/image";
import { useState } from "react";

export default function WebhooksEnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="bg-azure-9 px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-14">
        {/* Left Column: Context */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          <div className="relative aspect-[24/11] w-full overflow-hidden rounded-2xl bg-slate-800 shadow-sm">
            <Image
              src="/webhooks-events/enquiry-team-planning.webp"
              alt="Team planning at a whiteboard discussing integration"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl md:text-[46px] md:leading-[1.15]">
              Talk to an identity expert about event-driven integration.
            </h2>
            <p className="font-manrope text-base font-normal leading-relaxed text-geyser">
              Share your identity estate, the events you need, and your constraints.
              An expert will confirm what is available for your environment.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-[580px]">
          <div className="rounded-2xl border border-white/10 bg-[#0f2140] p-7 shadow-xl sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg
                    className="size-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-dm-serif text-2xl font-normal text-white-solid">
                  Enquiry received
                </h3>
                <p className="max-w-md font-manrope text-sm text-geyser">
                  Thank you. An identity specialist will review your architecture
                  constraints and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Business email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-manrope text-xs font-extrabold uppercase tracking-wider text-slate-400"
                  >
                    Business email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-manrope text-sm text-white-solid placeholder:text-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-manrope text-xs font-extrabold uppercase tracking-wider text-slate-400"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-manrope text-sm text-white-solid placeholder:text-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="organization"
                    className="font-manrope text-xs font-extrabold uppercase tracking-wider text-slate-400"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    required
                    placeholder="Organization"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-manrope text-sm text-white-solid placeholder:text-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="role"
                    className="font-manrope text-xs font-extrabold uppercase tracking-wider text-slate-400"
                  >
                    Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    placeholder="Role"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-manrope text-sm text-white-solid placeholder:text-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Integration interest */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="interest"
                    className="font-manrope text-xs font-extrabold uppercase tracking-wider text-slate-400"
                  >
                    Integration interest
                  </label>
                  <select
                    id="interest"
                    defaultValue=""
                    className="rounded-lg border border-white/20 bg-[#172c54] px-4 py-3 font-manrope text-sm text-white-solid focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="" disabled className="text-slate-400">
                      Select one
                    </option>
                    <option value="identity-lifecycle">Identity lifecycle</option>
                    <option value="delegated-authority">Delegated authority</option>
                    <option value="policy-outcomes">Policy outcomes</option>
                    <option value="trust-signals">Trust signals & revocation</option>
                    <option value="evidence-reference">Evidence reference & audit</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="mt-1 size-4 rounded border-white/30 bg-white/10 text-azure-48 focus:ring-azure-48"
                  />
                  <label
                    htmlFor="consent"
                    className="font-manrope text-xs font-normal leading-relaxed text-geyser"
                  >
                    I acknowledge the privacy notice and agree to be contacted about
                    this enquiry.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-azure-48 py-3.5 font-manrope text-sm font-bold text-white-solid shadow-md transition-all duration-200 hover:bg-blue-600 sm:w-auto sm:px-8"
                >
                  Submit enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
