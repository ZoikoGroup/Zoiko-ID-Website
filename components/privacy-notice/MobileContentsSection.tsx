import Image from "next/image";

const items = [
  <>
    Keyboard-operable jump list with a visible
    <br />
    focus target.
  </>,
  <>
    Collapsed by default on mobile; expanded
    <br />
    state is announced.
  </>,
  <>
    Browser find and Back navigation keep
    <br />
    working.
  </>,
];

export default function MobileContentsSection() {
  return (
    <section
      id="contents"
      className="scroll-mt-[120px] w-full border-b border-solid border-[#d9e1ec] bg-white px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Contents
          </p>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8]">
            <Image src="/privacy-notice/mobile-icon-layers.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col gap-[5px]">
          <p className="font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            03
          </p>
          <h2 className="pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Contents
          </h2>
          <p className="pt-[20.39px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
            The contents list is generated from the
            <br />
            approved section headings. It has stable
            <br />
            anchors, works without JavaScript, and
            <br />
            prints as a list.
          </p>
          <ul className="flex w-full flex-col gap-[12px] pt-[23px]">
            {items.map((text, i) => (
              <li key={i} className="flex min-h-[51px] w-full items-start">
                <Image
                  src="/privacy-notice/mobile-icon-check.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="mr-[12px] mt-[3px] shrink-0"
                />
                <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[25.5px] text-[#334155]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
