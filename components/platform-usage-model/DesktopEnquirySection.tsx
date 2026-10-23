import Image from "next/image";

const fields: { label: string; note: string }[] = [
  { label: "Business email", note: "Required; checked on the server" },
  { label: "Organization", note: "Required; bounded text" },
  { label: "Role", note: "Optional: fixed choices or Other" },
  { label: "Operating region", note: "Optional; not used to infer availability" },
  {
    label: "Area of interest",
    note: "Required: identity, authority, evidence, integration or unsure",
  },
  { label: "Requirements", note: "Optional, up to 800 characters; no secrets" },
  { label: "Privacy acknowledgement", note: "Required; links to the privacy notice" },
  { label: "Marketing consent", note: "Optional; off by default; separate" },
];

const states: { title: string; text: string }[] = [
  { title: "Invalid", text: "Errors beside each field, with a summary" },
  { title: "Submitting", text: "Duplicate submission prevented" },
  { title: "Uncertain", text: "Success never shown without server receipt" },
  { title: "Unavailable", text: "Approved alternate contact route" },
];

export default function DesktopEnquirySection() {
  return (
    <section id="enquiry" className="w-full bg-white px-[160px] py-[105px]">
      <h2 className="font-dm-serif text-[52px] font-normal leading-[58.8px] tracking-[-0.38px] text-[#07111f]">
        Start a qualified enquiry
      </h2>
      <div className="mt-[60px] grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-start gap-x-[20px]">
        <div className="flex flex-col gap-[10px] overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white p-[30px]">
          <div className="relative h-[184px] w-full">
            <div className="absolute -left-[30px] -right-[30px] -top-[30px] h-[200px]">
              <Image
                src="/platform-usage-model/desktop-enquiry-planning.webp"
                alt=""
                fill
                sizes="520px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#07111f]">
            Share a business contact and your area of interest.
          </p>
          <p className="max-w-[420px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
            Please do not include credentials, tenant identifiers, production logs or customer records.
          </p>
        </div>
        <div className="flex flex-col rounded-[22px] border border-[#e2e8f0] bg-white p-[34px]">
          <dl>
            {fields.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-start py-[12px] ${i < fields.length - 1 ? "border-b border-[#e2e8f0]" : ""}`}
              >
                <dt className="w-[190px] shrink-0 whitespace-nowrap font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">
                  {f.label}
                </dt>
                <dd className="min-w-px flex-1 font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">
                  {f.note}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="grid grid-cols-2 gap-[12px] pt-[18px]">
            {states.map((s) => (
              <li key={s.title} className="rounded-[12px] bg-[#f5f7fa] p-[14px]">
                <p className="pb-[0.8px] font-manrope text-[13px] font-bold leading-[20.8px] text-[#07111f]">
                  {s.title}
                </p>
                <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#334155]">
                  {s.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
