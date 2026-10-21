import Image from "next/image";

const fields = [
  { icon: "provenance-source-references", title: "Source references", text: "The approved first-party documents each claim rests on.", tag: "Shown for every claim" },
  { icon: "provenance-owner-reviewer", title: "Owner and reviewer", text: "The named roles accountable for the content and its technical accuracy.", tag: "Shown once assigned" },
  { icon: "provenance-review-date", title: "Review date and version", text: "The date of the last substantive review, and the version number.", tag: "Not recorded until reviewed" },
  { icon: "provenance-change-history", title: "Change history", text: "Substantive edits are versioned, not silently overwritten.", tag: "Kept with each version" },
  { icon: "provenance-withdrawal", title: "Withdrawal and replacement", text: "A withdrawn or superseded guide points to a supported replacement.", tag: "Notice shown where relevant" },
  { icon: "icon-check-badge", title: "Review trigger", text: "A change in a referenced product or standard prompts a new review.", tag: "Review scheduled on change" },
];

export default function ContentProvenanceSection() {
  return (
    <section id="content-provenance" className="w-full bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <div className="flex h-[19.19px] items-center gap-[10px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
            Content provenance
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Every guide records where it came from
        </h2>
        <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          Each published guide carries these fields. A field that has not been verified is shown as not recorded, never as a made-up date or name.
        </p>
        <ul className="flex flex-col gap-[20px] pt-[28px]">
          {fields.map((f) => (
            <li
              key={f.title}
              className="flex flex-col items-start gap-[6px] rounded-[18px] border border-solid border-[#e2e8f0] bg-white p-[26px]"
            >
              <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                <Image
                  src={`/machine-agent-identity-guides/mobile-${f.icon}.svg`}
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="w-full pt-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">
                {f.title}
              </h3>
              <p className="w-full pb-[6px] font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">
                {f.text}
              </p>
              <p className="w-full rounded-[8px] bg-[#f1f5f9] px-[10px] py-[8px] font-manrope text-[13px] leading-[20.8px] text-[#2563eb]">
                {f.tag}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
