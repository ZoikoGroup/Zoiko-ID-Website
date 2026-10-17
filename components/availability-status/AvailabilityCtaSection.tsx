import Link from "next/link";
import Image from "next/image";

export default function AvailabilityCtaSection() {
  return (
    <section className="bg-white-solid px-4 py-12 sm:px-8 lg:px-20 lg:py-12 xl:px-24">
      <div className="relative mx-auto flex w-full max-w-[1250px] min-h-[435px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#071426] via-[#0d1f35] to-[#071426] p-8 sm:p-14 lg:p-20 shadow-2xl">
        {/* Clean Background Image with 20% opacity */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <Image
            src="/availability-status/cta-banner-bg.webp"
            alt="Office operations background"
            fill
            className="object-cover opacity-20"
            priority={false}
          />
        </div>

        {/* Ambient Cyan Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.12)_0%,rgba(34,184,214,0)_70%)] blur-[100px]"
        />

        {/* Centered Content Container */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1090px] flex-col items-center text-center">
          <h2 className="max-w-[998px] font-dm-serif text-3xl font-normal leading-tight text-white-solid sm:text-4xl lg:text-[52px] lg:leading-[71.3px]">
            Need the status of your service right now?
          </h2>

          <p className="mt-5 max-w-[520px] font-manrope text-[15px] font-normal leading-7 text-[#cbd5e1] sm:text-[17.6px] sm:leading-[30px]">
            If the status above is unknown, use the Help and Support route
            for account-specific questions, or the Security contact route for
            security concerns.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#help-and-support"
              className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-[6px] bg-[#2563eb] px-6.5 py-3.5 font-manrope text-[15px] font-bold text-white-solid shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:bg-blue-600 hover:shadow-[0px_10px_24px_0px_rgba(37,99,235,0.40)] active:scale-[0.98]"
            >
              Open Help and Support
            </Link>

            <Link
              href="/overview"
              className="inline-flex min-h-[54px] min-w-[244px] items-center justify-center rounded-[6px] border border-white-solid bg-transparent px-6.5 py-3.5 font-manrope text-[15px] font-bold text-white-solid transition-all duration-200 hover:bg-white-solid/10 active:scale-[0.98]"
            >
              Developer documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

