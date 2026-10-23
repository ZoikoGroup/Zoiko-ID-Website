import Image from "next/image";
import Link from "next/link";

export default function MobileFinalCtaSection() {
  return (
    <section
      id="next-step"
      className="w-full px-[22px] pb-[60px] pt-[59px] lg:hidden"
      style={{ backgroundImage: "linear-gradient(118.357deg, rgb(10, 26, 51) 0%, rgb(18, 48, 94) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[70px]">
        <div className="flex flex-col gap-[12px]">
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#06b6d4]">
            Next step
          </p>
          <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-white">
            Start your enterprise enquiry.
          </h2>
          <p className="pt-[2px] font-manrope text-[15px] font-normal leading-[24px] text-[#b6c5d9]">
            Choose what you want to discuss, share your evaluation goals, and we will route your enquiry for review. No contractual commitment or offer is created by submitting an enquiry.
          </p>
          <div className="flex flex-col items-start justify-center gap-[12px] pt-[14px]">
            <Link
              href="#enquiry-form"
              className="flex min-h-[48px] items-center rounded-full border border-[#2563eb] bg-[#1d4ed8] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start sales enquiry
            </Link>
            <Link
              href="/architecture-guides"
              className="flex min-h-[48px] items-center rounded-full border border-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore the platform
            </Link>
          </div>
        </div>
        <div className="relative h-[340px] w-full overflow-hidden rounded-[22px]">
          <Image
            src="/talk-to-sales/mobile-final-cta-bg.webp"
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
