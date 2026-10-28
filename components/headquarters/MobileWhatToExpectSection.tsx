import Image from "next/image";

const steps = [
  {
    n: "01",
    image: "/headquarters/mobile-step-01.webp",
    title: "Choose a route",
    body: "Pick the team that owns your question.",
  },
  {
    n: "02",
    image: "/headquarters/mobile-step-02.webp",
    title: "Describe your need",
    body: "Use the destination’s own form or address.",
  },
  {
    n: "03",
    image: "/headquarters/mobile-step-03.webp",
    title: "Review",
    body: "The owning team reviews your message.",
  },
  {
    n: "04",
    image: "/headquarters/mobile-step-04.webp",
    title: "Reply",
    body: "Replies follow each destination’s process.",
  },
];

export default function MobileWhatToExpectSection() {
  return (
    <section className="lg:hidden flex w-full flex-col border-b border-solid border-[#d9e1ec] bg-white pb-[59.99px] pt-[67.32px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[16.9px] px-[22px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="m-0 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6]">
            11 · What to expect
          </p>
        </div>
        <h2 className="m-0 w-full pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
          How an enquiry moves
        </h2>
        <p className="m-0 w-full max-w-[680px] pt-[1.09px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
          Each destination sets its own process.
          <br />
          These are the general steps; timings are
          <br />
          not promised here.
        </p>
        <ol className="m-0 flex w-full list-none flex-col items-stretch gap-[18px] p-0 pt-[27.11px]">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex w-full flex-col overflow-clip rounded-[20px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[180px] w-full shrink-0">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-[152.98px] w-full flex-1 flex-col items-start px-[24px] pb-[24px] pt-[24px]">
                <p className="m-0 whitespace-nowrap font-dm-serif text-[34px] font-normal leading-[34px] text-[#22b8d6]">
                  {step.n}
                </p>
                <h3 className="m-0 mt-[8px] h-[31.19px] whitespace-nowrap font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33]">
                  {step.title}
                </h3>
                <p className="m-0 mt-[7px] whitespace-nowrap pb-[0.8px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
