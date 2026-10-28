import Image from "next/image";

const FAQS: { q: React.ReactNode; a: React.ReactNode }[] = [
  {
    q: (<>Where is Zoiko Tech Inc.<br />headquartered?</>),
    a: (<>Sacramento, California, United<br />States. The street address is<br />shown above.</>),
  },
  {
    q: (<>Is Zoiko iD a Zoiko Tech<br />Inc. platform?</>),
    a: (<>Yes. Zoiko iD is a Zoiko Tech Inc.<br />platform.</>),
  },
  {
    q: (<>Is there a European<br />office?</>),
    a: (<>A London location is listed<br />separately, on its own page.</>),
  },
  {
    q: (<>Can I visit the<br />headquarters?</>),
    a: (<>No visiting arrangement is<br />published on this page. Use the<br />corporate contact route.</>),
  },
];

export default function MobileQuestionsSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="relative h-[440px] w-full overflow-hidden rounded-[22px]">
          <Image
            src="/headquarters/mobile-short-answers.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-[16.9px] pt-[7.32px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              12 · Questions
            </p>
          </div>
          <h2 className="pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Short answers
          </h2>
          <ul className="flex w-full flex-col gap-[14px] pt-[13.09px]">
            {FAQS.map((f, i) => (
              <li
                key={i}
                className="relative flex min-h-[157.38px] items-start gap-[20px] rounded-[18px] border border-solid border-[#d9e1ec] bg-white pb-[24px] pl-[26px] pr-[25.5px] pt-[23.09px]"
              >
                <div className="mt-[0.91px] flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
                  <Image src="/headquarters/mobile-icon-info.svg" width={24} height={24} alt="" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
                  <h3 className="font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">{f.q}</h3>
                  <p className="font-manrope text-[15px] font-normal leading-[25.5px] text-[#5b6b82]">{f.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
