import Image from "next/image";
import type { ReactNode } from "react";

const checks: ReactNode[] = [
  <>
    Desktop 1200px and up: four-column route <br />
    grid.
  </>,
  <>
    Tablet 768–1199px: two columns, no clipped <br />
    menus.
  </>,
  <>
    Mobile 320px: single column, no horizontal <br />
    scroll.
  </>,
  <>
    200% zoom and 400% reflow with content <br />
    preserved.
  </>,
  <>
    Visible focus, linked error summary, colour <br />
    never the only signal.
  </>,
];

const images = [
  "/contact/mobile-flow-laptop.webp",
  "/contact/mobile-a11y-code.webp",
  "/contact/mobile-a11y-analytics.webp",
  "/contact/mobile-a11y-dashboard.webp",
];

export default function MobileResponsiveAccessibilitySection() {
  return (
    <section
      id="accessibility"
      className="flex w-full flex-col items-start gap-[56px] border-b border-solid border-[#d9e1ec] bg-[#f2f5fa] px-[22px] py-[60px] lg:hidden"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[56px]">
        <div className="flex w-full flex-col gap-[40px]">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/contact/mobile-accessibility-laptop.webp"
              alt="Laptop showing an accessible contact form"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-[14.9px]">
            <div className="flex items-center gap-[12px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#0891b2]" />
              <span className="w-[17.2px] shrink-0 font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0b1b33]">
                09
              </span>
              <span className="font-manrope text-[12px] font-extrabold uppercase leading-[19.8px] tracking-[1.92px] text-[#0891b2]">
                Responsive and accessibility
              </span>
            </div>
            <h2 className="font-dm-serif text-[32px] font-normal leading-[35.84px] text-[#0b1b33] [word-break:break-word]">
              WCAG 2.2 AA is a release <br />
              blocker
            </h2>
            <p className="max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
              The layout adapts at each breakpoint without <br />
              horizontal scroll, clipping or hover-only <br />
              information.
            </p>
            <ul className="flex flex-col gap-[12px] pt-[13.1px]">
              {checks.map((t, i) => (
                <li key={i} className="flex items-start gap-[12px]">
                  <Image src="/contact/mobile-icon-check.svg" alt="" width={20} height={20} className="mt-[2px] shrink-0" />
                  <span className="whitespace-nowrap font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          {images.map((src) => (
            <div key={src} className="relative h-[200px] w-full overflow-hidden rounded-[14px]">
              <Image src={src} alt="" fill sizes="(max-width: 560px) 100vw, 560px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
