import Image from "next/image";

export default function SandboxMandateTicketSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-[11px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
            A mandate, shown as a document
          </h2>

          <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
            Illustration: a supported agent may act under bounded, revocable authority authorized
            <br className="hidden sm:inline" />
            by its sponsor, subject to current policy and expiry.
          </p>
        </div>

        {/* Perforated Mandate Ticket Card */}
        <div className="relative mt-[60px] flex flex-col rounded-[16px] border border-[#E2E8F0] bg-white-solid lg:flex-row">
          {/* Main Ticket Body (Left 50%) */}
          <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-[36px_40px] lg:border-r lg:border-dashed lg:border-[#E2E8F0]">
            {/* Ticket Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-[10px]">
                <Image
                  src="/sandbox/icons/icon_334_2833.svg"
                  alt=""
                  width={26}
                  height={26}
                />
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Mandate card
                </span>
              </div>

              <span className="rounded-full bg-[#FEF3C7] px-[10px] py-[3px] font-manrope text-[11.2px] font-extrabold uppercase leading-[18.48px] tracking-[0.05em] text-[#92400E]">
                Sample data
              </span>
            </div>

            {/* 2-Column Fields Grid */}
            <div className="mt-8 grid grid-cols-1 gap-x-[26px] gap-y-[18px] sm:grid-cols-2">
              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Sponsor
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Synthetic sponsor
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Principal
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Synthetic agent
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Permitted action
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Read (illustrative)
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Resource
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Synthetic test record
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Purpose
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Evaluation only
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-manrope text-[11.5px] font-extrabold uppercase leading-[19px] tracking-[0.06em] text-[#64748B]">
                  Revocation state
                </span>
                <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                  Active (illustrative)
                </span>
              </div>
            </div>

            {/* Bottom Timestamp Note */}
            <div className="mt-8 flex items-center gap-2 pt-2 text-[#64748B]">
              <Image
                src="/sandbox/icons/icon_334_2867.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              <span className="font-manrope text-[13.6px] font-normal leading-[22.44px] text-[#64748B]">
                Timestamps are illustrative. Real values appear only from a verified data model.
              </span>
            </div>

            {/* Perforation Notches on Center Divider (Desktop) */}
            <div
              aria-hidden="true"
              className="absolute -top-[12px] -right-[12px] hidden h-[24px] w-[24px] rounded-full border border-[#E2E8F0] bg-white lg:block z-10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-[12px] -right-[12px] hidden h-[24px] w-[24px] rounded-full border border-[#E2E8F0] bg-white lg:block z-10"
            />
          </div>

          {/* Ticket Stub (Right 50%) */}
          <div className="flex flex-1 flex-col justify-center gap-[14px] bg-[#FAFAFA] p-6 sm:p-8 lg:p-[40px]">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <span className="font-manrope text-[14.9px] font-semibold leading-[24.55px] text-[#64748B]">
                Not before
              </span>
              <span className="font-manrope text-[14.9px] font-bold leading-[24.55px] text-[#071426]">
                Illustrative
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <span className="font-manrope text-[14.9px] font-semibold leading-[24.55px] text-[#64748B]">
                Expiry
              </span>
              <span className="font-manrope text-[14.9px] font-bold leading-[24.55px] text-[#071426]">
                Illustrative
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <span className="font-manrope text-[14.9px] font-semibold leading-[24.55px] text-[#64748B]">
                Evidence link
              </span>
              <span className="font-manrope text-[14.9px] font-bold leading-[24.55px] text-[#071426]">
                Shown when verified
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <span className="font-manrope text-[14.9px] font-semibold leading-[24.55px] text-[#64748B]">
                Revocation timing
              </span>
              <span className="font-manrope text-[14.9px] font-bold leading-[24.55px] text-[#071426]">
                Shown when verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
