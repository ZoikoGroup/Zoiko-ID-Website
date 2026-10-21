import Image from "next/image";
import Link from "next/link";

const cards = [
  { href: "/identity-guides", img: "related-identity-guides.webp", title: "Identity Guides", body: "Core concepts: identity, authentication, credentials.", tag: "Owns fundamentals", pos: "object-center" },
  { href: "/architecture-guides", img: "related-architecture-guides.webp", title: "Architecture Guides", body: "Reference patterns and trust boundaries.", tag: "Owns patterns", pos: "object-center" },
  { href: "/authority-explainers", img: "related-delegated-authority.webp", title: "Delegated Authority Explainers", body: "Mandates, scope, time and revocation.", tag: "Owns mandates", pos: "object-[50%_61.4%]" },
  { href: "/api-reference", img: "related-api-reference.webp", title: "API Reference", body: "Exact executable contracts.", tag: "Owns contracts", pos: "object-center" },
];

const pills = [
  "machine identity guide",
  "service account identity",
  "workload identity",
  "AI agent identity",
  "non-human identity security",
  "agent authorization",
  "delegated authority for agents",
];

export default function RelatedPagesSection() {
  return (
    <section id="related-pages" className="w-full px-[160px] bg-white py-[105px]">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
              Each page owns its own question
            </h2>
            <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              Adjacent guides cover related ground. This page links to them rather than repeating them, so each topic has one canonical home.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <ul className="grid min-h-[293px] grid-cols-4 gap-[18px]">
              {cards.map((c) => (
                <li key={c.title} className="flex">
                  <Link
                    href={c.href}
                    className="flex w-full flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07111f]"
                  >
                    <div className="relative h-[120px] w-full shrink-0">
                      <Image
                        src={`/machine-agent-identity-guides/desktop-${c.img}`}
                        alt=""
                        fill
                        sizes="(min-width: 1440px) 267px, 22vw"
                        className={`object-cover ${c.pos}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[7px] p-[20px] font-manrope">
                      <h3 className="pb-[6px] text-[17px] font-bold leading-[27.2px] text-[#07111f]">{c.title}</h3>
                      <p className="text-[13px] leading-[20.8px] text-[#64748b]">{c.body}</p>
                      <p className="mt-auto rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8.2px] pt-[7px] text-[12px] leading-[19.2px] text-[#07111f]">
                        {c.tag}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-[16px] gap-y-[10px] pt-[16px]">
              {pills.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[#e2e8f0] bg-white px-[16px] py-[9px] font-manrope text-[14px] font-semibold leading-[22.4px] text-[#07111f]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
