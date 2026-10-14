import Image from "next/image";
import Link from "next/link";

export default function CtaBannerSection() {
  return (
    <section className="bg-white px-6 py-12 sm:px-10 lg:px-[105px] lg:py-16">
      <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[20px] bg-[linear-gradient(145deg,#071426_0%,#0D1F35_60%,rgba(34,184,214,0.12)_100%)] p-10 sm:p-14 lg:p-20 shadow-xl">
        {/* Background Overlay Image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/solutions-ai-solutions/final-cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,184,214,0.15)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-[930px]">
          <h2 className="mb-5 font-dm-serif text-3xl font-normal leading-[1.2] text-white sm:text-4xl lg:text-[52px] lg:leading-[62px]">
            Ready to build trusted AI system?
          </h2>

          <p className="mb-10 max-w-[692px] font-manrope text-base font-normal leading-[30.8px] text-[#CBD5E1] sm:text-[17.6px]">
            Let&apos;s discuss your AI workflows, governance needs, and implementation timeline. We&apos;ll help you bind identity, delegated authority, and evidence to every AI action.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="#contact"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white transition-colors duration-200 hover:bg-blue-700 shadow-sm"
            >
              <Image
                src="/solutions-ai-solutions/cta-talk-icon.svg"
                alt=""
                width={18}
                height={18}
              />
              Talk to an identity expert
            </Link>
            <Link
              href="#architecture"
              className="inline-flex h-[51px] items-center gap-2.5 rounded-[6px] border border-white px-7 py-3.5 font-manrope text-[15.2px] font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Image
                src="/solutions-ai-solutions/cta-explore-icon.svg"
                alt=""
                width={18}
                height={18}
              />
              Explore the architecture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
