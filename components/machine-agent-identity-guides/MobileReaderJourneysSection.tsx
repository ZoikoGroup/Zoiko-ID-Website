import Image from "next/image";
import Link from "next/link";

const readers = [
  {
    title: "Security lead",
    text: "Reads the actor comparison, then the lifecycle, then evidence.",
    next: "Next: Trust Center",
    href: "/trust-center",
    img: "/machine-agent-identity-guides/mobile-reader-security-lead.webp",
    alt: "Security lead reviewing evidence on a screen",
  },
  {
    title: "Developer",
    text: "Reads the workload concepts, then goes to exact interfaces.",
    next: "Next: API Reference",
    href: "/api-reference",
    img: "/machine-agent-identity-guides/mobile-reader-developer.webp",
    alt: "Developer working with code",
  },
  {
    title: "AI engineer",
    text: "Reads sponsorship and mandate bounds before anything else.",
    next: "Next: Delegated Authority",
    href: "/authority-explainers",
    img: "/machine-agent-identity-guides/mobile-actor-ai-agent.webp",
    alt: "AI agent represented as a connected system",
  },
  {
    title: "Enterprise architect",
    text: "Reads the overlay map and the integration boundaries.",
    next: "Next: Architecture Guides",
    href: "/architecture-guides",
    img: "/machine-agent-identity-guides/mobile-reader-enterprise-architect.webp",
    alt: "Enterprise architect reviewing a system diagram",
  },
  {
    title: "Screen-reader user",
    text: "Moves from the filters to the diagram text equivalent.",
    next: "Next: any guide, full text",
    href: "/identity-guides",
    img: "/machine-agent-identity-guides/mobile-reader-screen-reader-user.webp",
    alt: "Person using a screen reader with a keyboard",
  },
];

export default function ReaderJourneysSection() {
  return (
    <section id="reader-journeys" className="w-full bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <div className="flex h-[19.19px] items-center gap-[10px]">
          <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
          <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
            Reader journeys
          </p>
        </div>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Five readers, five routes through this guide
        </h2>
        <p className="max-w-[820px] pt-[2px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          Each reader arrives with a different decision. The routes below show where to start and where each one leads next.
        </p>
        <ul className="flex flex-col gap-[16px] pt-[28px]">
          {readers.map((r) => (
            <li
              key={r.title}
              className="overflow-hidden rounded-[18px] border border-solid border-[#e2e8f0] bg-white"
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src={r.img}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col px-[20px] pb-[20px] pt-[20px]">
                <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">
                  {r.title}
                </h3>
                <p className="mt-[7px] font-manrope text-[13px] leading-[20.8px] text-[color:#64748b]">
                  {r.text}
                </p>
                <Link
                  href={r.href}
                  className="mt-[10px] block rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8.19px] pt-[7px] font-manrope text-[12px] leading-[19.2px] text-[#2563eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
                >
                  {r.next}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
