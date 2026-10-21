import Image from "next/image";
import Link from "next/link";

const chips = [
  { icon: "cta-arrow-architecture.svg", label: "Architecture Guides", href: "/architecture-guides" },
  { icon: "cta-arrow-developer.svg", label: "Developer documentation", href: "/apis-integrations" },
];

export default function NextStepSection() {
  return (
    <section className="bg-[#071426] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[60px]">
        <div className="flex w-full flex-col items-start gap-[12px]">
          <div className="flex h-[19.19px] w-full items-center gap-[10px]">
            <span aria-hidden="true" className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
            <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#22b8d6]">
              Next step
            </p>
          </div>
          <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-white">
            Keep learning, or move to the technical material.
          </h2>
          <p className="w-full pt-[1.39px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#cbd5e1]">
            Read the architecture guides for system context, the Delegated Authority Explainers for mandates, or speak with an identity expert about your environment.
          </p>
          <div className="flex w-full flex-col items-start gap-[10px] pb-[10px] pt-[14px]">
            {chips.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="inline-flex items-center gap-[8px] rounded-full border border-solid border-white/20 px-[14px] pb-[7.89px] pt-[7.5px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#e2e8f0] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b8d6]"
              >
                <Image src={`/machine-agent-identity-guides/mobile-${c.icon}`} alt="" width={18} height={18} className="size-[18px]" />
                <span>{c.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-[14px] pt-[14px]">
            <Link
              href="/identity-guides"
              className="inline-flex min-h-[46px] items-center rounded-[8px] border border-solid border-[#2563eb] bg-[#2563eb] px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white shadow-[0px_8px_20px_0px_rgba(37,99,235,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore guides
            </Link>
            <Link
              href="/security-contact"
              className="inline-flex min-h-[46px] items-center rounded-[8px] border border-solid border-white/70 px-[24px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Talk to an identity expert
            </Link>
          </div>
        </div>
        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/machine-agent-identity-guides/mobile-final-cta-bg.webp"
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
