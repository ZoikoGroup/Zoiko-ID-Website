import Image from "next/image";

export default function MobileHeadquartersAddressSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex w-full flex-col items-start border-b border-solid border-[#d9e1ec] px-[22px] pb-[60px] pt-[67.31px]">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.9px]">
          <div className="flex items-center justify-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-center text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              05 · Headquarters address
            </p>
          </div>
          <div className="flex w-full flex-col items-center pb-[0.83px]">
            <h2 className="font-dm-serif text-center text-[32px] font-normal leading-[35.84px] text-[#0b1b33] whitespace-nowrap">
              Sacramento, California
            </h2>
          </div>
          <div className="relative flex w-full max-w-[880px] flex-col items-start overflow-clip rounded-[24px] border border-solid border-[#d9e1ec] bg-white pt-[1.1px]">
            <div className="flex w-full flex-col items-start gap-[17.3px] p-[30px]">
              <div className="rounded-full bg-[#e8ecf3] px-[12px] pb-[5.89px] pt-[5.5px]">
                <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#3b4a63] whitespace-nowrap">
                  Verified corporate address
                </p>
              </div>
              <address className="font-manrope w-full pb-[0.75px] text-[18px] font-normal not-italic leading-[31.5px] text-[#0b1b33]">
                Zoiko Tech Inc.<br />
                1401 21st Street, Suite R<br />
                Sacramento, CA 95811<br />
                United States
              </address>
              <p className="font-manrope w-full pt-[4.7px] text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">
                Select the address text to copy it. No map<br />
                is shown on this page.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[18px] border-t-2 border-dashed border-[#c5d2e2] bg-[#f4f6fa] px-[30px] py-[40px]">
              <div className="relative h-[160px] w-full overflow-hidden rounded-[14px]">
                <Image src="/headquarters/mobile-address-documents.webp" alt="Corporate documents on a desk" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
              </div>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="font-manrope flex min-h-[48px] w-full cursor-not-allowed items-center justify-center rounded-[8px] border border-solid border-[#cbd5e1] bg-[#e2e8f0] px-[26px] py-[15px] text-center text-[15px] font-bold leading-[25.5px] text-[#64748b] whitespace-nowrap"
              >
                Copy address (unavailable)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
