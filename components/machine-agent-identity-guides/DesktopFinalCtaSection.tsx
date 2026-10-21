import Image from "next/image";
import Link from "next/link";

const pill =
  "inline-flex items-center gap-[8px] rounded-full border border-solid border-white/20 px-[14px] py-[7.7px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#e2e8f0] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

export default function FinalCtaSection() {
  return (
    <section className="w-full bg-white py-[48px]">
      <div className="mx-auto w-full max-w-[1250px] px-10 xl:px-16 min-[1440px]:px-0">
        <div className="relative flex flex-col items-center overflow-hidden rounded-[32px] px-[80px] py-[130px]">
          <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
            <div
              className="absolute inset-0 rounded-[32px]"
              style={{ backgroundImage: "linear-gradient(119.52deg, rgb(7, 20, 38) 1.8504%, rgb(13, 31, 53) 67.305%, rgba(34, 184, 214, 0.1) 132.76%)" }}
            />
            <Image src="/machine-agent-identity-guides/desktop-final-cta-bg.webp" alt="" fill sizes="1250px" className="rounded-[32px] object-cover opacity-20" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[0_-20%_-40%_70%] rounded-[346.74px] blur-[60px]"
            style={{ backgroundImage: "radial-gradient(ellipse 42.6% 36.7% at 50% 50%, rgba(34,184,214,0.12) 0%, rgba(34,184,214,0) 70%)" }}
          />
          <div className="relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-[15.3px] px-[80px]">
            <h2 className="w-full text-center font-dm-serif text-[52px] font-normal leading-[59.8px] tracking-[-0.78px] text-white">
              Keep learning, or move to the technical material.
            </h2>
            <p className="max-w-[600px] text-center font-manrope text-[16px] font-normal leading-[25.6px] text-[#cbd5e1]">
              Read the architecture guides for system context, the Delegated Authority Explainers for mandates, or speak with an identity expert about your environment.
            </p>
            <div className="flex w-full items-start justify-center gap-[14.46px] pb-[10px] pt-[14.5px]">
              <Link href="/architecture-guides" className={pill}>
                <Image src="/machine-agent-identity-guides/desktop-cta-arrow-architecture.svg" alt="" width={18} height={18} className="size-[18px]" />
                Architecture Guides
              </Link>
              <Link href="/api-reference" className={pill}>
                <Image src="/machine-agent-identity-guides/desktop-cta-arrow-developer.svg" alt="" width={18} height={18} className="size-[18px]" />
                Developer documentation
              </Link>
            </div>
          </div>
          <div className="relative flex w-full flex-wrap items-center justify-center gap-x-[19.99px] gap-y-[20px] pt-[20.01px]">
            <Link
              href="/identity-guides"
              className="inline-flex items-center rounded-[6px] bg-[#2563eb] px-[28px] py-[13px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Explore guides
            </Link>
            <Link
              href="/security-contact"
              className="inline-flex items-center rounded-[6px] border border-solid border-white px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Talk to an identity expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
