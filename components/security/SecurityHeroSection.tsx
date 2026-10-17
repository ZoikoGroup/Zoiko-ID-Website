import Image from "next/image";
import Link from "next/link";

export default function SecurityHeroSection() {
  return (
    <section className="relative -mt-20 sm:-mt-24 lg:-mt-[116px] w-full bg-[#FFFFFF] pt-28 sm:pt-36 lg:pt-[175px] pb-[80px] lg:pb-[105px] px-6 sm:px-12 lg:px-20 xl:px-[160px] overflow-hidden">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-[50px] lg:gap-[70px]">
        {/* Left Column: Heading, Subtitle, and Buttons */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h1 className="font-dm-serif text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.02] lg:leading-[70.4px] text-[#0B1B33]">
              Security for identity,<br />authority and<br />evidence.
            </h1>

            <div className="pt-[11px]">
              <p className="font-manrope text-[15px] sm:text-[17px] leading-[27.2px] text-[#64748B] whitespace-pre-line">
                Security is more than sign-in. Zoiko iD is designed to link actor{"\n"}identity with bounded authority, policy decisions, changing trust{"\n"}signals and reviewable evidence.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-[17px]">
            <Link
              href="#expert"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#2563EB] px-6 py-3.5 font-manrope text-[15px] font-bold leading-[24px] text-[#FFFFFF] shadow-[0px_8px_20px_0px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-600"
            >
              Talk to an identity expert
            </Link>

            <Link
              href="#lifecycle"
              className="inline-flex items-center justify-center rounded-[8px] border border-[#2563EB] bg-[#FFFFFF] px-6 py-3.5 font-manrope text-[15px] font-bold leading-[24px] text-[#2563EB] transition-colors hover:bg-blue-50"
            >
              Explore architecture
            </Link>
          </div>
        </div>

        {/* Right Column: Server Racks Image with Floating Badge */}
        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-[24px] shadow-sm">
          <Image
            src="/security/img-053e583e994e51fe516859fa8a25ac3a88e26f90.png"
            alt="Data center server racks"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 520px, 100vw"
          />

          {/* Floating Badge Overlay */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2.5 rounded-[12px] bg-[#FFFFFF] px-4 py-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
            <Image
              src="/security/icon-411_20370.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 shrink-0"
            />
            <span className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#0B1B33]">
              Designed architecture, not a certification
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
