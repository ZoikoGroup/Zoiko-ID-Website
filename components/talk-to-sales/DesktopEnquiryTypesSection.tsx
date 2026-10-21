import Image from "next/image";

const TYPES = [
  { title: "Enterprise platform evaluation", desc: "Overall fit, coexistence and scope." },
  { title: "Security and IAM architecture", desc: "Controls for authority, revocation and trust." },
  { title: "Integration or developer evaluation", desc: "Federation, APIs and technical scope." },
  { title: "Commercial and procurement", desc: "How a proposal is scoped and reviewed." },
  { title: "Existing customer expansion", desc: "Extending an existing relationship." },
  { title: "Other enterprise enquiry", desc: "Anything that does not fit above." },
];

const ROUTES = [
  "Vulnerability → Responsible Disclosure",
  "Account problem → Help & Support",
  "Partnership → partner intake, where approved",
  "Live incident → Availability / Status",
];

export default function DesktopEnquiryTypesSection() {
  return (
    <section
      id="enquiry-types"
      className="flex w-full flex-col items-start gap-[60px] bg-white px-[160px] py-[105px]"
    >
      <div className="flex w-full flex-col gap-[12px]">
        <h2 className="font-dm-serif font-normal text-[52px] leading-[57.2px] text-[#07111f]">
          What would you like to discuss?
        </h2>
        <p className="max-w-[620px] font-manrope font-normal text-[17px] leading-[27.2px] text-[#64748b]">
          Select one. Your choice shapes which fields appear and which route your enquiry takes.
        </p>
      </div>
      <div className="flex w-full flex-col gap-[28px]">
        <ul className="grid w-full grid-cols-3 gap-x-[16px] gap-y-[30px]">
          {TYPES.map((t) => (
            <li
              key={t.title}
              className="flex min-h-[170px] flex-col items-start gap-[24px] rounded-[20px] border-2 border-solid border-[#d9e2ee] bg-white p-[32px]"
            >
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[8px] bg-[#ddf6fb]">
                <Image
                  src="/talk-to-sales/desktop-icon-documentation.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col gap-[7px]">
                <h3 className="pb-[6px] font-manrope font-bold text-[16px] leading-[25.6px] text-[#07111f]">
                  {t.title}
                </h3>
                <p className="pb-[0.8px] font-manrope font-normal text-[13px] leading-[20.8px] text-[#64748b]">
                  {t.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex w-full flex-wrap gap-[12px]">
          {ROUTES.map((r) => (
            <li
              key={r}
              className="whitespace-nowrap rounded-[999px] bg-[#eef4fb] px-[16px] pb-[9.8px] pt-[8px] font-manrope font-normal text-[13px] leading-[20.8px] text-[#334155]"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
