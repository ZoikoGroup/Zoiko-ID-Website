import Image from "next/image";
import { KeyRound } from "lucide-react";

interface FormFieldRule {
  field: string;
  requirement: string;
}

const formRules: FormFieldRule[] = [
  {
    field: "Topic",
    requirement: "Required; from the controlled list",
  },
  {
    field: "Summary",
    requirement: "Required; 10–100 characters",
  },
  {
    field: "Description",
    requirement: "Required; 30–2000 characters, with a no-secrets warning",
  },
  {
    field: "Reply email",
    requirement: "Required; checked on the server; purpose disclosed",
  },
  {
    field: "Organization",
    requirement: "Optional; never assumed verified",
  },
  {
    field: "Account reference",
    requirement: "Optional; safe reference only",
  },
  {
    field: "Consent",
    requirement: "Required only where the legal basis demands it",
  },
  {
    field: "Attachments",
    requirement: "Disabled by default; security-approved and scanned if enabled",
  },
];

const mobileFormRules = [
  {
    field: "Topic",
    requirement: "Required; from the controlled list.",
  },
  {
    field: "Summary",
    requirement: "Required; 10-160 characters.",
  },
  {
    field: "Description",
    requirement: "Required; 20-5000 characters, with a no-secrets warning.",
  },
  {
    field: "Reply email",
    requirement: "Required; checked on the server; purpose disclosed.",
  },
  {
    field: "Organization",
    requirement: "Optional; never assumed verified.",
  },
  {
    field: "Account reference",
    requirement: "Optional; safe reference only.",
  },
  {
    field: "Consent",
    requirement: "Required only where the legal basis derives it.",
  },
  {
    field: "Attachments",
    requirement: "Disabled by default; security-approved and scanned if enabled.",
  },
];

interface RequestFormRulesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function RequestFormRulesSection({
  view = "all",
}: RequestFormRulesSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f8fafc] px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              REQUEST HELP
            </span>
          </div>

          {/* Title without awkward line breaks */}
          <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            The request form is shown only when it is live
          </h2>
          <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
            No form appears on this page now. The fields below describe the approved intake, so you know what to prepare. Never include passwords, recovery codes or identity documents.
          </p>

          {/* Visual photo (ahs12.jpg) */}
          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-md">
            <Image
              src="/Support-Accessibility-01-help-support/ahs12.jpg"
              alt="User reviewing request intake specifications"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Form Specification Card */}
          <div className="mt-6 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-[#f1f5f9] px-3.5 py-1">
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                FORM NOT AVAILABLE
              </span>
            </div>

            <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
              No submit control is shown until an approved backend is live.
            </p>

            {/* Form Rules List */}
            <div className="mt-5 divide-y divide-slate-100 font-manrope">
              {mobileFormRules.map((item) => (
                <div key={item.field} className="py-3.5 first:pt-3 last:pb-1">
                  <span className="block text-[13px] font-bold text-[#071324]">
                    {item.field}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[#64748b]">
                    {item.requirement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
          {/* 2-Column Content Layout */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Column: Heading, Subtitle & Night Operations Photo */}
            <div>
              <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                The request form is
                <br />
                shown only when it
                <br />
                is live
              </h2>
              <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
                No form appears on this page now. The fields below describe the approved intake, so you know what to prepare. Never include passwords, recovery codes or identity documents.
              </p>

              {/* Rounded Photo (ahs9.png) */}
              <div className="relative mt-8 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl sm:rounded-3xl">
                <Image
                  src="/Support-Accessibility-01-help-support/ahs9.png"
                  alt="Security and operations engineer working at workstation"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Specification Card / Table */}
            <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-8">
              {/* Pill Header */}
              <div className="inline-flex w-fit items-center rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1">
                <span className="font-mono text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  FORM NOT AVAILABLE
                </span>
              </div>

              <p className="mt-3 font-manrope text-xs text-[#64748b]">
                No submit control is shown until an approved backend is live.
              </p>

              {/* Spec Fields List */}
              <div className="mt-6 divide-y divide-slate-100 font-manrope">
                {formRules.map((item) => (
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
            </div>
          </div>

          {/* Bottom Callout Bar: Recovering access is separate from proving identity */}
          <div className="mt-14 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:mt-16 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <KeyRound className="size-5" />
              </div>
              <div>
                <h3 className="font-dm-serif text-lg font-normal text-[#071324] sm:text-xl">
                  Recovering access is separate from proving identity
                </h3>
                <p className="mt-1.5 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Password reset and identity proofing have their own steps. We will never ask you to send a password, recovery code or private key, and we cannot promise immediate restoration. If your account is locked and you suspect compromise, use the security route above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
