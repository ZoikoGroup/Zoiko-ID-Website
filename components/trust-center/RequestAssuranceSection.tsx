"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  CircleCheck,
  Folder,
  Inbox,
  Info,
  Lock,
  Pencil,
  SearchCheck,
  Send,
  TriangleAlert,
} from "lucide-react";

import { Section, SectionHeading } from "./shared";

const categories = ["Control explanation", "Policy", "Assessment", "Architectural note"];
const regions = ["North America", "Europe", "United Kingdom", "Asia-Pacific", "Other"];

const states = [
  { title: "Draft", description: "Fields are being completed.", icon: Pencil },
  { title: "Submitting", description: "Request is being sent.", icon: Send },
  { title: "Received", description: "Server confirmed. Not approved.", icon: Inbox },
  { title: "Under review", description: "Owner is checking access.", icon: SearchCheck },
  { title: "Needs details", description: "More information requested.", icon: Info },
  { title: "Approved", description: "Released through the access service.", icon: CircleCheck },
  { title: "Declined", description: "Neutral outcome, no detail given.", icon: TriangleAlert },
  { title: "Closed", description: "Request is complete.", icon: Folder },
];

const fieldClass =
  "w-full rounded-md border border-[#CBD5E1] bg-white-solid px-3.5 py-3 font-manrope text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-azure-48";
const labelClass = "font-manrope text-xs font-extrabold uppercase tracking-wide text-[#0F172A]";
const hintClass = "font-manrope text-xs font-medium normal-case tracking-normal text-azure-47";

export default function RequestAssuranceSection() {
  const [notSent, setNotSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Request routing is not connected yet. A reference is shown only once a
    // server confirms receipt, so never report this request as received.
    setNotSent(true);
  };

  return (
    <Section id="request-assurance">
      <SectionHeading
        title="A request starts a review, it does not grant access"
        description="Submitting a request does not grant permission or guarantee release. Identity, confidentiality and access are checked by the owning team before anything is shared."
      />

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-[5fr_6fr] lg:gap-12 xl:grid-cols-[500px_1fr] xl:gap-[70px]">
        <div className="flex flex-col gap-3">
          <div className="relative h-[252px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/trust-center/request-form.webp"
              alt="Reviewer discussing a request at a laptop"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="flex items-start gap-3 rounded-xl bg-[#EFF6FF] px-4 py-3.5 font-manrope text-sm leading-[22px] text-[#0F172A]">
            <Info className="mt-0.5 size-[18px] shrink-0 text-azure-48" strokeWidth={1.75} aria-hidden="true" />
            Received means your request reached us. It does not mean approved, released or scheduled.
          </p>
          <p className="flex items-start gap-3 rounded-xl bg-[#FEFBEA] px-4 py-3.5 font-manrope text-sm leading-[22px] text-[#0F172A]">
            <Lock className="mt-0.5 size-[18px] shrink-0 text-[#C2410C]" strokeWidth={1.75} aria-hidden="true" />
            Do not attach confidential documents, credentials or incident details to this form.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          onChange={() => setNotSent(false)}
          className="flex flex-col gap-5 rounded-2xl border border-grey-91 bg-white-solid p-6 sm:p-9"
        >
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Business email</span>
            <input type="email" name="email" required autoComplete="email" placeholder="name@organization.com" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Organization</span>
            <input type="text" name="organization" required autoComplete="organization" placeholder="Organization name" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Job role</span>
            <input type="text" name="role" required autoComplete="organization-title" placeholder="Your role" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Document category requested</span>
            <select name="category" required defaultValue="" className={fieldClass}>
              <option value="" disabled>Select one category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Purpose</span>
            <input type="text" name="purpose" required placeholder="Describe the review purpose" className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>
              Region <span className={hintClass}>(if needed)</span>
            </span>
            <select name="region" defaultValue="" className={fieldClass}>
              <option value="">Select one</option>
              {regions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className={labelClass}>
              Message <span className={hintClass}>(optional)</span>
            </span>
            <textarea name="message" rows={2} placeholder="Context, without sensitive data" className={`${fieldClass} resize-y`} />
          </label>

          <label className="flex items-center gap-3 font-manrope text-sm text-azure-47">
            <input type="checkbox" name="privacy" required className="size-[18px] shrink-0 rounded accent-azure-48" />
            I acknowledge the privacy notice for this request.
          </label>

          <div className="flex flex-col items-start gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-azure-48 px-6 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-[#1D4ED8]"
            >
              Submit request
            </button>
            <p aria-live="polite" className="font-manrope text-[13px] leading-5 text-azure-47">
              {notSent
                ? "Request routing is not connected yet, so nothing was sent. Please talk to an identity expert instead."
                : "A reference is shown only after the server confirms receipt."}
            </p>
          </div>
        </form>
      </div>

      <ol className="relative mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 xl:grid-cols-8">
        <span
          aria-hidden="true"
          className="absolute left-[6.25%] right-[6.25%] top-[27px] hidden h-0.5 bg-gradient-to-r from-cyan-49 to-azure-48 xl:block"
        />
        {states.map(({ title, description, icon: Icon }) => (
          <li key={title} className="relative flex flex-col items-center gap-1.5 text-center">
            <span className="mb-3 flex size-14 items-center justify-center rounded-full border-2 border-azure-48 bg-white-solid text-azure-48">
              <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="font-manrope text-[15px] font-bold text-[#0F172A]">{title}</span>
            <span className="max-w-[140px] font-manrope text-xs leading-5 text-azure-47">{description}</span>
          </li>
        ))}
      </ol>

      <p className="mt-10 rounded-2xl bg-grey-96 px-6 py-7 font-manrope text-[15px] font-bold text-[#0F172A]">
        Shown only where the owning workflow supports each state.
      </p>
    </Section>
  );
}
