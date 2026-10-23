import Image from "next/image";

const checks: { id: string; text: string }[] = [
  { id: "CT-01", text: "Registry keys drive links" },
  { id: "CT-04", text: "General form publish-gated" },
  { id: "CT-05", text: "No credential collection" },
  { id: "CT-06", text: "One visible H1" },
  { id: "CT-10", text: "Descriptive link names" },
  { id: "CT-12", text: "Errors tied to fields" },
  { id: "CT-15", text: "CSRF and abuse protection" },
  { id: "CT-16", text: "No input in analytics" },
  { id: "CT-17", text: "Backend-confirmed receipts" },
  { id: "CT-18", text: "Duplicates avoided" },
  { id: "CT-24", text: "Owner-verified mailboxes" },
  { id: "CT-26", text: "No walk-in hours inferred" },
  { id: "CT-27", text: "No SLA claims" },
  { id: "CT-28", text: "Security routed separately" },
  { id: "CT-29", text: "Privacy rights separate" },
  { id: "CT-40", text: "Specialist sign-off" },
];

export default function MobileRequirementRegistrySection() {
  return (
    <section
      id="registry"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex h-[19.8px] items-center gap-[12px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
                13
              </span>
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
                Requirement registry
              </span>
            </div>
            <h2 className="pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
              Forty normative checks
            </h2>
            <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              Each check is verified by QA with owner sign-
              <br />
              off before publication. A sample is shown
              <br />
              here; the full register is held by the content
              <br />
              registry.
            </p>
            <div className="relative h-[277px] min-h-[260px] w-full overflow-hidden rounded-[18px]">
              <Image
                src="/contact/mobile-acceptance-documents.webp"
                alt=""
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="flex flex-col gap-[12px]">
            {checks.map((c) => (
              <li
                key={c.id}
                className="flex flex-col gap-[1.5px] rounded-[10px] border border-solid border-[#d9e1ec] bg-white px-[16px] py-[14px]"
              >
                <span className="font-manrope text-[13px] font-bold leading-[21.45px] text-[#0e7490]">
                  {c.id}
                </span>
                <span className="whitespace-nowrap font-manrope text-[13px] font-normal leading-[21.45px] text-[#334155]">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-dashboard.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
