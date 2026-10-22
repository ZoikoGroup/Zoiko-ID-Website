import Image from "next/image";
import Link from "next/link";

export default function DesktopHeroSection() {
  return (
    <section
      className="relative -mt-[116px] hidden w-full flex-col items-center justify-center gap-[64px] overflow-clip px-[160px] pb-[80px] pt-[196px] lg:flex"
      style={{
        backgroundImage:
          "linear-gradient(92.13215621272589deg, rgb(7, 20, 38) 1.0218%, rgb(13, 31, 53) 49.98%, rgb(10, 26, 46) 100.98%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-4.55%_-22.47%_-44.51%_-9.97%] rounded-[523.6px] blur-[50px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1907 1009.3' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(140.19 0 0 68.839 953.5 504.63)'><stop stop-color='rgba(34,184,214,0.2)' offset='0'/><stop stop-color='rgba(34,184,214,0)' offset='0.7'/></radialGradient></defs></svg>\")",
        }}
      />
      <div className="relative flex w-full items-center justify-between">
        <div className="flex w-[634px] min-w-[512px] shrink-0 flex-col items-start gap-[19.4px]">
          <h1 className="font-dm-serif w-[634px] text-[72px] font-normal leading-[82.8px] text-white">
            Build trustworthy identity <br className="max-xl:hidden" />
            infrastructure
          </h1>
          <p className="font-manrope max-w-[466px] text-[17.6px] font-normal leading-[30.8px] text-[#d7e0ee]">
            Zoiko iD is a Zoiko Tech Inc. platform focused on establishing identity, governing authority and preserving evidence across people, organizations, services and AI agents. Explore the work and, where positions are publicly approved, opportunities to contribute.
          </p>
          <div className="flex w-full flex-wrap items-start gap-[20px] pt-[21.29px]">
            <Link
              href="#themes"
              className="font-manrope inline-flex items-center gap-[10px] whitespace-nowrap rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore Zoiko iD
            </Link>
            <Link
              href="/about-us"
              className="font-manrope inline-flex items-center gap-[10px] whitespace-nowrap rounded-[6px] border border-solid border-white px-[28px] py-[14px] text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              About Zoiko iD
            </Link>
          </div>
        </div>
        <div className="relative flex min-w-px flex-[1_0_0] flex-col items-start">
          <div className="grid h-[496px] w-full grid-cols-2 grid-rows-[260px_220px] gap-[16px]">
            <div className="relative col-span-2 row-start-1 overflow-hidden rounded-[18px]">
              <Image
                src="/careers/desktop-hero-whiteboard.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative col-start-1 row-start-2 overflow-hidden rounded-[18px]">
              <Image
                src="/careers/desktop-hero-laptop.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-start-2 row-start-2 overflow-hidden rounded-[18px]">
              <Image
                src="/careers/desktop-hero-code.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[-21.99px] left-[24px] flex max-w-[280px] items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[14px] drop-shadow-[0px_14px_15px_rgba(11,27,51,0.14)]">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/careers/desktop-icon-layers.svg" width={21} height={21} alt="" />
            </div>
            <div className="font-manrope">
              <p className="text-[14px] font-bold leading-[23.1px] text-[#0b1b33]">Work themes, not vacancies</p>
              <p className="text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">Identity, authority and evidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
