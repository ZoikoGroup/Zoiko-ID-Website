import Image from "next/image";
import Link from "next/link";

const pills = [
  { href: "/headquarters", icon: "/headquarters/mobile-icon-building-3.svg", label: "Locations & Connect" },
  { href: "/european-headquarters", icon: "/headquarters/mobile-icon-pin-2.svg", label: "European Headquarters" },
  { href: "/security-contact", icon: "/headquarters/mobile-icon-mail.svg", label: "Contact" },
];

export default function MobileNextStepsSection() {
  return (
    <section className="lg:hidden w-full bg-white px-[22px] py-[22px]">
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[560px] items-end overflow-clip rounded-[24px] bg-[#0b1b33] pt-[120.77px]">
        <Image
          src="/headquarters/mobile-final-cta-bg.webp"
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, 560px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,27,51,0.15)] to-[85%] to-[rgba(11,27,51,0.95)]" />
        <div className="relative flex min-w-px flex-1 flex-col items-start gap-[16.8px] pb-[40px] pt-[7.31px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[20.4px] tracking-[1.92px] text-[#22b8d6] whitespace-nowrap">
              17 · Next steps
            </p>
          </div>
          <h2 className="w-full pb-[0.745px] font-dm-serif text-[32px] font-normal leading-[35.84px] text-white">
            The company, the address
            <br />
            and the right route.
          </h2>
          <p className="w-full max-w-[680px] pt-[3.2px] font-manrope text-[18px] font-normal leading-[30.6px] text-[#c9d3e3]">
            Zoiko Tech Inc. is headquartered in
            <br />
            Sacramento, California. For specific needs,
            <br />
            use the routes on this page.
          </p>
          <ul className="flex w-full flex-wrap gap-x-[10px] gap-y-[9.2px] pt-[9.2px]">
            {pills.map((p) => (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="inline-flex h-[41.8px] items-center gap-[8px] rounded-full border border-solid border-[rgba(255,255,255,0.25)] pl-[14px] pr-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#e2e8f0] whitespace-nowrap transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
                >
                  <Image src={p.icon} width={18} height={18} alt="" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
