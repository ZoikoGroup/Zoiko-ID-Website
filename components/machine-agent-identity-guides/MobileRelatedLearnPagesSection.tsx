import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./MobileEyebrow";

const cards = [
  { img: "related-identity-guides.webp", title: "Identity Guides", text: "Core concepts: identity, authentication, credentials.", tag: "Owns fundamentals", href: "/identity-guides" },
  { img: "related-architecture-guides.webp", title: "Architecture Guides", text: "Reference patterns and trust boundaries.", tag: "Owns patterns", href: "/architecture-guides" },
  { img: "related-delegated-authority.webp", title: "Delegated Authority Explainers", text: "Mandates, scope, time and revocation.", tag: "Owns mandates", href: "/authority-explainers" },
  { img: "related-api-reference.webp", title: "API Reference", text: "Exact executable contracts.", tag: "Owns contracts", href: "/api-reference" },
];

const themes = [
  "machine identity guide",
  "service account identity",
  "workload identity",
  "AI agent identity",
  "non-human identity security",
  "agent authorization",
  "delegated authority for agents",
];

export default function RelatedLearnPagesSection() {
  return (
    <section className="px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <Eyebrow>Related Resources Learn pages</Eyebrow>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Each page owns its own question
        </h2>
        <p className="w-full max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#64748b]">
          Adjacent guides cover related ground. This page links to them rather than repeating them, so each topic has one canonical home.
        </p>
        <ul className="flex w-full flex-col gap-[18px] pt-[28px]">
          {cards.map((c) => (
            <li key={c.title}>
              <Link
                href={c.href}
                className="flex flex-col overflow-hidden rounded-[18px] border border-solid border-[#e2e8f0] bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              >
                <div className="relative h-[120px] w-full overflow-hidden">
                  <Image
                    src={`/machine-agent-identity-guides/mobile-${c.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-[145.17px] flex-col items-stretch gap-[14px] p-[20px]">
                  <div>
                    <h3 className="pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{c.title}</h3>
                    <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[color:#64748b]">{c.text}</p>
                  </div>
                  <span className="mt-auto rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8.19px] pt-[7px] font-manrope text-[12px] font-normal leading-[19.2px] text-[#2563eb]">
                    {c.tag}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex w-full flex-wrap gap-[10px] pt-[28px]">
          {themes.map((t) => (
            <li
              key={t}
              className="rounded-full border border-solid border-[#e2e8f0] bg-white px-[16px] py-[9px] font-manrope text-[14px] font-semibold leading-[22.4px] text-[#2563eb]"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="w-full pb-[0.695px] pt-[4.905px] font-manrope text-[13px] font-normal leading-[20.8px] text-[color:#64748b]">
          Topics above are search themes this guide is written to answer. They are not claims about how many guides exist.
        </p>
      </div>
    </section>
  );
}
