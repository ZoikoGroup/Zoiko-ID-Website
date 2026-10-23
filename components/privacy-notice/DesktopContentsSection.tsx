import Image from "next/image";

const points = [
  "Keyboard-operable jump list with a visible focus target.",
  "Collapsed by default on mobile; expanded state is announced.",
  "Browser find and Back navigation keep working.",
];

export default function DesktopContentsSection() {
  return (
    <section
      id="contents"
      className="flex w-full scroll-mt-[120px] flex-col items-start border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px]"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-[132px] flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-layers-1.svg" width={24} height={24} alt="" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Contents
          </p>
        </div>
        <div className="flex min-w-0 max-w-[820px] flex-1 flex-col items-start gap-[32px]">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Contents
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              The contents list is generated from the approved section headings. It has stable anchors, works without
              JavaScript, and prints as a list.
            </p>
          </div>
          <ul className="flex w-full flex-col items-start gap-[11.5px]">
            {points.map((t) => (
              <li key={t} className="flex w-full items-center gap-[12px]">
                <Image src="/privacy-notice/desktop-icon-check.svg" width={20} height={20} alt="" className="shrink-0" />
                <span className="font-manrope text-[15px] font-normal leading-[25.5px] whitespace-nowrap text-[#334155]">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
