import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { label: "Actor types", href: "#actor-types" },
  { label: "Find a guide", href: "#guide-finder" },
  { label: "Learning tracks", href: "#learning-tracks" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Agent sponsorship", href: "#agent-sponsorship" },
  { label: "Identity vs authority", href: "#identity-vs-authority" },
  { label: "Continuous trust", href: "#continuous-trust" },
  { label: "Evidence", href: "#evidence" },
  { label: "Integration", href: "#integration" },
  { label: "FAQ", href: "#faq" },
];

const strip = [
  { label: "Workloads", img: "strip-workloads" },
  { label: "Machines", img: "strip-machines" },
  { label: "AI agents", img: "strip-ai-agents" },
  { label: "Signals", img: "strip-signals" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2";

export default function HeroSection() {
  return (
    <section className="px-[22px] pt-[60px] font-manrope">
      <div className="mx-auto w-full max-w-[560px]">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-[10px]">
            <span aria-hidden="true" className="h-[2px] w-[28px] bg-[#22b8d6]" />
            <span className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
              Resources · Learn
            </span>
          </div>
          <h1 className="font-dm-serif text-[40px] font-normal leading-[44px] text-[#2563eb]">
            Machine &amp; Agent Identity Guides
          </h1>
          <p className="max-w-[820px] pt-[9.39px] text-[16px] leading-[25.6px] text-[#64748b]">
            Understand how machines, services, workloads, and AI agents are identified—and why authenticated identity is only one part of governing what they can do.
          </p>
          <p className="w-full border-l-4 border-solid border-[#22b8d6] pl-5 pt-[10px] text-[17px] leading-[27.2px] text-[#334155]">
            Machine identity establishes an identity for a non-human actor such as a service or workload. AI-agent identity addresses actors that can initiate or coordinate actions. Proving an actor’s identity does not by itself grant authority: permitted actions depend on policy, scope, purpose, context and any required delegation. Evidence helps explain how those decisions were made.
          </p>
          <div className="flex flex-col items-start gap-[14px] pt-[15.99px]">
            <Link
              href="#actor-types"
              className={`inline-flex min-h-[46px] items-center rounded-[8px] border border-solid border-[#2563eb] bg-[#2563eb] px-6 py-[14px] text-[15px] font-bold leading-6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] ${focusRing}`}
            >
              Explore guides
            </Link>
            <Link
              href="/architecture-guides"
              className={`inline-flex min-h-[46px] items-center rounded-[8px] border border-solid border-[#2563eb] bg-white px-6 py-[14px] text-[15px] font-bold leading-6 text-[color:#2563eb] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eff6ff] ${focusRing}`}
            >
              View architecture guides
            </Link>
          </div>
          <p className="py-[6px] text-[13px] leading-[20.8px] text-[#64748b]">
            <Link
              href="/security-contact"
              className={`text-[15px] font-bold leading-6 text-[color:#2563eb] hover:underline ${focusRing}`}
            >
              Talk to an identity expert →
            </Link>{" "}
            (route from approved registry, pending)
          </p>
        </div>

        <div className="relative mt-[70px] h-[520px] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/machine-agent-identity-guides/mobile-hero-visual.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-[10px] rounded-[12px] bg-white px-4 pb-[11.89px] pt-[11.5px]">
            <Image src="/machine-agent-identity-guides/mobile-hero-badge-icon.svg" alt="" width={20} height={20} />
            <span className="whitespace-nowrap text-[14px] font-bold leading-[22.4px] text-[#2563eb]">
              Conceptual teaching pattern
            </span>
          </div>
        </div>

        <nav aria-label="On this page" className="mt-[60px]">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-[12.6px]">
            <li className="text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[0.96px] text-[#64748b]">
              On this page
            </li>
            {pageLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-full border border-solid border-[#e2e8f0] bg-white px-4 pb-[8.89px] pt-[8.5px] text-[14px] font-semibold leading-[22.4px] text-[#2563eb] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#22b8d6] ${focusRing}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-[60px] overflow-hidden rounded-[20px]">
          {strip.map((s) => (
            <li key={s.img} className="relative h-[200px] w-full overflow-hidden">
              <Image
                src={`/machine-agent-identity-guides/mobile-${s.img}.webp`}
                alt={`${s.label} illustration`}
                fill
                sizes="(max-width: 560px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-b from-[rgba(7,20,38,0)] to-[rgba(7,20,38,0.92)] px-[18px] pb-[13.89px] pt-[23.5px]">
                <Image src={`/machine-agent-identity-guides/mobile-${s.img}.svg`} alt="" width={18} height={18} />
                <span className="text-[14px] font-bold leading-[22.4px] text-white">{s.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
