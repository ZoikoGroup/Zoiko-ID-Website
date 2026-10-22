import Image from "next/image";

const fields: { name: string; note: string }[] = [
  { name: "Business email", note: "Required; checked on the server" },
  { name: "Organization", note: "Required; bounded text" },
  { name: "Role", note: "Optional: fixed choices or Other" },
  { name: "Operating region", note: "Optional; not used to infer availability" },
  { name: "Area of interest", note: "Required: identity, authority, evidence, integration or unsure" },
  { name: "Requirements", note: "Optional, up to 800 characters; no secrets" },
  { name: "Privacy acknowledgement", note: "Required; links to the privacy notice" },
  { name: "Marketing consent", note: "Optional; off by default; separate" },
];

const states: { name: string; note: string }[] = [
  { name: "Invalid", note: "Errors beside each field, with a summary" },
  { name: "Submitting", note: "Duplicate submission prevented" },
  { name: "Uncertain", note: "Success never shown without server receipt" },
  { name: "Unavailable", note: "Approved alternate contact route" },
];

export default function MobileEnquirySection() {
  return (
    <section id="enquiry" className="lg:hidden w-full px-[22px] pb-[60px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          Talk to Sales
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Start a qualified enquiry
        </h2>

        <div className="flex flex-col gap-[20px] pt-[44px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px] overflow-hidden rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
              <div className="relative -mx-[30px] -mt-[30px] mb-[14px] h-[200px]">
                <Image
                  src="/platform-usage-model/mobile-enquiry-planning.webp"
                  alt="Planning a qualified enquiry"
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                Share a business contact and your area of interest.
              </h3>
              <p className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                Please do not include credentials, tenant identifiers, production logs or customer records.
              </p>
            </div>

            <div className="flex flex-col gap-[10px] overflow-hidden rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
              <div className="flex w-full items-center rounded-full border border-dashed border-[#94a3b8] bg-[#f1f5f9] px-[11px] py-[5px]">
                <span className="font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#334155]">
                  Form not yet enabled
                </span>
              </div>
              <p className="pt-[6px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                No submit control is shown. The receipt confirms only that a request was received.
              </p>
            </div>
          </div>

          <div className="rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[34px]">
            <dl>
              {fields.map((f) => (
                <div key={f.name} className="border-b border-solid border-[#e2e8f0] py-[12px]">
                  <dt className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#2563eb]">
                    {f.name}
                  </dt>
                  <dd className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                    {f.note}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="flex flex-col gap-[12px] pt-[18px]">
              {states.map((s) => (
                <li key={s.name} className="flex flex-col gap-[1px] rounded-[12px] bg-[#f5f7fa] p-[14px]">
                  <span className="font-manrope text-[13px] font-bold leading-[20.8px] text-[#2563eb]">
                    {s.name}
                  </span>
                  <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#334155]">
                    {s.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
