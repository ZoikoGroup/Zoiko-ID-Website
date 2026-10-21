import Image from "next/image";

const items = [
  { icon: "provenance-source-references.svg", title: "Source references", body: "The approved first-party documents each claim rests on.", tag: "Shown for every claim" },
  { icon: "provenance-owner-reviewer.svg", title: "Owner and reviewer", body: "The named roles accountable for the content and its technical accuracy.", tag: "Shown once assigned" },
  { icon: "provenance-review-date.svg", title: "Review date and version", body: "The date of the last substantive review, and the version number.", tag: "Not recorded until reviewed" },
  { icon: "provenance-change-history.svg", title: "Change history", body: "Substantive edits are versioned, not silently overwritten.", tag: "Kept with each version" },
  { icon: "provenance-withdrawal.svg", title: "Withdrawal and replacement", body: "A withdrawn or superseded guide points to a supported replacement.", tag: "Notice shown where relevant" },
  { icon: "icon-check-badge.svg", title: "Review trigger", body: "A change in a referenced product or standard prompts a new review.", tag: "Review scheduled on change" },
];

export default function ProvenanceSection() {
  return (
    <section id="provenance" className="w-full px-[160px] bg-white py-[105px]">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
              Every guide records where it came from
            </h2>
            <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              Each published guide carries these fields. A field that has not been verified is shown as not recorded, never as a made-up date or name.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-[20px]">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex flex-col items-start gap-[6px] rounded-[18px] border border-[#e2e8f0] bg-white p-[26px]"
              >
                <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                  <Image src={`/machine-agent-identity-guides/desktop-${item.icon}`} width={22} height={22} alt="" />
                </div>
                <h3 className="w-full pt-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{item.title}</h3>
                <p className="w-full pb-[6px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">{item.body}</p>
                <p className="w-full rounded-[8px] bg-[#f1f5f9] px-[10px] py-[8px] font-manrope text-[13px] leading-[20.8px] text-[#07111f]">
                  {item.tag}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
