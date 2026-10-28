/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const pill =
  "inline-flex self-start rounded-[999px] bg-[#fef3c7] px-[12px] pb-[5.89px] pt-[7.6px] font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#92400e] whitespace-nowrap";

function IconBox({ src }: { src: string }) {
  return (
    <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#e4f3f8]">
      <Image src={src} width={24} height={24} alt="" />
    </div>
  );
}

const h = "font-manrope text-[16px] font-bold leading-[27.2px] text-[#0b1b33] xl:whitespace-nowrap";
const d = "font-manrope text-[14px] font-normal leading-[23.8px] text-[#5b6b82] xl:whitespace-nowrap";

export default function DesktopRecordReviewSection() {
  return (
    <section className="flex flex-col gap-[60px] border-b border-solid border-[#d9e1ec] bg-white px-[160px] pb-[104.99px] pt-[112.32px]">
      <h2 className="font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33]">
        Corporate records are reviewed before changes go live
      </h2>
      <div className="flex flex-col gap-[17px]">
        <div className="grid h-[340px] grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] gap-[18px]">
          <div className="relative rounded-[20px]">
            <Image
              src="/headquarters/desktop-gate-dashboard.webp"
              alt="Corporate records dashboard"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src="/headquarters/desktop-gate-analytics.webp"
              alt="Corporate records analytics"
              className="absolute left-[-4.7%] top-0 h-full w-[188.31%] max-w-none"
            />
          </div>
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src="/headquarters/desktop-gate-data.webp"
              alt="Corporate records data"
              className="absolute left-[-82.82%] top-[0.04%] h-full w-[188.31%] max-w-none"
            />
          </div>
        </div>
        <div className="flex items-stretch justify-center gap-[18px]">
          <div className="flex min-w-px flex-1 items-start gap-[14px] rounded-[18px] bg-[#f4f6fa] px-[24px] pb-[56.39px] pt-[24px]">
            <IconBox src="/headquarters/desktop-icon-doc.svg" />
            <div className="pb-[0.7px] pr-[26.77px]">
              <h3 className={`${h} -mb-[1.42px]`}>Source record</h3>
              <p className={d}>
                Headquarters details come from the <br className="max-xl:hidden" />
                approved corporate record.
              </p>
            </div>
          </div>
          <div className="flex min-w-px flex-1 items-start gap-[14px] rounded-[18px] bg-[#f4f6fa] p-[24px]">
            <IconBox src="/headquarters/desktop-icon-clock.svg" />
            <div className="flex flex-col items-start pr-[33.75px]">
              <h3 className={`${h} -mb-[1.4px]`}>Verification date</h3>
              <p className={`${d} -mb-[1.4px]`}>
                Shown only when a verified date is <br className="max-xl:hidden" />
                recorded.
              </p>
              <span className={pill}>Pending record</span>
            </div>
          </div>
          <div className="flex min-w-px flex-1 items-start gap-[14px] rounded-[18px] bg-[#f4f6fa] p-[24px]">
            <IconBox src="/headquarters/desktop-icon-alert.svg" />
            <div className="flex flex-col items-start pr-[8.09px]">
              <h3 className={`${h} -mb-[1.4px]`}>Suspected error</h3>
              <p className={`${d} -mb-[1.4px]`}>
                Report it through Contact, and it will be <br className="max-xl:hidden" />
                reviewed.
              </p>
              <span className={pill}>Route pending</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
