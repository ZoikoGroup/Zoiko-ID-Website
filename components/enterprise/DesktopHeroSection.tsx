import Image from "next/image";
import Link from "next/link";

const steps = [
  { n: "01", title: "Actor", sub: "Who or what is acting" },
  { n: "02", title: "Mandate", sub: "Bounded authority" },
  { n: "03", title: "Policy", sub: "Rules applied now" },
  { n: "04", title: "Decision", sub: "Outcome for this request" },
  { n: "05", title: "Evidence", sub: "Reviewable record" },
];

export default function DesktopHeroSection() {
  return (
    <section className="relative -mt-[116px] flex w-full flex-col items-center justify-center gap-[32px] overflow-hidden px-[160px] pb-[64px] pt-[180px]">
      <div aria-hidden className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(129.94667697706547deg, rgb(7, 20, 38) 0%, rgb(15, 23, 42) 100%)",
          }}
        />
        <Image
          src="/enterprise/desktop-hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative flex h-[536px] w-[694px] max-w-full items-center justify-center">
        <div className="flex w-full flex-col items-start gap-[20px] pt-[3px]">
          <div className="flex w-full flex-col items-center pb-[0.685px]">
            <h1 className="w-[840px] shrink-0 text-center font-dm-serif text-[68px] font-normal leading-[73.44px] text-white">
              Identity, authority and evidence for enterprise systems.
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center pb-[0.565px] pt-[8.275px]">
            <p className="w-full text-center font-manrope text-[18px] leading-[28.8px] text-[#cbd5e1]">
              Zoiko iD is designed to help enterprises establish who or what is acting, evaluate
              bounded authority, respond to changing trust signals and preserve reviewable evidence
              across existing identity and application estates. Supported integrations and
              deployment patterns must be confirmed for your environment.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-start justify-center gap-[20px] pt-[21.1px]">
            <Link
              href="/security-contact"
              className="flex items-center gap-[10px] rounded-[6px] bg-[#2563eb] px-[28px] py-[14px] font-manrope text-[15px] font-bold leading-[24px] text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Talk to an identity expert
            </Link>
            <Link
              href="#authentication"
              className="flex items-center gap-[10px] rounded-[6px] border border-white px-[28px] py-[14px] font-manrope text-[15.2px] font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Explore platform
            </Link>
          </div>
        </div>
      </div>

      <ul className="relative flex w-full items-start justify-center border-t border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[24px]">
        {steps.map((s, i) => (
          <li
            key={s.n}
            className={`flex min-w-px flex-1 flex-col items-start gap-[3px] p-[32px] ${
              i < steps.length - 1 ? "border-r border-[rgba(255,255,255,0.1)]" : ""
            }`}
          >
            <span className="w-full font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.2px] text-[#22b8d6]">
              {s.n}
            </span>
            <span className="w-full pt-[5px] font-manrope text-[15px] font-bold leading-[24px] text-white">
              {s.title}
            </span>
            <span className="whitespace-nowrap font-manrope text-[13px] leading-[20.8px] text-[#94a3b8]">
              {s.sub}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
