import Image from "next/image";

export default function SandboxEvidenceSection() {
  return (
    <section className="bg-[#F1F5F9] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-[60px]">
          {/* Left Column: Heading + Timeline */}
          <div className="flex flex-col items-start">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
              How a decision becomes
              <br />
              reviewable
            </h2>

            <p className="mt-[11px] font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
              A sample trail showing how identity, mandate, policy version, and a trust
              <br className="hidden sm:inline" />
              signal link into one record.
            </p>

            {/* Pill Badge */}
            <div className="mt-[24px] inline-flex items-center gap-[8px] rounded-[6px] bg-[#FEF3C7] px-[12px] py-[6px]">
              <Image
                src="/sandbox/icons/icon_334_2887.svg"
                alt=""
                width={12}
                height={12}
              />
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[0.06em] text-[#78350F]">
                Sample data · synthetic
              </span>
            </div>

            {/* Vertical Timeline */}
            <div className="relative mt-[24px] flex w-full flex-col">
              {/* Vertical connecting line */}
              <div
                aria-hidden="true"
                className="absolute top-[20px] bottom-[20px] left-[19px] w-[2px] bg-[#CBD5E1]"
              />

              {/* Step 1 */}
              <div className="relative flex flex-col pb-[22px] pl-[60px]">
                <div className="absolute top-0 left-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#2563EB] bg-white-solid shadow-sm">
                  <Image
                    src="/sandbox/icons/icon_334_2904.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Actor authenticated
                </h4>
                <div className="mt-1 flex flex-wrap items-center gap-1.5 pt-0.5 font-mono text-[13.1px] leading-[21.65px] text-[#071426]">
                  <span>actor_type: agent</span>
                  <span className="text-[#64748B]">·</span>
                  <span>synthetic_flag: true</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col pb-[22px] pl-[60px]">
                <div className="absolute top-0 left-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#2563EB] bg-white-solid shadow-sm">
                  <Image
                    src="/sandbox/icons/icon_334_2915.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Mandate evaluated
                </h4>
                <div className="mt-1 flex flex-wrap items-center gap-1.5 pt-0.5 font-mono text-[13.1px] leading-[21.65px] text-[#071426]">
                  <span>mandate_id: illustrative</span>
                  <span className="text-[#64748B]">·</span>
                  <span>scope: read</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col pb-[22px] pl-[60px]">
                <div className="absolute top-0 left-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#2563EB] bg-white-solid shadow-sm">
                  <Image
                    src="/sandbox/icons/icon_334_2925.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Policy decision recorded
                </h4>
                <div className="mt-1 flex items-center pt-0.5 font-mono text-[13.1px] leading-[21.65px] text-[#071426]">
                  <span>policy_version: illustrative</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col pl-[60px]">
                <div className="absolute top-0 left-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-[#2563EB] bg-white-solid shadow-sm">
                  <Image
                    src="/sandbox/icons/icon_334_2935.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <h4 className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Trust signal changed
                </h4>
                <p className="mt-1 font-manrope text-[14.4px] font-normal leading-[23.76px] text-[#64748B]">
                  Event link is a placeholder. No customer identifiers are included.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Analytics Charts Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-[14px] sm:h-[540px] lg:h-[633px]">
            <Image
              src="/sandbox/analytics-laptop.png"
              alt="Analytics charts on a laptop"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
