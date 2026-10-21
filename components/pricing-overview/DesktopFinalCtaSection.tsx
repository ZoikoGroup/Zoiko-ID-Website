import Image from "next/image";
import Link from "next/link";

export default function DesktopFinalCtaSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-10 py-[48px] xl:px-16 min-[1440px]:px-[105px]">
      <div className="relative flex w-full max-w-[1250px] flex-col items-center overflow-clip rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(124.19deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/pricing-overview/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="1250px"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 42.6px 53.8px at 50% 50%, rgba(34,184,214,0.12) 0%, rgba(34,184,214,0) 70%)",
          }}
        />
        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[15.3px] px-[80px]">
          <h2 className="w-full text-center font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
            Discuss an identity infrastructure evaluation.
          </h2>
          <p className="max-w-[600px] text-center font-manrope text-[16px] font-normal leading-[26.4px] text-[#cbd5e1]">
            Describe your use case, and our team will confirm what applies to
            your scope. Submitting an inquiry creates no contractual commitment
            or offer.
          </p>
        </div>
        <div className="relative flex w-full flex-wrap items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
          <Link
            href="/security-contact"
            className="inline-flex items-center rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="/architecture-guides"
            className="inline-flex items-center rounded-[6px] border border-solid border-white px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
