import Image from "next/image";

const items = [
  { icon: "hand-1", text: "Recipient categories: from the disclosure register." },
  { icon: "doc-1", text: "Contractual references: only approved agreements." },
];

export default function DesktopRecipientsSection() {
  return (
    <section
      id="recipients"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-hand.svg" width={24} height={24} alt="" />
          </div>
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Recipients
          </p>
        </div>
        <div className="w-full min-w-0 max-w-[820px] flex-1">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
            Sharing and recipients
          </h2>
          <p className="mt-[21px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Recipient categories and processing roles are shown only where verified. No statement that <br className="max-xl:hidden" />
            information is never shared is made unless it is independently evidenced.
          </p>
          <ul className="flex flex-col gap-[11.5px] pt-[23px]">
            {items.map((i) => (
              <li key={i.icon} className="flex items-center gap-[12px]">
                <Image src={`/privacy-notice/desktop-icon-${i.icon}.svg`} width={20} height={20} alt="" className="shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155] xl:whitespace-nowrap">
                  {i.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
