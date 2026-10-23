import Image from "next/image";
import Link from "next/link";

export default function DesktopHeroSection() {
  return (
    <section
      className="relative -mt-[116px] flex w-full flex-col items-center overflow-hidden pt-[196px] px-[160px]"
      style={{
        backgroundImage:
          "linear-gradient(91.49deg, rgb(7, 20, 38) 1.02%, rgb(13, 31, 53) 49.98%, rgb(10, 26, 46) 100.98%)",
      }}
    >
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1500px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,184,214,0.2)_0%,rgba(34,184,214,0)_70%)] blur-[50px]"
      />

      <div className="relative flex w-full flex-col items-center gap-[36px]">
        <div className="flex w-full max-w-[983px] flex-col items-center gap-[19.4px] text-center">
          <h1 className="font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
            Explore how Zoiko iD can fit your enterprise
          </h1>
          <p className="font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#b6c5d9]">
            Zoiko iD is designed for identity, credentials, delegated authority and evidence across people, organizations, services, machines and AI agents. A proposal reflects the scope of your evaluation, not a list price.
          </p>
          <div className="flex w-full flex-wrap items-start justify-center gap-[20px] pt-[21.29px]">
            <Link
              href="/security-contact"
              className="flex items-center gap-[10px] rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="/architecture-guides"
              className="flex items-center gap-[10px] rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore the platform
            </Link>
          </div>
        </div>

        <div className="relative h-[479px] w-full overflow-hidden rounded-t-[24px] shadow-[0px_20px_48px_0px_rgba(0,0,0,0.15)]">
          <Image
            src="/pricing-overview/desktop-hero-visual.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1440px) 1120px, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
