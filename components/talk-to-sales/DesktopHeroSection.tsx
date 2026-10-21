import Image from "next/image";
import Link from "next/link";

export default function DesktopHeroSection() {
  return (
    <section
      className="relative -mt-[116px] flex w-full flex-col items-center justify-center gap-[64px] overflow-hidden px-[160px] pb-[80px] pt-[196px]"
      style={{
        backgroundImage:
          "linear-gradient(92.23deg, rgb(7, 20, 38) 1.0218%, rgb(13, 31, 53) 49.98%, rgb(10, 26, 46) 100.98%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-4.55%_-22.47%_-44.51%_-9.97%] rounded-[523.6px] blur-[50px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 1402px 658px at 50% 50%, rgba(34,184,214,0.2) 0%, rgba(34,184,214,0) 70%)",
        }}
      />
      <div className="relative flex w-full max-w-[1280px] items-center justify-between">
        <div className="flex w-[547px] min-w-[512px] shrink-0 flex-col items-start gap-[19.4px]">
          <h1 className="w-[547px] font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
            Talk to a Zoiko iD identity expert
          </h1>
          <p className="max-w-[466px] font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#b6c5d9]">
            Tell us what you are evaluating across identity, delegated authority, enterprise integration, and evidence. We will route your enquiry for review using the information you choose to share.
          </p>
          <div className="flex w-full flex-wrap items-start gap-[20px] pt-[21.29px]">
            <Link
              href="#enquiry-form"
              className="flex items-center gap-[10px] rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Start sales enquiry
            </Link>
            <Link
              href="/pricing-overview"
              className="flex items-center gap-[10px] rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore the platform
            </Link>
          </div>
        </div>
        <div className="relative h-[434px] w-[517px] shrink-0 overflow-hidden rounded-[24px] shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)]">
          <Image
            src="/talk-to-sales/desktop-hero-visual.webp"
            alt=""
            fill
            priority
            sizes="517px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
