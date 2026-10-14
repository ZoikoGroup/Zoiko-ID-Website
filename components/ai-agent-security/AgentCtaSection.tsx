import Image from "next/image";
import Link from "next/link";

export default function AgentCtaSection() {
  return (
    <section id="ai-agent-cta" className="bg-white px-6 py-12 sm:px-10 lg:px-[105px]">
      <div
        className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center overflow-hidden rounded-[32px] bg-[#071426] px-6 py-14 text-center sm:px-12 sm:py-16 lg:p-20"
        style={{
          backgroundImage: `linear-gradient(159deg, rgba(7, 20, 38, 0.88) 0%, rgba(13, 35, 64, 0.82) 45%, rgba(10, 30, 56, 0.72) 75%, rgba(34, 184, 214, 0.16) 100%), url('/ai-agent-security/cta-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Figma Radial Blur Accent on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 z-0 h-[565px] w-[625px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.15)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center">
          <h2 className="mb-5 font-dm-serif text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Build AI agent trust from the ground up
          </h2>

          <p className="mb-10 max-w-[760px] font-manrope text-[17.6px] font-normal leading-[30.8px] text-[#CBD5E1]">
            Implement bounded identity, delegated authority, and continuous trust for AI agents in
            <br />
            your organization. Auditable. Revocable. Compliant.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="#contact"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white transition-colors duration-200 hover:bg-blue-600"
            >
              <Image
                src="/ai-agent-security/cta-expert-icon.svg"
                alt=""
                width={18}
                height={18}
              />
              Talk to an expert
            </Link>
            <Link
              href="#architecture"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Image
                src="/ai-agent-security/cta-docs-icon.svg"
                alt=""
                width={18}
                height={18}
              />
              View architecture docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

