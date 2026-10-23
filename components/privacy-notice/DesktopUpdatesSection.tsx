import Image from "next/image";

export default function DesktopUpdatesSection() {
  return (
    <section
      id="updates"
      className="hidden w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[105px] lg:block"
    >
      <div className="flex w-full items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col items-start gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-layers-1.svg" width={24} height={24} alt="" className="size-[24px]" />
          </div>
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Updates
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[32px]">
          <div className="flex w-full flex-col gap-[5px]">
            <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Updates and previous versions
            </h2>
            <p className="w-full pt-[16px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              Effective and updated dates are shown separately. Earlier notices are kept as archived versions, labelled as such, and material changes are described from the source registry.
            </p>
          </div>
          <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[30px] py-[28px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/desktop-icon-layers-1.svg" width={24} height={24} alt="" className="size-[24px]" />
            </div>
            <div className="flex min-w-0 flex-1 items-start">
              <div className="flex min-w-px flex-1 flex-col gap-[6px]">
                <p className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">Archive</p>
                <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                  No archive is listed until one is approved.
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                No archive available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
