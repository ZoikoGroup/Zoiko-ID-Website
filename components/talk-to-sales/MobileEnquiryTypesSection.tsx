const TYPES = [
  { title: "Enterprise platform evaluation", desc: "Overall fit, coexistence and scope.", selected: true },
  { title: "Security and IAM architecture", desc: "Controls for authority, revocation and trust.", selected: false },
  { title: "Integration or developer evaluation", desc: "Federation, APIs and technical scope.", selected: false },
  { title: "Commercial and procurement", desc: "How a proposal is scoped and reviewed.", selected: false },
  { title: "Existing customer expansion", desc: "Extending an existing relationship.", selected: false },
  { title: "Other enterprise enquiry", desc: "Anything that does not fit above.", selected: false },
];

const ROUTES = [
  "Vulnerability → Responsible Disclosure",
  "Account problem → Help & Support",
  "Partnership → partner intake, where approved",
  "Live incident → Availability / Status",
];

export default function MobileEnquiryTypesSection() {
  return (
    <section id="enquiry-types" className="lg:hidden w-full px-[22px] pb-[59.99px] pt-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#1d4ed8]">
          Choose your enquiry
        </p>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          What would you like to discuss?
        </h2>
        <p className="w-full max-w-[620px] font-manrope text-[17px] font-normal leading-[27.2px] text-[#64748b]">
          Select one. Your choice shapes which fields appear and which route your enquiry takes.
        </p>
        <ul className="flex w-full flex-col gap-[16px] pt-[28px]">
          {TYPES.map((t) => (
            <li
              key={t.title}
              className="relative h-[170px] min-h-[170px] w-full rounded-[20px] border-2 border-solid border-[#d9e2ee] bg-white"
            >
              <span
                aria-hidden="true"
                className={`absolute left-[24px] top-[24px] size-[22px] rounded-[11px] border-2 border-solid ${
                  t.selected ? "border-[#1d4ed8] bg-[#1d4ed8]" : "border-[#94a3b8]"
                }`}
              />
              <p className="absolute left-[24px] right-[24px] top-[60px] pb-[6px] font-manrope text-[16px] font-bold leading-[25.6px] text-[#2563eb]">
                {t.title}
              </p>
              <p className="absolute left-[24px] right-[24px] top-[98.59px] pb-[0.8px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
                {t.desc}
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex w-full flex-col items-start justify-center gap-[12px] pt-[14px]">
          {ROUTES.map((r) => (
            <li
              key={r}
              className="max-w-full rounded-[999px] bg-[#eef4fb] px-[16px] pb-[9.8px] pt-[8px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#334155]"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
