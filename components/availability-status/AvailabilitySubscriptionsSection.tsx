import Image from "next/image";

export default function AvailabilitySubscriptionsSection() {
  return (
    <section className="bg-[#f1f5f9] px-6 py-12 sm:px-10 lg:px-20 lg:py-16 xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-between gap-10 rounded-[22px] bg-[#071426] p-8 shadow-xl sm:p-12 lg:flex-row lg:gap-8">
        {/* Left Side: Information and Channels */}
        <div className="flex w-full flex-col gap-6 lg:max-w-[594px]">
          <div>
            <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[44px]">
              Subscriptions are not available yet
            </h2>
            <p className="mt-3 font-manrope text-base font-normal leading-7 text-[#cbd5e1] sm:text-[16px] sm:leading-[26px]">
              Enrollment is offered only when a channel is approved,
              provider-acknowledged and consent-logged. Until then, no sign-up
              control appears on this page.
            </p>
          </div>

          {/* 3 Channel Cards */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {/* Channel 1: Email */}
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-white-solid/15 bg-white-solid/5 p-4.5 backdrop-blur-sm">
              <div>
                <h3 className="font-manrope text-[14px] font-bold text-white-solid">
                  Email
                </h3>
                <p className="mt-0.5 font-manrope text-[14px] text-[#cbd5e1]">
                  Consent required
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c7] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#92400e]">
                Not available
              </span>
            </div>

            {/* Channel 2: RSS */}
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-white-solid/15 bg-white-solid/5 p-4.5 backdrop-blur-sm">
              <div>
                <h3 className="font-manrope text-[14px] font-bold text-white-solid">
                  RSS
                </h3>
                <p className="mt-0.5 font-manrope text-[14px] text-[#cbd5e1]">
                  Only if verified
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c7] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#92400e]">
                Not available
              </span>
            </div>

            {/* Channel 3: Webhook */}
            <div className="flex flex-col justify-between gap-3 rounded-xl border border-white-solid/15 bg-white-solid/5 p-4.5 backdrop-blur-sm">
              <div>
                <h3 className="font-manrope text-[14px] font-bold text-white-solid">
                  Webhook
                </h3>
                <p className="mt-0.5 font-manrope text-[14px] text-[#cbd5e1]">
                  Only if verified
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-[#fef3c7] px-3 py-1 font-manrope text-[11px] font-extrabold uppercase tracking-wider text-[#92400e]">
                Not available
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Notification Icons Mock Graphic */}
        <div className="relative aspect-[376/320] w-full max-w-[376px] overflow-hidden rounded-[16px] shadow-lg">
          <Image
            src="/availability-status/subscriptions-notifications.webp"
            alt="Notification icons on screen"
            fill
            sizes="(max-width: 1024px) 100vw, 376px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
