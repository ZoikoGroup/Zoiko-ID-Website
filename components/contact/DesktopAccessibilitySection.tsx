import Image from "next/image";

const items = [
  "Desktop 1200px and up: four-column route grid.",
  "Tablet 768–1199px: two columns, no clipped menus.",
  "Mobile 320px: single column, no horizontal scroll.",
  "200% zoom and 400% reflow with content preserved.",
  "Visible focus, linked error summary, colour never the only signal.",
];

export default function DesktopAccessibilitySection() {
  return (
    <section
      id="accessibility"
      className="hidden w-full bg-[#f8fafc] px-[160px] py-[105px] lg:block"
    >
      <div className="flex items-center justify-center gap-[80px]">
        <div className="relative min-h-[380px] min-w-px flex-1 self-stretch overflow-hidden rounded-[18px]">
          <Image
            src="/contact/desktop-accessibility-laptop.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 0px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-[15px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.24px] text-[#0b1b33] [word-break:break-word]">
            WCAG 2.2 AA is a <br className="max-xl:hidden" />
            release blocker
          </h2>
          <p className="w-full max-w-[720px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82] [word-break:break-word]">
            The layout adapts at each breakpoint without horizontal scroll,{" "}
            <br className="max-xl:hidden" />
            clipping or hover-only information.
          </p>
          <ul className="flex w-full flex-col gap-[12px] pt-[13px]">
            {items.map((t) => (
              <li
                key={t}
                className="flex h-[24.75px] items-center gap-[12px] pb-[1.75px]"
              >
                <Image
                  src="/contact/desktop-icon-check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span className="font-manrope text-[15px] font-normal leading-[24.75px] text-[#334155] xl:whitespace-nowrap">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
