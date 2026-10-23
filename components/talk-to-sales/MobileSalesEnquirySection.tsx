"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

const inputCls =
  "block w-full min-h-[46px] rounded-[10px] border border-solid border-[#c5d2e2] bg-white px-[14px] py-[10.5px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#0b1b33] placeholder:text-[#94a3b8] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#2563eb]";

function Field({ id, label, hint, children }: { id: string; label: string; hint: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[6px]">
      <label htmlFor={id} className="font-manrope text-[13px] font-bold leading-[20.8px] text-[#2563eb]">
        {label} <span className="font-medium text-[#64748b]">{hint}</span>
      </label>
      {children}
    </div>
  );
}

export default function MobileSalesEnquirySection() {
  const [consent, setConsent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="enquiry-form" className="lg:hidden w-full bg-[#eef4fb] px-[22px] pb-[60px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[70px]">
        <div className="flex w-full flex-col gap-[12px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
            Sales enquiry
          </p>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            Tell us what you are evaluating
          </h2>
          <p className="max-w-[620px] pb-[14px] font-manrope text-[15px] font-normal leading-[24px] text-[#64748b]">
            Only the essentials are required. Everything else is optional and helps the right team respond to the right question.
          </p>
          <div className="w-full rounded-[14px] bg-[#fef2f2] px-[20px] py-[18px]">
            <p className="font-manrope text-[14px] leading-[22.4px]">
              <strong className="font-bold text-[#991b1b]">
                Do not include passwords, tokens, credentials, government IDs or confidential security configurations.
              </strong>
              <span className="font-normal text-[#7f1d1d]"> To report a security issue, use Responsible Disclosure instead.</span>
            </p>
          </div>
          <div className="relative h-[278px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/talk-to-sales/mobile-enquiry-form.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="flex w-full flex-col items-start gap-[14.9px] rounded-[24px] border border-solid border-[#d9e2ee] bg-white p-[24px] drop-shadow-[0px_14px_20px_rgba(10,26,51,0.06)]"
        >
          <span className="rounded-full border border-dashed border-[#94a3b8] bg-white px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#334155]">
            Submission not connected in this layout
          </span>

          <div className="flex w-full flex-col gap-[16.9px] pt-[5.11px]">
            <div className="flex w-full flex-col gap-[6px]">
              <Field id="ts-email" label="Work email" hint="(required)">
                <input id="ts-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} />
              </Field>
              <p className="font-manrope text-[12px] font-normal leading-[19.2px] text-[#64748b]">
                Business email preferred. Checked on the server.
              </p>
            </div>
            <Field id="ts-name" label="Full name" hint="(required)">
              <input id="ts-name" name="name" type="text" autoComplete="name" placeholder="Your full name" className={inputCls} />
            </Field>
            <Field id="ts-org" label="Organization name" hint="(required)">
              <input id="ts-org" name="organization" type="text" autoComplete="organization" placeholder="Your organization" className={inputCls} />
            </Field>
            <Field id="ts-role" label="Role or function" hint="(optional)">
              <select id="ts-role" name="role" defaultValue="" className={`${inputCls} text-[#94a3b8] has-[option:checked:not([value=''])]:text-[#0b1b33]`}>
                <option value="" disabled>
                  Select one
                </option>
                <option value="security">Security or identity</option>
                <option value="engineering">Engineering or platform</option>
                <option value="product">Product</option>
                <option value="risk">Risk, compliance or legal</option>
                <option value="procurement">Procurement</option>
                <option value="executive">Executive</option>
                <option value="other">Other</option>
              </select>
            </Field>
            <Field id="ts-site" label="Organization website" hint="(optional)">
              <input id="ts-site" name="website" type="url" autoComplete="url" placeholder="https://" className={inputCls} />
            </Field>
            <Field id="ts-eval" label="What are you evaluating?" hint="(required, up to 1,500 characters)">
              <textarea
                id="ts-eval"
                name="evaluating"
                maxLength={1500}
                placeholder="Describe your evaluation goals, without secrets or customer records."
                className={`${inputCls} min-h-[90px] resize-y`}
              />
            </Field>
            <Field id="ts-actors" label="Actor classes" hint="(optional)">
              <textarea
                id="ts-actors"
                name="actorClasses"
                rows={2}
                placeholder="People, organizations, services, machines, AI agents, unsure"
                className={`${inputCls} resize-y py-[11px]`}
              />
            </Field>
            <Field id="ts-stage" label="Project stage" hint="(optional)">
              <input id="ts-stage" name="stage" type="text" placeholder="Exploring, planning, evaluating, not sure" className={inputCls} />
            </Field>
            <Field id="ts-ecosystem" label="Current identity ecosystem" hint="(optional)">
              <input id="ts-ecosystem" name="ecosystem" type="text" placeholder="Describe briefly" className={inputCls} />
            </Field>

            <div className="flex w-full items-start gap-[12px] pt-[1.1px]">
              <input
                id="ts-consent"
                name="marketingConsent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-[3px] size-[18px] shrink-0 cursor-pointer appearance-none rounded-[4px] border border-solid border-[#94a3b8] bg-white checked:border-[#2563eb] checked:bg-[#2563eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              />
              <label htmlFor="ts-consent" className="max-w-[288px] cursor-pointer font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                Optional: send me occasional product updates. Unchecked by default; separate from this enquiry.
              </label>
            </div>
          </div>

          <p className="pb-[0.69px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
            Information is used to review and route this enquiry, subject to the Privacy Notice.
          </p>

          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[5.11px]">
            <button
              type="submit"
              className="min-h-[48px] rounded-full border border-solid border-[#2563eb] bg-[#cbd5e1] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-[#334155] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            >
              Submit sales enquiry
            </button>
            <p className="max-w-[318px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
              Submitting does not confirm a meeting, a quote or a response time.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
