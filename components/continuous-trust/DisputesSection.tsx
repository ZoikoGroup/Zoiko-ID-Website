import Image from "next/image";
import type { ReactNode } from "react";

/* ===== Desktop layout (>= lg) ===== */


const dPill =
  "font-manrope inline-flex items-center justify-center rounded-[999px] bg-[#fef3c7] px-[12px] py-[6px] text-[12px] leading-[20.4px] font-extrabold tracking-[0.96px] whitespace-nowrap text-[#92400e] uppercase";



function DesktopDisputes() {
  return (
    <section className="w-full bg-[#f4f6fa] px-[160px] pt-[112.32px] pb-[104.99px]">
      <div className="flex w-full flex-col gap-[60px]">
        <div className="flex w-full flex-col gap-[15px]">
          <h2 className="font-dm-serif w-full text-[52px] leading-[58.24px] font-normal text-[#071121] [word-break:break-word]">
            When a case does not fit the rules
          </h2>
          <p className="font-manrope w-[720px] max-w-[720px] text-[18px] leading-[30.6px] font-normal text-[#5b6b82] [word-break:break-word] xl:whitespace-nowrap">
            Some situations need a person. Disputed authority, unavailable signals and mistaken <br className="max-xl:hidden" />
            revocations each have a defined path, and each path keeps the decision open to review.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 items-stretch gap-[24px]">
          {/* Card 1 */}
          <div className="relative flex min-h-[275px] min-w-px items-stretch overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white">
            <div className="relative min-h-[200px] w-[200px] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/continuous-trust/desktop-disputes-portrait.webp"
                className="absolute top-0 left-[-88.46%] h-full w-[204.88%] max-w-none"
              />
            </div>
            <div className="flex w-[346px] shrink-0 flex-col items-start p-[24px]">
              <div className="flex flex-col items-start gap-[11px]">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src="/continuous-trust/desktop-icon-alert.svg" width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[18px] leading-[25.2px] font-bold whitespace-nowrap text-[#071121]">Disputed authority</h3>
                <p className="font-manrope w-full text-[14px] leading-[23.8px] font-normal text-[#5b6b82] [word-break:break-word]">
                  The decision is paused for an authorized <br className="max-xl:hidden" />
                  reviewer, and the affected party is told that a <br className="max-xl:hidden" />
                  review is open.
                </p>
              </div>
            </div>
            <div className="absolute right-[36px] bottom-[24.8px] left-[212px] flex flex-col items-start justify-end pt-[1.2px]">
              <span className={dPill}>Process pending owner</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex min-w-px items-stretch overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white">
            <div className="relative min-h-[200px] w-[200px] shrink-0 self-stretch overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/continuous-trust/desktop-disputes-team.webp"
                className="absolute top-0 left-[-80.21%] h-full w-[205.01%] max-w-none"
              />
            </div>
            <div className="flex w-[346px] shrink-0 flex-col items-start justify-between p-[24px]">
              <div className="flex w-full flex-col items-start gap-[11px]">
                <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
                  <Image src="/continuous-trust/desktop-icon-refresh.svg" width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[18px] leading-[25.2px] font-bold whitespace-nowrap text-[#071121]">Mistaken revocation</h3>
                <p className="font-manrope w-full text-[14px] leading-[23.8px] font-normal text-[#5b6b82] [word-break:break-word]">
                  A reversal is recorded as its own decision, with <br className="max-xl:hidden" />
                  its reason and the person who approved it.
                </p>
              </div>
              <span className={dPill}>Process pending owner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Mobile layout (< lg) ===== */


const mCARDS: {
  image: string;
  alt: string;
  icon: string;
  title: string;
  gap: string;
  body: ReactNode;
}[] = [
  {
    image: "/continuous-trust/mobile-disputes-portrait.webp",
    alt: "Reviewer examining a disputed authority case",
    icon: "/continuous-trust/mobile-icon-alert.svg",
    title: "Disputed authority",
    gap: "gap-[10.8px]",
    body: (
      <>
        The decision is paused for an authorized
        <br />
        reviewer, and the affected party is told that a
        <br />
        review is open.
      </>
    ),
  },
  {
    image: "/continuous-trust/mobile-disputes-team.webp",
    alt: "Team reviewing a mistaken revocation",
    icon: "/continuous-trust/mobile-icon-refresh.svg",
    title: "Mistaken revocation",
    gap: "gap-[10.9px]",
    body: (
      <>
        A reversal is recorded as its own decision, with
        <br />
        its reason and the person who approved it.
      </>
    ),
  },
];



function MobileExceptions() {
  return (
    <section className="lg:hidden w-full border-b border-solid border-[#d9e1ec] bg-[#f4f6fa] px-[22px] pb-[60px] pt-[67.31px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14.8px]">
        <div className="flex items-center gap-[12px]">
          <div className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] whitespace-nowrap text-[#22b8d6]">
            12 · Exceptions and recovery
          </p>
        </div>
        <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#071121]">
          When a case does not fit
          <br />
          the rules
        </h2>
        <p className="w-full max-w-[720px] pt-[1.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82] whitespace-nowrap">
          Some situations need a person. Disputed
          <br />
          authority, unavailable signals and mistaken
          <br />
          revocations each have a defined path, and
          <br />
          each path keeps the decision open to
          <br />
          review.
        </p>
        <div className="flex w-full flex-col items-start gap-[24px] pt-[17.2px]">
          {mCARDS.map((c) => (
            <article
              key={c.title}
              className="flex w-full flex-col items-start overflow-clip rounded-[22px] border border-solid border-[#d9e1ec] bg-white"
            >
              <div className="relative h-[180px] w-full shrink-0">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className={`flex w-full flex-col items-start ${c.gap} p-[24px]`}>
                <div className="flex h-[43.2px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8] pb-[1.2px]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="h-[33.19px] w-full font-manrope text-[18px] font-bold leading-[25.2px] whitespace-nowrap text-[#071121]">
                  <span className="relative top-[-1px] block">{c.title}</span>
                </h3>
                <p className="w-full pb-[0.69px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] whitespace-nowrap">
                  {c.body}
                </p>
                <div className="flex w-full flex-col items-start justify-end pt-[1.2px]">
                  <span
                    aria-disabled="true"
                    className="flex cursor-not-allowed flex-col items-start rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[15.5px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] whitespace-nowrap text-[#92400e]"
                  >
                    Process pending owner
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DisputesSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopDisputes />
      </div>
      <div className="overflow-x-clip lg:hidden">
        <MobileExceptions />
      </div>
    </>
  );
}
