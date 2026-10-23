import Image from "next/image";

export default function MobilePurposesSection() {
  return (
    <section
      id="purposes"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Purposes
          </p>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/mobile-icon-scale.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            06
          </p>
          <h2 className="pb-[21.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Purposes and lawful bases
          </h2>
          <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/privacy-notice/mobile-purposes-laptop.webp"
              alt="Laptop on a desk"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <p className="pb-[23px] pt-[29px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            A purpose-to-basis matrix will appear here.
            <br />
            No general claim of consent or legitimate
            <br />
            interest is made in advance; each basis
            <br />
            must be matched to a purpose and
            <br />
            jurisdiction.
          </p>
          <div className="flex w-full items-start gap-[18px] rounded-[16px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/mobile-icon-scale.svg" width={24} height={24} alt="" />
            </div>
            <div className="min-h-[107.69px] min-w-0 flex-1">
              <h3 className="-mt-px whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                Matrix rule
              </h3>
              <p className="mt-[6px] whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                Each row links to its reviewed
                <br />
                details. Rows without approved
                <br />
                bases are withheld.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
