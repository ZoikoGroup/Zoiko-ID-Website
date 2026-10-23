import Image from "next/image";
import Link from "next/link";

export default function DesktopFinalCtaSection() {
  return (
    <section id="contact-cta" className="bg-white px-[105px] py-[48px]">
      <div className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-clip rounded-[32px] px-[80px] py-[130px]">
        <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(122.859deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/zoiko-tech-inc/desktop-final-cta-bg.webp"
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
              "radial-gradient(ellipse 42.597px 56.584px at 50% 50%, rgba(34,184,214,0.12) 0%, rgba(34,184,214,0) 70%)",
            backgroundSize: "100% 100%",
          }}
        />

        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[15.3px] px-[80px] text-center">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
            <span>Explore Zoiko iD, or contact the <br className="max-xl:hidden" />
company.</span>
          </h2>
          <p className="max-w-[600px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#c9d3e3]">
            <span>Start with the platform to understand the identity, delegated-authority and <br className="max-xl:hidden" />
evidence capabilities. For corporate questions, use the routed contact <br className="max-xl:hidden" />
options.</span>
          </p>
        </div>

        <div className="relative flex w-full flex-wrap items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
          <Link
            href="/identity-guides"
            className="flex items-center rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Zoiko iD
          </Link>
          <Link
            href="/security-contact"
            className="flex items-center rounded-[6px] border border-solid border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact the Company
          </Link>
        </div>
      </div>
    </section>
  );
}
