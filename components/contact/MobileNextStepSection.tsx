import Image from "next/image";
import Link from "next/link";

export default function MobileNextStepSection() {
  return (
    <section
      className="w-full px-[22px] py-[60px] lg:hidden"
      style={{ backgroundImage: "linear-gradient(120.02deg, rgb(11, 27, 51) 0%, rgb(18, 48, 94) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="flex flex-col gap-[14.9px]">
          <div className="flex h-[19.8px] items-center gap-3">
            <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
            <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
              Next step
            </span>
          </div>
          <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-white [word-break:break-word]">
            Start with the route that
            <br />
            matches your question.
          </h2>
          <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#b6c3d6] [word-break:break-word]">
            Specialist routes come first, so each enquiry
            <br />
            reaches the team that can act on it. No
            <br />
            response time is promised.
          </p>
          <div className="flex flex-col items-start gap-[14px] pt-[17.1px]">
            <Link
              href="#routes"
              className="flex min-h-[48px] items-center whitespace-nowrap rounded-[8px] border border-solid border-transparent bg-white px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-[#0b1b33] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1b33]"
            >
              Choose an enquiry type
            </Link>
            <Link
              href="/security-contact"
              className="flex min-h-[48px] items-center whitespace-nowrap rounded-[8px] border border-solid border-white px-[26px] py-[15px] font-manrope text-[15px] font-bold leading-[24.75px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1b33]"
            >
              Explore Help &amp; Support
            </Link>
          </div>
        </div>
        <div className="relative h-[280px] min-h-[280px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/contact/mobile-final-cta-bg.webp"
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
