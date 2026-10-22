import Image from "next/image";
import Link from "next/link";

export default function DesktopFinalCtaSection() {
  return (
    <section className="w-full bg-white px-[105px] py-[48px]">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(123.24deg, rgb(7, 20, 38) 1.85%, rgb(13, 31, 53) 67.3%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/platform-usage-model/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="1250px"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[0_-20%_-40%_70%] rounded-full blur-[60px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(34,184,214,0.12) 0%, rgba(34,184,214,0) 70%)",
          }}
        />
        <div className="relative flex w-full max-w-[1280px] flex-col items-center gap-[15.3px] px-[80px] text-center">
          <h2 className="font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
            Talk to an identity expert about your usage considerations.
          </h2>
          <p className="max-w-[600px] font-manrope text-[15px] font-normal leading-[24px] text-[#cbd5e1]">
            Describe your use case. An expert will confirm the capability scope and the commercial steps that apply to you.
          </p>
        </div>
        <div className="relative flex w-full flex-wrap items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
          <Link
            href="/security-contact"
            className="rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Talk to an identity expert
          </Link>
          <Link
            href="#concepts"
            className="rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}
