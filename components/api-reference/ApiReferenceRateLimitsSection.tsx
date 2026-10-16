import Image from "next/image";

export default function ApiReferenceRateLimitsSection() {
  return (
    <section className="bg-white-solid px-6 py-16 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-10">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
          Rate limits and pagination
        </h2>

        {/* 2 Columns Container */}
        <div className="grid w-full grid-cols-1 items-center gap-10 pt-5 lg:grid-cols-2 lg:gap-[60px]">
          {/* Left Column: Rate limits Card */}
          <div className="flex flex-col gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-8 shadow-xs">
            <h3 className="font-dm-serif text-[22.4px] font-normal leading-[30.71px] text-[#071426]">
              Rate limits
            </h3>

            <p className="font-manrope text-base font-normal leading-7 text-[#64748B]">
              All requests are rate-limited per API key. Tier determines
              <br className="hidden sm:inline" />
              {" "}your quota.
            </p>

            <div className="flex flex-col gap-3">
              {/* Standard tier */}
              <div className="flex flex-col gap-0.5 rounded-[8px] bg-[#F1F5F9] p-4 pt-5">
                <span className="font-manrope text-[14.4px] font-semibold leading-[25.2px] text-[#475569]">
                  Standard tier
                </span>
                <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                  1,000 requests per minute
                </span>
              </div>

              {/* Pro tier */}
              <div className="flex flex-col gap-0.5 rounded-[8px] bg-[#F1F5F9] p-4">
                <span className="font-manrope text-[14.4px] font-semibold leading-[25.2px] text-[#475569]">
                  Pro tier
                </span>
                <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                  10,000 requests per minute
                </span>
              </div>

              {/* Enterprise tier */}
              <div className="flex flex-col gap-0.5 rounded-[8px] bg-[#F1F5F9] p-4">
                <span className="font-manrope text-[14.4px] font-semibold leading-[25.2px] text-[#475569]">
                  Enterprise tier
                </span>
                <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                  Custom limits. Contact sales.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Graphic + Pagination Card */}
          <div className="flex flex-col gap-4">
            {/* Top Illustration Box */}
            <div className="relative h-[194px] w-full overflow-hidden rounded-[24px]">
              <Image
                src="/api-reference/rendered-374_536.png"
                alt="Rate limits graphic"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>

            {/* Pagination Card */}
            <div className="flex flex-col gap-4 rounded-[12px] border border-[#E2E8F0] bg-white-solid p-8 shadow-xs">
              <h3 className="font-dm-serif text-[22.4px] font-normal leading-[30.71px] text-[#071426]">
                Pagination
              </h3>

              <p className="font-manrope text-base font-normal leading-7 text-[#64748B]">
                List endpoints return paginated results using cursor-
                <br className="hidden sm:inline" />
                {" "}based pagination.
              </p>

              <div className="flex flex-col gap-3">
                {/* limit */}
                <div className="flex flex-col gap-0.5 rounded-[8px] bg-[#F1F5F9] p-4 pt-[19px]">
                  <span className="font-mono text-[14.4px] font-bold leading-[25.2px] text-[#475569]">
                    limit
                  </span>
                  <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                    Max results per page (default 50, max 1000)
                  </span>
                </div>

                {/* cursor */}
                <div className="flex flex-col gap-0.5 rounded-[8px] bg-[#F1F5F9] p-4 pt-[15px]">
                  <span className="font-mono text-[14.4px] font-bold leading-[25.2px] text-[#475569]">
                    cursor
                  </span>
                  <span className="font-manrope text-[13.6px] font-normal leading-[23.8px] text-[#64748B]">
                    Opaque string for next page. Included in response.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
