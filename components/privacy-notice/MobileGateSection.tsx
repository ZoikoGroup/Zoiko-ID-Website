import Image from "next/image";

const PHOTOS = [
  { src: "/privacy-notice/mobile-gate-developer.webp", alt: "Developer working on the page build" },
  { src: "/privacy-notice/mobile-gate-data.webp", alt: "Data review for the registry" },
  { src: "/privacy-notice/mobile-final-cta-bg.webp", alt: "Team reviewing the notice before publication" },
];

export default function MobileGateSection() {
  return (
    <section
      id="gate"
      className="w-full scroll-mt-[120px] bg-[#f5f7fa] px-[22px] py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[36px]">
        <div className="flex w-full flex-col items-start gap-[14px] rounded-[14px] border border-solid border-[#d9e1ec] bg-white p-[22px]">
          <p className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.68px] text-[#5b6b82]">
            Gate
          </p>
          <div className="flex w-[50px] items-center justify-center rounded-[14px] bg-[#e4f3f8] py-[13px]">
            <Image src="/privacy-notice/mobile-icon-alert-1.svg" width={24} height={24} alt="" />
          </div>
        </div>
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[5px]">
          <p className="w-full font-dm-serif text-[14px] font-normal leading-[23.8px] tracking-[1.68px] text-[#0891b2]">
            16
          </p>
          <h2 className="w-full pb-[0.83px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33]">
            Publication gate
          </h2>
          <div className="flex w-full items-start gap-[16px] rounded-[16px] border border-solid border-[#fca5a5] bg-[#fef2f2] px-[22px] pb-[22px] pt-[43px]">
            <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#fee2e2] pb-[12px] pt-[14px]">
              <Image src="/privacy-notice/mobile-icon-alert.svg" width={24} height={24} alt="" />
            </div>
            <p className="whitespace-nowrap pr-[4.22px] font-manrope text-[15px] font-normal leading-[25.5px] text-[#7f1d1d]">
              <strong className="font-bold">Publication prohibited.</strong> The page<br />
              may be built for layout and<br />
              engineering review. It may not be<br />
              published until Privacy counsel<br />
              approves the notice, the controller<br />
              and region scope is verified, and<br />
              every legally required data row is<br />
              backed by the registry.
            </p>
          </div>
          <div className="flex w-full items-start justify-center gap-[18px] pt-[35px]">
            {PHOTOS.map((p) => (
              <div key={p.src} className="relative h-[200px] min-w-px flex-1 overflow-hidden rounded-[16px]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 560px) 33vw, 180px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
