import Image from "next/image";
import Link from "next/link";

export default function AgentHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#071426] px-6 py-20 sm:px-10 lg:px-[160px] lg:py-[105px]">
      {/* Background Graphic matching Figma */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/ai-agent-security/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(154deg,rgba(7,20,38,0.78)_0%,rgba(15,23,42,0.84)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1048px] flex-col items-center text-center">
        <h1 className="mb-6 font-dm-serif text-4xl font-normal leading-[1.15] text-white-solid sm:text-5xl lg:text-[72px] lg:leading-[82.8px]">
          Trusted identity and delegated
          <br />
          authority for AI agents.
        </h1>

        <p className="mb-8 max-w-[760px] font-manrope text-base font-normal leading-[27.2px] text-[#CBD5E1] sm:text-[17px]">
          Give AI agents bounded credentials, explicit mandates, and continuous trust evaluation.
          <br />
          Every action is auditable. Authority is revocable anytime.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
          <Link
            href="#architecture"
            className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-blue-700"
          >
            <Image
              src="/ai-agent-security/hero-explore-icon.svg"
              alt=""
              width={18}
              height={18}
            />
            Explore Architecture
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white-solid px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white-solid transition-colors duration-200 hover:bg-white-solid/10"
          >
            <Image
              src="/ai-agent-security/hero-expert-icon.svg"
              alt=""
              width={18}
              height={18}
            />
            Talk to expert
          </Link>
        </div>
      </div>
    </section>
  );
}
