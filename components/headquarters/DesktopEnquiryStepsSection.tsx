import type { ReactNode } from "react";
import Image from "next/image";

const steps: { n: string; title: string; image: string; body: ReactNode }[] = [
  {
    n: "01",
    title: "Choose a route",
    image: "/headquarters/desktop-step-01.webp",
    body: (
      <>
        Pick the team that owns your <br className="max-xl:hidden" />
        question.
      </>
    ),
  },
  {
    n: "02",
    title: "Describe your need",
    image: "/headquarters/desktop-step-02.webp",
    body: (
      <>
        Use the destination’s own form or <br className="max-xl:hidden" />
        address.
      </>
    ),
  },
  {
    n: "03",
    title: "Review",
    image: "/headquarters/desktop-step-03.webp",
    body: (
      <>
        The owning team reviews your <br className="max-xl:hidden" />
        message.
      </>
    ),
  },
  {
    n: "04",
    title: "Reply",
    image: "/headquarters/desktop-step-04.webp",
    body: (
      <>
        Replies follow each destination’s <br className="max-xl:hidden" />
        process.
      </>
    ),
  },
];

export default function DesktopEnquiryStepsSection() {
  return (
    <section className="flex flex-col gap-[60px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] pb-[105px] pt-[112.31px]">
      <div className="flex flex-col gap-[17px]">
        <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
          How an enquiry moves
        </h2>
        <p className="max-w-[680px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] xl:whitespace-nowrap">
          Each destination sets its own process. These are the general steps; timings are not <br className="max-xl:hidden" />
          promised here.
        </p>
      </div>
      <ol className="flex items-stretch justify-center gap-[18px]">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex min-w-px flex-1 flex-col overflow-hidden rounded-[20px] border border-solid border-[#d9e1ec] bg-white"
          >
            <div className="relative h-[180px] w-full shrink-0">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex min-h-[176.78px] flex-1 flex-col px-[24px] pt-[24px]">
              <p className="font-dm-serif text-[34px] font-normal leading-[34px] text-[#22b8d6]">{s.n}</p>
              <h3 className="mt-[7px] font-manrope text-[18px] font-bold leading-[25.2px] text-[#0b1b33] xl:whitespace-nowrap">
                {s.title}
              </h3>
              <p className="mt-[13.88px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
