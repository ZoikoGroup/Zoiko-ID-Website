import Image from "next/image";

const rows: { icon: string; title: string; pill?: string; pillSize?: string; text?: string }[] = [
  { icon: "doc-2", title: "Summary", pill: "Approved summary", pillSize: "text-[12.8px]" },
  { icon: "check-1", title: "Responsibilities", pill: "Approved responsibilities", pillSize: "text-[12.5px]" },
  { icon: "award", title: "Qualifications", pill: "Approved qualifications", pillSize: "text-[12.4px]" },
  { icon: "pin-2", title: "Location and type", text: "Shown only when approved for the role" },
  { icon: "globe", title: "Work eligibility", text: "Stated per role, never inferred" },
];

export default function MobileRoleStructureSection() {
  return (
    <section id="role-structure" className="bg-white px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[60px]">
        <div className="relative h-[520px] w-full overflow-hidden rounded-[22px]">
          <Image
            src="/careers/mobile-role-structure.webp"
            alt="Illustration of a role page structure"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
          <div className="absolute bottom-[25.99px] left-[26px] flex max-w-[min(320px,calc(100%-52px))] items-center gap-[10px] rounded-[14px] bg-white px-[20px] pb-[15.94px] pt-[15.5px]">
            <Image src="/careers/mobile-icon-doc-1.svg" width={20} height={20} alt="" className="shrink-0" />
            <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
              Structure only. No live role is shown.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[14.7px]">
          <div className="flex h-[19.8px] w-full items-center gap-[12px]">
            <span className="h-[2px] w-[36px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[2.16px] text-[#1d4ed8]">
              Job details
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] pt-[2.215px] font-dm-serif text-[32px] font-normal leading-[35.84px] tracking-[-0.16px] text-[#0b1b33]">
            What a role page will<br />contain
          </h2>
          <p className="w-full max-w-[700px] font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
            Each published role gets its own page with<br />the approved summary, responsibilities,<br />qualifications and disclosures.
          </p>

          <ul className="flex w-full flex-col border-t border-[#dce3ee] pt-[13.3px]">
            {rows.map((r) => (
              <li key={r.title} className="flex w-full items-center gap-[18px] border-b border-[#dce3ee] pb-[20px] pt-[19px]">
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src={`/careers/mobile-icon-${r.icon}.svg`} width={21} height={21} alt="" />
                </span>
                <div className={`flex min-w-px flex-1 flex-col items-start ${r.pill ? "gap-[2.5px] pb-[2.39px]" : "gap-[1px] pb-[1.39px]"}`}>
                  <h3 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#0b1b33]">{r.title}</h3>
                  {r.pill ? (
                    <span className={`rounded-[6px] bg-[#eef2f7] px-[8px] font-manrope font-normal leading-[21.45px] text-[#64748b] ${r.pillSize}`}>
                      {r.pill}
                    </span>
                  ) : (
                    <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82]">{r.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex w-full items-start gap-[12px] rounded-[14px] border border-[#fca5a5] bg-[#fef2f2] px-[20px] py-[23.65px]">
            <span className="flex h-[22px] w-[20px] shrink-0 items-start pt-[2px]">
              <Image src="/careers/mobile-icon-alert.svg" width={20} height={20} alt="" />
            </span>
            <p className="whitespace-nowrap font-manrope text-[14px] font-normal leading-[23.1px] text-[#7f1d1d]">
              <strong className="font-bold">Closed or expired roles</strong> stay reachable,<br />
              lose their apply action, and read “This<br />
              position is no longer accepting<br />
              applications.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
