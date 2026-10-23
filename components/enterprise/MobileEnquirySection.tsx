const fields = [
  { label: "Work email", note: "Required; syntax checked" },
  { label: "Full name", note: "Required" },
  { label: "Organization", note: "Required; not verified" },
  { label: "Role", note: "Optional: CIO/CTO, Security/IAM, Engineering, Procurement, Other" },
  { label: "Evaluation area", note: "Required: enterprise access, delegated authority, AI-agent access, credentials, other" },
  { label: "Country or region", note: "Optional; used for routing only" },
  { label: "Message", note: "Optional; no credentials, secrets or personal records" },
  { label: "Privacy acknowledgment", note: "Required; links to the privacy policy" },
];

export default function MobileEnquirySection() {
  return (
    <section id="enquiry" className="lg:hidden px-[11px] pt-[80px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[14px]">
        <div className="relative h-[19.19px] w-full">
          <span aria-hidden="true" className="absolute left-0 top-1/2 h-[2px] w-[28px] -translate-y-1/2 bg-[#22b8d6]" />
          <p className="absolute left-[38px] top-1/2 -translate-y-1/2 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
            Request a review
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb] [word-break:break-word]">
          What the enquiry asks
        </h2>
        <p className="max-w-[760px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
          Submitting starts a review. It is not a booking, a quote, an offer or a commitment. The receipt confirms only that the request was received.
        </p>
        <div className="flex w-full flex-col rounded-[18px] border border-[#e2e8f0] bg-white px-[34px] pb-[36px] pt-[50px]">
          <div className="self-start rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] py-[5px]">
            <p className="whitespace-nowrap font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#334155]">
              Form not yet enabled
            </p>
          </div>
          <ul className="mt-[18px] flex flex-col">
            {fields.map((f) => (
              <li key={f.label} className="border-b border-[#e2e8f0] py-[13px]">
                <p className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#2563eb]">{f.label}</p>
                <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{f.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-[17px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
            Submit control is not shown. States covered: submitting, received, unknown outcome, route unavailable.
          </p>
        </div>
      </div>
    </section>
  );
}
