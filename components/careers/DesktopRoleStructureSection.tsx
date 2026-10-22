import Image from "next/image";

const rows = [
  { icon: "/careers/desktop-icon-doc-2.svg", title: "Summary", tag: "Approved summary", tagSize: "text-[12.8px]" },
  { icon: "/careers/desktop-icon-check-1.svg", title: "Responsibilities", tag: "Approved responsibilities", tagSize: "text-[12.5px]" },
  { icon: "/careers/desktop-icon-award.svg", title: "Qualifications", tag: "Approved qualifications", tagSize: "text-[12.4px]" },
  { icon: "/careers/desktop-icon-pin-2.svg", title: "Location and type", desc: "Shown only when approved for the role" },
  { icon: "/careers/desktop-icon-globe.svg", title: "Work eligibility", desc: "Stated per role, never inferred" },
];

export default function DesktopRoleStructureSection() {
  return (
    <section className="flex w-full items-center gap-[90px] bg-white px-[160px] py-[105px]">
      <div className="relative h-[520px] w-[490.476px] shrink-0">
        <Image
          src="/careers/desktop-role-structure.webp"
          alt="Illustration of a role page layout"
          fill
          sizes="491px"
          className="rounded-[22px] object-cover"
        />
        <div className="absolute bottom-[26px] left-[26px] flex max-w-[320px] items-center gap-[10px] rounded-[14px] bg-white px-[20px] pb-[15.94px] pt-[15.5px]">
          <Image src="/careers/desktop-icon-doc-1.svg" width={20} height={20} alt="" className="shrink-0" />
          <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82] xl:whitespace-nowrap">
            Structure only. No live role is shown.
          </p>
        </div>
      </div>
      <div className="flex w-[540px] flex-col items-start gap-[14.8px]">
        <div className="w-full pt-[2.315px]">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] tracking-[-0.26px] text-[#0b1b33]">
            What a role page will <br className="max-xl:hidden" />
            contain
          </h2>
        </div>
        <div className="w-full max-w-[700px] pb-[0.54px]">
          <p className="font-manrope text-[18px] font-normal leading-[29.7px] text-[#5b6b82]">
            Each published role gets its own page with the approved summary, responsibilities, qualifications and disclosures.
          </p>
        </div>
        <ul className="w-full border-t border-[#dce3ee] pb-[11.2px] pt-[13.19px]">
          {rows.map((r) => (
            <li key={r.title} className="flex items-center gap-[18px] border-b border-[#dce3ee] pb-[20px] pt-[19px]">
              <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                <Image src={r.icon} width={21} height={21} alt="" />
              </span>
              <div className="flex min-w-px flex-1 flex-col items-start gap-[2.5px] pb-[2.39px]">
                <h3 className="w-full font-manrope text-[16px] font-bold leading-[26.4px] text-[#0b1b33]">{r.title}</h3>
                {r.tag ? (
                  <span className={`rounded-[6px] bg-[#eef2f7] px-[8px] font-manrope font-normal leading-[21.45px] text-[#64748b] xl:whitespace-nowrap ${r.tagSize}`}>
                    {r.tag}
                  </span>
                ) : (
                  <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#5b6b82] xl:whitespace-nowrap">{r.desc}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[12px] rounded-[14px] border border-[#fca5a5] bg-[#fef2f2] px-[20px] py-[18px]">
          <div className="flex h-[22px] w-[20px] shrink-0 flex-col items-start pt-[2px]">
            <Image src="/careers/desktop-icon-alert.svg" width={20} height={20} alt="" />
          </div>
          <p className="font-manrope text-[14px] font-normal leading-[23.1px] text-[#7f1d1d] xl:whitespace-nowrap">
            <strong className="font-bold">Closed or expired roles</strong> stay reachable, lose their apply action, and read <br className="max-xl:hidden" />
            “This position is no longer accepting applications.”
          </p>
        </div>
      </div>
    </section>
  );
}
