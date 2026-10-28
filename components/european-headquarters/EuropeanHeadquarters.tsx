import Image from "next/image";

const TAGS = ["Plain text, selectable", "No map required"] as const;

export default function EuropeanHeadquarters() {
  return (
    <section className="w-full bg-[#F4F6FA] px-4 py-10 font-sans text-[#0F1F3D] sm:px-6 lg:px-[44px] lg:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[24px] border border-[#E3E8F0] bg-white md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-[38px]">
          <h2 className="font-serif text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0F1F3D] sm:text-[40px]">
            European Headquarters
          </h2>

          <address className="mt-5 max-w-[440px] text-lg not-italic leading-[1.75] text-[#1F2D4A]">
            Zoiko Tech 167–169 Great Portland Street, 5th Floor London W1W 5PF,
            United Kingdom
          </address>

          <ul className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#E6EBF3] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#2B3A5A]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[260px] md:min-h-[280px]">
          <Image
            src="/eu/2.png"
            alt="Modern open-plan European office with meeting room and lounge"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
