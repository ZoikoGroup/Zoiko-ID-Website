import Image from "next/image";

const rows = [
  { label: "Work email", text: "Required; syntax checked" },
  { label: "Full name", text: "Required" },
  { label: "Organization", text: "Required; not verified" },
  { label: "Role", text: "Optional: CIO/CTO, Security/IAM, Engineering, Procurement, Other" },
  { label: "Evaluation area", text: "Required: enterprise access, delegated authority, AI-agent access, credentials, other" },
  { label: "Country or region", text: "Optional; used for routing only" },
  { label: "Message", text: "Optional; no credentials, secrets or personal records" },
  { label: "Privacy acknowledgment", text: "Required; links to the privacy policy" },
];

export default function DesktopEnquiryAsksSection() {
  return (
    <section id="enquiry" className="w-full bg-white px-[160px] py-[105px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[13px]">
          <h2 className="pt-[0.7px] font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            What the enquiry asks
          </h2>
          <p className="max-w-[760px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
            Submitting starts a review. It is not a booking, a quote, an offer or a commitment. The receipt confirms only that the request was received.
          </p>
        </div>
        <div className="grid grid-cols-[554fr_566fr] items-center">
          <div className="relative h-[680px] rounded-l-[18px]">
            <Image
              src="/enterprise/desktop-enquiry-visual.webp"
              alt="Enterprise identity enquiry visual"
              fill
              sizes="(min-width: 1024px) 40vw, 0px"
              className="rounded-l-[18px] object-cover"
            />
          </div>
          <div className="flex h-[679px] flex-col justify-between rounded-r-[18px] border border-solid border-[#e2e8f0] bg-white p-[35px]">
            <dl className="m-0 flex flex-col gap-[2px]">
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex items-start py-[13px] ${
                    i < rows.length - 1 ? "border-b border-solid border-[#e2e8f0]" : ""
                  }`}
                >
                  <dt className="w-[200px] shrink-0 whitespace-nowrap font-manrope text-[14px] font-bold leading-[22.4px] text-[#07111f]">
                    {r.label}
                  </dt>
                  <dd className="m-0 min-w-px flex-1 pr-[20px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
                    {r.text}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-solid border-[rgba(100,116,139,0.15)] pb-[0.695px] pt-[16px] font-manrope text-[13px] leading-[20.8px] text-[#64748b]">
              Submit control is not shown. States covered: submitting, received, unknown outcome, route unavailable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
