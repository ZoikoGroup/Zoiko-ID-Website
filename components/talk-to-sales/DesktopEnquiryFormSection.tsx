"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";

const inputCls =
  "block w-full min-h-[46px] rounded-[10px] border border-solid border-[#c5d2e2] bg-white px-[14px] py-[10.5px] font-manrope font-normal text-[12px] leading-[22.4px] text-[#07111f] placeholder:text-[#94a3b8] focus-visible:border-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40";

function Field({
  id,
  label,
  note,
  span = false,
  children,
}: {
  id: string;
  label: string;
  note: string;
  span?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col items-start gap-[6px] ${span ? "col-span-2" : ""}`}>
      <label
        htmlFor={id}
        className="w-full pb-[0.8px] font-manrope font-bold text-[13px] leading-[20.8px] text-[#07111f]"
      >
        {label} <span className="font-medium text-[#64748b]">({note})</span>
      </label>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default function DesktopEnquiryFormSection() {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="enquiry-form" className="w-full bg-[#f8fafc] px-[160px] py-[105px]">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start gap-x-[70px]">
        <div className="flex flex-col items-start gap-[12px]">
          <h2 className="w-full font-dm-serif font-normal text-[52px] leading-[57.2px] text-[#07111f]">
            Tell us what you are evaluating
          </h2>
          <p className="w-full max-w-[620px] pb-[14px] font-manrope font-normal text-[15px] leading-[24px] text-[#64748b]">
            Only the essentials are required. Everything else is optional and helps the right team
            respond to the right question.
          </p>
          <p className="w-full rounded-[14px] bg-[#fef2f2] px-[20px] py-[17.5px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#7f1d1d]">
            <strong className="font-bold text-[#991b1b]">
              Do not include passwords, tokens, credentials, government IDs or confidential
              security configurations.
            </strong>{" "}
            To report a security issue, use Responsible Disclosure instead.
          </p>
          <div className="relative h-[278px] w-full">
            <Image
              src="/talk-to-sales/desktop-enquiry-form.webp"
              alt="Sales team reviewing an identity evaluation"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start gap-[15px] rounded-[24px] border border-solid border-[#d9e2ee] bg-white p-[40px] shadow-[0px_14px_20px_rgba(10,26,51,0.06)]"
        >
          <div className="grid w-full grid-cols-2 items-start gap-x-[18px] gap-y-[18px] pt-[5px]">
            <Field id="tts-email" label="Work email" note="required">
              <input
                id="tts-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputCls}
              />
              <p className="mt-[6px] font-manrope text-[12px] font-normal leading-[19.2px] text-[#64748b]">
                Business email preferred. Checked on the server.
              </p>
            </Field>
            <Field id="tts-name" label="Full name" note="required">
              <input
                id="tts-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className={inputCls}
              />
            </Field>
            <Field id="tts-org" label="Organization name" note="required">
              <input
                id="tts-org"
                name="organization"
                type="text"
                required
                placeholder="Your organization"
                className={inputCls}
              />
            </Field>
            <Field id="tts-role" label="Role or function" note="optional">
              <select
                id="tts-role"
                name="role"
                defaultValue=""
                className={`${inputCls} text-[#94a3b8] [&:not(:has(option[value='']:checked))]:text-[#07111f]`}
              >
                <option value="">Select one</option>
                <option>Security / IAM</option>
                <option>Engineering / Developer</option>
                <option>Architecture</option>
                <option>Procurement / Commercial</option>
                <option>Executive</option>
                <option>Other</option>
              </select>
            </Field>
            <Field id="tts-site" label="Organization website" note="optional" span>
              <input
                id="tts-site"
                name="website"
                type="url"
                placeholder="https://"
                className={inputCls}
              />
            </Field>
            <Field
              id="tts-message"
              label="What are you evaluating?"
              note="required, up to 1,500 characters"
              span
            >
              <textarea
                id="tts-message"
                name="message"
                required
                maxLength={1500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your evaluation goals, without secrets or customer records."
                className={`${inputCls} min-h-[90px] resize-none`}
              />
            </Field>
            <Field id="tts-actors" label="Actor classes" note="optional">
              <textarea
                id="tts-actors"
                name="actorClasses"
                rows={2}
                placeholder="People, organizations, services, machines, AI agents, unsure"
                className={`${inputCls} resize-none py-[11px]`}
              />
            </Field>
            <Field id="tts-stage" label="Project stage" note="optional">
              <textarea
                id="tts-stage"
                name="projectStage"
                rows={2}
                placeholder="Exploring, planning, evaluating, not sure"
                className={`${inputCls} resize-none py-[11px]`}
              />
            </Field>
            <Field id="tts-ecosystem" label="Current identity ecosystem" note="optional" span>
              <input
                id="tts-ecosystem"
                name="ecosystem"
                type="text"
                placeholder="Describe briefly"
                className={inputCls}
              />
            </Field>
            <div className="col-span-2 flex items-start gap-[12px]">
              <input
                id="tts-updates"
                name="updates"
                type="checkbox"
                className="mt-[3px] size-[18px] shrink-0 rounded-[4px] border border-solid border-[#94a3b8] accent-[#2563eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40"
              />
              <label
                htmlFor="tts-updates"
                className="max-w-[500px] font-manrope text-[12px] font-normal leading-[22.4px] text-[#334155]"
              >
                Optional: send me occasional product updates. Unchecked by default; separate from
                this enquiry.
              </label>
            </div>
          </div>
          <p className="w-full pb-[0.8px] font-manrope text-[12px] font-normal leading-[20.8px] text-[#64748b]">
            Information is used to review and route this enquiry, subject to the Privacy Notice.
          </p>
          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[5px]">
            <button
              type="submit"
              className="flex min-h-[48px] items-center rounded-[999px] border border-solid border-[#2563eb] bg-[#4267d5] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50 focus-visible:ring-offset-2"
            >
              Submit sales enquiry
            </button>
            <p className="font-manrope text-[12px] font-normal leading-[20.8px] text-[#64748b]">
              Submitting does not confirm a meeting, a quote or a response time.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
