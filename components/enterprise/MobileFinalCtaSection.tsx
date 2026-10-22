import Image from "next/image";
import Link from "next/link";

export default function MobileFinalCtaSection() {
  return (
    <section
      className="lg:hidden px-[22px] py-[105px]"
      style={{ backgroundImage: "linear-gradient(119.416012683899deg, rgb(7, 20, 38) 0%, rgb(15, 33, 64) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[60px]">
        <div className="flex flex-col gap-[13.4px]">
          <div className="relative h-[19.19px] w-full">
            <span aria-hidden="true" className="absolute left-0 top-1/2 h-[2px] w-[28px] -translate-y-1/2 bg-[#22b8d6]" />
            <p className="absolute left-[38px] top-1/2 -translate-y-1/2 whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#22b8d6]">
              Next step
            </p>
          </div>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-white [word-break:break-word]">
            Talk to an identity expert about your enterprise evaluation.
          </h2>
          <p className="max-w-[560px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#cbd5e1]">
            Share your architecture and what you need to decide. An expert will confirm what is supported for your environment. Submitting a request does not book a meeting or create an offer.
          </p>
          <div className="flex flex-col items-start justify-center gap-[14px] pt-[12.59px]">
            <Link
              href="/security-contact"
              className="flex min-h-[46px] items-center whitespace-nowrap rounded-[8px] border border-[#2563eb] bg-[#22b8d6] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-[#071426] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="/architecture-guides"
              className="flex min-h-[46px] items-center whitespace-nowrap rounded-[8px] border border-white/60 px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore platform
            </Link>
          </div>
        </div>
        <div className="relative h-[380px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/enterprise/mobile-final-cta-bg.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
