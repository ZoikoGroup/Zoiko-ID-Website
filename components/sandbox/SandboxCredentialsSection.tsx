import Image from "next/image";

export default function SandboxCredentialsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[56px]">
          {/* Left Column: Image - Exactly centered in section */}
          <div className="relative my-auto self-center h-[360px] w-full max-w-[572px] overflow-hidden rounded-[14px] sm:h-[460px] lg:h-[511px]">
            <Image
              src="/sandbox/security-lock-illustration.png"
              alt="Abstract security lock illustration"
              fill
              sizes="(min-width: 1024px) 580px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Copy & Cards */}
          <div className="flex flex-col items-start gap-[11px]">
            <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
              Secrets are never shown
              <br />
              here
            </h2>

            <p className="font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
              Sandbox credentials are issued only by the approved, authenticated service,
              <br className="hidden sm:inline" />
              scoped to your organization, and expire.
            </p>

            <div className="mt-[11px] flex w-full flex-col gap-[12px]">
              {/* Card 1 */}
              <div className="flex min-h-[110px] items-center gap-[14px] rounded-[12px] bg-[#F1F5F9] p-[16px_18px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Image
                    src="/sandbox/icons/icon_334_2458.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:gap-[14px]">
                  <h4 className="w-[125px] shrink-0 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                    Issued by the
                    <br />
                    service
                  </h4>
                  <p className="flex-1 font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                    Only the authenticated sandbox service issues
                    <br />
                    credentials.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex min-h-[110px] items-center gap-[14px] rounded-[12px] bg-[#F1F5F9] p-[16px_18px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <Image
                    src="/sandbox/icons/icon_334_2468.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:gap-[14px]">
                  <h4 className="w-[125px] shrink-0 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                    Masked, then
                    <br />
                    gone
                  </h4>
                  <p className="flex-1 font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                    Secret values are not shown again after you leave
                    <br />
                    the page.
                  </p>
                </div>
              </div>

              {/* Card 3 (Highlight alert box with Scooter 10% tint) */}
              <div className="flex min-h-[110px] items-center rounded-[12px] bg-[rgba(34,184,214,0.1)] p-[16px_18px_16px_32px]">
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:gap-[14px]">
                  <h4 className="w-[138px] shrink-0 font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                    Never paste into
                    <br />
                    support
                  </h4>
                  <p className="flex-1 font-manrope text-[14.7px] font-normal leading-[24.29px] text-[#64748B]">
                    Support will never ask for a secret value. Describe
                    <br />
                    the symptom instead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
