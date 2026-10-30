"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import ImageTextSection from "./ImageTextSection";

const MAX_DETAILS = 1000;

const roles = [
  "Architect",
  "Developer or engineer",
  "Security or risk",
  "Product",
  "Procurement",
  "Executive",
  "Other",
];

const inputClass =
  "h-11 w-full rounded-[10px] border border-[#C7D2E2] bg-white-solid px-3.5 font-manrope text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-azure-48 focus:outline-none focus:ring-2 focus:ring-azure-48/30";

function FieldCard({
  id,
  label,
  required,
  hint,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl border border-[#E2E8F0] bg-white-solid p-6 ${className}`}>
      <label htmlFor={id} className="font-manrope text-sm font-bold leading-6 text-[#0F172A]">
        {label}
        {required ? (
          <span className="text-red-500" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="text-xs font-semibold text-[#5B6B82]"> (optional)</span>
        )}
      </label>
      {children}
      {hint ? <p className="font-manrope text-xs leading-6 text-[#5B6B82]">{hint}</p> : null}
    </div>
  );
}

// The enquiry route is not live yet, so these fields are shown for layout and
// are not submitted anywhere.
export default function ReplyDetailsSection() {
  const [details, setDetails] = useState("");

  return (
    <ImageTextSection
      id="reply"
      tone="grey"
      title="Who we should reply to"
      description="Name and business email are required. Your role and country are optional, and country is requested only where it is needed to route your enquiry."
      image={{ src: "/talk-to-an-expert/Office workspace with desks.png", alt: "Two colleagues discussing work on a laptop" }}
    >
      <div className="mt-12 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6">
          <FieldCard id="enquiry-name" label="Name" required>
            <input id="enquiry-name" name="name" type="text" autoComplete="name" required aria-required="true" placeholder="e.g. Alex Morgan" className={inputClass} />
          </FieldCard>

          <FieldCard id="enquiry-email" label="Business email" required hint="Checked for format on the server.">
            <input id="enquiry-email" name="email" type="email" autoComplete="email" required aria-required="true" placeholder="you@example.com" className={inputClass} />
          </FieldCard>

          <FieldCard id="enquiry-org" label="Organization" required>
            <input id="enquiry-org" name="organization" type="text" autoComplete="organization" required aria-required="true" placeholder="Your organization" className={inputClass} />
          </FieldCard>

          <FieldCard id="enquiry-role" label="Role">
            <select id="enquiry-role" name="role" defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select one
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </FieldCard>

          <FieldCard
            id="enquiry-details"
            label="Enquiry details"
            className="md:col-span-2"
            hint={details.length > 0 ? `${details.length} / ${MAX_DETAILS.toLocaleString()} characters.` : "Up to 1,000 characters."}
          >
            <textarea
              id="enquiry-details"
              name="details"
              rows={4}
              maxLength={MAX_DETAILS}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Describe your objective. Do not include secrets, credentials, identity documents or production data."
              className={`${inputClass} h-28 resize-y py-3`}
            />
          </FieldCard>
        </div>

        <Link
          href="/authorization-delegated-authority"
          className="inline-flex w-fit items-center rounded-md bg-azure-48 px-7 py-3.5 font-manrope text-base font-bold text-white-solid transition-colors hover:bg-[#1D4ED8]"
        >
          Explore delegated authority
        </Link>
      </div>
    </ImageTextSection>
  );
}
