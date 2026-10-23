import Image from "next/image";
import Link from "next/link";

export default function MobileHeroSection() {
  return (
    <section className="lg:hidden w-full">
      <div className="mx-auto flex min-h-[620px] w-full flex-col items-start">
        <div className="relative flex w-full flex-col items-start gap-[10.9px] overflow-clip bg-[#0a1a33] px-[22px] pb-[50px] pt-[49px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-start gap-[10.9px]">
            <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#06b6d4]">
              Pricing &amp; Enterprise · Talk to Sales
            </p>
            <div className="w-full pb-[0.69px]">
              <h1 className="font-dm-serif text-[38px] font-normal leading-[41.8px] text-white">
                Talk to a Zoiko iD identity expert
              </h1>
            </div>
            <div className="w-full max-w-[620px] pb-[15.1px] pt-[9.1px]">
              <p className="font-manrope text-[17px] font-normal leading-[27.2px] text-[#b6c5d9]">
                Tell us what you are evaluating across identity, delegated authority, enterprise integration, and evidence. We will route your enquiry for review using the information you choose to share.
              </p>
            </div>
            <div className="w-full border-l-[3px] border-solid border-[#06b6d4] pl-[18px]">
              <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#e2e8f0]">
                Talk to Sales is the route for a qualified enterprise enquiry about Zoiko iD. It sends your request to the authorized sales owner for review. It does not confirm a meeting, a quote, a price or a response time, and it is not the place to report a security issue or request account support.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[12px] pt-[23.1px]">
              <Link
                href="#enquiry-form"
                className="flex min-h-[48px] items-center rounded-[999px] border border-solid border-[#2563eb] bg-[#1d4ed8] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start sales enquiry
              </Link>
              <Link
                href="#enquiry-types"
                className="flex min-h-[48px] items-center rounded-[999px] border border-solid border-white px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore the platform
              </Link>
            </div>
            <div className="w-full pt-[13.1px]">
              <p className="font-manrope text-[14px] font-normal leading-[22.4px]">
                <span className="text-[#94a3b8]">View developer docs → </span>
                <span className="text-[#64748b]">(route pending)</span>
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-120px] right-[-120px] size-[360px] rounded-[180px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 70%)",
            }}
          />
        </div>
        <div className="relative h-[360px] min-h-[360px] w-full">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/talk-to-sales/mobile-hero-visual.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-[20.5px] left-[20px] right-[20px] mx-auto flex max-w-[520px] flex-col items-start gap-[5.99px] rounded-[18px] bg-white px-[26px] py-[22px] shadow-[0px_20px_20px_rgba(10,26,51,0.2)]">
            <p className="font-manrope text-[15px] font-bold leading-[24px] text-[#2563eb]">
              Review, not a booked meeting.
            </p>
            <p className="w-full pb-[0.69px] font-manrope text-[13px] font-normal leading-[20.8px] text-[#64748b]">
              Submitting an enquiry does not confirm a meeting, a quote or a response time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
