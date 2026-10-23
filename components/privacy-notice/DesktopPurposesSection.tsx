import Image from "next/image";

export default function DesktopPurposesSection() {
  return (
    <section
      id="purposes"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-[#f8fafc] px-[160px] py-[105px]"
    >
      <div className="flex items-start justify-center gap-[90px]">
        <div className="sticky top-0 flex w-[260px] shrink-0 flex-col gap-[14px]">
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/desktop-icon-scale.svg" width={24} height={24} alt="" />
          </div>
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Purposes
          </p>
        </div>
        <div className="flex w-full min-w-0 max-w-[820px] flex-1 flex-col gap-[48px]">
          <div>
            <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
              Purposes and lawful bases
            </h2>
            <p className="mt-[21px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              A purpose-to-basis matrix will appear here. No general claim of consent or legitimate interest is made in advance; each basis must be matched to a purpose and jurisdiction.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="relative h-[301.01px] w-full overflow-hidden rounded-[20px]">
              <Image
                src="/privacy-notice/desktop-purposes-laptop.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 820px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white px-[30px] py-[28px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                <Image src="/privacy-notice/desktop-icon-scale.svg" width={24} height={24} alt="" />
              </div>
              <div className="min-w-0">
                <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">Matrix rule</h3>
                <p className="mt-[5.98px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                  Each row links to its reviewed details. Rows without approved bases are withheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
