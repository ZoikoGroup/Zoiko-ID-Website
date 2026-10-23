import Image from "next/image";
import type { ReactNode } from "react";

const gate: ReactNode[] = [
  <>
    A verified recipient and owner for each
    <br />
    category
  </>,
  "An approved route and privacy notice",
  "Security review of the processing",
  "Consent, retention and monitoring in place",
  <>
    Accessibility testing and failure handling
    <br />
    signed off
  </>,
];

const fields: { name: string; spec: ReactNode }[] = [
  {
    name: "Enquiry type",
    spec: (
      <>
        Required. Error: Choose a reason for
        <br />
        contacting us.
      </>
    ),
  },
  {
    name: "Full name",
    spec: (
      <>
        Required; 1–120 characters; international
        <br />
        characters allowed.
      </>
    ),
  },
  {
    name: "Reply email",
    spec: (
      <>
        Required; checked on the server; never
        <br />
        echoed in analytics.
      </>
    ),
  },
  {
    name: "Organization",
    spec: (
      <>
        Optional; length-bound. Individuals are not
        <br />
        asked for one.
      </>
    ),
  },
  { name: "Subject", spec: "Required; 5–160 characters." },
  {
    name: "Message",
    spec: (
      <>
        Required; 20–4000 characters. Warns
        <br />
        against passwords and tokens.
      </>
    ),
  },
  {
    name: "Consent",
    spec: (
      <>
        Only if Legal requires it. Never a default
        <br />
        marketing opt-in.
      </>
    ),
  },
  {
    name: "Marketing opt-in",
    spec: (
      <>
        Optional and unchecked. Cannot block an
        <br />
        enquiry.
      </>
    ),
  },
];

export default function MobileGeneralEnquirySection() {
  return (
    <section
      id="form"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex w-full flex-col gap-[40px]">
          <div className="flex w-full flex-col gap-[15px]">
            <div className="flex h-[19.8px] w-full items-center font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
              <span className="ml-[12px] text-[#0b1b33]">05</span>
              <span className="ml-[11px] text-[#0891b2]">General enquiry</span>
            </div>
            <h2 className="pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
              The general form is gated
            </h2>
            <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              The general enquiry form is not shown on this
              <br />
              page. It can be published only once every
              <br />
              item below is verified.
            </p>
            <div className="flex w-full flex-col gap-[12.75px] rounded-[14px] border border-solid border-[#fdba74] bg-[#fff7ed] px-[28px] pb-[28px] pt-[44px] text-[#7c2d12] [word-break:break-word]">
              <p className="whitespace-nowrap font-manrope text-[15px] font-bold leading-[24.75px]">
                Publication gate
              </p>
              <ul className="ml-[20px] flex list-disc flex-col gap-[5px] font-manrope text-[14px] font-normal leading-[23.1px]">
                {gate.map((t, i) => (
                  <li key={i} className="whitespace-nowrap">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col rounded-[18px] border border-dashed border-[#94a3b8] bg-white p-[24px]">
            <div className="flex w-full flex-col items-start gap-[14.01px] pb-[24px]">
              <span className="whitespace-nowrap rounded-full bg-[#e8ecf3] px-[12px] pb-[5.64px] pt-[5.5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] text-[#3b4a63]">
                Form not available
              </span>
              <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">
                Field specification only. No submit control is
                <br />
                shown.
              </p>
            </div>
            <dl className="w-full">
              {fields.map((f, i) => (
                <div
                  key={f.name}
                  className={`flex flex-col gap-[2.875px] pb-[16px] pt-[15px] ${
                    i < fields.length - 1 ? "border-b border-solid border-[#d9e1ec]" : ""
                  }`}
                >
                  <dt className="pb-[0.75px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] [word-break:break-word]">
                    {f.name}
                  </dt>
                  <dd className="pb-[0.625px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82] [word-break:break-word]">
                    {f.spec}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative h-[240px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-states-office.webp"
            alt="Office team reviewing a process"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
