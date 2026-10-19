import Image from "next/image";
import Link from "next/link";

export default function PrivacyCtaSection() {
  return (
    <section className="bg-white px-6 py-12 sm:px-10 lg:px-20 lg:py-16 xl:px-24">
      <div
        className="relative mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center overflow-hidden rounded-[32px] px-6 py-16 text-center sm:px-12 sm:py-24 lg:py-[130px]"
        style={{
          backgroundColor: "#071426",
          backgroundImage: `linear-gradient(159deg, rgba(7, 20, 38, 0.95) 0%, rgba(13, 31, 53, 0.90) 75%, rgba(34, 184, 214, 0.15) 100%), url('/trust-assurance-privacy/cta-bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Radial Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-[500px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,184,214,0.18)_0%,rgba(34,184,214,0)_70%)] blur-[60px]"
        />

        <div className="relative flex flex-col items-center gap-6">
          {/* Main Heading */}
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[60px]">
            Discuss privacy requirements with an
            <span className="block">identity expert.</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-[620px] font-manrope text-base font-normal leading-relaxed text-[#CBD5E1]">
            Bring your data-flow questions, your delegation model and your
            evidence expectations. For formal legal terms, use the Privacy
            Notice.
          </p>

          {/* Feature Badges with SVGs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xs">
              <Image
                src="/trust-assurance-privacy/cta-icon-architecture.svg"
                alt=""
                width={18}
                height={18}
                className="size-4 shrink-0"
              />
              <span className="font-manrope text-[14px] text-white">
                Designed architecture
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xs">
              <Image
                src="/trust-assurance-privacy/cta-icon-legal.svg"
                alt=""
                width={18}
                height={18}
                className="size-4 shrink-0"
              />
              <span className="font-manrope text-[14px] text-white">
                Legal terms via Privacy Notice
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:gap-5">
            <Link
              href="#enquiry-section"
              className="inline-flex items-center justify-center rounded-[6px] bg-[#2563EB] px-7 py-3.5 font-manrope text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:bg-blue-600 hover:shadow-xl hover:-translate-y-0.5"
            >
              Talk to an identity expert
            </Link>

            <Link
              href="#architecture-section"
              className="inline-flex items-center justify-center rounded-[6px] border border-white bg-transparent px-7 py-3.5 font-manrope text-[15px] font-bold text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Explore technical architecture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
