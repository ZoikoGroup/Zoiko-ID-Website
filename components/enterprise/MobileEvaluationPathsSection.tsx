import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    icon: "/enterprise/mobile-icon-role-cio.svg",
    title: "CIO / CTO",
    text: "Architecture and coexistence with your estate.",
    cta: "Architecture → talk to an expert",
    href: "/security-contact",
  },
  {
    icon: "/enterprise/mobile-icon-role-ciso.svg",
    title: "CISO / IAM",
    text: "Controls for delegation, revocation and trust.",
    cta: "Security → authority model",
    href: "/authority-explainers",
  },
  {
    icon: "/enterprise/mobile-icon-role-architect.svg",
    title: "Architect",
    text: "Federation, APIs, organization and machine boundaries.",
    cta: "Architecture → developers",
    href: "/architecture-guides",
  },
  {
    icon: "/enterprise/mobile-icon-role-ai-lead.svg",
    title: "AI lead",
    text: "Sponsorship and bounded action for agents.",
    cta: "Agent identity → limits → evidence",
    href: "/identity-guides",
  },
  {
    icon: "/enterprise/mobile-icon-role-procurement.svg",
    title: "Procurement",
    text: "Owner, documentation and the evaluation route.",
    cta: "Corporate details → sales",
    href: "/security-contact",
  },
];

export default function MobileEvaluationPathsSection() {
  return (
    <section id="teams" className="w-full bg-[#071426] px-[22px] py-[60px] lg:hidden">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[14px]">
        <div className="flex h-[19.19px] w-full items-center gap-[10px]">
          <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#22b8d6]">
            Evaluation paths
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-white">
          Start from the question your team owns
        </h2>
        <ul className="flex w-full flex-col border-t border-solid border-[rgba(255,255,255,0.12)] pb-[36px] pt-[30px]">
          {roles.map((r) => (
            <li
              key={r.title}
              className="flex flex-col items-start gap-[6px] pb-[1.1px] pr-[30px] pt-[30px]"
            >
              <div className="flex w-[46px] items-center justify-center rounded-[12px] bg-[rgba(34,184,214,0.14)] py-[12px]">
                <Image src={r.icon} width={22} height={22} alt="" className="shrink-0" />
              </div>
              <h3 className="w-full pt-[8px] font-manrope text-[17px] font-bold leading-[27.2px] text-white">
                {r.title}
              </h3>
              <p className="w-full pb-[7.5px] font-manrope text-[14px] leading-[22.4px] text-[#94a3b8]">
                {r.text}
              </p>
              <Link
                href={r.href}
                className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#22b8d6] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
              >
                {r.cta}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative h-[280px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/enterprise/mobile-enterprise-adoption.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
