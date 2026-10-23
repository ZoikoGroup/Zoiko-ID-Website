import Image from "next/image";
import Link from "next/link";

const cards = [
  "/privacy-notice/mobile-hero-portrait.webp",
  "/privacy-notice/mobile-hero-lock.webp",
  "/privacy-notice/mobile-hero-team.webp",
  "/privacy-notice/mobile-hero-network.webp",
];

export default function MobileHeroSection() {
  return (
    <section className="w-full border-b border-solid border-[#d9e1ec] bg-[#f5f7fa] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[60px]">
        <div className="flex w-full flex-col gap-[70px]">
          <div className="flex w-full flex-col gap-[16.9px] pt-[7.31px]">
            <div className="flex items-center gap-[12px]">
              <div className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
              <p className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#0891b2]">
                Legal &amp; Privacy · 02
              </p>
            </div>
            <h1 className="pb-[0.67px] font-dm-serif text-[42px] font-normal leading-[43.68px] text-[#0b1b33]">
              Privacy Notice
            </h1>
            <p className="pt-[4.49px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#5b6b82]">
              This page is where Zoiko iD’s privacy
              <br />
              information will be published once it has
              <br />
              been approved. It is a publication shell: it
              <br />
              shows the structure, not the legal content.
            </p>
            <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[13.1px]">
              <Link
                href="#contents"
                className="flex h-[55.5px] min-h-[46px] items-center whitespace-nowrap rounded-[8px] border border-solid border-transparent bg-[#0b1b33] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[25.5px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2] focus-visible:ring-offset-2"
              >
                Jump to contents
              </Link>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex h-[55.5px] min-h-[46px] cursor-not-allowed items-center whitespace-nowrap rounded-[8px] border border-solid border-transparent bg-[#e2e8f0] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[25.5px] text-[#64748b]"
              >
                Download PDF (not available)
              </button>
            </div>
            <div className="flex w-full items-start gap-[16px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[22px] pb-[22px] pt-[35.1px]">
              <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2]">
                <Image src="/privacy-notice/mobile-icon-alert.svg" width={24} height={24} alt="" />
              </div>
              <p className="min-w-0 whitespace-nowrap pr-[0.89px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#7f1d1d]">
                <strong className="font-bold">Approval gate.</strong> Terms of Use must
                <br />
                be approved before this notice
                <br />
                begins. Publication is blocked until
                <br />
                counsel approves the text.
              </p>
            </div>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden rounded-[22px]">
            <Image
              src="/privacy-notice/mobile-hero-documents.webp"
              alt="Privacy documents on a desk"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-[18px]">
          {cards.map((src) => (
            <div key={src} className="relative h-[200px] w-full overflow-hidden rounded-[16px]">
              <Image src={src} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
