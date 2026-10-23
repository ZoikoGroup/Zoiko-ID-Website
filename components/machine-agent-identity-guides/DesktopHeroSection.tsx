import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative -mt-[116px] overflow-hidden pb-[64px] pt-[180px] px-[160px]">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(136.55deg, rgb(7, 20, 38) 0%, rgb(15, 23, 42) 100%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/machine-agent-identity-guides/desktop-hero-bg.webp"
          className="absolute size-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[840px] flex-col items-center gap-[20px] pt-[3px] text-center">
        <h1 className="w-full font-dm-serif text-[72px] font-normal leading-[69.4px] text-white">
          Machine &amp; Agent Identity Guides
        </h1>
        <p className="max-w-[694px] pt-[8px] font-manrope text-[17px] font-normal leading-[27.2px] text-[#cbd5e1]">
          Machine identity establishes an identity for a non-human actor such as a service or workload. AI-agent identity addresses actors that can initiate or coordinate actions. Proving an actor’s identity does not by itself grant authority: permitted actions depend on policy, scope, purpose, context and any required delegation. Evidence helps explain how those decisions were made.
        </p>
        <div className="flex flex-wrap items-start justify-center gap-[20px] pt-[21px]">
          <Link
            href="#guide-finder"
            className="inline-flex items-center rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            Explore guides
          </Link>
          <Link
            href="/architecture-guides"
            className="inline-flex items-center rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15.2px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
          >
            View architecture guides
          </Link>
        </div>
      </div>
    </section>
  );
}
