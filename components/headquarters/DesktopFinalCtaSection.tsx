import Image from "next/image";
import Link from "next/link";

const pills = [
  { href: "/headquarters", icon: "/headquarters/desktop-icon-building-3.svg", label: "Locations & Connect" },
  { href: "/european-headquarters", icon: "/headquarters/desktop-icon-pin-1.svg", label: "European Headquarters" },
  { href: "/security-contact", icon: "/headquarters/desktop-icon-mail.svg", label: "Contact" },
];

export default function DesktopFinalCtaSection() {
  return (
    <section className="w-full bg-white px-[105px] py-[48px]">
      <div className="relative mx-auto flex w-full flex-col items-center overflow-hidden rounded-[32px] p-[80px]">
        <div aria-hidden className="absolute inset-0 rounded-[32px]">
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundImage:
                "linear-gradient(129.208971313564deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)",
            }}
          />
          <Image
            src="/headquarters/desktop-final-cta-bg.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 1250px, 100vw"
            className="rounded-[32px] object-cover opacity-20"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
          style={{ backgroundImage: "radial-gradient(closest-side, rgba(34,184,214,0.12), rgba(34,184,214,0) 70%)" }}
        />
        <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[20px] px-[80px]">
          <h2 className="w-full max-w-[860px] text-center font-dm-serif text-[52px] font-normal leading-[normal] text-white">
            The company, the address and the right route.
          </h2>
          <p className="text-center font-manrope text-[16px] font-normal leading-[25.6px] text-[#c9d3e3] xl:whitespace-nowrap">
            Zoiko Tech Inc. is headquartered in Sacramento, California. For specific needs, use <br className="max-xl:hidden" />
            the routes on this page.
          </p>
        </div>
        <ul className="relative flex w-full items-start justify-center gap-[10px] pb-[10px] pt-[9.1px]">
          {pills.map((p) => (
            <li key={p.label}>
              <Link
                href={p.href}
                className="inline-flex h-[41.8px] items-center gap-[8px] rounded-full border border-solid border-[rgba(255,255,255,0.25)] pl-[14px] pr-[10px] font-manrope text-[14px] font-normal leading-[23.8px] text-[#e2e8f0] transition hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <Image src={p.icon} width={18} height={18} alt="" className="size-[18px] shrink-0" />
                <span className="whitespace-nowrap">{p.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
