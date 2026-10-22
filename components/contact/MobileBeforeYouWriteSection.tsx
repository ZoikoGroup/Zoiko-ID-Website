import Image from "next/image";
import type { ReactNode } from "react";

const items: ReactNode[] = [
  <>
    Keep messages to the facts needed to route
    <br />
    your request.
  </>,
  "Attachments are not accepted by default.",
];

export default function MobileBeforeYouWriteSection() {
  return (
    <section
      id="before-you-write"
      className="w-full border-b border-solid border-[#d9e1ec] bg-[#fafbfd] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="relative h-[280px] min-h-[280px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-form-developer.webp"
            alt="Developer working at a laptop"
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-[15px]">
          <div className="flex h-[19.8px] w-full items-center font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px]">
            <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
            <span className="ml-[12px] text-[#0b1b33]">04</span>
            <span className="ml-[11px] text-[#0891b2]">Before you write anything</span>
          </div>
          <h2 className="pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
            Do not include secrets
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            Passwords, tokens, API keys, private keys,
            <br />
            government identification numbers and
            <br />
            confidential security configurations must
            <br />
            never be included in a message. We will not
            <br />
            ask for them.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[13px]">
            {items.map((t, i) => (
              <li key={i} className="flex items-start gap-[12px]">
                <Image
                  src="/contact/mobile-icon-x.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="mt-[2px] shrink-0"
                />
                <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">
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
