import Image from "next/image";

export default function MobileUpdatesSection() {
  return (
    <section
      id="updates"
      className="w-full scroll-mt-[120px] border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Updates
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-layers.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[4.9px]">
          <p className="w-full font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            13
          </p>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Updates and previous<br />
            versions
          </h2>
          <p className="w-full pb-[23.1px] pt-[21.1px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            Effective and updated dates are shown<br />
            separately. Earlier notices are kept as<br />
            archived versions, labelled as such, and<br />
            material changes are described from the<br />
            source registry.
          </p>
          <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/mobile-icon-layers.svg" width={24} height={24} alt="" />
            </div>
            <div className="flex min-h-[114.58px] min-w-0 flex-1 flex-col items-start">
              <h3 className="-mt-[1px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                Archive
              </h3>
              <p className="mt-[6px] whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                No archive is listed until one is<br />
                approved.
              </p>
              <span className="mt-[25.5px] whitespace-nowrap rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[5.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e]">
                No archive available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
