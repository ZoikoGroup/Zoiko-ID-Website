import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    icon: "/zoiko-tech-inc/desktop-icon-identity.svg",
    title: "Identity",
    body: <span>Identity establishes who or what is <br className="max-xl:hidden" />represented.</span>,
    cta: "Platform overview →",
    href: "/architecture-guides",
  },
  {
    icon: "/zoiko-tech-inc/desktop-icon-authority.svg",
    title: "Authority",
    body: <>Authority governs what actions are <br className="max-xl:hidden" />permitted.</>,
    cta: "Delegated authority →",
    href: "/authority-explainers",
  },
  {
    icon: "/zoiko-tech-inc/desktop-icon-evidence.svg",
    title: "Evidence",
    body: <span>Evidence supports review of important <br className="max-xl:hidden" />decisions.</span>,
    cta: "Evidence & Audit →",
    href: "/trust-center",
  },
];

export default function DesktopProofPointsSection() {
  return (
    <section id="proof-points" className="hidden w-full bg-[#f7f8fa] lg:block">
      <div className="flex w-full flex-col items-start gap-[60px] px-[160px] py-[105px]">
        <div className="flex w-full flex-col items-start gap-[11px]">
          <h2 className="w-full font-dm-serif text-[52px] font-normal leading-[58.6px] text-[#07111f]">
            Three proof points, each with its own page
          </h2>
          <p className="max-w-[680px] pt-[2px] font-manrope text-[17px] font-normal leading-[28px] text-[#5b6b82]">
            <span className="xl:whitespace-nowrap">Each card links to the surface that owns the detail. Nothing here is a claim made on behalf <br className="max-xl:hidden" />
of another page.</span>
          </p>
        </div>
        <ul className="flex w-full items-stretch justify-center gap-[20px]">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex min-w-px flex-1 flex-col items-start gap-[6.9px] rounded-[8px] border border-[#dce3ee] bg-white p-[28px]"
            >
              <div className="flex w-full items-center gap-[12px]">
                <div className="flex h-[41px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e4f3f8]">
                  <Image src={c.icon} width={20} height={20} alt="" />
                </div>
                <h3 className="font-manrope text-[17px] font-bold leading-[28px] text-[#07111f]">{c.title}</h3>
              </div>
              <p className="w-full max-w-[302px] font-manrope text-[15px] font-normal leading-[24.75px] text-[#5b6b82]">{c.body}</p>
              <div className="w-full pt-[16px]">
                <Link
                  href={c.href}
                  className="inline-block rounded-[4px] font-manrope text-[14px] font-bold leading-[23.1px] text-[#1d4ed8] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                >
                  {c.cta}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
