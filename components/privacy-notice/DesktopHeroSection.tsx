import Image from "next/image";
import Link from "next/link";

export default function DesktopHeroSection() {
  return (
    <section
      className="relative -mt-[116px] flex min-h-[815px] w-full flex-col items-center justify-center gap-[32px] overflow-hidden border-b border-solid border-[#d9e1ec] px-[160px] pb-[80px] pt-[196px]"
      style={{
        backgroundImage:
          "linear-gradient(92.065deg, rgb(7, 20, 38) 1.0218%, rgb(13, 31, 53) 49.98%, rgb(10, 26, 46) 100.98%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-4.55%_-22.47%_-44.51%_-9.97%] rounded-[523.6px] blur-[50px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 140px 71px at 50% 50%, rgba(34,184,214,0.2) 0%, rgba(34,184,214,0) 70%)",
        }}
      />
      <div className="relative flex w-full items-center justify-between">
        <div className="flex w-[634px] min-w-[512px] shrink-0 flex-col items-start gap-[19.4px]">
          <h1 className="font-dm-serif text-[72px] font-normal leading-[82.8px] text-white">
            Privacy Notice
          </h1>
          <p className="max-w-[466px] font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#d7e0ee]">
            This page is where Zoiko iD’s privacy information will be published once it has been
            approved. It is a publication shell: it shows the structure, not the legal content.
          </p>
          <div className="flex h-[73.29px] w-full flex-wrap items-start gap-[20px] pt-[21.29px]">
            <Link
              href="#contents"
              className="flex items-center gap-[10px] self-stretch rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Jump to contents
            </Link>
          </div>
        </div>
        <div className="relative flex min-w-px flex-[1_0_0] items-center gap-[10px]">
          <div className="relative h-[496px] w-[486px] shrink-0">
            <div className="absolute inset-[0_0_0_-35px] overflow-hidden rounded-[18px]">
              <Image
                src="/privacy-notice/desktop-hero-whiteboard.webp"
                alt=""
                fill
                sizes="521px"
                className="rounded-[18px] object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-[39.38px] left-[-13px] flex max-w-[280px] items-center gap-[12px] rounded-[14px] bg-white px-[18px] py-[14px] drop-shadow-[0px_14px_15px_rgba(11,27,51,0.14)]">
            <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#e4f3f8]">
              <Image src="/privacy-notice/desktop-icon-layers.svg" width={21} height={21} alt="" />
            </div>
            <div className="shrink-0">
              <p className="font-manrope text-[14px] font-bold leading-[23.1px] text-[#0b1b33]">
                Work themes, not vacancies
              </p>
              <p className="font-manrope text-[13px] font-normal leading-[21.45px] text-[#5b6b82]">
                Identity, authority and evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
