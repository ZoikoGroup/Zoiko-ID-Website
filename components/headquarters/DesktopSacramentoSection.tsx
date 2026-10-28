import Image from "next/image";

const chips = ["Plain text, selectable", "No map required"];

export default function DesktopSacramentoSection() {
  return (
    <section className="hidden w-full border-b border-solid border-[#d9e1ec] bg-white px-[160px] py-[48px] lg:block">
      <div className="flex w-full items-stretch overflow-hidden rounded-[24px] border border-solid border-[#d9e1ec] bg-white">
        <div className="flex min-h-[421px] min-w-px flex-1 flex-col items-start gap-[17.9px] pb-[71.77px] pl-[56px] pr-[56px] pt-[63.31px]">
          <div className="flex w-full flex-col items-start gap-[18px]">
            <h2 className="w-full font-dm-serif text-[44px] font-normal leading-[49.28px] text-[#0b1b33]">
              Sacramento, California
            </h2>
            <p className="w-full font-manrope text-[22px] font-normal leading-[37.4px] text-[#0b1b33]">
              Zoiko Tech Inc. 1401 21st Street, Suite R Sacramento, CA 95811 United States
            </p>
            <ul className="flex w-full flex-wrap items-start gap-[10px] pt-[6.11px]">
              {chips.map((c) => (
                <li
                  key={c}
                  className="flex flex-col items-start self-stretch rounded-[999px] bg-[#e8ecf3] px-[12px] py-[6px]"
                >
                  <span className="whitespace-nowrap font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[0.96px] text-[#3b4a63]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative min-h-[420px] min-w-px flex-1 self-stretch">
          <Image
            src="/headquarters/desktop-no-map-office.webp"
            alt="Office interior with desks and daylight"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
