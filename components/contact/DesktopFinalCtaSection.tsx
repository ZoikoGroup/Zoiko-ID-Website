import Image from "next/image";
import Link from "next/link";

export default function DesktopFinalCtaSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-[105px] py-[48px]">
      <div className="relative flex w-full flex-col items-center overflow-clip rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(124.19deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/contact/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="1250px"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 42.6px 53.8px at 50% 50%, rgba(34,184,214,0.12) 0%, rgba(34,184,214,0) 70%)",
          }}
        />
        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[15.3px] px-[80px]">
          <h2 className="w-full text-center font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
            Start with the route that <br className="max-xl:hidden" />
            matches your question.
          </h2>
          <p className="w-full max-w-[600px] text-center font-manrope text-[16px] font-normal leading-[26.4px] text-[#b6c3d6]">
            Specialist routes come first, so each enquiry reaches the team that{" "}
            <br className="max-xl:hidden" />
            can act on it. No response time is promised.
          </p>
        </div>
        <div className="relative flex w-full flex-wrap content-center items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
          <Link
            href="#form"
            className="flex items-center whitespace-nowrap rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Choose an enquiry type
          </Link>
          <Link
            href="/security-contact"
            className="flex items-center whitespace-nowrap rounded-[6px] border border-solid border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Explore Help &amp; Support
          </Link>
        </div>
      </div>
    </section>
  );
}
